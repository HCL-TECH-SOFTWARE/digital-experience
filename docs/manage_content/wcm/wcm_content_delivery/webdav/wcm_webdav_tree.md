# Web content items in the WebDAV tree

The WebDAV tree that contains your web content items begins at the WebDAV root /libraries/, which displays all libraries to which you have access. All web content items within the libraries are organized with folders and files.

Items that do not pertain to content, such as site areas or categories, are represented as folders that contain only the item's metadata folder and any child items like other site areas or categories. No data files are present.

-   sites
    -   wcm.siteArea.siteArea1
        -   meta-data
        -   wcm.siteArea.siteArea1.1
            -   meta-data
            -   wcm.siteArea.siteArea1.1.1
                -   meta-data
            -   wcm.siteArea.siteArea1.1.2
                -   meta-data
        -   wcm.siteArea.siteArea2
            -   meta-data

Data-oriented items like image components or presentation templates are represented as files so you can manipulate them with drag and drop operations. The corresponding metadata for the item is managed the same way as for the non-data items but in separate subfolders within the metadata folder.

-   wcm.comps.image
    -   image1.jpg
    -   image2.jpg
    -   meta-data
        -   wcm.comp.image1.jpg
        -   wcm.comp.image2.jpg

In addition to folders that represent actual web content items, there are folders in the WebDAV tree to structure the data or to allow for better scalability. Each library contains folders for components, presentation templates, sites, and taxonomies.

-   libraries
    -   wcm.library.my\_library
        -   authoringTemplates
        -   components
        -   presentationTemplates
        -   sites
        -   taxonomies
    -   wcm.library.contentlibrary
        -   components
        -   presentationTemplates
        -   sites
        -   taxonomies

Within the components folder, there are subfolders for the component types for better scalability and management of the different types of components.

-   libraries
    -   wcm.library.my\_library
        -   components
            -   wcm.comps.authoring.tools
            -   wcm.comps.component.references
            -   wcm.comps.data.and.time
            -   wcm.comps.federated.content
            -   wcm.comps.file
            -   wcm.comps.html
            -   wcm.comps.image
            -   wcm.comps.jsp
            -   wcm.comps.link
            -   wcm.comps.menu
            -   wcm.comps.navigator
            -   wcm.comps.number
            -   wcm.comps.page.navigation
            -   wcm.comps.personalization
            -   wcm.comps.richt.text
            -   wcm.comps.search
            -   wcm.comps.short.text
            -   wcm.comps.style.sheet
            -   wcm.comps.taxonomy
            -   wcm.comps.text
            -   wcm.comps.user.name
            -   wcm.comps.user.selection

To organize your authoring templates, presentation templates, and components, you can create custom web content folders. These web content folders are represented as folders in WebDAV and contain a set of component types that are structured in the same way as the root components folder. Here an example of a component folder structure:

-   CustomComponentFolder1
    -   wcm.comps.authoring.tools
    -   wcm.comps.component.references
    -   wcm.comps.data.and.time
    -   wcm.comps.federated.content
    -   wcm.comps.file
    -   wcm.comps.user.selection
-   CustomComponentFolder2
    -   wcm.comps.authoring.tools
    -   wcm.comps.component.references
    -   wcm.comps.data.and.time
    -   wcm.comps.federated.content
    -   wcm.comps.file
    -   wcm.comps.user.selection
-   wcm.comps.authoring.tools
-   wcm.comps.component.references
-   wcm.comps.data.and.time
-   wcm.comps.federated.content
-   wcm.comps.file
-   wcm.comps.user.selection

