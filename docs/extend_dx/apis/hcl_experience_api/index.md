# HCL Experience API

This shows developers how to provision, configure, and use the HCL Experience API with the HCL Digital Experience 9.5 platform.

## Overview

The HCL Experience API is a set of OpenAPI-compliant REST APIs you can use to deploy HCL Digital Experience 9.5 containers on supported Kubernetes platforms. It supports the integration and management of HCL Digital Experience content and functionality to any digital channel using any front-end development framework. The HCL Experience API includes REST APIs that serve as a wrapper around previously published HCL Digital Experience HTTP-based APIs.

See the [HCL Digital Experience 8.5 and 9.0 topics](../index.md) for additional information about previously published HCL Digital Experience APIs.

Benefits of using HCL Experience API include:

-   OpenAPI compliance
-   GraphQL enabled for some of the Experience APIs

    !!!note
        The use of GraphQL functions is available at a beta level and is not yet supported for production use.

-   Simplified JSON payloads
-   Enhanced API documentation

The HCL Experience API provides simplified APIs to make it easier for developers to use. It also has human-readable request and response payloads in JSON format for easy request construction. The HCL Experience API allows users to send and receive requests via OpenAPI-compliant interfaces. This API set accepts form-encoded request bodies made over HTTPS, and returns JSON-encoded responses using standard HTTP response codes and verbs.

The HCL Experience API describes a high-level API through which the following specific APIs are exposed:

-   **[HCL Ring API](https://opensource.hcltechsw.com/experience-api-documentation/ring-api/)**: Presents developer entry points to HCL Digital Experience 9.5 core platform capabilities which are divided into two main categories - **Authorization APIs** and **Web Content APIs**.
-   **[HCL Digital Asset Management API](https://opensource.hcltechsw.com/experience-api-documentation/dam-api/)**: Presents developer entry points to the Digital Asset Management features of HCL Digital Experience 9.5.
-   **[HCL Image Processor API](https://opensource.hcltechsw.com/experience-api-documentation/image-processor-api/)**: Presents developer entry points to the Digital Asset Management Image Processor functions of HCL Digital Experience 9.5.
-  **[HCL Personalization API](https://opensource.hcltechsw.com/experience-api-documentation/pzn-api/)**: Presents developer entry points to the Personalization Rule functions of HCL DX 9.5.
-  **[HCL WCM API](https://opensource.hcltechsw.com/experience-api-documentation/wcm-api/)**: Presents redesigned developer entry points to the Web Content Manager functions of HCL DX 9.5. Intended to facilitate the management of Web content, content-sites, and content-pages.
- **[HCL Access Control API](https://opensource.hcltechsw.com/experience-api-documentation/access-api/)**: Presents developer entry points to the Access Control Management functions of HCL DX 9.5.
- **[HCL Remote Model API](https://opensource.hcltechsw.com/experience-api-documentation/remotemodel-api/)**: Presents developer entry points to the various models for pages, layouts, and more functions of HCL DX 9.5.
- **[HCL Search API](https://opensource.hcltechsw.com/experience-api-documentation/search-api/)**: Presents redesigned developer entry points to the search (like text or keyword searches) functions of HCL DX 9.5.
- **[HCL Users and Groups API](https://opensource.hcltechsw.com/experience-api-documentation/users-api/)**: Presents developer entry points to the user and group management functions of HCL DX 9.5.

!!! note
    Future HCL Digital Experience 9.5 feature functionality will also be exposed through the HCL Digital Experience API.

It is recommended that developers building solutions for HCL Digital Experience 9.5 running on Kubernetes automatically use the HCL Experience API for the scenarios that are covered.

The HCL Experience API is a component of the HCL Digital Experience offerings. HCL Digital Experience offering license and download packages are provided with HCL Digital Experience entitlements available to customers on the [HCL Software License Portal](https://www.hcltech.com/software/support/release){:target="_blank"}.

!!!note
    Beginning with Container Update and CF196, additional Experience APIs are introduced, which support development of [Web Content Manager](../../../deployment/manage/migrate/next_steps/post_mig_activities/portal_task/wcm_post_mig_update/index.md) functions.

Video: [Using the Digital Experience V2 Web Content Manager APIs](https://www.youtube.com/watch?v=7N4yVJUjqOo&list=PLEjl4yzB6ckH2QJw886wkwqmSotdCLxdf&index=6).

Installation instructions for HCL DX 9.5 image components may be viewed in the [container deployment](../../../deployment/index.md) pages.

Detailed API listings for the HCL Experience API, and updates, may be viewed at the [HCL Digital Experience GitHub repository](https://github.com/hcl-dx/experience-api-documentation){:target="_blank"}.

-   **[Prerequisites \| HCL Experience API](openapi_prerequisites.md)**  
The HCL Experience API requires software prerequisites to successfully run. The build package also includes this information, along with the installation and configuration steps.
-   **[Configuration options \| HCL Experience API](openapi_configuration_options.md)**  
The HCL Experience API comes with a set of default configurations. The build package also includes this information, along with the installation steps.
-   **[Getting started with HCL Experience API](getting_started_ringapi_docker_.md)**  
Follow these steps to get started with the HCL Experience API.
-   **[Digital Experience REST API explorers](api_explorers.md)**  

-   **[DAM API for friendly URLs](dam_friendly_urls.md)**  
This section describes the DAM API that allows you to create a friendly URL for an asset.
-   **[Example API calls \| HCL Experience API](openapi_example_API_calls.md)**  
To give users more insight on how to use Experience API, the following samples are provided.
-   **[Sample Content UI \| HCL Experience API](../hcl_experience_api/sample_content_ui/index.md)**  
Learn how to use the Sample Content UI application for HCL Experience API.
<!--
## HCL Software Academy course

For an introduction and a demo on how to use Experience API, go to [Experience API](https://academy.hcltechsw.com/component/axs/?view=sso_config&id=1&forward=https%3A%2F%2Facademy.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D416). To try it out yourself, refer to [Experience API Lab](https://academy.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-100_Experience_API_for_Beginners.pdf) and corresponding [Experience API Lab Resources](https://academy.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-100_Experience_API_Lab_Resouces.zip).

???+ info "Related information"
-    [API explorers](../hcl_experience_api/api_explorers.md)

