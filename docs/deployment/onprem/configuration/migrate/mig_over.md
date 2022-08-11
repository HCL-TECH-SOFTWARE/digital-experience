# Migration overview

Migration is the process of collecting configuration data and applications from an earlier installed version of HCL Digital Experience and merging them into a newer installed version. So that the new environment is identical to the earlier environment. For the z/OS® platform, the new version must be on the same server as the earlier version. Migration to a different \(remote\) server is not supported.

Migration is different from upgrading. With upgrading, you replace an existing installed out-of-date version of files with current files. With migration, you install the new version of a product alongside of the earlier version and then copy data from the earlier version to the new version. By migrating information from the earlier version to the new version, you can use that information in the new version without having to re-create it from scratch. Migration enables customizations to be carried forward that were implemented in the earlier portal so that you can continue to use them in the new portal.

HCL Digital Experience also supports integration with additional products to extend core functionality. If the earlier portal environment is configured to work with one or more supported products that provided integrated features, you need to follow the migration procedures for the integrated product.

Migrated elements are not automatically upgraded to use features that are available in the new version. Taking advantage of new features that were not available in the earlier portal requires extra attention after migration is complete.

You can migrate to HCL Digital Experience Version 8.5 from either Version 7.0 or 8.0 so long as you install CF13. For additional information about supported migrations, see *Supported migration paths*.

**Note:** If you are migrating from HCL Digital Experience Version 8.0.0.1 on WebSphere® Application Server Version 8.5.5.2 to HCL Digital Experience Version 8.5, you must follow a different migration process. For more information, see *Migrating from Portal 8.0.0.1 on WebSphere Application Server 8.5.5.2*.

## Migration to Version 8.5

For Version 8.5, data, applications, databases, property files, security settings, and configuration are migrated using the Configuration Wizard. Use the roadmaps for cluster and stand-alone migrations to guide you through planning, preparing your source environment, setting up your target environment, migrating data, and post-migration steps. For a high-level overview of this process, see the *Roadmaps for migration*.

**Parent topic:**[Migrating](../migrate/migration.md)

**Related information**  


[Supported migration paths](../plan/mig_plan_supported_paths.md)

[Roadmaps for migration](../install/rm_migration.md)

[Migrating from Portal 8.0.0.1 on WebSphere Application Server 8.5.5.2](../migrate/mig_plan_was855.md)

[What to expect after you complete migration](../migrate/mig_plan_expectations.md)

