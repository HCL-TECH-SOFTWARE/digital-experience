---
title: Getting started with the REST service for Web Content Manager v2
---

# Getting started with the REST service for Web Content Manager v2

Starting CF217, the [WCM REST v2 Swagger API Explorer](https://opensource.hcltechsw.com/experience-api-documentation/wcm-api/) has new API additions and modifications.

[WCM REST v2 Swagger API Explorer](https://opensource.hcltechsw.com/experience-api-documentation/wcm-api/) introduces new Wrapper APIs corresponding to the following WCM V1 API functionalities:

- Components like LibraryDateComponent, LibraryFileComponent, LibraryHTMLComponent, LibraryJSPComponent, LibraryLinkComponent, LibraryNumericComponent, LibraryPageNavigationComponent, LibraryTextComponent, LibraryUserNameComponent, LibraryUserSelectionComponent
- Managed Pages
- Projects
- Site Area Templates
- Workflow
- Workflow Actions
- Workflow Operations

[WCM REST v2 Swagger API Explorer](https://opensource.hcltechsw.com/experience-api-documentation/wcm-api/) encompasses all search parameters that were available from WCM V1 in the existing Search API of WCM REST V2 Swagger Explorer.

For the WCM REST v1 version of the mentioned APIs, refer to **[How to manage web content items by using REST](../wcm_rest/wcm_rest_mng_content/index.md)**.

!!! note
    ```
    The Wrapper APIs introduced in WCM REST V2 API explorer in CF217 adhere to the same API path or URI fragment structure as the WCM V1 APIs.
    ```

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

For more information about the WCM REST V2 API Explorer, see [HCL Experience API](../../../extend_dx/apis/hcl_experience_api/index.md).
