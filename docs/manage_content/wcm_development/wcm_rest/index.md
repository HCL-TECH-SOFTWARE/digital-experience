# REST service for Web Content Manager

Application developers can use Representational State Transfer (REST) services to work with Web Content Manager. The REST service for Web Content Manager provides authoring access to content items and elements. The service follows the Atom Publication Protocol, and Atom feeds, and entries are accessible in XML (application/atom+xml) and JSON (application/json) format.

-   **[Getting started with the REST service for Web Content Manager](wcm_rest_starting.md)**  
Before getting started with the REST service for Web Content Manager you should become familiar with how it works and how to use it.
-   **[How to use REST with Web Content Manager items](wcm_rest_crud_overview.md)**  
Different processes are used when items are created and updated by using REST.
-   **[How to Use REST to Work with Deleted Content Items](../wcm_rest/wcm_rest_deleted_content/index.md)**  
You can use the Web Content Manager REST service to purge delete, and restore previously deleted content items.
-   **[REST content formats for components and elements](wcm_rest_content_formats.md)**  
When you use REST with components or elements, use these content formats. These examples can be used as templates for your own REST solutions.
-   **[REST Query service for web content](../wcm_rest/wcm_rest_query/index.md)**  
The REST service for Web Content Manager comes with a defined set of query parameters. You can also define your own query parameters in a white list. You can also predefine a query to run more complex searches, and control the allowable filters on these searches by using a white list.
-   **[How to manage web content items by using REST](../wcm_rest/wcm_rest_mng_content/index.md)**  
You can use the Web Content Manager REST Service to create, read, update, and delete the following item types.
-   **[How to manage web content image renditions interactions by using REST](manage_web_content_image_renditions_interactions_by_using_rest.md)**  
The REST service for Image Element Renditions supports access to and interactions with image component and elements having different versions to optimize display to desktop, tablet, and smart phone channels.
-   **[Web Content Manager Lock/Unlock API](wcm_REST_web_content_manager_lock_unlock_api.md)**  
The Web Content Manager Lock/Unlock API lets you lock and unlock WCM content components, authoring templates, and item.
-   **[Web Content Manager Syndication REST APIs](wcm_REST_web_content_manager_control_syndication.md)**  
The Web Content Manager Syndication REST APIs let you control syndication processes.
-   **[Web Content Manager Find Rendering and Script Portlet References](wcm_REST_web_content_manager_find_rendering_script_portlet_references.md)**  
This API allows you to find any page that has a WCM Rendering or Script portlet on it referencing the given WCM content UUID.
-   **[Web Content Manager Find References to DAM and WCM Artifacts](wcm_REST_web_content_manager_find_references.md)**  
This API allows you to find all references to an item identified by its UUID - either a DAM UIID for an asset or a WCM UUID for a WCM item.
-   **[Support for library components in content and authoring templates](library_component_support.md)**  
 DX supports an image or file element in a content or authoring template to point to an existing library component. The API is added to retrieve the references to library components from content and authoring templates and to update/add these references.
-   **[Reference material for the Web Content Manager REST service](../wcm_rest/wcm_rest_referencematerial/index.md)**  
Reference material for REST response codes, links, media types, and attachments.


???+ info "Related information"
    - [The generic XML Digital Data Connector data sink](../../../extend_dx/ddc/implementing_user_interactions/sending_data_to_webcontentviewer_portlet/generic_xml_ddc_sink/index.md)
    - [HCL Digital Experience Version 2 REST APIs](https://help.hcltechsw.com/digital-experience/8.5/wcm/dx_v2_rest_api.html)

