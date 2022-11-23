# Static content

Static content is part of every website. In a portal site, static content can be rendered as static page or it can be added to specific content areas on a page.

To include, update, and administer your static content pages, you can use any of the portal administration tools, Manage Pages portlet, XML configuration interface, or the Portal Scripting Interface.

Working with static content pages has the following advantages:

-   You or your web designers can create a portal page by using standard web authoring tools. This tool can be HTML editors or even simple text editors. Creating an HTML portal page requires no knowledge of JSP.
-   You have more control over the layout of the page than by using the portal layout model.
-   You can include portlets as dynamic elements and containers as placeholders for portlets in your pages. You can display these portlets by using server-side aggregation, Ajax, or iFrame techniques.
-   You can update an existing static page by uploading a modified HTML file while you preserve the portlet customization on that page.
-   Static pages can be rendered in the portal by the following two ways:
    -   As stand-alone web pages that control the complete browser area.
    -   As part of the portal content area. In this case, the portal still controls the banner and navigation area.
-   You can deploy and manage your static content pages by using any of the portal administration tools.
-   You can use portlet communication with static pages, for example by wires.

Compared to dynamic content pages based on the portal container model, static HTML pages also have the following characteristics:

-   You create and administer static pages similarly as other portal pages. Some steps and options differ. For details, refer to the user interface and the portlet help of the Manage Pages portlet and its subportlets.
-   To update a static page, you make the required changes in the HTML file. Then, you replace the portal page with the updated page by using the Manage Pages and Properties portlets or other portal administration tools. You can use the portal Page Customizer to update the static page layout if the static page contains portlet containers that are defined by the portlet container microformat.
-   You provide national language support by bundling localized markup files into the compressed file, together with the HTML file that defines the static content. At rendering time, the portal globalization algorithms decide which locale is rendered, based on the request, on settings, and on the locals that are available.
-   The portal defines a set of microformats for skins and portlet actions, such as configuring the portlet settings, portlet communication, and navigation for rendering. These microformats are styled by CSS that the static page author provides.
-   Static pages can include drag actions. These actions are defined through a microformat. Users with the appropriate access rights can drag UI elements, such as portlets or pages.
-   You provide JS, CSS, or image files for static pages by bundling them into a compressed file, together with the HTML file that defines the static content. These resources can then easily be referenced through relative links from the static page template.
-   You can have static pages that are rendered by server-side aggregation or by client-side aggregation.
-   Using skins and other graphic features with static content: When you write a static page and include it in your portal, the portal can render the page itself. But not with the visual features that you might configure for your portal. For example, you cannot encode skins within static pages. When the portal renders such a page, portlets on the page are rendered without a skin. To have portlets on static pages that are rendered with a skin, use CSS style sheets or JavaScript that use the microformats at rendering time.

The following topics describe how you create static pages in HTML, and what features you can use.

When you write the static page, you can include it in your portal by using the Manage Pages portlet.

**Decision point:** After you include a page in the portal, you cannot change the page from static content to standard portal layout or from standard portal layout to static content. If you want to change the page type after you create it, you need to delete the existing page and create a new page of the required type.

!!! note
    When a static page uses the default Portal 8.5 theme, Portal 8.0 theme, or Portal 7.0.0.2 theme, users can change the style of the page, but they cannot change the layout of the page or add content to it.


-   **[Creating a static page](../static_content/creating_static_page/index.md)**  
You can create a new portal page by starting with a static HTML file or an HTML fragment. If you revise the HTML, you can refresh the page to render the changes in the portal.
-   **[Static resources](site_static_resources.md)**  
In addition to the HTML file that describes the page, static pages can contain resources such as images, scripts, and styles. Learn about the static resources that are available when you are using static pages.
-   **[Dynamic page metadata](site_dynamic_metadata.md)**  
HTML defines some elements that refer to information that is managed as page metadata on portal pages. You can use the dynamic page metadata rewriting feature to place this information into the static HTML code automatically.
-   **[Including static content pages in your portal](../static_content/including_static_content_pages/index.md)**  
You can create a new portal page by starting with a static HTML file or an HTML fragment. If you revise the HTML, you can refresh the page to render the changes in the portal. To include, update, and administer your static content pages, you can use any of the portal administration tools, Manage Pages portlet, XML configuration interface, or the Portal Scripting Interface.

<!--
-   **[Using WebDAV to manage pages and static content](webdav_static.md)**  
WebDAV for HCL Digital Experience provides a simple and easy way to administer portal resources. Both administrators and users can use it. --->
