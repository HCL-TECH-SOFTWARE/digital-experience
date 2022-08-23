# Roadmap: Migrating a clustered environment

Roadmaps provide a high-level overview of complex tasks such as migrating a clustered environment to a new version of HCL Digital Experience.

## Who should use this roadmap?

Use this roadmap if you are:

-   Migrating a stand-alone server environment from a previous version to the latest version of HCL Digital Experience.

**Note:** If you are migrating from HCL Digital Experience8.0.0.1 on WebSphere® Application Server8.5.5.2 to the latest version of HCL Digital Experience, you must follow a different migration process.

You must apply the latest cumulative fix and one of the two most recent fix packs to your source environment, and the latest cumulative fix and the most recent fix pack to your target environment before you can migrate to HCL Digital Experience 9.5. For more information, see [Supported migration paths](../plan/mig_plan_supported_paths.md).

## Planning for migration

Gather information and create a plan for migration.

Check the requirements and considerations for migration. Backup and recovery of data files and databases is an essential operation for any business system, particularly for data and applications that are running in production environments. Create and follow a plan for backing up and recovering data on all tiers of your HCL Digital Experience deployment. Don't forget to remove unsupported or deprecated features before you start migration. If you need to migrate multiple environments, such as a production environment or development environment, you can use staging to production techniques.

Plan a local migration if your source and target environments are on the same system, and plan for a remote migration if your source and target environments are on separate systems.

## Preparing your source environment

Prepare the source portal that you want to use for migration. Review the considerations for a multiple cluster environment for information on supporting multiple clusters that use different database credentials. To keep the earlier portal environment in production and reduce the amount of downtime during migration copy the earlier portal server JCR and Release domains. If you need to migrate multiple environments, such as a production environment or development environment, you can use staging to production techniques. The target environment initially uses the same ports as the source environment. There are three important steps you must complete to ensure that the source and target environments do not become corrupted.

## Setting up your target environment

**Attention:** Before you run the migration, install interim fix [PI50840](https://support.hcltechsw.com/csm?id=kb_article&sys_id=64507a5a1b85409083cb86e9cd4bcb97).

Set up your target environment for migrating to the latest version of HCL Digital Experience.

-   The portal migration attempts to install custom applications in the target environment, but it does not automatically copy the files that are required for those applications. If the files are not copied over, it is possible that the applications will fail to install or not work properly.
-   To effectively set up your target environment, install the Portal and WebSphere binary files on all target systems.

## Migrating to the latest version of HCL Digital Experience

Start the Configuration Wizard to migrate data, applications, databases, property files, security settings, and more.

1.  During a cluster migration, you might need to enter information into the Configuration Wizard more than once. Use the following worksheet to identify the information that is entered multiple times, and use these values during the migration process.

    |Field description:|Value:|
    |------------------|------|
    |Deployment manager host name| |
    |Deployment manager cell name| |
    |Deployment manager node name| |
    |Administrator user name| |
    |Administrator password| |
    |Soap port| |

2.  To get the latest updates for the wizard, apply the most recent cumulative fix. For more information about applying the latest fix pack, Visit *Combined cumulative fix strategy* for more topic information.

    **Note:** Skip this step, if you have the most recent fix pack applied.

3.  Access the Configuration Wizard using your target environment and system host name. Go to: http://your\_server:10200/hcl/wizard.

    **Note:** If working with HCL Digital Experience 8.5 or 9 software level prior to CF18, the wizard address will be: http://your\_server:10200/ibm/wizard. After installing CF18, the configuration wizard will automatically be adjusted to http://your\_server:10200/hcl/wizard.

4.  Log in to the Configuration Wizard with the administrative ID for the configuration wizard profile, cw\_profile.
5.  Select **Migrate to a New Version** \> **Migrate a Cluster Step 1: Migrate the Deployment Manager Profile**.
6.  Provide information about your environment.
7.  Save your wizard settings.
8.  Click **Download Configuration Scripts** to run the steps on the deployment manager.
9.  After you complete the steps from Step 1, select **Migrate to a New Version** \> **Migrate a Cluster Step 2: Migrate Node Profiles**.
10. Provide information about your environment.
11. Save your wizard settings.
12. Choose one of the following options:
    -   Click **Download Configuration Scripts** to run the steps remotely.
    -   Click **Start Configuration** to run the steps locally. This option starts to run the automated steps until a manual step is encountered.
13. Complete these steps on all nodes.
14. After you complete the steps for Step 2, select **Migrate to a New Version** \> **Migrate a Cluster Step 3: Upgrade Node Profiles**.
15. Provide information about your environment.
16. Save your wizard settings.
17. Choose one of the following options:
    -   Click **Download Configuration Scripts** to run the steps remotely.
    -   Click **Start Configuration** to run the steps locally. This option starts to run the automated steps until a manual step is encountered.
18. Complete these steps on all nodes

## Next steps

Migration is not complete until you review the Next steps section in the product documentation. Complete the post-migration activities and enabling new functionality tasks that are applicable to your environment. Do not complete any of the enabling new functionality tasks until all post-migration activities tasks are finished. More tasks must be completed depending on how you customized the source portal environment and which components you used. For example, if you use a virtual portal, then complete the virtual portal post-migration activities. New functionality that was not available in the earlier portal version requires extra attention after migration is complete.

After you complete the tasks in the Next steps section of the product documentation, migration is complete.


**Related information**  


[Cluster Step 1: Migrate the deployment manager profile](../config/cw_migrate_cluster_1.md)

[Cluster Step 2: Migrate node profiles](../config/cw_migrate_cluster_2.md)

[Cluster Step 3: Upgrade node profiles](../config/cw_migrate_cluster_3.md)

