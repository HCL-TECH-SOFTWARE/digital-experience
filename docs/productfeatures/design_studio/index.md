# Design Studio (Beta)

Design Studio (Beta) enables content managers and designers to build and style digital properties quickly without coding.

Design Studio enables content managers and designers to build and style their digital site properties quickly. Design Studio presents a modern, intuitive, and role-based tool aggregating all needed functions to visually assemble, curate, design, and model pages, content, and applications in DX sites. Using Design Studio, content authors and site designers can quickly execute DX site projects and updates and speed time to market.

!!! note 
        Design Studio is provided for Beta evaluation with HCL Digital Experience 9.5 Container Update CF196 and later releases. It is not yet supported for use in production deployments.

## Requirements and limitations

Digital Experience 9.5 Container Update CF196 and later must be installed and operational, along with the Practitioner Studio and Content Composer components, to access and use Design Studio (Beta). **Design Studio (Beta) is not supported for production use**.

!!! notes
        -   Reference the latest HCL DX 9.5 container release and update file listings in the [Docker image listing](http://127.0.0.1:8000/platform/kubernetes/docker/?h=image+li) topic.
        -   Design Studio is still in development for release at a later time. This Design Studio (Beta) release presents an opportunity for customers to gain hands-on-experience with the currently available features. HCL Digital Experience welcomes your feedback and suggestions on Design Studio (Beta), and encourages you to present your input through cases and discussions with [HCL Support](https://support.hcltechsw.com/csm?id=dx_support) DX leaders.

The following Digital Experience 9.5 features and services are **not supported** with Design Studio (Beta):

-   Deployment in a [hybrid pattern](https://help.hcltechsw.com/digital-experience/9.5/containerization/hybrid_deployment_operator.html).
-   The deployment with [virtual portals](https://help.hcltechsw.com/digital-experience/9.5/admin-system/ad_vp.html).

The following Digital Experience 9.5 features and services are **limited in access or use** with Design Studio (Beta):

### General

-   Access to and use of Design Studio (Beta) features (sites) require administrator role access.
-   Only Google Chrome or Microsoft Edge browsers are supported.
-   Authoring is supported for the English language only.
-   The Palace Hotel site is provided as an example. Additional example sites and updates are added in future Design Studio releases.
-   When you use Design Studio (Beta) with HCL DX 9.5 Container Update 199, the duplication of a WCM Container using the page editor may fail. To work around this, add a new WCM Container and then add the desired content to the WCM container.

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
