# Add-ons, features, and third-party integration tasks 

Complete the post-migration tasks that are required based on the way you use your HCL Digital Experience environment.

-   **[Content Template ](../wcm/wcm_migration_post_update-ctc.md)**  
Content Template versions 3.x, 4.0.x, and 4.1.x are migrated along with all Web Content Manager data. These are additional migration steps that are required for Content Template after data migration is complete.
-   **[Migrating Security Access Manager ](../migrate/mig_tam_consid.md)**  
The HCL Digital Experience migration process migrates the security configurations. However, there is no provision for the automatic migration of any junction definitions that exist for the previous version of HCL Digital Experience in WebSEAL. You must replace the old junction definitions with the new virtual host junction definitions.
-   **[Migrating PAA content ](../config/migrate_paa_content.md)**  
If you installed a Portal Application Archive \(PAA\) file on a previous version of HCL Digital Experience, you can migrate the content to the current version of HCL Digital Experience.
-   **[Creating the analytics tag root label ](../migrate/mig_post_asa.md)**  
If you use site analytics on your migrated HCL Digital Experience, you need to create the analytics tag root label.
-   **[Updating the Web Application Bridge ](../migrate/wab_mig_post.md)**  
After you migrated to the latest version of HCL Digital Experience and successfully tested it, update your migrated Web Application Bridge content.
-   **[Running post migration steps for the multilingual solution ](../wcm/wcm_mls_migrate.md)**  
When you migrate the multilingual solution, you need to merge your configuration settings.
-   **[Social Media Publisher ](../wcm/wcm_smp_migrate.md)**  
The Social Media Publisher for Web Content Manager is an extension to Web Content Manager that allows businesses to promote their web content on social networks, and provide some basic statistics about the promoted content. When migrating the Social Media Publisher, you need to merge your configuration settings.
-   **[Social Lists ](../migrate/sociallistpost_mig.md)**  
After you migrate from a previous Portal Version to HCL Digital Experience 8.5, you must run a configuration task. The configuration task is run to deploy the new web content library and templates before you can use the Social Lists features. If you already used the social rendering feature from 8.0.0.1, your existing web content libraries and all portlet clones that were created during the enablement on Portal 8.0.0.1 is not changed.
-   **[Deploying and updating sample web content template items ](../migrate/mig_t_templatesample.md)**  
The sample web content template items are not installed or updated during migration. This sample content includes examples of web content template pages and predefined content items that you can add to pages to render content. You can add or update these items manually after migration.
-   **[JavaServer Faces implementation ](../migrate/mig_post_jsf.md)**  
The default JavaServer Faces \(JSF\) implementation has changed starting in WebSphere Application Server 8.
-   **[Portlets no longer available ](../migrate/mig_removed_portlets.md)**  
Some portlets that were available on previous releases of HCL Portal are no longer including in Version 8.5. These portlets are not migrated as part of the HCL Portal migration process.
-   **[Mashup integration ](../migrate/mig_mashup_post.md)**  
The mashup integration feature was removed in Portal Version 8.0 and is not included in later releases. If you used this feature in a previous release and you want to continue using it in HCL Digital Experience 8.5, you need to manually enable mashup integration after migration.
-   **[Navigation with consecutive labels is dynamic ](../dev-theme/themeopt_upgrade_secnav_labels.md)**  
The secondary navigation is dynamic, and shows only two levels of navigation at a time. When a page on the last level of navigation is selected, only that level of navigation is displayed. It is possible to select a page where both the parent level of navigation and the grandparent level of navigation are both labels. In this case, the sibling navigation for the parent level is not accessible.

**Parent topic:**[Post-migration activities ](../migrate/mig_t_post_mig.md)

