# Web content pages and templates

Web content pages are portal pages that are associated with content that is managed in HCL Web Content Manager. Similar to web content pages, web content templates are page templates that are associated with content in Web Content Manager.

Pages and page templates are tied to web content by content associations. These associations are defined in the page properties and can be specified with the Associations window when you edit page properties. You can associate a page with one or more site areas in one or more web content libraries.

If managed pages are enabled, all managed pages are automatically associated with a corresponding page site area in the Portal Site library. This type of association is called a system content association and enables changes to the page to be managed by Web Content Manager. System content associations are managed by the portal and cannot be deleted or changed manually.

When there are multiple content associations for a page, one of the associations is designated as the default association. Typically, the default association is the system content association for the page. However, you can use the Associations window to specify a different content association as the default association.

## Web content pages

With web content pages, you can take advantage of the following benefits when you render web content:

-   If you add an unconfigured web content viewer to the page, the viewer automatically renders the default content of the site area that is specified by the default content association.
-   Dynamic page selection determines the best web content page to use to render a content item when you click a link to the content item. For example, if you click a link to a content item in a search result, the portal evaluates the following set of content associations:

    -   Associations that exist for the site area that directly contains the target content item.
    -   Associations for any site areas that are ancestors of the site area that contains the target content item.
    The portal identifies the page that is mapped to the site area that is closest to the target content item. The viewer then renders the content item on that page.

-   You can extend friendly URLs to reference content items that are rendered on a web content page. Friendly URLs for web content are composed by combining the friendly URL of the current page and the content path of the rendered content item.

You can create a web content page in two ways:

-   Create the page from a web content page template.
-   Add a content association to an existing portal page.

## Web content page templates

To create a web content page template, create a page under the **Page Templates** label. This label is the root label for all page templates in the portal. You can access the **Page Templates** label by clicking the **Administration menu** icon and then by clicking either of the following locations:

-   **Portal User Interface** \> **Page Templates**
-   **Portal User Interface** \> **Manage Pages** \> **Content Root** \> **Hidden Pages**

When you create a web content page template, you define the layout, style, and contents of any web content page that is created from the template. Web content page templates have all the same flexibility and customization features as a standard portal page or portal page template. You can do common tasks like adding content with portlets, changing the style of the page, or changing the layout of objects on the page. By using viewers with other portlets in a web content page template, you can create pages that support a wide range of user goals. Likewise, you can rely on only viewers and create a website that is primarily composed of information in your web content system.

As with standard page templates, you can create web content pages from a web content page template:

-   Manage Pages administration portlet
-   Create Page tab in the site toolbar

When users create a web content page from a template, content that is associated with the page template is copied with the page itself. If you create multiple pages from the same page template, each page results in a separate copy of that content.

When you create a page from a template, page titles in any language are not copied. The following elements are copied to the new page:

-   Portlet entities, including portlet preferences
-   Page layout and style
-   Theme and skin settings
-   Portlet wires for communication with other portlets
-   Page parameters
-   Page description \(all languages\)

In addition, the following changes take place automatically, depending on the individual web content associations that exist on the page.

-   If the page template is a managed page, with a system content association that references the Portal site library, the following changes apply:
    -   A portal page site area is created in the Portal Site library, with the title of the site area that is derived from the title of the new page. The hierarchy structure of the portal page site area is automatically synchronized with the page hierarchy in the portal.
    -   All authoring template mappings and all nested content are copied over into the new portal page site area. However, any nested portal page site areas are not copied.
-   If a default content association references a library other than the Portal Site library, the following changes apply. These changes apply regardless of whether the page template is a managed page.
    -   A site area is created, with the title of the site area that is derived from the following elements:
        -   The title of the new page.
        -   The name of the site area that is being derived from the friendly URL name of the page.
    -   The site area is created as a child of the site area that is defined as the default content association of the parent page of the new page. This support requires that the parent page is associated with a site area outside the Portal Site library.
    -   All site area properties and all nested content are copied over to the new site area.
    -   The default content association on the new page is modified to reference the newly created site area.

Web content viewers on the page template can be configured to reference content that is copied when a page is created from the template. When the page is created, the viewer configuration is automatically adjusted to point to the new content that is created during page instantiation.

**Note:** Managed pages must be enabled to support page templates that store their associated web content in the Portal Site library. If you disable managed pages, the content that is associated with a template is no longer copied during page instantiation. In addition, the corresponding preferences of any web content viewers that are on the page are not adjusted.

## Hierarchical page templates

It is possible to create a hierarchy of templates, for examples, a parent template page with a child page. If the page metadata `ibm.portal.instantiation.page.include.descendants` is set to `true` on the parent page, then creating a page from the parent template not only creates a single page but the complete hierarchy that includes the children.


**Related information**  


[Creating a web content page](../admin-system/mp_wcm_createpage.md)

