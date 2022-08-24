# Local or remote migration

Review the considerations for local and remote migrations. Plan and review your options for an appropriate migration path that is based on your current environment.

## Local migration

There are a few migration combinations that can be considered local migration depending on the availability of the environment being migrated. At a minimum, you have two distinctive options with this migration path. You can perform a local migration by taking the source environment offline, or you can maintain both source and target environments coexisting. Depending on the migration path you choose, there might be additional factors to consider.

**Note:** IBM® i supports local migration only.

-   **Local migration without coexistence**

    Generally, local migration without coexistence is the simplest scenario. Both source and target HCL Digital Experience installations are on the same system and resource conflicts are minimal.

    There are still some directory structure considerations to keep in mind. You might want to use the same directory structure in you new HCL Digital Experience installation to hold logs and backups for example.

    Other configurations such as ports or virtual portals should not conflict. Both, source and target HCL Portal will not be running in parallel at the same time.

-   **Local migration with coexistence**

    Coexistence is the process of running both the original and the newly migrated HCL Portal systems on the same system at the same time. This approach allows for maintaining your current production environment online while performing the migration to a newer version of HCL Digital Experience. This statement is not exclusive of local migration with coexistence. You can also achieve this by performing a remote migration.

    When you plan migration with coexistence you need to consider the hardware and software requirements for the new version of HCL Digital Experience. Make sure the system currently running your production HCL Portal has enough resources to handle the new installation.

    As you have two installations of HCL Digital Experience you need to carefully plan to avoid resource conflicts. Default settings, like port assignments, require updating on the migrated HCL Portal.


## Remote migration

In this scenario, you do not need to worry about resource conflicts as much as with the local migration with coexistence approach. However, being on a remote system you need consider factors outside the actual HCL Portal environment such as operating system accounts and security in general.

You also need to keep in mind that you must be able to move files between the source and the target environments. There are procedures that create files on the source HCL Portal environment that might need to be updated and placed in the new HCL Digital Experience installation. So, once again, operating system security planning plays an important role in remote migrations.


