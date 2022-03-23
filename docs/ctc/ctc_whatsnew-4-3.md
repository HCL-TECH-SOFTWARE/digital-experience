# New features for site developers in Content Template 4.3 

Enhancements in Content Template 4.3 makes customization of the templates faster and simpler. Much of the custom code in Content Template has been removed, and Content Template instead uses the new features in HCL Portal 8.5 CF3 or higher.

## The Content Template rendering plug-ins are now included in Web Content Manager

All the custom Content Template rendering plug-ins have been removed and replaced with rendering plug-ins that are included in Web Content Manager 8.5 CF3 or higher.

-   The IfEqual plug-in is replaced by the Equals plug-in.
-   The IfNotEqual plug-in is replaced by the NotEquals plug-in.
-   The Encode plug-in is replaced by the URLEncode plug-in.
-   The IfInRange plug-in is replaced by the IfListIndex plug-in.
-   The translate plug-in is replaced by the TextProvider plug-in.

For more information: [Creating a plug-in tag](../panel_help/wcm_dev_referencing_plugin.md)

As part of the upgrade to Content Template 4.3, all usages of the Content Template custom rendering plug-ins are replaced with the Web Content Manager rendering plug-ins. This is done by using the tag usage module. For more information: [Managing plug-in tag usage](../wcm/wcm_admin_plugin_tags.md).

## The Content Template rendering inline edit styles are now included in Web Content Manager

The Content Template previously contained contentEditable CSS styles that defined how inline edit was styled. These styles are included in Web Content Manager 8.5, and so have been removed from Content Template 4.3. For more information: [Creating an editable element tag](../panel_help/wcm_dev_referencing_elements_edit.md)

## The render component in context pattern is implemented by using tags

The Content Template makes extensive use of the **Render component in context** and **Context override** patterns. These patterns are now implemented by using the `InContext` tag, which is new in HCL Portal 8.5 CF3. For more information see [The role of the In Context tag in presentation templates](ctc_arch_prestemp_jspcontext.md).

## The sections navigator is implemented by using tags

The sections page template contains a navigation menu. In previous releases this was created by using the custom JSPs RenderNextListResult.jsp and RenderNestedListCleanup.jsp. In Content Template 4.3. this is implemented by using a Web Content Manager navigation component. See **Navigation List Design for Section Index** in the CTC Design library.

## Content Template Components are now referred to as Page Components

The site area that stores the page component configuration content has been renamed from "Components" to "Page Components". This has been changed to avoid confusion with Web Content Manager components. Examples of page components are slideshows, carousels, teasers, and block. For more information see [Page component configuration items](ctc_arch_prestemp_compconfig.md).

## New Getting Started Guide for site developers

The documentation to help site developers get started with Content Template has been consolidated into the new [A Content Template Catalog roadmap for site developers](ctc_gs_site_devs.md) section.

**Parent topic:**[Content Template overview ](../ctc/ctc_overview.md)

