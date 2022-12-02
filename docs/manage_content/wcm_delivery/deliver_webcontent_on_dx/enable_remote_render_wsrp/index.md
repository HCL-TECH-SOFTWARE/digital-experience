# Enabling remote rendering with WSRP and the Web Content Viewer

To display web content on a portal that does not include HCL Web Content Manager, you can use the Web Content Viewer and the WSRP support in the portal. The Web Content Viewer can then retrieve and display content from a web content system on a different server.

**When to use remote rendering:** The preferred way to render content on one server from another server is to syndicate the content to the delivery server. On the delivery server, you can then locally render the content with a Web Content Viewer. However, remote rendering with WSRP is appropriate for service-oriented architecture \(SOA\) scenarios where you want to incorporate specific pieces of content into your website.

When you use the Web Content Viewer for remote rendering with WSRP, the following conditions apply:

-   The remote web content server acts as the WSRP Producer.
-   The portal with the Web Content Viewer acts as the WSRP Consumer.

!!! note
    Remote rendering with WSRP is supported only when you render content from the default virtual portal.

1.  Set up the WSRP environment between the Producer portal and the Consumer portal, as described in *WSRP Services*. If you plan to use the **Edit Shared Settings** mode or the **Configure** mode in the portlet with WSRP, configure web service security between the Producer and the Consumer portals.

2.  You might have basic authentication challenges when you configure the portlet on the Consumer. To avoid these challenges, customize the WSRP resource proxy for LTPA token forwarding. Go to *Customizing the WSRP resource proxy for LTPA token forwarding* for information.

3.  Provide the Web Content Viewer Portlet as a WSRP service hosted on the remote web content server acting as the WSRP Producer.

4.  Consume the remote Web Content Viewer that is provided as a WSRP service on the portal acting as the WSRP Consumer.

5.  Configure the Web Content Viewer to display content, just as you would configure a local Web Content Viewer.

    When you use the viewer with WSRP, settings for selecting content from a web content library show content from the remote web content system.

    !!! note
        Depending on the configuration of the Web Content Viewer, resources like resource bundle files or content processor plug-ins might be required. In such cases, the resources must be available on the remote web content server acting as the WSRP Producer.

    **Limitations when using WSRP with the Web Content Viewer:**

    -   Because the concept of pages and web content pages does not exist in WSRP, you cannot use the dynamic link broadcasting feature with web content pages. When you specify how to broadcast links, do not select **Dynamically select a web content page** in the **Broadcast links to** field. Selecting this option has the same effect as broadcasting links to the current page.
    -   Web content inline editing for your web content is not supported with WSRP.
    -   The use of remote authoring action URLs in your web content is not supported with WSRP.
    -   Tagging and rating for web content is not supported with WSRP.
    -   Personalization elements are not supported with WSRP. Therefore, you cannot use features that require personalization rules. Examples: content targeting, federated documents, social rendering, and Digital Data Connector \(DDC\) for HCL Portal.
    **Limitations when using WSRP with the Web Content Viewer with other non-HCL Digital Experience WSRP Consumers:** The link broadcasting feature of the viewer is not supported for the WSRP Consumers of other vendors. This limitation is because the concept of pages and web content pages does not exist in WSRP. When you specify how to broadcast links, you can select only the option **None**.


-   **[CORS and remote web content rendering with WSRP and the Web Content Viewer](wcm_config_wcmviewer_wsrp_cors.md)**  
Cross-origin resource sharing \(CORS\) describes a mechanism for supporting requests that a web page sends to a server that is not in the same domain as the originating web page. The CORS concept must be supported by both the web browser and the server.
-   **[OpenAjax security and remote web content rendering with WSRP and the Web Content Viewer](wcm_config_wcmviewer_wsrp_open_ajax.md)**  
The Enabler from the Mashups 3.0.0.1 component that is included in HCL Digital Experience as a theme module implements some features that are specified by the OpenAjax Alliance. One of them is a generic override for Dojo XMLHttpRequests.


???+ info "Related information"
    - [Web Content Viewers](../getting_started/wcm_deploy_wcmviewer_about.md)
    - [WSRP services](../../../../../../extend_dx/development_tools/wsrp/index.md)
    - [Providing WSRP services as a Producer](../../../../../../extend_dx/development_tools/wsrp/portal_wsrp_producer/providing_wsrp_services_as_producer/index.md)
    - [Configuring security on the Consumer portal](../../../../../../extend_dx/portlets_development/usage/wsrp/configuration/portal_wsrp_consumer/cfg_security_consumer_portal/wsrpt_cons_prep_sec.md)
    - [Working with lists of social objects](../../../../../../build_sites/social_rendering/working_with_social_objects/index.md)

