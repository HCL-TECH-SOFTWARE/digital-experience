# Understanding the Simple Theme 

With the Simple Theme, you can create, copy, and customize themes in minutes with just a few clicks and far fewer files than the Portal 8.5 theme.

When you create a new theme from the Simple Theme template, you can modify the theme through [WebDAV](../wcm/wcm_webdav_overview.md#). These modifications can be made to HTML, JavaScript, or JSON. Because the Simple Theme uses HTML5 and CSS3, only modern browsers are supported. If you are using Microsoft Internet Explorer, you must use version 10 or higher.

The Simple Theme includes the following features:

-   **Fluid, responsive design**

    The Simple Theme is fluid when the size of the container changes. As the container becomes smaller, the content on the page wraps to fit the container.

-   **Customizable navigation**

    The Simple Theme includes four options for navigation. Each option includes a dynamic content spot. On mobile devices, you cannot use site navigation to switch between different sites when you use the Simple Theme. Instead, you must access different sites directly.

    -   **st\_one\_level\_nav**

        Creates a single level of navigation.

    -   **st\_two\_level\_nav**

        Creates two levels of navigation. When you click the first-level page, a second level opens that displays the second level of navigation. You can click anywhere else on the page to close the second level.

    -   **st\_mega\_menu\_nav**

        Creates a mega-menu with up to three levels of navigation.

    -   **st\_bootstrap\_nav**

        Creates a mega-menu that uses the bootstrap framework.

        **Note:** The bootstrap navigation requires the bootstrap profile to run. Before you use this navigation, change the profile setting from the default deferred profile to the bootstrap profile by editing your theme from the theme manager.

-   **Actions menu**

    By default, the **Actions** menu does not include any entries. You can add entries by editing fs-type1/themes/themename/menu-definitions/pageActions.json in the WebDAV repository of the theme.

-   **Edit Profile menu**

    The **Edit Profile** menu includes two options: **Edit My Profile** and **Log Out**. If the user sets a profile picture, the picture displays as the menu icon. You can modify these options in fs-type1/themes/themename/menu-definitions/profileActions.json.

-   **Search**

    When you click the **Search** icon, a text field displays. Enter search terms in the field and click **Enter** to view the search results in the Search Center. You can modify search behavior in theme.html or with a new custom module.

-   **Footer**

    The Simple Theme includes three options for generating a footer. The default footer presents the child pages of the hidden page that has the unique name ibm.portal.theme.simple.footer. You can change this hidden page in the theme metadata. You can also generate a footer by hardcoding the footer elements or by using the st\_wcm\_footer dynamic content spot.


-   **[Theme templates ](../dev-theme/themeopt_themedev_theme_templates.md)**  
You can use static HTML to write portal themes. Then, add static and server-side dynamic content by modifying the theme.html in WebDAV at fs-type1/themes/themename/theme.html.
-   **[Dynamic content spots ](../dev-theme/themeopt_themedev_dynamic_content_spots.md)**  
The Simple Theme template includes many different dynamic content spots that you can use to customize your custom theme.
-   **[Changing the theme logo in the Simple Theme ](../dev-theme/themeopt_themedev_changelogo_simpletheme.md)**  
You can change the theme logo to customize your portal site and reflect your business or brand.
-   **[Changing the favicon ](../dev-theme/themeopt_themedev_favicon.md)**  
The favicon is the image that appears with the page name in browser tabs and bookmark lists. You can customize the favicon to reflect your business or brand.
-   **[Stylesheets ](../dev-theme/themeopt_themedev_css.md)**  
The Simple Theme template uses several stylesheets. Each stylesheet has a compressed version and an uncompressed version.
-   **[Modules and profiles ](../dev-theme/themeopt_themedev_modules_profiles.md)**  
You can define modules to include in profiles to customize the behavior and appearance of your page.
-   **[Layouts ](../dev-theme/themeopt_themedev_layouts.md)**  
You can modify existing layouts, or you can create a new layout by copying and modifying an existing layout.
-   **[Creating and deploying skins ](../dev-theme/themeopt_themedev_skins.md)**  
You can use the default skin as-is, or you can create a new skin by modifying the default skin. After you create a skin, you must deploy it.
-   **[Simple menu ](../dev-theme/themeopt_themedev_simple_menu.md)**  
You can use simple menus to customize your pages.
-   **[Adding a message module ](../dev-theme/themeopt_themedev_status_bar.md)**  
You can add a message module that displays system messages, such as error, warning, or informational messages, at the beginning of the page.
-   **[Globalization ](../dev-theme/themeopt_themedev_globalization.md)**  
By default, the WebDAV files in the Simple Theme template are English only, but you can add other locales to your custom theme.

**Parent topic:**[Developing themes and skins ](../dev-theme/themeopt_themes.md)

