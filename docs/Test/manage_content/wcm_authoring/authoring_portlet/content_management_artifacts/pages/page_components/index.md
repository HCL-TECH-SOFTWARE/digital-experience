# Page components

Create page components by using Web Content Manager to provide content authors a set of predefined page components that can be selected from the toolbar and added to a page.

Page components are used by site developers to quickly create predefined and page-ready groups of web content items. Content authors use these predefined page components to quickly add content to a page.

To generate a new page component:

1.  Open the applications menu and go to **Content > *Web Content Authoring** and then click **Generate > Page Component**.
2.  Select the type of page component you want to generate.
3.  Type a **Name** and **Display Title** and select the library to save the web content items under.
4.  Click **OK**.
5.  A set of page-ready web content items are created under the selected library with the specified name and display title. Edit these web content items to match your site requirements.

**Syndication:** Generated page components cannot be syndicated to servers that use versions of HCL Portal before version 8.5 with CF09. If you plan to generate your own page component types, all the servers in your system need to use HCL Portal version 8.5 with CF09 or higher.

!!!remember
    When you use inline editing with page components, users must have Editor access to the Portal Site library.

## Adding page components to projects

Page components can be added to projects in the same way as other web content items, either through the **Web Content Authoring** view, or by using the project toolbar.

Not all items that are generated with the page component are added to the project. For example, the site areas that are named **Page Components** and **Localizations** are not added to the project because they are shared by all page components.

-   **[Items used by a page component](wcm_dev_page_components_pattern.md)**  
Each page component uses a basic set of templates, components, and content items. When a content author adds a page component to a page, copies of the items that are used by the page component are created.
-   **[Customizing page components](wcm_dev_page_components_customize.md)**  
Each page component is constructed from a common pattern of design, configuration, and content features. These features can all be customized to match the design of your site. When a content author adds a page component to a page, copies of the items used by the page component are created.
-   **[Troubleshooting page components](wcm_dev_page_components_tips.md)**  
Tips and tricks to help you troubleshoot any issues with your customized page components.


