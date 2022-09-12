# ConfigEngine extension points for the Solution Installer

Some ConfigEngine extension points are required when you install an application from a Portal Application Archive \(PAA\) file.

|PAA directory|Extension point name|Description|
|-------------|--------------------|-----------|
|Config| |No extension points required|
|Content| | |
|Database|create-jdbc-provider-applySIFeaturePack|Create the JDBC provider for Solution Installer|
|Database|remove-jdbc-provider-removeSIFeaturePack|Remove the JDBC provider for Solution Installer|
|Database|create-j2c-auth-applySIFeaturePack|Create J2C authentication alias|
|Database|remove-j2c-auth-removeSIFeaturePack|Remove J2C authentication alias|
|Database|create-dataSource-applySIFeaturePack|Create the datasource for Solution Installer|
|Database|remove-dataSource-removeSIFeaturePack|Remove the datasource for Solution Installer|
|Database|create-database-applySIFeaturePack|Runs script to create the database structures, e.g. db schema, tables buffers etc.|
|Database|setup-database-applySIFeaturePack|Runs script to populate the database with sample data|
|Database|remove-database-removeSIFeaturePack|Runs scripts to remove the database structures from the db, e.g. drops all tables.|
|Database|create-cmp-connection-factory-applySIFeaturePack|Creates cmp connection factory for container management. This extension point does not exist so it needs to be created.|
|Database|remove-cmp-connection-factory-removeSIFeaturePack|Removes cmp connection factory for container management. This extension point does not exist so it needs to be created.|
|JCR| |No extension points available because this is custom code|
|JSP| |No extension points available because this is custom code|
|Personalization|create-personalisation-rules-applySIFeaturePack|Creates the personalization rules for the library|
|Personalization|remove-personalisation-rules-removeSIFeaturePack|Currently not available.|
|WCM|import-wcm-applySIFeaturePack|Imports WCM Library|
|XMLAccess|install-content-xmlaccess-applySIFeaturePack|Runs XML install scripts in install/configure application|
|XMLAccess|remove-content-xmlaccess-removeSIFeaturePack|Run XML scripts to remove application|
|webdav|Import-webdav-applySIFeaturePack|Uploads WebDav artefacts to the HCL Digital Experience WebDav file system|
|InstallableApps| | |
|EAR|create-ear-applySIFeaturePack|Installs EAR file|
|EAR|remove-ear-removeSIFeaturePack|Removes EAR file|
|Portlets|deploy-portlets-applySIFeaturePack|Deploy portlets from WAR file|
|Portlets|remove-portlets-removeSIFeaturePack|Removes portlets from portal|
|WAR|Copy-war-files-applySIFeaturePack|Copy war files to the Profile dir directory|
|WAR|Delete-war-files-applySIFeaturePack|Delete the war files copied across by the copy-warfiles extension point implementation|
|ZIP|No extension points| |
|Shared|No extension points| |
|App|No extension points| |
|Common|create-library-applySIFeaturePack|Creates shared library|
|Common|remove-library-removeSIFeaturePack|Removes shared library|
|Common|create-application-library-references-applySIFeaturePack|Creates shared library references|
|Common|remove-application-library-references-applySIFeaturePack|Removes shared library references|
|Common|create-app-server-library-references-applySIFeaturePack|Adds shared library to server classpath|
|Common|remove-app-server-library-references-applySIFeaturePack|Removes shared library to server classpath|
|Ext|No extension points| |
|Templates|deploy-pages-applySIFeaturePack|Deploys pages in this template|
|Templates|remove-pages-applySIFeaturePack|Removes pages in this template|
|Templates|add-templates-applySIFeaturePack|Installs template|
|Templates|delete-templates-applySIFeaturePack|Removes templates|


**Related information**  


[Portal administration tools](../admin-system/admtools.md)

