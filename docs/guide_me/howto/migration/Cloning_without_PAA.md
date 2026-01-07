# Clone a Portal 8.5, 9.0, or 9.5 Environment without Portal Application Archive (PAA)

## Applies to

HCL Digital Experience v8.5 and later

## Introduction

This article explains how to clone a Portal environment without using a Portal Application Archive (PAA).

For clarity:

- **Source system** – the environment you are copying from  
- **Target system** – the environment you are copying to


## Instructions

### Installing or Upgrading the Target Portal

Prepare the target Portal environment so it matches the source system:

1. Install or upgrade the target Portal to the same level as the source system.  
2. Upgrade WebSphere Application Server (WAS) on the target system to match the source system.  
3. If clustering is required, configure it now or later.  
4. Ensure the target Portal includes a profile, not just binaries.  
5. Verify that both environments run the same Portal and WAS versions, preferably at the latest levels.  

### Configuring Security

Set up security on the target Portal:

1. Configure security on the target Portal.  
2. You may use a different user repository than the source system.  

### Performing DB Transfer

Transfer the database on the target Portal:

1. Run DBTransfer on the target Portal to DB2, Oracle, or SQL Server.  
2. For development environments, you may use Derby.  

### Installing Extensions (If Applicable)

#### WCM Multilingual Extensions

- Install these extensions if needed.  
- For Portal 8.5 and later, MLS is installed automatically; run only configuration tasks.  

#### Content Template Catalog (CTC)

- Install the same CTC version as on the source system.  

### Exporting from the Source Portal

1. Export Base Virtual Portal:  
   Use `XMLAccess` with `ExportRelease.xml` to export the base virtual Portal:
    ```text
   c:\IBM\WebSphere\wp_profile\PortalServer\bin\xmlaccess.bat -user wpsadmin -password mypassword -in c:\IBM\WebSphere\PortalServer\doc\xml-samples\ExportRelease.xml -out c:\temp\baseExport.xml -url http://localhost:10039/wps/config
    ```
2. Export Virtual Portals: 
Use XMLAccess with `ExportUniqueRelease.xml` for each virtual portal.
    ```text
    c:\IBM\WebSphere\wp_profile\PortalServer\bin\xmlaccess.bat -user wpsadmin -password mypassword -in c:\IBM\WebSphere\PortalServer\doc\xml-samples\ExportUniqueRelease.xml -out c:\temp\vp1Export.xml -url http://sourcesystem:10039/wps/config/vpcontextroot
    ```
Repeat this step for all other virtual portals.
---

## Importing to the Target Portal

1. Run `empty-portal`:
    On the target system, run the `empty-portal` configuration task.

    ```text
    c:\IBM\WebSphere\wp_profile\ConfigEngine\ConfigEngine.bat empty-portal
    ```

2. Run Cleanup Task:
    Run the `XMLAccess` cleanup task on the target Portal.

    ```text
    c:\IBM\WebSphere\wp_profile\PortalServer\bin\xmlaccess.bat -user wpsadmin -password mypassword -in c:\IBM\WebSphere\PortalServer\doc\xml-samples\Task.xml -out c:\temp\task_result.xml -url http://targetsystem:10039/wps/config
    ```

3. Copy and Deploy Custom Files:

    1. Copy and deploy all custom EAR files from the source system to the target system. This includes custom themes or portlets.

    2. Copy the `<Profile>\PortalServer\deployed\archive` directory from the source to the target system.

    !!! note
        It is assumed that your theme is in an EAR file. If your theme is in the WebDAV store, use the configuration task to export and import the custom theme.

4. Configure WebSphere:
    Create any additional required configuration items in WebSphere Application Server. This includes shared libraries, URLs, name space bindings, and theme settings in WP Dynamic ContentSpot Mappings.

5. Copy Filesystem Artifacts:
    Copy required files like JAR and configuration files (`log4j.xml`, etc.) to the target filesystem.

6. Configure Syndication Properties:
    Set the properties required for syndication in `WCM ConfigService`. For example, enable the member fixer to run as part of syndication.

7. Import Base Virtual Portal:
    Use `XMLAccess` to import `baseExport.xml` into the base virtual Portal on the target.

    ```text
    c:\IBM\WebSphere\wp_profile\PortalServer\bin\xmlaccess.bat -user wpsadmin -password mypassword -in c:\temp\baseExport.xml -out c:\temp\baseExport_result.xml -url http://targetsystem:10039/wps/config
    ```

8. Update WCM:
    Run the `update-wcm` configuration task on the target Portal.

    ```text
    c:\IBM\WebSphere\wp_profile\ConfigEngine\ConfigEngine.bat update-wcm
    ```

9. Activate Portlets:
    If in a cluster, run `activate-portlets`.

    ```text
    c:\IBM\WebSphere\wp_profile\ConfigEngine\ConfigEngine.bat activate-portlets
    ```

10. Import Personalization Rules (Optional):
    If you use personalization, export the PZN rules from the source system and import them to the target system. You can do this using the Personalization Administration Portlet Export and Import functions.

11. Verify Base Portal:
    Verify that the base virtual Portal is working correctly.
---

## Post-Migration Tasks

1. Restart Portal:  
   Restart the Portal. Check for errors in `SystemOut.log` and address any missed artifacts.

2. Set Up Syndication:  
   Set up syndication for the appropriate libraries between the source and target systems. This includes the Multi-Lingual configuration library.

   !!!note
       You must also set up syndication between your source system virtual portals and the target system virtual portals. If managed pages are disabled, the libraries are shared across virtual portals.

3. Set Library Permissions:  
   After the initial syndication run, manually configure the library permissions because they are not syndicated automatically.

4. Regenerate Web Server Plugin (Optional):  
   If you have a web server, regenerate and propagate the web server plugin configuration.
