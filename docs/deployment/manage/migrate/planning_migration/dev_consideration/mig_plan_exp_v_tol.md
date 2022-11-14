# Exploitation vs. toleration of applications and themes

Toleration is the ability for the new version of HCL Digital Experience to support and host the portal site of the source environment exactly the way it was on the previous version. And, exploitation is the enhancement of the source environment site to take advantage of the new functionality that is made available in the new version.

The goal of the migration process is to carry over the portal site and all of its artifacts from the source environment to the target environment, while keeping everything in tact and functioning as it did in the previous version. Ideally, if everything is migrated perfectly, there will be no difference between the site hosted by the source and target environments other than the updated Portal and HCL Digital Experience versions that are hosting the site.

-   **Toleration**

    The ability to support and host the source environment's portal site exactly the way it was on the previous source version. The migration process automates this process, but complete toleration cannot always be contained due to the adoption of new technical specifications, features, and specifications that are deprecated when updating to a new version. The steps that are not automated and that need to be performed following the migration process are documented in the [Post-migration activities](mig_t_post_mig.md) section of the product documentation. In many cases, deprecated features will be replaced by new features that provide equivalent or enhanced functionality, and these will either be included in the new version of HCL Digital Experience or available in Content Template.

-   **Exploitation**

    The enhancement of the source environment portal site to take advantage of the new functionality that is made available in the new version of HCL Digital Experience. There are many new features inVersion 8.5 and since the goal is to replicate the original site during migration, none of the features are enabled by default during the migration process. They will need to be enabled by following the instructions in the "Enabling new features" section of the product documentation.



**Related information**  


[Post-migration activities](../migrate/mig_t_post_mig.md)

[Enabling new functionality in a migrated portal](../migrate/mig_t_enable_new.md)

