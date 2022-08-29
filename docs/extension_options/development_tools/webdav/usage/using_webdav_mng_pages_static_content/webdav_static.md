# Using WebDAV to manage pages and static content

WebDAV for HCL Digital Experience provides a simple and easy way to administer portal resources. Both administrators and users can use it.

WebDAV for HCL Portal allows users to administer portal pages and content of static pages of a portal by using standard operating system tools. This way client side administrators and users can browse, read, and write these resources by using file explorers or editors.

Portal pages are represented as folders. They can contain subfolders that represent child pages. Static pages are a special case: the content of a static page is located in a separate folder named staticcontent under the main folder of that page.

Users can work in the folders as usual, for example by performing drag-and-drop operations. The folders also hold property files that contain metadata for portal resources, such as the title and description. Users can edit the property files to update portal resources. When the user saves the updated file, the updates are transferred and applied to the portal directly.

**Note:** All the files shown in WebDAV are virtual files created from the page data in the portal database

-   **You can use WebDAV to perform the following tasks:**

    -   Browse through the page hierarchy. Each portal page is represented as a folder. The name of the folder is the unique name or the object ID of the page. Children pages in the topology are represented as subfolders.
    -   Change globalization information of pages. To do this, users edit and save properties files that contain the globalization information.
    -   Change metadata of pages. To do this, users edit and save properties files that contain the metadata information.
    -   Delete pages.
    -   For static pages only, you can browse, read, create, update, save, copy, move, and delete static content, such as HTML or image files. Users can access the content of static pages via the subfolder `staticcontent` of the page.
-   **You cannot use WebDAV to perform any of the following tasks:**

    -   Create new pages.
    -   Update portal content.
    -   Modify the unique name or `objectID` of pages.
    -   Move or copy pages.

HCL Portal contains the WebDAV service and enablement layer. Before using WebDAV for HCL Portal, users must set up their WebDAV client.

After setting up the WebDAV client, they can connect to WebDAV for HCL Portal and work with portal pages and content. To connect to WebDAV for HCL Portal, they enter the WebDAV entry URL.

**Security:** The WebDAV entry point requires user authentication via HTTP basic authentication. SSL access is not supported at this time. To use WebDAV, users log in to the portal with their portal user ID. Users can then access and work with portal pages according to their access permissions as set by Portal Access Control.

The WebDAV entry URL is as follows:

-   For default portal installations:

    ```
    http://server:port\_number/webdav/!ut/p/dav/contentmodel/wps.content.root/
    ```

    ```
    http://server\_name:port\_number/wps/mycontenthandler/dav/contentmodel/wps.content.root/
    ```

-   For virtual portals:
    -   If a host name was specified when the virtual portal was created, the WebDAV URL looks like this:

        ```
        http://virtual\_portal\_host\_name:port\_number/webdav/!ut/p/dav/contentmodel/wps.content.root/
        ```

        ```
        http://virtual\_portal\_host\_name:port\_number/wps/mycontenthandler/dav/contentmodel/wps.content.root/
        ```

    -   If the virtual portal was created with a URL context only and no host name was specified, the WebDAV URL looks like this:

        ```
        http://server:port\_number/webdav/URL\_context\_of\_the\_virtual\_portal/!ut/p/dav/contentmodel/wps.content.root/
        ```

        ```
        http://server\_name:port\_number/wps/mycontenthandler/URL\_context\_of\_the\_virtual\_portal/!ut/p/dav/contentmodel/wps.content.root/
        ```


For details about virtual portals and how to create them by host name or URL context refer to the topic about Multiple virtual portals and its subtopics.

-   **[Connecting to WebDAV to work with portal pages and static content](../admin-system/webdav_url.md)**  
To connect to WebDav to work with portal pages and static content, you enter the WebDAV entry URL.


