# Creating a web content page

A web content page is a page that is associated to one or more site areas in HCL Web Content Manager. You can create a web content page from a web content template page, or you can convert an existing DX page into a web content page.

A web content page always restricts the sharing scope for public rendering parameters to the page itself. The corresponding page parameters are automatically added to the page when a page is associated to a site area.

**Caching note:** When you are using web content pages, you cannot use advanced web content caching but instead can use only the portlet fragment cache.

1.  2.  There are two ways to create a web content page.

    -   Follow these steps to create a web content page from a web content template page:
        1.  Go to the page where you want to add the new page, and edit the page.
        2.  Open the site toolbar, select **Create** \> **Page** use the Create Page tab to create the page. Select a web content page template for the new page.

            !!! note
                If managed pages are enabled, all page templates result in web content pages.

        3.  Click **Create Page** to create a web content page from the selected template.

            If the page template has a default content association, the new page is automatically associated with a new copy of the referenced site area. Any other content associations that are not designated as the default association are copied without changes.

    -   Follow these steps to convert a DX page to a web content page:
        1.  Go to the page where you want to add the new page, and edit the page.
        2.  Open the site toolbar and select **Page** \> **General** \> **Details** \> **Default site area**
        3.  In the Page Associations window, click **Add web content**.
        4.  Select one or more site areas that you want to associate with the page, and click **OK**.
        5.  Specify the default association by selecting the association in the **Default** column.
3.  After you create the web content page, you can add web content viewers to the page from the **Create Applications** tab of the site toolbar.

    You can add a standard Web Content Viewer portlet, or you can add any predefined web content viewers that you create.

    -   If you add a standard web content viewer, the viewer renders any content from the site area that is indicated by the default content association of the page.
    -   If you add a predefined viewer that is configured to create content with the **Create content \(based on selection\)** setting, the following things happen:

        -   The base content that is referenced by the viewer is copied into the site area that is referenced by the default content association of the page.
        -   The new instance of the viewer renders the copied content in the site area that is referenced by the default content association of the page.
        An example of this type of predefined viewer is the Rich Text viewer that is available from the **Web Content** category of the **Content** tab.



???+ info "Related information:"
    - [Web content pages and templates](../getting_started/wcm_delivery_webpagetemplate_about.md)
    - [Adding sample content with the site toolbar](../getting_started/creating_contentsamples/wcm_delivery_ctsamples_shelf.md)
    - [Enabling page-based access control for web content pages](../customizing_content/mp_wcm_pageaccess.md)

