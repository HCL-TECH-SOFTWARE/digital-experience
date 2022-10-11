# Customizing page components

Each page component is constructed from a common pattern of design, configuration, and content features. These features can all be customized to match the design of your site. When a content author adds a page component to a page, copies of the items used by the page component are created.

## Edit the authoring template

Edit the authoring template named Your Page Component located at **Your Library > Authoring Templates > Your Page Component**.

-   **Add or remove elements:**

    Each generated authoring template contains a set or predefines elements. You can modify these elements, remove them, or add your own.

-   **Reapply the authoring template:**

    Once you have completed these changes, reapply the authoring template.


-   Documentation resource: [An overview of authoring templates](../../../../build_sites/create_sites/create_reusable_assets/wcm_dev_auth-temp_overview.md)
-   Documentation resource: [Creating authoring templates](../../../../manage_content/wcm/mng_content_with_auth_portlet/creating_items/creating_authoring_templates/index.md)
-   Documentation resource: [Reapplying an updated authoring template](../../../wcm/mng_content_with_auth_portlet/item_management_features/howto_manage_auth_templates/wcm_dev_auth-temp_reapply.md)

## Assigning a workflow to the content item

By default, the content item for the page component used the system workflow. To use a different workflow:

1.  Create a draft of the content item located at **Your Library > Content > Page Components > Your Page Component**.
2.  Select a workflow.
3.  Publish the item.

-   Documentation resource: [How to work with draft items](../../../wcm/mng_content_with_auth_portlet/item_management_features/wcm_dev_drafts.md)
<!-- -   Documentation resource: [Content item workflow settings](../panel_help/wcm_dev_workflow_items_content.md) -->

## Update the CSS

An HTML component named Styles: Your Page Component stores the default CSS used to set design parameters for the rendered content is also generated. It is located at **Your Library > Components > Your Page Component**.

You can update the CSS in this component, or update the presentation template to reference a different HTML component that contains the CSS used by your site. You can also update the classes used in the presentation template to match those used by your theme. If you choose to use styles not included in the Styles component, it can be deleted.

If you want to update the styles of two page components of the same type that will be used on the same page, you must update the style names for one of your page components and update the presentation template for the page component to match the new style names.

## Update the presentation templates

The presentation templates used to display the content on a page are located at **Your Library > Presentation Templates > Your Page Component**.

If you add or remove elements from the content template, you must update the HTML in the presentation template as well. You can also edit each individual design used by your Page Component.

-   Documentation resource: [Presentation templates](../../../../build_sites/create_sites/create_reusable_assets/presentation_template/index.md)
-   Documentation resource: [Creating a presentation template](../../../wcm/mng_content_with_auth_portlet/creating_items/wcm_dev_pres-temp.md)

## Updating the icons

Images used to represent the page component and its designs are stored in image components located at **Your Library > Components > Your Page Component**.

You can replace these images with your own icons. Image sizes of `18x18`, `32x32`, `64x64`, or `128x128` are best suited for custom images. If other sizes are used, the custom image is resized to fit the default sizes and your image might not display as expected. Creating images for use with each of these sizes will also prevent distorted images from being displayed.

## Updating localized text

Update the localization settings to match the locales that are used by your site, or remove localizations if your site isn't localized. This is located at **Your Library > Localizations > Your Page Component**.

-   Documentation resource: [How to store translated text in a content item or site area](../../../wcm/wcm_artifacts/wcm_dev/wcm_dev_storing_translated_text.md)

## Move items into a different library

By default, the items that are generated are created directly under the top-level sections of the library you specified when you generated the new templates. Use the **Move** feature to move these items to your preferred location.

-   Documentation resource: [Moving a content item](../../../wcm/mng_content_with_auth_portlet/item_management_features/howto_move_copy_link_items/wcm_dev_content_linking_moving.md)

## Displaying the page component in the Page Components palette

There are two ways you can make a page component be displayed in the Page Components palette:

-   **Add ibm.portal.toolbar.NewContent as a keyword under the page component content item**

    When you first create a page component, a keyword named ibm.portal.toolbar.NewContent is added to the page component content item.

    If you don't want the content item to appear in Page Components palette while you customize the page component, remove the ibm.portal.toolbar.NewContent keyword from the content item.

-   **Move the page component content item under the Page Components site area**

    You can also add ibm.portal.toolbar.NewContent as a keyword in a site area. Any content items located under a site area tagged with ibm.portal.toolbar.NewContent will also be displayed within the Page Components palette. This is useful if you have a large number of page components and want to display them within sub-folders within the Page Components palette.


-   Documentation resource: [Moving a content item](../../../wcm/mng_content_with_auth_portlet/item_management_features/howto_move_copy_link_items/wcm_dev_content_linking_moving.md)
-   Documentation resource: [Creating new categories for the Page Component palette by using the Web Content Authoring Portlet](../../../../build_sites/create_sites/site_prep_content_author/prep_site_toolbar/customizing_page_cmpnt_palette/epc_newsource_cfgengine.md)

## Hiding the page component from the Page Components palette

If you want to retire a page component so that it no longer appears in the Page Components palette, either:

-   Remove the ibm.portal.toolbar.NewContent keyword from an individual content item.

-   Move the content item out of the Page Components site area, or any site area tagged with the ibm.portal.toolbar.NewContent keyword.


Page components already added to a site will remain visible on the site, but content authors will not be able to create a new page component of that type.

-   Documentation resource: [Moving a content item](../../../wcm/mng_content_with_auth_portlet/item_management_features/howto_move_copy_link_items/wcm_dev_content_linking_moving.md)
-   Documentation resource: [Creating new categories for the Page Component palette by using the Web Content Authoring Portlet](../../../../build_sites/create_sites/site_prep_content_author/prep_site_toolbar/customizing_page_cmpnt_palette/epc_newsource_cfgengine.md)

## Deleting a page component

To delete a Page Component, and all the content displayed in a site created using that Page Component, remove items in the following order:

1.  Use the **Content by Authoring Template** view in the authoring portlet to find all the content created using your page component.
2.  Delete all these content items.
3.  Then delete all the authoring templates associated with the page component.
4.  Then delete all the presentation templates associated with the page component.
5.  Then delete component folder associated with the page component.


