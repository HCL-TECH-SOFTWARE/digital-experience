---
tags:
 - API
 - Extensibility
 - Development
hide: tags
---

# API Access

HCL DX provides a very rich set of APIs, covering topics such as remote access, management and administration, application development and product extension.

HCL DX provides a wide range of APIs that cover most scenarios, from headless content access to system management. The table below lists some of the REST APIs that are available, please refer to the linked documentation for the latest information.

| Name | Description | End point |
| --- | --- | --- |
| [**HCL Ring API **](https://HCL-TECH-SOFTWARE.github.io/experience-api-documentation/ring-api) | Presents developer entry points to HCL DX 9.5 core platform capabilities which are divided into two main categories: Authorization APIs and Web Content APIs. | /dx/api/core/v1/explorer |
| [**HCL Digital Asset Management API **](https://HCL-TECH-SOFTWARE.github.io/experience-api-documentation/dam-api) | Presents developer entry points to the Digital Asset Management features of HCL DX 9.5. | /dx/api/dam/v1/explorer |
| [**HCL Image Processor API**](https://HCL-TECH-SOFTWARE.github.io/experience-api-documentation/image-processor-api) | Presents developer entry points to the Digital Asset Management Image Processor functions of HCL DX 9.5. | /dx/api/image-processor/v1/explorer |
| [**HCL Personalization API**](https://HCL-TECH-SOFTWARE.github.io/experience-api-documentation/pzn-api) | Presents developer entry points to the Personalization Rule functions of HCL DX 9.5. | /dx/api/pzn/v1/explorer |
| [**HCL WCM API**](https://HCL-TECH-SOFTWARE.github.io/experience-api-documentation/wcm-api) | Presents redesigned developer entry points to the Web Content Manager functions of HCL DX 9.5. Intended to facilitate the management of Web content, content-sites, and content-pages. | /dx/api/wcm/v2/explorer |
| [**HCL Access Control API**](https://HCL-TECH-SOFTWARE.github.io/experience-api-documentation/access-api) | Presents developer entry points to the Access Control Management functions of HCL DX 9.5. | /dx/api/access/v1/explorer |
| [**HCL Remote Model API**](https://HCL-TECH-SOFTWARE.github.io/experience-api-documentation/remotemodel-api) | Presents developer entry points to the various models for pages, layouts, and more functions of HCL DX 9.5. | /dx/api/remotemodel/v1/explorer |
| [**HCL Search API**](https://HCL-TECH-SOFTWARE.github.io/experience-api-documentation/search-api) | Presents redesigned developer entry points to the search (like text or keyword searches) functions of HCL DX 9.5. | /dx/api/search/v1/explorer |
| [**HCL Users and Groups API**](https://HCL-TECH-SOFTWARE.github.io/experience-api-documentation/users-api) | Presents developer entry points to the user and group management functions of HCL DX 9.5. | /dx/api/users/v1/explorer |

Various server-side APIs are also available for providing extensions to the system. Typically, these are Java based APIs.

## DX Client

HCL Digital Experience includes DXClient, which is a consolidated application and system management utility. It provides developers and administrators with a tool to deploy changes or improvements to the DX platform, and automate the development and delivery process.

DXClient enables developers and administrators manage tasks, such as uploading portlets or Script Applications and managing their DX server. This tool is capable of taking artifacts developed locally and deploying them to DX 9.5 servers deployed to supported on-premises platforms in standalone, cluster and Kubernetes deployments.

Sample pipelines are provided to enable customers to easily integrate DXClient into their CI/CD processes.