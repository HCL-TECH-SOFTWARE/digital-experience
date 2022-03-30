# Dynamic content \(jsp\) resources 

Dynamic content includes resources that are defined by jsp files that are used by the theme.

The entry point for a theme is either Default.jsp or Plain.jsp, both of these files are located here:

[PortalServer\_root](../reference/wpsdirstr.md#wp_root)\\theme\\wp.theme.themes\\default85\\installedApps\\DefaultTheme85.ear\\DefaultTheme85.war\\themes\\html

-   Default.jsp: Is a main entry point for the theme and bootstraps any required infrastructure, and then delegates all markup rendering to the static template file, which is usually theme.html.
-   Plain.jsp: Is an alternative entry point. This jsp is commonly used for helps or rendering a portlet with an iframe skin.
-   includePortalTaglibs.jspf: Includes the HCL Digital Experience Portal taglibs.


## dynamicSpots

[PortalServer\_root](../reference/wpsdirstr.md#wp_root)\\theme\\wp.theme.themes\\default85\\installedApps\\DefaultTheme85.ear\\DefaultTheme85.war\\themes\\html\\dynamicSpots

-   commonActions.jsp: Provides the common actions in the banner sections and the **Actions** menu. The **Actions** menu is not available to anonymous users.
-   crumbTrial.jsp: Provides the crumb trail information for the location.
-   footer.jsp: Provides the footer information for the page.
-   head.jsp: Provides the header information for the page.
-   navigation.jsp: Provides the navigation controls for the page.
-   mobileNavigation.jsp: Provides the mobile navigation controls for the page.
-   sideNavigation.jsp: Provides the side navigation controls for the page.
-   status.jsp: Template for error, warning, and information messages.

**Parent topic:**[Understanding the Portal 8.5 modularized theme](../dev-theme/themeopt_defaultparts.md)

