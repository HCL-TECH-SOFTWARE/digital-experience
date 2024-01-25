# What's new in CF217

The following features and updates are available to customers installing HCL Digital Experience (DX) Container Update and CF217 on supported platforms:

**All Digital Experience Versions (8.5, 9.0, 9.5)**

- Web Content Manager - AI assistance for sentiment analysis
- Web Content Manager - CSRF option in WCM comments
- Web Content Manager REST API v2 - Out of beta and additional APIs
- Site Analytics - Integrating Google Analytics 4
- DXClient - LiveSync commands can be triggered within the target local theme path
- Updated documentation on locating and downloading DX products
- Updated documentation for setting up OIDC in HCL DX
- Notice of deprecation of Textbox.io Rich Text Editor

**Digital Experience 8.5 and 9.0 Versions**

- End of Support Announced for Digital Experience v8.5 and 9

**Digital Experience 9.5 Version**

- Web Content Manager - Content Reporting Bookmarking feature

**Digital Experience 9.5 Container Version**

- License Manager - Secure License Server communication
- HCL Digital Experience Cloud - New offering

**Digital Experience Early Access Program**

- Open Liberty Portlet Container

Go to the [HCL Software Support Site/ HCL DX Software Fix list](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013939&sys_kb_id=519ebc84db1c341055f38d6d13961959) for the list of software fixes, including Container Update releases.

## All Digital Experience Versions (8.5, 9.0, 9.5)

### Web Content Manager - AI assistance for sentiment analysis

=== "Containers"
    In addition to keyword extraction and auto summarization, you can perform a sentiment analysis on the contents of the elements in your content item. For more information, see [Using AI-assisted sentiment analysis of content element](../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/elements/wcm_dev_elements_ai_assistance.md#using-ai-assisted-sentiment-analysis-of-content-element).

=== "On-Premises"
    In addition to keyword extraction and auto summarization, you can perform a sentiment analysis on the contents of the elements in your content item. For more information, see [Using AI-assisted sentiment analysis of content element](../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/elements/wcm_dev_elements_ai_assistance.md#using-ai-assisted-sentiment-analysis-of-content-element).

### Web Content Manager - CSRF option in WCM comments

=== "Containers"
    You can enable CSRF tokens to be used when creating or deleting a comment to prevent possible CSRF attacks. The feature is disabled by default and can be enabled through the WAS Console. For information on how ton enable CSRF tokens, see [CSRF protection for adding and deleting comments](../../build_sites/create_sites/developing_managing_content/comments_wcm.md#csrf-protection-for-adding-and-deleting-comments).

=== "On-Premises"
    You can enable CSRF tokens to be used when creating or deleting a comment to prevent possible CSRF attacks. The feature is disabled by default and can be enabled through the WAS Console. For information on how ton enable CSRF tokens, see [CSRF protection for adding and deleting comments](../../build_sites/create_sites/developing_managing_content/comments_wcm.md#csrf-protection-for-adding-and-deleting-comments).

### Web Content Manager REST API v2 - Out of beta and additional APIs

=== "Containers"
    The WCM REST v2 APIs are now out of beta and are fully supported. There are additional APIs related to Components, Workflow, Workflow Actions, Workflow Operations, Search Parameters, Site Area Templates, Managed Pages, and Projects. You can check the APIs in [WCM REST v2 Swagger API Explorer](https://opensource.hcltechsw.com/experience-api-documentation/wcm-api/). For more information, see [REST service for Web Content Manager v2](../../manage_content/wcm_development/wcm_rest_v2/index.md).

=== "On-Premises"
    The WCM REST v2 APIs are now out of beta and are fully supported. There are additional APIs related to Components, Workflow, Workflow Actions, Workflow Operations, Search Parameters, Site Area Templates, Managed Pages, and Projects. You can check the APIs in [WCM REST v2 Swagger API Explorer](https://opensource.hcltechsw.com/experience-api-documentation/wcm-api/). For more information, see [REST service for Web Content Manager v2](../../manage_content/wcm_development/wcm_rest_v2/index.md).

### Site Analytics - Integrating Google Analytics 4

=== "Containers"
    Google Analytics 4 (GA4) has replaced Universal Analytics effective July 2023. For more information, refer to the [Google Analytics notice document](https://support.google.com/analytics/answer/11583528?hl=en). 
    
    You can now integrate GA4 with HCL DX. See the topic [Integrating Google Analytics 4 with HCL Digital Experience](../../build_sites/site_analytics/google_analytics4/index.md) for more information.

=== "On-Premises"
    Google Analytics 4 (GA4) has replaced Universal Analytics effective July 2023. For more information, refer to the [Google Analytics notice document](https://support.google.com/analytics/answer/11583528?hl=en). 
    
    You can now integrate GA4 with HCL DX. See the topic [Integrating Google Analytics 4 with HCL Digital Experience](../../build_sites/site_analytics/google_analytics4/index.md) for more information.

### DXClient - LiveSync commands can be triggered within the target local theme path

=== "Containers"
    You can now trigger LiveSync commands from within the target local theme path. For more information, see [LiveSync](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/livesync.md).

=== "On-Premises"
    You can now trigger LiveSync commands from within the target local theme path. For more information, see [LiveSync](../../extend_dx/development_tools/dxclient/dxclient_artifact_types/livesync.md).

### Updated documentation on locating and downloading DX products

=== "Containers"
    [Locating and Downloading DX Products](../../guide_me/tutorials/access-software/locating-downloads.md) has updated steps on how to locate DX products in the License & Delivery Portal site. The lists of packages in [Package name according to DX Offering](../../guide_me/tutorials/access-software/locating-downloads.md#package-name-according-to-dx-offering) and [Package name for DX Cumulative Fixes and Docker Releases](../../guide_me/tutorials/access-software/locating-downloads.md#package-name-for-dx-cumulative-fixes-and-docker-releases) are also updated. 

=== "On-Premises"
    [Locating and Downloading DX Products](../../guide_me/tutorials/access-software/locating-downloads.md) has updated steps on how to locate DX products in the License & Delivery Portal site. The lists of packages in [Package name according to DX Offering](../../guide_me/tutorials/access-software/locating-downloads.md#package-name-according-to-dx-offering) and [Package name for DX Cumulative Fixes and Docker Releases](../../guide_me/tutorials/access-software/locating-downloads.md#package-name-for-dx-cumulative-fixes-and-docker-releases) are also updated. 

### Updated documentation for setting up OIDC in HCL DX

=== "Containers"
    [Configuring OIDC for HCL Digital Experience](../../deployment/manage/security/people/authentication/oidc/index.md) now provides detailed steps on how to [configure DX with OIDC and transient users](../../deployment/manage/security/people/authentication/oidc/transient-users/dx-update-webshpere-for-oidc-transient-users.md). The available JAAS login module for transient users is refined to support common transient user setups and scenarios. ConfigEngine tasks and administrative portlets are also added to ease the deployment and configuration of transient user capabilities.

=== "On-Premises"
    [Configuring OIDC for HCL Digital Experience](../../deployment/manage/security/people/authentication/oidc/index.md) now provides detailed steps on how to [configure DX with OIDC and transient users](../../deployment/manage/security/people/authentication/oidc/transient-users/dx-update-webshpere-for-oidc-transient-users.md). The available JAAS login module for transient users is refined to support common transient user setups and scenarios. ConfigEngine tasks and administrative portlets are also added to ease the deployment and configuration of transient user capabilities.

### Notice of deprecation of Textbox.io Rich Text Editor

=== "Containers"
    The Textbox.io Rich Text Editor component in the HCL Digital Experience software is deprecated effective January 31, 2023 and will End of Support (EOS) on January 31, 2024. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

=== "On-Premises"
    The Textbox.io Rich Text Editor component in the HCL Digital Experience software is deprecated effective January 31, 2023 and will End of Support (EOS) on January 31, 2024. See the Help Center topic [Deprecated features](../deprecated_features.md) for more information.

## Digital Experience 8.5 and 9.0 Versions

### End of Support Announced for Digital Experience v8.5 and 9

=== "On-Premises"
    On June 30, 2023, HCL Software announced end of support for HCL Digital Experience versions 8.5 and 9, effective June 30, 2025. Customers are encouraged to upgrade to HCL Digital Experience version 9.5, released in a continuous delivery model. Refer to the [Deprecated features](../deprecated_features.md) page for more information.

## Digital Experience 9.5 Version

### Web Content Manager - Content Reporting Bookmarking feature

=== "Containers"
    After generating a report in Content Reporting, you can bookmark the report in your browser or copy the URL to share the report. For more information, see [Bookmarking a generated report](../../manage_content/wcm_authoring/content_reporting/usage/bookmarking_content_report.md).

=== "On-Premises"
    After generating a report in Content Reporting, you can bookmark the report in your browser or copy the URL to share the report. For more information, see [Bookmarking a generated report](../../manage_content/wcm_authoring/content_reporting/usage/bookmarking_content_report.md).

## Digital Experience 9.5 Container Version

### License Manager - Secure License Server communication

=== "Containers"
    For customers deploying HCL DX Cloud Native 9.5 on Kubernetes for entitlement checking, documentation on how to secure communication between HCL DX Cloud Native 9.5 and the HCL License Server (cloud or local) using a public and private keypair is now available. For more information, see [Securing License Server communication for License Manager application](../../get_started/download/software_licensing_portal/configure_entitlement_checks/index.md#securing-license-server-communication-for-license-manager-application).

### HCL Digital Experience Cloud - New offering

=== "Containers"
    HCL introduces a new cloud service offering, HCL Digital Experience Cloud. For more information, see [HCL Digital Experience Cloud](../../get_started/product_overview/offerings.md#hcl-digital-experience-cloud).


## Digital Experience Early Access Program

### Open Liberty Portlet Container

=== "Containers"
    **HCL DX Early Access Program - Milestone 1** is now available. The goal of the HCL Digital Experience Early Access Program is for the community of participants to conduct review and testing of new components introduced for use with the HCL Digital Experience 9.5 software. For more information, including how to access the software and discuss your feedback with HCL, see [HCL Digital Experience Early Access Program](../../early_access/index.md).

## Access the latest HCL Digital Experience 9.5 Education Materials on HCLSoftware U

The HCLSoftware U offers technical education for the HCL Software portfolio of products, organized by practitioner role. See the [HCL Digital Experience](https://hclsoftwareu.hcltechsw.com/hcl-dx) section of HCLSoftware U and the [What’s New for Digital Experience](https://hclsoftwareu.hcltechsw.com/courses?search=eyJjYXQiOiI1NSIsInRpdGxlIjoiIiwiZmlsdGVyIjoiIn0=) section for more information.
