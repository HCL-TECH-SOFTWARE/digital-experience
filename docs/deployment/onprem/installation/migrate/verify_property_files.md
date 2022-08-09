# Verifying property files

Ensure that the existing portal environment is at the appropriate service level for migration.

1.  Open a command prompt and change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

2.  Run the following command to ensure that the wkplc\_comp.properties file contains the correct information:

    -   AIX® HP-UX Linux™ Solaris : ./ConfigEngine.sh validate-database-connection
    -   IBM® i: ConfigEngine.sh validate-database-connection
    -   Windows™: ConfigEngine.bat validate-database-connection
    -   z/OS®: ./ConfigEngine.sh validate-database-connection

**Parent topic:**[Preparing your source environment](../migrate/mig_t_premig_tasks.md)

