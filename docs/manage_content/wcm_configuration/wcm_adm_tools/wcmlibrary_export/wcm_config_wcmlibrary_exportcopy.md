# Exporting and importing a web content library copy

You can export the contents of a web content library to disk by creating a copy of the web content library. By working with an exported copy, you can import the copied library into the same web content server multiple times, resulting in a new library after each import without affecting previous copies. This is a quick way of creating new libraries that are fully populated with web content that you can easily adapt for other purposes.

Although many aspects are the same for the standard export and import and the copy export and import, there are some important differences:

-   When you export a library as a copy, new IDs are generated for all items in the library. This ensures that there are no conflicts with existing libraries or items when you import the copy into a web content server that already contains the original library. In this way, you can run multiple imports to the same web content server, resulting in a new library for each import.
-   The configuration tasks (`export-library-copy` and `import-library-copy`) that work on library copies, use properties that can either be added to the `wkplc.properties` file or manually appended to the command line, for easier scripting.

Follow these steps to export or import a copy of a web content library. The server that the data is being exported from is called the source server, and the server that the data is being imported into is called the target server.

-   **Exporting:**

    1.  Open a command prompt on the source server.

    2.  Run the `export-library-copy` task from the wp_profile_root/ConfigEngine` directory.

        -   **Windows™**

            `ConfigEngine.bat export-library-copy -DLibraryPath=path_to_export_file -DLibraryName=library_name_to_export -DWasPassword=password -DPortalAdminPwd=password`

        -   **UNIX™Linux™**

            `./ConfigEngine.sh export-library-copy -DLibraryPath=path_to_export_file -DLibraryName=library_name_to_export -DWasPassword=password -DPortalAdminPwd=password`

        The following properties must be specified either on the command line or in the `wkplc.properties` file.

        !!! note
            If you are specifying properties in the `wkplc.properties` file, it is not necessary to put quotation marks (`"`) around values that contain spaces. These quotation marks are only required when specifying property values on the command line.

        -   **LibraryPath**

            The directory path and file name that is used to store the exported library. The export process creates a compressed archive file, so it is recommended that you specify a file extension such as `.zip`. If you are exporting and importing across a network, this location can be a network drive accessible by both the source and target servers.

        -   **LibraryName**

            The name of the web content library to copy. If you are exporting multiple libraries, separate each library name by a semi-colon (`;`). For example, `LibraryName="Web Content;Samples"`.

        -   **WasUserid**

            The administrator ID for WebSphere® Application Server.

        -   **WasPassword**

            The administrator password for WebSphere® Application Server.

        -   **PortalAdminId**

            The administrator ID for HCL Portal.

        -   **PortalAdminPwd**

            The administrator password for HCL Portal.

        By default, this task is performed on the default virtual portal. To run this task on a different virtual portal, identify the virtual portal by adding one of the following parameters to the command line. Each parameter requires the prefix `-D` on the command line.

        -   **VirtualPortalHost**

            Specify the host name of the virtual portal. For example, `vp.example.com`.

            **Important:** If the host name of the virtual portal is the same as the host name of the default virtual portal, you must also specify the VirtualPortalContext property. You can specify the VirtualPortalHost property by itself only if the host name is unique.

        -   **VirtualPortalContext**

            Specify the virtual portal context that identifies the virtual portal. For example, `vp1`.

        Example commands:

        -   Windows: `ConfigEngine.bat export-library-copy -DLibraryPath=C:\\wcm_export\webcontent.zip -DLibraryName="Web Content" -DWasPassword=mypassword -DPortalAdminPwd=mypassword -DVirtualPortalHost=vp.example.com`
        -   UNIX™ and Linux™: .`/ConfigEngine.sh export-library-copy -DLibraryPath=/opt/wcm_export/webcontent.zip -DLibraryName="Web Content" -DWasPassword=mypassword -DPortalAdminPwd=mypassword -DVirtualPortalHost=vp.example.com`

    3.  Verify that this transfer step completed without errors. If any errors occurred, check the portal logs on the source server for extended diagnostic information.

-   **Importing:**

    1.  Open a command prompt on the target server.

    2.  Run the `import-library-copy` task from the wp_profile_root/ConfigEngine` directory.

        -   **Windows™**

            `ConfigEngine.bat import-library-copy -DLibraryPath=path_to_export_file -DLibraryName=library_name_to_import -DWasPassword=password -DPortalAdminPwd=password`

        -   **UNIX™ and Linux™**

            `./ConfigEngine.sh import-library-copy -DLibraryPath=path_to_export_file -DLibraryName=library_name_to_import -DWasPassword=password -DPortalAdminPwd=password`

        The following properties must be specified either on the command line or in the `wkplc.properties` file.

        !!! note
            If you are specifying properties in the `wkplc.properties` file, it is not necessary to put quotation marks (`"`) around values that contain spaces. These quotation marks are only required when specifying property values on the command line.

        **Differences in paths between versions:**

        When exporting from a version 6.1 system, you can specify a folder to export the library to:

        ```
        /opt/61/folder/jcr_root 
        ```

        When importing into version 8.0 from version 6.1, the jcr_root is not required to be specified in the import path:

        ```
        /opt/61/folder/
        ```

        When exporting from versions 7.0 or higher, the following structure is used:

        ```
        /opt/70/folder1/folder2
        ```

        When exported, `folder2` is automatically generated.

        When importing into version 8.0 from version 7.0 or higher, `folder2` is not required to be specified in the import path:

        ```
        /opt/70/folder1/
        ```

        -   **LibraryPath**

            The directory path and file name containing the library to be imported. If you are exporting and importing across a network, the value for this property can be the same file path that was used for the `LibraryPath` property during the export process. Otherwise, you must copy the exported data to a location accessible by the target server before attempting to import.

        -   **LibraryName**

            The name to use for the web content library copy that you are importing. If you are importing multiple libraries, separate each new library name by a semi-colon (`;`). For example, `LibraryName="Web Content Copy;Samples Copy"`.

        -   **LibraryExportName**

            The sequence of library names used during the original export, as defined by the `LibraryName` property specified for the export process. For example, `LibraryExportName="Web Content;Samples"`.

            This property enables the import process to correctly set the new library names for the imported copies, in conjunction with the `LibraryName` property specified for the import process. The `LibraryExportName` property is only required if you are importing multiple libraries at one time.

        -   **WasUserid**

            The administrator ID for WebSphere® Application Server.

        -   **WasPassword**

            The administrator password for WebSphere® Application Server.

        -   **PortalAdminId**

            The administrator ID for HCL Portal.

        -   **PortalAdminPwd**

            The administrator password for HCL Portal.

        By default, this task is performed on the default virtual portal. To run this task on a different virtual portal, identify the virtual portal by adding one of the following parameters to the command line. Each parameter requires the prefix `-D` on the command line.

        -   **VirtualPortalHost**

            Specify the host name of the virtual portal. For example, `vp.example.com`.

            **Important:** If the host name of the virtual portal is the same as the host name of the default virtual portal, you must also specify the VirtualPortalContext property. You can specify the VirtualPortalHost property by itself only if the host name is unique.

        -   **VirtualPortalContext**

            Specify the virtual portal context that identifies the virtual portal. For example, `vp1`.

        The following properties are optional and can be specified either on the command line or in the `wkplc.properties` file:

        -   **LibraryTitle**

            The title to use for the web content library copy that you are importing. If you are importing multiple libraries, separate each new library title by a semi-colon (`;`). For example, `LibraryTitle="Web Content Title;Samples Title"`.

        -   **LibraryDescription**

            The description to use for the web content library copy that you are importing. If you are importing multiple libraries, separate each new library description by a semi-colon (`;`). For example, `LibraryDescription="Copy of Web Content library;Copy of Samples library"`.

        -   **LibraryNameTextProvider**

            This property specifies the name of the text provider to use to locate the translated title of the library that you are importing. If you are importing multiple libraries with different text providers, separate each provider name by a semi-colon (`;`). For example, `LibraryNameTextProvider=provider1;provider2`.

        -   **LibraryNameTextProviderKey**

            This property specifies the key within the associated text provider that identifies the translated title of the library that you are importing. If you are importing multiple libraries with different translated titles, separate each key by a semi-colon \(`;`\). For example, `LibraryNameTextProviderKey=key1;key2`.

        -   **LibraryBaseLocale**

            The locale used when importing the web content library copy.

        Example commands:

        -   Windows: `ConfigEngine.bat import-library-copy -DLibraryPath=C:\\wcm_import\webcontent.zip -DLibraryName="Web Content Copy" -DLibraryTitle="Web Content Copy Title" -DLibraryDescription="Copy of Web Content library" -DLibraryNameTextProvider=provider -DLibraryNameTextProviderKey=key -DLibraryBaseLocale=en -DWasPassword=mypassword -DPortalAdminPwd=mypassword`
        -   UNIX and Linux: `./ConfigEngine.sh import-library-copy -DLibraryPath=/opt/wcm_import/webcontent.zip -DLibraryName="Web Content Copy" -DLibraryTitle="Web Content Copy Title" -DLibraryDescription="Copy of Web Content library" -DLibraryNameTextProvider=provider -DLibraryNameTextProviderKey=key -DLibraryBaseLocale=en -DWasPassword=mypassword -DPortalAdminPwd=mypassword`

    3.  Verify that the imported libraries have been imported by reviewing the list of libraries that are listed in the web content libraries section of the administration portlet on the target server. If any errors occurred, check the portal logs on the target server for extended diagnostic information.

    4.  Reset the web content event log.


## Example commands for exporting and importing multiple libraries

When exporting and importing multiple web content libraries with a single command, the following considerations apply:

-   For properties such as `LibraryName` that reference multiple libraries, separate the respective values for that property with a semi-colon (`;`).
-   The value of the `LibraryExportName` property must match the value of the `LibraryName` property used during the export process to indicate the sequence of libraries.

-   **Windows™**

    -   Export: `ConfigEngine.bat export-library-copy -DLibraryPath=C:\\wcm_export\webcontent.zip -DLibraryName="Web Content;Samples" -DWasPassword=mypassword -DPortalAdminPwd=mypassword`
    -   Import: `ConfigEngine.bat import-library-copy -DLibraryPath=C:\\wcm_import\webcontent.zip -DLibraryName="Web Content Copy;Samples Copy" -DLibraryExportName="Web Content;Samples" -DLibraryTitle="Web Content Copy Title;Samples Copy Title" -DLibraryBaseLocale=en -DWasPassword=mypassword -DPortalAdminPwd=mypassword`

-   **UNIX™ and Linux™**

    -   Export: `./ConfigEngine.sh export-library-copy -DLibraryPath=/opt/wcm_export/webcontent.zip -DLibraryName="Web Content;Samples" -DWasPassword=mypassword -DPortalAdminPwd=mypassword`
    -   Import: `./ConfigEngine.sh import-library-copy -DLibraryPath=/opt/wcm_import/webcontent.zip -DLibraryName="Web Content Copy;Samples Copy" -DLibraryExportName="Web Content;Samples" -DLibraryTitle="Web Content Copy Title;Samples Copy Title" -DLibraryBaseLocale=en -DWasPassword=mypassword -DPortalAdminPwd=mypassword`




???+ info "Related information"
    - [WebSphere® Integrated Solutions Console](../../../../deployment/manage/portal_admin_tools/WebSphere_Integrated_Solutions_Console.md)
