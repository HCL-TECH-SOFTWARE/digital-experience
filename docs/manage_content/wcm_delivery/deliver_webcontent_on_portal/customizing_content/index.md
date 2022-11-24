# Customizing web content delivery

Although web content viewers and page templates provide the basis for delivering web content, you can customize the environment to provide users with a better experience.

For example, you can create custom objects like page templates and web content viewers. You can also provide users with conveniences like customized error messages and friendly URLs that reference web content.

-   **[Creating web content page templates](wcm_delivery_custom_newtemplate.md)**  
Create web content page templates to quickly deploy new pages that contain web content. With a template, you can define the layout and presentation of the page, including adding web content viewers that are configured to render web content.
-   **[Creating web content when you add a web content viewer to a page](wcm_delivery_content_addshelf.md)**  
To make it easier for users to find web content, the site toolbar provides palettes. You use these palettes to organize components that you can add, such as portlets, iWidgets, and web content.
-   **[Customizing error messages for Web Content Viewers](wcm_config_wcmviewer_customerror.md)**  
If an error occurs during rendering, the Web Content Viewer shows an error screen. You can customize the default error screen, and you can create your own custom JSP file that is used to display error messages.
-   **[Friendly URLs and Web Content Viewers](../customizing_content/friendlyurl_wcmviewer/index.md)**  
Friendly URLs provide a way for you to define a custom address for a portal page that is easy to remember and share. The Web Content Viewer expands on friendly URL support so you can specify extra path information in the friendly URL.
-   **[Setting up a web content fallback page](mp_wcm_fallback.md)**  
Set up a web content fallback page to be used when a web content viewer cannot determine which page to use to display a content item. The fallback page can also be used when users do not have sufficient privileges to view the page originally associated with the content item.
-   **[Enabling page-based access control for web content pages](mp_wcm_pageaccess.md)**  
Typically, when you render content items in a web content viewer, access control enforcement on those content items is handled by HCL Web Content Manager. However, you can use page-based access control to delegate access control enforcement to the web content page that is used to display the content.
-   **[Previewing content on web content pages](mp_wcm_prevcontent.md)**  
When working with content in the authoring portlet, you can preview content items in a portal environment as part of a web content page.
-   **[Adding HTML meta tags for Search Engine Optimization](wcm_config_wcmviewer_seo.md)**  
Search engine optimization \(SEO\) focuses on improving the visibility of a page or website in search engine results. A basic technique of SEO is adding HTML title and meta tags to your page source. These meta tags are used to define description information and other metadata that search web engines and crawlers can use when they create search indexes and collections. When you include content in a page with a web content viewer, you can improve the search engine optimization of the page by adding title and meta tags with values derived from the web content itself.
-   **[Improving page loading performance with asynchronous web content rendering](../customizing_content/improving_asynch_render/index.md)**  
You can increase page loading performance by separating portal page content delivery from web content rendering. To do so, you use the asynchronous web content rendering feature. If you enable asynchronous web content rendering, the portal serves the page immediately, but only with placeholder content. The Web Content Viewer then dynamically inserts the configured content into the portal page after the content has been completely rendered.


