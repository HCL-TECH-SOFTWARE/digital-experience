---
tags:
    - Script Application
    - Gradle
    - Theme
    - DX Site
    - WCM Library
hide: tags
---

# Importing and Exporting DX Site 
 
## Overview

### What You Will Learn In This Tutorial

- How to export parts of a DX Site
- How to import parts of a DX Site from exported files
- What to look out for when exporting and deploying DX sites
- How to export and import DAM assets between environments

## Reference Site

- WoodBurn Insurance Demo Site could be used as reference to try and test the steps detailed in this guide. You can find it [here](https://github.com/HCL-TECH-SOFTWARE/DX-Modules-and-ScriptApps/tree/main/showcase-sites/WoodBurnInsurance).

## Common Set-up

### Config File

- Create a config file that you can use to set up your frequently used environment variables. Save the config file in your working directory.

    === "MacOS or Linux"

        !!!example "sample.config"

            ```bash
            # the protocol with which to connect to the server
            export DXPROTOCOL=https
            # the hostname of the target server
            export HOSTNAME=localhost
            # the port on which to connect to the server (for Kubernetes Environment, dxPort is 443)
            export DXPORT=10041
            # the port number of the cw_profile (for Kubernetes Environment, dxConnectPort is 443)
            export DXCONNECTPORT=10202
            # the profile name of the DX core server
            export DXPROFILENAME=wp_profile
            ```

    === "Windows "

        !!!example "sample.bat" 

            ```bat
            :: The protocol with which to connect to the server
            set "DXPROTOCOL=https"
            :: the hostname of the target server
            set "HOSTNAME=localhost"
            :: the port on which to connect to the server (for Kubernetes Environment, dxPort is 443)
            set "DXPORT=10041"
            :: the port number of the cw_profile (for Kubernetes Environment, dxConnectPort is 443)
            set "DXCONNECTPORT=10202"
            :: the profile name of the DX core server
            set "DXPROFILENAME=wp_profile"
            ```
        !!!tip 
            For Windows batch files, enabling [delayed expansion](https://ss64.com/nt/delayedexpansion.html) and using ! (i.e: !DXPROTOCOL!) instead of % (i.e: %DXPROTOCOL%) is encouraged to avoid unwanted reuse of old values from previous runs.  

## How to export parts of a DX Site

1. [Manual export of a DX Theme via Practitioner Studio](manual_export_theme.md)
2. [Manual export of a DX site's_page_hierarchy](manual_export_site_page_hierarchy.md)
3. [Export a DX Theme via commandline](export_theme.md)
4. [Export a DX site's page hierarchy via commandline](export_site_page_hierarchy.md)
5. [Export the DX site's WCM libraries via commandline](export_wcm_library.md)

## How to import parts of a DX Site from exported files

Here are the steps in order to deploy your exported DX Site:

1. [Deploy all DX Modules required by your DX Theme.](../../common-setup/build-and-deploy/build_and_deploy_dx_modules.md)
2. [Deploy the DX Theme you have created for your site. (Skip if you are using one of the out the box themes).](import_theme.md)
3. [Import all of WCM library that have your components.](import_wcm_libraries.md)
4. [Import your site page hierarchy.](import_site_page_hierarchy.md)
5. [Update all of WCM library that have references to site pages.](import_wcm_libraries.md)
6. [(Optional) Update the script applications](../../common-setup/build-and-deploy/build_and_deploy_scriptapps.md)

## XML files

   Sample XML files are available in the [WoodBurn Insurance reference site](https://github.com/HCL-TECH-SOFTWARE/DX-Modules-and-ScriptApps/tree/main/showcase-sites/WoodBurnInsurance). DXClient samples are also available in the DX server located in the following directory: `<portal_server_home>/doc/xml-samples`.

!!!note "When using Woodburn Insurance Demo"
    The following xml files are already included in the demo named theme-export.xml and site-export.xml respectively.

### Theme Metadata Export XML

This xml will be used to export the metadata xml of theme.
!!!example "theme-export.xml"

    ```XML
    <?xml version="1.0" encoding="UTF-8"?>
    <!--
    =================================================================
    * Licensed Materials - Property of IBM
    * (c) Copyright IBM Corp. 2012.  All rights reserved.
    *
    * US Government Users Restricted Rights - Use, duplication or
    * disclosure restricted by GSA ADP Schedule Contract with IBM
    * Corp.
    *
    * DISCLAIMER OF WARRANTIES.  The following [enclosed] code is
    * sample code created by IBM Corporation.  This sample code is
    * not part of any standard or IBM product and is provided to you
    * solely for the purpose of assisting you in the development of
    * your applications.  The code is provided "AS IS", without
    * warranty of any kind.  IBM shall not be liable for any damages
    * arising out of your use of the sample code, even if they have
    * been advised of the possibility of such damages.
    *
    =================================================================
    -->

    <request
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:noNamespaceSchemaLocation="PortalConfig_8.0.0.xsd"
       type="export">

       <portal action="locate">
          <skin action="export" objectid="custom.portal.skin.Woodburn%20Insurance.Standard" />
          <theme action="export" objectid="custom.portal.theme.Woodburn%20Insurance" />
       </portal>
    </request>
    ```

- Modify the objectid to match yours.

      ```xml
         <portal action="locate">
            <skin action="export" objectid="custom.portal.skin.Woodburn%20Insurance.Standard" />
            <theme action="export" objectid="custom.portal.theme.Woodburn%20Insurance" />
         </portal>
      ```

- You can find the objectid by going to **Theme Manager** and then clicking the cog.
      ![Theme Manager](../../images/19theme_manager.png)
- Skin objectid.
      ![Skin Object ID](../../images/19skin_objectid.png)
- Theme objectid.
      ![Theme Object ID](../../images/19theme_objectid.png)

### Page Hierarchy Export XML

This xml is used to export the Page metadata and hierarchy xml of your site.
!!!example "site-export.xml"
      ``` XML
      <?xml version="1.0" encoding="UTF-8"?>
      <!--
      =================================================================
      *Licensed Materials - Property of IBM
      * (c) Copyright IBM Corp. 2003, 2010.  All rights reserved.
      *
      * US Government Users Restricted Rights - Use, duplication or
      *disclosure restricted by GSA ADP Schedule Contract with IBM
      * Corp.
      *
      * DISCLAIMER OF WARRANTIES.  The following [enclosed] code is
      *sample code created by IBM Corporation.  This sample code is
      * not part of any standard or IBM product and is provided to you
      *solely for the purpose of assisting you in the development of
      * your applications.  The code is provided "AS IS", without
      *warranty of any kind.  IBM shall not be liable for any damages
      * arising out of your use of the sample code, even if they have
      *been advised of the possibility of such damages.
      *
      =================================================================
      -->

      <request
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:noNamespaceSchemaLocation="PortalConfig_8.0.0.xsd"
         type="export">

         <!-- sample for exporting a page -->
         <portal action="locate">

            <content-node action="export" uniquename="Woodburn Insurance"  export-descendants="true"/>

         </portal>
      </request>
      ```

- Modify the uniquename to match yours.

      ``` XML
            <content-node action="export" uniquename="Woodburn Insurance"  export-descendants="true"/>
      ```

- You can find it in `Administration > Site Management` under the `Unique name or Identifier` Column.
   ![Skin Object ID](../../images/19page_unique_name.png)

## DAM Assets Export and Import

[Digital Asset Management](../../../../../manage_content/digital_assets/usage/index.md) (DAM) Assets Export and Import (EXIM) is a tool for exporting DAM assets from a source environment to the file system in a structured format. You can also use it to import DAM assets from the file system into a target environment.

### User access and control capabilities for HCL DAM EXIM

DAM Export and Import (EXIM) is exposed through [DXClient](../../../../../extend_dx/development_tools/dxclient/index.md).

Administrators and authorized users with Administrator role privileges can access and manage DAM EXIM operations.

When you export DAM assets to a target environment that does not share the same LDAP configuration, access rights are not transferred.

If you specify a file system path and run the command from the container, assets are exported to or imported from the specified location (for example, `store/folder_name/`).

### Limitations

DAM EXIM can be used to back up DAM assets from any environment. The same backup can be imported into another environment.

DAM EXIM does **not** support continuous synchronization like DAM Staging. See [Sharing and staging DAM assets](../../../../../manage_content/digital_assets/configuration/staging_dam/index.md) for information on configuring continuous synchronization of DAM assets.

DAM Staging provides continuous synchronization between environments. If you are using DAM Staging, using DAM EXIM is not required.

### Export DAM assets

Use the export command to export DAM assets to the file system. By default, assets are exported to `store/outputFiles/dam-export-assets/`. If you specify a path, assets are exported to the provided location, for example `store/folder_name/`.

#### Commands description

dxclient manage-dam-assets export-assets
- Help command  
  Shows help information for the `manage-dam-assets` command:

```bash
dxclient manage-dam-assets export-assets -h
```

- Command options

```bash
-dxProtocol <value>
```
pecifies the protocol to use when connecting to the DX server.
```
-hostname <value>
```
ecifies the hostname of the DX server.
```
-dxPort <value>
```
Specifies the port to connect to the server (for Kubernetes environments, the default is 443).
```
-dxUsername <value>
```
Specifies the username required for server authentication.
```
-dxPassword <value>
```
Specifies the password required for server authentication.
```
-ringAPIPort <value>
```
Specifies the DAM server port for Kubernetes environments (default: 443).
```
-ringAPIPort <value>
```
Specifies the DX Core API server port for Kubernetes environments (default: 443).
```
-exportPath <value>
```  
Specifies a folder path to import DAM assets to, different from the default location. By default, assets are imported to `store/outputFiles/dam-export-assets/`.
```
-importBinary <value>
```  
Set to `true` or `false` to include or exclude binary files during the import. The default is `true`.

!!! note
    Optional parameters are `-exportPath` and `-exportBinary`.If the `-exportPath` value is not a relative or absolute path, the exported assets will be placed in the container and will **not** persist after the command completes.

    For example: `-exportPath outputFileDirectory`

For example:
```
dxclient manage-dam-assets import-assets -dxProtocol https -hostname <hostname> -dxPort <dxPort> -dxUsername <dxUsername> -dxPassword <dxPassword> -damAPIPort <damAPIPort> -ringAPIPort <ringAPIPort> -exportPath <exportPath> -importBinary <importBinary>
```

??? Related information
    [Digital Asset Management](../../../../../extend_dx/development_tools/dxclient/dxclient_artifact_types/dam_artifacts/index.md)


