# Page templates


Content authors use the page templates to quickly create pages that are consistent with your site design. They do not have to waste time to configure settings that are probably consistent across your site, such as theme selection, page layout, and more.

## Available page templates

Three templates are provided for immediate use: Articles, Basic, and Label. The Basic template is an empty page that you can add content to.

The Articles template has two portlets that display content, Articles and List of Articles. There is also a content association between the two portlets. The List of Articles portlet displays a list of the articles that are stored in the page site area. You can select an article from the list and it displays in the Article portlet. Both of the portlets were developed from the content viewer portlet.

The Label template is a simple label. Labels are navigation elements. The label displays in the navigation, but label type page does not include content. The content of the first child page displays when you click the label in the navigation.

## Custom page templates

The provided page templates are probably not comprehensive enough for your website. Based on your html prototype or wireframe for your website, you can determine common page layouts and configurations. After you identify a few common page layouts from your design, then you can create templates for the content authors. For example, if each landing page in your site includes breadcrumbs, a carousel, and a three-column content area, then create a landing page template with those elements.

When you create a template you can include portlets and portlet preferences, page layout and style selections, theme and skin settings, portlet wires for communication with other portlets, page parameters, and page descriptions. Use the Manage Pages Portlet in the administration area to create new templates.

Page templates are created in a specific area of the portal hierarchy, called Page Templates. Pages that you add to this area automatically appear as an available page template in the site toolbar in the **Create** \> **Page** area.

!!! note
    When you create a new page based on a page template, you might see the following error message: The page template could not be instantiated underneath the page PARENT\_PAGE since this page has no default content association to a site area outside of the Portal Site library or the current user does not have access to the mapped site area. To prevent this from happening, decide where to store the content that is copied from the template page to your new page:

-   If you want to store the content outside of the Portal Site library, create a default content association to a site area outside of the Portal Site library for the parent page of the new page.
-   If you want to store the content in the Portal Site library, transfer the content for the template page to the Portal Site library first. For more information, go to *Transferring content associations to the Portal Site library*.


???+ info "Related information:" 

    - [Transferring content associations to the Portal Site library](../../../manage_content/wcm/wcm_artifacts/managed_pages/cfg_managed_pages/wcm_config_mngpages_transfer.md)

    - [Creating page templates](../../../extend_dx/development_tools/portal_admin_tools/portal_user_interface/managing_pages/managing_page_properties/h_mp_create_page_templates.md)

