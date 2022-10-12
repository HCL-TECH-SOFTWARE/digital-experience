# Verifying property files

Ensure that the existing portal environment is at the appropriate service level for migration.

1.  Open a command prompt and change to the wp_profile_root/ConfigEngine directory.

2.  Run the following command to ensure that the wkplc_comp.properties file contains the correct information:

    -   AIX® and Linux™: `./ConfigEngine.sh validate-database-connection`
    -   Windows™: `ConfigEngine.bat validate-database-connection`


