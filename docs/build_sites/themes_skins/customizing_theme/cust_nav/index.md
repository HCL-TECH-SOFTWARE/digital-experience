# Customizing navigation

Use dynamic content spots to determine what is displayed by Top, Primary, and Secondary navigation. Use the navigation.jsp file to map properties to the dynamic content spot IDs in the theme.html files. Rendering of the navigation is done with a single JSP file with <ul\> and <li\> tags.

These are the levels of navigation that is provided in a theme:

![Top, Primary, and Secondary levels of navigation](../../../../images/themeopt_navigation.jpg)

-   **Top - Item 1**

    Displays links for the pages directly under Content Root, such as Home, Administration, and Applications. Use the `dyn-cs:id:85theme_topNav` to display Top navigation:

    ```
       <div class="wpthemeHeader">
          ...
          <a rel="dynamic-content" href="dyn-cs:id:85theme_topNav"></a>
          ...
       </div>
    ```

-   **Primary - Item 2**

    Displays links to the child pages of the currently selected top page, such as Getting Started and Features for Home. Use the `dyn-cs:id:85theme_primaryNav` to display Primary navigation:

    ```
       <div class="wpthemeBanner">
          ...
          <a rel="dynamic-content" href="dyn-cs:id:85theme_primaryNav"></a>
          ...
       </div>
    ```

-   **Secondary - Item 3**

    Displays links to the child pages of the currently selected primary page. Use the `dyn-cs:id:85theme_secondaryNav` to display Primary navigation:

    ```
       <div class="wpthemeSecondaryBanner">
          ...
          <a rel="dynamic-content" href="dyn-cs:id:85theme_secondaryNav"></a>
          ...
       </div>
    ```

-   **Breadcrumb - Item 4**

    Displays the position of the current web page within the website and the logical path back to the highest level of the site framework. The breadcrumb trail starts at the content root and goes down to the currently selected static page.

-   **Side**

    Displays links for the child and grandchild pages of the currently selected top page. By default, this template is applied to the Administration section of your portal.

    ```
       <div class="wpthemeSideNavigation wpthemeLeft" role="navigation">
          ...
          <a rel="dynamic-content" href="dyn-cs:id:85theme_sideNav"></a>
          ...
       </div>
    ```

-   **Mobile**

    Displays links for the child and grandchild pages of the currently selected top page, on mobile devices only, such as smartphones and tablets. Each level of navigation is lazily loaded onto the page as the user clicks.

    ```
    <div class="wpthemeBanner">
          ...      
          <a rel="dynamic-content" href="dyn-cs:id:85theme_mobileNav"></a>      
          ...   
    </div>
    ```

    To turn off lazy loading of mobile navigation, replace the 85theme\_mobileNav dynamic content spot with the 85theme\_mobileNav\_static dynamic content spot.

    ```
    <div class="wpthemeBanner">      ...     
              <a rel="dynamic-content"
        href="dyn-cs:id:85theme_mobileNav_static"></a>            ...  
        </div>
    ```


## Navigation content spots

The content spot IDs map to wp\_dynamicContentSpots\_85 module subcontributions in the [PortalServer\_root](../../../../guide_me/wpsdirstr.md)\\theme\\wp.theme.themes\\default85\\installedApps\\DefaultTheme85.ear\\DefaultTheme85.war\\WEB-INF\\plugin.xml file.

|Name|Value|
|----|-----|
|`85theme_topNav`|mvc:smartphone/tablet@res:\{war:context-root\}/themes/html/dynamicSpots/navigation.jsp?type=top|
|`85theme_primaryNav`|mvc:res:\{war:context-root\}/themes/html/dynamicSpots/navigation.jsp?type=primary,smartphone@,tablet@|
|`85theme_secondaryNav`|mvc:res:\{war:context-root\}/themes/html/dynamicSpots/navigation.jsp?type=secondary,smartphone@,tablet@|
|`85theme_sideNav`|mvc:res:\{war:context-root\}/themes/html/dynamicSpots/sideNavigation.jsp?startLevel=2,smartphone@,tablet@|
|`85theme_mobileNav`|mvc:smartphone/tablet@res:\{war:context-root\}/themes/html/dynamicSpots/mobileNavigation.jspmvc:smartphone/tablet@res:\{war:context-root\}/themes/html/dynamicSpots/lazyMobileNavigation.jsp?context=\{war:context-root\}|

The subcontribution URI value indicates which JSP is loaded in the spot. For the three horizontal navigation spots, the same navigation.jsp file is used with a different parameter passed to the JSP. The navigation.jsp file is in the [PortalServer\_root](../../../../guide_me/wpsdirstr.md)\\theme\\wp.theme.themes\\default85\\installedApps\\DefaultTheme85.ear\\DefaultTheme85.war\\themes\\html\\dynamicSpots folder. The parameter is a key of `type` with three possible values:

-   **top**

    Causes the navigation JSP to render the top navigation, starting at level 0 in the page navigation, which is the highest level.

-   **primary**

    Causes the navigation JSP to render the primary navigation, starting at level 1 in the page navigation.

-   **secondary**

    Causes the navigation JSP to render the secondary navigation, starting at level 2 in the page navigation.


In the theme.html files for your theme, you can remove the default navigation dynamic content spots. You can then replace the dynamic content spots with your own mappings that point to your own jsp implementation. For example, you can replace the three top navigation levels with a single top navigation and a single side navigation.

<!--
-   **[Creating a dynamic content spot for navigation](../dev-theme/themeopt_cust_nav_custnavspot.md)**  
Create a dynamic content spot mapping to customize the theme for Top, Primary, and Secondary navigation. Change the yourTheme value to the name of your theme.
-   **[Adding a level of navigation](../dev-theme/themeopt_cust_nav_addnav.md)**  
You can increase levels of navigation by adding a fourth level of navigation.
-   **[Removing a level of navigation](../dev-theme/themeopt_cust_nav_removenav.md)**  
You can reduce your levels of navigation to two levels.
-   **[Side navigation](../dev-theme/themeopt_cust_nav_side.md)**  
The Portal 8.5 theme includes a side navigation template that can be applied to render pages at the secondary level in a list with the main content. By default, this template is applied to the Administration section of your portal.
--->

???+ info "Related information:"
    - [Mobile navigation](../../responsive_web_design/rwd_add_navphone.md)

