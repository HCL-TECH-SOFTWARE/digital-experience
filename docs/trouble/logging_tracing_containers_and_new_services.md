# Logging and tracing for containers and new services

The following table outlines the tracing options that are used to capture logging and tracing for HCL Digital Experience 9.5 container-based services with container update CF181 and later releases.

This table outlines the server-side tracing available for HCL Digital Experience 9.5 CF181 and later containers.

|Container|Log Location|Default Logging|Default Logging Amount|
|---------|------------|---------------|----------------------|
|DX Core|/opt/HCL/wp\_profile/logs/HCL Portal and HCL Web Content Manager|`*=info`|Small|
|DX Remote Search|/opt/HCL/AppServer/profiles/rs\_profile/logs/server1|`*=info`|Small|
|Open LDAP|/var/dx-openldap/log/slapd.log|`stats log connections/operations/results`|Small|
|Cloud Operator|stdout and stderr|`Info`|Large|
|Media Library Operator|stdout and stderr|`Info`|Large|
|Ambassador|stdout and stderr|`Info`|Small|
|Experience API|stdout and stderr|`*=Debug`|Extra-Large|
|Digital Asset Management \(DAM\)|stdout and stderr|`*=Debug`|Extra-Large|
|Content Composer|stdout and stderr|`*=Debug`|Large|
|Postgres|stdout and stderr

 Runtime: /var/lib/pgsql/11/data/log

|`*=Debug`|Medium|

If you're using the Experience API, Digital Asset Management, or Content Composer containers \(where you have Digital Asset Management and/or Content Composer enabled\) and are using a logging driver that logs to a file, you must configure log rotation for your Kubernetes environment. See the vendor documentation of your Kubernetes environment on how to configure this.

**Note:** If you do not configure log rotation, you must frequently clean up the logs to prevent running out of disk space.

Client-side browser tracing for these container environments can also be enabled when debugging user interface issues, and is described as follows.

**Tip:**

-   **Transaction log \(tranlog\)**.

    With multiple instances of Digital Experience 9.5 containers writing to a shared **[transaction log](https://www.ibm.com/support/knowledgecenter/SSEQTP_9.0.5/com.ibm.websphere.base.doc/ae/tjta_settlog.md)** \(tranlog\) directory, data corruption could happen resulting to DX server start-up issues. To avoid data corruption, beginning with CF192, the default deployment creates individual 1 GB PersistentVolumes \(pvs\) and associated PersistentVolumeClaims \(pvcs\) for each DX 9.5 instance. This behavior is configured with the following values in the properties file used for deployment.

    -   `dx.tranlogging: true` - Set this value to `false` so that individual pvs for tranlogs are not created at the deployment time.
    -   `dx.tranlogging.reclaim: Delete` - Kubernetes setting for handling volumes when the deployment is removed.
    -   `dx.tranlogging.stgclass: gp2` - Kubernetes default storage class for the environment. This is dependent on the Kubernetes flavor. If the value is empty, the default is gp2.
    -   `dx.tranlogging.size: 4G` - Size of the volume created. If the value set is invalid for the underlying storage environment, the default is 1G.
-   **Logging configuration for the DX core**
    -   `dx.splitlogging: true` - Value examples \(true, false, and empty\). If the value is empty, the default is false.
    -   `dx.logging.reclaim: Delete` - Setting for handling volumes when the deployment is removed.
    -   `dx.logging.stgclass: dx-deploy-stg` - Storage class is dependent on the Kubernetes flavor. If the value is empty, the default is gp2.
    -   `dx.logging.size: 2G` - Maximum logging size. If the value is empty, the default is 1G.

Enable the use of IBM WebSphere® Application Server trace facilities to create trace information for Content Composer and Digital Asset Management, integrated via the Digital Asset Management portlet in HCL Digital Experience 9.5 Container Update CF181 and later releases. Logging for these applications is enabled hierarchically for as much or as little of the application as needed.

**Note:** In order to improve runtime performance, beginning with HCL Digital Experience 9.5 Container Update CF192, the [DX Docker core image](../containerization/docker.md) is revised so that the /opt/HCL/wp\_profile/temp directory is a now a symbolic link to /opt/HCL/PortalServer/temp. This means that the output usually written to /opt/HCL/wp\_profile/temp \(including servlet cache, `extensionregistry` storage, and `osgi_instance_location` data\) now writes to /opt/HCL/PortalServer/temp. Accessing this new temp location is possible only from within the DX container as the /opt/HCL/wp\_profile/temp directory no longer exists in the persisted profile file system.

Prerequisite: Install and configure Content Composer and Digital Asset Management to your Digital Experience 9.5 CF181 and later deployment.

-   Documentation resource: [Install Content Composer and Digital Asset Management](../containerization/install_config_cc_dam.md)

-   **Trace string format**

    The trace strings must use the following format. Any text not in angled brackets \("<\>"\) should not be changed:

    ```
    hcl.logging.<app-name>.client.<severity>.<client-hierarchy>.*=all
    ```

    The text strings in angled bracket placeholders must be replaced as described here.


-   **app-name**

    The application name is configured in the Digital Asset Management shared settings. The following values are currently in use:

    -   `medialibrary` - for Digital Asset Management
    -   `content-ui` - for Content Composer

-   **severity**

    This presents the logger severity level. The values used are:

    -   `info`
    -   `debug`

-   **client-hierarchy**

    This specifies the subsections of the client application where tracing can be enabled. It is specified in dot-separated trace strings and is converted by the Digital Asset Management to colon-separated trace strings. The exact hierarchy depends on the client application. Examples include:

    -   `app.*`
    -   `app.redux.*`
    -   `app.redux.actions.*`

-   **Example trace strings**

    Following are some examples of full trace strings for Content Composer and Digital Asset Management and their results:

    -   `hcl.logging.content-ui.*=all` - Enables debug message logging for all files in the DAM application user interface source folder app/redux/actions. Specifically, the debug string `client:debug:app:redux:actions:*` is set for the DAM client logger.
    This tracing is enabled either permanently or just for the current HCL Digital Experience 9.5 container.

    HCL Digital Experience 9.5 uses the IBM® WebSphere Application Server trace facilities to create trace information.

    If you need detailed trace output of Content Composer or Digital Asset Management to troubleshoot a problem, follow these steps in the succeeding sections.


## Permanently enable tracing

Procedure

1.  Start WebSphere Application Server.
2.  Open the WebSphere Integrated Solutions Console.
3.  Go to **Troubleshooting \> Logs and Traces \> HCL Digital Experience \> Diagnostic Trace**.
4.  Click **Change log detail levels**.
5.  Select the **Enable Trace** check box.
6.  Enter the trace details you would like to enable in the **TraceSpecification** field.

    For example, to trace all events, use the following value:

    ```
    hcl.logging.content-ui.*=all 
    hcl.logging.medialibrary.*=all
    ```

7.  Save the changes.
8.  Restart HCL Digital Experience 9.5 container session.

## Enable tracing just for the current HCL Digital Experience 9.5 session

Procedure

1.  Click the **Administration** menu icon. Then, click **Portal Analysis \> Enable Tracing**.
2.  Enter any of the following values in the **Append these trace settings** field,

    For example, to trace all events, enter the following value:

    ```
    hcl.logging.content-ui.*=all 
    hcl.logging.medialibrary.*=all
    ```


Once a trace string is added or removed in the Tracing portlet, the Digital Experience platform page containing the **Tracing portlet** application must be refreshed in the browser.

**Important:** WebSphere Application Server consolidates the trace strings list by removing strings that are logically contained within others. For example, if you have a string `x.y.z.*=all` in the list, it disappears when you add `x.y.*=all`

