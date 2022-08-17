# Instrumenting a theme for Active Site Analytics

The Tab menu - Page Builder Page Builder portal theme provided with HCL Digital Experience is prepared and suitable for use with Active Site Analytics. You can also enhance the other portal themes or create your own custom theme to use the Active Site Analytics functionality.

In order make Active Site Analytics work in a custom theme, you need to do the following tasks:

1.  Add metadata to the page.
2.  Include an aggregator with the page.
3.  Include dependencies with the page.
4.  Include microformats of interest, that is related to the statistical data that you want to collect.

For more details about these tasks refer to the following sections:

-   **Adding metadata to the page**

    An aggregator picks up information stored in the DOM \(document object model\) tree of a page. This information must be present in the HTML source of the page. The recommended approach to add this information to a page is to implement the theme or skin so that they write all the necessary information into the DOM tree of the page. Examples:

    1.  You can add the identifier of a portlet to the DOM tree by adding the following line to the file skin.html in the theme WebDAV folder:

        ```
        <span class="asa.portlet.id" style="display:none;"><%= myPortletID %></span>
        ```

        **Note:** If the `span` element is styled in an external CSS file, you need to escape each period in the class name by a backslash. Example: `asa\.portlet\.id{display:none;}`

        With the code sample, the aggregator can fetch the identifiers of all portlets on a page by iterating over all occurrences of `"span"` elements with a class attribute of `"asa.portlet.id"`.

        The correct function of the code sample depends on the definition of `myPortletID` earlier in the file skin.html. By default, it is defined by using the following JSP code:

        ```
        <portal-skin:portletID var="myPortletID"/> 
        <jsp:useBean id="myPortletID" class="java.lang.String" scope="page"/> 
        ```

    2.  You can add the portlet title to the DOM tree by wrapping the `<portal-skin:portletTitle>` statement in the file skin.html with a span element that has a class attribute of `"asa.portlet.title"`:

        ```
        <span class="asa.portlet.title"><portal-skin:portletTitle></portal-skin:portletTitle</span>
        ```

-   **Including aggregators with the page**

    The portal includes a default implementation of the theme extension point com.ibm.portal.theme.plugin.ActiveSiteAnalyticsAggregators. The extension point locates a JavaScript file that is specified in the page metadata. The extension point includes the content of that file in the HTML code of the page. The metadata key must start with `asa_aggregator` or `asa_js` , and its value is the JavaScript file name. For details see the topic about *Adding an Active Site Analytics aggregator to a portal page*. Add the following code somewhere near the closing body tag \( `</body>` \) of the file `themeName\nls\theme_languageCode.html` of the theme WebDAV folder:

    ```
    <portal-theme-ext:themeExtension id="com.ibm.portal.theme.plugin.ActiveSiteAnalyticsAggregators">
       <portal-theme-ext:themeExtensionLoop>
          <portal-theme-ext:themeExtensionItemText />
       </portal-theme-ext:themeExtensionLoop> 
    </portal-theme-ext:themeExtension>
    ```

    This code loops over every implementation of the theme extension point and executes it. The default implementation included with the portal follows the approach previously outlined.

    **Note:** HCL Portal Version 8.5 does not support the extension point with the ID `com.ibm.portal.theme.plugin.ActiveSiteAnalyticsItems` from previous versions. If you have migrated a theme from an earlier portal version, make sure to use the extension ID `com.ibm.portal.theme.plugin.ActiveSiteAnalyticsAggregators` .

-   **Including dependencies with the page**

    If you want dependencies to be used by more than one aggregator, add them to the head of the html page. The portal includes a default implementation of the theme extension point `com.ibm.portal.theme.plugin.ActiveSiteAnalyticsDependencies` . The extension point locates a JavaScript file that is specified in the page metadata. The extension point includes the content of that file in the HTML code of the page. The metadata key must start with `asa_dependency` , and its value is the JavaScript file name. For details see the topic about *Adding an Active Site Analytics aggregator to a portal page*. Add the following code to the head of the theme:

    ```
    <portal-theme-ext:themeExtension id="com.ibm.portal.theme.plugin.ActiveSiteAnalyticsDependencies">   
       <portal-theme-ext:themeExtensionLoop>      
          <portal-theme-ext:themeExtensionItemText />   
       </portal-theme-ext:themeExtensionLoop> 
    </portal-theme-ext:themeExtension>
    
    ```

    This code loops over every implementation of the theme extension point and executes it. The default implementation included with the portal follows the approach previously outlined.

-   **Including an aggregator JSP with the page**

    Active Site Analytics can include a dedicated JSP fragment as part of the aggregator inclusion on the page. The portal appends the contents of the JSP fragment to the content that is injected into the theme.html of the theme.

    You configure the JSP similarly to the aggregator itself: Add page metadata with the key of `asa_jsp` to the page. The portal interprets the value as a file name relative to the theme.html of the theme in WebDAV. For example, if you want to add markup from a JSP in a file named page.jsp , you can put this JSP next to theme.html using WebDAV and configure a new page property with the key `asa_jsp` and the value `page.jsp` .

    **Example:** If the key of a piece of metadata is `asa_jsp` and its value is set to `asa_sample.jsp`, then the portal searches for a JSP with a file name asa\_sample.jsp and, if it finds such a file, it includes it in the page contents.

    You can use the extension point `com.ibm.portal.theme.plugin.ActiveSiteAnalyticsInclude` to include a JSP into the page content. The metadata key must start with `asa_jsp` . Add the following code in the theme:

    ```
    <portal-theme-ext:themeExtension id="com.ibm.portal.theme.plugin.ActiveSiteAnalyticsInclude">
       <portal-theme-ext:themeExtensionLoop>
          <portal-theme-ext:themeExtensionRenderInclude/>
       </portal-theme-ext:themeExtensionLoop>
    </portal-theme-ext:themeExtension>
    ```

    This code loops over each implementation of the theme extension point and executes it. The default implementation included with the portal follows the approach outlined earlier.

-   **Including microformats of interest**

    You might need to modify the skins used by a theme so that all of the microformat information that you want to be captured is present when the page is rendered. For example, you can add this code to the skin.html file of a skin to ensure the portlet ID of all portlets on the page is available for the aggregator script to discover:

    ```
    <span class="asa.portlet.id" style="display:none;"><%= myPortletID %></span>
    ```

    In this case the file `asa_sample.js` looks for elements with the class `asa.portlet.id` to find the portlet ID of all portlets present on the page. Portlet titles can be rendered by using code similar to this:

    ```
    <portal-skin:portletTitle />
    ```

    To capture such portlet titles, you can add an additional span element with a class defined for titles that the analytics JavaScript file will look for:

    ```
    <span class="asa.portlet.title"><portal-skin:portletTitle /></span>
    ```

    In this case, `asa.portlet.title` is recognized as the class for all span elements that encompass the rendered text of the portlet titles.


-   **[Injecting custom aggregators](../admin-system/sa_asa_injct_custaggrg.md)**  
By implementing a new theme extension point, you can apply different approaches to Active Site Analytics.

**Parent topic:**[Collecting analytics data](../admin-system/sa_asa_collct_data.md)

**Related information**  


[Adding an Active Site Analytics aggregator to a portal page](../admin-system/sa_asa_add_aggr_2_page.md)

[Tags used by the portal JSPs](../dev-portlet/dgn_ptltld.md)

