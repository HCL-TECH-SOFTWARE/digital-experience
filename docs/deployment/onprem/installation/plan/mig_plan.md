# Planning for migration

Completing a thorough plan before migrating to the latest version of HCL Digital Experience has a direct impact in the effort invested during the actual migration. Become familiar with the environment you are migrating to \(target environment\). Also, make sure that the environment you are migrating from \(source environment\) is up to date with fixes and meets the requirements for migration.

The following sections provide a starting point for your migration planning. Consider each migration planning unique to the environment you are migrating. Refer to the [Roadmaps for migration](../install/rm_migration.md) when you are planning and completing the migration process for an high-level view of the process and direct links to important documentation resources.

Before you start the more detailed planning, here are some additional migration considerations:

-   Take into account new development environment needs.
-   Education and cultural changes.
-   Contemplate different migration approaches and the impact on your business.
-   What is contained within migration and what is not.
-   Deprecated functionality.
-   Vendor software unique to your environment and how it might interact with the new version of HCL Digital Experience.

-   **[Supported migration paths](../plan/mig_plan_supported_paths.md)**  
Migration is supported between equivalent HCL Digital Experience offerings.
-   **[Hardware considerations](../plan/mig_plan_hardware.md)**  
 There might be cases where you are completing a remote migration to a new hardware configuration. This new server might have different requirements from the current environment you are migrating from. Generally, here are some key points to consider.
-   **[Operating systems considerations](../plan/mig_plan_operating_systems.md)**  
 There might be cases where you upgrade not just to a newer version of HCL Digital Experience but also to a different operating system version. In that case, there might be a different set of system requirements and considerations to keep in mind.
-   **[Migration considerations](../plan/mig_plan_high_availability.md)**  
There are a number of ways in which you can migrate HCL Digital Experience to a newer version. Some migration scenarios might offer a higher availability percentage over another. There are some scenarios where the migration can be done in parallel while your source environment remains in production. Other scenarios might require the production system to be disconnected just before you go live with the newly migrated system. Depending on your needs on high availability systems, you might choose one approach or another.
-   **[Development considerations](../migrate/mig_plan_devconsiderations.md)**  
The goal of the migration process is to ensure that the target environment works similarly to the source environment. However, there are deprecated and unsupported features and changes in supported technical specifications that can prevent this transition from being seamless. Review the following topics for guidance on the development work that is required to maintain the functionality of the source environment and also begin preparation for enabling new features and functionality.
-   **[What to expect after you complete migration](../migrate/mig_plan_expectations.md)**  
During the migration process, your portal applications, portlets, and databases are updated to the HCL Digital Experience 8.5 versions. However, not all of the new HCL Digital Experience 8.5 functionality and features are enabled by default. The following sections provide information on how various components are handled during migration, and what you can expect after the migration is complete.

**Parent topic:**[Migrating](../migrate/migration.md)

**Related information**  


[Unsupported features for HCL Digital Experience 8.5 and 9.0](../reference/intr_depc.md)

[HCL Portal V8.5 and V8.0 detailed system requirements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514&sys_kb_id=ba230c701b983c50f37655352a4bcb29)

