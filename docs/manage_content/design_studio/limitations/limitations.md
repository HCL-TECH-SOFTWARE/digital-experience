---
title: Limitations
---

## Requirements and limitations

Digital Experience 9.5 Container Update CF196 and later must be installed and operational, along with the Practitioner Studio and Content Composer components, to access and use Design Studio (Beta). **Design Studio (Beta) is not supported for production use**.

!!! note
        Refer to the latest HCL DX 9.5 container release and update file listings in the [Container image list](../../../deployment/install/container/image_list.md) topic.

The following Digital Experience 9.5 features and services are **not supported** with Design Studio (Beta):

-   Deployment in a [hybrid pattern](../../../deployment/install/container/helm_deployment/helm_install_commands.md).
-   The deployment with [virtual portals](../../../build_sites/virtual_portal/index.md).

The following Digital Experience 9.5 features and services are **limited in access or use** with Design Studio (Beta):

### General

-   Access to and use of Design Studio (Beta) features (sites) require administrator role access.
-   Only Google Chrome or Microsoft Edge browsers are supported.
-   Authoring is supported for the English language only.
-   The Palace Hotel site is provided as an example. Additional example sites and updates are added in future Design Studio releases.
-   When you use Design Studio (Beta) with HCL DX 9.5 Container Update 199, the duplication of a WCM Container using the page editor may fail. To work around this, add a new WCM Container, and then add the desired content to the WCM container.

### Design Studio Site Design features

-   Content must be published before it can be referenced in other site and page create actions.
-   New pages can be created within the sample *Palace Studio* site provided with Design Studio (Beta).
-   New Sites can be created beginning with Design Studio (Beta) in DX 9.5 Container Update CF198.
-   When duplicating content containers, a duplicated naming issue causes a failure in saving the new name of the duplicated content container. Instead, DX 9.5 CF200 saves the duplicated content container under a default name (e.g. <code>content-container-xxxxxxx-xxxxx-xxxxx-xxxxx</code>). This can be fixed by changing the name of the duplicated content container to a new one.
-   Only <em>Text</em>, <em>Short Text</em>, <em>Image</em>, and <em>Link</em> elements are supported.
-   Content with any element specifically named "link" cannot be used in DX 9.5 Container Update CF 201 and higher releases. As a workaround, when naming an element in a content template, add additional words to it (e.g. instead of "link," name it as "social media link").
-   Direct integration of Digital Asset Management (DAM) features is not yet available. DAM assets can be utilized through the linked content.
-   As of DX 9.5 CF196 and later releases, the Design Studio page editor and preview option do not show the renditions that exist for images. However, the actual page in the site will render these renditions.
-   As of DX 9.5 CF202 and later releases, we have disabled selecting a device viewpoint and assigning a different stylesheet component to a site as its baseline stylesheet.
