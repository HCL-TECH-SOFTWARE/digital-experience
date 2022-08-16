---
id: cw_update
title: Migrate to a New Version
---
import useBaseUrl from '@docusaurus/useBaseUrl';



Update your current environment by migrating to the latest version of HCL Digital Experience. With migration, you install the new version of a product alongside of the earlier version and then copy data from the earlier version to the new version. Your goal is to create a new environment that is identical to the earlier environment.

You can migrate HCL to a newer version in many ways. Some migration scenarios might offer a higher availability percentage over another. There are some scenarios where the migration might be done in parallel while your source environment remains in production. Other scenarios might require the production system to be disconnected just before going live with the newly migrated system. Depending on your needs on high availability systems, you might choose one approach or another.

## Source environment

The source environment is the environment that you are currently using.

## Target environment

Every migration requires you to set up a target environment. Your target environment is the environment of the new version to which you plan to move your data. This new target environment might involve a remote or local migration. The target environment requires a fresh, binary-only, portal installation. This type of installation does not create any profiles.

## Examples of migrations

-   **Remote**

    Source and target environments reside on different machines.

    Fewer resource conflicts than a local migration.

    Provides you with the capability of keeping your portal running while you set up your remote target environment.


-   **Local with coexistence**

    Maintains your current production environment online migrating to a newer version of WebSphere® Portal at the same time. Coexistence is the process of running both the original and the newly migrated portal servers on the same machine at the same time. You can have a remote migration with coexistence.

    Involves carefully planning to avoid conflicts. Default settings like port assignments require updating on the migrated HCL.

    Involves reviewing hardware and software requirements for the new version of HCL. Make sure the machine currently running your production HCL has enough resources to handle the new installation.


-   **Local without coexistence**

    Simplest migration scenario. Both source and target portal installations are on the same machine and resource conflicts are minimal. Other configurations, such as ports or virtual portals, should not conflict. Both source and target WebSphere® Portal will not run in parallel at the same time.

    There are still some directory structure considerations to keep in mind. You might want to use the same directory structure in your new WebSphere® Portal installation to hold logs and backups, for example.


**Related information**  


[Configuration Wizard](cw_main.md)

