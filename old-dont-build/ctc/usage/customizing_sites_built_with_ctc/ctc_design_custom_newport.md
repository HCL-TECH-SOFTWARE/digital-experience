# Creating pre-configured portlets

When you install Content Template Catalog, the toolbar is enhanced with a new tab under "Applications" called "CTC Portlets", and new page components under the "Content" tab called "Teasers", "Lists", "Slideshows", "Carousels" and "Navigation".

The portlets under "Applications" are clones of the Web Content Viewer portlet with their configurations predefined to refer to content items in the CTC Content library under "Reference Content". The items under the "Content" tab are generated from the content under "Page Components" and "Teasers" in the CTC Content library. These site areas specify the keyword ibm.portal.toolbar.NewContent that causes them to be shown under the "Content" tab. For more information, see: [Customizing the Content palette](../admin-system/epc_custom_add_site_toolbar.md).

The easiest way to create extra pre-configured Application or Content is to copy an existing one.

1.  To create a new item under the "Content" tab, see [Customizing the Content palette](../admin-system/epc_custom_add_site_toolbar.md)

2.  To create a new portlet under the "Applications" tab:

    1.  Copy an existing page component configuration, and modify it.

    2.  Copy an existing pre-configured portlet, and reconfigure it to point to your own page component configuration item.

        The portlet now appears in the palette, and is ready to be dropped onto pages.

        A portlet parameter called "ctc.palette" determines which portlets appear in the CTC palette tabs. If this parameter exists, the portlet appears in the "All CTC Portlets" palette.



