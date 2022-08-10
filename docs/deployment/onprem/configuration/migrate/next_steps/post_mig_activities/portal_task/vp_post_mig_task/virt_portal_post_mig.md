# Virtual Portal tasks

If you configured HCL Portal to use virtual portal, there are some additional steps that are needed to complete the migration.

-   **[Updating administration themes in Virtual Portals](../migrate/mig_post_vp_admintheme.md)**  
During migration, the HCL Digital Experience 8.5 theme is deployed. However, only the administration themes on the default virtual portal are updated to the 8.5 version of the administration user interface. For all other virtual portals, you must manually update the administration themes.
-   **[Enabling the 8.5 site toolbar before you create your first Virtual Portal](../migrate/mig_t_enable_toolbar_newvp.md)**  
 After migration and before you create your first Virtual Portal on your migrated server, you must install the 8.5 site toolbar.
-   **[Moving the personalization page](../migrate/mig_post_move_pzn.md)**  
After you migrate from Portal Version 7.x to HCL Digital Experience 8.5, change your theme to Version 8.5. The Personalization welcome page is in the Content application area. You can run a task to move the Personalization welcome page back to the application level.
-   **[Sharing Web Content Manager libraries between Virtual Portals](../migrate/mig_post_vp_sharing_wcm.md)**  
When you created Web Content Manager libraries in the base portal of earlier versions of Portal, these libraries were available in the virtual portals. In Portal Version 8.0 and HCL Digital Experience 8.5, a Web Content Manager library that you create in the base portal is not available in the virtual portals.
-   **[Updating scripts and removing deprecated features](../migrate/mig_post_vp_update_remove.md)**  
To create new Virtual Portals with the same content as the portal from which you migrated, you must pre-configure the default content for creating the Virtual Portal. You must also remove or replace references to deprecated features.
-   **[Enabling Tag and Search Center pages for virtual portals](../migrate/mig_post_vp_tagandsearch.md)**  
When you migrate to HCL Digital Experience 8.5, the migration process does not apply the Portal 8.5 theme to all portal pages for your virtual portals. This affects the Tag and Search Center pages. To use your Tag Center and Search Center pages, you must manually update the theme for the pages to the Version 8.5 theme. You must also update the profile of the pages to the Search and Tag Center profile.

**Parent topic:**[Portal tasks](../migrate/mig_post_portaltasks.md)

**Related information**  


[Removing Person Tag hidden pages](../migrate/mig_post_person_tag.md)

[Administering virtual portals](../admin-system/advp_adm.md)

[Tasks for administering virtual portals](../admin-system/advptsk.md)

