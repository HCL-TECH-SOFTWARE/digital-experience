# Task webdav-deploy-zip-file 

Use this configuration task to manage theme artifacts and to deploy iWidgets. This task uploads archive or compressed files to portal WebDAV folders.

Address the target folder by using a corresponding DAV URI, for example `dav:fs-type1/iwidgets/myWidget/`.

**Note:**

-   By default, this task replaces the referenced target folder by the extracted contents of the referenced archive or compressed file. As a result, files or folders that are contained in the referenced WebDAV folder are deleted before the new content is added. If you want to avoid this behavior and merge the contents, set the optional `UpdateMode` parameter to the value `merge`. If you add this setting, the task merges the contents of the archive or compressed file into the content that exists at the target URI.
-   If you have a portal cluster installation, start the task on the primary node only. Starting the task on a secondary node has no effect.

If the WebDAV folder referenced by the target URI does not exist yet, the task creates it. In this case, make sure to have a trailing slash \( **/** \) at the end of the target URI.

-   **Description:**

    This task uploads archive or compressed files to portal WebDAV folders.

-   **Usage:**

    Use this task to upload archive or compressed files to portal WebDAV folders. Under z/OS®, the Customization Dialog uses this task to upload archive or compressed files to portal WebDAV folders.

-   **Syntax:**

    Start this task as part of the ConfigEngine script file as follows:

    -   **For UNIX™Linux™:**

        `./ConfigEngine.sh webdav-deploy-zip-file`

    -   ****For IBM® i:****

        -   **From the UserData directory:**

            `ConfigEngine.sh webdav-deploy-zip-file`

        -   **For Windows™:**

            `ConfigEngine.bat webdav-deploy-zip-file`

-   **Mandatory parameters to be specified on the command line or in the file wkplc.properties:**

    -   **WasUserid**

        The WebSphere® Application Server user ID.

    -   **WasPassword**

        The WebSphere® Application Server password.

    -   **PortalAdminId**

        The HCL Portal administrator user ID.

    -   **PortalAdminPwd**

        The HCL Portal administrator password.

-   **Mandatory parameters to be specified on the command line only:**

    -   **TargetURI**

        The URI of the WebDAV folder where you want the archive or compressed file to be extracted.

    -   **Path parameter:**

        use only one of the following two path parameters. They are mutually exclusive:

        -   **ZipFilePath**

            The file system path to the archive or compressed file. Do not use this parameter in combination with the parameter ZipFileClassPath.

        -   **ZipFileClassPath**

            The Java class path to the archive or compressed file. Do not use this parameter in combination with the parameter ZipFilePath.

-   **Optional parameters to be specified on the command line only:**

    -   **UpdateMode \(=replace\)**

        The default value for this parameter is replace. If you want to merge the content of the archive or compressed file with the content that exists at the target URI, set this parameter to the value merge. In this case files that do not yet exist are created, existing files are updated, and no files are deleted.

    -   **VirtualPortalContextVirtualPortalHost**

        Use one of these two parameters to identify the virtual portal. Only pages that are contained in the specified virtual portal are refreshed. If you omit this parameter, by default no virtual portal page layout is refreshed.

-   **Example:**

    You can upload the file foo.zip to the public folder of the file store by using either one of the following options:

    -   Copy the file foo.zip to the portal class path, for example AppServer/lib/ext.
    -   Copy the file myWidget.zip to the temporary directory /tmp on the portal server node.
    -   Run the configuration task `webdav-deploy-zip-file` as follows:

        ```
        ./ConfigEngine.sh webdav-deploy-zip-file 
             -DTargetURI=dav:fs-type1/iwidgets/myWidget/ 
             -DZipFilePath=/tmp/myWidget.zip
        ```


**Parent topic:**[Using WebDAV with HCL Portal](../admin-system/webdav.md)

