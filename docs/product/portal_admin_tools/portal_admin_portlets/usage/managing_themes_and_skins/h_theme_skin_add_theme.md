---
id: h_theme_skin_add_theme
title: Creating your own theme
---
import useBaseUrl from '@docusaurus/useBaseUrl';



The best way to start creating your own custom theme is by copying the HCL Portal theme. This ensures that your theme has all the required elements for the theme to function.

Do not modify the standard HCL Digital Experience theme directly, because future fix packs and service changes can overwrite your changes. To create a new theme proceed as follows:

1.  Mount the /themelist WebDAV entry point with your WebDAV client:

    ```
    /wps/mycontenthandler/dav/themelist/
    ```

2.  Copy and rename the folder of the theme on which you want to base your new theme.

    **Note:** The /themelist WebDAV entry point does not support the copy action directly. If you encounter an error when you copy and paste theme folders within /themelist, do the following:

    1.  Copy the theme folder to your local file system.
    2.  Give the theme a new title by editing the appropriate localized\_locale.properties file under the metadata folder. If you do not change the theme title, the portal will show multiple themes with the same titles in selection lists.
    3.  Copy the new folder to the /themelist folder.
    After you have completed these steps, your new theme is defined in the portal database. If you do not see your new theme in the Themes and Skins or Page Properties portal administration portlets, edit a theme that you find listed, then press **OK** without making any updates. This refreshes the theme model list; your new theme should now show. As an alternative, you can also restart the portal.


You can now assign the theme to pages as required. To customize your theme, edit the theme files in WebDAV.

To perform administrative customization, for example to the title, description, or metadata of the theme, continue to use the `/themelist/` entry point. To customize the templates and static resources, use the `/fs-type1/` entry point. At this point your theme still points to the same Default.jsp and dynamic content spots as the portal HCL Portal theme.

**Note:** If you have problems using the `/themelist/` entry point, try `/themelist/all` , as some WebDAV clients have issues listening without the `all` .

