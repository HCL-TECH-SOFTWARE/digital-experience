# HCL Experience API

This documentation provides developers with documentation on how to provision, configure, and use the HCL Experience API with the HCL Digital Experience 9.5 platform.

## Overview

The HCL Experience API is a set of OpenAPI-compliant REST APIs available for customers deploying HCL Digital Experience 9.5 containers on supported Kubernetes platforms. It supports the integration and management of HCL Digital Experience content and functionality to any digital channel using any front-end development framework. The HCL Experience API includes REST APIs that serve as a wrapper around previously published HCL Digital Experience HTTP-based APIs.

Reference the [HCL Digital Experience 8.5 and 9.0 topics](../dev/developing_parent.md) for additional information about previously published HCL Digital Experience APIs.

Benefits of using HCL Experience API include:

-   OpenAPI compliance
-   GraphQL enabled

    **Note:** Use of GraphQL functions is available at a Beta level and not supported for production use.

-   Simplified JSON payloads
-   Enhanced API documentation

The HCL Experience API provides a simplified API to lower the burden for developers to work with it. It also has human-readable request and response payloads in JSON format for easy request construction. The HCL Experience API allows users to send and receive requests via OpenAPI-compliant interfaces. This API set accepts form-encoded request bodies made over HTTPS, and returns JSON-encoded responses using standard HTTP response codes and verbs.

The HCL Experience API describes a high-level API through which the following specific APIs are exposed:

-   **HCL Ring API**: Presents developer entry points to HCL Digital Experience 9.5 core platform capabilities which are divided into two main categories - **Authorization APIs** and **Web Content APIs**.
-   **HCL Digital Asset Management API**: Presents developer entry points to the Digital Asset Management features of HCL Digital Experience 9.5.
-   **HCL Image Processor API**: Presents developer entry points to the Digital Asset Management Image Processor functions of HCL Digital Experience 9.5.

**Note:** Future HCL Digital Experience 9.5 feature functionality will also be exposed through the HCL Digital Experience API.

It is recommended that developers building solutions for HCL Digital Experience 9.5 running on Kubernetes programmatically use the HCL Experience API for the scenarios that are covered.

The HCL Experience API is a component of the HCL Digital Experience offerings. HCL Digital Experience offering license and download packages are provided with HCL Digital Experience entitlements available to customers on the [HCL Software License Portal](https://www.hcltech.com/software/support/release).

**Note:** Beginning with Container Update and CF196, additional Experience APIs are introduced, which support development of [Design Studio \(Beta\)](../design_studio/design_studio_overview.md) and [Web Content Manager](../site/site_setup.md) functions.

Video: [Using the Digital Experience V2 Web Content Manager APIs](https://www.youtube.com/watch?v=7N4yVJUjqOo&list=PLEjl4yzB6ckH2QJw886wkwqmSotdCLxdf&index=6).

Installation instructions for HCL DX 9.5 image components may be viewed in the [Container Deployment](../containerization/deployment.md) pages.

Detailed API listings for the HCL Experience API may be viewed at the [HCL Digital Experience GitHub repository](https://github.com/hcl-dx/experience-api-documentation).

