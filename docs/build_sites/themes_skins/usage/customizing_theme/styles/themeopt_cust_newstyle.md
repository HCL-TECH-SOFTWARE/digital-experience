# Creating a theme style

You can add your own custom style to the theme that can be selected on the site toolbar.

To add your own custom style to the theme, create a Cascading Style Sheet \(CSS\) file in WebDAV. This new file includes CSS class definitions that override the ones that are provided by the default CSS layer, which is located here: dav:fs-type1/themes/YourThemeName/css/master.css.

The ready-use alternate styles can be used as guide while creating your own alternate files in folders as peers to the default CSS layer. The alternate styles can be found at this location: dav:fs-type1/themes/YourThemeName/css/.

These steps add a new style to the Styles tab of the site toolbar.

1.  On your local system, create a folder and place a new CSS file in it that includes the class overrides for the alternate style.

    For example, ./custom/custom.css.

    **Note:** Best practice is to create a minified custom.css and human readable custom.css.uncompressed.css for debugging purposes.

2.  Connect to the fs-type1 WebDAV entry point, http://server:port/wps/mycontenthandler/dav/fs-type1/.

3.  Copy the new folder to this location in WebDAV: dav:fs-type1/themes/YourThemeName/css/.

4.  Open the file in WebDAV at dav:fs-type1/themes/YourThemeName/system/styles.json.

5.  Register the style by adding an entry to the items array in the following format:

    ```
          {'label':'display_name_for_the_style',
       'id':'unique_name_for_style',
    'url':'path_to_the_stylesheet_relative_to_theme_folder_in_webdav',
    'thumbnail':'path_to_the_thumbnail_image',
    'help':'short_description_for_the_style'}
    ```

    The following code is an example of the items array:

    ```
          {'label':'change_style_white',
       'id':'white.css',
    'url':'css/white/white.css',
    'thumbnail':ibmCfg.themeConfig.themeRootURI+'/css/white/icon.gif',
    'help':'The white style.'}
    ```

    The display name shows in the site toolbar. Make the path relative to the folder in WebDAV. The JSON object in the file styles.json contains two attributes that are used for globalizing the style display strings localizationPackageName and localizationBundleName. These objects are used by the dojo.i18n file to provide localized strings by creating bundles with dojo.i18n.getLocalization\("localizationPackageName", "localizationBundleName"\). If you choose to globalize the display name of your new style, add a key to the bundle and replace the label value in the JSON with the key name. The site toolbar automatically looks up the display name in the bundle using the key.



**Related information**  


[Creating new styles or layouts by using a JSON file](../rwd/rwd_add_layout_outside.md)

