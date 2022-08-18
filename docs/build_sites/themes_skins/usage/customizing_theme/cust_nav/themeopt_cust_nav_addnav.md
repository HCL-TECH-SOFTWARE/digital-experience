# Adding a level of navigation

You can increase levels of navigation by adding a fourth level of navigation.

**Note:** Change the yourTheme value to the actual name of your theme.

1.  Add a subcontribution to the wp\_dynamicContentSpots\_85 module in your theme's plugin.xml file. The plugin.xml file is in the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\installedApps\\cell\\YourTheme.ear\\YourTheme.war\\WEB-INF folder.

    1.  Give your subcontribution the `ref-id` yourTheme\_tertiaryNav.

    2.  Enter the URI value mvc:res:\{war:context-root\}/themes/html/dynamicSpots/navigation.jsp?type=tertiary,smartphone@,tablet@.

        ```
        <sub-contribution type="markup" ref-id="yourTheme_tertiaryNav">
        <uri value="mvc:res:{war:context-root}/themes/html/dynamicSpots/navigation.jsp?type=tertiary,smartphone@,tablet@"/>
        </sub-contribution>
        ```

2.  Modify the theme.html files for your theme and add a fourth, or tertiary, navigation dynamic content spot under the third, or secondary, navigation dynamic content spot, which is under the secondary banner block:

    ```
    <a rel="dynamic-content" href="dyn-cs:id:yourTheme_tertiaryNav"></a>
    ```

3.  Define the yourThemeTertiaryNav style class in one of the CSS files for your theme that gets loaded by one of the modules for your theme.

4.  If you are in development mode, restart the web application for your theme. Otherwise, restart the portal server.


**Parent topic:**[Customizing navigation](../dev-theme/themeopt_cust_nav.md)

