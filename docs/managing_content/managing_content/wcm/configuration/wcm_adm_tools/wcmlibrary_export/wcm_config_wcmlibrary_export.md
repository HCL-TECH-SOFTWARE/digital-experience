# Exporting and importing a web content library

You can export the contents of a web content library to disk and import this data into another web content server. Use this feature to make a backup copy of a web content library, and to move data between servers. This function cannot be used to send updates, deletes, and moves. It is only suitable for populating new items.

Follow these steps to export and import a web content library. The server that the data is being exported from is called the source server, and the server that the data is being imported into is called the target server.

1.  **Exporting:**

    1.  Log in to the WebSphere® Integrated Solutions Console on the source server.

    2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **WCM WCMConfigService** \> **Custom properties**.

        **Cluster note:** If you are using this web content server as part of a cluster, ensure that you use the WebSphere Integrated Solutions Console for the deployment manager when you are manipulating configuration properties.

    3.  Create or update the export properties.

        -   **export.directory**

            The folder on the source server where the exported data is written. The export task creates a subfolder with the name corresponding to library name within this folder for each exported library. The default value is `${USER_INSTALL_ROOT}/PortalServer/wcm/ilwwcm/system/export`.

        -   **export.libraryname**

            The name of the web content library to transfer. You can export multiple libraries. On Windows™, separate each library by a semi-colon. For example: `Lib_1;Lib_2;Lib_3`. On UNIX™Linux™-based systems, separate each library by a backward slash and semi-colon \(\\;\). For example: `Lib_1\;Lib_2\;Lib_3`.

            **Note:** The library names that are specified in this parameter must be the original name of the library, not the localized name. Click the **Administration menu** icon. Then, click **Portal Content** \> **Web Content Libraries**. You can view the original name and view the edit settings of the library.

        -   **export.singledirectory**

            If set to `true`, multiple libraries are written into a single folder that is specified by the `export.directory` property. If set to `false`, the export task created sub-directories with the name corresponding to each exported library names. For example, if `export.directory` is specified as `C:\export` and the library name is `Web Library`, the export task saves the exported library under `C:\export\Web Library`. Set this property to `true` when you are exporting multiple libraries that contain references between each library.

        **Note:** You must restart your server any time you change these settings.

    4.  Export the web content library from the source server:

        -   Open a command prompt on the source server.
        -   Run the export-wcm-data task from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` folder.

            -   **IBM® i**

                ConfigEngine.sh export-wcm-data -DWasPassword=password -DPortalAdminPwd=password

            -   **UNIX™Linux™**

                ./ConfigEngine.sh export-wcm-data -DWasPassword=password -DPortalAdminPwd=password

            -   **Windows™**

                ConfigEngine.bat export-wcm-data -DWasPassword=password -DPortalAdminPwd=password

            -   **z/OS®**

                ./ConfigEngine.sh export-wcm-data -DWasPassword=password -DPortalAdminPwd=password

            By default, this task is done on the base portal. To run this task on a different virtual portal, identify the virtual portal by adding one of the following parameters to the command line. Each parameter requires the prefix `-D` on the command line.

            -   **`VirtualPortalHostName`**

                Specify the host name of the virtual portal. For example, `vp.example.com`.

            -   **`VirtualPortalContext`**

                Specify the virtual portal context that identifies the virtual portal. For example, `vp1`.

        **Note:**

        -   You can override the `export.directory` property that is defined in the `WCM WCMConfigService` service by using the -Dexport.directory parameter. For example: export-wcm-data -Dexport.directory=c:\\export
        -   You can override the `export.singledirectory` property that is defined in the `WCM WCMConfigService` service by using the -Dexport.singledirectory parameter. For example: export-wcm-data -Dexport.singledirectory=false saves the exported libraries under different directories.
        -   You can override the `export.libraryname` property that is defined in the `WCM WCMConfigService` service by using the -Dexport.libraryname parameter. For example: export-wcm-data -Dexport.libraryname=libraryname
        -   You can override the `export.libraryname` property that is defined in the `WCM WCMConfigService` service by adding the option -Dexport.allLibraries=true parameter to export all libraries. If this option is used, the export might take a long time to finish.
        **Important:** To ensure that your exported libraries can be successfully imported, do not change the names of any of the folders or files within the exported data.

    5.  Verify that this transfer step completed without errors. If any errors occurred, check the portal logs on the target server for extended diagnostic information.

    6.  Verify that the export folder was populated correctly, including any sub-directories for each exported library.

2.  **Importing:**

    1.  Log in to the WebSphere Integrated Solutions Console on the target server.

    2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **WCM WCMConfigService** \> **Custom properties**.

        **Cluster note:** If you are using this web content server as part of a cluster, ensure that you use the WebSphere Integrated Solutions Console for the deployment manager when you are manipulating configuration properties.

    3.  Create or update the `import.directory` property.

        This directory is the folder where the exported data is read when you are importing the data to the target server. If you are exporting and importing across a network, this folder can be the same folder as the one specified in `export.directory` property. Otherwise, you must copy the exported data from the location that is specified in the `export.directory` property to the location specified in the `import.directory` property before you run the import task in step 2.

        -   If you specified `true` for the `export.singledirectory` property when you exported your libraries, specify the parent folder where all the exported libraries are located.
        -   If you specified `false` for the `export.singledirectory` property when you exported your libraries, or if you want to import only specific libraries, then you must list the folder of each library, separated by semicolons. For example: `c:\import\Lib1;c:\import\Lib2;c:\import\Lib3`. If you are using Linux use `\;` to separate each library, such as `/opt/importdata/Lib1\;/opt/importdata/Lib2\;/opt/importdata/Lib3`.
        **Note:** You must restart your server any time you change this setting.

    4.  Import the web content library to the target server.

        -   Open a command prompt on the target server.
        -   Run the import-wcm-data task from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory.

            -   **IBM® i**

                ConfigEngine.sh import-wcm-data -DWasPassword=password -DPortalAdminPwd=password

            -   **UNIX™Linux™**

                ./ConfigEngine.sh import-wcm-data -DWasPassword=password -DPortalAdminPwd=password

            -   **Windows™**

                ConfigEngine.bat import-wcm-data -DWasPassword=password -DPortalAdminPwd=password

            -   **z/OS®**

                ./ConfigEngine.sh import-wcm-data -DWasPassword=password -DPortalAdminPwd=password

            By default, this task is done on the base portal. To run this task on a different virtual portal, identify the virtual portal by adding one of the following parameters to the command line. Each parameter requires the prefix `-D` on the command line.

            -   **`VirtualPortalHostName`**

                Specify the host name of the virtual portal. For example, `vp.example.com`.

            -   **`VirtualPortalContext`**

                Specify the virtual portal context that identifies the virtual portal. For example, `vp1`.

            **Note:** You can override the `import.directory` property that is defined in the `WCM WCMConfigService` service by using the -Dimport.directory parameter. For example: import-wcm-data -Dimport.directory=c:\\import\\Lib1;c:\\import\\Lib2;c:\\import\\Lib3.

            **Differences in paths between versions:**

            When you are exporting from a version 6.1 system, you can specify a folder to export the library to:

            ```
            /opt/61/folder/jcr\_root 
            ```

            When you are importing into version 8.0 from version 6.1, the jcr\_root is not required to be specified in the import path:

            ```
            /opt/61/folder/
            ```

            When you are exporting from versions 7.0 or higher, the following structure is used:

            ```
            /opt/70/folder1/folder2
            ```

            When exported, `folder2` is automatically generated.

            When you are importing into version 8.0 from version 7.0 or higher, `folder2` is not required to be specified in the import path:

            ```
            /opt/70/folder1/
            ```

    5.  Verify that the imported libraries are imported by reviewing the list of libraries that are listed in the web content libraries section of the administration portlet on the target server. If any errors occurred, check the portal logs on the target server for extended diagnostic information.

    6.  Reset the web content event log.

    7.  Restart the server.


**Troubleshooting:**

-   If items are exported and imported twice between the same servers, and items are moved or deleted between the first and second export and import, then you must manually delete these items from the target server before you transfer the items again. If this step is not done, an error like this example is generated:

    `javax.jcr.ItemExistsException: A node already exists with uuid: 376dba00408608aea231b2c714d0bda6 at path: /contentRoot/icm:libraries[10]/F1/F3/test1.ort`

-   If you receive 500 errors on ext2 and ext3 versions of Linux, you exceeded the number of children that a parent folder can hold. You cannot store more than 32768 children under one folder on ext2 and ext3 versions of Linux. Move some content items out of the affected site area to another site area so that none of your site areas contain more than 32768 children under one folder and then try exporting again. You can move the content items back to the correct site areas when you import the library.

**Parent topic:**[Exporting and importing web content libraries](../wcm/wcm_config_wcmlibrary_export_main.md)

**Related information**  


[Staging to production list](../deploy/dep_stage_check.md)

[Creating the initial release](../deploy/dep_cir.md)

[Preparing the servers for initial staging](../deploy/dep_prep.md)

[Deploying the initial release](../deploy/dep_deploy.md)

[Deploying the differential release](../deploy/dep_deploy_diff.md)

[Portal administration tools](../admin-system/admtools.md)

