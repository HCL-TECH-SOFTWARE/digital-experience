# Portal farm migration 

The Portal farm migration consists of disabling farm mode and running the stand-alone migration. If you are migrating a unique installation farm configuration, you must migrate each farm member. If each farm instance is a clone, you can migrate one instance, and then create clones that are based on the migrated instance. When the migration is complete, you can re-enable farm mode.

## Migrating a portal farm

1.  Disable farm mode:
    -   Deactivate all farm instances that share the required server's file system.
    -   Stop sharing the required server's file system.
    -   Run the following task to disable farm mode:
        -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh disable-farm-mode -DWasPassword=password from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory
        -   IBM® i: ConfigEngine.sh disable-farm-mode -DWasPassword=password from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory
        -   Windows™: ConfigEngine.bat disable-farm-mode -DWasPassword=password from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\ConfigEngine directory
2.  Follow the steps that are covered in the [Migrating a stand-alone environment roadmap](../migrate/rm_mig_standalone.md).

    **Note:** If you are migrating a unique installation farm configuration, each farm member must be migrated. If you are migrating a clone installation farm configuration, you can migrate one farm member, and then clone the migrated instance.

3.  Enable farm mode:
    -   The systemTemp parameter specifies where the server-specific directory is located. This directory contains all directories and files that the running portal instance writes to, such as for logging and page compiling. Create the target directory path. For example:
        -   AIX HP-UX Linux Solaris: /var/log/was\_tmp
        -   IBM i: /var/log/was\_tmp
        -   Windows: C:\\temp\\was\_tmp
    -   Run the following task to enable farm mode:
        -   AIX HP-UX Linux Solaris: ./ConfigEngine.sh enable-farm-mode -DsystemTemp=/var/log/was\_tmp -DWasPassword=password
        -   IBM i: ConfigEngine.sh enable-farm-mode -DsystemTemp=/var/log/was\_tmp -DWasPassword=password
        -   Windows: ConfigEngine.bat enable-farm-mode -DsystemTemp=C:\\temp\\was\_tmp -DWasPassword=password

**Parent topic:**[Migration considerations ](../plan/mig_plan_high_availability.md)

**Related information**  


[Roadmap: Migrating a stand-alone server environment ](../migrate/rm_mig_standalone.md)

