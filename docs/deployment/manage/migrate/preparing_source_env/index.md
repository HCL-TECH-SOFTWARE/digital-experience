# Preparing your source environment

Before you begin the steps for migration, you must perform some critical tasks on your source environment, such as creating back ups, installing the latest cumulative fix and one of the two most recent fix packs, and disabling automatic synchronization if you are migrating a cluster. Review the topics in this section, and perform the required tasks to ensure that your source environment remains functional and the migration completes successfully.

**Important:** If you are using locahost in the database URL, update the URL to use the actual database server host name before you continue with your migration.

For more details on preparing your source environment, review the following topics in this section and the [Roadmaps for migration](../install/rm_migration.md).

-   **[Clean up your source profile](../migrate/mig_clean_source.md)**  
During the migration, your source profile is exported. Basically, this export copies your profile to a back up folder. To speed up the process and prevent failures, delete or move unnecessary files from the profile folder.
-   **[Install fix packs on the source environment](../migrate/mig_inst_fixpacks_wp7.md)**  
Periodically fix packs are released to integrate product code fixes. Between fix pack releases, there are interim fixes to ensure product reliability and stability. You must apply the latest cumulative fix to the source environment. The Recommended fixes link provides links to fix pack and interim fix downloads. There is also information about what is recommended and what is required.
-   **[Verifying property files](../migrate/verify_property_files.md)**  
Ensure that the existing portal environment is at the appropriate service level for migration.
-   **[Backing up the system](../migrate/back_up_the_system.md)**  
Make sure that you have a current backup and recovery policy before you alter the source environment. Follow the instructions in the Backup and restore section to ensure that you cover all the affected assets.
-   **[Disabling automatic synchronization to protect your clustered source environment](../migrate/mig_disable_auto-sync.md)**  
The target environment initially uses the same ports as the source environment. There are three important steps you must complete to ensure that the source and target environments do not become corrupted.
-   **[Verifying that WebSphere Application Server Trust Association Interceptor is enabled](../migrate/mig_pre_src_tai.md)**  
The automated migration of the HCL Portal profile requires that the Trust Association Interceptor \(TAI\) is enabled so that you can configure content in WebDAV during migration.
-   **[Preparing Web Content Manager content](../migrate/wcm_specific_steps.md)**  
To migrate HCL Web Content Manager data, you must remove the locks on content and rename the content libraries.
-   **[Migrating search components](../migrate/mig_t_search.md)**  
The search components in your source portal might require preparation steps and then extra steps on the target portal.
-   **[Migrating from a 32-bit source environment to 64-bit target environment](../migrate/mig_t_sourcenv_32to64.md)**  
The 32-bit Portal installation is no longer supported in HCL Digital Experience 8.5. If you are migrating from a 32-bit source environment to a 64-bit Version 8.5 environment, you need to take extra steps to ensure that the WASPreMigration task completes successfully.
-   **[Prepare UX Screen Flow Manager](../migrate/mig_pre_uxfm.md)**  
If you are migrating from Version 8.0.0.1 with the UX Screen Flow Manager \(UXFM\) enabled, then you must remove the dialog definitions, and then uninstall UXFM before you migrate to Version 8.5. Before you remove the dialog definitions and uninstall UXFM, it is highly recommended that you export your dialog definitions, and when migration is complete, you can import your dialog definitions into your upgraded system. If you do not export your dialog definitions, then your data will be lost.
-   **[Removing HCL Commerce integration](../migrate/mig_pre_commerce_integration.md)**  
If you have HCL Commerce integrated with HCL Digital Experience, you must remove HCL Commerce from your source portal profile before you begin migration.
-   **[Removing unsupported composite applications](../migrate/mig_pre_remove_cai.md)**  
Composite applications are no longer supported. If you have a composite application in your system and you migrate to Version 8.5, the migration fails. Ensure that all composite applications are deleted before you start the migration. When you delete a composite application, you must also run the resource cleaner, otherwise pages can still exist in the database.
-   **[Removing obsolete portlets from virtual portal scripts](../migrate/mig_depcr_vp_scripts.md)**  
Some portlets were deprecated or removed in this release. If you have references to deprecated or removed portlets in your virtual portal scripts, you must manually remove those references.
-   **[Distinguished names](../plan/mig_plan_security.md)**  
If you are using LDAP in your source environment, make sure that the wkplc.properties file is properly configured. You might have a configuration that is working, but it might not be supported after migration. Short distinguished names \(DN\) are not supported. Make sure that the properties files in your source environment are set with the fully qualified distinguished names.
-   **[Maximum open file descriptors for Unix-based platforms](../migrate/mig_pre_ulimit_default.md)**  
For Unix-based platforms, the default open file descriptor must be set to 200000 to allow the Configuration Wizard commands to run properly during migration.
-   **[Disabling wsadmin client debug](../migrate/mig_dsable_wsadmin_clnt_dbg.md)**  
If you use either IBM® WebSphere® Application Server Version 8.5.5.4 or WebSphere® Application Server Version 8.5.5.5, disable the wsadmin client trace to avoid a failure.


