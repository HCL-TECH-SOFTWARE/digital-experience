# Customizing Site Manager

You can configure Site Manager by setting portlet preferences for the Site Manager portlet in Manage Portlets.

Specify portlet preferences by using the Manage Portlets portlet. To access the portlet preferences for Site Manager, complete the following steps:

**Note:** Some features are not visible to users assigned to the Anonymous user role and the All authenticated users role, such as the tree view in Site Manager. To use Site Manager features within the toolbar, you must assign the User role to the **All authenticated Users** group for the Site Manager portlet.

1.  Click the **Administration menu** icon. Then, click **Portlet Management** \> **Portlets**.
2.  Locate the Site Manager portlet in one of two ways:
    -   If you are searching by **Title starts with**, search for SiteMap Portlet.
    -   If you are searching by **Unique name contains**, search for wps.p.SiteMapTab.
3.  Click the **Configure portlet** icon.
4.  Enter the preference name and value and click **Add**.
5.  Click **OK**.

The following portlet preferences can be specified for Site Manager:

-   **ibm.portal.explorer.tree.threshold = number**

    This preference specifies the maximum number of content items that display for a portal page in the tree view of Site Manager. If the specified number is exceeded, a link to open the content explorer displays in Site Manager instead of displaying the entire list of child items. The default value is `34`.

-   **ibm.portal.explorer.sites.blacklist=list\_of\_unique\_names**

    This preference hides specific top-level portal pages in the site switcher control of site manager. This preference is only effective for portal pages that are direct children of the Content Root. The value must list the unique names of these pages, separated by commas. The default value is `ibm.portal.page.Applications, ibm.portal.HiddenPages, ibm.portal.Administration, ibm.portal.Search, ibm.portal.Page Customizer, ibm.portal.sharedPages`.


-   **[Customizing the Create Content view](../admin-system/epc_custom_create_content.md)**  
The Create Content view, which is accessed by clicking context menu in Site Manager, is used by a content author to add web content items to a page.

**Parent topic:**[Preparing for content authors](../site/site_prep_toolbar.md)

**Parent topic:**[Portal administration](../practitioner_studio/administration.md)

