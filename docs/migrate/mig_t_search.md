# Migrating search components 

The search components in your source portal might require preparation steps and then extra steps on the target portal.

-   **[Migrating portal search collections ](../admin-system/srtmigratcoll.md)**  
When you migrate or upgrade HCL Digital Experience to a later version, the data storage format and index structure of Portal Search is not compatible with an earlier version. If you migrate your portal to a later version and want to continue using your search collections, you must preserve them before you migrate your portal and import them into the upgraded portal after the migration.
-   **[Migrating web search collections ](../migrate/mig_t_webcoll.md)**  
You migrate web search collections to HCL Digital Experience 8.5 by exporting each web search collection from the earlier portal and then importing the web search collection into the new portal. You can also use the same functionality to move web search collections to a production portal after verifying them on a test portal, or to move web search collections to a configuration with remote search after verifying them locally on a portal.
-   **[Migrating a remote search server ](../migrate/mig_t_remote_srch_server.md)**  
If the source portal environment uses a remote search server, update the remote search server to work with the current portal environment.
-   **[Removing JCR search collections ](../migrate/mig_remove_jcr_collection.md)**  
In your source environment, there are JCR search collections that are prefixed with JCRCollection. Although search collections are covered in a separate section, JCRCollection prefixed collections must be handled differently.

**Parent topic:**[Preparing your source environment ](../migrate/mig_t_premig_tasks.md)

