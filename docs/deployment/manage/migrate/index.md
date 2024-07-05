# Migrating

Successful migration requires significant planning and preparation, understanding the tools that are involved, and careful execution of the appropriate steps in the order provided.

-   **[Migration overview](mig_over.md)**  
Migration is the process of collecting configuration data and applications from an earlier installed version of HCL Digital Experience and merging them into a newer installed version. So that the new environment is identical to the earlier environment.
-   **[Planning for migration](../../manage/migrate/planning_migration/index.md)**  
 Completing a thorough plan before migrating to the latest version of HCL Digital Experience has a direct impact in the effort invested during the actual migration. Become familiar with the environment you are migrating to (target environment). Also, make sure that the environment you are migrating from (source environment) is up to date with fixes and meets the requirements for migration.
-   **[Preparing your source environment](../../manage/migrate/preparing_source_env/index.md)**  
Before you begin the steps for migration, you must perform some critical tasks on your source environment, such as creating back ups, installing the latest cumulative fix and one of the two most recent fix packs, and disabling automatic synchronization if you are migrating a cluster. Review the topics in this section, and perform the required tasks to ensure that your source environment remains functional and the migration completes successfully.
-   **[Setting up the target environment](../../manage/migrate/settingup_target_env/index.md)**  
The migration requires you to install the required Portal and WebSphere® binary installations. To prepare your target environment, ensure that you have applied the latest cumulative fix and the most recent fix pack before you start migration. In addition, create new copies of the source databases for the target environment to use, and prepare the target environment for any custom applications that have dependencies or any other tasks that need to be performed for remote or cluster migrations.
-   **[Migrate data using the configuration wizard](../../manage/migrate/migrate_using_cfgwizard/index.md)**  
For Version 8.5, data, applications, databases, property files, security settings, and configuration are migrated using the Configuration Wizard. Use the roadmaps for cluster and stand-alone environments to guide you through the process.
-   **[Migration: Next steps](../../manage/migrate/next_steps/index.md)**  
To complete migration, you must first perform several post-migration steps that depend on how Portal is being used. After completing the post-migration steps, review the Enabling new functionality section to take advantage of the new tools available in HCL Digital Experience 8.5. Enabling new functionality should not be started until all post-migration steps have been completed.


