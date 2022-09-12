# Portlets no longer available

Some portlets that were available on previous releases of HCL Portal are no longer including in Version 8.5. These portlets are not migrated as part of the HCL Portal migration process.

Choose one of the following methods to correct any references to unsupported portlets:

-   Some of the portlets have replacements that are installed during the migration, and the references to the old portlets can be updated to refer to the replacements.
-   If you need to retain the original functionality, copy the war file to [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/deployed/archive/, and follow the instructions from *Updating Portlets URLs* in the post-migration activities section.
-   If the functionality is no longer needed, delete those portlet references or pages that contain the portlets.

See the *What's new* section for details on what changed and what features are deprecated in this release.


**Related information**  


[What's changed 8.5](../overview/change_portal.md)

[Unsupported features for HCL Digital Experience 8.5 and 9.0](../reference/intr_depc.md)

[Updating portlets URL](../migrate/mig_updating_portlets_url.md)

