# Cloning a Portal 8.5, 9.0 and 9.5 environment without PAA

## Applies to

> HCL Digital Experience v8.5 and later

##  Introduction

For naming purposes this process calls the system that you are copying from, the "source" system and the system you are copying to, the "target" system.

## Instructions

1. **Install/Upgrade Target Portal:**
    Install or upgrade the target Portal to the same precise level as the source system.  Also upgrade the target to the WAS level of the source system. This step could include clustering if needed (you can also still cluster later). Basically, the target and source should have exactly the same Portal and WAS level and preferably be at the latest of both. It should also be noted that the target Portal should have a profile (and not just the Binaries) installed.

2. **Configure Security:**
    Configure security on the target Portal. This may involve using a different user repository from the source.

3. **Perform DBTransfer:**
    DBTransfer to DB2, Oracle or SQLServer on the target Portal. The target could also be "Derby" if the target is a development system.

4. **Install Extensions (if applicable):**
    * **WCM Multilingual Extensions:** If needed, install these extensions. For Portal 8.5 and later, MLS is automatically installed, and you only need to run the configuration tasks.
    * **Content Template Catalog (CTC):** Install the same version of CTC as on your source system.

## Exporting from the Source Portal

1. **Export Base Virtual Portal:**
    Use `XMLAccess` with `ExportRelease.xml` to export the base virtual Portal from the source.

    ```text
    c:\IBM\WebSphere\wp_profile\PortalServer\bin\xmlaccess.bat -user wpsadmin -password mypassword -in c:\IBM\WebSphere\PortalServer\doc\xml-samples\ExportRelease.xml -out c:\temp\baseExport.xml -url http://localhost:10039/wps/config
    ```

2. **Export Virtual Portals:**
    Use `XMLAccess` with `ExportUniqueRelease.xml` for each virtual portal.

    ```text
    c:\IBM\WebSphere\wp_profile\PortalServer\bin\xmlaccess.bat -user wpsadmin -password mypassword -in c:\IBM\WebSphere\PortalServer\doc\xml-samples\ExportUniqueRelease.xml -out c:\temp\vp1Export.xml -url http://sourcesystem:10039/wps/config/vpcontextroot
    ```

    Repeat this step for all other virtual portals.

---

## Importing to the Target Portal

1. **Run `empty-portal`:**
    On the target system, run the `empty-portal` configuration task.

    ```text
    c:\IBM\WebSphere\wp_profile\ConfigEngine\ConfigEngine.bat empty-portal
    ```

2. **Run Cleanup Task:**
    Run the `XMLAccess` cleanup task on the target Portal.

    ```text
    c:\IBM\WebSphere\wp_profile\PortalServer\bin\xmlaccess.bat -user wpsadmin -password mypassword -in c:\IBM\WebSphere\PortalServer\doc\xml-samples\Task.xml -out c:\temp\task_result.xml -url http://targetsystem:10039/wps/config
    ```

3. **Copy and Deploy Custom Files:**
    * Copy and deploy all custom **EAR files** (e.g., custom themes or portlets) from the source to the target.

    !!!note
        It is assumed here that you had your theme in an ear file. If you have your theme in webdav store use the config task to export and import the custom theme.

    * Copy the `<Profile>\PortalServer\deployed\archive` directory from the source to the target system.

4. **Configure WebSphere:**
    Create other required configuration items in WebSphere Application Server - e.g. shared libraries, URLs, Name Space Bindings, Theme settings in WP Dynamic ContentSpot Mappings, etc.

5. **Copy Filesystem Artifacts:**
    Copy required files like JAR and configuration files (`log4j.xml`, etc.) to the target filesystem.

6. **Configure Syndication Properties:**
    Set the properties required for syndication in `WCM ConfigService` (e.g., enable member fixer to run as part of syndication).

7. **Import Base Virtual Portal:**
    Use `XMLAccess` to import `baseExport.xml` into the base virtual Portal on the target.

    ```text
    c:\IBM\WebSphere\wp_profile\PortalServer\bin\xmlaccess.bat -user wpsadmin -password mypassword -in c:\temp\baseExport.xml -out c:\temp\baseExport_result.xml -url http://targetsystem:10039/wps/config
    ```

8. **Update WCM:**
    Run the `update-wcm` configuration task on the target Portal.

    ```text
    c:\IBM\WebSphere\wp_profile\ConfigEngine\ConfigEngine.bat update-wcm
    ```

9. **Activate Portlets:**
    If in a cluster, run `activate-portlets`.

    ```text
    c:\IBM\WebSphere\wp_profile\ConfigEngine\ConfigEngine.bat activate-portlets
    ```

10. **Import Personalization Rules (Optional):**
    If you use personalization, export the PZN rules from the source system and import them to the target server - this can e.g. be done using the Personalization Administration Portlet Export and Import functions.

11. **Verify Base Portal:**
    Verify that the base virtual Portal is working correctly.

---

## Virtual Portal Configuration (If Applicable)

1. **Create Virtual Portals:**
    Create your virtual portals on the target system using the `create-virtual-portal` task. You can retrieve the necessary parameters from the source using `list-all-virtual-portals`.

    ```text
    c:\IBM\WebSphere\wp_profile\ConfigEngine\ConfigEngine.bat create-virtual-portal -DWasPassword=password -DPortalAdminPwd=password -DVirtualPortalTitle=VirtualPortalTitle -DVirtualPortalContext=VirtualPortalContext -DVirtualPortalID=VirtualPortalShortID -DVirtualPortalObjectId=VirtualPortalOID -DVirtualPortalRealm=VirtualPortalRealm -DVirtualPortalHostName=VirtualPortalHostName
    ```

2. **Import Virtual Portal XML:**
    Import the XML file for each virtual portal from the source using `XMLAccess`. Insure that the VP context root in the XMLAccess command matches the VP name in the "/wps/config/" XMLAccess statement.

    ```text
    c:\IBM\WebSphere\wp_profile\PortalServer\bin\xmlaccess.bat -user wpsadmin -password mypassword -in c:\temp\vp1Export.xml -out c:\temp\vp1Export_result.xml -url http://targetsystem:10039/wps/config/vpcontextroot
    ```

    Repeat for all virtual portals.

---

## Post-Migration Tasks

1. **Restart Portal:**
    Restart the Portal, check for errors in `SystemOut.log`, and address any missed artifacts.

2. **Set Up Syndication:**
    Set up syndication for the appropriate libraries between the source and target systems. This includes the Multi-Lingual configuration library.

    !!!note
        You will need to set-up syndication as well between your source system virtual Portals to the target system virtual Portals (unless you have managed pages disabled - then the libraries are shared across virtual Portals).

3. **Set Library Permissions:**
    After the initial syndication run, manually set up the library permissions, as they are not syndicated.

4. **Regenerate Web Server Plugin (Optional):**
    If you have a web server, regenerate and propagate the web server plugin configuration.
