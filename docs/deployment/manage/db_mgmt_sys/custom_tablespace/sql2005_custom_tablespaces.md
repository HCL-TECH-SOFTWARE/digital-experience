# SQL Server: Assigning custom table spaces

The repository of HCL Portal consists of many tables and indices that are created in default filegroups. When using an existing set of filegroups for the objects of the repository, specify this when executing the database transfer to the target management database system.

Before you begin:

-   The custom filegroups must exist prior to the execution of the database transfer.
-   To see which table spaces can be customized in each domain, refer to the wp_profile_root/PortalServer/config/tablespaces/dbdomain.space_mapping.properties file.
-   For details on creating filegroups refer to the documentation for the database.

If custom filegroups are assigned, each must be assigned explicitly. The default filegroups can be used to contain database objects; however the name of the default file group must be specified in the corresponding mapping files. This applies to all database domains that are transferred in a single database transfer.

To configure custom filegroups:

1.  Determine the names of your custom filegroups.

2.  Open the mapping file wp_profile_root/PortalServer/config/tablespaces that specifies the table space and index space for each property pairs for each database table:

    -   dbdomain.table_name.tablespace
    -   dbdomain.table_name.indexspace.indexspace
    For the file name and each table space and index space property pair, dbdomain can be any one of the following values:

    -   release
    -   community
    -   customization
    -   jcr
    -   feedback
    -   likeminds
    
    !!!note
        For jcr, you need to open an additional maping file: wp_profile_root/PortalServer/jcr/config/jcr.space_mapping.properties. This mapping file contains additional table space and index space property pairs for each jcr.table_name.tablespace database table.

3.  Assign a filespace to each entry in the mapping file. The filegroup name must be prepended by the keyword `ON` and a space. For example: `community.COMP_INST.tablespace=ON COMM8KSPACE`

    Repeat this step for each domain that you are transferring.

4.  Save and close dbdomain.space_mapping.properties.

5.  From a command prompt, specify the option `-DuseCustomTablespaceMapping=true` when starting the database transfer.

    For example,

    -   Windows™: ConfigEngine.bat database-transfer -DuseCustomTablespaceMapping=true
    -   UNIX™Linux™: ./ConfigEngine.sh database-transfer -DuseCustomTablespaceMapping=true


