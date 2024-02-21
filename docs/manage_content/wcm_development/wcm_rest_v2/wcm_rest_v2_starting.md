---
title: Getting started with the REST service for Web Content Manager V2
---

# Getting started with the REST service for Web Content Manager V2

Starting CF217, the [WCM REST V2 Swagger API Explorer](https://opensource.hcltechsw.com/experience-api-documentation/wcm-api/) has new API additions and modifications and is also out of beta state.

If you are working with WCM via REST, it is recommended to use the WCM REST V2 API.

[WCM REST V2 Swagger API Explorer](https://opensource.hcltechsw.com/experience-api-documentation/wcm-api/) introduces new Wrapper APIs corresponding to the following WCM V1 API functionalities:

- Components like LibraryDateComponent, LibraryFileComponent, LibraryHTMLComponent, LibraryJSPComponent, LibraryLinkComponent, LibraryNumericComponent, LibraryPageNavigationComponent, LibraryTextComponent, LibraryUserNameComponent, LibraryUserSelectionComponent
- Managed Pages
- Projects
- Site Area Templates
- Workflow
- Workflow Actions
- Workflow Operations

These Wrapper APIs are created to bring their corresponding [REST service for Web Content Manager V1 APIs](../wcm_rest/index.md) to the V2 Swagger interface. [WCM REST v2 Swagger API Explorer](https://opensource.hcltechsw.com/experience-api-documentation/wcm-api/) encompasses all search parameters that are available from WCM V1 in the existing Search API of WCM REST V2 Swagger Explorer.

For the WCM REST V1 version of the mentioned APIs, refer to **[How to manage web content items by using REST](../wcm_rest/wcm_rest_mng_content/index.md)**.

!!! note
    ```
    The Wrapper APIs introduced in WCM REST V2 API explorer in CF217 adhere to the same API path or URI fragment structure as the WCM V1 APIs.
    ```

For an in-depth comparison of V1 and V2 APIs, see [Differences between V1 and V2 APIs](comparison_v1_v2.md).

## WCM REST V2 API explorer

With WCM REST V2 API explorer, developers using the Digital Experience WCM REST APIs can explore and test all the WCM V2 APIs. 

Access the WCM REST V2 API explorer located at:

```
http or https://host:port/dx/api/wcm/v2/explorer/
```

!!! example

    ```
    https://localhost:10039/dx/api/wcm/v2/explorer/
    ```

???+ info "Related information"
    - [REST API Explorers](../../../extend_dx/apis/hcl_experience_api/api_explorers.md)
    - [HCL Experience API](../../../extend_dx/apis/hcl_experience_api/index.md)


