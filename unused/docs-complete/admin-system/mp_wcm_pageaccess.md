# Enabling page-based access control for web content pages 

Typically, when you render content items in a web content viewer, access control enforcement on those content items is handled by HCL Web Content Manager. However, you can use page-based access control to delegate access control enforcement to the web content page that is used to display the content.

Page-based access control can be specified for individual content associations of a page. When page-based access control is enabled for a specific association, Web Content Manager does not perform additional access control checks when the associated site area contains the rendered content. This content includes not only direct children of the associated site area but also any nested site areas and their related content. Instead, the access control enforcement layer assumes that the same level of access that is granted on the page also applies to the rendered content. The affected content also includes any content items or components that are loaded during the rendering of the target content item. As a result, rendering performance is improved. If the viewer renders content that is not contained in the associated site area, normal access control enforcement is performed.

Page-based access control affects only the access control enforcement that is triggered by the web content viewer. Other access paths, such as the access control that is used by the search crawler, are not affected. In addition, Web Content Manager resources like images that are loaded directly by the browser are also not affected.

**Context processor plug-ins note:** Context processor plug-ins that are used with the web content viewer run in the access control context of the initial page request. Changes made to the rendering context that might affect whether page-based access control is enabled are evaluated after all other context processor plug-ins complete their configuration.

1.  To enable page-based access control, ensure that the web content page is associated with a site area in the web content system.

    You can manage content associations using the site toolbar or the Page Properties portlet.

2.  For each content association for which you want to enable page-based access control, select **Use Portal Page Security** for the association.

    **Note:** If the user creating the page does not have sufficient permissions to enable page-based access control, the check box is disabled. The following access rights must be defined:

    -   Administrator @ wcm\_library, where wcm\_library represents the library containing the content that is associated to the web content page.
    -   Administrator @ CONTENT\_MAPPINGS
    -   Editor @ wcm\_page, where wcm\_page represents the web content page for which you want to enable page-based access.

**Parent topic:**[Customizing web content delivery ](../wcm/wcm_delivery_custom.md)

**Related information**  


[Web content associations ](../wcm/wcm_delivery_contentmap_about.md)

[Creating a web content page ](../admin-system/mp_wcm_createpage.md)

