# Portal farm migration

The Portal farm migration consists of disabling farm mode and running the stand-alone migration. If you are migrating a unique installation farm configuration, you must migrate each farm member. If each farm instance is a clone, you can migrate one instance, and then create clones that are based on the migrated instance. When the migration is complete, you can re-enable farm mode.

## Migrating a portal farm

1.  Disable farm mode:

    -   Deactivate all farm instances that share the required server's file system.
    -   Stop sharing the required server's file system.
    -   Run the following task to disable farm mode:

        -   AIX® and Linux™: `./ConfigEngine.sh disable-farm-mode -DWasPassword=password from the wp_profile_root/ConfigEngine directory`
        -   Windows™: `ConfigEngine.bat disable-farm-mode -DWasPassword=password from the wp_profile_root\ConfigEngine directory`

2.  Follow the steps that are covered in the [Roadmap: Migrating a stand-alone server environment](../../../../../deployment/manage/migrate/planning_migration/rm_migration/rm_mig_standalone.md).

    !!!note
        If you are migrating a unique installation farm configuration, each farm member must be migrated. If you are migrating a clone installation farm configuration, you can migrate one farm member, and then clone the migrated instance.

3.  Enable farm mode:
    -   The systemTemp parameter specifies where the server-specific directory is located. This directory contains all directories and files that the running portal instance writes to, such as for logging and page compiling. Create the target directory path. For example:

        -   AIX and Linux: /var/log/was_tmp
        -   Windows: C:\\temp\\was_tmp

    -   Run the following task to enable farm mode:
        -   AIX and Linux: `./ConfigEngine.sh enable-farm-mode -DsystemTemp=/var/log/was_tmp -DWasPassword=password`
        -   Windows: `ConfigEngine.bat enable-farm-mode -DsystemTemp=C:\\temp\\was_tmp -DWasPassword=password`

