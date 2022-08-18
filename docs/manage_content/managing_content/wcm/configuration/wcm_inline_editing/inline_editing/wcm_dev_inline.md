# Inline editing

Inline editing enables users with edit access to a content item to edit that item from within the web page itself instead of using the authoring portlet. This feature is available when you display content with a web content viewer portlet.

The inline editing feature requires:

-   HCL Portal version 8.0.0.1 or later, or Web Content Manager version 8.0.0.1 or later.
-   A theme that supports Dojo. The themes that are included with HCL Portal are enabled for Dojo.

    If you create a custom theme, in addition to supporting Dojo, the new theme must reference the `wcm_inplaceEdit` theme module. For information about creating themes that support Dojo, see *Dojo and HCL Portal*.

-   When using inline editing with page components, users must have Editor access to the Portal Site library.


**Important:** This feature can be enabled or disabled by enabling or disabling the content targeting feature and application objects. For more information, see *Installing content targeting features and application objects*.

**Note:** When a user tabs between in-place editing enabled fields, users need to click each field in turn to access in-place editing for each field.

-   **[Updating sample template items for inline editing after an upgrade installation \| HCL Web Content Manager](../wcm/wcm_dev_inline_upgrade.md)**  
HCL Web Content Manager includes sample content such as web content template pages and predefined portlets that you can add to pages to render content. If you upgrade, these sample web content template items continue to use the editing method of the earlier release. To use the inline editing method with the earlier template items, you must complete several manual steps.
-   **[Enabling inline editing for content items](../wcm/wcm_dev_inline_tags.md)**  
You can enable inline editing for content item fields in your site design.

**Parent topic:**[Web content inline editing strategies](../wcm/wcm_cms_in-line_system.md)

**Related information**  


[Creating an editable property tag](../panel_help/wcm_dev_item-details_property_edit.md)

[Creating an editable element tag](../panel_help/wcm_dev_referencing_elements_edit.md)

[Creating an If Edit Mode tag](../panel_help/wcm_dev_tag_ifeditmode.md)

