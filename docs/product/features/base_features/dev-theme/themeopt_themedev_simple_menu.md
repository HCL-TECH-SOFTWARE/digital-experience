# Simple menu

You can use simple menus to customize your pages.

The Simple Theme template uses the simple menu framework for three menus: the portlet menu, the actions menu, and the profile menu. Using this framework, you can add menu entries by adding entries to the .json files in the fs-type1/themes/themename/menuDefinitions directory of the theme.

You must add the main module `wp_simple_contextmenu_main` to your theme profile for the current page before you can use simple menus in your theme.

Use the following sample markup in your theme.html, skin.html, or other markup source to register a simple menu so that it opens when a user clicks the HTML element:

```
<span role="button" aria-haspopup="true"
            class="wpthemeMenuFocus" onclick="if (typeof wptheme != 'undefined')
            wptheme.contextMenu.init({ 'node': this, menuId: 'pageAction', jsonQuery:
            {'navID':ibmCfg.portalConfig.currentPageOID}, params:
          {'alignment':'right'}});"<span class="wpthemeUnderlineText"
            id="wpContextMenu">My Menu</span></span>
```

Note that the JavaScript calls `wptheme.contextMenu.init` and specified several parameters, including the `menuID`, which refers to the .json file in the menuDefinitions directory.

You can create menu content based on the content of a JSON file. The Simple Theme contains three such JSON files, which are located in the menuDefitions folder in WebDAV. You can modify the existing files to add menu entries or add your own menus by using a similar format. Go to [Server-side framework](themeopt_cust_serverframe.md#) to learn more about the format and content of these JSON files.

-   **pageAction.json**

    Defines the contents of the action menu. By default, there are no actions. Instead, there is a header and a link to the HCL Knowledge Center that describes how to use the menu framework.

-   **profileAction.json**

    Defines the contents of the profile menu, which includes an entry for **Edit Profile** and an entry for **Log Out**. The **Edit Profile** menu entry uses a module that is called `wp_selfcare_item` that opens the selfcare portlet. The **Log Out** menu entry uses a `DynamicMenu` item that completes the log out task.

-   **skinAction.json**

    Defines the items that can appear in the Portlet menu of the skin. It also defines all of the possible menu entries that are supported by the specific portlet.


**Note:** If you add many top-level pages to the banner, the navigation line of the banner might wrap. To ensure that the navigation line does not wrap, you can modify style attributes like font size or spacing between items in the CSS file. You can also reorganize your page structure so that fewer pages are top level.

Learn more about the [Simple menu framework](themeopt_cust_menu.md#). Note that not all information at this link applies to the Simple Theme.

**Parent topic:**[Understanding the Simple Theme](../dev-theme/themeopt_themedev_simpletheme.md)

