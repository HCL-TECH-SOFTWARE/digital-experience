# Staging to production list

The items in the production list can be included in the staging to production Portal Application Archive \(PAA\) file. However, if you are not using the staging to production PAA file, use this list to determine the tools that are required to move your artifacts from the staging server to the production server. You can also use this list to determine what tool to use for the items not included in the staging to production PAA file.

Within the Staging to production documentation, the following directories are the root directories where you place your subdirectories:

-   For the base portal: WebSpherePortal
-   For the Virtual Portals: object_id

## Themes and skins

Choose one of the following static resource options:

-   **Static resources in the WebDAV file store**

    Follow the staging to production documentation to export and import your themes and skins. For more information, see [Developing themes for a production portal](../../../../build_sites/themes_skins/developing_theme/index.md). To include these resources in your initial or differential release PAA, use the -DexportWebDavTheme=true parameter.

    -   **Directory structure**

        Use this method if you are building a custom PAA. Compress the files that contain static theme content and place them in the content/webdav directory. This placement allows the themes to be automatically uploaded to the dav:fs-type1/themes/ directory in the WebDAV file store.

-   **Static resources in an .ear file**

    Follow the staging to production documentation to export and import your themes and skins. Read [Developing themes for a production portal](../../../../build_sites/themes_skins/developing_theme/index.md). To include these resources in your initial or differential release PAA, use the -DappsToExtract parameter.

    -   **Directory structure**

        Use this method if you are building a custom PAA. Place the theme .ear files in the InstallableApps/ear directory.


## Portal Server artifacts

The following information is a list of portal server artifacts:

-   action
-   client
-   component
-   content-node (pages)
-   credential-segment
-   device-class
-   global-settings
-   language
-   markup
-   resource-type
-   skin (definition)
-   task
-   theme (definition)
-   services-settings
-   servlet (definition)
-   portal
-   portlet-app
-   portlet
-   portletinstance
-   proxy-config
-   transformation
-   transformation-app
-   transformationinstance
-   url-mapping-context
-   virtual-resource
-   web-app
-   wsrp-producer
-   cross-page-wire
-   wire

These artifacts are included by default in your initial or differential release PAA. If you are building a custom PAA, use an XMLAccess.xml file for installation or uninstallation.

-   **XMLAccess .xml files (for installation)**

    Place these files in the following directory: content/xmlaccess/install.

    !!!note
        These files might contain the statements to install portlets and transformations out of the war directory and to create pages.

-   **XMLAccess .xml files (for uninstallation)**

    Place these files in the following directory: content/xmlaccess/uninstall.

    !!!note
        These files might contain the statements to remove portlets, transformations, and pages.

-   **References**

    For information about the portal XML configuration interface and how to work with it, read *Working with the XML configuration interface* and *XML configuration reference*.


## WebDAV files

-   **Directory**

    Use this directory if you are building a custom PAA file. Put these files in the webdav directory. This directory and its subtree structure contain artifacts that must be uploaded to the WebDAV file store. There are the following possible subdirectories:

    -   themes
    -   skins
    -   layout-templates
    -   common-resources
-   **References**

    See [Exporting content from the filestore](../../../../build_sites/themes_skins/developing_theme/dev_op_overview/manual_packaging_themes/themeopt_move_expfilestore.md).


## Personalization rules and campaigns

These artifacts are included by default in your initial or differential release PAA. Use these tasks if you are building a custom PAA.

-   **Task**

    Use the pznload task to export and import the rules and campaigns.

-   **Directory**

    Place the files in the content/pzn directory. Personalization-related artifacts, such as JAR files that contain business rules and personalization .nodes files, are in this directory.

-   **References**

    See [Staging Personalization rules to production](../../../../manage_content/pzn/pzn_stage_prod.md).


## Web Content Manager data

To include Web Content Manager data in your initial release PAA, use the -DexportWcmData=true parameter. If you are using a custom PAA, then use the following tasks.

**Attention:** Run the export task if the data set is less than 10,000 content items and behind a firewall. Syndicate the content if the data set is less than 10,000 content items and not behind a firewall. If the data set is large, clone your database and run the sycn-vanityurl-data task to synchronize your vanity URL data. Either clone your database or run the export task. Do not do both.

-   **Export task**

    Use the export-wcm-data task to export Web Content Manager data.

-   **Import task**

    Use the import-wcm-data task to import Web Content Manager data.

-   **Directory**

    Place the files in the content/wcm directory. Each subdirectory represents a separate web content library. These libraries are a specialized form of JCR artifact. Web content libraries are separated into their own directory.

-   **References**

    Read [Exporting and importing web content libraries](../../../../manage_content/wcm_configuration/wcm_adm_tools/wcmlibrary_export/index.md).


## Portlet WAR files

These artifacts are included by default in your initial or differential release PAA.

If you are building a custom PAA, choose one or more of the following portlet options:

-   **JSR 168 and JSR 286 Portlets (without an XMLAccess script to deploy)**

    Place these portlets in the following directory: InstallableApps/portlets.

-   **JSR 168 and JSR 286 Portlets (with an XMLAccess script to deploy)**

    Place these portlets in the following directory: InstallableApps/war.

-   **IBM API Portlets**

    Place these portlets in the following directory: InstallableApps/war.

    **Note:** Existing IBM portlets are not handled automatically. These portlets are copied to the archive and must be installed by an accompanied XMLAccess script.

-   **Transformation .war files**

    Place these portlets in the following directory: InstallableApps/war.

    !!!note
        These .war files are not handled automatically. These files are copied to the archive and must be installed by an accompanied XMLAccess script.


## Shared libraries

To create shared libraries in production, use the sharedAppResourcesRootDir and sharedExtResourcesRootDir parameters when you create the initial or differential release PAA. If you are deploying shared libraries manually, be sure that they are included on the production server and that their contents are up to date. Or, if you are manually creating a PAA, put the JAR files into either the shared/app or shared/ext directories of your custom PAA.

## EAR files

To include EAR files in your initial or differential release PAA, use the -DappsToExtract parameter.

If you are using a custom PAA, place files in the WebSpherePortal.paa\\WebSpherePortal\\components\\WebSpherePortal.shared\\installableApps\\ear directory. This directory contains any EAR files that must be deployed to the application server. It also contains WAR files that do not contain any portlets and must be installed directly to the application server.

## More components to stage

The following list contains all portal components that are not handled by the initial import. Use the information in the following list to install the component on each system that is involved in the staging to production process.

-   **Portal Server Performance Tuning parameters**

    Follow the performance tuning guide: [HCL Digital Experience Performance Tuning Guide](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0074411)

-   **Active Site Analytics Statistics**

    There are no applicable tools for exporting or importing Active Site Analytics Statistics. Statistics from staging server are not typically exported or imported. Read [Analyzing portal usage data](../../monitoring/analyze_portal_usage/index.md).

-   **WebSphere® Application Server Resource Environment Providers (Portal service settings are stored as Resource Environment Providers)**

    Run the wsadmin task to export. Run the following ConfigEngine task to import: update-properties.

    Read the following documentation:

    -   [http://www.ibm.com/developerworks/websphere/techjournal/0904\_chang/0904\_chang.html](http://www.ibm.com/developerworks/websphere/techjournal/0904_chang/0904_chang.html)
    -   [Setting service configuration properties](../../config_portal_behavior/service_config_properties/index.md)
-   **External Security Manager**

    Follow the staging to production documentation. Read [Staging and external security managers](../../staging_to_production/dep_stageextac.md).

-   **Custom components**

    The following items are custom components:

    -   Custom login commands
    -   Custom credential vault adapters
    -   Custom credentials
    -   Custom component property files
    Custom components are not part of HCL Portal. Custom components that are developed by the customer must be manually re-created on each system that is involved in the staging to production process.

-   **Vanity URLs**

    These artifacts are included by default in your initial or differential release PAA. A vanity URL is a portal artifact that is stored with the portal page that it targets. Vanity URLs are managed and stored in the Web Content Manager Portal Site library. Therefore, if you want to stage your portal to production, it is not enough to stage the portal pages by using the portal XML configuration interface (XMLAccess). You must transfer data on both the portal and the Web Content Manager side.

**Related information**  
[Staging-server topology for Web Content Manager](../../../../manage_content/wcm_delivery/syndication/staging_wcm/index.md)<br>
[Web content testing environments](../../../../get_started/plan_deployment/traditional_deployment/wcm_env/wcm_cms_server_uat.md)<br>
[Publishing personalization rules](../../../../manage_content/pzn/publishing_pzn_rules/index.md)<br>
[Working with the XML configuration interface](../../../manage/portal_admin_tools/xml_config_interface/working_xml_config_interface/index.md)<br>
[XML configuration reference](../../../manage/portal_admin_tools/xml_config_interface/xml_config_ref/adxmlref.md)<br>
[Exporting and importing a web content library](../../../../manage_content/wcm_configuration/wcm_adm_tools/wcmlibrary_export/wcm_config_wcmlibrary_export.md)<br>
[Deleting a web content library](../../../../manage_content/wcm_authoring/authoring_portlet/web_content_libraries/wcm_config_wcmlibrary_delete.md)<br>
[Using the XML configuration interface to work with virtual portals](../../../../build_sites/virtual_portal/vp_reference/vp_command_ref/advp_xml.md)<br>
[How to configure a web content staging environment](../../../../manage_content/wcm_delivery/syndication/staging_wcm/wcm_config_prop_staging.md)<br>
[Administering managed pages](../../../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/pages/managed_pages/advadmin_managedpages/index.md)<br>
[Exporting content from the filestore](../../../../build_sites/themes_skins/developing_theme/dev_op_overview/manual_packaging_themes/themeopt_move_expfilestore.md)<br>
[Staging Personalization rules to production](../../../..//manage_content/pzn/pzn_stage_prod.md<br>
[Exporting and importing web content libraries](../../../../manage_content/wcm_configuration/wcm_adm_tools/wcmlibrary_export/index.md)

