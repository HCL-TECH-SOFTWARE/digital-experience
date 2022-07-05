# DXClient Artifact Types

This section provides information about the artifact types that are currently supported by the DXClient tool.

**Limitations:**

-   If deploying CICD artifacts using DXClient to the Red Hat OpenShift environment, you might receive failure messages while you run the deploy-theme, deploy-application, or restart-dx-core commands. This might happen because of a connection getting closed due to timeout before the response is ready. In such situations, before re-triggering the request, we advise you to check your target server to verify if the application has been deployed or the server is up, as the request was already triggered from the client-side.

**Notes:** The following list shows some of the deprecated parameters and the new parameters that replace them in CF201 and later releases. It is recommended that you start using the new parameters below because the old parameters might be removed in later releases:

-   `-dxConnectHostname` replaced by `-hostname`

    **Note:** The attribute `-dxConnectHostname` is deprecated in CF202 and later releases. It is recommended that you start using the replacement parameter `-hostname` starting from CF202 wherever necessary.

-   `-targetServerHostname` replaced by `-targetHostname`
-   `-targetServerPort ->` replaced by `-targetDxConnectPort`
-   `-targetServerUsername` replaced by `-targetDxConnectUsername`
-   `-targetServerPassword` replaced by `-targetDxConnectPassword`
-   `-targetServerProfileName` replaced by `-targetDxProfileName`

-   **[Portlets](../containerization/portlets.md)**  
This topic provides information about the deployment and undeployment of portlets.
-   **[Script applications](../containerization/scriptapplications.md)**  
This topic provides information about the deployment, undeployment, and restoration of script applications.
-   **[XML Access](../containerization/xmlaccess.md)**  
This topic provides information about the xmlaccess command that is used to export or import portlet configurations.
-   **[Themes](../containerization/themes.md)**  
This topic provides information about the deployment and undeployment of themes artifacts.
-   **[Digital Experience applications](../containerization/deployapplication.md)**  
This section provides information about the deployment of DX application artifacts by using the DXClient tool.
-   **[DX Core server](../containerization/dxcoreserver.md)**  
This topic provides information about restarting the DX Core server and on creating core server configuration report using the DXClient tool. The `dx-core-configuration-reports`command is used to generate the differential reports on various core configurations between two DX server nodes.
-   **[Exporting and importing WCM libraries](../containerization/wcmlibraries.md)**  
This section provides information about how to export and import WCM libraries using DXClient.
-   **[How to translate WCM library content using export and import WCM with DXClient](../wcm/wcm_mls_export_import.md)**  
The HCL Multilingual Solution \(MLS\) export and import capability allows you to support translation of the content of a library by exporting it into a format supported by a translation service and importing the translated content back into HCL Digital Experience using the DXClient tool.
-   **[Managing Web Content Syndicators and Subscribers using DXClient](../containerization/syndicatorsandsubscribers.md)**  
The section provides information about using the DXClient process to automate the management of Web Content Manager Syndicators, Subscribers, and get-syndication reports. For more information on the process and settings of the Web Content Manager Syndicators and Subscribers, see [How to manage syndicators and subscribers](../panel_help/wcm_syndication.md).
-   **[Create or update credential vault slot](../containerization/credentialvaultslot.md)**  
This topic describes the commands that are used to create or update credential vault slot in the DX server.
-   **[Shared library](../containerization/sharedlibrary.md)**  
Shared libraries are jar files representing code that is shared across multiple components of the customer, for example, portlets, themes, preprocessors, and others.
-   **[DAM artifacts](../containerization/dam_artifacts.md)**  
This section contains the commands for working with [Digital Asset Management](../digital_asset_mgmt/digital_asset_mgmt_overview.md) \(DAM\) schemas, managing DAM staging for subscription, or configuring periodic sync.
-   **[Personalization rules](../containerization/personalization.md)**  
This topic contains the commands that the administrators can use to export and import the personalization \(PZN\) rules from the source server to the target server as specified by the user.
-   **[Resource environment provider](../containerization/resourceenvironments.md)**  
This topic describes the commands that are used to create, update, delete, and retrieve custom properties from an existing resource environment provider. It also provides the commands to export or import multiple resource environment providers.
-   **[Managing virtual portals](../containerization/virtualportals.md)**  
This topic describes the commands that are used in managing the virtual portal activities such as creating, listing, importing, or exporting virtual portals.

**Parent topic:**[Deploy DX components using HCL DXClient and DXConnect](../containerization/deploy_dx_components_using_hcl_dx_client_and_dx_connect.md)

**Related information**  


[How to translate WCM library content using export and import WCM with DXClient](../wcm/wcm_mls_export_import.md)

[DXClient](../containerization/dxclient.md)

[Sample Pipelines for use with HCL DXClient and Automation servers](../containerization/sample_pipelines_for_use_with_dx_client_and_automation_servers.md)

[How to manage syndicators and subscribers](https://help.hcltechsw.com/digital-experience/digital-experience/8.5/panel_help/wcm_syndication.html)

