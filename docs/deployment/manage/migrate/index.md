# Migrating 

Successful migration requires significant planning and preparation, understanding the tools that are involved, and careful execution of the appropriate steps in the order provided.

!!! important
    Depending on your source and target versions, Support might recommend the staging-to-production process instead of the standard migration process. Before you begin, verify which process is appropriate for your environment.

-   **[Migration overview](mig_over.md)**  
Migration is the process of collecting configuration data and applications from an earlier installed version of HCL Digital Experience and merging them into a newly installed version so that the new environment mirrors the earlier environment.
-   **[Planning for migration](../../manage/migrate/planning_migration/index.md)**  
 Completing a thorough plan before migrating to the latest version of HCL Digital Experience has a direct impact on the effort invested during the actual migration. Become familiar with the environment you are migrating to (target environment). Also, make sure that the environment you are migrating from (source environment) is up to date with fixes and meets the requirements for migration.
-   **[Preparing your source environment](../../manage/migrate/preparing_source_env/index.md)**  
Before you begin the steps for migration, you must perform some critical tasks on your source environment, such as creating backups, installing the latest cumulative fix and one of the two most recent fix packs, and disabling automatic synchronization if you are migrating a cluster. Review the topics in this section, and perform the required tasks to ensure that your source environment remains functional and the migration completes successfully.
-   **[Setting up the target environment](../../manage/migrate/settingup_target_env/index.md)**  
The migration requires you to install the required Portal and WebSphere® binaries. To prepare your target environment, ensure that you have applied the latest cumulative fix and the most recent fix pack before you start migration. In addition, create new copies of the source databases for the target environment to use, and prepare the target environment for any custom applications that have dependencies or any other tasks that need to be performed for remote or cluster migrations.
-   **[Migrate data using the configuration wizard](../../manage/migrate/migrate_using_cfgwizard/index.md)**  
For Version 8.5/9.5, data, applications, databases, property files, security settings, and configuration are migrated using the Configuration Wizard. Use the roadmaps for cluster and stand-alone environments to guide you through the process.
-   **[Migration: Next steps](../../manage/migrate/next_steps/index.md)**  
After migration, complete all required post-migration tasks based on how Portal is used in your environment.


