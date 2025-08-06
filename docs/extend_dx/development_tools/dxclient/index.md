# DXClient

DXClient is a command line tool featuring a single, unified interface to all HCL Digital Experience (DX) automation and CI/CD-related tasks. It helps developers manage several DX tasks such as uploading one or more portlets, Script Applications, and themes. Administrators can manage WCM libraries, PZN rules, shared libraries, etc. 

DXClient can take artifacts developed locally and deploy them to HCL DX servers independently of whether these are deployed on-premises platforms in standalone, cluster, or farm-topologies, or in a container environment.

DXClient is meant to be the one-stop, platform-independent solution that lets you integrate HCL DX with any automation infrastructure of your choice.

- **[Installing DXClient](installing_dxclient.md)**  
This topic describes how to install, upgrade, verify, and uninstall DXClient.
- **[Configuring DXClient](./configuring_dxclient.md)**  
This topic describes how to configure DXClient in your HCL DX environment.
- **[DXClient commands](dxclient_commands.md)**  
This topic describes the different commands you can use in DXClient.
- **[DXClient artifact types](./dxclient_artifact_types/index.md)**  
This topic provides information about the artifact types that are currently supported by DXClient.
- **[Sample pipeline settings using DXClient](./sample_pipeline_settings_using_dxclient.md)**  
This topic provides sample pipelines for use with DXClient
- **[Troubleshooting DXClient](./troubleshooting_dxclient.md)**  
This topic describes how to troubleshoot DXClient issues.
- **[Limitations](./dxclient_limitations.md)**  
This topic describes the limitations of DXClient.
- **[DXConnect](./dxconnect.md)**  
This topic describes DXConnect, an application that enables the DXClient tool to connect over an HTTP or HTTPS connection from a client development machine or remote server to a source or target HCL DX 9.5 server.

## Architecture

The following image illustrates the DXClient Architecture diagram:

![HCL DXclient Architecture diagram](../../../images/HCLDXClient_Architecture_Diagram.png)

## What's New and release history

### Latest updates

For CF229, a few NPM libraries have been upgraded for code maintenance. These changes have no impact on the current workings of DXClient.

For a complete history of features added in each release, refer to the [Feature Release History](#feature-release-history) section.

### Feature release history

!!!note
    Refer to the list of features that were released in the following HCL DX 9.5 releases:

    -   HCL DX 9.5 CF229 release: **V229.0.0
        -  [NPM libraries are upgraded](#whats-new-and-release-history) for code maintenance.

    -   HCL DX 9.5 CF227 release: **V227.0.0
        -  Livesync is enabled for Style-sheet Components under WCM Design Library.

    -   HCL DX 9.5 CF226 release: **V226.0.0
        -  [Enabled TLS certificate validation while using DXClient.](./configuring_dxclient.md#configuring-tls-certificate-validation)

    -   HCL DX 9.5 CF225 release: **V225.0.0
        -  Livesync is enabled for Presentation Template under WCM Design Library.

    -   HCL DX 9.5 CF224 release: **V224.0.0
        -  New DXClient LiveSync sub-commands: [LiveSync push-wcm-design-library](./dxclient_artifact_types/livesync.md#livesync-push-wcm-design-library) and [pull-wcm-design-library](./dxclient_artifact_types/livesync.md#livesync-pull-wcm-design-library)
        - Livesync is enabled for HTML Components under WCM Design Library.

    -   HCL DX 9.5 CF221 release: **V221.0.0
        -   A one-time license agreement prompt is enabled. To skip the prompt, use the [accept-license](./dxclient_commands.md#information-commands) command.
        -   DXClient is now openly distributed in [NpmJS and Harbor repository](./installing_dxclient.md#public-and-free-installation-options).
        -   In [DAM Staging](../../../manage_content/digital_assets/configuration/staging_dam/dam_subscription_staging.md) tasks, the parameters `dxWASUsername`, `dxWASPassword`, `targetServerWASUsername`, and `targetServerWASPassword` are now deprecated and should no longer be used.
        -   The [DAM Reindexing](../../../manage_content/digital_assets/configuration/dam_indexing/using_dam_indexing.md) process involves indexing all existing assets while revalidating stale indexes. For more information on how to trigger DAM Reindexing, refer to [DXClient commands](./dxclient_commands.md#core-commands).

    -   HCL DX 9.5 CF219 release: **V1.28.0 
        - [Enabled multiple environment configuration in node version](./configuring_dxclient.md#configuring-multiple-environments)
    
    -   HCL DX 9.5 CF216 release: **V1.25.0
        -   [Shows version compatibility details between DX Core and DXClient](./dxclient_commands.md#information-commands)
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
        -   Removed parameters deprecated during CF201 and CF202 deployment.

        -   Added additional attribute - virtualPortalContext. [Exporting and Importing WCM libraries](../dxclient/dxclient_artifact_types/wcmlibraries.md)

    -   HCL DX 9.5 CF209 release: **V1.18.0
        -   [Restart All Core Pods in Kubernetes Deployment](../dxclient/dxclient_artifact_types/dxcoreserver.md#restart-dx-core-pods)

    -   HCL DX 9.5 CF208 release: **V1.17.0
        -   [Get all subscribers details for DAM staging](../../../manage_content/digital_assets/configuration/staging_dam/dam_subscription_staging.md#getting-all-subscribers-details-for-dam-staging)

    -   HCL DX 9.5 CF207 release: **V1.16.0
        -   Support to set different Container Runtime.

    -   HCL DX 9.5 CF202 release: **V1.11.0
        -   Deprecated parameter `dxConnectHostname`. It is recommended that you start using the replacement parameter `-hostname` starting from CF202 wherever necessary.
        -   [DAM Assets Export and import](../../../manage_content/digital_assets/usage/managing_dam/dam_exim.md)
        
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

## HCLSoftware U Learning Materials

To get an introduction to development for HCL DX, go to [HCL DX for Developers (Beginners)](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D412){target="_blank"}. Ensure you setup the DXClient that allows you to develop locally using the [DXClient for Beginners Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-100_DXClient_for_Beginners.pdf){target="_blank"}.

For an introduction and a demo on DX staging, go to [Staging for Beginners](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D505){target="_blank"}.

To learn how to use staging tools such as DXClient, Syndication, XMLAccess, ReleaseBuilder/Solution Installer, and ConfigEngine, go to [Staging for Intermediate Users](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3328){target="_blank"}. You can try it out using the [Staging Lab for Intermediate Users](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Staging_Lab.pdf){target="_blank"} and corresponding [Staging Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Staging_Lab_Resources.zip){target="_blank"}.
