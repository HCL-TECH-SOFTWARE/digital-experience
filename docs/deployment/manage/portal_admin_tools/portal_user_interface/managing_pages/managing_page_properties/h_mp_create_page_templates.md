# Creating page templates

To simplify the creation of pages, define pre-configured pages that can be used as templates when you create new pages.

You can configure a template page like any portal page and add pre-configured portlets. Whenever a new page is created from the template, the page layout, portlets, and portlet configuration from the template are copied to the new page. You can also associate a page template with a community in HCL Connections or with a site area in HCL Web Content Manager. When such an association is present, pages that are created from the template can automatically create the associated community or site area.

!!!important
    When a new page is created from a template, no reference to the template page used to create the page is maintained. This action means that all changes that you apply to a template page after pages are created from this template are not propagated to any of the pages that exist.

1.  To open the **Manage Pages** portlet, click the **Administration menu** icon. Then, click **Portal User Interface > Manage Pages**.

2.  Click **Content Root > Hidden Pages > Page Templates**.

    !!!note
        Virtual portals do not include the **Page Templates** label by default. However, you can add the label manually. When you do so, ensure that you give the label the unique name of `wps.content.template.root`.

3.  Create the page to be used as a template by clicking **New Page** or **New Page from**.

    -   **New Page** creates a standard portal page. Specify a title for the page and any other page characteristics, as you would for a standard portal page.
    -   **New Page from** creates the page from an existing template. Specify a title for the page and any other page characteristics. If you intend to add a content association to the template, ensure that you specify a friendly URL for the page. Select the page template to use as the basis for the new template.

        !!!note
            When you use page templates from a different theme, the page layouts are not found and can cause the options for portlet actions to be unavailable. To avoid such issues, when you create pages update the page templates to match to the theme that you are using.

4.  Save the new template.

5.  Make any further updates to the template that you require. These updates might include changes like adding portlets, adjusting the layout, setting page parameters, adding wires, or adding associations to a Web Content Manager site area or HCL Connections community.


After you save your changes, the new template page is available in the list of templates when you create pages with the Manage Pages portlet or the site toolbar.

When you create a page from a template, the following elements are copied to the new page:

-   Portlet entities, including portlet preferences
-   Page layout and style
-   Theme and skin settings
-   Portlet wires for communication with other portlets
-   Page parameters
-   Page descriptions in all languages
-   Access Control configuration. This element includes role blocks and explicit role assignments.

Page titles in any language are not copied.

**Hierarchical templates:** It is possible to create a hierarchy of templates, for examples, a parent template page with a child page. When the page metadata `ibm.portal.instantiation.page.include.descendants` is set to `true` on the parent page, creating a page from the parent template creates a single page and the complete hierarchy that includes the children.

**Web content associations:** If the page template contains a content association to a site area in a web content library, the following changes take place automatically when a page is created from the template:

-   A new site area is created. The title of the site area is derived from the title of the new page.
-   The site area is created as a child of the site area that is associated with the parent page of the new page. This support requires that the content association for the parent page to be defined.
-   All site area properties and all content items are copied over to the new site area. The copied content also includes any nested content.
-   The default content association on the new page is modified to reference the newly created site area.

**Community associations:** If the page template contains an association to a community in HCL Connections, the following changes take place automatically when a page is created from the template:

-   A new community is created in HCL Connections. The name of the community is derived from the title of the new page.
-   The community association on the new page is modified to reference the newly created community.

???+ info "Related information"  
    -   [Page templates](../../../../../../build_sites/sitebuilder/site_dev_with_sitebuilder/creating_sites_using_sitebuilder/sitebuilder_learn_pgtemplate.md)

