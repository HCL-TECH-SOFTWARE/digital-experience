# What to expect after you complete migration

During the migration process, your portal applications, portlets, and databases are updated to the HCL Digital Experience 8.5 versions. However, not all of the new HCL Digital Experience 8.5 functionality and features are enabled by default. The following sections provide information on how various components are handled during migration, and what you can expect after the migration is complete.

-   **[Themes](../migrate/mig_plan_expect_themes.md)**  
During the migration process, HCL Digital Experience moves your theme to your target environment without modifications. The pages in your target environment still reference the same theme that was used in the source environment.
-   **[Site toolbar](../migrate/mig_plan_expect_toolbar.md)**  
During migration, the HCL Digital Experience 8.5 theme is deployed. The 8.5 theme includes the site toolbar, but the toolbar is enabled only for the default virtual portal. For all other virtual portals, you must install the site toolbar separately.
-   **[Migration: Virtual portals](../migrate/mig_plan_expect_vp.md)**  
During the migration process, your existing virtual portals are moved over to your target environment without modification.
-   **[HCL Portal and Web Content Manager administration](../migrate/mig_plan_expect_wcmadmin.md)**  
In HCL Digital Experience 8.5, the update of the HCL Portal and HCL Web Content Manager administration themes was automated. In previous versions of Portal, the Portal and Web Content Manager administration themes were not updated during migration.
-   **[Page order](../migrate/mig_expect_pages.md)**  
If the page order was altered for HCL pages in the Applications, Administration, or Hidden Pages areas on your source environment, then the page order might not be correct on the target environment after migration.


**Related information**  


[Migration overview](../migrate/mig_over.md)

