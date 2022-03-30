# Creating a dynamic content spot for navigation 

Create a dynamic content spot mapping to customize the theme for Top, Primary, and Secondary navigation. Change the yourTheme value to the name of your theme.

1.  For primary navigation, add a subcontribution to the wp\_dynamicContentSpots\_85 module in your theme's plugin.xml file. The plugin.xml file is in the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\installedApps\\cell\\YourTheme.ear\\YourTheme.war\\WEB-INF folder.

    1.  Give your subcontribution the `ref-id` yourTheme\_primaryNav, assuming you are changing the primary level.

    2.  Enter the URI value mvc:res:\{war:context-root\}/themes/html/dynamicSpots/navigation.jsp?type=primary,smartphone@,tablet@.

        For example,

        ```
        <sub-contribution type="markup" ref-id="yourTheme_primaryNav">
        <uri value="mvc:res:{war:context-root}/themes/html/dynamicSpots/navigation.jsp?type=primary,smartphone@,tablet@"/>
        </sub-contribution>
        ```

2.  Modify the theme.html files for your theme and change the dynamic content spot ID for the primary navigation from 85theme\_primaryNav to yourTheme\_primaryNav.

3.  Define the yourThemePrimaryNav style class in one of the .css files for your theme that gets loaded by one of the modules for your theme.

4.  If you are in development mode, restart the application for your theme. Otherwise, restart the portal server.


**Parent topic:**[Customizing navigation ](../dev-theme/themeopt_cust_nav.md)

