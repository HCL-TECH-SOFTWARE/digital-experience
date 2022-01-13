

DXClient | HCL Digital Experience





<!---->



[Jump to main content](#wh_topic_body) 






[HCL Digital Experience 9.5](../index.html)







* [HCL Digital Experience 9.5](../welcome/wp95_welcome.html)

[Index](../indexTerms.html "Index")






Search



















# DXClient | HCL Digital Experience



DXClient is a tool that helps developers and administrators manage tasks, such as
 uploading one or more portlets or Script Applications, from source development
 environments to target HCL DX 9.5 deployments. This tool is capable of taking artifacts
 developed locally and deploying them to DX 9.5 servers deployed to supported on-premises
 platforms in standalone, cluster, or farm-topologies and supported Kubernetes
 platforms.


Notes:
* DXClient is enabled in supported Kubernetes platforms from HCL Digital
 Experience 9.5 CF192 and later releases.
* DXClient is available as a Docker image from HCL DX 9.5 CF196 and later
 releases, See the [installation section](#dxclient__dxclient_docker) for more details.



DXClient is a [Node.js](https://nodejs.org/en/)-based CLI tool and requires Node.js to be installed as a
 prerequisite.


See video: [Getting Started with DXClient on Red Hat OpenShift using HCL
 Digital Experience Container Update CF194](https://www.youtube.com/watch?v=OphJ8-WcLxY)


**DXConnect**


DXConnect is a servlet-based application deployed on top of IBM WebSphere Application
 Server in the HCL DX 9.5 CF19 and later deployments, under the [Configuration
 Wizard profile - `cw_profile`](../config/cw_overview.html). DXConnect enables the DXClient
 tool to connect over an HTTP or HTTPS connection from a client development machine or
 remote server to a source or target HCL DX 9.5 server to execute certain tasks requested
 via DXClient commands.



## Architecture



![HCL DXClient Architecture diagram](../assets/HCLDXClient_Architecture_Diagram.jpg)

Notes:
1. HCL DX 9.5 CF19 or later version is installed on target servers, on [supported on premises platforms](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=17d6296a1b5df34077761fc58d4bcb03)
 (Microsoft Windows, Linux or IBM AIX).
2. Beginning with HCL DX 9.5 Container Update CF192 and later releases, the
 DXConnect Servlet is pre-configured and started on supported Red Hat
 OpenShift and Kubernetes platforms that DX 9.5 containers are deployed
 to.
3. For supported on premises platforms with HCL DX 9.5 CF19 and later releases,
 the DXConnect application needs to be installed (refer to [DXConnect
 Installation](dxconnect.html#dxconnect__dxconnectinstall)) and started under the Configuration Wizard
 (`cw_profile`) on target servers. For more information on
 starting the Configuration Wizard, refer to [Accessing the Configuration
 Wizard](../config/cw_run.html)Remember: Configuration
 Wizard Administrator credentials are required to access the DXConnect
 application.




## Installing using the Docker image


**Prerequisites:** You must ensure that Docker is installed on the
 workstation.


DXClient docker image comes with a script that you can use to run the docker image.
 This script creates a store directory,and copies the input files from the absolute
 path to the shared volume location. 1. Navigate to <working-directory> folder where you wish to use DXClient
 from.
2. Download the DXClient.zip file (DXClient\_VX\_XXXXXXXX-XXXX.zip) to a local
 directory on the local workstation from your HCL Digital Experience 9.5
 CF196 or higher entitlements on the HCL Software License Portal.
3. Extract the DXClient.zip file locally.
4. Run docker load < dxclient.tar.gz.
5. Add the execution shell script to the bin directory to the PATH variable to
 be able to call dxclient from any directory.
 
```
 export PATH=<working-directory>/bin:$PATH
```
For
 Microsoft Windows platforms:

use `dxclient.bat`
 script in the bin directory to the PATH variable to be able to call
 DXClient from any directory.
6. Set appropriate
 permission.
```
chmod xxx <working-directory>/bin
```
7. Run 'dxclient -V' to verify that the dxclient command line is installed.
 A folder named store will be created in your working directory. This
 is the shared volume location to your docker container.
8. Configuration, logger, output, and sample files under location -
 <working-directory>/store.

Common command arguments can be pre-configured inside the
 `config.json` file available under
 `<working-directory>/store` folder. A sample configuration
 file that could be used on-premises platforms in standalone, cluster platforms is
 also available under
 `<working-directory>/store/samples/sample-configurations/default-config.json`
 for
 reference.



## Installing using the node package file (deprecated in CF196)


**Prerequisites:** Node.js version 12.18.3 is the minimum supported version, and
 must be installed on the local workstation or automation server.


Note: DXClient node package is deprecated in the HCL Digital
 Experience Container CF196 release. It might be removed in the future releases. You
 are encouraged to use the [DXClient Docker package](#dxclient__dxclient_docker) from CF Container release CF196 and
 later.

1. Complete the following steps to install the DXClient tool in your local
 development workstation or automation server.Note: If you are upgrading from
 CF19, CF191, or later releases, you should first unlink the current
 version using the following command before installing the newer
 version.Syntax for Linux and Apple macOS
 platforms:
```
make unlink
```
Syntax
 for Microsoft Windows
 platforms:
```
make_unlink.bat
```
2. Ensure that Node.js version 12.18.3 or later version is installed to the
 local workstation. The DXClient tool is supported on Microsoft Windows,
 Linux, and Apple macOS workstations and automation servers.
3. Download the DXClient.zip file
 (DXClient\_VX\_XXXXXXXX-XXXX.zip) to a local
 directory on the local workstation from your DX 9.5 CF19 or later
 entitlements on the [HCL Software License Portal](https://www.hcltech.com/software/support/release). Reference the [Docker](../../9.5/containerization/docker.html) topic for the latest list of HCL DX 9.5 files available
 for download.
4. Extract the DXClient.zip file locally.
5. From the extracted folder, run the following command.For Linux and Apple
 macOS platforms:
```
make install
```
For Microsoft
 Windows platforms:
```
make_install.bat
```
The
 following commands are run:


![Install DXClient tool](../assets/Install_DXClient_Command.png)
6. Run the following command to link your application to the local npm module
 in your machine. Refer to the following Notes section before you
 proceed.For Linux and Apple MacOS
 platforms:
```
make link
```
For Microsoft Windows
 platforms:
```
make_link.bat
```
Notes:

	* Avoid using this command when scripting deployments from an
	 automation server (for example, in pipelines) as there is a
	 chance of picking up the wrong dependencies during tool
	 version upgrades.
	* If the `link` command is not used (such as on
	 automation servers), then use the following command to run
	 the application:For Linux and Apple MacOS
	 platforms:
	```
	./bin/dxclient
	```
	For
	 Microsoft Windows
	 platforms:
	```
	node bin/dxclient
	```




DXClient node installation configuration

Common command arguments can be pre-configured inside the
 `config.json` file available under
 `dist/src/configuration` folder. A sample
 configuration file that could be used for any of the supported
 Kubernetes platforms is also available under
 `samples/sample-configurations.json` for
 reference.
```
{
    "enableLogger": true,
    "dxProtocol": "",
    "hostname": "",
    "dxPort": "",
    "xmlConfigPath": "/wps/config",
    "dxUsername": "",
    "dxPassword": "",
    "dxSoapPort": "10033",
    "dxProfilePath": "",
    "dxConnectHostname": "",
    "dxConnectUsername": "",
    "dxConnectPassword": "",
    "dxConnectPort": "10202",
    "xmlFile": "",
    "warFile": "",
    "applicationFile": "",
    "applicationName": "",
    "themeName": "",
    "themePath": "",
    "outputFilePath": "",
    "dxConnectProtocol": "https",
    "wcmSiteArea": "",
    "excludes": [
        "^bin$",
        "^lib$",
        "^src$",
        "^node_modules$",
        "^\\.classpath$",
        "^\\.project$",
        "^\\..*ignore$",
        "^config.json$",
        "^sp-cmdln.log$",
        "^sp.bat$",
        "^sp.sh$"
    ],
    "wcmContentPath": "",
    "wcmContentName": "",
    "prebuiltZip": "",
    "contenthandlerPath": "/wps/mycontenthandler",
    "mainHtmlFile": "",
    "wcmContentTitle": "",
    "contentRoot": "",
    "wcmContentId": "",
    "virtualPortalContext": "",
    "projectContext": "",
    "versionName": "",
    "restoreAsPublished": false
}
```


DXClient node uninstalling


* To uninstall the DXClient tool, perform the following
 commands:For Linux and Apple MacOS
 platforms:
```
make clean
```
For
 Microsoft Windows
 platforms:
```
make uninstall.bat
```
* To unlink the DXClient tool, perform the following
 commands:For Linux and Apple MacOS
 platforms:
```
make unlink
```
For
 Microsoft Windows
 platforms:
```
make_unlink.bat
```






## Verify the DXClient installation


Successful installation of the DXClient tool can be checked by using the
 "`dxclient -V`" command, which should show the version of the
 DXClient tool installed. 


Once installed, commands can be executed using the DXClient tool to perform CI / CD
 actions on HCL DX 9.5 servers. Notes: Refer to the list of features that were released in the
 following HCL DX 9.5 Container releases:* HCL DX 9.5 CF199 release:
	+ [DAM
	 Staging](dam_subscription_staging.html "This topic contains the commands that administrators can use to configure the staging of Digital Asset Management (DAM) content. This allows you to manage subscriber registration or configure periodic sync.")
	+ [Create credential vault
	 slot](credentialvaultslot.html "This topic describes the commands that are used to create or update credential vault slot in the DX server.")
	+ [Create syndication relation](syndicatorsandsubscribers.html#syndicatorsandsubscribers__section_ndj_bcd_lrb)
	+ [Export and import
	 multiple resource environment providers](resourceenvironments.html "This topic describes the commands that are used to create, update, or delete custom properties from an existing resource environment. It also provides the commands to export or import multiple resource environment providers.")
	+ [Specify the context root for
	 exporting and importing personalization rules](personalization.html "This topic contains the commands that the administrators can use to export and import the personalization (PZN) rules from the source server to the target server as specified by the user.")
* HCL DX 9.5 CF198 release:
	+ [List DAM
	 schemas](damschemas.html#damschemas__listdamschema)
	+ [Personalization export and
	 import rules](personalization.html "This topic contains the commands that the administrators can use to export and import the personalization (PZN) rules from the source server to the target server as specified by the user.")
	+ [Resource environment
	 provider](resourceenvironments.html "This topic describes the commands that are used to create, update, or delete custom properties from an existing resource environment. It also provides the commands to export or import multiple resource environment providers.")
	+ [Manage virtual
	 portals](virtualportals.html "This topic describes the commands that are used in managing the virtual portal activities such as creating, listing, importing, or exporting virtual portals.")
* HCL DX 9.5 CF197 release:
	+ [Undeploy
	 portlets](portlets.html#portlets__section_xjb_2hg_w4b)
	+ [Deploy and undeploy themes](themes.html "This topic provides information about the deployment and undeployment of themes artifacts.")
	+ [Deploy application](deployapplication.html#deployapplication__deploydxapp)
	+ [manage get-syndication report](syndicatorsandsubscribers.html#syndicatorsandsubscribers__section_zfd_c1c_2qb)
	+ [Restart
	 Core](dxcoreserver.html#dxcoreserver__deploydxapp)
	+ [Delete
	 DAM schema](damschemas.html#damschemas__deletedamschema)
* HCL DX 9.5 CF196 release:
	+ [Shared library](sharedlibrary.html "Shared libraries are jar files representing code that is shared across multiple components of the customer, for example, portlets, themes, preprocessors, and others.")
* HCL DX 9.5 CF195 release:
	+ [Undeploy theme](themes.html#themes__section_rsy_qj3_ppb)
	+ [MLS export and
	 import of WCM library](../wcm/wcm_mls_export_import.html "The HCL Multilingual Solution (MLS) export and import capability allows you to support translation of the content of a library by exporting it into a format supported by a translation service and importing the translated content back into HCL Digital Experience using the DXClient tool.")
* HCL DX 9.5 CF193 release:
	+ [Restart DX Core server](dxcoreserver.html#dxcoreserver__deploydxapp)
	+ [Deploy Application](deployapplication.html#deployapplication__deploydxapp)
	+ [Managing syndicators](syndicatorsandsubscribers.html#syndicatorsandsubscribers__deploydxapp)
	+ [Managing subscribers](syndicatorsandsubscribers.html#syndicatorsandsubscribers__section_cwj_dpf_dpb)
* HCL DX 9.5 CF192 release:
	+ [Undeploy script applications](scriptapplications.html#scriptapplications__section_i2y_ttl_4nb)
	+ [Deploy theme](themes.html#themes__deploytheme) (EAR and WebDAV
	 based)
* HCL DX 9.5 CF19 release:
	+ [Deploy Portlets](portlets.html#portlets__section_xzq_tyv_v4b) or
	 [Undeploy portlets](portlets.html#portlets__section_xjb_2hg_w4b)
	+ [Deploy script applications](scriptapplications.html#scriptapplications__section_um4_jqg_w4b)
	+ [XML Access](xmlaccess.html#xmlaccess__xmlaccess)
	+ [Restore Script Application](scriptapplications.html#scriptapplications__section_fzm_yqg_w4b)


## DXClient commands


Command syntax conventions:
```
dxclient [command] [options]
```

Use the following command to execute the deploy portlet
 action:
```
dxclient deploy-portlet [options]
```

Use the following command to execute the undeploy portlet
 action:
```
dxclient undeploy-portlet [options]
```

Use the following command to execute the xmlaccess
 action:
```
dxclient xmlaccess [options]
```

Use the following command to execute the pull script application
 action:
```
dxclient deploy-scriptapplication pull [options]
```

Use the following command to execute the push script application
 action:
```
dxclient deploy-scriptapplication push [options]
```

Use the following command to execute the undeploy script application
 action:
```
dxclient undeploy-scriptapplication [options]
```

Use the following command to execute the restore script application
 action:
```
dxclient restore-scriptapplication [options]
```

Use the following command to execute the deploy application
 action:
```
dxclient deploy-application [options]
```

Use the following command to execute the DX Core restart
 action:
```
dxclient restart-dx-core
```

Use the following command to execute manage-subscriber
 action:
```
dxclient manage-subscriber -h
```

Use the following command to execute manage-syndicator
 action:
```
dxclient manage-syndicator -h
```

Use the following command to execute the deploy theme
 action:
```
dxclient deploy-theme [options]
```

Use the following command to execute the undeploy theme
 action:
```
dxclient undeploy-theme [options]

```

Use the following command to execute the manage-syndicator get-syndication-report
 action:
```
dxclient  manage-syndicator get-syndication-report [options]
```

Use the following command to execute the shared-library
 action:
```
dxclient  shared-library [options]
```

Use the following command to execute the delete DAM schema
 action:
```
dxclient delete-dam-schema [options]
```

Use the following command to list all DAM schemas
 present:
```
dxclient list-dam-schemas  [options]
```

Use the following command to export the personalization rules from the target
 server:
```
dxclient pzn-export  [options]
```

Use the following command to import the personalization rules into the target
 server:
```
dxclient pzn-import  [options]
```

Use the following command to manage virtual portal tasks in the DX
 server:
```
dxclient manage-virtual-portal [options]
```

Use the following command to register
 subscriber:
```
dxclient manage-dam-staging register-dam-subscriber [options]
```

Use the following command to deregister
 subscriber:
```
dxclient manage-dam-staging deregister-dam-subscriber  [options]
```

Use the following command to trigger manual
 sync:
```
dxclient manage-dam-staging trigger-staging  [options]
```

Use the following command to create credential vault slot in the DX
 server:
```
dxclient create-credential-vault  [options]
```

Use the following command to create the syndication relation between syndicator and
 subscriber in DX
 server:
```
dxclient create-syndication-relation  [options]
```

Use the following command to create, update, delete, export or import a custom
 property from an existing Resource Environment
 Provider:
```
dxclient resource-env-provider [options]
```


## DXClient Help commands


The following commands show the Help documents for DXClient command usage.


Use the following commands to display the Help document for
 DXClient:
```
dxclient
```

```
dxclient -h, --help 
```

Use the following command to display the DXClient version
 number:
```
dxclient -V, --version
```

Use the following command to display the detailed help for a specific
 command:
```
dxclient help [command]
```






On this page* [Architecture](#dxclient__dxclidnet_architecture)
* [Installing using the Docker image](#dxclient__dxclient_docker)
* [Installing using the node package file (deprecated in CF196)](#dxclient__dxclient_node)
* [Verify the DXClient installation](#dxclient__section_i2h_x11_2qb)
* [DXClient commands](#dxclient__section_gvt_xwv_v4b)
* [DXClient Help commands](#dxclient__section_bkx_bxv_v4b)







 
 Generated by [<oXygen/> XML WebHelp](http://www.oxygenxml.com/xml_webhelp.html) 









![]()




