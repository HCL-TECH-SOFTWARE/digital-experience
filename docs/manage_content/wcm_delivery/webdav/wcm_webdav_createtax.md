# Creating taxonomies and categories with WebDAV

Taxonomies and categories are profiling methods that are used to group content items, and you can work with taxonomies and categories directly through WebDAV. Taxonomies and categories are represented in WebDAV as folders, and you can set up your taxonomy by creating and nesting folders.

All taxonomies and categories for a library are listed under the `taxonomies` folder for that library.

```
taxonomies
   - wcm.taxonomy.taxonomy1
       - meta-data	
           access-control-system.xml
           access-control-user.xml
           meta-data.xml
       - wcm.category.category1
           - meta-data
               access-control-system.xml
               access-control-user.xml
               meta-data.xml
           - wcm.category.category1.1
               - meta-data
                   access-control-system.xml
                   access-control-user.xml
                   meta-data.xml
           - wcm.category.category1.2
               - meta-data
                   access-control-system.xml
                   access-control-user.xml
                   meta-data.xml
   - wcm.taxonomy.taxonomy2
       - meta-data
           access-control-system.xml
           access-control-user.xml
           meta-data.xml		
   access-control.xml
```

1.  To create a new taxonomy or category for your library, create a new folder with the `wcm.taxonomy` prefix or the `wcm.category` prefix.

    Taxonomies can be created under the generic `taxonomies` folder only, while categories can be created in either a `wcm.taxonomy.*` folder or a `wcm.category.*` folder.

    !!! important
        Some WebDAV clients create a folder with a default name, such as `New Folder`, and as soon as you enter the name of the new folder, the client sends a request to rename the already created folder. Because taxonomy and category folders require a corresponding prefix for creation, this client behavior does not work. If your WebDAV client uses this method to create new folders, you can first create the new taxonomy or category folder locally and then copy it into the WebDAV tree.

    **Deleting taxonomies and categories:** To delete taxonomies or categories delete the corresponding folder. Taxonomies or categories that contain categories cannot be deleted until you have also first deleted the child items. Also if a category is still being referenced by another item, it cannot be deleted until you have first removed the corresponding references by using the authoring portlet.



