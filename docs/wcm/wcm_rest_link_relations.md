# Link relations 

These definitions provide information on how different requests can be linked.

|Relation|Purpose|Supported Operation to the Link HREF|Settable for PUT and POST operation|
|--------|-------|------------------------------------|-----------------------------------|
|`access-control`|The access settings of an item.|GET|NO|
|`add-attachment`|Add attachment to the item \(array component only, such as HTML, RichText component/element, and PresentationTemplate\).|POST|NO|
|`approve`|Approve the item in current stage and move it into next stage in the worklfow.|POST|NO|
|`change-to-draft`|Go to the draft of the item.|POST|NO|
|`content-template`|The content template of the item.|GET|YES|
|`create-draft`|Create a draft of the item.Also adds an item to a project if created within a portal project context.

|POST|NO|
|`default-presentation`|The template set as the default presentation template for the item that is created from an authoring template.|GET|YES|
|`delete`|Delete an item.|DELETE|NO|
|`draft-of`|The published item link of the draft item.|GET|NO|
|`draft`|The draft link of the published item.|GET|NO|
|`edit-media`|Pointing to the item itself with raw data type specified in the 'type' attribute. Designed to be used for 'Raw Data' Read and Update.|PUT, GET|NO|
|`edit`|Pointing to item itself.|PUT, POST, GET, DELETE|NO|
|`elements`|All the elements in the content/sitearea.|GET|NO|
|`library`|The library that the item is stored in.|GET|YES|
|`new-content`|Link to the new content item to be created from this content template.|GET|NO|
|`new-project`|Link to the new project to be created from this project template.|GET|NO|
|`new-projecttemplate`|Link to the new project template.|GET|NO|
|`new-sitearea`|Link to the site area to be created from this site area template.|GET|NO|
|`next-stage, expire, publish, submit-for-review`|Move item to next stage in the workflow.|POST|NO|
|`parent`|The parent of the item.|GET|YES, overrides the library if both specified|
|`presentation-override`|The presentation template set as the presentation override on the item that is created from the authoring template.|GET|YES|
|`preview`|Used to preview content items and site areas.|GET|NO|
|`previous-stage, withdraw-from-review`|Move item to previous stage in the workflow.|POST|NO|
|`project`|The project that the item belongs to, if it is a draft in a project.|GET|YES|
|`project-items`|List the items associated with a project.|GET|NO|
|`prototype`|The default content properties of an authoring template.|GET|YES|
|`prototype-properties`|The default properties of an authoring template.|GET|YES|
|`reject`|Decline the item in current stage and move it back to previous stage in the workflow.|POST|NO|
|`restart`|Restart the workflow for the item and move to the draft stage.|POST|NO|
|`self`|Read-only link back to item itself.|GET|NO|
|`sitearea-template`|The site area template of the item.|GET|YES|
|`versioned-item`|The individual version of the item.|GET|NO|
|`versions`|All versions of the item.|GET|NO|
|`workflow-stage`|The workflow stage of the item.|GET|NO|
|`workflow`|The workflow of the item.|GET|YES|

-   **access-control**

    ```
    <atom:links atom:rel="access-control" 
    atom:href="/wps/mycontenthandler/!ut/p/digest!2ducXmyQyM0CM4Nev9jHqw/ac/access:oid:Z6QReDe6BCAMI57IPD8MMS643C4JMG6HPC4MM47OHC4JMC6M9DCJPGCO1CE3OOCJ1"/>
    ```

-   **add-attachment**

    ```
    <atom:links atom:rel="add-attachment" 
    atom:href="wcmrest:LibraryHTMLComponent/c0b72020-10b7-4197-a436-62a1d94ce03f/attachments"/>
    ```

-   **approve**

    ```
    <atom:links atom:rel="approve" 
    atom:href="/wps/mycontenthandler/wcmrest/item/68b3bbb5-3b36-4c1f-94b1-6c3a037c975a/approve"/>
    ```

-   **authoring-template**

    ```
    <atom:links atom:rel="authoring-template" 
    atom:href="/wps/mycontenthandler/wcmrest/item/18cfc80c-a490-4d75-9057-fed3db89de53"/>
    ```

-   **change-to-draft**

    ```
    <atom:links atom:rel="change-to-draft" 
    atom:href="/wps/mycontenthandler/wcmrest/item/c0b72020-10b7-4197-a436-62a1d94ce03f/change-to-draft"/>
    ```

-   **create-draft**

    ```
    <atom:links atom:rel="create-draft" 
    atom:href="/wps/mycontenthandler/wcmrest/item/e5846504-e4ae-496f-8f33-c06a8bfcb31d/create-draft"/>
    ```

-   **decline**

    ```
    <atom:links atom:rel="decline" 
    atom:href="/wps/mycontenthandler/wcmrest/item/2ca1e0ce-3cc9-4810-b4d8-b28738286492/decline"/>
    ```

-   **default-presentation**

    ```
    <atom:links atom:rel="default-presentation" 
    atom:href="/wps/mycontenthandler/wcmrest/PresentationTemplate/50c90dd5-3062-4bd9-b495-84716a9eaf58"/>
    ```

-   **delete**

    ```
    <atom:links atom:rel="delete" 
    atom:href="/wps/mycontenthandler/!ut/p/digest!fdLLOZCYBjzgl3fVm_1pOA/wcmrest/ContentTemplate/9a30bf59-aad9-4fb0-99af-b621f09426a0"/>
    ```

-   **draft-of**

    ```
    <atom:links atom:rel="draft-of" 
    atom:href="/wps/mycontenthandler/wcmrest/LibraryDateComponent/edbcb837-e9f0-4766-a4ec-e7fcdef12ca7"/>
    ```

-   **draft**

    ```
    <atom:links atom:rel="draft" 
    atom:href="/wps/mycontenthandler/wcmrest/LibraryDateComponent/569537d4-79ac-4963-8b8c-6da57b8ddb55"/>
    ```

-   **edit**

    ```
    <atom:links atom:rel="edit" 
    atom:href="/wps/mycontenthandler/wcmrest/LibraryHTMLComponent/10d5f7ca-f2a2-46b8-b649-e76a1ee8edee"/>
    ```

-   **edit-media**

    ```
    <atom:links atom:rel="edit-media" 
    atom:type="text/html" 
    atom:href="/wps/mycontenthandler/wcmrest/LibraryHTMLComponent/10d5f7ca-f2a2-46b8-b649-e76a1ee8edee"/> 
    ```

-   **elements**

    ```
    <atom:links atom:rel="elements" 
    atom:href="wcmrest:Content/9d9b133b-1bab-40e7-a9bd-5b0ac86cf628/elements"/>
    ```

-   **library**

    ```
    <atom:links atom:rel="library" 
    atom:href="/wps/mycontenthandler/wcmrest/item/957a67f2-9d70-469f-9d43-f63f78508e48"/> 
    ```

-   **new-content**

    ```
    <atom:links atom:rel="new-content" 
    atom:href="/wps/mycontenthandler/!ut/p/digest!fdLLOZCYBjzgl3fVm_1pOA/wcmrest/ContentTemplate/9a30bf59-aad9-4fb0-99af-b621f09426a0/new-content"/>
    ```

-   **new-project**

    ```
    <atom:links atom:rel="new-project" 
    atom:href="/wps/mycontenthandler/!ut/p/digest!2ducXmyQyM0CM4Nev9jHqw/wcmrest/ProjectTemplate/9d7041d8-00aa-4433-90b3-bda2abdba3d4/new-project"/>
    ```

-   **new-projecttemplate**

    ```
    <atom:links atom:rel="new-projecttemplate" 
    atom:href="/wps/mycontenthandler/!ut/p/digest!2ducXmyQyM0CM4Nev9jHqw/wcmrest/Project/c53c443f-30ef-425d-95fb-4310f0a12b0b/new-projecttemplate"/>
    ```

-   **new-sitearea**

    ```
    <atom:links atom:rel="new-sitearea" 
    atom:href="/wps/mycontenthandler/!ut/p/digest!2ducXmyQyM0CM4Nev9jHqw/wcmrest/SiteAreaTemplate/80e3a5e1-f71a-480d-af3a-ad1fa3e86dc9/new-sitearea"/>
    ```

-   **next-stage**

    ```
    <atom:links atom:rel="next-stage" 
    atom:href="/wps/mycontenthandler/wcmrest/item/a93ce36a-7a0d-4bda-be1f-e8db09295c8b/next-stage"/>
    ```

-   **parent**

    ```
    <atom:links atom:rel="parent" 
    atom:href="/wps/mycontenthandler/wcmrest/item/fbcc2395-ca4c-44f2-9cb7-5f4ca359500f"/>
    ```

-   **presentation-override**

    ```
    <atom:links atom:rel="presentation-override" 
    atom:href="/wps/mycontenthandler/wcmrest/PresentationTemplate/50c90dd5-3062-4bd9-b495-84716a9eaf58"/>
    ```

-   **previous-stage**

    ```
    <atom:links atom:rel="previous-stage" 
    atom:href="/wps/mycontenthandler/wcmrest/item/e5846504-e4ae-496f-8f33-c06a8bfcb31d/previous-stage"/>
    ```

-   **project**

    ```
    <atom:links atom:rel="project" 
    atom:href="/wps/mycontenthandler/wcmrest/Project/35b9120a-17d0-4dcb-b0ba-b034e34b50a6"/>
    ```

-   **project-items**

    ```
    <atom:links atom:rel="project-items" 
    atom:href="/wps/mycontenthandler/!ut/p/digest!2ducXmyQyM0CM4Nev9jHqw/wcmrest/Project/c53c443f-30ef-425d-95fb-4310f0a12b0b/project-items"/>
    ```

-   **prototype**

    ```
    <atom:links atom:rel="prototype" 
    atom:href="/wps/mycontenthandler/!ut/p/digest!fdLLOZCYBjzgl3fVm_1pOA/wcmrest/ContentTemplate/9a30bf59-aad9-4fb0-99af-b621f09426a0/Prototype"/>
    ```

-   **prototype-properties**

    ```
    <atom:links atom:rel="prototype" 
    atom:href="/wps/mycontenthandler/!ut/p/digest!fdLLOZCYBjzgl3fVm_1pOA/wcmrest/ContentTemplate/9a30bf59-aad9-4fb0-99af-b621f09426a0/Prototype/properties"/>
    ```

-   **restart**

    ```
    <atom:links atom:rel="restart" 
    atom:href="/wps/mycontenthandler/wcmrest/item/e5846504-e4ae-496f-8f33-c06a8bfcb31d/restart"/>
    ```

-   **self**

    ```
    <atom:links atom:rel="self" 
    atom:href="/wps/mycontenthandler/!ut/p/digest!fdLLOZCYBjzgl3fVm_1pOA/wcmrest/ContentTemplate/9a30bf59-aad9-4fb0-99af-b621f09426a0"/>
    ```

-   **versioned-item**

    ```
    <atom:links atom:rel="versioned-item" 
    atom:href="/wps/mycontenthandler/wcmrest/item/c0b72020-10b7-4197-a436-62a1d94ce03f/version/1"/>
    ```

-   **versions**

    ```
    <atom:links atom:rel="versions" 
    atom:href="/wps/mycontenthandler/wcmrest/item/a93ce36a-7a0d-4bda-be1f-e8db09295c8b/versions"/>
    ```

-   **workflow-stage**

    ```
    <atom:links atom:rel="workflow-stage" 
    atom:href="/wps/mycontenthandler/wcmrest/item/52c43f50-7a4e-4ad2-818a-8975d2362219"/>
    ```

-   **workflow**

    ```
    <atom:links atom:rel="workflow" 
    atom:href="/wps/mycontenthandler/wcmrest/item/8d25860b-7a5c-4015-9cd5-bdcc60ce14bb"/>
    ```


**Parent topic:**[Reference material for the Web Content Manager REST service ](../wcm/wcm_rest_ref.md)

