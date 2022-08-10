# Migration considerations

There are a number of ways in which you can migrate HCL Digital Experience to a newer version. Some migration scenarios might offer a higher availability percentage over another. There are some scenarios where the migration can be done in parallel while your source environment remains in production. Other scenarios might require the production system to be disconnected just before you go live with the newly migrated system. Depending on your needs on high availability systems, you might choose one approach or another.

Refer to the Server topologies section of this documentation for details on high availability installations.

-   **[Backup and recovery](../plan/mig_plan_backup_and_recovery.md)**  
Backup and recovery of data files and databases is an essential operation for any business system, particularly for data and applications that run in production environments. Create and follow a plan for backing up and recovering data on all tiers of your HCL Digital Experience deployment. IBM® Installation Manager must also be included in backup and recovery planning. If you back up the HCL Portal file structure and then install a fix pack, the HCL Digital Experience and IBM® Installation Manager become out of sync after you restore the HCL Portal file system. This condition is not recoverable.
-   **[Local or remote migration](../migrate/mig_localvremote.md)**  
Review the considerations for local and remote migrations. Plan and review your options for an appropriate migration path that is based on your current environment.
-   **[Automated or manual migration](../migrate/mig_consider_avm.md)**  
The HCL Digital Experience product documentation documents the automated migration process that is the commonly used and supported method for migrating to a new version of HCL Digital Experience. However, this approach might not be the ideal type of migration for all customers. Read the following considerations to determine which approach fits your needs.
-   **[Portal farm migration](../plan/mig_plan_portal_farm.md)**  
The Portal farm migration consists of disabling farm mode and running the stand-alone migration. If you are migrating a unique installation farm configuration, you must migrate each farm member. If each farm instance is a clone, you can migrate one instance, and then create clones that are based on the migrated instance. When the migration is complete, you can re-enable farm mode.
-   **[Multiple tier environments](../migrate/mig_multiple_envs.md)**  
When you migrate multiple tier environments, you have two options for completing the migration process. You can choose to migrate each tier independently, or you can migrate the lowest tier and use staging to production techniques to build out the other tiers based on the migrated environment.
-   **[Multiple cluster environments](../plan/mig_plan_clusters.md)**  
If you are migrating an environment with multiple clusters, you can run the create-alias-multiple-cluster task to support multiple clusters that use different credentials.
-   **[Migrating from Portal 8.0.0.1 on WebSphere Application Server 8.5.5.2](../migrate/mig_plan_was855.md)**  
If you are migrating from HCL Digital Experience Version 8.0.0.1 on WebSphere® Application Server Version 8.5.5.2 to HCL Digital ExperienceVersion 8.5, you must follow a different migration process.
-   **[Migration from Portal Server Offering 7.0 to Portal 8.5](../migrate/mig_consider_7serveronly.md)**  
You can migrate from a Portal Server Offering 7.0 to Portal 8.5. For more information about Portal Server Offering, see the Overview topic from the related links section. When you migrate from a 7.0 Server Offering-only installation to HCL Portal Version 8.5, you must complete steps that are not covered in the Configuration Wizard migration options. Instead of using the wizard to complete the final upgrade the Portal profile step, you must complete this step manually.
-   **[Migrating from Web Content Manager version 7.0 or 8.0](../migrate/mig_content_from_7-0.md)**  
These are the migration options available when migrating from Web Content Manager version 7.0.x or 8.0.x.
-   **[Port conflicts](../migrate/mig_plan_port_conflicts.md#)**  
During migration, it is possible that a port conflict might occur when starting up the target environment deployment manager, node agents, or HCL Digital Experience servers.

**Parent topic:**[Planning for migration](../plan/mig_plan.md)

