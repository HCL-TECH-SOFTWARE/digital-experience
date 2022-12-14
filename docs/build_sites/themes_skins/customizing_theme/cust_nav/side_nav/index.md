# Side navigation

The Portal 8.5 theme includes a side navigation template that can be applied to render pages at the secondary level in a list with the main content. By default, this template is applied to the Administration section of your portal.

The side navigation is composed of three parts:

-   **Theme template**

    The theme template includes the markup required to render a dynamic content spot next to the main content and sets a class on the body element that can be used to scope styles to this template.

    Location of localized templates: dav:fs-type1\\themes\\Portal8.5\\nls\\sidenav\\theme\_sidenav.html

-   **Dynamic Content Spot**

    The dynamic content spot recursively loops over the navigation hierarchy to render the pages. The dynamic content spot is a JSP that uses expression logic to access the navigation and provides easy to read code. You can customize the start level parameter of the dynamic content spot to render different sets of pages.

    Location: [PortalServer\_root](../../../../../guide_me/wpsdirstr.md)\\theme\\wp.theme.themes\\default85\\installedApps\\DefaultTheme85.ear\\DefaultTheme85.war\\themes\\html\\dynamicSpots\\sideNavigation.jsp

-   **Styles**

    The CSS is built into the theme master layer and out of box customizations were not included for each style. The default style is applied to the Administration pages.

    Location of uncompressed files:

    -   dav:fs-type1\\themes\\Portal8.5\\css\\default\\sidenav.css
    -   dav:fs-type1\\themes\\Portal8.5\\css\\default\\sidenavRTL.css
    Location of compressed files:

    -   dav:fs-type1\\themes\\Portal8.5\\css\\master.css
    -   dav:fs-type1\\themes\\Portal8.5\\css\\masterRTL.css

-   **[Set side navigation for a page](themeopt_cust_nav_sidepage.md)**  
You can set the side navigation template for a specific page.
-   **[Set side navigation as theme default](themeopt_cust_nav_sidedefault.md)**  
You can set the side navigation template as the theme default by changing the ready-to-use template to become the default theme.html.
-   **[Customizing side navigation](themeopt_cust_nav_sidecust.md)**  
You can customize your side navigation by scoping styles specifically to the side navigation template or changing the width of the side navigation area or main content area.


???+ info "Related information"  
    -   [Navigation with consecutive labels is dynamic](../../../../../deployment/manage/migrate/next_steps/post_mig_activities/addon_integration_task/themeopt_upgrade_secnav_labels.md)

