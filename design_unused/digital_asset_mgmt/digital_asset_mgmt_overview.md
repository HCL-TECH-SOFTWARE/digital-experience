# HCL Digital Asset Management

HCL Digital Asset Management \(DAM\) delivers a central platform to store and include rich media assets in Digital Experience site content to present engaging, consistently branded experiences across digital channels.

Users can access the HCL Digital Asset Management features in HCL Digital Experience 9.5 Container Update Release CF181 and higher releases.

Follow the instructions below to install, configure, and use the HCL Digital Experience 9.5 Digital Asset Management features.

**Notes:** The following limitations exist in HCL Digital Asset Management:

-   Content created using Content Composer and Digital Asset Management cannot be used with the HCL Digital Experience Projects capabilities.
-   Content Composer and Digital Asset Management may not be used with HCL DX 9.5 container deployments that set an alternate context root.
-   Renditions for graphics interchange format \(GIF\) images are not yet supported.
-   The use of Content Composer features in a Virtual Portal deployment pattern is not yet supported.
-   When planning to use the Content Composer features in an authoring environment, with the Container Update CF181 release, it is only supported when running with one Digital Experience 9.5 core container \(pod\). This limitation does not apply when using the Web Content Management Authoring Portlet or when just using the new Digital Asset Management feature. It also does not apply to environments used for rendering.
-   When using Kaltura with Digital Asset Management, all uploaded videos are anonymously accessible for everyone who knows the URL, regardless of the access control setting on the collection containing the video. Do not use Kaltura integration if you have sensitive videos that should not be available without authentication.
-   If you are using a content delivery network \(CDN\) such as [Akamai](https://www.akamai.com/our-thinking/cdn/what-is-a-cdn), using `Vary: Origin` may prevent you from caching content. To bypass this limitation, your CDN configuration must strip the `Vary` header on the way in, to reinstate your ability to cache content. On the way out, you can append the `Origin` parameter to the `Vary` header when serving a response using **'Modify Outgoing Response Header'**.

-   **[Install the HCL Digital Experience 9.5 Components](../../9.5/containerization/install_config_cc_dam.html)**  

-   **[Access HCL Digital Asset Management](../digital_asset_mgmt/access_digital_asset_mgmt.md)**  
This section provides the steps on how to access HCL Digital Asset Management and use it as a central platform to store and include rich media assets. Using the HCL Digital Experience 9.5 Digital Asset Management features, users can upload, browse, and search for media files, edit images and metadata, and manage collections and media access,
-   **[Configure single sign-on \(SSO\) for Digital Asset Management \(DAM\)](../digital_asset_mgmt/configure_dam_sso.md)**  
This section provides the steps on how to configure SSO for Digital Asset Management.
-   **[Configure DAM - Kaltura integration](../digital_asset_mgmt/configure_dam_kaltura_integration.md)**  
This section provides the steps on how to get the Kaltura Partner ID and Admin secret ID and configure the Kaltura Video Content Management System integration, provided with HCL DX 9.5 CF19 and higher releases, to accelerate Digital Asset Management rich media integration to HCL Digital Experience site pages and content.
-   **[Managing staging for DAM](../containerization/managing_dam_staging.md)**  
This section outlines options to use and manage staging with HCL Digital Asset Management.
-   **[Using DAM extensibility](../containerization/dam_extensibility.md)**  
This section describes the DAM extensibility feature and how to configure your setup for extensibility.
-   **[Common tasks](../digital_asset_mgmt/DAM_common_tasks.md)**  
 Upload, manage, and modify rich media assets and collections using HCL Digital Asset Management.

**Parent topic:**[Container-only features](../containerization/container_only_features.md)

