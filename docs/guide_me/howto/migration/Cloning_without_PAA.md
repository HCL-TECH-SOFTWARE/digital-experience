# How to clone a Portal 8.5, 9.0 and 9.5 environment without PAA

## Applies to

> HCL Digital Experience v8.5 and later

##  Introduction

This article explains how to clone a Portal environment without using a Portal Application Archive (PAA). This process refers to the system you are copying from as the **source** system and the system you are copying to as the **target** system.

## Instructions

1. Install or upgrade the target Portal.

    1. Install or upgrade the target Portal to the same level as the source system.
    2. Upgrade the target WebSphere Application Server (WAS) to match the source system.
    3. If clustering is required, configure it now or later.
    4. Ensure that the target Portal includes a profile and not just the binaries.
    5. Both environments should run the same Portal and WAS versions, preferably at the latest levels.

2. Configure security on the target Portal. You may use a different user repository than the source system.

3. Run DBTransfer on the target Portal to DB2, Oracle, or SQL Server. If the target environment is for development, you may use Derby.

4. (If applicable) Install extensions.

    - WCM Multilingual extensions: For Portal 8.5 and later, MLS is installed automatically. Only run the configuration tasks.
    - Content Template Catalog (CTC): Install the same CTC version that is installed on your source system.

5. Export from the source Portal

    1. For the base virtual Portal, use `XMLAccess` with `ExportRelease.xml` to export the base virtual Portal from the source.

        ```text
        c:\IBM\WebSphere\wp_profile\PortalServer\bin\xmlaccess.bat -user wpsadmin -password mypassword -in c:\IBM\WebSphere\PortalServer\doc\xml-samples\ExportRelease.xml -out c:\temp\baseExport.xml -url http://localhost:10039/wps/config
        ```

    2. For other virtual Portals, use `XMLAccess` with `ExportUniqueRelease.xml` to export each virtual Portal.

        ```text
        c:\IBM\WebSphere\wp_profile\PortalServer\bin\xmlaccess.bat -user wpsadmin -password mypassword -in c:\IBM\WebSphere\PortalServer\doc\xml-samples\ExportUniqueRelease.xml -out c:\temp\vp1Export.xml -url http://sourcesystem:10039/wps/config/vpcontextroot
        ```

        Repeat this step for all other virtual Portals.

6. Import to the target Portal.

    1. On the target system, run the `empty-portal` configuration task:

        ```text
        c:\IBM\WebSphere\wp_profile\ConfigEngine\ConfigEngine.bat empty-portal
        ```

    2. Run the `XMLAccess` cleanup task on the target Portal:

        ```text
        c:\IBM\WebSphere\wp_profile\PortalServer\bin\xmlaccess.bat -user wpsadmin -password mypassword -in c:\IBM\WebSphere\PortalServer\doc\xml-samples\Task.xml -out c:\temp\task_result.xml -url http://targetsystem:10039/wps/config
        ```

    3. Copy the `<Profile>\PortalServer\deployed\archive` directory from the source to the target system to transfer all custom EAR files (such as custom themes or portlets).

        !!!note
            This step assumes your theme is in an EAR file. If your theme is in the WebDAV store, use the configuration task to export and import it.

    4. Create other required configuration items in WebSphere Application Server (for example, shared libraries, URLs, namespace bindings, or theme settings in WP Dynamic ContentSpot Mappings)

    5. Copy required files such JAR and configuration files (for example, `log4j.xml`) to the target filesystem.

    6. Set the properties required for syndication in `WCM ConfigService` (for example, enable Member Fixer to run as part of syndication).

    7. Use `XMLAccess` to import `baseExport.xml` into the base virtual Portal on the target:

        ```text
        c:\IBM\WebSphere\wp_profile\PortalServer\bin\xmlaccess.bat -user wpsadmin -password mypassword -in c:\temp\baseExport.xml -out c:\temp\baseExport_result.xml -url http://targetsystem:10039/wps/config
        ```

    8. Run the `update-wcm` configuration task on the target Portal:

        ```text
        c:\IBM\WebSphere\wp_profile\ConfigEngine\ConfigEngine.bat update-wcm
        ```

    9. If the server is in a clustered environment, run the `activate-portlets` task.

        ```text
        c:\IBM\WebSphere\wp_profile\ConfigEngine\ConfigEngine.bat activate-portlets
        ```

    10. (Optional) If you use personalization, export the PZN rules from the source system and import them to the target server. You can do this using the Personalization Administration Portlet Export and Import functions.

    11. Verify that the base virtual Portal is working correctly.

7. (If applicable) Configure virtual portals.

    1. Create your virtual Portals on the target system using the `create-virtual-portal` task. You can retrieve the necessary parameters from the source using `list-all-virtual-portals`.

        ```text
        c:\IBM\WebSphere\wp_profile\ConfigEngine\ConfigEngine.bat create-virtual-portal -DWasPassword=password -DPortalAdminPwd=password -DVirtualPortalTitle=VirtualPortalTitle -DVirtualPortalContext=VirtualPortalContext -DVirtualPortalID=VirtualPortalShortID -DVirtualPortalObjectId=VirtualPortalOID -DVirtualPortalRealm=VirtualPortalRealm -DVirtualPortalHostName=VirtualPortalHostName
        ```

    2. Import the XML file for each virtual Portal from the source using `XMLAccess`. Insure that the VP context root in the XMLAccess command matches the VP name in the `/wps/config/` XMLAccess statement.

        ```text
        c:\IBM\WebSphere\wp_profile\PortalServer\bin\xmlaccess.bat -user wpsadmin -password mypassword -in c:\temp\vp1Export.xml -out c:\temp\vp1Export_result.xml -url http://targetsystem:10039/wps/config/vpcontextroot
        ```

        Repeat this step for all other virtual Portals.

8. Perform post-migration tasks.

    1. Restart the Portal, check for errors in `SystemOut.log`, and address any missed artifacts.

    2. Set up syndication for the appropriate libraries between the source and target systems. This includes the Multilingual configuration library.

        !!!note
            You must also set up syndication between your source system virtual Portals and the target system virtual Portals. If managed pages are disabled, the libraries are shared across virtual Portals.

    3. After the initial syndication run, manually configure the library permissions because they are not syndicated automatically.

    4. (Optional) If you have a web server, regenerate and propagate the web server plugin configuration.
