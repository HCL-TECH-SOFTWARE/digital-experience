# Creating the initial release

When you want to stage your initial release to another server, you must build the initial release Portal Application Archive (PAA) file from your source server.

The initial and differential release PAA file contains all the pertinent items that are related to your release, including the following items:

-   Portal Server artifacts
-   Web Content Manager Libraries (optional: use the exportWcmData parameter)
-   Shared Libraries (optional: use the sharedAppResourcesRootDir and or the sharedExtResourcesRootDir parameters)
-   WebDAV files for themes/skins (optional: use the exportWebDavTheme parameter)
-   Portlet WAR filesEAR files (optional: use the appsToExtract parameter)
-   WebSphere® Application Server Resource Environment Providers (optional: use the exportREP parameter)
-   Vanity URLs

1.  Install, configure, and upgrade HCL Portal on the staging server. This step includes database and security configurations.

2.  Develop a release on the staging server. As part of this step, you might have pages, portlets, themes, skins, personalization rules, web content, and other items.

3.  Open a command line and change to the wp_profile_root/ConfigEngine directory.

4.  Run the following command to create a Portal Application Archive (PAA) file for your initial release, including PAA files for all of your virtual portals:

    -   AIX® and Linux™:

        ```
        ./ConfigEngine.sh build-initial-release-paa -DdestPAADir=directory_to_store_PAA -DWasPassword=password -DPortalAdminPwd=password
        ```

    -   Windows™:

        ```
        ConfigEngine.bat build-initial-release-paa -DdestPAADir=directory\_to\_store\_PAA -DWasPassword=password -DPortalAdminPwd=password
        ```

    !!!note
        The directory that you enter for the destPAADir parameter must be an existing directory.

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

???+ info "Related information"  
    -   [XML configuration reference](../../../manage/portal_admin_tools/xml_config_interface/xml_config_ref/adxmlref.md)<br>
    -   [Working with the XML configuration interface](../../../manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/index.md)<br>
    -   [Synchronizing the vanity URL database](../../../../manage_content/wcm_delivery/vanity_url/adm_vanity_url/van_url_cfgtsk_sync_db.md)<br>
    -   [Using the XML configuration interface to work with virtual portals](../../../../build_sites/virtual_portal/vp_reference/vp_command_ref/advp_xml.md)<br>
    -   [Exporting and importing a web content library](../../../../manage_content/wcm_configuration/wcm_adm_tools/wcmlibrary_export/wcm_config_wcmlibrary_export.md)<br>
    -   [Transferring portal configuration data by using the XML configuration interface](../../../manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/using_xml_config_cmd_line/transfer_portal_cfg_using_xml_config_int/index.md)<br>
    -   [Staging Personalization rules to production](../../../../manage_content/pzn/pzn_stage_prod.md)

