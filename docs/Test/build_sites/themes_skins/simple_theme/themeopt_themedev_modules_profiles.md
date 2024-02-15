# Modules and profiles

You can define modules to include in profiles to customize the behavior and appearance of your page.

A module encapsulates a feature so that you can choose to include it in your theme based on the profile that you are using. A profile is a .json file that specifies which modules to load and whether to load them when the initial page loads \(non-deferred\) or after the page loads \(deferred\). The Simple Theme template includes two profiles: profile\_deferred.json and profile\_bootstrap.json. These profiles are identical except that profile\_bootstrap.json also loads the bootstrap module, which is required when you use bootstrap navigation.

!!! note
    If you create a new module, you need to include it in your profile before you can use it.

You can define modules in two ways:

-   Adding supporting files within the fs-type1/themes/themename/modules directory of the theme
-   Defining the .json files in the fs-type1/themes/themename/contribution directory

## Defining modules by adding supporting files

1.  In the fs-type1/themes/themename/modules directory, create a new directory with the module name that you want to use.
2.  In the new directory, create two more new directories:

    -   A head directory for the files that you want to load at the beginning of the page. These files are usually CSS and JavaScript.
    -   A configuration directory for the files that you want to load at the end of the page. These files are usually JavaScript or HTML.
    The Simple Theme includes the following modules:

    -   **`st_compressed_navbar`**

        By default, the navigation bar at the beginning of the page compresses when you scroll on the page so that the bar does not scroll off the page. If you remove this module from the profile, the navigation bar scrolls off the page as you scroll on the page. This module includes CSS, which is loaded into the head section of the page, and some JavaScript, which is loaded in the complementary content section of the page.

    -   **`st_layout_grid`**

        The layout of the Simple Theme is fluid. When you shrink the size of your browser window, the content on the page stacks instead of scrolls off the screen. The CSS that controls this feature is contained in this module.

    -   **`st_navigation`**

        This module contains the logic that supports navigation. It includes two JavaScript files. One file controls the mobile navigation menu that is loaded into the head section of the page. The other file controls what is loaded into the complementary content section of the page.

    -   **`st_notice`**

        You can add a warning or notice to the page by using this feature. It includes CSS and JavaScript, which are loaded into the head section of the page.

    -   **`st_search`**

        This module contains the CSS and JavaScript that support the slide-out search bar of the search button. It loads the CSS into the head section of the page and the JavaScript into the complementary content section of the page.

    -   **`st_svg`**

        The SVG images in this theme are stored in a sprite in fs-type1/themes/themename/css/images/sprite.svg. This module contains JavaScript that retrieves the sprite and stores it on the page so that individual SVG images are easier to retrieve.


## Defining the .json files

You can also define modules in the .json files in the fs-type1/themes/themename/contribution directory. Several of these modules are included in the theme.

-   **`bootstrap`**

    This module contains the CSS and JavaScript that are required to run the bootstrap navigation. It is defined in bootstrap.json.

-   **`wp_theme_simple`**

    This module directs several prerequisite modules to load and indicates where the CSS files are located. It is defined in theme.json.

-   **`wp_theme_menus`**

    This module loads the simple menu framework. It is defined in theme.json.



