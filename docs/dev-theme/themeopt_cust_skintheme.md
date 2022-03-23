# Creating new skin resources 

You can begin to create a custom skin that is scoped to a specific theme by creating new skin resources.

1.  Mount the /fs-type1/ WebDAV entry point with your WebDAV client:

    ```
    /wps/mycontenthandler/dav/fs-type1/
    ```

    If you changed the wps folder, replace it with your WpsContextRoot value.

2.  Locate your custom theme under the themes folder.

3.  Under the theme root folder, find the skins folder. If it is not there, then create it.

4.  Copy a skin that you want to use as the base to your local system. If the skins folder did not exist previously and you created it, go to the skins folder in the global scope, dav:fs-type1/skins. Copy a skin from that location that you want to use as the base.

5.  After you copy the base skin folder to your local system, rename the folder.

6.  Copy the new folder to the skins folder under your custom theme, dav:fs-type1/themes/custom\_theme/skins.


**Parent topic:**[Create a theme-scoped skin ](../dev-theme/themeopt_create_themescoped_skin.md)

