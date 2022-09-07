# Static resources

Static resources include the markup that is defined by .html, .css, and .js files that are used by the theme. Some .json files are used to define menu options, module definitions, and module profiles.

For more information about modularization and modules that are provided by the HCL Digital Experience Portal 8.5 Theme, see [Modules that are provided with the modularized theme](../the_module_framework/oob_modules/index.md). Each WebDAV folder has a readme file with additional information about each section.

On WebDAV: http://host:port/wps/mycontenthandler/dav/fs-type1.

## Theme module definitions

fs-type1:\\themes\\Portal8.5\\contributions

theme.json: Module definitions for wp\_theme\_portal\_85.

-   wp\_theme\_menus
-   wp\_theme\_portal\_85
-   wp\_theme\_skin\_region
-   wp\_theme\_high\_contrast
-   Removed in Combined Cumulative Fix 06:
    -   wp\_theme\_edit

theme\_edit.json: Contribution that is loaded when edit mode is turned on. Separates view mode from edit mode. Module definitions for wp\_theme\_portal\_edit\_85

-   wp\_theme\_portal\_edit\_85

dojo19.json: Module definitions for Dojo, dijit, and dojox from version 1.9.1.

oneui303.json: Module definitions for OneUI version 3.0.3.

-   wp\_one\_ui
-   wp\_one\_ui\_dijit

contextmenu.json: Contains component action menu presentation templates.

simple\_contextmenu.json: Contains simple menu presentation templates.

worklight61.json: Contains Worklight mappings.

## Style templates

fs-type1:\\themes\\Portal8.5\\css

Style templates contain the css definitions for the styles that are provided by the theme. The style options are shown in the **Style** tab on the site toolbar when in **Edit Mode**.

Each of the listed directories has a css definitions file for that style and an icon that contains the image that represents the style. For the black style, there is a black.css and an icon.gif file under the black directory.

The css directory contains the following directories and files:

-   Directories: black, blue, gold, green, orange, purple, red, white, images, and default.
-   Files:

    -   master.css: Includes the sideNav.css, and default.css files.
        -   Removed in Combined Cumulative Fix 06:
            -   contextmenu.css
            -   contextmenuCommon.css
    -   masterRTL.css: Includes the sideNavRTL.css, defaultRTL.css, and default.css files.
        -   Removed in Combined Cumulative Fix 06:
            -   contextmenuRTL.css
            -   contextmenuCommon.css
    These files contain the compressed \(minified\) versions of the css definitions.

    !!! note
        Compressing the files makes the files harder to read, so uncompressed versions are provided. It is best to use uncompressed versions when you are editing and debugging your theme CSS.


The default directory includes the base styles for the theme. The default\_view.css file contains styles for view mode. The default\_edit.css file contains styles for edit mode. The default\_search.css file contains styles for search. These styles are applied to the default theme and optimize it for mobile devices. These styles apply to menus, navigation, layout, and footer.

The images directory contains the following common images:

-   blank.gif: A blank gif file that is used for spacing.
-   loading.gif: The image that is shown when the page or other resource is loading.
-   loadingDark.gif: A darker version of the loading.gif image.
-   master.png: A sprite file with common images that are used in the theme. Some of the images in the sprite include the HCL and HCL Portal logos, search icon, the pencil icon for the edit/view mode toggle, and various sized arrow images.

## Images

fs-type1:\\themes\\Portal8.5\\images

-   Directories: addContent and taggingAndRating
-   Files: favicon.ico

## js

fs-type1:\\themes\\Portal8.5\\js

-   head.js: This file contains JavaScript processing included in the head section.
-   skinRegion.js: This file contains JavaScript that applies accessible areas to the skins.
-   mobilenav.js: This file contains JavaScript processing for the mobile areas of the theme.
-   Removed in Combined Cumulative Fix 06:
    -   contextmenu.js: This file contains the JavaScript implementation of the menu.
    -   theme.js: This file contains JavaScript processing for the edit capabilities in the theme.
    -   highContrast.js: This file contains JavaScript processing for high contrast enabled systems. This file was moved to a different module in Combined Cumulative Fix 06.

## Layout templates

fs-type1:\\themes\\Portal8.5\\layout-templates

Each directory contains a layout template. These templates are shown on the **Change Layout** tab of the site toolbar when in edit mode. Each directory contains a layout.html file that defines the layout and an icon.gif file that is a thumbnail image of the layout.

The layout.html file defines the decorations of the content area that are different between pages.

The layout templates are scoped to the Portal 8.5 theme.

Directories: 1Column, 1Row2ColumnUnequal, 1Row3ColumnEqual, 2ColumnEqual, 2ColumnLeft, 2ColumnRight, 2Row, 3ColumnCenter, 3ColumnEqual, TopColumn2ColumnUnequal, and TopColumn3ColumnCenter.

## Menu definitions

fs-type1:\\themes\\Portal8.5\\menuDefinitions

Link to menu framework

-   pageAction.json: Defines the menu items for the **Page Action** menu. Items include the definitions for the Tagging and Rating, Impersonation, and other page-related menu items.
-   skinAction.json: Defines menu items for the portlet menu. It includes the definitions for the actions that are available for the portlet. Included items are Wiring, Delete, Edit Settings, Minimize, and Maximize.

## nls

fs-type1:\\themes\\Portal8.5\\nls

This directory contains translated HTML files for the theme.

## Profiles

fs-type1:\\themes\\Portal8.5\\profiles

These are the several module profiles that define which modules are loaded when a page is loaded. For more information about deferred modules, see [Deferred and non-deferred modules](../the_module_framework/themeopt_module_defer.md). For more information about profiles, see [Included Profiles](../the_module_framework/specify_profiles/themeopt_mod_oob_profile.md).

## Skins

fs-type1:\\themes\\Portal8.5\\skins

Directories: Hidden, NoSkin, and Standard.

These directories contain the ready-to-use skins that are available with the HCL Portal 8.5 theme: Hidden, NoSkin, and Standard. Each directory has a skin.html file, which defines the markup for the skin.

Localized files:

-   fs-type1:\\themes\\Portal8.5\\skins\\Standard\\nls
-   fs-type1:\\themes\\Portal8.5\\skins\\Hidden\\nls
-   fs-type1:\\themes\\Portal8.5\\skins\\NoSkin\\nls

## Theme markup

fs-type1:\\themes\\Portal8.5\\

Localized versions: fs-type1:\\themes\\Portal8.5\\nls

-   Plain.html Defines a markup that has no decorations. This file is used for some basic dialogs in the theme.
-   theme.html: Defines the markup that is identical for all the pages to which this theme is applied.
-   theme\_sidenav.html: Defines a theme layout that uses a side navigation.


???+ info "Related information:"
    - [Removing the previous version of social rendering](../../social_rendering/administering_social_list/rem_soc_rend.md)

