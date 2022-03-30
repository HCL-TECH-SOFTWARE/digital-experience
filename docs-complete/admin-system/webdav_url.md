# Connecting to WebDAV to work with portal pages and static content 

To connect to WebDav to work with portal pages and static content, you enter the WebDAV entry URL.

The WebDAV entry URL is as follows:

-   For default portal installations:

    ```
    http://server:port/webdav/dav/contentmodel/[page\_unique\_name|page\_object\_id]/
    ```

    ```
    http://server:port/wps/mycontenthandler/dav/contentmodel/page\_unique\_name/
    ```

    or

    ```
    http://server:port/wps/mycontenthandler/dav/contentmodel/page\_object\_id/
    ```

-   For virtual portals:
    -   If a host name was specified when the virtual portal was created, the WebDAV URL is as follows:

        ```
        http://virtual\_portal\_host\_name:port/webdav/dav/contentmodel/[page\_unique\_name|page\_object\_id]/
        ```

        ```
        http://virtual\_portal\_host\_name:port/wps/mycontenthandler/dav/contentmodel/page\_unique\_name/
        ```

        or

        ```
        http://virtual\_portal\_host\_name:port/wps/mycontenthandler/dav/contentmodel/page\_object\_id/
        ```

    -   If the virtual portal was created with a URL context only and no host name was specified, the WebDAV URL is as follows:

        ```
        http://server:port/webdav/URL\_context\_of\_the\_virtual\_portal/!ut/p/dav/contentmodel/[page\_unique\_name|page\_object\_id]/
        ```

        ```
        http://server:port/wps/mycontenthandler/URL\_context\_of\_the\_virtual\_portal/!ut/p/dav/contentmodel/page\_unique\_name/
        ```

        or

        ```
        http://server:port/wps/mycontenthandler/URL\_context\_of\_the\_virtual\_portal/!ut/p/dav/contentmodel/page\_object\_id/
        ```


Where:

-   **server**

    Host name of the portal server.

-   **port**

    Port number of HCL Portal.

-   **URL\_context\_of\_the\_virtual\_portal**

    URL context of the target virtual portal, if the virtual portal URL context is configured to be encoded into the URL.

-   **virtual\_portal\_host\_name**

    Host name of the target virtual portal, if the virtual portal host name is configured to be encoded into the URL.

-   **page\_unique\_name**

    Unique name for the portal page.

-   **page\_object\_id**

    `objectID` for the portal page as it appears in the Manage Pages portlet.


Examples of entry URLs to all portal pages are as follows:

```
  http://www.my_company.com:10040/webdav/dav/contentmodel/wps.content.root/
```

```
  http://www.my_company.com:10039/wps/mycontenthandler/dav/contentmodel/wps.content.root/
```

For virtual portals examples of entry URLs to all portal pages are as follows:

-   For a virtual portal created with the host name `vp.mycompany.com`:

    ```
    http://vp.mycompany.com:10040/webdav/dav/contentmodel/wps.content.root/
    ```

    ```
    http://vp.mycompany.com:10039/wps/mycontenthandler/dav/contentmodel/wps.content.root/
    ```

-   For a virtual portal created with the URL context `vp1` and without a host name:

    ```
    http://localhost:10040/webdav/vp1/!ut/p/dav/contentmodel/wps.content.root/
    ```

    ```
    http://localhost:10039/wps/mycontenthandler/vp1/!ut/p/dav/contentmodel/wps.content.root/
    ```


For details about virtual portals and how to create them by host name or URL context refer to the topic about Multiple virtual portals and its subtopics.

**Parent topic:**[Using WebDAV to manage pages and static content](../admin-system/webdav_static.md)

**Related information**  


[Virtual portals ](../admin-system/ad_vp.md)

