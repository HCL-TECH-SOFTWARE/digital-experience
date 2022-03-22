# Enabling remote rendering with WSRP and the Web Content Viewer

To display web content on a portal that does not include HCL Web Content Manager, you can use the Web Content Viewer and the WSRP support in the portal. The Web Content Viewer can then retrieve and display content from a web content system on a different server.

**When to use remote rendering:** The preferred way to render content on one server from another server is to syndicate the content to the delivery server. On the delivery server, you can then locally render the content with a Web Content Viewer. However, remote rendering with WSRP is appropriate for service-oriented architecture \(SOA\) scenarios where you want to incorporate specific pieces of content into your website.

When you use the Web Content Viewer for remote rendering with WSRP, the following conditions apply:

-   The remote web content server acts as the WSRP Producer.
-   The portal with the Web Content Viewer acts as the WSRP Consumer.

**Note:** Remote rendering with WSRP is supported only when you render content from the default virtual portal.

1.  Set up the WSRP environment between the Producer portal and the Consumer portal, as described in *WSRP Services*. If you plan to use the **Edit Shared Settings** mode or the **Configure** mode in the portlet with WSRP, configure web service security between the Producer and the Consumer portals.

2.  You might have basic authentication challenges when you configure the portlet on the Consumer. To avoid these challenges, customize the WSRP resource proxy for LTPA token forwarding. Go to *Customizing the WSRP resource proxy for LTPA token forwarding* for information.

3.  Provide the Web Content Viewer Portlet as a WSRP service hosted on the remote web content server acting as the WSRP Producer.

4.  Consume the remote Web Content Viewer that is provided as a WSRP service on the portal acting as the WSRP Consumer.

5.  Configure the Web Content Viewer to display content, just as you would configure a local Web Content Viewer.

    When you use the viewer with WSRP, settings for selecting content from a web content library show content from the remote web content system.

    **Note:** Depending on the configuration of the Web Content Viewer, resources like resource bundle files or content processor plug-ins might be required. In such cases, the resources must be available on the remote web content server acting as the WSRP Producer.

    **Limitations when using WSRP with the Web Content Viewer:**

    -   Because the concept of pages and web content pages does not exist in WSRP, you cannot use the dynamic link broadcasting feature with web content pages. When you specify how to broadcast links, do not select **Dynamically select a web content page** in the **Broadcast links to** field. Selecting this option has the same effect as broadcasting links to the current page.
    -   Web content inline editing for your web content is not supported with WSRP.
    -   The use of remote authoring action URLs in your web content is not supported with WSRP.
    -   Tagging and rating for web content is not supported with WSRP.
    -   Personalization elements are not supported with WSRP. Therefore, you cannot use features that require personalization rules. Examples: content targeting, federated documents, social rendering, and Digital Data Connector \(DDC\) for HCL Portal.
    **Limitations when using WSRP with the Web Content Viewer with other non-HCL Digital Experience WSRP Consumers:** The link broadcasting feature of the viewer is not supported for the WSRP Consumers of other vendors. This limitation is because the concept of pages and web content pages does not exist in WSRP. When you specify how to broadcast links, you can select only the option **None**.


