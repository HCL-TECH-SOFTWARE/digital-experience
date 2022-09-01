# Sample XML configuration files

Sample files are provided for your reference to help illustrate how to use XML configuration for different portal configuration purposes.

**Note:** Before you use them, read the other topics about the XML configuration interface carefully. Many of the samples need to be modified with valid page or user name before they can be used.

## Sample file location

The sample XML configuration files provided with the portal are located in the following directory: `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/doc/xml-samples`.

## Sample file list

Some of the XML samples are listed in the following. This list is not complete. All samples are located under the directory given in the previous section.

-   Export.xml
-   ExportRelease.xml
-   ExportPage.xml
-   ExportPageResult.xml
-   CreatePage.xml

    **Note:** If you do not want to set the page title for all portal supported locales, you need to set it at least for the default system locale of your portal.

-   CreateCsaPage.xml
-   CreateLegacyPage.xml
-   CreatePageFromZip.xml
-   CreatePageFromTemplate.xml
-   DeployPortlet.xml
-   ClonePortlet.xml
-   ModifyPortlet.xml
-   ExportPortletAndPage.xml
-   ExportSubTree.xml
-   UpdateAccesscontrol.xml
-   UpdateVault.xml
-   CopyPage.xml
-   CreateURL.xml
-   CreateUser.xml
-   CreateLanguage.xml:

    This XML sample adds a new language for the portalor removes an existing language from the portal.

    **Note:** To define a new language for your portal, set the title for the new language in all locales that are supported for your portal in the XML file. If you do not want to set the title for all portal supported locales, you need set the title at least for the default system locale of your portal.

-   DeployTheme.xml
-   ExportAllPortlets.xml
-   Transaction.xml
-   MovePage.xml

    **Note:** The actual move of the page is done by the last two lines.

-   ActivatePortlet.xml

    Use this sample to change the states of portlets, portlet applications, or Web applications between active and inactive by setting the attribute `active` of the appropriate tag to true \(for active\) or false \(for inactive\). The sample activates the respective resources.

-   Task.xml

    This sample creates a scheduler task for cleaning up portal resources, com.ibm.portal.datastore.task.ResourceCleanup.

-   RegisterPreDeployedEAR.xml

    Use this sample to install a predeployed portlet. You might have to change this sample for your requirements.

    **Notes:** For the `*deploy\_target\_directory*` in the `url` tag specify the directory to which you deployed the EAR file on the WebSphere® Application Server. The default target directory is `AppServer`, but when deploying portlets for your portal it is a good option to specify `PortalServer` as the target directory.

    An Enterprise Application Archive \(EAR\) can hold more than one Web Application Archive \(WAR\) files. To configure the predeployed portlet resources into portal you need to reference each Web Application resource separately in the XML configuration script. Provide a dedicated `<web-app>` statement with the corresponding data in the XML script for every WAR file that contains a portlet application in that EAR file.

-   CleanupUsers.xml

    You can use this sample to identify users and groups in your portal database who have been removed from the user registry, but not from the portal database. In order for the file to work properly, you must set both attributes cleanup-users and export-users to true. Running this sample file results in a file that lists those users and groups and marks them for deletion. The result file also lists all users who have been muted, for example after too many wrong password attempts. Before you re-import the file, check the file and remove all users and groups that you want to keep in the portal database. During XML import all users and groups that remain listed in the file will be removed from the portal database.

    **Note:** After deleting these entries via the modified XML script, all customizations are lost for the deleted users and groups.

-   ExportIncludingOrphanedData.xml

    You can use this sample file to perform an export that includes all orphaned data. You do this to prepare for deleting the orphaned data. Note that this sample uses the request type `export-orphaned-data`.



**Related information**  


[Transferring portal configuration data by using the XML configuration interface](../admin-system/adxmltsk_use.md)

[Types of portal resources](../admin-system/adxmlref_resrc_types.md)

[Transferring a complete configuration](../admin-system/adxmltsk_xfer_compl_cfg.md)

[Exporting and transferring parts of a portal configuration](../admin-system/adxmltsk_xfer_partl_cfg.md)

[Removing users and groups](../admin-system/adxmltsk_del_usrs_grps.md)

[XML samples for creating or removing language definitions](../admin-system/adxmlsmp_lang.md)

[XML samples for creating Producer definitions](../admin-system/wsrpr_cons_crtprd_samp1.md)

[Exporting a Producer definition by using the XML configuration interface](../admin-system/wsrpt_cons_expprd_xml.md)

[Creating a Producer definition and consuming a portlet by a single XML script](../admin-system/wsrpt_cons_singl_xml.md)

[Removing users and groups](../admin-system/adxmltsk_del_usrs_grps_2.md)

[Deploying Java Platform, Enterprise Edition resources](../admin-system/j2ee.md)

[Activating and deactivating portlet applications or portlets](../admin-system/portletapps_activate.md)

[Applying the new theme to your Portal pages](../migrate/mig_post_apply_theme.md)

