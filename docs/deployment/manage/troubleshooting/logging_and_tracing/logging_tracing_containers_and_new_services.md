# Logging and tracing for containers and new services

Starting CF200, a new mechanism is introduced for configuring log settings at runtime (without pod restarts) in Helm-based DX deployments. Log levels and trace strings are set in your custom-values.yaml file. [Configure and Access Logs](../../../../deployment/manage/container_configuration/troubleshooting/configure_access_helm_logs.md) gives more detail on how to configure logging in Helm amd how to access Kubernetes container logs. 

Prerequisite: Install and configure Content Composer, Digital Asset Management, and Presentation Designer to your HCL Digital Experience deployment.

-   **Trace string format**

    The trace strings must use the following format. Any text not in angled brackets ("<>") should not be changed:

    ```
    hcl.logging.<app-name>.client.<severity>.<client-hierarchy>.*=all
    ```

    The text strings in angled bracket placeholders must be replaced as described here.

-   **app-name**

    The application name is configured in the shared settings. The following values are currently in use:

    -   `medialibrary` - for Digital Asset Management
    -   `content-ui` - for Content Composer
    -   `presentation-designer` - for Presentation Designer

-   **severity**

    This presents the logger severity level. The values used are:

    -   `info`
    -   `debug`

-   **client-hierarchy**

    This specifies the subsections of the client application where tracing can be enabled. It is specified in dot-separated trace strings and is converted to colon-separated trace strings. The exact hierarchy depends on the client application. Examples include:

    -   `app.*`
    -   `app.redux.*`
    -   `app.redux.actions.*`

-   **Example trace strings**

    Following are some examples of full trace strings for Content Composer and Digital Asset Management and their results:

    -   `hcl.logging.content-ui.*=all` - Enables debug message logging for all files in the DAM application user interface source folder app/redux/actions. Specifically, the debug string `client:debug:app:redux:actions:*` is set for the DAM client logger.
    This tracing is enabled either permanently or just for the current HCL Digital Experience 9.5 container.

    HCL Digital Experience 9.5 uses the IBM® WebSphere Application Server trace facilities to create trace information.

    If you need detailed trace output of Content Composer or Digital Asset Management to troubleshoot a problem, follow these steps in the succeeding sections.


!!!note
    The following tracing configurations for enabling tracing only apply to client-side logging.
    The Warning **The configured trace state included the following specifications that do not match any loggers currently registered in the server: ''hcl.logging.content-ui.*=all:hcl.logging.medialibrary.*=all:hcl.logging.presentation-designer.*=all'' Ignore this message if the trace specifications ''hcl.logging.content-ui.*=all:hcl.logging.medialibrary.*=all'' are valid.** can be ignored.


## Enabling tracing permanently

1.  Start WebSphere Application Server.
2.  Open the WebSphere Integrated Solutions Console.
3.  Go to **Troubleshooting > Logs and Traces > HCL Digital Experience > Diagnostic Trace**.
4.  Click **Change log detail levels**.
5.  Select the **Enable Trace** check box.
6.  Enter the trace details you would like to enable in the **TraceSpecification** field.

    For example, to trace all events, use the following value:

    ```
    hcl.logging.content-ui.*=all 
    hcl.logging.medialibrary.*=all
    hcl.logging.presentation-designer.*=all
    ```

7.  Save the changes.
8.  Restart HCL Digital Experience 9.5 container session.

## Enabling tracing for the current HCL Digital Experience 9.5 session

1.  Click the **Administration** menu icon. Then, click **Tracing: Gather data about the site**.
2.  Enter any of the following values in the **Append these trace settings** field.

    For example, to trace all events, enter the following value:

    ```
    hcl.logging.content-ui.*=all 
    hcl.logging.medialibrary.*=all
    hcl.logging.presentation-designer.*=all
    ```


Once a trace string is added or removed in the Tracing portlet, the Digital Experience platform page containing the **Tracing portlet** application must be refreshed in the browser.


## Viewing logs in the browser console using developer tools
You can view the client logs using the developer tools in the web browser. The following image shows an example on how to view the logs of Content Composer.

![View Logs in Web Browser ](../../../../images/View_logs_in_console.png)


!!!important
    WebSphere Application Server consolidates the trace strings list by removing strings that are logically contained within others. For example, if you have a string `x.y.z.*=all` in the list, it disappears when you add `x.y.*=all`

## HCLSoftware U learning materials

To learn how to monitor, troubleshoot, and contact Support about issues you encounter with DX, go to [Monitoring and Troubleshooting](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3436){target="_blank”}. You can try it out using the [Monitoring and Troubleshooting Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Monitoring_and_Troubleshooting_Lab.pdf){target="_blank”} and corresponding [Monitoring and Troubleshooting Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Monitoring_and_Troubleshooting_Lab_Resources.zip){target="_blank”}.

???+ info "Related information"  
    -   [Troubleshooting your Helm deployment](../../../../deployment/manage/container_configuration/troubleshooting/helm_troubleshooting.md)
