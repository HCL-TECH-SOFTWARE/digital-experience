# WebDAV

With WebDAV for HCL Digital Experience, you can use standard operating system tools to create, modify, and delete web content rather than the standard authoring portlet.

Before you can use WebDAV with web content, you need to set up a WebDAV client. After your client is set up, you can access the web content libraries with WebDAV with the following URL:

```
http://server:port/portal_context_root/mycontenthandler/dav/content/libraries/
```

For example:

```
http://www.example.com:10027/wps/mycontenthandler/dav/content/libraries/
```

By using tools like file system explorers, WebDAV is used to work with your web content items through familiar, everyday actions. Here are a few examples:

-   You can create components or presentation templates by dragging a file into a corresponding folder.
-   You can run actions on several items at the same time. For example, you can create five images at the same time by dragging five image files into the image component folder. This creates five separate image components, and for each image component the file name is used for the component's name and title.
-   Modifying items is also straightforward through a WebDAV client. For example, you can open a presentation template by using your preferred HTML editor, make changes, and then save the changes. The WebDAV client takes care of accessing the web content library, downloading the template, and then uploading the changes.

In addition to modifying the actual content of an item, you can also modify any item's metadata or access control settings by modifying XML files that define the item's metadata and access control characteristics. You can also drag an existing XML file into the appropriate folder, enabling you to easily set the same data for different items.

You can create, modify, or delete the following items: libraries, taxonomies, categories, site areas, folders, components, and presentation templates.

!!! note
    Be aware that the following features are not supported when using WebDAV with web content:
    -   Content items, except for managing metadata and access control
    -   Authoring templates, except for managing metadata and access control
    -   Nested items within site areas
    -   Server-side copy and move
    -   Unauthenticated users
    -   Exporting of web content libraries with WebDAV to be imported into another web content server

When using WebDAV with web content, be aware of the following considerations.

-   **Locked item support**

    Locking or unlocking an item through WebDAV locks or unlocks the item in Web Content Manager and the JCR database. Because some items are represented by multiple files and folders, locking or unlocking one of these files causes locking or unlocking of the other associated files at the same time. If you lock an item, folders and files that are related to the content of the item, its metadata, and its access control settings are also locked.

-   **Workflow support**

    There is no representation of a workflow itself in the WebDAV tree, but if a file is part of a workflow and the workflow indicates that the file is in a state that allows users to modify it, WebDAV will allow you to modify the file as well.

-   **File names and file type suffixes**

    Files representing data items are always named exactly like the corresponding content item. For example if you have an image component that is named `myImage`, the corresponding image file is also named `myImage`, without any suffix indicating the file type, such as `.gif` or `.jpg`. This can sometimes cause a problem when opening the file through WebDAV because the appropriate application for editing the file cannot be chosen automatically. To account for this, you can either rename the component itself to include the file type \(for example, `myImage.gif`\), or you can manually start the editing application and open the file from within the client.

-   **Missing items**

    If an item no longer displays or can no longer be modified, this could be due to a changed state for the item in the web content server where the item is stored. For example creating or modifying an item on the server could lead to a changed state that prevents you from accessing this item with WebDAV, depending on how workflow is set up. Expiration is another reason an item's state might change and so affect whether you can access the item with WebDAV.

-   **Configuring a HTTP server front end**

    When you use an HTTP server front end to work with WebDAV, you need to set **Accept content for all requests** to true for the Web server plugin in the WebSphere® Integrated Solutions Console under **Web servers** \> **webserver1** \> **Plug-in properties** \> **Request and response**.


-   Documentation resource: [Using WebDAV with HCL Portal](../webdav/administer_webdav/index.md)
-   Documentation resource: [Model WebDAV service](../../../deployment/manage/config_portal_behavior/service_config_properties/portal_svc_cfg/srvcfg_modelwebdav.md)
-   Documentation resource: [Creating components with WebDAV](../webdav/wcm_webdav_createcomp.md)
-   Documentation resource: [Using WebDAV file store](../webdav/administer_webdav/mash_webdav_store.md)

<!-- 
-   Documentation resource: [Using WebDAV to manage pages and site content](../webdav_static.md)
-   Documentation resource: [Using HCL Digital Experience File Sync](../../9.5/dxsync/DXSync.md) -->

-   **[Web content items in the WebDAV tree](wcm_webdav_tree.md)**  
The WebDAV tree that contains your web content items begins at the WebDAV root /libraries/, which displays all libraries to which you have access. All web content items within the libraries are organized with folders and files.
-   **[Metadata and access control for web content items in WebDAV](wcm_webdav_metadata.md)**  
WebDAV uses XML files to represent metadata and access control information for a web content item. You can change an item's metadata and access control settings by modifying these files, and you can specify settings for multiple files by copying the XML files to their appropriate locations in the WebDAV tree.
-   **[Creating taxonomies and categories with WebDAV](wcm_webdav_createtax.md)**  
Taxonomies and categories are profiling methods that are used to group content items, and you can work with taxonomies and categories directly through WebDAV. Taxonomies and categories are represented in WebDAV as folders, and you can set up your taxonomy by creating and nesting folders.
-   **[Managing content with site areas in WebDAV](wcm_webdav_createsite.md)**  
Site areas are used to organize content items in your web content system. In WebDAV site areas are represented as folders, and you can set up your site structure by creating and nesting folders. A content item within a site area is represented as a folder that contains the metadata and access control settings for the content item.
-   **[Creating components with WebDAV](wcm_webdav_createcomp.md)**  
Components are used to store elements in your web content system, and you can use WebDAV to create and manage components. Each component type is represented as a folder in WebDAV, with individual components represented as files in the appropriate component folder.
-   **[Creating presentation templates in WebDAV](wcm_webdav_prestemp.md)**  
With WebDAV, you can create and maintain presentation templates to define the layout and appearance characteristics of web pages that are used to display content. You can also create nested image components for use with the presentation templates. Presentation templates are stored in a folder with nested image components in an associated folder.
-   **[Managing metadata and access control settings for authoring templates with WebDAV](wcm_webdav_authtemp.md)**  
With WebDAV, you can change the metadata information for an authoring portlet or update the template's access control settings.


