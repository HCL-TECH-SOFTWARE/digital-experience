# Multiple tier environments

When you migrate multiple tier environments, you have two options for completing the migration process. You can choose to migrate each tier independently, or you can migrate the lowest tier and use staging to production techniques to build out the other tiers based on the migrated environment.

Choose from the two options when you are migrating multiple environments, and review the considerations for each:

-   **Migrate tiers using staging to production techniques**

    The lowest level tier is migrated, and then that tier is moved to the next levels using staging to production techniques. For example, if you have Development, Authoring, and Production tiers, you can migrate the development environment and use staging to production to move that environment to the new authoring and production tier. This option might require less time than migrating tiers independently, but it is imperative that you take a disciplined approach to ensure that all artifacts and settings are properly moved to the next tiers.

    Review the considerations for migrating tiers using staging to production techniques:

    -   Ensure managed pages enablement in the higher-level tiers matches. Migration from a version before Version 8.0 leaves the managed pages feature off. If you build new higher tiers using the Portal installer, then managed pages are turned on.
    -   Follow the Portal tuning guide to set up all tiers. Migration ensures that all settings in the lowest tier are migrated to the target environment, but since the higher tiers are newly built, they need to be tuned. Tuning might also be necessary on the lowest tier, if the tuning recommendation changed since the previous Portal version.
    -   Review and decide if you want to use the staging to production documentation to populate the higher tiers. You must ensure that all of your custom applications and shared libraries are updated on the higher tiers, and plan for a test phase that validates your application before you move to the next tier.
-   **Migrate tiers independently**

    Each tier is migrated independently. This option might require more time, but it ensures that all settings are migrated to the new environment.


**Parent topic:**[Migration considerations](../plan/mig_plan_high_availability.md)

**Related information**  


[Staging to production](../deploy/dep_intr.md)

