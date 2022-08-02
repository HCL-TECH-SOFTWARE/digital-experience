# Migrating from Portal 8.0.0.1 on WebSphere Application Server 8.5.5.2

If you are migrating from HCL Digital Experience Version 8.0.0.1 on WebSphere® Application Server Version 8.5.5.2 to HCL Digital ExperienceVersion 8.5, you must follow a different migration process.

Review the two different methods that you can use to migrate to Version 8.5 from Version 8.0.0.1 on WebSphere Application Server Version 8.5.5.2.

-   **Use staging to production to set up a staging server, and migrate the staging server to HCL Digital Experience 8.5.**

    You can set up a staging server with a Portal 8.0.0.1 and WebSphere® Application Server 8.0.0.5 installation, and use the staging to production tools to create a new environment that is based on the source environment. Then, you can use the configuration wizard to migrate the staging environment. The benefit of this method is that your source environment stays intact on Portal Version 8, and it allows for the source and target environments to co-exist. It can require extra hardware, and these steps can take longer to complete.

-   **Manually perform an in-place migration.**

    You must manually uninstall and install the Portal binary files, and back up and restore the source Portal profile. This method might be faster, but you must update the source environment in-place, so you must have a backup and a plan for rolling back in case there is a failure. In addition, this procedure cannot be reversed, and when complete the Portal 8.0.0.1 version server is fully updated to HCL Portal Version 8.5.


-   **[Using staging to production techniques to complete the migration](../migrate/mig_plan_was_s2p.md)**  
Choose this option if you want to use staging to production techniques to migrate from Portal Version 8.0.0.1 on WebSphere Application Server Version 8.5.5.2 to HCL Digital Experience 8.5.
-   **[Performing a manual in-place migration](../migrate/mig_plan_was_manual.md)**  
If you proceed with this method of migration for Portal Version 8.0.0.1 on WebSphere Application Server Version 8.5.5.2, be aware that you cannot use the WebSphere remote migration tool because the WebSphere version of the source and target environments are the same. This migration is an in-place migration, and the source environment will no longer be available after the migration is complete.

**Parent topic:**[Migration considerations](../plan/mig_plan_high_availability.md)

**Related information**  


[Migration overview](../migrate/mig_over.md)

