# Portal tasks 

Complete the post-migration tasks specific to the way that you use HCL Digital Experience.

-   **[Updating page order ](../migrate/mig_post_update_page_order.md)**  
If the page order was altered for HCL Digital Experience pages in the Applications, Administration, or Hidden Pages areas on your source environment, then the page order might not be correct on the target environment after migration.
-   **[Web Content Manager ](../wcm/wcm_migration_post_update.md)**  
Extra migration steps are required for updating Web Content Manager after data migration is complete.
-   **[Virtual Portal tasks ](../migrate/virt_portal_post_mig.md)**  
If you configured HCL Portal to use virtual portal, there are some additional steps that are needed to complete the migration.
-   **[Importing search web collections ](../migrate/mig_t_import_webcoll.md)**  
As a part of preparing your source environment, you exported web collections. After you export a search web collection from a source portal, you can import the data into a new, empty collection on the target portal. Importing a web collection retains most of the configuration data such as content sources, schedulers, filters, and language settings. If you configured such settings when creating the new collection, they are overwritten by the imported settings.
-   **[Importing UX Screen Flow Manager dialog definitions ](../migrate/mig_post_uxfm_importdialog.md)**  
If you migrated from Version 8.0.0.1 with the UX Screen Flow Manager \(UXFM\) enabled, then you exported and removed your dialog definitions before migrating to Version 8.5. Run the following task to import the dialog definitions into your upgraded system.
-   **[WSRP ](../migrate/mig_post_wsrp.md)**  
If you use your HCL Digital Experience as a WSRP Consumer or Producer, you must complete additional steps to complete migration.
-   **[Migration: Blogs and wikis ](../migrate/mig_blogs_wiki.md)**  
After you migrate from HCL Portal Versions 7.0 or 8.0 to Version 8.5, you must run a configuration task to update the presentation templates that are used by blogs and wikis to apply the latest updates. You must run this task for content in your blogs and wikis to render properly.
-   **[Tag and Search Center pages ](../migrate/mig_post_tagsearchpages.md)**  
When you migrate to HCL Digital Experience Version 8.5, the migration process does not apply the Portal 8.5 theme to all portal pages. For example, this affects the Tag and Search Center pages. To continue to use your Tag Center and Search Center pages, you must update the theme for the pages to the Version 8.5 theme. You must also update the profile of the pages to the Search and Tag Center profile.
-   **[Removing Person Tag hidden pages ](../migrate/mig_post_person_tag.md)**  
Remove Person Tag hidden pages from migrated environments where Search for Portal Site was previously configured. If you migrated or updated to HCL Digital Experience 8.5 CF04 or later, then you do not need to complete these steps.
-   **[Updating URL mapping for personalization page ](../migrate/mig_post_personalization_url.md)**  
If you migrated from Portal Version 7.0 to HCL Digital Experience 8.5 with a CF03 or earlier fix pack applied, then you must complete the following task to ensure that the Personalization page displays properly.
-   **[Enabling vanity URL support after migration ](../migrate/mig_post_vurls.md)**  
In a new HCL Digital Experience 8.5 installation, vanity URL support is enabled. However, if you upgrade your Portal from a previous version to Version 8.5, vanity URL support is disabled. You can enable and disable vanity URL support as required by using a portal configuration task.
-   **[Enabling impersonation ](../migrate/mig_post_impersonation.md)**  
If you migrate to HCL Digital Experience 8.5 and upgrade to fix pack level CF01-CF03, impersonation might not be enabled. If you plan to use the impersonation feature, which allows a selected user to preview and test new pages or portlets to help identify any potential issues, then you might need to enable this feature.

**Parent topic:**[Post-migration activities ](../migrate/mig_t_post_mig.md)

