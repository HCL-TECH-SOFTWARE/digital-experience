---
title: Getting started with the REST service for Web Content Manager V2
---

# Getting started with the REST service for Web Content Manager V2

This topic provides information about the new APIs available from CF217 and higher.

These new APIs are created to complete the available actions for content and other WCM artifacts. The new APIs were either created from scratch or bring their corresponding [REST service for Web Content Manager V1 APIs](../wcm_rest/index.md) to the V2 Swagger interface [WCM REST v2 Swagger API Explorer](https://opensource.hcltechsw.com/experience-api-documentation/wcm-api/). 
For a comparison of V1 and V2 APIs, see [Differences between V1 and V2 APIs](comparison_v1_v2.md).

If you are working with WCM via REST, it is recommended to use the WCM REST V2 API.

!!! note
    ```
    Most of the APIs introduced in the WCM REST V2 API explorer adhere to the same API path or URI fragment structure as the WCM V1 APIs.
    ```

For the WCM REST V1 version of the APIs, refer to **[How to manage web content items by using REST](../wcm_rest/wcm_rest_mng_content/index.md)**.

## APIs added or modified in CF217

Starting CF217, the [WCM REST V2 Swagger API Explorer](https://opensource.hcltechsw.com/experience-api-documentation/wcm-api/) has new API additions and modifications and is also out of beta state.

[WCM REST V2 Swagger API Explorer](https://opensource.hcltechsw.com/experience-api-documentation/wcm-api/) introduces new APIs corresponding to the following WCM V1 API functionalities:

- Components like LibraryDateComponent, LibraryFileComponent, LibraryHTMLComponent, LibraryJSPComponent, LibraryLinkComponent, LibraryNumericComponent, LibraryPageNavigationComponent, LibraryTextComponent, LibraryUserNameComponent, LibraryUserSelectionComponent
- Managed Pages
- Projects
- Site Area Templates
- Workflow
- Workflow Actions
- Workflow Operations

## APIs added or modified in CF218

Starting CF218, [WCM REST V2 Swagger API Explorer](https://opensource.hcltechsw.com/experience-api-documentation/wcm-api/) introduces additional APIs corresponding to the following WCM V1 API functionalities or created new:

- Components like LibraryAuthoringToolsComponent, LibraryListPresentationComponent
- Custom Workflow Actions Factory 
- Item Version Update and Restore 
- Syndication
- Presentation Template 
- Favorite Items 
- Recent Items
- Apply Content Templates 
- Page References 
- Rendering Content

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


