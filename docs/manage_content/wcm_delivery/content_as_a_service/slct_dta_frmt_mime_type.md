# Select data format based on MIME type

With Content as a Service (CaaS) pages, you can specify different representation of your web content for different MIME types. This allows you to specify the preferred representation of your web content when you request CaaS pages. There are different options to manage the presentation components that produce the output for the MIME types you want to support.

## How to use well-defined element names in your content

The portal supports selecting different presentation components for the CaaS pages based on the requested MIME type. You can specify different presentation components for generating the data format depending on the MIME type parameter. For more information about the MIME type parameter, refer to [Writing links to web content](../../wcm_authoring/authoring_portlet/content_management_artifacts/tags/wcm_dev_writing-links.md).

You can use this MIME type-specific presentation component selection by adding component reference elements with well-defined names such as `ibm.design.json`, `ibm.design.xml`, and `ibm.design.html` to your content items. You can define the value for the component reference elements in your Authoring template that you use for creating your content items.

For example, specifying the parameter `mime-type=application/json` specifies the content element with the name `ibm.design.json` as the presentation component for representing your web content.

!!! important 
    Choosing this approach has implications for how oyu manage your content. The presentation component elements are part of your content. Adding, removing, or updating one of these well-defined elements requires you to update all related content items individually. Restoring previous versions of content items can require you to update the presentation component again.

## How to use presentation templates with the `pagedesign` query parameter

As an alternative to managing the well-defined elements in your content, you can also use specified presentation templates based on the requested MIME type. If the portal does not find a content element for the requested MIME type, it renders the content using the presentation template specified by the `pagedesign` parameter from the web content link. \(See [Writing links to web content](../../wcm_authoring/authoring_portlet/content_management_artifacts/tags/wcm_dev_writing-links.md)\). If the request does not include that parameter, the default presentation template of your content is used to produce the output.

Using the `pagedesign` parameter allows you to manage your presentation components for different MIME types to render your content. It also allows you to produce output for MIME types other than the ones supported by the well-defined content elements. For example, you can create a presentation template that produces a "text/csv" \(comma-separated values\) representation of your content. Then, you can request your content with that MIME type with a URL such as:

```
http://hostname/context_root/virtual_portal_context/caas?current=true&urile=wcm%3Apath%3Alibrary/site_area_path/content&mime-type=text/csv&pagedesign=library/folder/presentation_template
```

!!! important
    If you choose this approach, you must explicitly add the `pagedesign` parameter to the URLs when you request a representation of your content with a specific MIME type. If the output generated for a specific MIME type also includes web content links, the `pagedesign` parameter is not automatically added by the portal.

## How to use presentation templates with a custom context processor

Instead of using the `pagedesign` query parameter, you can also implement a custom context processor that sets the presentation template dynamically based on the requested MIME type. This solution provides you with the full MIME type flexibility as the second option and does not require the `pagedesign` parameter in web content links. Your context processor can change the presentation template for a request based on the requested MIME type from the `mime-type` parameter. For more information on custom context processors, go to the topic [Creating a context processor class](../../wcm_development/wcm_custom_plugin/wcm_dev_api_context_processor.md).

For example, you might use a naming convention to select the proper presentation template for a request: `authoring_template_name.mime_type`. Given this simple naming convention, requesting the JSON representation of the content item `Web Content/Articles/Sample Article` that is based on the authoring template `Web Content/Article` would mean that your context processor sets the alternative presentation for the request to `Web Content/Article.json`.

!!! important
    You need to configure the instance of the Web Content Viewer portlet that is located on the CaaS page with the unique name `ibm.portal.caas.page` to use your context processor. To configure the context processor for the instance of the portlet, use the **Edit Shared Settings** mode of the portlet from the CaaS page. More information on configuring the Web Content Viewer portlet, go to the topic [Advanced options](https://help.hcltechsw.com/digital-experience/8.5/panel_help/wcm_config_wcmviewer_hadv.html). If you use CaaS pages with virtual portals, make sure to also configure the portlet instances on the CaaS pages in each virtual portal.

## Limitations when using Content as a Service

-   You always need to request web content items from a web content library. You cannot use this service to render components from a web content library.

-   You cannot produce binary web content. For example, you cannot respond with the MIME type `image/jpg`. If you want to retrieve binary web content, such as images, from a web content library, include the URL to the web content in the CaaS response. The client can then use the URL to make a second request to load the binary web content.

???+ info "Related information"
    - [Writing links to web content](../../wcm_authoring/authoring_portlet/content_management_artifacts/tags/wcm_dev_writing-links.md)
