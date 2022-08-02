# Adding a layout to the toolbar

You can add your own custom layout to the theme that can be selected on the site toolbar.

To add your own custom layout to the toolbar, first create a folder for your layout in /fs-type1/themes/myCustomTheme/layout-templates or copy and rename one of the existing layout folders. In the folder, create or modify your layout template layout.html file, and create or modify your icon.gif file for the visual representation of your layout as it appears on the toolbar.

These steps add the new layout to the site toolbar.

1.  Open the layouts.json file in WebDAV at dav:fs-type1/themes/myCustomTheme/system. If the file does not exist, create the file. The layouts.json registers the layout you created in the layout.html file with the toolbar and defines it further.

2.  Add titles and descriptions of the layout as part of the layout entry.

    ```
    {
        "items": [
        {
            'label': 'Complete',
            'url': ibmCfg.themeConfig.themeWebDAVBaseURI + 'layout-templates/Complete/',
            'id': 'Complete',
            'thumbnail': ibmCfg.themeConfig.themeRootURI + '/layout-templates/Complete/icon.png',
            'help': '',
            "titles": [{
                "value": "Full Page Layout",
                "lang": "en"
            }],
            "descriptions" : [{
                "value": "Full Page Layout Description",
                "lang": "en"
            }]
        },
        ...
        ]
    }
    ```

3.  Refresh your browser cache.

4.  Reload the page to view the layouts in the **Page** \> **Layout** tab of the site toolbar.


**Parent topic:**[Layouts](../dev-theme/themeopt_cust_layout.md)

