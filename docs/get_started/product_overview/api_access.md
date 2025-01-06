---
tags:
 - API
 - Extensibility
 - Development
hide: tags
---

# API access

HCL Digital Experience (DX) provides a rich set of APIs that address tasks such as remote access, management and administration, application development, and product extension.

HCL DX provides a range of APIs that address most scenarios, from headless content access to system management. The following table lists some of the available REST APIs. For the latest information, refer to the linked documentation.

| Name | Description | End point <!-- Do you mean "Folder" here? Directory location? End points are typically hardward connect to a network.-->|
| --- | --- | --- |
| [**HCL Ring API**](https://HCL-TECH-SOFTWARE.github.io/experience-api-documentation/ring-api) | Presents developer entry points to HCL DX 9.5 core platform capabilities, which are divided into two main categories: Authorization APIs and Web Content APIs. | /dx/api/core/v1/explorer |
| [**HCL Digital Asset Management API**](https://HCL-TECH-SOFTWARE.github.io/experience-api-documentation/dam-api) | Presents developer entry points to the Digital Asset Management features of HCL DX 9.5. | /dx/api/dam/v1/explorer |
| [**HCL Image Processor API**](https://HCL-TECH-SOFTWARE.github.io/experience-api-documentation/image-processor-api) | Presents developer entry points to the Digital Asset Management Image Processor functions of HCL DX 9.5. | /dx/api/image-processor/v1/explorer |
| [**HCL Personalization API**](https://HCL-TECH-SOFTWARE.github.io/experience-api-documentation/pzn-api) | Presents developer entry points to the Personalization Rule functions of HCL DX 9.5. | /dx/api/pzn/v1/explorer |
| [**HCL WCM API**](https://HCL-TECH-SOFTWARE.github.io/experience-api-documentation/wcm-api) | Presents redesigned developer entry points to the Web Content Manager functions of HCL DX 9.5. This API is designed to facilitate the management of web content, content-sites, and content-pages. | /dx/api/wcm/v2/explorer |
| [**HCL Access Control API**](https://HCL-TECH-SOFTWARE.github.io/experience-api-documentation/access-api) | Presents developer entry points to the Access Control Management functions of HCL DX 9.5. | /dx/api/access/v1/explorer |
| [**HCL Remote Model API**](https://HCL-TECH-SOFTWARE.github.io/experience-api-documentation/remotemodel-api) | Presents developer entry points to the various models for pages, layouts, and more functions of HCL DX 9.5. | /dx/api/remotemodel/v1/explorer |
| [**HCL Search API**](https://HCL-TECH-SOFTWARE.github.io/experience-api-documentation/search-api) | Presents redesigned developer entry points to the search (like text or keyword searches) functions of HCL DX 9.5. | /dx/api/search/v1/explorer |
| [**HCL Users and Groups API**](https://HCL-TECH-SOFTWARE.github.io/experience-api-documentation/users-api) | Presents developer entry points to the user and group management functions of HCL DX 9.5. | /dx/api/users/v1/explorer |

A large set of server-side APIs are also available for providing extensions to the system. Typically, these are Java-based APIs.

| Name | Description | 
| --- | --- |
| [**Controller SPI**](../../extend_dx/apis/controller_spi/index.md) | You can use the Controller SPI for portal administration. It allows you to modify portal resources. It enhances the read-only portal Model SPI by adding writable aspects. | 
| [**Model SPI overview**](../../extend_dx/apis/model_spi/index.md) | Models provide information that is needed by HCL to perform tasks such as aggregating content or building navigation to browse the aggregated content. The information that is aggregated is represented through models that can be accessed programmatically by using the Model SPI (read-only). The information of a model is usually persistent (stored in a database) but can also be transient (computed and stored only in memory). Models can be represented by using a tree structure (nodes have a parent-child relationship), a list structure, or a selection structure (a selected element in a tree structure). | 
| [**Portal Access Control interfaces**](../../extend_dx/apis/portal_access_control_interfaces/index.md) | Portal Access Control provides interfaces for retrieving, modifying, and controlling access to information related to portal resources, such as portlets or pages.| 
| [**User and group management**](../../extend_dx/apis/puma_spi/index.md) | The Portal User Management Architecture (PUMA) System programming interface (SPI) provides interfaces for accessing the profiles of a portal User or Group. | 
| [**Portal v8.5 API Specifications**](https://help.hcltechsw.com/digital-experience/8.5/dev/javadoc/vrm/850/api_docs/index.html) | Reference copy of the Portal Version 8.5.0. API, javadocs, and other specifications. | 
| [**Portal v8.5 SPI Specifications**](https://help.hcltechsw.com/digital-experience/8.5/dev/javadoc/vrm/850/spi_docs/index.html) | Reference copy of the Portal Version 8.5.0. SPI, javadocs, and other specifications. | 

## DXClient

HCL DX includes DXClient, which is a consolidated application and system management utility. With the DXClient tool, developers and administrators can deploy changes or improvements to the DX platform, and automate the development and delivery process.

With DXClient, developers and administrators can manage tasks, such as uploading portlets or script applications and managing the DX server. This tool can take artifacts developed locally and deploy them to DX 9.5 servers deployed to supported on-premises platforms in standalone, cluster, and Kubernetes deployments.

Sample pipelines are provided to enable customers to easily integrate DXClient into their CI/CD processes.

## HCLSoftware U learning materials

For an introduction and a demo on using DX for developers, go to [DX for Developers (Advanced)](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D1777). To try it out yourself, refer to [DX Setup Local Java Development Environment Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Developer/HDX-DEV-300_DX_Setup_a_Java_Development_Environment_Lab.pdf).

