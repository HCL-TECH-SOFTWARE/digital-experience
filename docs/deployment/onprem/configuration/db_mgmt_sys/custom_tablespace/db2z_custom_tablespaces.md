# DB2 for z/OS: Assigning custom table spaces

The repository of HCL Portal consists of many tables and indices that are created in default table spaces. When using an existing set of table spaces for the objects of the repository, specify this when executing the database transfer to the target database system.

Before you begin:

-   The custom table spaces must exist prior to the execution of database transfer.
-   To see which table spaces can be customized in each domain, refer to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config/tablespaces/dbdomain.space\_mapping.properties file.
-   For details on creating table spaces refer to the documentation for the database.
-   When using IBM® DB2 Universal Database™ for z/OS® as a data store, HCL Portal requires that its indexes are not padded. Therefore, you must set the DSNZPARM parameters to RETVLCFK=NO or PADIX=NO, or both.

If custom table spaces are assigned, each must be assigned explicitly. The default table spaces can be used to contain database objects; however the name of the default table space must be specified in the corresponding mapping files. This applies to all database domains that are transferred in a single database transfer.

To configure custom table space assignments:

1.  Determine the names of your custom table spaces.

2.  Open the mapping file [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root) /PortalServer/config/tablespaces/dbdomain.space\_mapping.properties that specifies the table space and index space property pairs for each database table:

    -   dbdomain.table\_name.tablespace
    -   dbdomain.table\_name.index\_name.indexspace
    For the file name and each table space and index space property pair, dbdomain can be any one of the following values:

    -   release
    -   community
    -   customization
    -   jcr
    -   feedback
    -   likeminds
    **Note:** For jcr, you need to open an additional maping file: [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/jcr/config/jcr.space\_mapping.properties. This mapping file contains additional table space and index space property pairs for each jcr.table\_name.tablespace database table.

3.  Assign a table space to each `.tablespace` entry in the mapping file. Assignments to `.indexspace` entries are ignored. The table space name must be qualified by the database name and prepended by the keyword `IN` and a space. For example: `community.COMP_INST.tablespace=IN COMM8KSPACE`

    Repeat this step for each domain that you are transferring.

4.  Save and close dbdomain.space\_mapping.properties.

5.  From a command prompt, specify the option `-DuseCustomTablespaceMapping=true` when starting the database transfer.

    For example,

    -   Windows™: ConfigEngine.bat database-transfer -DuseCustomTablespaceMapping=true
    -   UNIX™Linux™: ./ConfigEngine.sh database-transfer -DuseCustomTablespaceMapping=true
    -   IBM i: ConfigEngine.sh database-transfer -DuseCustomTablespaceMapping=true
    -   z/OS: ./ConfigEngine.sh database-transfer -DuseCustomTablespaceMapping=true

**Parent topic:**[Assigning custom table spaces](../config/custom_table_spaces.md)

