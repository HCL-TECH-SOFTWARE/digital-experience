# Benefits and limitations of removing navigational state information

By default, HCL Portal URLs include navigational state information. You can remove navigational state information from your portal site URL. If you configure your portal to show stateless friendly URLs, you gain improved URL readability at the cost of losing the state functions.

Navigational state information is the string of encoded characters at the end of a portal site URL. It defines how the portal is rendered. When navigational state information is removed, pages and portlers are rendered in their default view, with no render parameters. When navigational state information is included, pages and portlets are rendered with public or private render parameters. If you configure your portal to exclude state information from the URL, you gain improved URL readability at the cost of losing state functions.

State information is an encoded aggregation of the navigational state of the portal and the portlet.

-   The portal state includes page selection, expansions, label mapping, and action targets.
-   The portlet state includes render parameters, window state, and portlet mode.

The presence of state information within the URL enables characteristics of dynamic websites, such as usage of bookmarks or the **Back** icon. For example, when state information is included, users can bookmark a page and later return to the exact same state of that page.

You can remove navigational state information from the URL by using the **Modify Site URLs for Search Engine Optimization** configuration option in the Configuration Wizard.

-   **Benefits**

    Removing navigational state information from your portal site URL has the following benefits:

    -   URLs are easier to read and memorize because they are shorter.
    -   Pages might be more searchable because users and web crawlers recognize meaningful words instead of encoded characters in the URL.
    -   Users might have a better understanding of what pages are about because the URL is fully human-readable.

-   **Limitations**

    Removing navigational state information from your portal site URL has the following limitations:

    -   The toolbar requires navigational state information in the URL. As a result, when you click a stateless link, for example, page navigation, the toolbar automatically closes.
    -   Pages and portlets are rendered in their default view.
    -   Back button support is decreased. The presence of state information within the URL enables characteristics of dynamic websites, such as usage of bookmarks or the **Back** button. For example, when state information is included, users can bookmark a page and later return to the exact same state of that page. If a user clicks the **Back** button, or refreshes a page by clicking the **Refresh** button or the page title, the page moves back into the default View mode.
    -   Bookmark support is decreased. If a user views a page and creates a bookmark, the bookmark later opens the page in the default View mode.
    -   The user's language preference is no longer encoded in the URL.The portal determines the language for the page by using the following steps:
        1.  First, the portal looks for the user preference.
        2.  If the user preference is not set, the portal looks for the preferred language that is set in the browser. If the page is a public page, the user is an anonymous user. In this case, the portal also looks for the preferred language that is set in the browser.
        3.  If the portal cannot determine a preferred language setting for the portal or the browser, it applies the default language that is defined for the portal.
    -   Portlets cannot be minimized or maximized. The portlet state includes render parameters, window state, and portlet mode.

-   **[Defining friendly URLs without state information for pages in your site](../admin-system/mp_friendly_short_url.md)**  
The Configuration Wizard option for Modifying Site URLs for Search Engine Optimization makes it possible to remove navigational state information from your site URLs site wide. To enable friendly URLs without state information at the page level, you must complete extra steps after you use this option.
-   **[CF07 and earlier: Using friendly URLs without state information](../admin-system/mp_friendly_short_url_prevcf7.md)**  
By default, HCL Digital Experience URLs include navigational state information. If you configure pages for friendly URLs, the portal appends the state information to the friendly URLs. Some scenarios require short and fully human readable URLs that omit the state information. For such scenarios, you can configure friendly URLs so that the portal does not show that state information.
-   **[CF04 and earlier: Using friendly URLs without state information](../admin-system/mp_fsu_prevcf.md)**  
By default, HCL DX Portal URLs include navigational state information. If you configure pages for friendly URLs, the portal appends the state information to the friendly URLs. Some scenarios require short and fully human readable URLs that omit the state information. For such scenarios, you can configure friendly URLs so that the portal does not show that state information.


