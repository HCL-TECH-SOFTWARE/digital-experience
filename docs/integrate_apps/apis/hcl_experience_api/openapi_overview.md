# HCL Experience API

This shows developers how to provision, configure, and use the HCL Experience API with the HCL Digital Experience 9.5 platform.

## Overview

The HCL Experience API is a set of OpenAPI-compliant REST APIs you can use to deploy HCL Digital Experience 9.5 containers on supported Kubernetes platforms. It supports the integration and management of HCL Digital Experience content and functionality to any digital channel using any front-end development framework. The HCL Experience API includes REST APIs that serve as a wrapper around previously published HCL Digital Experience HTTP-based APIs.

See the [HCL Digital Experience 8.5 and 9.0 topics](../dev/developing_parent.html) for additional information about previously published HCL Digital Experience APIs.

Benefits of using HCL Experience API include:

-   OpenAPI compliance
-   GraphQL enabled for some of the Experience APIs

    **Note:** The use of GraphQL functions is available at a beta level and is not yet supported for production use.

-   Simplified JSON payloads
-   Enhanced API documentation

The HCL Experience API provides simplified APIs to make it easier for developers to use. It also has human-readable request and response payloads in JSON format for easy request construction. The HCL Experience API allows users to send and receive requests via OpenAPI-compliant interfaces. This API set accepts form-encoded request bodies made over HTTPS, and returns JSON-encoded responses using standard HTTP response codes and verbs.

The HCL Experience API describes a high-level API through which the following specific APIs are exposed:

-   **HCL Ring API**: Presents developer entry points to HCL Digital Experience 9.5 core platform capabilities which are divided into two main categories - **Authorization APIs** and **Web Content APIs**.
-   **HCL Digital Asset Management API**: Presents developer entry points to the Digital Asset Management features of HCL Digital Experience 9.5.
-   **HCL Image Processor API**: Presents developer entry points to the Digital Asset Management Image Processor functions of HCL Digital Experience 9.5.

**Note:** Future HCL Digital Experience 9.5 feature functionality will also be exposed through the HCL Digital Experience API.

It is recommended that developers building solutions for HCL Digital Experience 9.5 running on Kubernetes automatically use the HCL Experience API for the scenarios that are covered.

The HCL Experience API is a component of the HCL Digital Experience offerings. HCL Digital Experience offering license and download packages are provided with HCL Digital Experience entitlements available to customers on the [HCL Software License Portal](https://www.hcltech.com/software/support/release).

**Note:** Beginning with Container Update and CF196, additional Experience APIs are introduced, which support development of [Design Studio \(Beta\)](../design_studio/design_studio_overview.md) and [Web Content Manager](../site/site_setup.md) functions.

Video: [Using the Digital Experience V2 Web Content Manager APIs](https://www.youtube.com/watch?v=7N4yVJUjqOo&list=PLEjl4yzB6ckH2QJw886wkwqmSotdCLxdf&index=6).

Installation instructions for HCL DX 9.5 image components may be viewed in the [container deployment](../containerization/deployment.html) pages.

Detailed API listings for the HCL Experience API, and updates, may be viewed at the [HCL Digital Experience GitHub repository](https://github.com/hcl-dx/experience-api-documentation).

-   **[Prerequisites \| HCL Experience API](../open_api/openapi_prerequisites.md)**  
The HCL Experience API requires software prerequisites to successfully run. The build package also includes this information, along with the installation and configuration steps.
-   **[Configuration options \| HCL Experience API](../open_api/openapi_configuration_options.md)**  
The HCL Experience API comes with a set of default configurations. The build package also includes this information, along with the installation steps.
-   **[Getting started with HCL Experience API](../open_api/getting_started_ringapi_docker_.md)**  
Follow these steps to get started with the HCL Experience API.
-   **[Digital Experience REST API explorers](../open_api/api_explorers.md)**  

-   **[DAM API for friendly URLs](../open_api/dam_friendly_urls.md)**  
This section describes the DAM API that allows you to create a friendly URL for an asset.
-   **[Example API calls \| HCL Experience API](../open_api/openapi_example_API_calls.md)**  
To give users more insight on how to use Experience API, the following samples are provided.
-   **[Sample Content UI \| HCL Experience API](../open_api/sample_api_overview.md)**  
Learn how to use the Sample Content UI application for HCL Experience API.


**Related information**  


[API explorers](../dev/api_explorers.md)

