# DXClient

## Table of Contents
- [Introduction](#dxclient)
- [Architecture](#architecture)
- [Installation Options](#public-and-free-dxclient-installation-options)
  - [Installing from NpmJS Registry](#installing-or-uninstalling-dxclient-from-npmjs-registry)
  - [Installing from Harbor Repository](#installing-dxclient-using-the-container-image-in-the-harbor-repository)
  - [Installing from Native JavaScript Package](#installing-dxclient-using-the-native-javascript-package-from-hcl-software-portal)
- [Configuration](#configuring-dxclient)
  - [Multiple Environments](#configuring-multiple-environments-in-dxclient)
  - [TLS Certificate Validation](#configuring-tls-certificate-validation-for-secure-connections)
- [Commands](#dxclient-commands)
- [Limitations](#limitations)
- [Learning Materials](#hclsoftware-u-learning-materials)
- [Related Information](#related-information)

## Introduction

DXClient is a unified command-line tool designed to automate and manage a wide range of HCL Digital Experience (DX) tasks. With a single, platform-independent interface, DXClient enables both developers and administrators to efficiently handle operations such as uploading portlets, Script Applications, and themes, as well as managing WCM libraries, Personalization (PZN) rules, shared libraries, and more.

DXClient supports deployment of locally developed artifacts to HCL DX servers, regardless of whether your environment is on-premises (standalone, cluster, or farm topology) or containerized. It is built to integrate seamlessly with any automation or CI/CD infrastructure, making it a one-stop solution for DX automation needs.

### Deployment Options

DXClient offers multiple deployment and installation options to suit different environments:

- **Free and Public Distribution:**  
  DXClient is available for free download and installation from [NpmJS and Harbor repositories](#public-and-free-dxclient-installation-options).

- **Container Package (HCL Software License Portal):**  
  DXClient can be deployed as a container image, compatible with OCI-based runtimes such as Docker or Podman (Docker is currently recommended due to recent Podman compatibility issues). The container image is available from HCL DX 9.5 CF196 and later. For details, see [DXClient installation using container package](#installing-dxclient-using-the-container-package-from-hcl-software-portal).

    !!! warning
        Recent changes to Podman introduced by Red Hat have caused compatibility issues with the DXClient container implementation. HCL recommends using Docker until further notice.

- **Native JavaScript Package (HCL Software License Portal):**  
  Alternatively, DXClient can be installed as a native JavaScript package. This option requires you to install a compatible Node.js and npm runtime environment, along with the necessary dependencies. For more information, see [DXClient installation using native js package](#installing-dxclient-using-the-native-javascript-package-from-hcl-software-portal).

### Versioning and Licensing

!!! important "DXClient Versioning and License Acceptance"
    DXClient is now openly distributed via [NpmJS and Harbor repositories](#public-and-free-dxclient-installation-options). The versioning format has changed from `1.xx.x` to `<CFNumber>.x.x` to align with DX CF releases (e.g., version "1.29.0" is now "221.0.0" for CF221).  
    A license agreement must be accepted using the `accept-license` command. For details, see [DXClient information commands](#dxclient-information-commands).

DXClient is your comprehensive, flexible, and modern solution for automating HCL DX operations across all supported environments.

## Architecture

The following image illustrates the DXClient Architecture diagram:

![HCL DXclient Architecture diagram](../../../images/HCLDXClient_Architecture_Diagram.png)

## Public and Free DXClient Installation Options

The following options to install DXClient for free are available starting CF221. 

| **Installation Option**                  | **Command**                                                                 | **Notes**                                                                 |
|------------------------------------------|-----------------------------------------------------------------------------|---------------------------------------------------------------------------|
| **Install DXClient from NpmJS Registry** | `npm install @hcl-software/dxclient`                                       | Install the latest version of DXClient.                                  |
| **Install DXClient Globally**            | `npm install -g @hcl-software/dxclient`                                    | Installs DXClient globally on your system.                               |
| **Uninstall DXClient**                   | `npm uninstall @hcl-software/dxclient`                                     | Removes DXClient from your system.                                       |
| **Install DXClient from Harbor Repository** | `docker pull hclcr.io/dx-public/dxclient:IMAGE_TAG`                        | Pulls the container image from HCL DX Open Harbor.                       |
| **Install DXClient Scripts**             | Download from [GitHub Repository](https://github.com/HCL-TECH-SOFTWARE/dxclient-scripts){target="_blank"} | Includes installation and usage details for containerized DXClient.      |

For more details, refer to the respective sections:
- [Installing or Uninstalling DXClient from NpmJS Registry](#installing-or-uninstalling-dxclient-from-npmjs-registry)
- [Installing DXClient Using the Container Image in the Harbor Repository](#installing-dxclient-using-the-container-image-in-the-harbor-repository)


### Installing or uninstalling DXClient from NpmJS registry
          
The option to install or uninstall from the NpmJS registry is only available starting CF221. The DXClient version installed must be 221.0.0.

- To install the latest version of DXClient, use the `npm install @hcl-software/dxclient` command.

- To install DXClient globally, use the `npm install -g @hcl-software/dxclient` command.

- To uninstall DXClient, use the `npm uninstall @hcl-software/dxclient` command.

### Installing DXClient using the container image in the Harbor repository

1. Pull the docker image from [HCL DX Open Harbor](https://hclcr.io/harbor/projects/95/repositories/dxclient/artifacts-tab){target="_blank"} using the following command:

    ```
     docker pull hclcr.io/dx-public/dxclient:IMAGE_TAG
    ```

2. Download DXClient scripts from the [HCL-TECH-SOFTWARE GitHub repository](https://github.com/HCL-TECH-SOFTWARE/dxclient-scripts){target="_blank"}. In this repository, you can find the installation and usage details, and the latest scripts for using the containerized version of DXClient which is openly distributed in [HCL DX Open Harbor](https://hclcr.io/harbor/projects/95/repositories/dxclient/artifacts-tab){target="_blank"}.

## Installing DXClient from HCL Software Licensed Portal

DXClient can be installed using two methods: the **container package** or the **native JavaScript package**. Choose the method that best suits your environment and requirements.

### Common Steps for Both Methods
1. **Download DXClient Package**  
   Navigate to the `<working-directory>` folder and download the DXClient.zip file from the HCL Software License Portal.

2. **Uninstall Previous Version (If Upgrading)**  
   If upgrading from an older version, uninstall or unlink the current version:
    - **Linux/macOS**: `make unlink`
    - **Windows**: `make_unlink.bat`

3. **Extract DXClient.zip**  
   Extract the downloaded DXClient.zip file.

---

### **Installing DXClient Using the Container Package**
1. **Set Container Runtime (Optional)**  
   If using a runtime other than Docker, set the runtime:
    - **Linux/macOS**: `export CONTAINER_RUNTIME=podman`
    - **Windows**: `set CONTAINER_RUNTIME=podman`

2. **Load Container Image**  
   Load the `dxclient.tar.gz` image:
    - **Linux/macOS**: `docker load < dxclient.tar.gz`
    - **Windows**: `docker load -i dxclient.tar.gz`

3. **Add DXClient to PATH (Optional)**  
   Add the DXClient bin directory to your PATH variable:
    - **Linux/macOS**: `export PATH=<working-directory>/bin:$PATH`
    - **Windows**: `set PATH=<working-directory>\bin;%PATH%`

4. **Verify Installation**  
   Run `dxclient -V` to check the installed version.

---

### **Installing DXClient Using the Native JavaScript Package**
1. **Ensure Node.js is Installed**  
   Install a long-term support (LTS) version of Node.js on your system.

2. **Install DXClient**  
   From the extracted folder, run the following command:
    - **Linux/macOS**: `make install`
    - **Windows**: `make_install.bat`

3. **Link Application (Optional)**  
   Run the following command to link your application to the local npm module:
    - **Linux/macOS**: `make link`
    - **Windows**: `make_link.bat`

   Alternatively, run the application directly:
    - **Linux/macOS**: `./bin/dxclient`
    - **Windows**: `node bin/dxclient`

4. **Verify Installation**  
   Run `dxclient -V` to check the installed version.

---

### **Additional Notes**
- A folder named `store` will be created in your working directory. This is the default location for configuration, logger, and output files.
- Common command arguments can be pre-configured inside the `config.json` file available under `<working-directory>/<VOLUME_DIR>`.
- For container installations, ensure appropriate permissions for the `bin` and `VOLUME_DIR` directories.

For more information on setting up volume siretiry, see [Setting Up the Volume Directory](#setting-up-the-volume-directory).

---         

## Uninstalling DXClient

To uninstall DXClient installed using the JavaScript package, follow these steps:

### Steps to Uninstall DXClient
1. **Clean Installation Files**  
   Run the following command to remove all installation files:
   - **Linux/macOS**: `make clean`
   - **Windows**: `make_uninstall.bat`

2. **Unlink DXClient (Optional)**  
   If DXClient was linked globally, unlink it using the following command:
   - **Linux/macOS**: `make unlink`
   - **Windows**: `make_unlink.bat`

### Notes
- Ensure that all tasks using DXClient are completed before uninstalling.
- If upgrading DXClient, unlink the current version before installing the new one.

For more information on installation options, see [Installing DXClient](#installing-dxclient).

## Setting Up the Volume Directory

To create a new volume directory for a different configuration, set the `VOLUME_DIR` to the desired directory name and run your task.

### Commands to Set Up `VOLUME_DIR`

=== "Linux and Apple macOS"
```bash
export VOLUME_DIR=storeForScriptApplication

# If you want spaces in its value, enclose it in double quotes ("")
export VOLUME_DIR="store for script application"
```
=== "Microsoft Windows"
```bash
set VOLUME_DIR=storeForScriptApplication

# If you want spaces in its value
set VOLUME_DIR=store for script application
```
???+ warning "Important Notes for Windows Users"
    - Do not enclose the value of `VOLUME_DIR` in double quotes ("") in Windows. This will produce unwanted errors when executing DXClient commands.
    - Ensure the `VOLUME_DIR` has read and write access permissions.

### Setting Permissions for `VOLUME_DIR`

The `VOLUME_DIR` requires read and write access permissions. Set appropriate permissions based on your operating system:

=== "Linux and Apple macOS"
```bash
chmod xxx <working-directory>/<VOLUME_DIR>

# Replace xxx with a 3-digit number (0–7) based on your desired permissions.
# Ref: https://wiki.archlinux.org/title/File_permissions_and_attributes#Numeric_method
```

=== "Microsoft Windows"
1. Right-click `<working-directory>/<VOLUME_DIR>` directory.
2. Select "Properties" > "Security" Tab.
3. Set the appropriate permissions for the folder.

### Additional Notes

- You can find the configuration, logger, output, and sample files under `<working-directory>/<VOLUME_DIR>`.
- Common command arguments can be pre-configured inside the `config.json` file available under the `<working-directory>/<VOLUME_DIR>` folder.
- A sample configuration file for standalone, cluster, or Kubernetes platforms is available under `<working-directory>/samples/sample-configurations` for reference.
- If you want to override any parameters in the `config.json`, add them in your command line.

For more information on setting up multiple environments, see [Configuring Multiple Environments in DXClient](#configuring-multiple-environments-in-dxclient).

## Verifying your DXClient installation

Successful installation of the DXClient tool can be checked by using the "`dxclient -V`" command, which should show the version of the DXClient tool installed.

Once installed, commands can be executed using the DXClient tool to perform CI/CD actions on HCL DX 9.5 servers.

!!! important
    The DXClient version is mostly forward and backward compatible with the DX CF versions. However, in some cases, it might not work as expected if the CF versions are different. Make sure that the CF versions of both DXClient and DX Core are the same in your installation.
    You can use "`dxclient version-compat`" to check version compatibility between DX Core and DXClient.

!!!note
    Refer to the list of features that were released in the following HCL DX 9.5 releases:
    
    -   HCL DX 9.5 CF226 release: **V226.0.0
        -  [Enabled TLS certificate validation while using DXClient.](#configuring-tls-certificate-validation-for-secure-connections)

    -   HCL DX 9.5 CF225 release: **V225.0.0
        -  Livesync is enabled for Presentation Template under WCM Design Library.

    -   HCL DX 9.5 CF224 release: **V224.0.0
        -  New DXClient LiveSync sub-commands: [LiveSync push-wcm-design-library](../dxclient/dxclient_artifact_types/livesync.md#livesync-push-wcm-design-library) and [pull-wcm-design-library](../dxclient/dxclient_artifact_types/livesync.md#livesync-pull-wcm-design-library)
        - Livesync is enabled for HTML Components under WCM Design Library.

    -   HCL DX 9.5 CF221 release: **V221.0.0
        -  A one time license agreement click-through is enabled. To skip the prompt, use the [accept-license](#dxclient-information-commands) command.
        -   DXClient is now openly distributed in [NpmJS and Harbor repository](#public-and-free-dxclient-installation-options).
        -   In [DAM Staging](../../../manage_content/digital_assets/configuration/staging_dam/dam_subscription_staging.md) tasks, the parameters `dxWASUsername`, `dxWASPassword`, `targetServerWASUsername`, and `targetServerWASPassword` are now deprecated and should no longer be used.

    -   HCL DX 9.5 CF219 release: **V1.28.0 
        - [Enabled multiple environment configuration in node version](#configuring-multiple-environments-in-dxclient)
    
    -   HCL DX 9.5 CF216 release: **V1.25.0
        -   [Shows version compatibility details between DX Core and DXClient](#dxclient-usage-information-commands)
        -   [Resync DAM Staging environments](../../../manage_content/digital_assets/configuration/staging_dam/dam_staging_mismatch.md)
        -   [Delete staging mismatch](../../../manage_content/digital_assets/configuration/staging_dam/dam_staging_mismatch.md#delete-staging-mismatch)

    -   HCL DX 9.5 CF215 release: **V1.24.0
        -   [Find staging mismatch](../../../manage_content/digital_assets/configuration/staging_dam/dam_staging_mismatch.md) 
        -   [Download mismatch report](../../../manage_content/digital_assets/configuration/staging_dam/dam_staging_mismatch.md#download-mismatch-report)
         
    -   HCL DX 9.5 CF214 release: **V1.23.0
        -   Lists all WebDAV themes when you pull themes and themeName is not provided.
        -   LiveSync is supported in scaled DX environment setups.
        -   [LiveSync Improvements](../dxclient/dxclient_artifact_types/livesync.md)

    -   HCL DX 9.5 CF213 release: **V1.22.0
        -   [LiveSync](../dxclient/dxclient_artifact_types/livesync.md)

    -   HCL DX 9.5 CF211 release: **V1.20.0
        -   [Deploy and Undeploy Applications](../dxclient/dxclient_artifact_types/deployapplication.md)

    -   HCL DX 9.5 CF210 release: **V1.19.0
        -   Removed parameters deprecated during CF201 & CF202 deployment.

        -   Added additional attribute - virtualPortalContext. [Exporting and Importing WCM libraries](../dxclient/dxclient_artifact_types/wcmlibraries.md)

    -   HCL DX 9.5 CF209 release: **V1.18.0
        -   [Restart All Core Pods in Kubernetes Deployment](../dxclient/dxclient_artifact_types/dxcoreserver.md#restart-dx-core-pods)

    -   HCL DX 9.5 CF208 release: **V1.17.0
        -   [Get all subscribers details for DAM staging](../../../manage_content/digital_assets/configuration/staging_dam/dam_subscription_staging.md#get-all-subscribers-details-for-dam-staging)

    -   HCL DX 9.5 CF207 release: **V1.16.0
        -   Support to set different Container Runtime.

    -   HCL DX 9.5 CF202 release: **V1.11.0
        -   Deprecated parameter `dxConnectHostname`. It is recommended that you start using the replacement parameter `-hostname` starting from CF202 wherever necessary.

        -   [DAM Assets Export & import](https://opensource.hcltechsw.com/digital-experience/CF207/manage_content/digital_assets/usage/managing_dam/dam_exim/)
        
    -   HCL DX 9.5 CF201 release: **V1.10.0
        -   An optional parameter `requestId` added to [Deploy theme](../dxclient/dxclient_artifact_types/themes.md), [Deploy application](../dxclient/dxclient_artifact_types/scriptapplications.md#deploy-script-applications), [Restart DX Core server](../dxclient/dxclient_artifact_types/dxcoreserver.md#restart-dx-core-server), and [Manage virtual portals](../dxclient/dxclient_artifact_types/virtualportals.md).
        
        -   Retrieve feature added to the [Resource environment provider](../dxclient/dxclient_artifact_types/resourceenvironments.md).
        
        -   [Accessing ConfigWizard in container environment](../../../deployment/manage/portal_admin_tools/cfg_wizard/configuration/cw_run.md)
        
        -   Note that a few parameters are deprecated and replaced with new parameters in the DX Core configuration reports. For information, see [DX Core server configuration report](../dxclient/dxclient_artifact_types/dxcoreserver.md#dx-core-server-configuration-report).
    
    -   HCL DX 9.5 CF200 release: **V1.9.0
        -   [Exporting and Importing WCM libraries](../dxclient/dxclient_artifact_types/wcmlibraries.md)
        -   [DX Core server configuration report](../dxclient/dxclient_artifact_types/dxcoreserver.md#dx-core-server-configuration-report)
    
    -   HCL DX 9.5 CF199 release: **V1.8.0
        -   [DAM Staging](../../../manage_content/digital_assets/configuration/staging_dam/dam_subscription_staging.md)
        -   [Create credential vault slot](../dxclient/dxclient_artifact_types/credentialvaultslot.md)
        -   [Create syndication relation](../dxclient/dxclient_artifact_types/syndicatorsandsubscribers.md)
        -   [Export and import multiple resource environment providers](../dxclient/dxclient_artifact_types/resourceenvironments.md)
        -   [Specify the context root for exporting and importing personalization rules](../dxclient/dxclient_artifact_types/personalization.md)

    -   HCL DX 9.5 CF198 release: **V1.7.0
        -   [List DAM schemas](../../../manage_content/digital_assets/usage/managing_dam/damschemas.md)
        -   [Personalization export and import rules](../dxclient/dxclient_artifact_types/personalization.md)
        -   [Resource environment provider](../dxclient/dxclient_artifact_types/resourceenvironments.md)
        -   [Manage virtual portals](../dxclient/dxclient_artifact_types/virtualportals.md)

    -   HCL DX 9.5 CF197 release: **V1.6.0
        -   [Undeploy portlets](../dxclient/dxclient_artifact_types/portlets.md)
        -   [Deploy and undeploy themes](../dxclient/dxclient_artifact_types/themes.md)
        -   [Deploy application](../dxclient/dxclient_artifact_types/deployapplication.md)
        -   [manage get-syndication report](../dxclient/dxclient_artifact_types/syndicatorsandsubscribers.md)
        -   [Restart Core](../dxclient/dxclient_artifact_types/dxcoreserver.md)
        -   [Delete DAM schema](../../../manage_content/digital_assets/usage/managing_dam/damschemas.md)
    
    -   HCL DX 9.5 CF196 release: **V1.5.0
        -   [Shared library](../dxclient/dxclient_artifact_types/sharedlibrary.md)
    
    -   HCL DX 9.5 CF195 release: **V1.4.0
        -   [Undeploy theme](../dxclient/dxclient_artifact_types/themes.md)
        -   [MLS export and import of WCM library](../dxclient/dxclient_artifact_types/wcm_mls_export_import.md)

    -   HCL DX 9.5 CF193 release: **V1.2.0
        -   [Restart DX Core server](../dxclient/dxclient_artifact_types/dxcoreserver.md)
        -   [Deploy Application](../dxclient/dxclient_artifact_types/deployapplication.md)
        -   [Managing syndicators](../dxclient/dxclient_artifact_types/syndicatorsandsubscribers.md)
        -   [Managing subscribers](../dxclient/dxclient_artifact_types/syndicatorsandsubscribers.md)

    -   HCL DX 9.5 CF192 release: **V1.1.0
        -   [Undeploy script applications](../dxclient/dxclient_artifact_types/scriptapplications.md)
        -   [Deploy theme](../dxclient/dxclient_artifact_types/themes.md) (EAR and WebDAV based)

    -   HCL DX 9.5 CF19 release: **V1.0.0
        -   [Deploy Portlets](../dxclient/dxclient_artifact_types/portlets.md)
        -   [Deploy script applications](../dxclient/dxclient_artifact_types/scriptapplications.md)
        -   [XML Access](../dxclient/dxclient_artifact_types/xmlaccess.md)
        -   [Restore Script Application](../dxclient/dxclient_artifact_types/scriptapplications.md)

## Additional Information

### 1. Deprecated Attributes
- **`-dxConnectHostname`**: Deprecated since CF202 and removed since CF210. Replace it with `-hostname` wherever necessary.
- **`-targetServerHostname`, `-targetServerPort`, `-targetServerUsername`, `-targetServerPassword`, `-targetServerProfileName`**: Deprecated since CF202 and removed since CF210. Replace them with:
  - `-targetHostname`
  - `-targetDxConnectPort`
  - `-targetDxConnectUsername`
  - `-targetDxConnectPassword`
  - `-targetDxProfileName`

---

### 2. Handling Large Artifacts in Kubernetes
- When deploying or importing large CI/CD artifacts in a Kubernetes environment, you may encounter failure or request pending messages due to load balancer timeouts.
- Before re-triggering the request:
  - Verify if the artifact has been deployed/imported.
  - Check if the server is up.
- Use the `requestId` provided during the request to check the status later.
- For troubleshooting tips, refer to [Troubleshooting DXClient](troubleshooting_dxclient.md#troubleshooting-for-some-known-issues).

---

### 3. Removed Properties
- **`DXCONNECT_MAX_MEMORY_SIZE_MB`**: Removed as of CF213. For more details, refer to [DXC_ConfigSettings](dxconnect.md#resource-environment-provider-property-for-dxconnect).

---

### 4. Troubleshooting Tips
- If you encounter issues with DXClient commands or configurations, refer to the [Troubleshooting DXClient](troubleshooting_dxclient.md) guide for known issues and solutions.

---

### 5. Notes on Compatibility
- Ensure that the DXClient version matches the DX Core CF version for optimal compatibility.
- Use the `dxclient version-compat` command to check version compatibility between DX Core and DXClient.

---

### 6. Additional Resources
- For more information on DXClient commands and configurations, refer to:
  - [DXClient Artifact Types](../dxclient/dxclient_artifact_types/index.md)
  - [DXConnect](dxconnect.md)
  - [Sample Pipelines for use with HCL DXClient](./sample_pipeline_settings_using_dxclient.md)

## Configuring DXClient

Common command arguments can be pre-configured inside the `config.json` file available under dist/src/configuration folder. A sample configuration file that can be used on on-premises platforms in standalone, cluster (default-config.json), or kubernetes (default-config-kube.json) platforms is also available under <working-directory>/samples/sample-configurations for reference. If you want to override any of the parameters in the config.json, add them in your command line.

```json
{
    "name":"config.json",
    "desc":"The attributes in this file are used for configuration purpose and those must not be deleted.",
    "dxProtocol": "",
    "dxConnectProtocol": "https",
    "hostname": "",
    "dxPort": "",
    "dxSoapPort": "10033",
    "dxConnectPort": "10202",
    "dxContextRoot":"/wps",
    "contenthandlerPath": "/wps/mycontenthandler",
    "projectContext": "",
    "virtualPortalContext": "",
    "xmlConfigPath": "/wps/config",
    "damAPIPort": "",
    "ringAPIPort": "",
    "damAPIVersion": "v1",
    "ringAPIVersion": "v1",
    "dxConnectHostname": "",
    "dxConnectUsername": "",
    "dxConnectPassword": "",
    "dxUsername": "",
    "dxPassword": "",
    "dxProfileName": "",
    "dxProfilePath": "",
    "dxWASUsername": "",
    "dxWASPassword": "",
    "enableLogger": true,
    "enableBackup": "false",
    "lastModifiedAfter": "",
    "restoreAsPublished": false,
    "targetHostname": "",
    "targetDxConnectPort": "",
    "targetDxConnectUsername":"",
    "targetDxConnectPassword":"",
    "targetDxProfileName": "",
    "targetServerHostname": "",
    "targetServerPort": "",
    "targetServerUsername":"",
    "targetServerPassword":"",
    "targetServerProfileName": "",
    "vaultUsername": "",
    "vaultPassword": "",
    "wcmContentName": "",
    "wcmContentId": "",
    "wcmContentPath": "",
    "wcmSiteArea": "",
    "wcmLibraryId": "",
    "wcmLibraryName": "",
    "wcmProjectName": ""
}

```
### Configuring multiple environments in DXClient

A folder named `store` is created in your working directory. This is the default location for configuration, logger, and output files. If you require to create a new configuration, set the environment variable VOLUME_DIR to the desired directory name and run your task. For example:

=== "Linux and Apple macOS"
    ```bash
    export VOLUME_DIR=storeForScriptApplication

    # or if you want spaces in its value, enclose it in double quotes ("")
    export VOLUME_DIR="store for script application"
    ```

=== "Microsoft Windows"
    ```batch
    set VOLUME_DIR=storeForScriptApplication

    :: or if you want spaces in its value
    set VOLUME_DIR=store for script application
    ```

    !!!important
        - Do not enclose the value of `VOLUME_DIR` in double quotes ("") in Windows. This produces errors when executing DXClient commands. 
        - Do not provide a path to set as `VOLUME_DIR`. Instead, provide a folder name.

The `VOLUME_DIR` requires read and write access permissions. Set appropriate permissions for the `VOLUME_DIR` as per user/group/owner.

=== "Linux and Apple macOS"
    ```bash
    chmod xxx <working-directory>/<VOLUME_DIR>

    # where xxx is a 3-digit number where each digit can be anything from 0 to 7.
    # Ref: https://wiki.archlinux.org/title/File_permissions_and_attributes#Numeric_method
    ```

=== "Microsoft Windows"
    1. Right click `<working-directory>/<VOLUME_DIR>` directory > "Properties" > "Security" Tab.
    2. Set the appropriate permission for the folder.

You can find the configuration, logger, and output under `<working-directory>/<VOLUME_DIR>`.

Common command arguments can be pre-configured inside the config.json file available under the `<working-directory>/<VOLUME_DIR>` folder. A sample configuration file that can be used on on-premises platforms in standalone, cluster (default-config.json), or Kubernetes (default-config-kube.json) platforms is also available under `<working-directory>/samples/sample-configurations` for reference. If you want to override any of the parameters in the config.json, add them in your command line.  

!!!note
    You must create the config.json in each `<VOLUME_DIR>` folder to set up multiple configurations. Otherwise, the system picks up the configurations specified in the default config.json available under `dist/configuration` in node version.

### Configuring TLS Certificate Validation for Secure Connections

As part of ongoing efforts to improve security and maintain best practices in development and production environments, a key change was made in the way TLS (Transport Layer Security) connections are handled while using DXClient from CF226. You can still trust custom certificates such as self-signed or third-party CAs without disabling validation entirely.

1. Obtain the certificate. Ensure you have the `.pem` certificate file that you wish to add to the trust store. It must contain the key and certificate files.

2. Add the certificate using one of the following methods:
    1. Use the `NODE_EXTRA_CA_CERTS` environment variable. `NODE_EXTRA_CA_CERTS` provides a secure way to add custom trusted certificates. To use the `NODE_EXTRA_CA_CERTS` environment variable, you need to specify the path to a PEM file that contains the key and certificate details. Configure this variable in your local or production environment using the following command:

        === "Linux and Apple macOS"
            ```
            export NODE_EXTRA_CA_CERTS=/Users/myUser/my-cert.pem
            ```

        === "Microsoft Windows"
            ```
            set NODE_EXTRA_CA_CERTS=C:\Users\myUser\my-cert.pem
            ```

    2. Add certificate to the trust store on your operating system.

!!!note
    In local or development environments, you may want to disable this security feature to allow connections to services with self-signed or invalid certificates. By setting `NODE_TLS_REJECT_UNAUTHORIZED` to `0`, you can bypass certificate validation. This can be useful for testing, but it should never be used in production environments because it can expose your application to potential security risks.

## DXClient information commands

To display Help documents, check the DXClient version and compatibility, and accept license information for DXClient, refer to the following commands.

Use the following commands to display the Help document for DXClient:

```bash
dxclient
```

```bash
dxclient -h, --help 
```

Use the following command to display the DXClient version number:

```bash
dxclient -V, --version
```

Use the following command to display the Help information for a specific command:

```bash
dxclient help [command]
```

Use the following command to skip prompt of click-through license acceptance agreement:

```bash
dxclient accept-license
```

!!!note
    For container versions, you only have to accept the license agreement once for every volume directory created.

Use the following command to show version compatibility details between DX Core and DXClient [`version-compat`](../dxclient/dxclient_artifact_types/versionCompat.md):

```bash
dxclient version-compat [options]
```

## DXClient commands

Command syntax conventions:

```bash
dxclient [command] [options]
```

Use the following command to execute the [deploy portlet action](../dxclient/dxclient_artifact_types/portlets.md):

```bash
dxclient deploy-portlet [options]
```

Use the following command to execute the [undeploy portlet action](../dxclient/dxclient_artifact_types/portlets.md):

```bash
dxclient undeploy-portlet [options]
```

Use the following command to execute the [xmlaccess action](../dxclient/dxclient_artifact_types/xmlaccess.md):

```bash
dxclient xmlaccess [options]
```

Use the following command to execute the *pull* [script application action](../dxclient/dxclient_artifact_types/scriptapplications.md):

```bash
dxclient deploy-scriptapplication pull [options]
```

Use the following command to execute the *push* [script application action](../dxclient/dxclient_artifact_types/scriptapplications.md):

```bash
dxclient deploy-scriptapplication push [options]
```

Use the following command to execute the undeploy [script application action](../dxclient/dxclient_artifact_types/scriptapplications.md):

```bash
dxclient undeploy-scriptapplication [options]
```

Use the following command to execute the restore [script application action](../dxclient/dxclient_artifact_types/scriptapplications.md):

```bash
dxclient restore-scriptapplication [options]
```

Use the following command to execute the [deploy application action](../dxclient/dxclient_artifact_types/deployapplication.md):

```bash
dxclient deploy-application [options]
```

Use the following command to execute the [DX Core restart action](../dxclient/dxclient_artifact_types/dxcoreserver.md):

```bash
dxclient restart-dx-core
```

Use the following command to restart [DX Core pods in a Kubernetes deployment](../dxclient/dxclient_artifact_types/dxcoreserver.md):

```bash
dxclient restart-core-pods [options]
```

Use the following command to execute [manage-subscriber action](../dxclient/dxclient_artifact_types/syndicatorsandsubscribers.md):

```bash
dxclient manage-subscriber -h
```

Use the following command to execute [manage-syndicator action](../dxclient/dxclient_artifact_types/syndicatorsandsubscribers.md):

```bash
dxclient manage-syndicator -h
```

Use the following command to execute the [deploy theme action](../dxclient/dxclient_artifact_types/themes.md):

```bash
dxclient deploy-theme [options]
```

Use the following command to execute the [undeploy theme action](../dxclient/dxclient_artifact_types/themes.md):

```bash
dxclient undeploy-theme [options]
```

Use the following command to execute the [manage-syndicator get-syndication-report action](../dxclient/dxclient_artifact_types/syndicatorsandsubscribers.md):

```bash
dxclient  manage-syndicator get-syndication-report [options]
```

Use the following command to execute the [shared-library action](../dxclient/dxclient_artifact_types/wcmlibraries.md):

```bash
dxclient  shared-library [options]
```

Use the following command to execute the delete [DAM schema action](../../../manage_content/digital_assets/usage/managing_dam/damschemas.md):

```bash
dxclient delete-dam-schema [options]
```

Use the following command to list all [DAM schemas present](../../../manage_content/digital_assets/usage/managing_dam/damschemas.md):

```bash
dxclient list-dam-schemas  [options]
```

Use the following command to export the [personalization rules](../dxclient/dxclient_artifact_types/personalization.md) from the target server:

```bash
dxclient pzn-export  [options]
```

Use the following command to import the [personalization rules](../dxclient/dxclient_artifact_types/personalization.md) into the target server:

```bash
dxclient pzn-import  [options]
```

Use the following command to [manage virtual portal](../dxclient/dxclient_artifact_types/virtualportals.md) tasks in the DX server:

```bash
dxclient manage-virtual-portal [options]
```

Use the following command to register subscriber:

```bash
dxclient manage-dam-staging register-dam-subscriber [options]
```

Use the following command to deregister subscriber:

```bash
dxclient manage-dam-staging deregister-dam-subscriber  [options]
```

Use the following command to trigger manual sync:

```bash
dxclient manage-dam-staging trigger-staging  [options]
```

Use the following command to create [credential vault](../dxclient/dxclient_artifact_types/credentialvaultslot.md) slot in the DX server:

```bash
dxclient create-credential-vault  [options]
```

Use the following command to create the [syndication relation between syndicator and subscriber](../dxclient/dxclient_artifact_types/syndicatorsandsubscribers.md) in DX server:

```bash
dxclient create-syndication-relation  [options]
```

Use the following command to create, update, delete, export or import a custom property from an existing [Resource Environment](../dxclient/dxclient_artifact_types/resourceenvironments.md) Provider:

```bash
dxclient resource-env-provider [options]
```

Use this command to [export WCM libraries](../dxclient/dxclient_artifact_types/wcmlibraries.md):

```bash
dxclient wcm-library-export
```

Use this command to [import WCM libraries](../dxclient/dxclient_artifact_types/wcmlibraries.md):

```bash
dxclient wcm-library-import
```

Use this command to [export the content of a WCM library for translation into a CSV file](../dxclient/dxclient_artifact_types/wcm_mls_export_import.md):

```bash
dxclient mls-export
```

Use this command to [import the translated content into DX](../dxclient/dxclient_artifact_types/wcm_mls_export_import.md):

```bash
dxclient mls-import
```

Use the `dx-core-configuration-reports` command to get a summary of the configurations of a single DX server or both source and target DX servers, which users can use to compare.

```bash
dxclient dx-core-configuration-reports [OPTIONS]
```

Use this command to sync WebDAV themes in server and then watch for succeeding changes which will immediately reflect in the WebDAV Server:

```bash
dxclient livesync push-theme [options]
```

Use this command to download the theme files in WebDAV Server in preparation for [`livesync push-theme`](../dxclient/dxclient_artifact_types/livesync.md#livesync-push-theme):

```bash
dxclient livesync pull-theme [options]
```

Use this command to download the WCM Design Library files from the DX Server in preparation for [`livesync push-wcm-design-library`](../dxclient/dxclient_artifact_types/livesync.md#livesync-push-wcm-design-library):

```bash
dxclient livesync pull-wcm-design-library [options]
```

Use this command to sync a local WCM Design Library with the DX server. Succeeding changes are immediately reflected in the DX Server:

```bash
dxclient livesync push-wcm-design-library [options]
```

## Limitations

- For hybrid deployments in which two different hostnames are used for the on-premises DX Core and Kubernetes DX Services, there are no options to enter both the hostnames. You must consider the DXClient function being used and enter the appropriate hostname. For example, for DAM tasks such as `manage-dam-staging`, you must enter the Kubernetes hostname. For DX Core tasks such as `deploy-portlet` you must enter the on-premises DX Core hostname.

- Starting CF217 (DXClient v1.26.0 and above), it is required to set full access to the bin folder to execute DXClient commands.

- Currently, the maximum input file size allowed in DXClient is 256 MB.

## HCLSoftware U learning materials

For an introduction and a demo on DX staging, go to [Staging for Beginners](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D505){target="_blank"}.

To learn how to use staging tools such as DXClient, Syndication, XMLAccess, ReleaseBuilder/Solution Installer, and ConfigEngine, go to [Staging for Intermediate Users](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3328){target="_blank"}. You can try it out using the [Staging Lab for Intermediate Users](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Staging_Lab.pdf){target="_blank"} and corresponding [Staging Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Staging_Lab_Resources.zip){target="_blank"}.

???+ info "Related information"
    - [How to translate WCM library content using export and import WCM with DXClient](../dxclient/dxclient_artifact_types/wcm_mls_export_import.md)
    - [DXClient Artifact Types](../dxclient/dxclient_artifact_types/index.md)
    - [Troubleshooting DXClient](troubleshooting_dxclient.md)
    - [DXConnect](dxconnect.md)
    - [Sample Pipelines for use with HCL DXClient and Automation servers](./sample_pipeline_settings_using_dxclient.md)
    - [Using DAM staging](../../../manage_content/digital_assets/configuration/staging_dam/dam_subscription_staging.md)
    - [Create or update credential vault slot](../dxclient/dxclient_artifact_types/credentialvaultslot.md)
    - [Personalization rules](../dxclient/dxclient_artifact_types/personalization.md)
    - [Portlets](../dxclient/dxclient_artifact_types/portlets.md)
    - [Themes](../dxclient/dxclient_artifact_types/themes.md)
    - [Script applications](../dxclient/dxclient_artifact_types/scriptapplications.md)
    - [Resource environment provider](../dxclient/dxclient_artifact_types/resourceenvironments.md)
    - [DAM Indexing](../../../manage_content/digital_assets/configuration/dam_indexing/index.md)
