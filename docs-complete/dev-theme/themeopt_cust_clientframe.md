# Client-side framework for simple menus 

You can enable simple menus in the client with four modules.

To use the simple menus in your theme, you must add the main module `wp_simple_contextmenu_main` to your theme profile on the current page. All required resources are included on the page.

The simple menu framework includes four modules:

-   `wp_simple_contextmenu_main`
    -   `wp_simple_contextmenu_js`
    -   `wp_simple_contextmenu_css`
    -   `wp_simple_contextmenu_template`

Open the menu with the JavaScript function wptheme.contextMenu.init. For more information, see the *JsDoc*.

To register a simple menu so that it opens when a user clicks the HTML element, use the following example.

```
<span role="button" aria-haspopup="true" class="wpthemeMenuFocus"
          onclick="if (typeof wptheme != 'undefined') wptheme.contextMenu.init({ 'node': this, menuId: 'pageAction', jsonQuery: {'navID':ibmCfg.portalConfig.currentPageOID}, params: {'alignment':'right'}});"
          <span class="wpthemeUnderlineText" id="wpContextMenu">My Menu</span>
      </span>
```

This example has the `pageAction` ID, which triggers a request to the server to load a JSON file with the same id. For more information, see Server-side framework.

You can create as many menus as you want in a custom theme.

To force the regeneration of menus, use the JavaScript command: i$.fireEvent\('wptheme/contextMenu/invalidate/all'\);

When a session timeout occurs, the page refresh returns to the login page.

## Module details

The four modules in the simple menu framework provide all the information that you need to render the menus. For flexibility, the modules, except for the JavaScript module, are configured as theme modules. They are included in each theme individually. When you are creating or cloning your own theme, you must copy all the required resources to your theme.

If you copy the default theme, that theme includes all the required resources.

The following list describes all resources that are required in your theme for various modules .

-   wp\_simple\_contextmenu\_js \(system module\)
-   wp\_simple\_contextmenu\_main \(theme module\)
    -   meta module, no resources referenced
-   wp\_simple\_contextmenu\_css \(theme module\)
    -   theme root directory for static resources/css/wp\_simple\_contextmenu.css
    -   theme root directory for static resources/css/wp\_simple\_contextmenu.css.uncompressed.css
    -   theme root directory for static resources/css/wp\_simple\_contextmenuRTL.css
    -   theme root directory for static resources/css/wp\_simple\_contextmenuRTL.css.uncompressed.css
    -   theme root directory for static resources/css/default/contextmenu.css
    -   theme root directory for static resources/css/default/contextmenu.css.uncompressed.css
    -   theme root directory for static resources/css/default/contextmenuCommon.css
    -   theme root directory for static resources/css/default/contextmenuCommon.css.uncompressed.css
    -   theme root directory for static resources/css/default/contextmenuRTL.css
    -   theme root directory for static resources/css/default/contextmenuRTL.css.uncompressed.css
-   wp\_simple\_contextmenu\_template \(theme module\)
    -   theme root directory for static resources/menuDefinitions/templates/simpleMenuTemplate.html

## Templates

The menu provides a default template that is embedded into the page markup and contributed through the module `wp_simple_contextmenu_template`. If no inline template or not templateID is passed when initializing the menu, the framework reverts to the default template.

You can define your template with an inline template, which is embedded with the menu markup.

```
<span role="button" aria-haspopup="true" class="wpthemeMenuFocus"
          onclick="if (typeof wptheme != 'undefined') wptheme.contextMenu.init({ 'node': this, menuId: 'pageAction', jsonQuery: {'navID':ibmCfg.portalConfig.currentPageOID}, params: {'alignment':'right'}});"
          <span class="wpthemeUnderlineText" id="wpContextMenu">My Menu</span>
          ... <your template markup appears here> ...
      </span>
```

Or, you can use a referenced template through an ID. When calling the init method of the menu, you can pass a templateID as part of the parameters. This ID is resolved as HTML element ID in the DOM and must point to a valid template.

```
<span id="exampleTemplateId" class="wpthemeMenuLeft">
    <div class="wpthemeMenuBorder">
        <div class="wpthemeMenuNotchBorder"></div>
        <!-- define the menu item template inside the "ul" element.  only "css-class", "description", and "title" are handled by the theme's sample javascript. -->
        <ul class="wpthemeMenuDropDown wpthemeTemplateMenu" role="menu">
            <li class="${css-class}" role="menuitem" tabindex="-1"  ><span class="wpthemeMenuText" >${title}</span></li>
        </ul>
    </div>
    <!-- Template for loading -->
    <div class="wpthemeMenuLoading wpthemeTemplateLoading">${loading}</div>
    <!-- Template for submenu -->
    <div class="wpthemeAnchorSubmenu wpthemeTemplateSubmenu">
        <div class="wpthemeMenuBorder wpthemeMenuSubmenu">
            <ul id="${submenu-id}" class="wpthemeMenuDropDown" role="menu"><li role="menuitem" tabindex="-1"></li></ul>
        </div>
    </div>
</span>
```

The template contains 3 sub templates that are identified through classes.

-   **Menu item template**

    Defined through the class `wpthemeTemplateMenu`. To generate each individual menu entry, items this DOM node contains are used as a template.

-   **Loading template**

    Defined through the class `wpthemeTemplateLoading`. Used to display if the menu content is being loaded.

-   **Submenu template**

    Defined through the class `wpthemeTemplateSubmenu`.


The template can also contain a few replacement variables. From within the menu item template, there are three variables.

-   **$\{css-class\}**

    Replaced with the classes used for this entry.

-   **$\{description\}**

    Localized description of the menu item.

-   **$\{title\}**

    Localized title of the menu item.


In the loading template, there is one variable.

-   **$\{loading\}**

    Loading text to be displayed while data is fetched from the server.


In the submenu template, there is one variable.

-   **$\{submenu-id\}**

    Required to define a unique ID for a newly generated submenu.


## Example

This example shows the close handler, another templateId, and alignment.

```
addClass(control.parentNode, VALUE_SELECTED);
            args = {
                "node": control.parentNode,
                "menuId": menuID,
                "jsonQuery": menuQuery,
                "params": {
                    "templateId": "exampleTemplate",
                    "alignment": "right"
                },
                "onClose": function() {
                    removeClass(control.parentNode, VALUE_SELECTED);
                }
            };
            wptheme.contextMenu.init(args);
```

## Simple menu extensions

The framework supports extra extensions as part of the module `wp_simple_contextmenu_ext`. The following extensions are available.

-   **actionUrlTarget**

    You can define the target window within the browser DOM in which a menu action is run. Use this to run a menu action within another iframe of the page for instance. This module is used within the toolbar theme.

-   **badge**

    This extension provides support for displaying badges for each `menuitem` of the `contextmenu`. A badge is a number that is displayed in a graphical box with color. Badges can easily be enabled by setting the metadata `badgeUrl` or `badgeData` on the metadata for the `menuitem`. The feed that is returned from the `badgeUrl` must be of type JSON and must have two JSON elements on the root object.

-   **count**

    The number to be displayed.

-   **level**

    String, which can be either `error`, `warn`, or `info`.


As an alternative to the `badgeURL`, `menuitem` can also contain the `badgeData` element. The `badgeData` element must be a JSON object with the same elements as the feed that is returned from badgeURL. The following is a `badgeURL` example.

```
{
  "type": "StaticMenuitem",
  "id": "myEditFct",
  ...
  "metadata": {
    ...
    "badgeUrl": "?uri=theme-validation:count"
  }
}
```

The following is an example of `badgeData`.

```
{
  "type": "StaticMenuitem",
  "id": "myEditFct",
  ...
  "metadata": {
    ...
    "badgeData": {
      "count": "10",
      "level": "error"
    }
  }
}
```

**Parent topic:**[Simple menu framework ](../dev-theme/themeopt_cust_menu.md)

**Related information**  


[Menu styles ](../dev-theme/themeopt_cust_menustyling.md)

