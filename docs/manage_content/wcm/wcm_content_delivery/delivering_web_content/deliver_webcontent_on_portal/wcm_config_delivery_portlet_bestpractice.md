# Web Content Viewer best practices and limitations

View some best practices and limitations for using Web Content Viewers.

## User authentication

User authentication to Web Content Viewers is managed by HCL Digital Experience and IBM® WebSphere® Application Server.

## Security and WSRP

When you display web content from remote servers by using WSRP and a Web Content Viewer, configure security and authentication between the servers:

-   The portal server that acts as the WSRP Consumer
-   The web content server that acts as the WSRP Producer

See *Security for WSRP services* for details.

## User access to Web Content Manager content and components

Users are able to view only content and components that can be accessed by either a portal user ID or the user of the WSRP Consumer. This access must be defined in Web Content Manager. If a user ID or the user of the WSRP Consumer does not have sufficient rights to view a content or component, errors can occur.

## Content and component limitations

Not all content or components that are built in a Web Content Manager solution are suitable for inclusion in a portal page:

-   Content or components to be shown within a portal page must be self-contained and not rely on other content or components.
-   When you create presentation templates or page styles to use when you display content within a portlet, reference only the content you want to show. Add components like menus and navigators in separate portlets, and link the components to other content portlets as required.
-   JavaScript URLs are not supported.

**Using JavaScript:**

When a web page is rendered by Web Content Manager, some tags might be rewritten. Web Content Manager uses double quotation marks for attributes in HTML tags. If you use JavaScript to produce HTML tags, Web Content Manager does not recognize them if you use single quotation marks.

## Other limitations

-   The results of a POST operation in a form are only displayed within the portlet that sent the POST. You cannot send the result of a POST to another portlet.
-   An anonymous portal user is also considered an anonymous Web Content Manager user, so overriding the log-in does not work for anonymous users.
-   If a Web Content Manager proxy server is being used with Web Content Viewers, URLs rewritten by the proxy are not fully qualified. Instead, the URLs are relative to the server. To address this issue, redirect mappings can be created in the HTTP Server configuration that passes the URLs to the proxy server.
-   Category selection trees cannot be used with the local Web Content Viewer.
-   Only advanced caching can be used with a local Web Content Viewer.
-   Tagged web content that is displayed in the Web Content Viewer is only available when there is a single instance of the portlet on the page. When you click a tag result, the Tag Center broadcasts the information about what content to display by using a public render parameter. If you are displaying multiple instances of content in the viewer, the instances show the content that you tagged rather than their original content.


???+ info "Related information:"
    - [Adding a wiki to a page](../../../../../build_sites/create_sites/developing_managing_content/wikis/wiki_add.md)
    - [Adding existing wikis to a page](../../../../../build_sites/create_sites/developing_managing_content/wikis/wiki_add_existing.md)
    - [Adding existing blogs or blog libraries to a page](../../../../../build_sites/create_sites/developing_managing_content/blogs/blog_add_existing.md)
    - [Adding a blog or blog library to a page](../../../../../build_sites/create_sites/developing_managing_content/blogs/blog_add.md)

