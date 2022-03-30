# Managing content with site areas in WebDAV 

Site areas are used to organize content items in your web content system. In WebDAV site areas are represented as folders, and you can set up your site structure by creating and nesting folders. A content item within a site area is represented as a folder that contains the metadata and access control settings for the content item.

All site areas and content items for a library are listed under the `sites` folder for that library.

```
sites
  - wcm.siteArea.siteArea1
      - meta-data
          access-control-system.xml
          access-control-user.xml
          meta-data.xml		
      - wcm.siteArea.siteArea1.1
          - meta-data
              access-control-system.xml
              access-control-user.xml
              meta-data.xml		
          - wcm.content.content1.1.1 
              - meta-data
                  access-control-system.xml
                  access-control-user.xml
                  meta-data.xml 
      - wcm.siteArea.siteArea1.2
          - meta-data
              access-control-system.xml
              access-control-user.xml
              meta-data.xml		
   access-control.xml
```

**Note:** Support for content items is limited to modifying the metadata and access control settings. You cannot create or delete content items by using WebDAV.

1.  To create a new site area for your library, create a new folder with the `wcm.siteArea` prefix.

    **Important:** Some WebDAV clients create a folder with a default name, such as `New Folder`, and as soon as you enter the name of the new folder, the client sends a request to rename the already created folder. Because site area folders require a corresponding prefix for creation, this client behavior does not work. If your WebDAV client uses this method to create new folders, you can first create the new site area folder locally and then copy it into the WebDAV tree.

    **Deleting site areas:** To delete site areas delete the corresponding folder. Parent site areas containing site areas or content items cannot be deleted until you have also first deleted the child items. To delete child content items before deleting a site area, you must use the authoring portlet rather than WebDAV.


**Parent topic:**[WebDAV](../wcm/wcm_webdav_overview.md)

