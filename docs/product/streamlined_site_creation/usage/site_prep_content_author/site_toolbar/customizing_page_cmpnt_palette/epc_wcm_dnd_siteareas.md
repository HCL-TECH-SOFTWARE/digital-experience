# Implementing drag and drop site areas

By default, only web content items can be drag and dropped from the toolbar. You can use a keyword to implement the same behavior with site areas.

To enable a site area to be drag and drop ready from the toolbar, you need to add a keyword to the profile of a site area to enable this behavior.

Before doing so, you must enable profiling for site areas: See [Running the profile enablement tool](../wcm/wcm_admin_profile_enable.md) for details.

After you have enabled profiling for site areas, you are ready to make a site area drag and drop ready.

1.  Open the applications menu and go to **Content** \> **Web Content Management**.

2.  Open a site area in edit mode.

3.  Go to the **Properties** tab and open the **Profiling** section.

4.  Enter the following text in the keyword field: ibm.portal.toolbar.NewContent, ibm.portal.toolbar.draggable


Content authors can then drag and drop the site area from the Page Components view in the toolbar to create a copy of the site area and its children.

**Parent topic:**[Customizing the Page Component palette](../admin-system/epc_custom_add_site_toolbar.md)

