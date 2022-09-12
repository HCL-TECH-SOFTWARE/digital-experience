# CF07 and earlier: Using friendly URLs without state information

By default, HCL Digital Experience URLs include navigational state information. If you configure pages for friendly URLs, the portal appends the state information to the friendly URLs. Some scenarios require short and fully human readable URLs that omit the state information. For such scenarios, you can configure friendly URLs so that the portal does not show that state information.

If you are on Combined Cumulative Fix 8 or later, go to [Defining friendly URLs without state information for pages in your site](../../../siteurl_cfg/changing_siteurl/cw_navstate/mp_friendly_short_url.md).

State information is an encoded aggregation of the navigational state of the portal and the portlet.

-   The portal state includes page selection, expansions, label mapping, and action targets.
-   The portlet state includes render parameters, window state, and portlet mode.

The presence of state information within the URL enables characteristics of dynamic websites, such as usage of bookmarks or the **Back** button. For example, when state information is included, users can bookmark a page and later return to the exact same state of that page.

Some scenarios require short and fully human readable URLs that omit the state information:

-   You do not want the URL to make the impression that it references dynamic content.
-   You want the URL to contain only information that a human person can read and interpret.
-   You want the URL to easily fit into the address field of the web browser.
-   Internet search engines expect static URLs that reference only one resource or web page for the time that the page exists.
-   Internet search engines prefer short and friendly URLs.

For such scenarios, you can configure HCL Digital Experience as follows:

-   You configure themes to always display only short friendly URLs without state information.
-   You configure pages that use that theme to display friendly URLs.

The configuration applies to all pages that use that theme and that are configured to display friendly URLs.

!!!note "Notes"
-   If you configure your portal to show stateless friendly URLs, you gain improved URL readability at the cost of losing the state functionality:
    -   Portal URLs always point to the default state of a page because they do not contain the state information.
    -   If a user clicks the **Back** button, or refreshes a page by clicking the **Refresh** button or the page title, the page moves back into the default View mode.
    -   If a user views a page and creates a bookmark, the bookmark later opens the page in the default View mode.
    -   Stateless friendly URLs do not contain information about the language of the page. The portal determines the language for the page by using the following steps:

        1.  First, the portal looks for the user preference.
        2.  If the user preference is not set, the portal looks for the preferred language that is set in the browser. If the page is a public page, the user is an anonymous user. In this case, the portal also looks for the preferred language that is set in the browser.
        3.  If the portal cannot determine a preferred language setting for the portal or the browser, it applies the default language that is defined for the portal.
        
    You might want to present language-specific portal pages with stateless friendly URLs. For more information, see step [mp\_friendly\_short\_url\_prevcf7.md\#step\_lang\_spec\_urls](mp_friendly_short_url_prevcf7.md) of the following procedure.

-   Make sure that the JSPs of your theme provide a `<base>` tag in the header section of your markup. For example, you can use the portal tag `<portal-core:stateBase/>`. For more information, read *<portal-core/\> tags*.

1.  Disable friendly URL redirects. If the incoming URL does not contain the friendly URL prefix of the addressed page, a URL redirect adds state information to the URL. To disable URL redirects, set the custom property `friendly.redirect.enabled` to the value false in the Resource Environment Provider \(REP\) WP Configuration Service in the WebSphere® Integrated Solutions Console. If the property is not listed there, add it and set it to false. For information about this property and how to set it, read *Portal service configuration* and *Setting service configuration properties*.

2.  In the theme that you want to configure for stateless friendly URLs, set the parameter `com.ibm.portal.theme.hasBaseURL` to true.

    You can update the theme parameter by using the XML configuration interface. The following example shows a sample XML script:

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    
    <request
     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
     xsi:noNamespaceSchemaLocation="PortalConfig\_8.5.0.xsd"
     type="update">
    
     <!-- This sample sets the hasBaseURL Tag in the Portal 8.5 Theme. -->
     <portal action="locate">
     <theme action="update" uniquename="ibm.portal.85Theme" >
     <parameter name="com.ibm.portal.theme.hasBaseURL" 
      type="string" update="set">true</parameter>
     </theme>
     </portal>
    </request>
    ```

3.  Make sure that no generated URLs in the theme include state information. In the default theme, you can complete this task by modifying the navigation.jsp, sideNavigation.jsp, mobileNavigation.jsp, and mobileNavigationFeed.jsp files.
4.  Change the file navigation.jsp:

    1.  Change to the directory for the file navigation.jsp.

        You can find the file in the following location: `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)\theme\wp.theme.themes\default85\installedApps\DefaultTheme85.ear\DefaultTheme85.war\themes\html\dynamicSpots`

    2.  Open the file navigation.jsp with an editor.

    3.  Search for the string `node.urlGeneration` and change it to the following string: `node.urlGeneration.noNavigationalState`

5.  Change the file sideNavigation.jsp:

    1.  Change to the directory `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)\theme\wp.theme.themes\default85\installedApps\DefaultTheme85.ear\DefaultTheme85.war\themes\html\dynamicSpots`.

    2.  Open the file sideNavigation.jsp with an editor.

    3.  Search for the string `node.urlGeneration` and change it to the following string: `node.urlGeneration.noNavigationalState`

6.  Change the mobileNavigation.jsp file:

    1.  Change to the directory `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)\\theme\\wp.theme.themes\\default85\\installedApps\\DefaultTheme85.ear\\DefaultTheme85.war\\themes\\html\\dynamicSpots`.

    2.  Open the file mobileNavigation.jsp with an editor.

    3.  Locate the string `?uri=nm:oid:${nodeID}` and change it to the following string: `${node.urlGeneration.noNavigationalState}`.

7.  Change the mobileNavigationFeed.jsp file:

    1.  Change to the directory `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)\\theme\\wp.theme.themes\\default85\\installedApps\\DefaultTheme85.ear\\DefaultTheme85.war\\themes\\html\\dynamicSpots`.

    2.  Open the file mobileNavigationFeed.jsp with an editor.

    3.  Search for the string `node.url` and change it to the following string: `node.urlGeneration.noNavigationalState`

8.  If you are using HCL Web Content Manager, you might want the HCL Web Content Manager Rendering portlet to also display the friendly and stateless URLs. In this case, implement a plug-in that translates the HCL Web Content Manager URLs into the required custom format.

    For instructions and sample code for such a plug-in, read *Example 2: Generate a friendly URL for web content*.

The portal now no longer displays the navigational state information within the URLs.


