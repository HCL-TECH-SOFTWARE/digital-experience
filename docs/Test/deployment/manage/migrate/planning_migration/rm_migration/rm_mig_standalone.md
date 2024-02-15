# Roadmap: Migrating a stand-alone server environment

Roadmaps provide a high-level overview of complex tasks such as migrating a stand-alone server environment to a new version of HCL Portal.

## Who should use this roadmap?

Use this roadmap if you are:

-   Migrating a stand-alone server environment from a previous version to the latest version of HCL Digital Experience.

You must apply the latest cumulative fix and one of the two most recent fix packs to your source environment, and the latest cumulative fix and the most recent fix pack to your target environment before you can migrate to HCL Portal 9.5. For more information, see [Supported migration paths](../../../../../deployment/manage/migrate/planning_migration/mig_plan_supported_paths.md).

## Planning for migration

Gather information and create a plan for migration.

Check the requirements and considerations for migration. Backup and recovery of data files and databases is an essential operation for any business system, particularly for data and applications that are running in production environments. Create and follow a plan for backing up and recovering data on all tiers of your HCL Portal deployment. Don't forget to remove unsupported or deprecated features before you start migration. If you need to migrate multiple environments, such as a production environment or development environment, you can use staging to production techniques.

Plan a local migration if your source and target environments are on the same system, and plan for a remote migration if your source and target environments are on separate systems.

## Preparing your source environment

Prepare the source portal that you want to use for migration. To keep the earlier portal environment in production and reduce the amount of downtime during migration copy the earlier portal server JCR and Release domains.

## Setting up your target environment

!!!attention
    Before you run the migration, install interim fix [PI50840](https://support.hcltechsw.com/csm?id=kb_article&sys_id=64507a5a1b85409083cb86e9cd4bcb97).

Set up your target environment for migrating to the latest version of HCL Digital Experience.

-   The portal migration attempts to install custom applications in the target environment, but it does not automatically copy the files that are required for those applications. If the files are not copied over, it is possible that the applications will fail to install or not work properly.
-   To effectively set up your target environment, install the Portal and WebSphere® binary files on all target systems.

## Migrating to the latest version of HCL Digital Experience

Start the Configuration Wizard to migrate data, applications, databases, property files, security settings, and more.

1.  To get the latest updates for the wizard, apply the most recent cumulative fix. For more information about applying the latest fix pack, see Combined Cumulative Fix overview.

    !!!notes
        Skip this step, if you have the most recent fix pack applied.

2.  Access the Configuration Wizard using your target environment and system host name. Go to: http://your_server:10200/hcl/wizard.

    !!!note
        If working with HCL Digital Experience 8.5 or 9 software level prior to CF18, the wizard address will be: http://your_server:10200/ibm/wizard. After installing CF18, the configuration wizard will automatically be adjusted to http://your_server:10200/hcl/wizard.

3.  Log in to the Configuration Wizard with the administrative ID for the configuration wizard profile, cw\_profile.
4.  Select **Migrate to a New Version > Migrate a Stand-alone Server**.
5.  Provide information about your environment.
6.  Save your wizard selections.
7.  Choose one of the following options:

    -   Click **Download Configuration Scripts** to run the steps remotely.
    -   Click **Start Configuration** to run the steps locally. This option starts to run the automated steps until a manual step is encountered.

Migration is partially complete after you do the tasks in the configuration wizard. You must return to the product documentation to complete the final steps of the migration process.

## Next steps

Migration is not complete until you review the Next steps section in the product documentation. Complete the post-migration activities and enabling new functionality tasks that are applicable to your environment. Do not complete any of the enabling new functionality tasks until all post-migration activities tasks are finished. More tasks must be completed depending on how you customized the source portal environment and which components you used. For example, if you use a virtual portal, then complete the virtual portal post-migration activities. New functionality that was not available in the earlier portal version requires extra attention after migration is complete.

After you complete the tasks in the Next steps section of the product documentation, migration is complete.


???+ info "Related information" 
    -   [Portal farm migration](../../../../../deployment/manage/migrate/planning_migration/migration_consideration/mig_plan_portal_farm.md)
    -   [Migrate a stand-alone server](../../../../../deployment/manage/migrate/migrate_using_cfgwizard/cw_migrate_stand_alone.md)

