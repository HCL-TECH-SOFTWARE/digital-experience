# Setting up the target environment

The migration requires you to install the required Portal and WebSphere® binary installations. To prepare your target environment, ensure that you have applied the latest cumulative fix and the most recent fix pack before you start migration. In addition, create new copies of the source databases for the target environment to use, and prepare the target environment for any custom applications that have dependencies or any other tasks that need to be performed for remote or cluster migrations.

!!!attention
    Before you run the migration, install interim fix [PI50840](https://support.hcltechsw.com/csm?id=kb_article&sys_id=64507a5a1b85409083cb86e9cd4bcb97).

Migration to a new release requires setting up a target environment. The target environment might be one of the following environments:

-   A separate system
-   A remote migration
-   The same system if you choose a local migration path

Independently from the migration path that is chosen, the target environment requires a fresh, binary only, Portal installation. Meaning setting up the target environment without creating any profiles. 

For more details on setting up the target environment, review the following topics in this section and the [Roadmaps for migration](../../../../deployment/manage/migrate/planning_migration/rm_migration/index.md).

-   **[Target environment considerations](mig_plan_targetenvironment.md)**  
Installation planning of the target environment must be part of your overall migration planning. There are some considerations to keep in mind when you install HCL Portal and you plan to do a migration from your existing installation.
-   **[Installing Portal and WebSphere binary files](mig_install_binaries_target.md)**  
On your target system, you must install the portal and WebSphere binary files.
-   **[Installing fix packs on the target environment](mig_inst_fixpacks.md)**  
Periodically, fix packs are released to integrate product code fixes. Between fix pack releases, there are interim fixes to ensure product reliability and stability. You must apply the latest available fix pack and cumulative fix to the target environment. The Recommended fixes link provides links to fix pack and interim fix downloads. There is also information about what is recommended and what is required.
-   **[Copying portal binary files to the deployment manager](mig_t_copy_binaries_target.md)**  
Complete this task if the deployment manager is not sharing application binary files with a Portal install.
-   **[Copying files for third party and custom applications](mig_cust_apps.md)**  
The Portal migration attempts to install custom applications in the target environment, but it does not automatically copy the files required for those applications. If the files are not copied over, it is possible that the applications will fail to install or not work properly.
-   **[Maximum open file descriptors for Unix-based platforms](mig_pre_ulimit_default.md)**  
For Unix-based platforms, the default open file descriptor must be set to 200000 to allow the Configuration Wizard commands to run properly during migration.
-   **[Using copies of source database domains to minimize downtime](mig_connect_dbdomains.md)**  
To keep the earlier portal environment in production and reduce the amount of downtime during migration copy the earlier portal server JCR and Release domains. Connect to the domain copies and then update the new portal server with the domain copies. The process of connecting to the domain copies must be done after you upgrade the ConfigEngine tool but before you upgrade the Portal profile.
-   **[Database considerations](../../migrate/settingup_target_env/db_consideration/index.md)**  
Depending on the type of database that you use, there might be extra considerations or tasks to complete before and after you migrate your data. Review the information that is tailored for your database type to ensure the migration process completes successfully.


<!-- **Related information**  


[Recommended fixes and updates for HCL Portal and HCL Web Content Management](https://support.hcltechsw.com/csm)

[HCL Portal detailed system requirements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=ba230c701b983c50f37655352a4bcb29) -->

