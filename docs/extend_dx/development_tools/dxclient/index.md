# DXClient

DXClient is a command line tool featuring a single, unified interface to all HCL DX automation and CI/CD-related tasks. It helps developers manage several DX tasks such as uploading one or more portlets, Script Applications, and themes. Administrators can manage WCM libraries, PZN rules, shared libraries, etc. 

DXClient can take artifacts developed locally and deploy them to HCL DX servers independently of whether these are deployed on-premises platforms in standalone, cluster, or farm-topologies, or in a container environment.

DXClient is meant to be the one-stop, platform-independent solution that lets you integrate HCL DX with any automation infrastructure of your choice.

DXClient comes with two deployment options:

1. The default deployment option is the DXClient container package. DXClient is packaged as a container that can be run using OCI-based runtimes such as Docker or Podman. It is available as a container image from HCL DX 9.5 CF196 and later releases. See the [DXClient installation](#installing-dxclient-using-the-container-package) for more details.

2. For backward compatibility, we also still offer DXClient JavaScript source codes. Customers who want to rely on this deployment option need to install their own Node.js and npm runtime environment in the correct version and must install necessary dependencies as needed.

## Architecture

The following image illustrates the DXClient Architecture diagram:

![HCL DXclient Architecture diagram](../../../images/HCLDXClient_Architecture_Diagram.png)

## Installing DXClient using the container package

The container package provides a fully packaged OCI-compliant container that contains everything to successfully run DXClient. You may use any container runtime that implements OCI Runtime Specification (for example, Docker or Podman).

In addition, the package includes scripts for all operating systems that make it simpler to work with the container image. These scripts handle the storage for the container and sync input files with the container itself.

!!!note
    When you upgrade to use the container image DXClient, you must first uninstall the Node.js DXClient.

1. Navigate to the `<working-directory>` folder where you wish to use the DXClient from.

2. Download the DXClient.zip file (DXClient_VX_XXXXXXXX-XXXX.zip) to a local directory on the local workstation from your HCL Digital Experience 9.5 CF196 or higher entitlements on the HCL Software License Portal.

    !!! note
        If you are upgrading from the node to container image version of DXClient, you must first uninstall or unlink the current version using the following command before installing the newer version.

        === "Linux and Apple macOS"
            ```bash
            make unlink
            ```
        
        === "Microsoft Windows"
            ```bash
            make_unlink.bat
            ```

3. Extract the DXClient.zip file.

    !!! note
        The default OCI runtime for DXClient is docker. If you wish to use any other OCI runtime, run the following command before proceeding further.

        === "Linux and Apple macOS"
            ```bash
            export CONTAINER_RUNTIME=<YOUR_CONTAINER_RUNTIME>
            
            # For example: export CONTAINER_RUNTIME=podman
            ```

        === "Microsoft Windows"
            ```batch
            set CONTAINER_RUNTIME=<YOUR_CONTAINER_RUNTIME>
            
            :: For example: set CONTAINER_RUNTIME=podman
            ```

4. Load `dxclient.tar.gz` image.

    === "Linux and Apple macOS"
        ```bash
        docker load < dxclient.tar.gz
        ```

    === "Microsoft Windows"
        ```batch
        docker load -i dxclient.tar.gz
        ```

5. Optional: Add DXClient to your PATH.
     Open terminal and add path to the DXClient bin directory to your PATH variable to be able to call DXClient from any directory. If you plan to run multiple versions of DXClient on the same system in parallel, you may want to skip this step.

    === "Linux and Apple macOS"
        ```bash
        export PATH=<working-directory>/bin:$PATH
        ```

    === "Microsoft Windows"
        Open command prompt, add `dxclient.bat` script in the bin directory to the PATH variable, to call DXClient from any directory.

        ```batch
        set PATH=<working-directory>\bin;%PATH%
        ```

    !!! note
        You will lose these changes by closing the terminal/command prompt. If you set in system path permanently, kindly take the necessary steps to remove it.

6. Set appropriate read and execute permissions as per user/group/owner.

    === "Linux and Apple macOS"
        ```bash
        chmod xxx <working-directory>/bin

        # where xxx is a 3-digit number where each digit can be anything from 0 to 7.
        # Ref: https://wiki.archlinux.org/title/File_permissions_and_attributes#Numeric_method
        ```

    === "Microsoft Windows"
        1. Right click `<working-directory>/bin` directory > "Properties" > "Security" Tab.
        2. Set the appropriate permission for the folder.

7. Run `dxclient -V` to verify that the required version of DXClient command line is installed.

8. A folder named `store` will be created in your working directory. This is the shared volume location of your container. If you require to create a new volume directory for a different configuration, set the `VOLUME_DIR` to the desired directory name and run your task. For example:

    === "Linux and Apple macOS"
        ```bash
        export VOLUME_DIR=storeForScriptApplication

        # or if you want spaces in its value, enclosed it in double quotes ("")
        export VOLUME_DIR="store for script application"
        ```

    === "Microsoft Windows"
        ```batch
        set VOLUME_DIR=storeForScriptApplication

        :: or if you want spaces in its value
        set VOLUME_DIR=store for script application
        ```

        !!!warning
            Do not enclose the value of `VOLUME_DIR` in double quotes ("") in Windows. This will produce unwanted errors when executing dxclient commands.

     The `VOLUME_DIR` will require read and write access permissions. Set appropriate permissions for the `VOLUME_DIR` as per user/group/owner.

    === "Linux and Apple macOS"
        ```bash
        chmod xxx <working-directory>/<VOLUME_DIR>

        # where xxx is a 3-digit number where each digit can be anything from 0 to 7.
        # Ref: https://wiki.archlinux.org/title/File_permissions_and_attributes#Numeric_method
        ```

    === "Microsoft Windows"
        1. Right click `<working-directory>/<VOLUME_DIR>` directory > "Properties" > "Security" Tab.
        2. Set the appropriate permission for the folder.


9. You can find the configuration, logger, output, and sample files under location  `<working-directory>/<VOLUME_DIR>`.

    Common command arguments can be pre-configured inside the config.json file available under the `<working-directory>/<VOLUME_DIR>` folder. A sample configuration file that can be used on on-premises platforms in standalone, cluster (default-config.json) or kubernetes (default-config-kube.json) platforms is also available under <working-directory>/samples/sample-configurations for reference. If you want to override any of the parameters in the config.json, add them in your command line.

10. Refer to the sample pipeline provided to find out how to integrate the container image in the automation server.

11. By default, the logs will be available in UTC format. If needed, synchronize your local timezone from host to container using an environment variable as shown in the example below.

    Example Usage:
    
    === "Linux and Apple macOS"
        ```bash
        export Timezone=Asia/Kolkata
        ```
    
    === "Microsoft Windows"
        ```batch
        SET Timezone=Asia/Kolkata
        ```

## Installing DXClient using the source code package

!!! note
    You are encouraged to use the DXClient container image package from CF196 onwards for easier installation.

1.  Complete the following steps to install the DXClient tool in your local development workstation or automation server.

    !!! note
        If you are upgrading from CF19, CF191, or later releases, you should first unlink the current version using the following command before installing the newer version.

        === "Linux and Apple macOS"
            ```bash
            make unlink
            ```

        === "Microsoft Windows"
            ```batch
            make_unlink.bat
            ```

2.  Ensure that Node.js version 12.18.3 or later version is installed to the local workstation. The DXClient tool is supported on Microsoft Windows, Linux, and Apple macOS workstations and automation servers.

3.  Download the DXClient.zip file (DXClient_VX_XXXXXXXX-XXXX.zip) to a local directory on the local workstation from your DX 9.5 CF19 or later entitlements on the [HCL Software License Portal](https://www.hcltech.com/software/support/release). Reference the [Docker](../../../get_started/system_requirements/docker/index.md) topic for the latest list of HCL DX 9.5 files available for download.

4.  Extract the DXClient.zip file.

5.  From the extracted folder, run the following command.

    === "Linux and Apple macOS"
        ```bash
        make install
        ```

    === "Microsoft Windows"
        ```bash
        make_install.bat
        ```

6.  Optional: Run the following command to link your application to the local npm module in your machine. Refer to the following Notes section before you proceed.

    === "Linux and Apple macOS"
        ```bash
        make link
        ```

    === "Microsoft Windows"
        ```bash
        make_link.bat
        ```

    !!! note
        -   Avoid using this command when scripting deployments from an automation server (for example, in pipelines) as there is a chance of picking up the wrong dependencies during tool version upgrades.
        -   If the `link` command is not used (such as on automation servers), then use the following command to run the application:

        === "Linux and Apple macOS"
            ```bash
            ./bin/dxclient
            ```

        === "Microsoft Windows"
            ```bash
            node bin/dxclient
            ```

## Uninstalling DXClient using the source code package

-   To uninstall the DXClient tool, perform the following commands:

    === "Linux and Apple macOS"
        ```bash
        make clean
        ```

    === "Microsoft Windows"
        ```bash
        make_uninstall.bat
        ```

-   Optional: To unlink the DXClient tool, perform the following commands:

    === "Linux and Apple macOS"
        ```bash
        make unlink
        ```
    === "Microsoft Windows"
        ```bash
        make_unlink.bat
        ```

## Verifying your DXClient installation

Successful installation of the DXClient tool can be checked by using the "`dxclient -V`" command, which should show the version of the DXClient tool installed.

Once installed, commands can be executed using the DXClient tool to perform CI/CD actions on HCL DX 9.5 servers.

!!! important
    The DXClient version is mostly forward and backward compatible with the DX CF versions. However, in some cases, it might not work as expected if the CF versions are different. Make sure that the CF versions of both DXClient and DX Core are the same in your installation.

!!!note
    Refer to the list of features that were released in the following HCL DX 9.5 Container releases:

    -   HCL DX 9.5 CF214 release: **V1.23.0
        -   Lists all themes during Pull theme if themeName is not provided.
        -   Livesync is now supported in scaled DX environment setups.
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
    
1. The attribute `-dxConnectHostname` has been deprecated (since CF202) and removed (since CF210) and must be replaced with `-hostname` wherever necessary.
2. The attribute `-targetServerHostname`, `-targetServerPort`,`-targetServerUsername`,`-targetServerPassword` & `-targetServerProfileName` has been deprecated (since CF202) and removed (since CF210) and must be replaced with `-targetHostname`, `-targetDxConnectPort`,`-targetDxConnectUsername`,`-targetDxConnectPassword` & `-targetDxProfileName` respectively wherever necessary.
3. If deploying or importing huge CICD artifacts using DXClient to the Kubernetes environment, you might receive failure or request pending messages while you run the ceratin tasks. This might happen because of the connection getting closed by the load balancer due to timeout before the response is ready. In such situations, before re-triggering the request, we advise you to check your target server to verify if the artifact has been deployed/imported or the server is up, as the request was already triggered from the client-side. In cases of request pending you are expected to receive a `requestId` which you can use to check the status of response later. Find troubleshooting tips [here](troubleshooting_dxclient.md#troubleshooting-for-some-known-issues).
4. The maximum input file size allowed in DXClient is 256 MB currently. This limitation will be addressed in one of the future releases.
5. As of CF213, the property `DXCONNECT_MAX_MEMORY_SIZE_MB` in DXC_ConfigSettings Resource Environment Provider has been removed. Refer [DXC_ConfigSettings](dxconnect.md#resource-environment-provider-property-for-dxconnect) for more details.

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

## DXClient command line help

The following commands show the Help documents for DXClient command usage.

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

Use the following command to display the detailed help for a specific command:

```bash
dxclient help [command]
```

## HCLSoftware U learning materials

For an introduction and a demo on how to use DXClient, go to [Staging](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D505). To try it out yourself, refer to [DXClient Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-100_DXClient_for_Beginners.pdf).

???+ info "Related information"
    - [How to translate WCM library content using export and import WCM with DXClient](../dxclient/dxclient_artifact_types/wcm_mls_export_import.md)
    - [DXClient Artifact Types](../dxclient/dxclient_artifact_types/index.md)
    - [Troubleshooting DXClient](troubleshooting_dxclient.md)
    - [DXConnect](dxconnect.md)
    - [Sample Pipelines for use with HCL DXClient and Automation servers](sample_pipelines_for_use_with_dx_client_and_automation_servers.md)
    - [Using DAM staging](../../../manage_content/digital_assets/configuration/staging_dam/dam_subscription_staging.md)
    - [Create or update credential vault slot](../dxclient/dxclient_artifact_types/credentialvaultslot.md)
    - [Personalization rules](../dxclient/dxclient_artifact_types/personalization.md)
    - [Portlets](../dxclient/dxclient_artifact_types/portlets.md)
    - [Themes](../dxclient/dxclient_artifact_types/themes.md)
    - [Script applications](../dxclient/dxclient_artifact_types/scriptapplications.md)
    - [Resource environment provider](../dxclient/dxclient_artifact_types/resourceenvironments.md)

