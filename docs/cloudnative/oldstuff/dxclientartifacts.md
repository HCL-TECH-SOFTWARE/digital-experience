# DXClient Artifact Types

This section provides information about the artifact types that are currently supported by the DXClient tool.

**Limitation:** If deploying CICD artifacts using DXClient to the Red Hat OpenShift environment, you might receive failure messages while you run the deploy-theme, deploy-application, or restart-dx-core commands. This might happen because of a connection getting closed due to timeout before the response is ready. In such situations, before re-triggering the request, we advise you to check your target server to verify if the application has been deployed or the server is up, as the request was already triggered from the client-side.

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

