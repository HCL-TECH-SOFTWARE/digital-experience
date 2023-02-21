# Adding jQuery to a theme

The jQuery library is a JavaScript library. HCL Digital Experience includes a jQuery module for the jQuery core so you can use jQuery in a theme.

This jQuery module is not turned on by default. jQuery is an open framework and is not supported by HCL. The module makes it quick and easy to use jQuery and any of its plug-ins in a theme.

1.  To turn on jQuery, copy the jquery1.10.2.json module definition file into your theme's contributions folder in WebDAV fs-type1. This jquery1.10.2.json file can be found at PortalServer\\theme\\wp.theme.jquery\\installedApps\\wp.theme.jquery.ear\\wp.theme.jquery.war\\v1.10.2.

2.  To enable plug-ins with the jQuery core, download the jQuery plug-in from the jQuery website For more information, see *jQuery plug-in download* in the related links. In this example, use the PowerTip plug-in. The jquery.powertip-1.2.0.zip file. To download the plug-in, see *jQuery PowerTip plug-in download* in the related links.

    1.  Extract the contents of your plug-in file to any location.

    2.  Create a subfolder in your theme's modules folder for the plug-in, such as jquery\_powertip in this example.

    3.  The PowerTip plug-in has two files that must be head contributions of your module, so create a head subfolder in your jquery\_powertip folder.

    4.  Copy the needed resource files from your extracted plug-in location into your head folder. The needed resource files in this case are:

        ```
        jquery.powertip.min.js
        jquery.powertip.js
        jquery.powertip.min.css
        jquery.powertip.css
        ```

    5.  Copy both the min and non-min versions of the files. The min version is used automatically by default for performance and the non-min version is used automatically when debug mode is on.

    6.  This example uses the default color scheme for the tips. But, PowerTip comes with multiple color schemes as defined in separate css files in its CSS folder. You can change to one of the other color schemes or create one of your own by placing the different css files into your head folder.

        For example, to get the light color scheme, you can instead copy the css files into your head folder.

        ```
        jquery.powertip-light.min.css
        jquery.powertip-light.css
        ```

    7.  Your jquery\_powertip module `prereqs` the jQuery module, so create a file that is named prereqs.properties in your modules\\jquery\_powertip folder with the following content:

        ```
        jquery
        ```

    8.  If you have more plug-ins, similar module definition folders can be defined for them in your theme's modules folder. For each module definition, give the module a folder name that starts with jquery\_, such as jquery\_powertip in this example. Prereq the `jquery` module.

3.  Add the module `jquery` to the module listings in one of your theme's profiles. Rather than modify one of the existing profile files, it is best to copy one of them and modify the copy. Copy the base profile file that you want to be similar to, such as profile\_deferred.json, rename it to something such as profile\_jquery\_deferred.json and add the module `jquery`. When you create a profile file, adjust the titles and descriptions so that your profile has a unique and recognizable title and description.

    For example, change the titles and descriptions to

    ```
    "titles": [
          {
             "value": "jQuery Deferred",
             "lang": "en"
          }
       ],
       "descriptions": [
          {
             "value": "This profile has jQuery plus the full set of modules for the theme, but defers loading most of these modules unless actually needed.  This profile balances function and performance.",
             "lang": "en"
          }
       ]
    ```

4.  Add the plug-in modules to the module listings in your profile, such as add the module `jquery_powertip` in this example.

5.  Invalidate the cache so that your profile and module changes are picked up by the Portal server. Click the **Administration menu** icon. Then, click **Portal Analysis** \> **Theme Analyzer**. Then, click **Utilities** \> **Control Center** \> **Invalidate Cache** \> **Click to invalidate**. Auto invalidation recognizes your changes automatically for WebDAV based themes. No further action is required. For more information, see [Utilities](../../the_module_framework/themeopt_analyzer/utilities/index.md).

6.  Apply your profile to a page. In **Edit Page Properties** \> **Advanced**, select your Profile: `jQuery Deferred`.

7.  To verify that jQuery is loaded on a page and what version it is, you can run `$().jquery` in the console of your browser's developer tools.

    It echoes the jQuery version number.


Now the jQuery core and your plug-ins are ready and available for use. To learn the basics about jQuery core usage, see *jQuery basics* in the related links. You can learn the usage of your plug-ins at the same site where you downloaded the plug-in. For more information, see *PowerTip download*.

<!--
-   **[Defining tooltips with PowerTip](../dev-theme/themeopt_jquery_power.md)**  
Once your PowerTip module is active, you can add one or more tooltips to your pages through a dynamic content spot, or a config markup type subcontribution in a module. --->


???+ info "Related information"
    - [jQuery plug-in download](https://jquery.com)
    - [jQuery PowerTip plug-in download](https://plugins.jquery.com/powertip/)
    - [jQuery basics](https://learn.jquery.com/using-jquery-core/)
    - [PowerTip download](https://stevenbenner.github.io/jquery-powertip/)
    - [Defining theme modules](../../the_module_framework/writing_module/themeopt_mod_register.md)
    - [Specify profiles with metadata](../../the_module_framework/specify_profiles/themeopt_define_module.md)

