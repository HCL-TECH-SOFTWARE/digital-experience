# DXClient

## Overview

DXClient is a command line tool featuring a single, unified interface to all HCL Digital Experience (DX) automation and CI/CD-related tasks. It helps developers manage several DX tasks such as uploading one or more portlets, Script Applications, and themes. Administrators can manage WCM libraries, PZN rules, shared libraries, etc. 

DXClient can take artifacts developed locally and deploy them to HCL DX servers independently of whether these are deployed on-premises platforms in standalone, cluster, or farm-topologies, or in a container environment.

DXClient is meant to be the one-stop, platform-independent solution that lets you integrate HCL DX with any automation infrastructure of your choice.

## Installation options

DXClient offers three installation options, each with different benefits depending on your use case:

### Free Public Repositories (recommended)

- **NpmJS Registry**: Simplest option for local developers and administrators
- **Harbor Container Repository**: Best for CI/CD automation pipelines

Both options are free to use and available starting from CF221. For more information, refer to [Public and free installation options](#public-and-free-installation-options).

### My HCLSoftware (MHS) portal

The MHS portal offers two installation methods: [Container Package](#container-package) and [Native JavaScript Package](#native-javascript-package).

#### Container Package

- Fully packaged container with all dependencies included
- Works with Docker or Podman (OCI-compliant runtimes)
- Available since HCL DX 9.5 CF196
- To install the Container Package, refer to [Installing using the container package from MHS portal](#installing-using-the-container-package-from-mhs-portal)

!!! warning
    Recent changes to Podman introduced by RedHat have caused compatibility issues with DXClient container implementation. Docker is currently recommended until this is resolved.

#### Native JavaScript Package

- Requires manual installation of Node.js and npm dependencies
- More flexible but requires more setup
- To install the Native JavaScript Package, refer to [Installing using the Native JavaScript Package from MHs portal](#installing-using-the-native-javascript-package-from-mhs-portal)

!!!important "Version Numbering and Licensing"
    Since CF221, DXClient uses a new versioning format that matches CF numbers (for example, "221.0.0" instead of "1.29.0").

    All versions now require accepting a license agreement, which can be done using the `accept-license` command. For more information, refer to [DXClient information commands](#information-commands).

## What's New and release history

### Latest updates

For CF229, a few NPM libraries have been upgraded for code maintenance. These changes have no impact on the current workings of DXClient.

For a complete history of features added in each release, refer to the [Feature Release History](#feature-release-history) section.

### Architecture

The following image illustrates the DXClient Architecture diagram:

![HCL DXclient Architecture diagram](../../../images/HCLDXClient_Architecture_Diagram.png)

## Installation guide

Choose the installation method that best suits your needs from the following:

### Installation Methods Comparison

| Method | Source | Best For | Prerequisites | Ease of Use | Recommended For |
|--------|--------|----------|--------------|-------------|-----------------|
| **NPM Registry** | Free Public Repository | Local development | Node.js | ★★★★★ | Developers and admins who need quick setup |
| **Harbor Container** | Free Public Repository | CI/CD pipelines | Docker or Podman | ★★★★☆ | Automation environments and DevOps |
| **MHS Container Package** | MHS Portal | Enterprise use | Docker or Podman | ★★★★☆ | Production environments with license |
| **MHS Native JavaScript** | MHS Portal | Custom setups | Node.js | ★★★☆☆ | Legacy or specialized environments |

!!!tip "Quick Decision Guide"
    - **For personal development**: Use NPM Registry installation
    - **For CI/CD pipelines**: Use Harbor Container Repository
    - **For enterprise deployments**: Use MHS Container Package
    - **For specialized needs**: Use MHS Native JavaScript Package

### Public and free installation options

Starting from CF221, you can install DXClient without requiring MHS portal access. You can install it using the NpmJS registry or the container image in the Harbor repository.

#### Installing from the NpmJS registry

This method is recommended for local developers and administrators due to its simplicity.

**Prerequisites**

- Node.js LTS or newer

**Installation**

To install DXClient from the NpmJS registry, run the following command:

```bash
# Install locally in current project
npm install @hcl-software/dxclient

# OR install globally for system-wide access
npm install -g @hcl-software/dxclient
```

**Verification**

To verify the installation, run the following command:

```bash
# For local installation
npx dxclient -V

# For global installation
dxclient -V
```

**Uninstallation**

To uninstall DXClient, run the following command:

```bash
npm uninstall @hcl-software/dxclient
```

#### Installing using the container image in the Harbor repository

This method is preferred for CI/CD automation scenarios.

**Prerequisites**

- Docker or another OCI-compliant container runtime

**Installation**

1. Pull the Docker image using the following command:

    ```bash
    docker pull hclcr.io/dx-public/dxclient:IMAGE_TAG
    ```

2. Download and configure the DXClient scripts from the [HCL-TECH-SOFTWARE GitHub repository](https://github.com/HCL-TECH-SOFTWARE/dxclient-scripts){target="_blank"}. 
3. Follow the instructions in the repository to set up and use DXClient.

For more information, refer to the following repositories:

- [HCL DX Open Harbor Repository](https://hclcr.io/harbor/projects/95/repositories/dxclient/artifacts-tab){target="_blank"}
- [DXClient Scripts GitHub Repository](https://github.com/HCL-TECH-SOFTWARE/dxclient-scripts){target="_blank"}

### Installing using the Container Package from MHS Portal

The container package provides a fully packaged OCI-compliant container with all dependencies included.

**Prerequisites**

- Docker or Podman (any OCI-compliant container runtime)
- HCL DX 9.5 CF196 or higher entitlement
- MHS portal access

!!! warning
    Recent changes to Podman introduced by RedHat have caused compatibility issues with DXClient container implementation. Docker is currently recommended until this is resolved.

**Installation**

1. Prepare your environment.

    - Navigate to your desired working directory.
    - If you are upgrading from the Node.js version, uninstall it first using the following command:

    === "Linux and Apple macOS"
        ```bash
        make unlink
        ```

    === "Microsoft Windows"
        ```batch
        make_unlink.bat
        ```

2. Download and extract the DXClient .zip file (`DXClient_VX_XXXXXXXX-XXXX.zip`) from [MHS portal](https://my.hcltechsw.com/){target="_blank"}.
3. (Optional) Configure container runtime. The default container runtime is Docker.

    To use another runtime, run the following command:

    === "Linux and Apple macOS"
        ```bash
        export CONTAINER_RUNTIME=<YOUR_CONTAINER_RUNTIME>
        # Example: export CONTAINER_RUNTIME=podman
        ```

    === "Microsoft Windows"
        ```batch
        set CONTAINER_RUNTIME=<YOUR_CONTAINER_RUNTIME>
        # Example: set CONTAINER_RUNTIME=podman
        ```

4. Load the container image using the following command:

    === "Linux and Apple macOS"
        ```bash
        docker load < dxclient.tar.gz
        ```

    === "Microsoft Windows"
        ```batch
        docker load -i dxclient.tar.gz
        ```

5. Add the DXClient `bin` directory to your system's `PATH` environment variable.

    === "Linux and Apple macOS"
        ```bash
        export PATH=<working-directory>/bin:$PATH
        ```

    === "Microsoft Windows"
        ```batch
        set PATH=<working-directory>\bin;%PATH%
        ```

    !!! note
        These `PATH` changes are temporary. For permanent changes, update your system's environment variables.

6. Set file permissions using the following command:

    === "Linux and Apple macOS"
        ```bash
        chmod 755 <working-directory>/bin
        ```

    === "Microsoft Windows"
        Set the appropriate permissions in **Properties > Security**.

7. Verify the installation using the following command:

    ```bash
    dxclient -V
    ```

8. Configure storage volume.

    A `store` folder is automatically created as shared volume. To use a different volume directory, run the following command:

    === "Linux and Apple macOS"
        ```bash
        export VOLUME_DIR=myCustomStore
        ```

    === "Microsoft Windows"
        ```batch
        set VOLUME_DIR=myCustomStore
        ```

    !!! warning
        Do not enclose the `VOLUME_DIR` value in quotes on Windows systems.

9. Set volume permissions.

    === "Linux and Apple macOS"
        ```bash
        chmod 755 <working-directory>/<VOLUME_DIR>
        ```

    === "Microsoft Windows"
        Set the appropriate permissions in **Properties > Security**.

10. (Optional) Configure the timezone using the following command:

    === "Linux and Apple macOS"
        ```bash
        export Timezone=Asia/Kolkata
        ```

    === "Microsoft Windows"
        ```batch
        SET Timezone=Asia/Kolkata
        ```

!!!note
    - Configuration files are located in `<working-directory>/<VOLUME_DIR>`.
    - Sample configurations available in `<working-directory>/samples/sample-configurations`.
    - For automation server integration, refer to the included sample pipeline.

### Installing using the Native JavaScript Package from MHS Portal

!!! note
    This is a legacy method. The container package is recommended from CF196 onwards.

**Prerequisites**

- Node.js LTS or newer
- HCL DX 9.5 CF19 or higher entitlement
- MHS portal access

**Installation**

1. Prepare your environment. If you are upgrading from previous version, uninstall it first using the following command:

    === "Linux and Apple macOS"
        ```bash
        make unlink
        ```
    === "Microsoft Windows"
        ```batch
        make_unlink.bat
        ```

2. Download and extract the DXClient .zip file (`DXClient_VX_XXXXXXXX-XXXX.zip`) from the [MHS portal](https://my.hcltechsw.com/){target="_blank"}.
3. Install DXClient dependencies using the following command:

    === "Linux and Apple macOS"
        ```bash
        make install
        ```

    === "Microsoft Windows"
        ```bash
        make_install.bat
        ```

4. (Optional) Link the application using the following command:

    === "Linux and Apple macOS"
        ```bash
        make link
        ```

    === "Microsoft Windows"
        ```bash
        make_link.bat
        ```

    !!! note
        - Skip linking on automation servers to avoid dependency conflicts.

    If you choose not to link the application, run the following command instead:

    === "Linux and Apple macOS"
        ```bash
        ./bin/dxclient
        ```
    === "Microsoft Windows"
        ```bash
        node bin/dxclient
        ```

5. (Optional) Configure storage volume.

    A `store` folder is automatically created. To use a different volume directory, run the following command:

    === "Linux and Apple macOS"
        ```bash
        export VOLUME_DIR=myCustomStore
        ```

    === "Microsoft Windows"
        ```batch
        set VOLUME_DIR=myCustomStore
        ```

    !!! warning
        Do not enclose the `VOLUME_DIR` value in quotes on Windows systems.

6. Set volume permissions using the following command:

    === "Linux and Apple macOS"
        ```bash
        chmod 755 <working-directory>/<VOLUME_DIR>
        ```

    === "Microsoft Windows"
        Set the appropriate permissions in **Properties > Security**.

### Upgrading DXClient

DXClient can be upgraded to newer versions without uninstalling the previous version. This simplifies the upgrade process and ensures minimal disruption to your development or CI/CD workflows.

#### Upgrading from the NPM registry

Upgrade from the NPM registry using the following command:

```bash
# For local installation
npm update @hcl-software/dxclient

# For global installation
npm update -g @hcl-software/dxclient
```

#### Upgrading the Container Package from Harbor Repository

Upgrade the Container Package from the Harbor repository using the following command:

```bash
# Pull the latest version
docker pull hclcr.io/dx-public/dxclient:LATEST_TAG
```

#### Upgrading the MHS Container Package

1. Download the DXClient .zip file (`DXClient_VX_XXXXXXXX-XXXX.zip`) from the [MHS portal](https://my.hcltechsw.com/){target="_blank"}.
2. Extract the files to your working directory (can be the same as your existing installation).
3. Load the new container image:

=== "Linux and Apple macOS"
    ```bash
    docker load < dxclient.tar.gz
    ```

=== "Microsoft Windows"
    ```batch
    docker load -i dxclient.tar.gz
    ```

#### Upgrading MHS JavaScript Package

1. Download the DXClient .zip file (`DXClient_VX_XXXXXXXX-XXXX.zip`) from the [MHS portal](https://my.hcltechsw.com/){target="_blank"}.
2. Extract the files to your working directory (can be the same as your existing installation).
3. Update the DXClient dependencies using the following command:

    === "Linux and Apple macOS"
        ```bash
        make install
        ```

    === "Microsoft Windows"
        ```batch
        make_install.bat
        ```

!!!note
    - When upgrading, your existing configurations in the `store` directory (or custom `VOLUME_DIR`) are preserved. You do not need to reconfigure DXClient after upgrading.
    - After upgrading, verify the new version using the `dxclient -V` command to verify that the upgrade was successful.

### Uninstalling DXClient

Uninstall DXClient using the following methods.

#### Uninstalling from NPM registry

Uninstall DXClient from the NPM registry using the following command:

```bash
npm uninstall [-g] @hcl-software/dxclient
```

#### Uninstalling MHS Container Package

1. Remove the container image using your container runtime.
2. Delete the extracted files and directories.

#### Uninstalling MHS JavaScript Package

1. Run the following uninstall command:

    === "Linux and Apple macOS"
        ```bash
        make clean
        ```

    === "Microsoft Windows"
        ```bash
        make_uninstall.bat
        ```

2. (Optional) Unlink the package using the following command:

    === "Linux and Apple macOS"
        ```bash
        make unlink
        ```

    === "Microsoft Windows"
        ```bash
        make_unlink.bat
        ```

### Verifying Your DXClient Installation

After installation, verify that DXClient is properly installed.

1. Run the following command:

    ```bash
    dxclient -V
    ```

    This command shows the version of DXClient that you installed.

2. Accept the license agreement using the following command (required once per installation):

    ```bash
    dxclient accept-license
    ```

3. Check the version compatibility with your DX Core installation using the following command:

    ```bash
    dxclient version-compat
    ```

!!! important
    For optimal compatibility, ensure the CF versions of both DXClient and DX Core match in your installation. While generally compatible across versions, some features may require specific version alignment.

## Feature Release History

!!!note
    Refer to the list of features that were released in the following HCL DX 9.5 releases:

    -   HCL DX 9.5 CF229 release: **V229.0.0
        -  [NPM libraries are upgraded](#whats-new-and-release-history) for code maintenance.

    -   HCL DX 9.5 CF227 release: **V227.0.0
        -  Livesync is enabled for Style-sheet Components under WCM Design Library.

    -   HCL DX 9.5 CF226 release: **V226.0.0
        -  [Enabled TLS certificate validation while using DXClient.](#configuring-tls-certificate-validation)

    -   HCL DX 9.5 CF225 release: **V225.0.0
        -  Livesync is enabled for Presentation Template under WCM Design Library.

    -   HCL DX 9.5 CF224 release: **V224.0.0
        -  New DXClient LiveSync sub-commands: [LiveSync push-wcm-design-library](../dxclient/dxclient_artifact_types/livesync.md#livesync-push-wcm-design-library) and [pull-wcm-design-library](../dxclient/dxclient_artifact_types/livesync.md#livesync-pull-wcm-design-library)
        - Livesync is enabled for HTML Components under WCM Design Library.

    -   HCL DX 9.5 CF221 release: **V221.0.0
        -   A one-time license agreement prompt is enabled. To skip the prompt, use the [accept-license](#information-commands) command.
        -   DXClient is now openly distributed in [NpmJS and Harbor repository](#public-and-free-installation-options).
        -   In [DAM Staging](../../../manage_content/digital_assets/configuration/staging_dam/dam_subscription_staging.md) tasks, the parameters `dxWASUsername`, `dxWASPassword`, `targetServerWASUsername`, and `targetServerWASPassword` are now deprecated and should no longer be used.
        -   The [DAM Reindexing](../../../manage_content/digital_assets/configuration/dam_indexing/using_dam_indexing.md) process involves indexing all existing assets while revalidating stale indexes. For more information on how to trigger DAM Reindexing, refer to [DXClient commands](#core-commands).

    -   HCL DX 9.5 CF219 release: **V1.28.0 
        - [Enabled multiple environment configuration in node version](#configuring-multiple-environments)
    
    -   HCL DX 9.5 CF216 release: **V1.25.0
        -   [Shows version compatibility details between DX Core and DXClient](#information-commands)
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
        -   [Get all subscribers details for DAM staging](../../../manage_content/digital_assets/configuration/staging_dam/dam_subscription_staging.md#getting-all-subscribers-details-for-dam-staging)

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

## Configuration Guide

### Basic Configuration

Common command arguments can be pre-configured inside the `config.json` file. When first executing any DXClient command, such as `dxclient -V`, a store directory is created in the local working directory. The active `config.json` file is in the store directory located below your working directory at `store/config.json`. After the file is created, you can update the values in the `store/config.json` file. DXClient commands executed in the original working directory will use those values for DXClient commands. A sample configuration file that can be used on on-premises platforms in standalone, cluster (default-config.json), or kubernetes (default-config-kube.json) platforms is also available under `<working-directory>/samples/sample-configurations` for reference. If you want to override any of the parameters in the `store/config.json` file, add them in your command line.

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
  "xmlAccessMaxFileSizeMB": 256,
  "damAPIPort": "",
  "ringAPIPort": "",
  "damAPIVersion": "v1",
  "ringAPIVersion": "v1",
  "dxConnectUsername": "",
  "dxConnectPassword": "",
  "dxUsername": "",
  "dxPassword": "",
  "dxProfileName": "wp_profile",
  "dxProfilePath": "/opt/HCl/wp_profile",
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

### Configuring multiple environments

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

### Configuring TLS certificate validation

Starting CF226, DXClient no longer ignores certificates that cannot be properly validated when using Transport Layer Security (TLS) connections. This is to improve security and maintain best practices in development and production environments. You can validate and trust custom certificates such as self-signed or third-party CAs without entirely disabling validation.

1. Obtain the certificate.

    Ensure you have the `.pem` certificate file that you wish to add to the truststore. It must contain the key and certificate files.

2. Add the certificate using one of the following methods:

    - Use the `NODE_EXTRA_CA_CERTS` environment variable.

        `NODE_EXTRA_CA_CERTS` provides a secure way to add custom trusted certificates. To use the `NODE_EXTRA_CA_CERTS` environment variable, you need to specify the path to a PEM file that contains the key and certificate details. Configure this variable in your local or production environment using the following command:

        === "Linux and Apple macOS"
            ```
            export NODE_EXTRA_CA_CERTS=/Users/myUser/my-cert.pem
            ```

        === "Microsoft Windows"
            ```
            set NODE_EXTRA_CA_CERTS=C:\Users\myUser\my-cert.pem
            ```

    - Add the certificate to the truststore on your operating system.

        !!!important
            In local or development environments, you may want to disable this security feature to allow connections to services with self-signed or invalid certificates. By setting `NODE_TLS_REJECT_UNAUTHORIZED` to `0`, you can bypass certificate validation. This can be useful for testing, but it should never be used in production environments because it can expose your application to potential security risks.

## Command Reference

### Information Commands

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

Use the following command to skip the license acceptance prompt:

```bash
dxclient accept-license
```

!!!note
    For container versions, you only have to accept the license agreement once for every volume directory created.

Use the following command to show version compatibility details between DX Core and DXClient [`version-compat`](../dxclient/dxclient_artifact_types/versionCompat.md):

```bash
dxclient version-compat [options]
```

### Core Commands

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

Use this command to trigger [DAM Reindexing](../../../manage_content/digital_assets/configuration/dam_indexing/using_dam_indexing.md):

```bash
    dxclient trigger-dam-reindex [options]
```

## Limitations and Troubleshooting

### Known Limitations

**1. Hybrid Deployment Hostname Management**

When using hybrid deployments (where on-premises DX Core and Kubernetes DX Services use different hostnames), you must specify the appropriate hostname based on the specific DXClient command:

- For DAM-related tasks (like `manage-dam-staging`): Use the Kubernetes hostname
- For DX Core tasks (like `deploy-portlet`): Use the on-premises DX Core hostname

**2. Bin Folder Permissions**

For DXClient v1.26.0 and above (since CF217), you must set full access permissions to the bin folder to properly execute DXClient commands. See the installation instructions for details on setting appropriate permissions.

**3. File Size Limitation**

The maximum input file size that DXClient can handle is 256 MB. Files larger than this limit will not be processed correctly.

### Additional Notes

1. The following parameters have been deprecated or removed:

    - `-dxConnectHostname` (deprecated since CF202, removed in CF210)  
    **Use instead:** `-hostname` wherever needed

    - `-targetServerHostname` → Use `-targetHostname` instead
    - `-targetServerPort` → Use `-targetDxConnectPort` instead
    - `-targetServerUsername` → Use `-targetDxConnectUsername` instead
    - `-targetServerPassword` → Use `-targetDxConnectPassword` instead
    - `-targetServerProfileName` → Use `-targetDxProfileName` instead

2. When deploying large CICD artifacts to Kubernetes environments, you may encounter connection timeouts. If you receive "failure" or "request pending" messages:

    - Check your target server first to verify if the deployment actually succeeded
    - For "request pending" messages, note the `requestId` to check status later
    - See [Troubleshooting known issues](troubleshooting_dxclient.md#troubleshooting-known-issues) for resolution steps

3. As of CF213, the property `DXCONNECT_MAX_MEMORY_SIZE_MB` in DXC_ConfigSettings has been removed. For more information, refer to [DXC_ConfigSettings](dxconnect.md#resource-environment-provider-property-for-dxconnect).

### HCLSoftware U Learning Materials

To get an introduction to development for HCL DX, go to [HCL DX for Developers (Beginners)](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D412){target="_blank"}. Ensure you setup the DXClient that allows you to develop locally using the [DXClient for Beginners Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-100_DXClient_for_Beginners.pdf){target="_blank"}.

For an introduction and a demo on DX staging, go to [Staging for Beginners](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D505){target="_blank"}.

To learn how to use staging tools such as DXClient, Syndication, XMLAccess, ReleaseBuilder/Solution Installer, and ConfigEngine, go to [Staging for Intermediate Users](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3328){target="_blank"}. You can try it out using the [Staging Lab for Intermediate Users](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Staging_Lab.pdf){target="_blank"} and corresponding [Staging Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Staging_Lab_Resources.zip){target="_blank"}.
