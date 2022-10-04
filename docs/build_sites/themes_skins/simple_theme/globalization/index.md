# Globalization

By default, the WebDAV files in the Simple Theme template are English only, but you can add other locales to your custom theme.

You must add and modify several files to add other locales to your custom theme.

## Theme template \(theme.html\)

If your theme template contains translatable strings, you can delegate rendering to a specific HTML file for each locale. The following procedure adds support for German as an example, but you can add support for many other languages. Go to [Supported languages](../reference/supportedlanguages.md#) to learn more about the languages that are supported by HCL Digital Experience.

1.  Add the following tags to the head section of your theme template:

    ```
    <link rel="alternate" href="nls/theme_de.html" hreflang="de">
    ```

    ```
    <link rel="alternate" href="nls/theme_en.html" hreflang="en">
    ```

2.  In WebDAV, create a new directory that is named nls in fs-type1/themes/themename.
3.  Copy theme.html to theme\_de.html and theme\_en.html to the nls directory.
4.  Translate the strings to German in theme\_de.html.
5.  In theme\_de.html, change the `lang` attribute in the HTML tag to de.

## Skin template \(skin.html\)

The skin template contains English strings for the menu hover text. You can delegate rendering to a specific skin HTML file for each locale. The following procedure adds support for German as an example, but you can add support for many other languages. Go to [Supported languages](../reference/supportedlanguages.md#) to learn more about the languages that are supported by HCL Digital Experience.

1.  Add the following tag to the section tag of your template:

    ```
    <a rel="alternate" href="nls/skin_de.html" hreflang="de" class="wpthemeDisplayNone"></a>
    ```

    The section tag will look similar to the following sample section tag:

    ```
    <section class="ibmPortalControl stControl wpthemeControl a11yRegionTarget">
    <a rel="alternate" href="nls/skin_de.html" hreflang="de" class="wpthemeDisplayNone"></a>
    <a rel="alternate" href="nls/skin_en.html" hreflang="en" class="wpthemeDisplayNone"></a>
    ```

2.  In WebDAV, create a new directory that is named nls in fs-type1/themes/themename/yourskin.
3.  Copy skin.html toskin\_de.html and skin\_en.html to the nls directory.
4.  Translate the strings to German in skin\_de.html.

## Profiles, menus, contributions, and other .json files

You can add title and description values for each locale to your .json files.

1.  Locate and open the .json file.
2.  Locate the **Titles** element. To add a new locale, add its **lang** and **value** attributes, which are separated by commas:

    ```
    "titles":[
    {
    "lang":"de",
    value":"Verzögert"
    },
    {
    "lang":"en",
    "value":"Deferred"
    }
    ]
    ```

3.  Repeat Step 2, editing the **lang** and **value** attributes for descriptions.
4.  Edit the **class** attribute in the body element from `locale_en` to `locale_lang`:

    ```
    <body id="content" class="lotusui30dojo tundra claro locale_lang
    ```


-   **[Adding support for RTL locales](themeopt_themedev_rtl_locales.md)**  
You can add support for languages that read from right to left.


