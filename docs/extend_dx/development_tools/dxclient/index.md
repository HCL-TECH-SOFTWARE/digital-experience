# DXClient

## Introduction

DXClient is a tool that helps developers and administrators manage tasks, such as uploading one or more portlets or Script Applications, manage environment properties,wcm libraries etc between source development environments to target HCL DX 9.5 deployments. This tool is capable of taking artifacts developed locally and deploying them to DX 9.5 servers deployed to supported on-premises platforms in standalone, cluster, or farm-topologies and supported Kubernetes platforms & helps to achieve CI/CD goals in the process.

!!!note "Important"
    DXClient version is mostly forward and backward compatible with the DX CF versions, however, in some cases it might not work as expected if the CF versions are different. Hence, ensure that the CF versions of both DXClient and DX Core are the same in your installation.

!!!note
    DXClient is enabled in supported Kubernetes platforms from HCL Digital Experience 9.5 CF192 and later releases:

 
We have 2 types of DXClient application packages.

   1.  DXClient is available as a container image from HCL DX 9.5 CF196 and later releases. See the [DXClient installation](#dxclient-installation) for more details. We recommend to use this as your 1st choice of installation.
   2. DXClient also exists as [Node Package](https://nodejs.org/en/)-based CLI tool and requires Node.js to be installed as a prerequisite. 

## Prerequisties

1. For option 1 , by default docker container runtime is supported and hence it requires to be installed. However, you may use any container runtime that implements OCI Runtime Specification. For example, Podman.
2. For option 2, Install [Node.js](https://nodejs.org/en/) runtime environment.

## DXConnect

DXConnect is a servlet-based application deployed on top of IBM WebSphere Application Server in the HCL DX 9.5 CF19 and later deployments, under the [Configuration Wizard profile - `cw_profile`](../../../deployment/manage/portal_admin_tools/cfg_wizard/configuration/index.md). DXConnect enables the DXClient tool to connect over an HTTP or HTTPS connection from a client development machine or remote server to a source or target HCL DX 9.5 server to execute certain tasks requested via DXClient commands.

For supported on premises platforms with HCL DX 9.5 CF19 and later releases, the DXConnect application needs to be installed (refer to [DXConnect](dxconnect.md)) and started under the Configuration Wizard (`cw_profile`) on target servers. For more information on starting the Configuration Wizard, refer to [Accessing the Configuration Wizard](../../../deployment/manage/portal_admin_tools/cfg_wizard/configuration/cw_run.md).

For supported container deployments,starting from CF192 and in later release, the DXConnect Servlet is pre-configured and started on the Configuration Wizard server.

!!!remember
    Configuration Wizard Administrator credentials are required to access the DXConnect application.
    
## Architecture

![HCL DXclient Architecture diagram](../../../images/HCLDXClient_Architecture_Diagram.jpg)

!!! note

    1.  HCL DX 9.5 CF19 or later version is installed on target servers, on [supported on premises platforms](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=17d6296a1b5df34077761fc58d4bcb03) (Microsoft Windows, Linux).
    
    2.  Beginning with HCL DX 9.5 Container Update CF192 and later releases, the DXConnect Servlet is pre-configured and started on supported Red Hat OpenShift and Kubernetes platforms that DX 9.5 containers are deployed to.
    
    3.  For supported on premises platforms with HCL DX 9.5 CF19 and later releases, the DXConnect application needs to be installed (refer to [DXConnect](dxconnect.md)) and started under the Configuration Wizard (`cw_profile`) on target servers. For more information on starting the Configuration Wizard, refer to [Accessing the Configuration Wizard](../../../deployment/manage/portal_admin_tools/cfg_wizard/configuration/cw_run.md).

## DXClient installation using Container Image

DXClient package comes with a script that you can use to run the container image. This script creates a store directory and copies the input files from the absolute path to the shared volume location.

!!!note
    When you upgrade to use the container image DXClient, you should first uninstall the nodejs DXClient.

See video: [CI/CD – DXClient in Container](https://www.youtube.com/watch?v=IFr_frVlojc)

 1. Navigate to the `<working-directory>` folder, where you wish to use dxclient from.

 2. Download the DXClient.zip file (DXClient_VX_XXXXXXXX-XXXX.zip) to a local directory on the local workstation from your HCL Digital Experience 9.5 CF196 or higher entitlements on the HCL Software License Portal.

    !!! note
        If you are upgrading from the node to container image version of DXClient, you must first uninstall or unlink the current version using the following command before installing the newer version.

        Syntax for Linux and Apple macOS platforms:
         ```
         make unlink
         ```

        Syntax for Microsoft Windows platforms:
         ```
         make_unlink.bat
         ```

 3. Extract the DXClient.zip file locally.

!!! note
    To install DXClient using any OCI-based Container Runtimes, run this command before proceeding further.
    ```
    export CONTAINER_RUNTIME=<YOUR_CONTAINER_RUNTIME> 

    For example: export CONTAINER_RUNTIME=podman
    ```   

 4. Run `docker load < dxclient.tar.gz`.

 5. Optional (It is advisable to not set this incase you run multiple DXClient versions in your system). Open terminal, add the execution shell script to the bin directory to the PATH variable, to call dxclient from any directory.

    ```
    export PATH=<working-directory>/bin:$PATH
    ```

    For Microsoft Windows platforms:

    Open command prompt, add `dxclient.bat` script in the bin directory to the PATH variable, to call DXClient from any directory.

    ```
    set PATH=<working-directory>\bin;%PATH%
    ```

    !!! note
        You will loose these changes by closing the terminal/command prompt. If you set in system path permanently, kindly take the necessary steps to remove it.

 6. Set appropriate permission.

    ```
    chmod xxx <working-directory>/bin
    ```

 7. Run `dxclient -V` to verify that the dxclient command line is installed.
    
 8. A folder named `store` will be created in your working directory. This is the shared volume location of your container. If you require to create a new volume directory for a different configuration, set the `VOLUME_DIR` to the desired directory name and run your task. For example,

    ```
    export VOLUME_DIR=storeForScriptApplication
    ```
 9. You can find the configuration, logger, output, and sample files under location  `<working-directory>/store`.

    Common command arguments can be pre-configured inside the config.json file available under the `<working-directory>/store` folder. A sample configuration file that could be used on-premises platforms in standalone, cluster (default-config.json) or kubernetes (default-config-kube.json) platforms is also available under <working-directory>/store/samples/sample-configurations for reference. In case you wish to override any of the parameters in the config.json, just add them in your command line.

 10. Refer to the sample pipeline provided to find out how to integrate the container image directly (without bin script) in the automation server.

 11. By default, the logs will be available in UTC format, If needed synchronize your local timezone from host to container using an environment variable as given in the example below.

    Example Usage:
    ```
    export Timezone=Asia/Kolkata
    ```
    For Microsoft Windows platforms:
    ```
    SET Timezone=Asia/Kolkata
    ```
 12. The attribute `-dxConnectHostname` has been deprecated and removed and must be replaced with `-hostname` wherever necessary.


## DXClient installation configuration

Common command arguments can be pre-configured inside the `config.json` file available under dist/src/configuration folder. A sample configuration file that could be used on-premises platforms in standalone, cluster (default-config.json) or kubernetes (default-config-kube.json) platforms is also available under <working-directory>/store/samples/sample-configurations for reference. In case you wish to override any of the parameters in the config.json, just add them in your command line.

```
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

## Installing using the Node package file 

**Prerequisites:** Node.js version 12.18.3 is the minimum supported version, and must be installed on the local workstation or automation server.

See video: [Getting Started with DXClient on Red Hat OpenShift using HCL Digital Experience Container Update CF194](https://www.youtube.com/watch?v=OphJ8-WcLxY)

!!! note
    You are encouraged to use the DXClient container image package from CF196 onwards for easier installation.

1.  Complete the following steps to install the DXClient tool in your local development workstation or automation server.

    !!! note
        If you are upgrading from CF19, CF191, or later releases, you should first unlink the current version using the following command before installing the newer version.

        Syntax for Linux and Apple macOS platforms:
        ```
        make unlink
        ```

        Syntax for Microsoft Windows platforms:
        ```
        make_unlink.bat
        ```

2.  Ensure that Node.js version 12.18.3 or later version is installed to the local workstation. The DXClient tool is supported on Microsoft Windows, Linux, and Apple macOS workstations and automation servers.3.  Download the DXClient.zip file (DXClient_VX_XXXXXXXX-XXXX.zip) to a local directory on the local workstation from your DX 9.5 CF19 or later entitlements on the [HCL Software License Portal](https://www.hcltech.com/software/support/release). Reference the [Docker](../../../get_started/system_requirements/docker/index.md) topic for the latest list of HCL DX 9.5 files available for download.

3.  Extract the DXClient.zip file locally.

4.  From the extracted folder, run the following command.

    For Linux and Apple macOS platforms:

    ```
    make install
    ```

    For Microsoft Windows platforms:

    ```
    make_install.bat
    ```

    The following commands are run:

    ![Install DXClient tool](../../../images/Install_DXClient_Command.png)

6.  (Optional) Run the following command to link your application to the local npm module in your machine. Refer to the following Notes section before you proceed.

    For Linux and Apple MacOS platforms:

    ```
    make link
    ```

    For Microsoft Windows platforms:

    ```
    make_link.bat
    ```

    !!! note
        -   Avoid using this command when scripting deployments from an automation server (for example, in pipelines) as there is a chance of picking up the wrong dependencies during tool version upgrades.
        -   If the `link` command is not used (such as on automation servers), then use the following command to run the application:

        For Linux and Apple MacOS platforms:

        ```
        ./bin/dxclient
        ```

        For Microsoft Windows platforms:

        ```
        node bin/dxclient
        ```


**DXClient node uninstall**

 -   To uninstall the DXClient tool, perform the following commands:

    For Linux and Apple MacOS platforms:

    ```
    make clean
    ```

    For Microsoft Windows platforms:
    ```
    make uninstall.bat
    ```

-   **If linked** To unlink the DXClient tool, perform the following commands:

    For Linux and Apple MacOS platforms:

    ```
    make unlink
    ```

    For Microsoft Windows platforms:

    ```
    make_unlink.bat
    ```


## Verify the DXClient installation

Successful installation of the DXClient tool can be checked by using the "`dxclient -V`" command, which should show the version of the DXClient tool installed.

Once installed, commands can be executed using the DXClient tool to perform CI / CD actions on HCL DX 9.5 servers.

!!! note 
    Refer to the list of features that were released in the following HCL DX 9.5 Container releases:

    -   HCL DX 9.5 CF210 release:
        -   Removed paramaters deprecated during CF201 & CF202 deployment.
        -   [Exporting and Importing WCM libraries](../dxclient/dxclient_artifact_types/wcmlibraries.md)

    -   HCL DX 9.5 CF209 release:
        -   [Restart All Core Pods in Kubernetes Deployment](../dxclient/dxclient_artifact_types/dxcoreserver.md#restart-dx-core-pods)

    -   HCL DX 9.5 CF208 release:
        -   [Get all subscribers details for DAM staging](../../../manage_content/digital_assets/configuration/staging_dam/dam_subscription_staging.md#get-all-subscribers-details-for-dam-staging)

    -   HCL DX 9.5 CF207 release:
        -   Support to set different Container Runtimes.

    -   HCL DX 9.5 CF202 release:
        -   Deprecated parameter `dxConnectHostname`. It is recommended that you start using the replacement parameter `-hostname` starting from CF202 wherever necessary.

        -   [DAM Assets Export & import](https://opensource.hcltechsw.com/digital-experience/CF207/manage_content/digital_assets/usage/managing_dam/dam_exim/)
        
    -   HCL DX 9.5 CF201 release:
        -   An optional parameter `requestId` added to [Deploy theme](../dxclient/dxclient_artifact_types/themes.md), [Deploy application](../dxclient/dxclient_artifact_types/scriptapplications.md#deploy-script-applications), [Restart DX Core server](../dxclient/dxclient_artifact_types/dxcoreserver.md#restart-dx-core-server), and [Manage virtual portals](../dxclient/dxclient_artifact_types/virtualportals.md).
        
        -   Retrieve feature added to the [Resource environment provider](../dxclient/dxclient_artifact_types/resourceenvironments.md).
        
        -   [Accessing ConfigWizard in container environment](../../../deployment/manage/portal_admin_tools/cfg_wizard/configuration/cw_run.md)
        
        -   Note that a few parameters are deprecated and replaced with new parameters in the DX Core configuration reports. For information, see [DX Core server configuration report](../dxclient/dxclient_artifact_types/dxcoreserver.md#dx-core-server-configuration-report).
    
    -   HCL DX 9.5 CF200 release:
        -   [Exporting and Importing WCM libraries](../dxclient/dxclient_artifact_types/wcmlibraries.md)
        -   [DX Core server configuration report](../dxclient/dxclient_artifact_types/dxcoreserver.md#dx-core-server-configuration-report)
    
    -   HCL DX 9.5 CF199 release:
        -   [DAM Staging](../../../manage_content/digital_assets/configuration/staging_dam/dam_subscription_staging.md)
        -   [Create credential vault slot](../dxclient/dxclient_artifact_types/credentialvaultslot.md)
        -   [Create syndication relation](../dxclient/dxclient_artifact_types/syndicatorsandsubscribers.md)
        -   [Export and import multiple resource environment providers](../dxclient/dxclient_artifact_types/resourceenvironments.md)
        -   [Specify the context root for exporting and importing personalization rules](../dxclient/dxclient_artifact_types/personalization.md)

    -   HCL DX 9.5 CF198 release:
        -   [List DAM schemas](../dxclient/dxclient_artifact_types/dam_artifacts/damschemas.md)
        -   [Personalization export and import rules](../dxclient/dxclient_artifact_types/personalization.md)
        -   [Resource environment provider](../dxclient/dxclient_artifact_types/resourceenvironments.md)
        -   [Manage virtual portals](../dxclient/dxclient_artifact_types/virtualportals.md)

    -   HCL DX 9.5 CF197 release:
        -   [Undeploy portlets](../dxclient/dxclient_artifact_types/portlets.md)
        -   [Deploy and undeploy themes](../dxclient/dxclient_artifact_types/themes.md)
        -   [Deploy application](../dxclient/dxclient_artifact_types/deployapplication.md)
        -   [manage get-syndication report](../dxclient/dxclient_artifact_types/syndicatorsandsubscribers.md)
        -   [Restart Core](../dxclient/dxclient_artifact_types/dxcoreserver.md)
        -   [Delete DAM schema](../dxclient/dxclient_artifact_types/dam_artifacts/damschemas.md)
    
    -   HCL DX 9.5 CF196 release:
        -   [Shared library](../dxclient/dxclient_artifact_types/sharedlibrary.md)
    
    -   HCL DX 9.5 CF195 release:
        -   [Undeploy theme](../dxclient/dxclient_artifact_types/themes.md)
        -   [MLS export and import of WCM library](../dxclient/dxclient_artifact_types/wcm_mls_export_import.md)

    -   HCL DX 9.5 CF193 release:
        -   [Restart DX Core server](../dxclient/dxclient_artifact_types/dxcoreserver.md)
        -   [Deploy Application](../dxclient/dxclient_artifact_types/deployapplication.md)
        -   [Managing syndicators](../dxclient/dxclient_artifact_types/syndicatorsandsubscribers.md)
        -   [Managing subscribers](../dxclient/dxclient_artifact_types/syndicatorsandsubscribers.md)

    -   HCL DX 9.5 CF192 release:
        -   [Undeploy script applications](../dxclient/dxclient_artifact_types/scriptapplications.md)
        -   [Deploy theme](../dxclient/dxclient_artifact_types/themes.md) (EAR and WebDAV based)

    -   HCL DX 9.5 CF19 release:
        -   [Deploy Portlets](../dxclient/dxclient_artifact_types/portlets.md)
        -   [Deploy script applications](../dxclient/dxclient_artifact_types/scriptapplications.md)
        -   [XML Access](../dxclient/dxclient_artifact_types/xmlaccess.md)
        -   [Restore Script Application](../dxclient/dxclient_artifact_types/scriptapplications.md)

## DXClient commands

Command syntax conventions:

```
dxclient [command] [options]
```

Use the following command to execute the deploy portlet action:

```
dxclient deploy-portlet [options]
```

Use the following command to execute the undeploy portlet action:

```
dxclient undeploy-portlet [options]
```

Use the following command to execute the xmlaccess action:

```
dxclient xmlaccess [options]
```

Use the following command to execute the *pull* script application action:

```
dxclient deploy-scriptapplication pull [options]
```

Use the following command to execute the *push* script application action:

```
dxclient deploy-scriptapplication push [options]
```

Use the following command to execute the undeploy script application action:

```
dxclient undeploy-scriptapplication [options]
```

Use the following command to execute the restore script application action:

```
dxclient restore-scriptapplication [options]
```

Use the following command to execute the deploy application action:

```
dxclient deploy-application [options]
```

Use the following command to execute the DX Core restart action:

```
dxclient restart-dx-core
```

Use the following command to restart DX Core pods in a Kubernetes deployment:

```
dxclient restart-core-pods [options]
```

Use the following command to execute manage-subscriber action:

```
dxclient manage-subscriber -h
```

Use the following command to execute manage-syndicator action:

```
dxclient manage-syndicator -h
```

Use the following command to execute the deploy theme action:

```
dxclient deploy-theme [options]
```

Use the following command to execute the undeploy theme action:

```
dxclient undeploy-theme [options]

```

Use the following command to execute the manage-syndicator get-syndication-report action:

```
dxclient  manage-syndicator get-syndication-report [options]
```

Use the following command to execute the shared-library action:

```
dxclient  shared-library [options]
```

Use the following command to execute the delete DAM schema action:

```
dxclient delete-dam-schema [options]
```

Use the following command to list all DAM schemas present:

```
dxclient list-dam-schemas  [options]
```

Use the following command to export the personalization rules from the target server:

```
dxclient pzn-export  [options]
```

Use the following command to import the personalization rules into the target server:

```
dxclient pzn-import  [options]
```

Use the following command to manage virtual portal tasks in the DX server:

```
dxclient manage-virtual-portal [options]
```

Use the following command to register subscriber:

```
dxclient manage-dam-staging register-dam-subscriber [options]
```

Use the following command to deregister subscriber:

```
dxclient manage-dam-staging deregister-dam-subscriber  [options]
```

Use the following command to trigger manual sync:

```
dxclient manage-dam-staging trigger-staging  [options]
```

Use the following command to create credential vault slot in the DX server:

```
dxclient create-credential-vault  [options]
```

Use the following command to create the syndication relation between syndicator and subscriber in DX server:

```
dxclient create-syndication-relation  [options]
```

Use the following command to create, update, delete, export or import a custom property from an existing Resource Environment Provider:

```
dxclient resource-env-provider [options]
```

Use this command to export WCM libraries:

```
dxclient wcm-library-export

```

Use this command to import WCM libraries:

```
dxclient wcm-library-import

```

Use the `dx-core-configuration-reports` command to get a summary of the configurations of a single DX server or both source and target DX servers, which users can use to compare.

```
dxclient dx-core-configuration-reports [OPTIONS]
```

## DXClient Help commands

The following commands show the Help documents for DXClient command usage.

Use the following commands to display the Help document for DXClient:

```
dxclient
```

```
dxclient -h, --help 
```

Use the following command to display the DXClient version number:

```
dxclient -V, --version
```

Use the following command to display the detailed help for a specific command:

```
dxclient help [command]
```

## Accessing the ConfigWizard admin console in a container environment

You can access the ConfigWizard admin console in a container environment from your local system. For more information, refer to [Accessing the ConfigWizard admin console in a container environment](https://help.hcltechsw.com/digital-experience/9.5/containerization/helm_access_configwizard.html).



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

