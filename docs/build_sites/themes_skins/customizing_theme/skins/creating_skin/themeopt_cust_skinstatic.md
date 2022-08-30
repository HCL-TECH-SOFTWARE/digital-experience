# Add static resources to a skin

You can add images, URLs, and other static resources to your skin.

When you create a file for the skin on the /fs-type1/ entry point, there is a link that shows this file through the /skinlist/ entry point. This link makes it possible to use the path defined to the image as skinlist instead of fs-type1. You can still use an absolute path to the /fs-type1/ entry point if you want, such as `<img src="http://server_name:port_number/wps/mycontenthandler/dav/fs-type1/skins/myskin/images/logo.png"/>`.

1.  Mount the /fs-type1/ WebDAV entry point with your WebDAV client:

    ```
    /wps/mycontenthandler/dav/fs-type1/
    ```

    If you changed the wps folder, replace it with your WpsContextRoot value.

2.  Add images or other static resources to your skin.

    1.  Copy the required static resources, such as images or JavaScript files, into the root directory of your skin in WebDAV.

    2.  Organize your files in sub-directories as necessary.

    3.  Use server relative or absolute URLs to reference the resources in your skin.html file.

        For example, if you create a folder named /images that contains a file named logo.png, you can use the following references:

        -   **Server relative URL**

            <img src="/wps/mycontenthandler/dav/skinlist/myskin/images/logo.png"/\>

        -   **Absolute URL**

            <img src="http://server\_name:port\_number/wps/mycontenthandler/dav/skinlist/myskin/images/logo.png"/\>



