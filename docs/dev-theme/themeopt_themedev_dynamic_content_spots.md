# Dynamic content spots 

The Simple Theme template includes many different dynamic content spots that you can use to customize your custom theme.

Some dynamic content spots can take parameters. These parameters are added to the `href` of the content spot as a query string:

```
<a rel="dynamic-content" href="dyn-cs:id:st_footer?someparam=somevalue"></a>
```

-   **`st_head`**

    Sets title and description metadata.

    Adds the NavStateUrl. NavStateURL can be turned off by setting the parameter includeNavStateUrl to false.

    Adds the favicon. The favicon can be turned off by setting the parameter includeFavicon to false. You can also set the favicon to a different file name or location by setting the parameter faviconLocation to the URL of your file.

-   **`st_one_level_nav`**

    Adds the single level navigation markup. This property can take two parameters:

    -   **startLevel**

        Indicates the level on which navigation starts. The default is 1.

    -   **rootLabel**

        The aria-label of the navigation element. The default is Portal Application.

-   **`st_two_level_nav`**

    Adds the two-level navigation markup. This property can take two parameters:

    -   **startLevel**

        Indicates the level on which navigation starts. The default is 1.

    -   **rootLabel**

        The aria-label of the navigation element. The default is Portal Application.

-   **`st_mega_menu_nav`**

    Adds the mega-navigation markup. This property can take two parameters:

    -   **startLevel**

        Indicates the level on which navigation starts. The default is 1.

    -   **rootLabel**

        The aria-label of the navigation element. The default is Portal Application.

-   **`st_bootstrap_nav`**

    Adds the bootstrap navigation markup. This property can take two parameters:

    -   **startLevel**

        Indicates the level on which navigation starts. The default is 1.

    -   **rootLabel**

        The aria-label of the navigation element. The default is Portal Application.

-   **`st_actions_menu`**

    Adds the **Actions** menu. You can define the actions in fs-type1/themes/themename/menu-definitions/pageActions.json.

-   **`st_edit_profile`**

    Adds the **Profile** menu. You can define the menu items in fs-type1/themes/themename/menu-definitions/profileActions.json.

-   **`st_login_logout`**

    Adds the login link if the user is not logged in.

-   **`st_footer`**

    Adds the footer when it is defined by children of a specific hidden page. The default parent page is ibm.portal.theme.simple.footer, but you can override this default setting by setting the parameter navRootPage to the unique name of your hidden parent page. You can also indicate that you want the link to open in a new window by setting the parameter openNewTab to true.

-   **`st_wcm_content`**

    Specifies the footer as HCL Web Content Manager content. This property takes one parameter, path, which is the location of a Web Content Manager content item that is rendered.

-   **`st_self_care`**

    Displays the edit profile page in fs-type1/themes/themename/menu-definitions/profileActions.json


-   **[Adding a status bar to the Simple Theme ](../dev-theme/themeopt_themedev_statusbar_2.md)**  
The status bar is an optional feature that displays system messages.

**Parent topic:**[Understanding the Simple Theme ](../dev-theme/themeopt_themedev_simpletheme.md)

