# DXClient

DXClient is a tool that helps developers and administrators manage tasks, such as uploading one or more portlets or Script Applications, from source development environments to target HCL DX 9.5 deployments. This tool is capable of taking artifacts developed locally and deploying them to DX 9.5 servers deployed to supported on-premises platforms in standalone, cluster, or farm-topologies and supported Kubernetes platforms.

**Important:** DXClient version is mostly forward and backward compatible with the DX CF versions, however, in some cases it might not work as expected if the CF versions are different. Hence, ensure that the CF versions of both DXClient and DX Core are the same in your installation.

**Notes:**

DXClient is enabled in supported Kubernetes platforms from HCL Digital Experience 9.5 CF192 and later releases:

-   DXClient is available as a Docker image from HCL DX 9.5 CF196 and later releases, See the [Installation section](#dxclient_docker) for more details.
-   DXClient also exists as [Node.js](https://nodejs.org/en/)-based CLI tool and requires Node.js to be installed as a prerequisite. However, this is deprecated in the HCL Digital Experience Container CF196 release.

**DXConnect**

DXConnect is a servlet-based application deployed on top of IBM WebSphere Application Server in the HCL DX 9.5 CF19 and later deployments, under the [Configuration Wizard profile - `cw_profile`](../config/cw_overview.md). DXConnect enables the DXClient tool to connect over an HTTP or HTTPS connection from a client development machine or remote server to a source or target HCL DX 9.5 server to execute certain tasks requested via DXClient commands.

## Architecture

![HCL DXClient Architecture diagram](../assets/HCLDXClient_Architecture_Diagram.jpg)

**Notes:**

1.  HCL DX 9.5 CF19 or later version is installed on target servers, on [supported on premises platforms](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=17d6296a1b5df34077761fc58d4bcb03) \(Microsoft Windows, Linux or IBM AIX\).
2.  Beginning with HCL DX 9.5 Container Update CF192 and later releases, the DXConnect Servlet is pre-configured and started on supported Red Hat OpenShift and Kubernetes platforms that DX 9.5 containers are deployed to.
3.  For supported on premises platforms with HCL DX 9.5 CF19 and later releases, the DXConnect application needs to be installed \(refer to [DXConnect Installation](dxconnect.md#dxconnectinstall)\) and started under the Configuration Wizard \(`cw_profile`\) on target servers. For more information on starting the Configuration Wizard, refer to [Accessing the Configuration Wizard](../config/cw_run.md)

    **Remember:** Configuration Wizard Administrator credentials are required to access the DXConnect application.


## Installing using the Docker image

**Prerequisites:** You must ensure that Docker is installed on the workstation.

**Note:** When you upgrade to use the Docker image DXClient, you should first uninstall the nodejs DXClient.

DXClient docker image comes with a script that you can use to run the docker image. This script creates a store directory, and copies the input files from the absolute path to the shared volume location.

See video: [CI/CD – DXClient in Container](https://www.youtube.com/watch?v=IFr_frVlojc)

1.  Navigate to <working-directory\> folder where you wish to use DXClient from.
2.  Download the DXClient.zip file \(DXClient\_VX\_XXXXXXXX-XXXX.zip\) to a local directory on the local workstation from your HCL Digital Experience 9.5 CF196 or higher entitlements on the HCL Software License Portal.

    **Note:** If you are upgrading from the node to Docker image version of DXClient, you must first uninstall or unlink the current version using the following command before installing the newer version.

    Syntax for Linux and Apple macOS platforms:

    ```
    make unlink
    ```

    Syntax for Microsoft Windows platforms:

    ```
    make_unlink.bat
    ```

3.  Extract the DXClient.zip file locally.
4.  To work with multiple versions of DXClient, update the `IMAGE_TAG` reference in the scripts file under the `/bin` folder. For example, `IMAGE_TAG=v95_CF200_20211201-1021`. By default it will be set in the executable script.
5.  Run docker load < dxclient.tar.gz.
6.  Add the execution shell script to the bin directory to the PATH variable to be able to call dxclient from any directory.

    ```
     export PATH=<working-directory>/bin:$PATH
    ```

    For Microsoft Windows platforms:

    use `dxclient.bat` script in the bin directory to the PATH variable to be able to call DXClient from any directory.

7.  Set appropriate permission.

    ```
    chmod xxx <working-directory>/bin
    ```

8.  Run 'dxclient -V' to verify that the dxclient command line is installed.

    A folder named store will be created in your working directory. This is the shared volume location to your docker container.

9.  Configuration, logger, output, and sample files under location - <working-directory\>/store.

Common command arguments can be pre-configured inside the `config.json` file available under `<working-directory>/store` folder. A sample configuration file that could be used on-premises platforms in standalone, cluster platforms is also available under `<working-directory>/store/samples/sample-configurations/default-config.json` for reference.

## DXClient installation configuration

Common command arguments can be pre-configured inside the `config.json` file available under `dist/src/configuration` folder. A sample configuration file that could be used for any of the supported Kubernetes platforms is also available under `samples/sample-configurations.json` for reference.

```

{
    "enableLogger": true,
    "enableBackup": "false",
    "dxProtocol": "",
    "hostname": "",
    "dxPort": "",
    "dxContextRoot":"/wps",
    "xmlConfigPath": "/wps/config",
    "dxUsername": "",
    "dxPassword": "",
    "dxSoapPort": "10033",
    "dxProfileName": "wp_profile",
    "dxProfilePath": "",
    "dxConnectHostname": "",
    "dxConnectUsername": "",
    "dxConnectPassword": "",
    "dxConnectPort": "10202",
    "dxWASUsername": "",
    "dxWASPassword": "",
    "dxConnectProtocol": "https",
    "wcmSiteArea": "",
    "wcmContentPath": "",
    "wcmContentName": "",
    "contenthandlerPath": "/wps/mycontenthandler",
    "wcmContentId": "",
    "restoreAsPublished": false,
    "wcmLibraryId": "",
    "virtualPortalContext": "",
    "projectContext": "",
    "wcmLibraryName": "",
    "lastModifiedAfter": "",
    "damAPIPort": "",
    "ringAPIPort": "",
    "damAPIVersion": "",
    "ringAPIVersion": "",
    "wcmProjectName": "",
    "targetHostname": "",
    "targetDxConnectPort": "",
    "targetDxConnectUsername":"",
    "targetDxConnectPassword":"",
    "targetDxProfileName": ""
}

```

## Installing using the node package file \(deprecated in CF196\)

**Prerequisites:** Node.js version 12.18.3 is the minimum supported version, and must be installed on the local workstation or automation server.

See video: [Getting Started with DXClient on Red Hat OpenShift using HCL Digital Experience Container Update CF194](https://www.youtube.com/watch?v=OphJ8-WcLxY)

**Note:** DXClient node package is deprecated in the HCL Digital Experience Container CF196 release. It might be removed in the future releases. You are encouraged to use the [DXClient Docker package](#dxclient_docker) from CF Container release CF196 and later.

1.  Complete the following steps to install the DXClient tool in your local development workstation or automation server.

    **Note:** If you are upgrading from CF19, CF191, or later releases, you should first unlink the current version using the following command before installing the newer version.

    Syntax for Linux and Apple macOS platforms:

    ```
    make unlink
    ```

    Syntax for Microsoft Windows platforms:

    ```
    make_unlink.bat
    ```

2.  Ensure that Node.js version 12.18.3 or later version is installed to the local workstation. The DXClient tool is supported on Microsoft Windows, Linux, and Apple macOS workstations and automation servers.
3.  Download the DXClient.zip file \(DXClient\_VX\_XXXXXXXX-XXXX.zip\) to a local directory on the local workstation from your DX 9.5 CF19 or later entitlements on the [HCL Software License Portal](https://www.hcltech.com/software/support/release). Reference the [Docker](../../9.5/containerization/docker.md) topic for the latest list of HCL DX 9.5 files available for download.
4.  Extract the DXClient.zip file locally.
5.  From the extracted folder, run the following command.

    For Linux and Apple macOS platforms:

    ```
    make install
    ```

    For Microsoft Windows platforms:

    ```
    make_install.bat
    ```

    The following commands are run:

    ![Install DXClient tool](../assets/Install_DXClient_Command.png)

6.  Run the following command to link your application to the local npm module in your machine. Refer to the following Notes section before you proceed.

    For Linux and Apple MacOS platforms:

    ```
    make link
    ```

    For Microsoft Windows platforms:

    ```
    make_link.bat
    ```

    **Notes:**

    -   Avoid using this command when scripting deployments from an automation server \(for example, in pipelines\) as there is a chance of picking up the wrong dependencies during tool version upgrades.
    -   If the `link` command is not used \(such as on automation servers\), then use the following command to run the application:

        For Linux and Apple MacOS platforms:

        ```
        ./bin/dxclient
        ```

        For Microsoft Windows platforms:

        ```
        node bin/dxclient
        ```


-   **DXClient node uninstalling**

    -   To uninstall the DXClient tool, perform the following commands:

        For Linux and Apple MacOS platforms:

        ```
        make clean
        ```

        For Microsoft Windows platforms:

        ```
        make uninstall.bat
        ```

    -   To unlink the DXClient tool, perform the following commands:

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

**Notes:** Refer to the list of features that were released in the following HCL DX 9.5 Container releases:

-   HCL DX 9.5 CF201 release:
    -   An optional parameter `requestId` added to [Deploy theme](themes.md#deploytheme), [Deploy application](deployapplication.md#deploydxapp), [Restart DX Core server](dxcoreserver.md#deploydxapp), and [Manage virtual portals](virtualportals.md).
    -   Retrieve feature added to the [Resource environment provider](resourceenvironments.md).
    -   [Accessing ConfigWizard in container environment](helm_access_configwizard.md)
    -   Note that a few parameters are deprecated and replaced with new parameters in the DX Core configuration reports. For information, see [DX Core server configuration report](dxcoreserver.md#dxcoreconfigreport)
-   HCL DX 9.5 CF200 release:
    -   [Exporting and Importing WCM libraries](wcmlibraries.md)
    -   [DX Core server configuration report](dxcoreserver.md#dxcoreconfigreport)
-   HCL DX 9.5 CF199 release:
    -   [DAM Staging](dam_subscription_staging.md)
    -   [Create credential vault slot](credentialvaultslot.md)
    -   [Create syndication relation](syndicatorsandsubscribers.md#section_ndj_bcd_lrb)
    -   [Export and import multiple resource environment providers](resourceenvironments.md)
    -   [Specify the context root for exporting and importing personalization rules](personalization.md)
-   HCL DX 9.5 CF198 release:
    -   [List DAM schemas](damschemas.md#listdamschema)
    -   [Personalization export and import rules](personalization.md)
    -   [Resource environment provider](resourceenvironments.md)
    -   [Manage virtual portals](virtualportals.md)
-   HCL DX 9.5 CF197 release:
    -   [Undeploy portlets](portlets.md#section_xjb_2hg_w4b)
    -   [Deploy and undeploy themes](themes.md)
    -   [Deploy application](deployapplication.md#deploydxapp)
    -   [manage get-syndication report](syndicatorsandsubscribers.md#section_zfd_c1c_2qb)
    -   [Restart Core](dxcoreserver.md#deploydxapp)
    -   [Delete DAM schema](damschemas.md#deletedamschema)
-   HCL DX 9.5 CF196 release:
    -   [Shared library](sharedlibrary.md)
-   HCL DX 9.5 CF195 release:
    -   [Undeploy theme](themes.md#section_rsy_qj3_ppb)
    -   [MLS export and import of WCM library](../wcm/wcm_mls_export_import.md)
-   HCL DX 9.5 CF193 release:
    -   [Restart DX Core server](dxcoreserver.md#deploydxapp)
    -   [Deploy Application](deployapplication.md#deploydxapp)
    -   [Managing syndicators](syndicatorsandsubscribers.md#deploydxapp)
    -   [Managing subscribers](syndicatorsandsubscribers.md#section_cwj_dpf_dpb)
-   HCL DX 9.5 CF192 release:
    -   [Undeploy script applications](scriptapplications.md#section_i2y_ttl_4nb)
    -   [Deploy theme](themes.md#deploytheme) \(EAR and WebDAV based\)
-   HCL DX 9.5 CF19 release:
    -   [Deploy Portlets](portlets.md#section_xzq_tyv_v4b) or [Undeploy portlets](portlets.md#section_xjb_2hg_w4b)
    -   [Deploy script applications](scriptapplications.md#section_um4_jqg_w4b)
    -   [XML Access](xmlaccess.md#xmlaccess)
    -   [Restore Script Application](scriptapplications.md#section_fzm_yqg_w4b)

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

Use this command to export WCM libraries

```
dxclient wcm-library-export

```

Use this command to import WCM libraries

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

You can access the ConfigWizard admin console in a container environment from your local system. For more information, refer to [Accessing the ConfigWizard admin console in a container environment](helm_access_configwizard.md).

**Parent topic:**[Deploy DX components using HCL DXClient and DXConnect](../containerization/deploy_dx_components_using_hcl_dx_client_and_dx_connect.md)

