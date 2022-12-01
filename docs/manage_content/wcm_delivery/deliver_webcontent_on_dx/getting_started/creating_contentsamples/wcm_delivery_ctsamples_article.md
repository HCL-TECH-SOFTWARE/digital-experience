# Creating content with the Articles template page

The sample content that is provided with HCL Web Content Manager includes a web content template page that is called Articles. This template page demonstrates how you can build pages with predefined content.

The Articles template page is a managed page that contains two web content viewers. These viewers are configured to render content items that are stored in the site area for the page in the Portal Site library.

1.  To create a page that is based on the Articles template, complete the following steps:
2.  Go to the page where you want to add the new page.

3.  Edit the page and select **Create** \> **Page** in the site toolbar.

4.  Use the Create Page tab to create the page. Select the **Articles** template for the new page.


The new page contains the List of Articles web content viewer and the Article viewer:

After you create a page with the Articles template, the new page contains two web content viewers. The List of Articles viewer shows a list of any articles in the site area that are associated with the page. The Article viewer shows a sample article that was created.

The Articles template demonstrates several key features of web content page templates:

-   The Articles template page contains a system content association to the site area for the template page in the Portal Site library \(`Portal Site/Content/Content Root/Hidden Pages/Page Templates/Articles`. This site area contains three content items that are used as the initial content for pages that are created from the page template. To see this association, edit the page, and then in the site toolbar, click **Page** \> **General** \> **Details** \> **Default site area**.
-   There are two web content viewers included with the Articles template:
    -   The List of Articles viewer renders links to all articles stored in page site area.
    -   The Article viewer renders a specific article that is selected in the List of Articles viewer. The viewer also contributes page metadata to the HTML head section of the rendered DX page.
-   The content items that are provided by default require CSS styles that are defined in the `wp_oob_sample_styles` theme module. To make these styles available to the default content items, you must ensure that the page that contains the items uses a theme profile that includes the `wp_oob_sample_styles` theme module. The deferred profile \(`profile_deferred.json`\) includes this theme module.

    For more information about theme modules and theme profiles, see *The module framework.*


When you create a page that is based on the Articles template, several things happen:

-   A page is created based on the page template. The new page has the same layout and style as the template and contains copies of the two web content viewers.
-   The new page has a system content association to its corresponding DX page site area.
-   The content items that are contained in the site area for the page template are copied into the site area that is associated with the new page.
-   The Articles viewer and List of Articles viewer on the new page automatically render the newly created content that is associated with the new page. The rendering occurs because of the viewer configuration:
    -   The configuration of the List of Articles viewer is updated during instantiation to point to the newly generated `List of Articles` content item.
    -   The Article viewer is configured to directly retrieve its context from the content association of the containing page.

!!! note
    The Articles page template is a managed page that stores its associated web content in the Portal Site library. If you disable managed pages, the content that is associated with this template is no longer copied during page instantiation. In addition, the corresponding preferences of the Articles viewer and List of Articles viewer are not adjusted.


???+ info "Related information"
    - [The module framework](../../../../../../../build_sites/themes_skins/the_module_framework/index.md)

