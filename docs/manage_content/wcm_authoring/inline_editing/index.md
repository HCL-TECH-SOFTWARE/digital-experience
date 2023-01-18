# Web content inline editing strategies

An inline editing system is used to deliver editable websites such as an intranet or a wiki. It combines the features of both an authoring system and a delivery system.

-   **[Creating an authoring tools element](../../wcm_authoring/authoring_portlet/content_management_artifacts/elements/authoringtools_element/index.md)**  
The authoring tool element is used to add authoring portlet functions to web pages. When you create an authoring tool element, you need to define the layout of the authoring tool and any required actions, and select parameters for each action layout as required.

## Inline editing

Inline editing enables users with edit access to a content item to edit that item from within the web page itself instead of using the authoring portlet. This feature is available when you display content with a web content viewer portlet.

The inline editing feature requires:

-   HCL Portal version 8.0.0.1 or later, or Web Content Manager version 8.0.0.1 or later.
-   A theme that supports Dojo. The themes that are included with HCL Portal are enabled for Dojo.

    If you create a custom theme, in addition to supporting Dojo, the new theme must reference the `wcm_inplaceEdit` theme module. For information about creating themes that support Dojo, see *Dojo and HCL Portal*.

-   When using inline editing with page components, users must have Editor access to the Portal Site library.


!!! important
    This feature can be enabled or disabled by enabling or disabling the content targeting feature and application objects. For more information, see *Installing content targeting features and application objects*.

!!! note
    When a user tabs between in-place editing enabled fields, users need to click each field in turn to access in-place editing for each field.

-   **[Understanding inline editing using Woodburn Studio](wcm_inline_editing.md)**  
This topic provides an example of how you can use inline editing. This example uses Woodburn Studio, and you can perform the same actions in your own site.
-   **[Updating sample template items for inline editing after an upgrade installation | HCL Web Content Manager](wcm_dev_inline_upgrade.md)**  
HCL Web Content Manager includes sample content such as web content template pages and predefined portlets that you can add to pages to render content. If you upgrade, these sample web content template items continue to use the editing method of the earlier release. To use the inline editing method with the earlier template items, you must complete several manual steps.
-   **[Enabling inline editing for content items](wcm_dev_inline_tags.md)**  
You can enable inline editing for content item fields in your site design.


???+ info "Related information"
    - [Creating an editable property tag](../../wcm_authoring/authoring_portlet/content_management_artifacts/tags/creating_web_content_tags/wcm_dev_item-details_property_edit.md)
    - [Creating an editable element tag](../../wcm_authoring/authoring_portlet/content_management_artifacts/tags/creating_web_content_tags/wcm_dev_referencing_elements_edit.md)
    - [Creating an If Edit Mode tag](../../wcm_authoring/authoring_portlet/content_management_artifacts/tags/creating_web_content_tags/wcm_dev_tag_ifeditmode.md)


