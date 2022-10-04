# Creating components with WebDAV

Components are used to store elements in your web content system, and you can use WebDAV to create and manage components. Each component type is represented as a folder in WebDAV, with individual components represented as files in the appropriate component folder.

All components for a library are listed as folders under the `components` folder for that library. Within the `components` folder, you can also create custom folders that you can use to organize your components. Like the root `components` folder, custom folders contain folders for each type of component.

```
 libraries
   - wcm.library.my_library
       - components
           - CustomComponentFolder1 
               - wcm.comps.authoring.tools
               - wcm.comps.component.references
               - wcm.comps.data.and.time
               .
               .
               .
               - wcm.comps.user.selection        
           - CustomComponentFolder2 
               - wcm.comps.authoring.tools
               - wcm.comps.component.references
               - wcm.comps.data.and.time
               .
               .
               .
               - wcm.comps.user.selection        
          - wcm.comps.authoring.tools
          - wcm.comps.component.references
          - wcm.comps.data.and.time
          - wcm.comps.federated.content
          - wcm.comps.file
          - wcm.comps.html
          - wcm.comps.image
          - wcm.comps.jsp
          - wcm.comps.link
          - wcm.comps.menu
          - wcm.comps.navigator
          - wcm.comps.number
          - wcm.comps.page.navigation
          - wcm.comps.personalization
          - wcm.comps.rich.text
          - wcm.comps.search
          - wcm.comps.short.text
          - wcm.comps.style.sheet
          - wcm.comps.taxonomy
          - wcm.comps.text
          - wcm.comps.user.name
          - wcm.comps.user.selection
          access-control.xml
```

Components are data-oriented items and represented as files and metadata folders.

```
 libraries
   - wcm.library.my_library
       - components
          - wcm.comps.authoring.tools
          - wcm.comps.component.references
          - wcm.comps.data.and.time
          - wcm.comps.federated.content
          - wcm.comps.file
          - wcm.comps.html
          - wcm.comps.image
               image1.jpg
               image2.jpg
               - meta-data
                 - wcm.comp.image1.jpg
                       access-control-system.xml
                       access-control-user.xml
                       meta-data.xml		
                 - wcm.comp.image2.jpg
                       access-control-system.xml
                       access-control-user.xml
                       meta-data.xml		
          - wcm.comps.jsp
          - wcm.comps.link
          - wcm.comps.menu
          - wcm.comps.navigator
          .
          .
          .
           - wcm.comps.user.selection
          access-control.xml	
```

!!! important
    Although displayed in WebDAV, the following components cannot be created or modified through WebDAV and are represented by empty files:

-   Authoring tools
-   Component references
-   Federated content
-   JSP
-   Menu
-   Navigator
-   Page navigation
-   Personalization
-   Search
-   Taxonomy
-   User name
-   User selection

To change these components, you must use the authoring portlet.

**Link component limitation:** Currently, link components are not fully supported by WebDAV. The WebDAV file that represents the link component contains only the URL of the link itself but no other information, such as the link text. For example, if you use WebDAV to modify a link component that contains an HTML representation of `<a href='www.lotus.com'>lotus software</a>` and change the URL to`www.ibm.com`, the link text is rendered as `lotus software`, because that information cannot be modified with WebDAV.

1.  To create components for your library, drag one or more files into the appropriate component type folder.

    When you create a new component in this way, the object's file name is used as the name and title of the new component, and the file's content is stored as the component's data. In addition, the user who is authenticated with the WebDAV client is specified as the author and owner of the new component.

    For example, you might drag an HTML file into the `wcm.comps.html` folder for a new HTML component or into the `wcm.comps.rich.text` folder for a new rich text element.

    !!! important
        Placing an incompatible file into a component type folder \(for example, putting a JPEG file into the `wcm.comps.html` folder\) can cause errors during component creation and might result in an unusable component.

    **Updating components:** To update an existing component, you can replace the corresponding file in the WebDAV tree with a new file that has the same name. For example you can place `myCoolPic.jpg` into the image components folder that already contains `myCoolPic.jpg`, and the component is automatically updated with the new file's content. If you place a file with a different name, a new component with that name is created.



