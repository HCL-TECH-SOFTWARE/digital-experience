---
title: Getting started with the REST service for Web Content Manager V2
---

# Getting started with the REST service for Web Content Manager V2

This topic provides information about the new APIs available from CF217 and higher.

These V2 APIs are created to complete the available actions for content and other WCM artifacts. They are either developed from scratch or created to bring their corresponding [REST service for Web Content Manager V1 APIs](../wcm_rest/index.md) to the V2 Swagger interface. You can find detailed information about V2 APIs at [WCM REST V2 API documentation](https://opensource.hcltechsw.com/experience-api-documentation/wcm-api/). For a comparison of V1 and V2 APIs, see [Differences between V1 and V2 APIs](comparison_v1_v2.md).

If you are working with WCM via REST, it is recommended to use the WCM REST V2 API.

!!! note
    Most of the APIs introduced in the WCM REST V2 API explorer adhere to the same API path or URI fragment structure as the WCM V1 APIs.

For the WCM REST V1 version of the APIs, refer to **[How to manage web content items by using REST](../wcm_rest/wcm_rest_mng_content/index.md)**.

## APIs added or modified in CF217

Starting CF217, the WCM REST V2 Swagger API Explorer has new API additions and modifications and is also out of beta state.

WCM REST V2 Swagger API Explorer introduces new APIs corresponding to the following WCM V1 API functionalities:

- Components like LibraryDateComponent, LibraryFileComponent, LibraryHTMLComponent, LibraryJSPComponent, LibraryLinkComponent, LibraryNumericComponent, LibraryPageNavigationComponent, LibraryTextComponent, LibraryUserNameComponent, LibraryUserSelectionComponent
- Managed Pages
- Projects
- Site Area Templates
- Workflow
- Workflow Actions
- Workflow Operations

## APIs added or modified in CF218

Starting CF218, WCM REST V2 Swagger API Explorer introduces additional APIs. Some of these APIs are newly created while some APIs correspond to the following WCM V1 API functionalities:

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

## APIs added or modified in CF220

Starting CF220, WCM REST V2 Swagger API Explorer introduces additional APIs:

- Search for items with no owner or no author
- Specify item options for search results

## APIs added or modified in CF221

Starting CF221, WCM REST V2 Swagger API Explorer introduces additional APIs:

- Retrieve multiple content items in one REST call through a list of Universally Unique Identifiers (UUIDs)
- Set cache header for WCM GET REST APIs

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

## Cache headers for WCM REST V2

Starting CF221, you can configure a cache header for GET requests for unauthenticated users. Configuring cache headers results in better performance and cachability. To enable this feature, set the property to a value for expiry: ```public.rest.cache.expiry=86400s```. "86400s" is an example representing 24 hours.

Define and manage the cache options in the `WCM WCMConfigService` service by using the WebSphere® Integrated Solutions Console.
Go to **Resources** > **Resource Environment** > **Resource Environment Providers** > **WCM WCMConfigService** > **Custom Properties**.


???+ info "Related information"
    - [WCM REST V2 API documentation](https://opensource.hcltechsw.com/experience-api-documentation/wcm-api/)
    - [REST API Explorers](../../../extend_dx/apis/hcl_experience_api/api_explorers.md)
    - [HCL Experience API](../../../extend_dx/apis/hcl_experience_api/index.md)


