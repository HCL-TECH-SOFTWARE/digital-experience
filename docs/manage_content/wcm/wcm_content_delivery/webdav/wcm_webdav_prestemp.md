# Creating presentation templates in WebDAV

With WebDAV, you can create and maintain presentation templates to define the layout and appearance characteristics of web pages that are used to display content. You can also create nested image components for use with the presentation templates. Presentation templates are stored in a folder with nested image components in an associated folder.

All presentation templates for a library are listed under the `presentationTemplates` folder for that library. Because they are data-oriented items, presentation templates are represented as files and `meta-data` folders. Nested image components are stored in a folder that is named after its associated presentation template–for example, `template\_name_files`.

```
 libraries
   - wcm.library.my_library
       - presentationTemplates
          template1.html
          myTemplate.html
          - meta-data
              - wcm.presentationTemplate.template1.html
                    access-control-system.xml
                    access-control-user.xml
                    meta-data.xml		
              - wcm.presentationTemplate.myTemplate.html
                    access-control-system.xml
                    access-control-user.xml
                    meta-data.xml		
              access-control.xml
          - template1.html_files
              nested_image.jpg
          - myTemplate.html_files
```

1.  To create presentation templates for your library, drag one or more files into the `presentationTemplates` folder.

    When you create a new presentation template in this way, the object's file name is used as the name and title of the new template, and the file's content is stored as the template's data. In addition, the user who is authenticated with the WebDAV client is specified as the author and owner of the new template.

    **Important:** Placing an incompatible file into the `presentationTemplates` folder \(for example, a JPEG file\) can cause errors during template creation and might result in an unusable presentation template.

    **Deleting presentation templates:** To delete a presentation template delete the corresponding file. If the presentation template is being referenced by another item, such as a site area, it cannot be deleted until you have first removed the corresponding references by using the authoring portlet.

    **Updating presentation templates:** To update an existing presentation template, you can replace the corresponding file in the WebDAV tree with a new file that has the same name. For example, you can place `myTemplate.html` into the `presentationTemplates` folder, replacing the `myTemplate.html` file that is already there, and the presentation template will automatically be updated with the new file's content. If you place a file with a different name, a new template with that name is created.

2.  Create any nested image components for your presentation template by adding the image files to the `template\_name_files` folder for your template.

    For example, if your template is `template1.html`, you would add the image files to the `template1.html_files` folder.

    **Note:** When you add an image to the nested components folder, a temporary image is created initially, and the image is only permanently added to the list of nested components when a reference to that image is added to the presentation template's HTML code. This is done to prevent orphaned components within the presentation template.

3.  If you have added a nested image component, update the presentation template's HTML code to reference the component according to the relative WebDAV path to the component.

    For example, to reference a nested image component, you would update the `template1.html` file with the following code:

    ```
    <img src="./template1.html_files/nestedImage.jpg" border="0" title="my nested image"/>
    ```

    To reference a standard image component, you would use HTML code similar to the following example:

    ```
    <img src="../components/wcm.comps.image/test2.jpg" border="0" title="my test image"/>
    ```



