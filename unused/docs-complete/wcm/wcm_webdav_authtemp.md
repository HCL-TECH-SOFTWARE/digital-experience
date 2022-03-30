# Managing metadata and access control settings for authoring templates with WebDAV 

With WebDAV, you can change the metadata information for an authoring portlet or update the template's access control settings.

All authoring templates for a library are listed under the `authoringTemplates` folder for that library. Because they are data-oriented items, authoring templates are represented as files and `meta-data` folders.

```
 libraries
   - wcm.library.my_library
       - authoringTemplates
          auth_template1.html
          myAuthTemplate.html
          - meta-data
              - wcm.presentationTemplate.auth_template1.html
                    access-control-system.xml
                    access-control-user.xml
                    meta-data.xml		
              - wcm.presentationTemplate.myAuthTemplate.html
                    access-control-system.xml
                    access-control-user.xml
                    meta-data.xml		
              access-control.xml

```

**Note:** You cannot modify the authoring template itself in WebDAV. To edit the authoring template, use the authoring portlet.

1.  To change the access control settings for an authoring template, edit the `access-control-system.xml` file for administrator settings or the `access-control-user.xml` file for user-defined settings.

2.  To change the metadata for an authoring template, edit the `meta-data.xml` file for the authoring template.


**Parent topic:**[WebDAV](../wcm/wcm_webdav_overview.md)

**Related information**  


[Metadata and access control for web content items in WebDAV ](../wcm/wcm_webdav_metadata.md)

