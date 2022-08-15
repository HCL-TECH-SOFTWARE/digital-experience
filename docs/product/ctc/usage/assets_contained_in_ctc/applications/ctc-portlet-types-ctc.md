# Applications

These applications can be added to your page from the Create Applications view when in Edit mode.

## Dynamic applications

Three applications are set up to show content dynamically, based on the current page context.

The Dynamic Body application renders the current content item, which uses the associated presentation template. The Dynamic Post-Body application and Dynamic Sidebar application are set up to use context processors that de-reference a link element from the current content item. The de-referenced content item is then rendered in the application by using its associated presentation template.

In the Content Template templates, the Dynamic Body application is used on all index and details pages. The Dynamic Post-Body and Dynamic Sidebar applications are used only in the Section Detail template to allow each section to display different content on the page. The de-referencing strategy might be used to render other sets of related content items on the same page.

-   **[Page Component Reference](../ctc/ctc-portlet-component-configuration-reference.md)**  
Use this portlet to reference existing page component configuration content, such as when you want to use the same page component on a details page that was created for a landing or index page.
-   **[Dynamic Body](../ctc/ctc-portlet-dynamic-body.md)**  
When a user clicks a content item link, the appropriate page is located and the portlets retrieve information from this item. To enable this behavior, a Dynamic Body portlet must be added to the page where the content item is displayed.
-   **[Dynamic Post-Body](../ctc/ctc-portlet-dynamic-post-body.md)**  
This portlet is used with content items created with the Section authoring template to display the content item that is selected in the Post-Body element of the content item.
-   **[Dynamic Sidebar](../ctc/ctc-portlet-dynamic-sidebar.md)**  
This portlet is used with content items created with the Section authoring template to display the content item that is selected in the Sidebar element of the content item.
-   **[Metadata and Analytics](../ctc/ctc-portlet-metadata-analytics.md)**  
This portlet is configured to push metadata from the current content into the page header and to also render a set of analytics tags.
-   **[Teaser Reference](../ctc/ctc-portlet-teaser-reference.md)**  
This portlet is used to display some teaser rich text on a page by referring to an existing teaser. Use this portlet to reuse a teaser in multiple places.
-   **[CTC Content](../ctc/ctc-portlet-ctc-content.md)**  
This portlet is used as a prototype configuration for copying CTC content.

**Parent topic:**[Assets contained in the Content Template](../ctc/ctc-assets.md)

