# Web Content Viewers

Web Content Viewers are portlets that render content from a web content library as part of a DX page. If your presentation is simple, a single viewer can be sufficient. To provide a richer experience for your users, use multiple viewers to aggregate content from different libraries.

## How viewers locate content

When you add a Web Content Viewer to a web content page, the viewer locates the content to be rendered by evaluating several pieces of information:

-   The portlet configuration settings for the viewer can identify the default content to be rendered when a user browses to a page that contains the viewer.
-   If the viewer does not specify default content, it determines whether a default content association is defined for the page. If a content association exists, the viewer renders the default content of the referenced site area in HCL Web Content Manager.
-   If the current request contains a public render parameter \(path-info or context\), the viewer renders the content that is identified by the render parameter. This setting overrides the content setting from the portlet configuration or from the content association on the page. An example of a case where a render parameter might be involved is when users click a link to a content item.

When content is rendered, a Web Content Viewer checks first for a render parameter on the request. As shown in Table 1, if no parameter exists, the viewer evaluates its own portlet configuration and any content association on the page that contains the viewer.

|Content reference in portlet configuration?|Content association on web content page?|Content that is rendered by viewer|
|-------------------------------------------|----------------------------------------|----------------------------------|
|Yes|No|Content that is identified by portlet configuration of the viewer.|
|No|Yes|Content that is identified by association on page.|
|Yes|Yes|Content that is identified by portlet configuration of the viewer.The content that is specified in the portlet configuration can use a relative path. In this case, the complete path to the target content is derived by combining the associations on the page and the viewer.|

References to content can be direct or relative:

-   **Direct path to the target content**

    A Web Content Viewer can reference either a site area or a specific item in the library. This example is a reference to the item `Article` in the site area `Articles` of the library `Web Content`:

    ```
    Web Content/Articles/Article
    ```

    When you configure the viewer with a direct path to content, the content association on the page that contains the viewer is ignored.

    To configure a direct path to content, use the **Select content and path** setting in the **Content behavior** settings of the Web Content Viewer.

-   **Relative path to the target content**

    When a content path based on a relative path is derived, the viewer appends the content path in its configuration to the content association on the page. For example:

    -   Content association on web content page: `Web Content/Articles`
    -   Content that is referenced in portlet configuration: `Article`
    -   Resolved content path: `Web Content/Articles/Article`
    To configure a relative path to content, use the **Select content and use the content association of current page** setting in the **Content behavior** settings of the Web Content Viewer.


Depending on how you reference content, you can create Web Content Viewers and web content pages that are as specific or generic as you require.

-   **Reference no content**

    You can define a content association on a web content page and then add a generic viewer that references no content. The viewer detects the site area that is defined by the content association on the page and renders content from the site area. No additional configuration of the Web Content Viewer is required.

-   **Reference specific content**

    You can configure a viewer to point to a specific piece of content. You can then add this viewer to any web content page to render the mapped content, regardless of any content association on the page.

-   **Reference content with a relative path**

    If you are using a consistent site structure with your web content libraries, you can take advantage of the relative path capability for referencing content. For example, you can create a reusable viewer that can render different content depending on the web content page where the viewer is deployed. By defining a viewer with a content association that uses a relative path, you can add instances of that viewer to different pages. The viewers then render different content, according to the content associations on the pages.

    You can use one content association on a page and then add multiple Web Content Viewers on the page. In this case, the Web Content Viewers are configured to use a relative path into different site areas in the library. By changing only the content association on the page, you can then redirect the viewers to another library or other set of site area content.


## Create content with Web Content Viewers

When added to a page, a viewer can create a copy of the content that is identified in the portlet configuration. This feature provides several advantages:

-   You can create content items quickly and easily, within the scope of the page where they are used.
-   You can modify the individual copies of the content independently of each other.
-   Typically, there is no need to further adjust the configuration of the viewer after you add it to the page.

Web Content Viewers that are configured to create content can be used multiple times, either on the same page or on different pages. Each instance of the viewer references a separate copy of the content item that is referenced in the portlet configuration.

Copied content is stored in the site area that is identified by the default content association of the current page. In addition, the portlet configuration of the newly added viewer is automatically updated to specify a relative path to the copied content.

## Link Web Content Viewers

Many Web Content Viewers can be added to a single DX page or a series of pages. Sometimes it is necessary for different Web Content Viewers to interact with each other. For example, a menu component might be placed in one viewer and a content item in another viewer. If you want the content item to change when a different link is clicked in the menu, you must link the two viewers.

Web Content Viewers can broadcast or receive links:

-   **Broadcasting links**

    The state or context of a Web Content Viewer is not sent directly from one portlet to another. You can configure viewers to broadcast their current state or context to other viewers on the same page or to viewers on other pages. Any information broadcast by a Web Content Viewer is received only by viewers that are configured to receive this information.

-   **Receiving links**

    A Web Content Viewer can receive the following information:

    -   Information about the state or context of the current content item or component that is being rendered by the viewer.
    -   Information from content items or components that are rendered by other viewers that are broadcasting links.

For examples of the different ways that you can use linking with Web Content Viewers, see *Link examples for Web Content Viewers.*

## Web Content Viewers and remote servers

To display web content on a portal that does not include Web Content Manager, you can use the Web Content Viewer and the WSRP support in the portal. The Web Content Viewer can then retrieve and display content from a web content system on a different server.


???+ info "Related information"
    - [Enabling remote rendering with WSRP and the Web Content Viewer](../enable_remote_render_wsrp/index.md)

