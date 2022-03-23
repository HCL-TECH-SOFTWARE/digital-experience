# Container Staging

This section describes how to move from an existing HCL Portal environment to a containerized Digital Experience environment.

## Prerequisite

The target environment that is existing in a customer-owned Kubernetes environment requires HCL Digital Experience 9.5 and IBM WebSphere Application Server 9.0.5. The HCL Digital Experience and IBM WebSphere Application Server product versions for the source and target environment must be at the same level, though it is sufficient to be on IBM WebSphere Application Server 8.5.5.x with JDK 8.

## Export the source HCL Portal server

Follow these steps to export the source HCL Portal server.

1.  Upgrade the source environment.

    Using the IBM Installation Manager, upgrade the HCL Portal product to CF17 or later and HCL Portal 9.5.

2.  Log in to the machine where the source environment is located and set the `ulimit -n` to **24000**.

    For example, `ulimit - n 24000`.

3.  Verify that the HCL Portal server is started.
4.  Navigate to the PortalServer/bin directory to export the base server.

```
/opt/HCL/wp_profile/PortalServer/bin/xmlaccess.sh -url http://mysource.machine.fqdn:10039/wps/config -user <your DX admin user> –password <your DX admin user password> –in /opt/HCL/PortalServer/doc/xml-samples/ExportRelease.xml -out /tmp/ExportReleaseResults.xml
```

5.  Save the output XML file \(ExportReleaseResults.xml\) to an external or shared drive, for use later when importing to the target environment.
6.  Export the content for each Virtual Portal that exists in the source environment, renaming each file uniquely for easy identification.

```
/opt/HCL/wp_profile/PortalServer/bin/xmlaccess.sh -url http://mysource.machine.fqdn:10039/wps/config/vpcontextroot -user <your DX admin user> –password <your DX admin user password> –in /opt/HCL/PortalServer/doc/xml-samples/ExportUniqueRelease.xml -out /tmp/ExportVP1Results.xml
```

7.  Save the Virtual Portal output files to an external or shared drive for later use when importing to the target environment.
8.  Save the /opt/HCL/wp\_profile/PortalServer/deployed/archive directory files to an external or shared drive, for later use when importing to the target environment.
9.  If you are using PZN rules, export the PZN rules using the Personalization Administration Portlet functions and save the generated Workspace.nodes file to an external or shared drive, for later use when importing to the target environment.
    1.  Log in to the HCL Portal Home Page.
    2.  Navigate to **Personalization** \> **Business Rules** \> **Extra Actions** \> **Export**.
    3.  Save the output file.
10. When applicable, save all custom files \(application and theme EAR files, WAR files\) to an external or shared drive, for use later when importing to the target environment.

## Import the source HCL Portal server

Log in to the machine from where you will access your HCL Portal Container.

1.  Log in to the machine from where you will access your HCL Portal Container.
2.  Download, install, and log in to the command line client for your Kubernetes environment according to the client instructions. For OpenShift, that is Red Hat OpenShift Command Line Client. For Non OpenShift, that is the Kubectl command line tool.
3.  With only a single instance of an HCL Portal container running, exec in, and ensure the `ulimit -n` value is at least **24000**.
4.  Empty the base HCL Portal server.

    1.  OpenShift:

```
oc exec –it dx-deployment-nnnnn /bin/bash
```

Non OpenShift:

```
kubectl exec –it dx-deployment-nnnnn /bin/bash
```

    2.  ```
/opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh empty-portal –DWasPassword=<your WAS admin user password> –DPortalAdminPwd=<your DX admin user password>
```

    The output displays a **BUILD SUCCESSFUL** message. If not, check the /opt/HCL/wp\_profile/ConfigEngine/log/ConfigTrace.log for errors.

5.  Clean up the remaining content in the target server by using XML Access:

    ```
    /opt/HCL/wp_profile/PortalServer/bin/xmlaccess.sh -url http://my.target.fqdn/wps/config -user <your DX admin user> –password <your DX admin user password> –in /opt/HCL/PortalServer/doc/xml-samples/Task.xml -out /tmp/task_result.xml
    ```

    The output displays a **BUILD SUCCESSFUL** message. If not, check the /opt/HCL/wp\_profile/logs/WebSphere\_Portal/SystemOut.log for errors.

6.  Copy the output XML files, custom EAR and WAR files, Workspace.nodes file, and the ../deployed/archive directory files to a location on this local machine, making sure to preserve the file names and structure from the external or shared drive and then into the DX container.
    1.  ```
cp /drive/* /tmp/
```

    2.  OpenShift:

        ```
        oc cp /tmp/* dx-deployment-nnnnn:/tmp/
        ```

        Non OpenShift:

        ```
        kubectl cp /tmp/* dx-deployment-nnnnn:/tmp/
        ```

7.  Create a directory under /opt/HCL/wp\_profile to house any custom code or shared libraries.

    1.  ```
mkdir –p /opt/HCL/wp_profile/customApps
```

    **Note:** In any containerized environment, all custom code and shared libraries need to exist under the persisted profile volume.

8.  Move the copied files to the appropriate locations in the container.
    1.  ```
mv /tmp/custom.ear /opt/HCL/wp_profile/customApps/
```

    2.  ```
mv /tmp/deployed/archive/* /opt/HCL/wp_profile/PortalServer/deployed/archive/
```

9.  Deploy custom applications, predeployed portlets, or themes.
10. Configure any required syndication properties in the WCM ConfigService. For example, enabling memberfixer to run during syndication.
11. Create any required configuration items. For example, URLs, namespace bindings, etc.
12. Import the source server base content into the HCL Portal server in the container.

    1.  OpenShift:

        ```
        oc exec –it dx-deployment-nnnnn /bin/bash
        ```

        Non OpenShift:

        ```
        kubectl exec –it dx-deployment-nnnnn /bin/bash
        ```

    2.  ```
/opt/HCL/wp_profile/PortalServer/bin/xmlaccess.sh -url http://my.target.fqdn/wps/config -user <your DX admin user> -password <your DX admin user password> -in /tmp/ExportReleaseResults.xml -out /tmp/ExportReleaseResults_ImportResult.xml
```

    The output displays a successful execution. If not, check /tmp/ExportReleaseResults\_ImportResult.xml for errors.

13. Update the WCM content in the HCL Portal server instance:

    ```
    /opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh update-wcm -DWasPassword=<your WAS admin user password> -DPortalAdminPwd=<your DX admin user password>
    ```

    The output displays a **BUILD SUCCESSFUL** message. If not, check the /opt/HCL/wp\_profile/ConfigEngine/log/ConfigTrace.log for errors.

14. If you are using PZN rules, import the PZN rules by using the Personalization Administration Portlet functions.
    1.  Log in to the HCL Portal home page.
    2.  Navigate to **Personalization** \> **Business Rules** \> **Extra Actions** \> **Import**.
    3.  Browse to the /tmp/Workspace.nodes file and click **Import**.
15. Log in to the HCL Portal home page and verify that the base server is functioning correctly:

    ```
    http://my.target.fqdn/wps/portal
    ```

    Check the /opt/HCL/wp\_profile/logs/WebSphere\_Portal/SystemOut.log to ensure that there are no startup errors.

16. Create all of your Virtual Portals.

    ```
    /opt/HCL/wp_profile/ConfigEngine/ConfigEngine.sh create-virtual-portal -DWasPassword=<your WAS admin user password> -DPortalAdminPwd=<your DX admin user password> -DVirtualPortalTitle=VirtualPortal1 -DVirtualPortalRealm=VirtualPortal1Realm -DVirtualPortalContext=VirtualPortal1
    ```

17. For each Virtual Portal, import the content using XML Access. Make sure that the context root and the Virtual Portal name both match in the XML Access command.

    ```
    /opt/HCL/wp_profile/PortalServer/bin/xmlaccess.sh -url http://my.target.fqdn/wps/config/VirtualPortal1 -user <your DX admin user> -password <your DX admin user password> -in /tmp/ExportVP1Results.xml -out /tmp/ExportVP1Results_ImportResults.xml
    ```

18. Restart the HCL Portal server and check /opt/HCL/wp\_profile/logs/WebSphere\_Portal/SystemOut.log to ensure no startup errors.

## Syndicate the source and target environments

Follow these steps to syndicate the source and target environments.

**Note:** If you have larger libraries, the default database must be transferred to any of the supported databases. For information about supported databases, see [Database Management Systems](../config/config_dbms.md). If you want to know more about transferring the default database of the DX 9.5 Container to IBM DB2, see [Transfer HCL Digital Experience 9.5 container default database to IBM DB2](cw_containerdbtransfer_ibm_db2.md).

1.  Since the Kubernetes deployment typically allows only SSL traffic, you need to update the SSL Signer certificates for the Syndicator and Subscriber setups so that they can communicate with each other. To do this, log into the WAS console \(`https://machine_name/ibm/console` or `https://machine_name:port/ibm/console`\) and go to the **Signer certificates** page that is available in the **Security \> SSL certificate and key management** menu:

    ![Signer certificates page](../images/signer_certificates_page.png)

2.  Select **Retrieve from port** and create the signer certificate, and then save the certificate.
3.  Log in to HCL Portal instance to configure syndication: http://my.target.fqdn/wps/portal.

    Navigate to **Administration** \> **Security** \> **Credential Vault** \> **Add a Vault Slot**.

4.  On the **Credential Vault** page, select **New** and provide the following:
    1.  **Name** - enter the name for the vault slot.
    2.  **Vault resource associated with vault slot** - select **new** and enter the vault resource name.
    3.  **Vault slot is shared** check box - tick this check box and provide the credentials for a user that has appropriate access on the source/syndication system: **Shared userid**, **Shared password**, and **Confirm password**.
    4.  Click **OK** to save the changes.
5.  Navigate to **Portal Content** \> **Subscribers**. Click **Subscribe Now**.
6.  In the **Subscribe to a syndicator** pop-up, provide the following:
    1.  **Syndicator URL**
    2.  **Syndicator Name**
    3.  **Subscriber Name**
    4.  **Credential Vault Slot** created in step 2.
    5.  Click **Next**.
7.  Select the libraries to syndicate and the **Scope** of the syndication.
8.  Click **Finish**.
9.  If you have Virtual Portals, you must repeat the syndication steps for each Virtual Portal.
10. If needed, configure library permissions when syndication is completed.

    **Note:** As with syndication between on-premise setups, it is possible to do a one-way syndication from an earlier to a later release.

    You do not need to disable Practitioner Studio to do this syndication.


**Parent topic:**[Digital Experience Application deployment](../containerization/ci_cd.md)

