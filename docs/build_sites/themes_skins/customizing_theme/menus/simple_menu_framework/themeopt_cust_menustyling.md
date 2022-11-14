# Menu styles

You can vary the appearance of the items in menus that are delivered through the JSON menu framework.

The appearance of the items in the menus that are rendered by the JSON menu framework are determined by style names that open on the rendered markup for the menu items. These styles are defined in Cascading Style Sheet \(CSS\) files that are part of the theme. The default theme has these style sheets in WebDAV in the themes/Portal8.5/css directory.

![Screen capture of the themes/Portal8.5/css directory in WebDAV](../images/themeopt_menustyle_85.jpg)

There are two ways that the appearance of the menu items can be changed.

-   Keep the same style names but change the definition of the named styles in the css files.
-   Change the style names that are applied to the menu items and provide definitions and implementations of the new styles.

The first method keeps the same style names on the menu items, but redefine what appearance results from that style. When you creat your custom theme, take copies of the existing default theme css files as samples and alter them to achieve the appearance you want.

For the second approach, the **JSON** menu definition syntax allows the specification of a style name on the menu items, including headers and separators, using the itemClass member in a menu item definition. By adding explicit entries for the style names on the menu items, those overriding style names are used in the resulting menu markup. The itemClass member is only useful on menu items of type StaticMenuItem, DynamicMenuItem, Header, Separator, and SubMenu. On a SubMenu, the style is applied only to the SubMenu entry `anchor link` itself, and not to the menu items that actually make up that SubMenu.

These CSS files define the menus.

-   **contextmenuCommon.css**

    Contains common styles are valid for left-to-right \(LTR\) and right-to-left \(RTL\) structured pages.

-   **contextmenu.css**

    The menu styles that are used on LTR structured pages.

-   **contextmenuRTL.css**

    The menu styles that are used on RTL structured pages.


## Default menu styles

![Screen capture of the default menu styles](../images/themeopt_defaultmenustyle_85.jpg)

## Style class definitions

-   **wpthemeMenuShow**

    By default all menus are hidden. This class is used to control visibility. If set on the node the menu is made visible.

-   **wpthemeMenuLeft**

    Defines a menu that is left-oriented and opens to the right.

-   **wpthemeMenuRight**

    Defines a menu that is right-oriented and opens to the left.

-   **wpthemeMenuBorder**

    Defines the main `div` that shows the border and contains all menu items.

-   **wpthemeMenuNotchBorder**

    Defines the arrow that points to the button that opened the menu.

-   **wpthemeMenuDropDown**

    Inner element within the menu that contains a list of menu items.

-   **wpthemeMenuitem**

    Describes a single menu item.

-   **wpthemeMenuDisabled**

    Describes a disabled menu item.

-   **wpthemeMenuLoading**

    Describes the text that is displayed when the data is being loaded.

-   **wpthemeAnchorSubmenu**

    Used to register the submenu within the markup.

-   **wpthemeTemplateMenu**

    Defines the template for an individual menu item.

-   **wpthemeTemplateLoading**

    Defines the template for the loading text.

-   **wpthemeTemplateSubmenu**

    Defines the template for the submenu.

-   **wpthemeMenuError**

    Used for display when an error occurs.


The menu JavaScript is in dav:fs-type1/themes/Portal8.5/js/contextmenu.js.

The wptheme.contextmenu.css JSON object defines constants that are used to apply CSS classes. The constants are by default that is set to:

```
contextMenu: {
...
css: {
disabled: "wpthemeMenuDisabled",
show: "wpthemeMenuShow",
error: "wpthemeMenuError",
menuTemplate: "wpthemeTemplateMenu",
submenuTemplate: "wpthemeTemplateSubmenu",
loadingTemplate: "wpthemeTemplateLoading"
},
....
}
```

**Parent topic:**[Simple menu framework](../dev-theme/themeopt_cust_menu.md)

**Related information**  


[Client-side framework for simple menus](../dev-theme/themeopt_cust_clientframe.md)

[Styles](../dev-theme/themeopt_cust_styles.md)

