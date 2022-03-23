# Creating the initial release 

When you want to stage your initial release to another server, you must build the initial release Portal Application Archive \(PAA\) file from your source server.

The initial and differential release PAA file contains all the pertinent items that are related to your release, including the following items:

-   Portal Server artifacts
-   Web Content Manager Libraries \(optional: use the exportWcmData parameter\)
-   Shared Libraries \(optional: use the sharedAppResourcesRootDir and or the sharedExtResourcesRootDir parameters\)
-   WebDAV files for themes/skins \(optional: use the exportWebDavTheme parameter\)
-   Portlet WAR filesEAR files \(optional: use the appsToExtract parameter\)
-   WebSphere® Application Server Resource Environment Providers \(optional: use the exportREP parameter\)
-   Vanity URLs

1.  Install, configure, and upgrade HCL Portal on the staging server. This step includes database and security configurations.

2.  Develop a release on the staging server. As part of this step, you might have pages, portlets, themes, skins, personalization rules, web content, and other items.

3.  Open a command line and change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

4.  Run the following command to create a Portal Application Archive \(PAA\) file for your initial release, including PAA files for all of your virtual portals:

    -   AIX® HP-UX Linux™ Solaris:

        ```
        ./ConfigEngine.sh build-initial-release-paa -DdestPAADir=directory\_to\_store\_PAA -DWasPassword=password -DPortalAdminPwd=password
        ```

    -   IBM® i:

        ```
        ConfigEngine.sh build-initial-release-paa -DdestPAADir=directory\_to\_store\_PAA -DWasPassword=password -DPortalAdminPwd=password
        ```

    -   Windows™:

        ```
        ConfigEngine.bat build-initial-release-paa -DdestPAADir=directory\_to\_store\_PAA -DWasPassword=password -DPortalAdminPwd=password
        ```

    -   z/OS®:

        ```
        ./ConfigEngine.sh build-initial-release-paa -DdestPAADir=directory\_to\_store\_PAA -DWasPassword=password -DPortalAdminPwd=password
        ```

    **Note:** The directory that you enter for the destPAADir parameter must be an existing directory.

    You can add the following parameters to customize the build-initial-release-paa task:

    -   **sharedAppResourcesRootDir**

        The directory for .jar files, classes, and compressed files that are then stored in the shared/app directory.

    -   **sharedExtResourcesRootDir**

        The directory for .jar files, classes, and compressed files that are then stored in the shared/ext directory.

    -   **appsToExtract**

        A comma-separated list of applications to extract from the source environment. For example, you might extract the YourTheme.ear,MyApp.ear,CustWorkflow.ear files. They are then packaged in the PAA file.

    -   **exportWebDavTheme**

        Enter a value of true to download and include the themes.zip file from WebDAV.

    -   **exportWcmData**

        Enter a value of true to export all Web Content Manager libraries. The export-wcm-data task is run when you use exportWcmData.

        **Restriction:** Do not use this parameter in place of syndicating the libraries from the target environment.


**Parent topic:**[Creating and deploying the initial release ](../deploy/dep_initial.md)

**Next topic:**[Preparing the servers for initial staging ](../deploy/dep_prep.md)

**Related information**  


[XML configuration reference ](../admin-system/adxmlref.md)

[Working with the XML configuration interface](../admin-system/adxmltsk.md)

[Synchronizing the vanity URL database ](../wcm/van_url_cfgtsk_sync_db.md)

[Using the XML configuration interface to work with virtual portals](../admin-system/advp_xml.md)

[Exporting and importing a web content library](../wcm/wcm_config_wcmlibrary_export.md)

[Transferring portal configuration data by using the XML configuration interface](../admin-system/adxmltsk_use.md)

[Staging Personalization rules to production](../deploy/pzn_stage_prod.md)

