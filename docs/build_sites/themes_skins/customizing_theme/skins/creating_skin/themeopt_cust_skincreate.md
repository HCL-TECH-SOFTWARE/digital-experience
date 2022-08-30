# Creating skins

You can create global or theme-based skins to customize a theme. A successful approach to creating custom skins is by copying one of the default skins files, then adding images, JavaScript files, and other custom resources.

Do not modify the default skins directly, because this skin can be updated by service fix packs and override your changes.

You can create skins in the following scopes:

-   **Theme-based**

    You can scope a skin to one particular theme. Use this scope if the skin relies specifically on code within the theme or has a specific function that is only useful in that particular theme. These skins are located under the root folder of the theme, and create a specific link between the skin and theme.

    This is the recommended approach.

-   **Global**

    The global scope where the skin is not specific for any theme. Global skins are located in the skins folder under the WebDAV root.


All skins created in Portal can be access by the WebDAV skinlist entry point.

-   **[Create a theme-scoped skin](../dev-theme/themeopt_create_themescoped_skin.md)**  
You can create a custom skin that is scoped to a specific theme when you copy an existing ready-use choice to use as the base for your new skin.
-   **[Add static resources to a skin](../dev-theme/themeopt_cust_skinstatic.md)**  
You can add images, URLs, and other static resources to your skin.


