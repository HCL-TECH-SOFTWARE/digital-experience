# Creating pages using the Manage Pages portlet 

A page displays content, such as portlets and other pages, in a single area. By creating pages, you can organize your information and add new navigational elements to the site.

You can either create a page from the Manage Pages portlet or from the site toolbar. Pages created from the site toolbar or from the Manage Page portlets are managed pages. If you disable managed pages, then you cannot create pages from the site toolbar.

You can create a new page under an existing page, reference an existing page, apply a layout, and select supported markups. For public pages, you must have the Administrator, Manager, or Editor role assignment. For private pages, you must have the Administrator or Privileged User role assignment.

When you create a page, you always have the option to create a new page with a new layout. You can create a derived page to a derivation parent page if you have the Editor and Privileged User role assignment. If you have Editor role on the derived page, you can change anything except markups. If you have Privileged User role on the derived page, you can change the title, skins, or layout on the derived page. For layout, this is restricted by the derivation parent page. If you reference an existing page, layout, supported markups, locks, skins, portlet list, and locale specific titles are predetermined by the existing page you reference. Any changes to the original page results in the same change to all pages that are referenced.

When you create a new page, you must give it a title. All other settings are optional.

1.  To open the **Manage Pages** portlet, click the **Administration menu** icon. Then, click **Portal User Interface** \> **Manage Pages**.

2.  Click **Content Root**.

3.  Click **Home**, or navigate to another section of the portal where you want to create a new page.

4.  Click **New Page** to create a new page. You will leave the Manage Pages portlet to create the new page.

5.  Type the title of the new page in **Title**. This is the title for the default locale.

6.  Type the unique name of the page in **Unique Name**.

    If you specify a unique name that is already associated with an existing page, the new page will not be created with the specified unique name, but with a serialized identifier, which is provided by system default.

7.  Type a unique URL in **Friendly URL name**.

    This creates a custom address for your page that is easy to remember and share.

    **Note:** When creating a URL Mapping or creating or modifying a page, make sure that URL Mappings and friendly URLs in your portal do not match, partially overlap, or otherwise interfere with each other. For example, do not use strings such as home, ibm, ibm.com, and do not use strings that have been used as URL Mappings or friendly URLs in your portal already. Otherwise infinite browser redirect loops might occur, sometimes without an error message. To determine such strings, create an export from your portal by using the XML configuration interface and scan the exported XML result output file for the string that you want to use for your URL Mapping or for your friendly URL. By default, the portal ensures that the friendly URL name that you enter is unique. However, this enforcement does not include derived pages with an inherited friendly name and siblings that are moved in by a personalization rule.

8.  Select a **Theme** to determine the look of the new page.

    This option is available only on a level 1 or 2 page.

9.  Select a **Theme Style** to select a style to apply to the page.

    **Note:** This field is visible only if the selected theme can be customized with a theme policy.

10. In the **Icon** field, enter a path and filename for a page icon.

    This icon is displayed in the tab next to the page title in the Portal theme. The path for this image must be relative to the theme.

11. Select **I want to make this page my private page** to restrict access to the page by other users.

12. If you want to allow other users to bookmark this page, check **This page can be added to a user's My favorites list**. If a user bookmarks this page, it will be available from **My favorites** in the banner.

13. Check **Users can derive pages from this page** if you want the contents of this page to be shared by others. If checked, users can reference this page when they create a new page.

14. For Type of Page, Select one of the following:

    -   **Standard Portal Layout**

        Select this option to create a page with a layout that is predefined by portal.

    -   **Static Layout**

        You can select this option to create the page layout using a markup file.

15. For Page Cache Options, select one of the following:

    -   **Cache scope**

        If the page is shared among multiple users, selecting **Shared cache across users** provides the best performance.

    -   **Cache Expiration**

        Use this option to set how long, in seconds, the cache is used. Selecting **Cache never expires** means that content will always be retrieved from the cache.

    -   **Cache Access Control**

        By default, the portal does not permit shared caching for authenticated pages. Checking **Ignore access control in caches** overrides this behavior. However, this could allow an anonymous and potentially malicious user to access secure content from that page.

16. Click **OK** to save these settings for the new page and add new content. Click **Cancel** if you want to return to Manage Pages without creating the new page.


**Related information**  


[Custom authoring interfaces ](../wcm/wcm_cms_authoring_custom.md)

