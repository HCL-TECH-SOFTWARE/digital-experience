# Enabling new functionality in a migrated portal

The migration process collects configuration data and applications from an earlier installed version of HCL Digital Experience and merges them into the newer installed version so that the new environment is identical to the earlier environment. Taking advantage of new functionality that was not available in the earlier portal requires additional attention after migration is complete.

-   **[New Web Content Manager features](wcm_migration_post_functions.md)**  
You might need to update your old web content to take advantage of the new Web Content Manager features.
-   **[Migration: Enabling managed pages](mig_t_enable_mngpages.md)**  
After migration, you must manually enable support for managed pages. Without managed pages support, some features like the project menu are not available on the migrated server.
-   **[Changing from Ajax proxy to outbound HTTP connection](mig_enable_outboundhttp.md)**  
HCL Digital Experience 8.5 provides a migration process for the change from the Ajax proxy of previous portal versions to the new outbound HTTP connection.
-   **[Updating blog and wiki templates after migration](mig_t_blogwiki.md)**  
Perform the following steps to manually update the blog and wiki templates after migration.
-   **[Enabling the new tag and rating widgets after a portal upgrade](mig_post_tagandrate.md)**  
If you upgrade your HCL Portal from an earlier version to Version 8.5 and want to use the new tag and rating widgets, you must first enable blogs and wikis. Then, complete the following task to ensure that tag and rating widgets are enabled.
-   **[Moving hidden pages](mig_t_move_hidden_pages.md)**  
Portal scripts create hidden pages that can clutter the page topology, making it difficult for users to find the page they want, and also slow down portal performance. To clean up the page topology and ensure faster runtime performance, administrators can move these hidden pages to a different location after you complete the migration to HCL Digital Experience 8.5.
-   **[Enable new functions in migrated themes](enable_func_migrated_themes/index.md)**  
When you migrate your themes, migration moves your existing themes to the new server. Migration does not upgrade themes from an earlier version to use new functions that are introduced in more recent versions of the product.


???+ info "Related information" 
    -   [Exploitation vs. toleration of applications and themes](../../../../../deployment/manage/migrate/planning_migration/dev_consideration/mig_plan_exp_v_tol.md)

