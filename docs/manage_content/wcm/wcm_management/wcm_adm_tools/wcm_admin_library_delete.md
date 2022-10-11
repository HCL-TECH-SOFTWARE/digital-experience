# Deleting libraries by using the delete libraries tool

Use the delete libraries tool to delete multiple libraries, even when references exist to other libraries.

!!!note
    Only the libraries that are specified in the URL are deleted. For example, if you are deleting Library A and Library B, but references exist to Library C, only Library A and Library B are deleted. Library C would then contain broken references to the deleted libraries. Remove references to other libraries before you run this tool.

-   Back up your database before the module is run as a precaution.
-   You must first enable the delete libraries tool by adding the following parameters to the **WCM WCMConfigService** service by using the WebSphere® Integrated Solutions Console:

    -   `connect.businesslogic.module.deletemultiplelibraries.class=com.aptrix.pluto.util.DeleteMultipleLibrariesModule`
    -   `connect.businesslogic.module.deletemultiplelibraries.remoteaccess=true`
    -   `connect.businesslogic.module.deletemultiplelibraries.autoload=false`

    You must also edit the **connect.businesslogic.module** property, and add **deletemultiplelibraries** to the end of the comma-separated list.


1.  Log in to the portal as an administrator.

2.  Open the following URL in the browser and specify which libraries you want to delete:

    ```
    http://[HOST]:[PORT]/wps/wcm/myconnect/?MOD=deletemultiplelibraries&libraries=libraryname1,libraryname2
    ```

    There are two methods available when the tool is run on a virtual portal:

    -   **Using the URL context of a virtual portal:**

        ```
        http://[HOST]:[PORT]/wps/wcm/myconnect/[url_context]?MOD=deletemultiplelibraries&libraries=libraryname1,libraryname2
        ```

    -   **Using the host name of a virtual portal:**

        ```
        http://[Virtual_HOST]:[PORT]/wps/wcm/myconnect?MOD=deletemultiplelibraries&libraries=libraryname1,libraryname2
        ```


## Running the tool using the configuration engine

Run the `run-wcm-admin-task-delete-libraries` task from the wp_profile_root/ConfigEngine directory.

-   **UNIX™and Linux™**

    `./ConfigEngine.sh run-wcm-admin-task-delete-libraries -Dlibraries="library1,library2" -DPortalAdminId=username -DPortalAdminPwd=password`

-   **Windows™**

    `ConfigEngine.bat run-wcm-admin-task-delete-libraries -Dlibraries="library1,library2" -DPortalAdminId=username -DPortalAdminPwd=password`

!!! note
    When you run this task on a virtual portal, you must add either `-DVirtualPortalHostName`=name or `-DVirtualPortalContext=context` to the command.


