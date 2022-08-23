# Web content associations

Web content associations are used to combine portal pages and associated web content items that are managed by HCL Web Content Manager so they can be managed and rendered consistently. Web content associations map portal pages to the site structure in the HCL Web Content Manager system.

You can define a default content association and multiple other associations, which are used for dynamic page resolution. For each page, a system content association maps the page to its corresponding portal page site area in the Portal Site library. You also have the option of using page template instantiation to trigger the copying of web content into the Portal Site library or another library. This option is set by a page template parameter.

Each web content association consists of a reference to a portal page and a reference to a site area in a web content library. When a page contains a web content association, web content viewers added to the page can automatically render the content that is provided by the associated site area. In addition, a web content page template that contains an association can create copies of associated content when you create a page by using the template.

When multiple associations are defined for the same web content page, one of those associations is identified as the default content association. When you create a page and Managed Pages are enabled on the system, a system content association is automatically created to the corresponding portal page site area in the Portal Site library. This system content association is designated as the default association, but you can change that setting later as needed.

The default content association has several uses:

-   When you add a web content viewer to the page without configuring the viewer to reference content, it renders the content indicated by the default association.
-   When you create a page from a web content page template, the default content association of the page template indicates the site area to be copied during page instantiation.
-   If you are building a friendly URL to content on the page, the default association indicates the path to the rendered content. This content path fragment is appended to the friendly URL of the current page to generate the complete friendly URL.

All content associations for a page are used for dynamic page resolution. The portal uses dynamic page resolution to determine the best matching page for rendering a specific content item.

You can also configure each web content association to enable or disable page-based access control when you render content from the mapped site area. With this feature, users who are authorized to view the page are also assumed to have view access for content under the associated site area.

Web content associations are managed by the content mapping service of the portal. You can manipulate web content associations with the following methods:

-   The Page Associations window available in the site toolbar through **Page** \> **General** \> **Details** \> **Default site area**.
-   The page properties available from the Manage Pages portlet
-   XML configuration interface, by using the xmlaccess command
-   Portal Scripting Interface
-   REST API for content associations
-   Public Java API for the content mapping service

## Page context and user context

The content associations of a page can define the initial web content context of the page. This context is used for rendering when users first access a page. The context of the page can change when users interact with the content on the page. Each web content viewer on the page can be configured with an explicit context that overrides the rendering page context. The context of the portlet can also change if it is configured to receive links. When users click a link within the viewer that is configured to broadcast its links, the page context is updated. This new context is maintained until users click another link, or until users start a new session. When users start a new session, the original page context is used.

## Content copying triggered by page template instantiation

When the page template parameter called `ibm.portal.instantiation.content.dynamic.copy.target.selection` is set to **true**, the default content association that references a library other than the Portal Site library is copied into the Portal Site library during page instantiation. This allows you to store associated web content outside of the Portal Site library and have this content that is copied into the Portal Site library during page template instantiation. Using a separate library for your page templates is useful if you want to update the library independently of the Portal Site library, either through importing and exporting or syndication. A separate library is also helpful if you use the same content items on several page templates.

This parameter does not affect web content that is associated with page templates through system content associations, such as web content that is stored in the Portal Site library. Such content is always copied to the new page site area associated with the new page.

If the parent page of the new page has both a system content association with the Portal Site library and a default content association that references another library, you can use the `ibm.portal.instantiation.content.preferred.copy.target` parameter to identify the copy target location.

`ibm.portal.instantiation.content.preferred.copy.target=internal` copies the content into the Portal Site library.

`ibm.portal.instantiation.content.preferred.copy.target=template` copies the content to the other library associated with the parent page. This is the default value.

Set page parameters on your web content page templates by using **Page Properties** \> **Advanced** in the Manage Pages portlet or by using **Page** \> **General** \> **Edit Page Properties** \> **Advanced** in the site toolbar.


**Related information**  


[Content settings](../panel_help/wcm_config_wcmviewer_hcontent.md)

[XML configuration interface and content associations](../admin-system/mp_wcm_contentmap_xml.md)

[Portal Scripting Interface and content associations](../admin-system/mp_wcm_contentmap_pscript.md)

[REST API and content associations](../admin-system/mp_wcm_contentmap_restapi.md)

[Enabling page-based access control for web content pages](../admin-system/mp_wcm_pageaccess.md)

[Java API for Content Mapping Service](https://support.hcltechsw.com/csm)

[Using the view definitions provided with social rendering on your portal pages](../social/soc_rendr_use_oob_socl_list.md)

[Configuring a multilingual system Multilingual Solution](../wcm/wcm_mls_configure.md)

[Portlet Render-time navigation extensions](../wcm/wcm_mls_ext_portlet.md)

