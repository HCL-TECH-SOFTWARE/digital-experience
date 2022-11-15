# Using WebDAV file store

You can use WebDAV to work with the portal themes.

## WebDAV overview and entry point URL

WebDAV is defined by RFC2518 as an HTTP extension framework with a plug point for the access and management of hierarchical data. For example, in content management systems. WebDAV stores the data in collections. You can work with the data in a user interface view that is similar to that of a file system. A folder represents a WebDAV collection. Various tools are available for integrating WebDAV resources into the client file system. Users can use these tools to view and modify resources that they can access with WebDAV.

!!! note
    The HTTP Basic Authentication Trust Association Interceptor (TAI) must be enabled to use WebDAV in HCL Portal. This TAI is enabled by default. See the related links for information.

You can obtain the entry point URL to the WebDAV file store from the service document under the URL /wps/mycontenthandler/!ut/p/model/service-document. The service document contains the top-level access point as follows:

```
<app:collection href="/webdav/!ut/p/dav/fs-type1/">
                              <atom:title>fs-type1</atom:title>
                              <app:categories fixed="yes">
                              . . . . . 
                              <atom:category term="webdav"/>
                              <atom:category term="filestore"/>
                              . . . . . 
                              </app:categories>
                              </app:collection>
                         
```

The entry point URL for themes is as follows:

```
http://server:port/[PortalServer_root](../reference/wpsdirstr.md#wp_root)/mycontenthandler/dav/fs-type1/
```

Examples of URLs for themes are as follows:

```
http://www.my_company.com:10027/wps/mycontenthandler/dav/fs-type1/
```

-   For theme-related resources:

    ```
    http://my_company.com:10027/wps/mycontenthandler/dav/fs-type1/themes/
    ```

-   For skin-related resources:

    ```
    http://my_company.com:10027/wps/mycontenthandler/dav/fs-type1/skins/
    ```


If you want to authenticate against a specific virtual portal, you can identify the target virtual portal either by its host name or its URL context. Examples:

-   To authenticate to the virtual portal identified by the host name `vp.mycompany.com` and then connect to the themes folder, use the following URL entry point:

    ```
    http://vp.mycompany.com:10027/wps/mycontenthandler/dav/fs-type1/themes/
    ```

-   To authenticate to the virtual portal identified by the URL context `vp1` and then connect to the themes folder, use the following URL entry point:

    ```
    http://localhost:10027/wps/mycontenthandler/vp1/!ut/p/dav/fs-type1/themes/
    ```


## Folder structure and reserved folder names

The fs-type1 WebDAV entry points provide the following set of predefined root folders that are used by themes:

-   themes
-   skins
-   layout-templates
-   common-resources
-   iwidgets

The fs-type1 WebDAV entry points also provide the following set of predefined root folders. You can access them by using the Remote Model function that is provided by the Enabler API:

-   public
-   users

The fs-type1 WebDAV entry points provide the following internal folder:

-   system

None of the folders that are listed here can be deleted, not even by an administrator.

The two sets of folders differ in the access control policy that guards access to the resources contained in those folders. See the following sections for details.

## Theme folders

The following list shows the folder structure for the themes. Each folder represents a WebDAV collection. You administer write access to the theme folders with the virtual resource THEME MANAGEMENT provided by portal access control.

-   **/themes**

    Use this folder to store resources that are associated to themes, such as theme templates. Typically, each subfolder represents one theme.

-   **/skins**

    Use this folder to store global skins. Typically, each subfolder of this folder represents one global skin.

-   **/layout-templates**

    Use this folder to store templates for layouts that can be used by individual themes. Typically, each subfolder represents one layout template.

-   **/common-resources**

    Use this folder to share common resources between different themes, so that they can be managed in a single place.

-   **/iWidgets**

    Use this folder to place widgets into it.


WebDAV prevents the deletion of these folders. Even users with administrator rights cannot delete these folders and the data in them.

## Managing access control for Page Builder theme folders

-   All users have view access to all resources in these folders. It includes both anonymous users and authenticated users.

    To give users write access to resources contained in these folders, assign the users MANAGER role on the virtual resource THEME MANAGEMENT in portal access control. Managers can create, modify, or delete such resources


## Assigning access control to users and managers for theme resources in WebDAV

To allow non-administrator users to update or modify existing files do the following steps.

1.  Open a command prompt and change to the wp_profile_root/ConfigEngine directory.
2.  Run the following ConfigEngine task.
    -   AIX® and Linux:
    -   Windows™: `ConfigEngine.bat export-nodes -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin -Dquery="/filestore/fs-type1/themes" -Dwp.content.repository.output.dir="c:\\temp\\jcr"`
3.  Edit the file that was exported in the c:\\temp\\jcr directory. Add the manager role to a user or group by adding the following code:

    -   Code to add the manager role to a user:

        ```
        <icm:role icm:actions="actionset:Manager,actions:Traverse,View,Edit,Add_Child,Delete,Join,">                                            
                                                     <icm:principal icm:name="uid=testuser,o=defaultwimfilebasedrealm" icm:type="USER" />                                                  
                                                     </icm:role>
        ```

    -   Code to add the manager role to a group:

        ```
        <icm:role icm:actions="actionset:Manager,actions:Traverse,View,Edit,Add_Child,Delete,Join,">
                                                     <icm:principal icm:name="cn=mygroup,o=defaultWIMFileBasedRealm" icm:type="USER_GROUP" />
                                                     </icm:role>
        ```

    Add it after the `<icm:owner>` element. See the following complete code snippet for reference.

    ```
    <icm:node>
                                       <icm:access>                                                         
                                       <icm:wps>                                                           
                                       <icm:owner>                                                        
                                       <icm:principal icm:name="uid=wpsadmin,o=defaultwimfilebasedrealm" icm:type="USER" />                                                   
                                       </icm:owner>                                                       
                                       <icm:role icm:actions="actionset:Manager,actions:Traverse,View,Edit,Add_Child,Delete,Join,">                                             
                                       <icm:principal icm:name="uid=testuser,o=defaultwimfilebasedrealm" icm:type="USER" />                                                   
                                       </icm:role>                                                          
                                       </icm:wps>                                                          
                                       </icm:access>                                                        
                                       </icm:node>       
    ```

4.  Import the file with the following ConfigEngine task.
    -   AIX and Linux:
    -   Windows: `ConfigEngine.bat import-nodes -DWasPassword=wpsadmin -DPortalAdminPwd=wpsadmin -Dwp.content.repository.input.dir="c:\\temp\\jcr"`

## Other folders

The following list shows extra folders. Each of these folders represents a WebDAV collection. The access control policy for them is hard-coded as described for each folder.

-   **/public**

    All authenticated users have read and write access to this folder.

    Anonymous users have read access only.

-   **/users**

    All authenticated users have read access only to this folder.

    Anonymous users have read access only.

-   **/users/user_name**

    Only the user `user_name` has access to these files. This folder is created for the individual user `user_name` when the user accesses the WebDAV file store for the first time.

    !!!note
        To have human readable folder names, the portal uses the user IDs of the individual users as the names for the users' folders `user_name`. Internally, the portal uses the VMM ID of the user, so data does not need to be moved when the user name is changed.

    If you want to programmatically find the URL entry point to a folder for the current user, you can look into the services document. The access point for user-specific data is provided as follows:

    ```
    <app:collection href="/webdav/!ut/p/dav/fs-type1/users/<username>">
                                  <atom:title>fs-type1-user</atom:title>
                                  <app:categories fixed="yes">
                                  . . . . .
                                  <atom:category term="webdav"/>
                                  <atom:category term="filestore"/>
                                  <atom:category term="user"/>
                                  . . . . .    
                                  </app:categories>
                                  </app:collection>
    ```

-   **/users/user_name/public**

    The user `user_name` has read and write access to this folder. This folder contains content that the user `user_name` shared with other users. Portal access control mapping: inherited.

    All authenticated users have read access to this folder.

    Anonymous users have read access to this folder.

    All other subfolders of /users/user_name can only the accessed by the user `user_name`.

-   **/system**

    The system folder is reserved for system internal information. Administrators can view this folder in WebDAV. Other portal users cannot view this folder. Portal access control mapping: None.


## File store cache control

The WebDAV file store supports serving timeout values for HTTP Cache Header entries.

You can use regular expressions to specify the timeout value for elements in the file store folder structure that match the regular expression. You need to add the following two custom properties to the WP Config Service resource environment provider with the following key = value properties:

```
filestore.cache.expiration.id.re=regular expression 
                         filestore.cache.expiration.id.seconds=value
```

The id value can consist of an arbitrary string. It is used only to establish the mapping between a regular expression and its associated timeout value. If there are multiple regular expressions that match any file store resource, the maximum of the associated timeout values are used. Examples:

1.  All items under the /themes folder have an expiration time of 1800 seconds:

    ```
    filestore.cache.expiration.0.re=themes/.* 
                                       filestore.cache.expiration.0.seconds=1800
    ```

2.  All items of a certain resource type, such as jpg or gif have an expiration time of 6000 seconds:

    ```
    filestore.cache.expiration.1.re=.*.jpg|.*.gif 
                                       filestore.cache.expiration.1.seconds=6000
    ```

    All CSS files in the themes folder have an expiration time of 8000 seconds:

    ```
    filestore.cache.expiration.2.re=themes/.*.css 
                                       filestore.cache.expiration.2.seconds=8000
    ```


## Supported HTTP methods

WebDAV file store supports the following HTTP methods:

-   **PROPFIND**

    This method allows portal users to find out details about the resource hierarchy, such as the WebDAV collection structure. Users can also find details about resources, such as their names, sizes, and dates of last modification.

-   **MKCOL**

    This method allows users to create new folders, that are WebDAV collections.

-   **GET**

    This method allows users to retrieve resources on which they have at least View role access rights.

-   **HEAD**

    This method allows users to retrieve HTTP headers of resources on which they have at least View role access rights.

-   **POST**

    This method allows users to upload new resources.

-   **DELETE**

    This method allows users to delete resources or folders, that is WebDAV collections.

-   **PUT**

    This method allows users to update resources, such as documents or images in a folder.

-   **COPY**

    This method allows users to copy resources or folders, that is WebDAV collections.

-   **MOVE**

    This method is used to move or rename resources or folders, that is WebDAV collections.



???+ info "Related information:"
    - [Enabling HTTP Basic Authentication for simple clients](../../../../../deployment/manage/security/basic_auth/index.md)
    - [Embedding the HCL Portal 8.5 site toolbar dynamically without a dynamic content spot](../../../../../deployment/manage/migrate/next_steps/enable_func_migrated_portal/enable_func_migrated_themes/add_85_toolbar/themeopt_cust_toolbar_dynamic_embedding.md)


