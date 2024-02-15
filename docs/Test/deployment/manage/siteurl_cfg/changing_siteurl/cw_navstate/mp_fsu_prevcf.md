# CF04 and earlier: Using friendly URLs without state information

By default, HCL DX Portal URLs include navigational state information. If you configure pages for friendly URLs, the portal appends the state information to the friendly URLs. Some scenarios require short and fully human readable URLs that omit the state information. For such scenarios, you can configure friendly URLs so that the portal does not show that state information.

If you are on Combined Cumulative Fix 8 or later, go to [Defining friendly URLs without state information for pages in your site](mp_friendly_short_url.md#).

If you are on Combined Cumulative Fix fix 7 or earlier, go to [CF07 and earlier: Using friendly URLs without state information](mp_friendly_short_url_prevcf7.md#).

The state information is an encoded aggregation of the navigational state of the portal, the page, and its components, for example, the portlets on the current page:

-   The portal state includes page selection, expansions, label mapping, and action targets.
-   The portlet state includes render parameters, window state, and portlet mode.

The representation of the navigational state within the URL enables characteristics of dynamic websites, such as usage of bookmarks or the **Back** button. For example, users can bookmark a page and later return to the exact same state of that page.

Some scenarios require short and fully human readable URLs that omit the state information. Examples:

-   You do not want the URL to make the impression that it references dynamic content.
-   You want the URL to contain only information that a human person can read and interpret.
-   You want the URL to easily fit into the address field of the web browser.
-   Internet search engines expect static URLs that reference only one resource or web page for the time that the page exists
-   Internet search engines prefer short and friendly URLs.

For such scenarios you configure HCL DX Portal as follows:

-   You configure themes to always display only short friendly URLs without the encoded navigational state.
-   You configure pages that use that theme to display friendly URLs.

The configuration applies to all pages that use that theme and that are configured to display friendly URLs.

**Notes:**
!!!note "Notes"
    -   You can create friendly URLs for portal pages.
    -   If you configure your portal to show stateless friendly URLs, you gain improved URL readability at the cost of losing the state functionality. Example consequences are as follows:
        -   Portal URLs always point to the default state of a page, as they do not contain the state information.
        -   If a user clicks the **Back** button, or refreshes a page by clicking the **Refresh** button or the page title, the page moves back into the default View mode.
        -   If a user views a page, and then creates a bookmark, clicking the bookmark later opens the page in the default View mode.
        -   Stateless friendly URLs do not contain the usual information about the language of the page. The portal determines the language for the page by the following order:

            1.  First, the portal looks for the user preference.
            2.  If the user preference is not set, the portal looks for the preferred language that is set in the browser. If the page is a public page, the user is an anonymous user. In this case, the portal also looks for the preferred language that is set in the browser.
            3.  If the portal cannot determine a preferred language setting for the portal or the browser, it applies the default language that is defined for the portal.
        
        For information about how to present language-specific portal pages with stateless friendly URLs, read the information at the end of the procedure that follows here.


1.  In the portal WP Configuration Service, set the custom property `friendly.redirect.enabled` to the value false.

    You do this step by editing the Resource Environment Provider (REP) WPConfigService in the WebSphere® Integrated Solutions Console. If the property is not listed there, add it and set it to false. For information about this property and how to set it see the topics about the portal Configuration Service and Setting service configuration properties.

2.  In the theme, that you want configure, for short stateless URLs, set the parameter `com.ibm.portal.theme.hasBaseURL` to true.

    You can update the theme parameter by using the XML configuration interface. Here is an example XML script:

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

3.  Make sure that all generated URLs in the theme do not include the navigational state.

    In the default theme, you can do this step by modifying the navigation.jsp and sideNavigation.jsp files.

    To change the file navigation.jsp, proceed as follows:

    1.  Change to the directory for the file navigation.jsp. You must update two copies of this file, one each in the following two directory locations.

        -   `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)\theme\wp.theme.themes\default85\installedApps\DefaultTheme85.ear\DefaultTheme85.war\themes\html\dynamicSpots`
        -   `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)\theme\wp.theme.modules\webapp\installedApps\ThemeModules.ear\ThemeModules.war\themes\html\dynamicSpots`
    2.  Open the file navigation.jsp with an editor.

    3.  Search for the string `<a href="?uri=nm:oid:${wp.identification[node]}" class="wpthemeLeft${titleClass}">` and change it to the following code snippet:

        ```
        <portal-navigation:urlGeneration contentNode="${wp.identification[node]}" keepNavigationalState="false">    
        <a href="<%wpsURL.write(out);%>" class="wpthemeLeft${titleClass}">
        ```

    4.  Locate the first `</a>` tag after the updated string `<a href="<%wpsURL.write(out);%>"` and change it to the following code snippet:

        ```
        </a>
        </portal-navigation:urlGeneration> 
        ```

    To change the file sideNavigation.jsp, proceed as follows:

    1.  Change to the directory `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)\theme\wp.theme.themes\default85\installedApps\DefaultTheme85.ear\DefaultTheme85.war\themes\html\dynamicSpots`.

    2.  Open the file sideNavigation.jsp with an editor.

    3.  Search for the string `<a href="?uri=nm:oid:${wp.identification[node]}" class="<c:if test="${isSelectedNode}"> wpthemeSelected</c:if>${titleClass}">` and change it to the following code snippet:

        ```
        <portal-navigation:urlGeneration contentNode="${wp.identification[node]}" keepNavigationalState="false">    
        <a href="<%wpsURL.write(out);%>" class="<c:if test="${isSelectedNode}">wpthemeSelected</c:if>${titleClass}">
        ```

    4.  Locate the first `</a>` tag after the updated string `<a href="<%wpsURL.write(out);%>"` and change it to the following code snippet:

        ```
        </a>
        </portal-navigation:urlGeneration> 
        ```

4.  Edit the mobileNavigation.jsp file.

    1.  Change to the directory `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)\\theme\\wp.theme.themes\\default85\\installedApps\\DefaultTheme85.ear\\DefaultTheme85.war\\themes\\html\\dynamicSpots`.

    2.  Open the file mobileNavigation.jsp with an editor.

    3.  Search for the string `<a href="?uri=nm:oid:${nodeID}">` and change it to the following code snippet:

        ```
        <portal-navigation:urlGeneration contentNode="${nodeID}" keepNavigationalState="false">    
        <a href="<%wpsURL.write(out);%>"
        ```

    4.  Locate the first `</a>` tag after the updated string `<a href="<%wpsURL.write(out);%>"` and change it to the following code snippet:

        ```
        </a>
        </portal-navigation:urlGeneration> 
        ```

5.  For HCL Web Content Manager: You might want the HCL Web Content Manager Rendering portlet to also display the friendly and stateless URLs. In this case, implement a plug-in that translates the HCL Web Content Manager URLs into the required custom format.

    For instructions and sample code for such a plug-in, see *Example 2, Generate a friendly URL for web content*.

6.  Define friendly URL names for pages as required.

    For information about how to do this step, read *Using friendly URLs*.

7.  You might want to present language-specific portal pages with stateless friendly URLs to your site visitors. In this case, structure your portal site to reflect which pages or pages are targeted for specific countries or regions.

    For example, you can create a node for a specific page, and then create language-specific child pages under that node. Example: In the node `home`, you create pages in English, French, and German. You can then give your site visitors the appropriate one of the following friendly URLs:

    ```
    http://www.myco.com/wps/home/en/shop
    http://www.myco.com/wps/home/fr/shop
    http://www.myco.com/wps/home/de/shop
    ```

The portal now no longer displays the state information with the URLs.


