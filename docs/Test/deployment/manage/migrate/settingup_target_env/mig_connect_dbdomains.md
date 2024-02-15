# Using copies of source database domains to minimize downtime

To keep the earlier portal environment in production and reduce the amount of downtime during migration copy the earlier portal server JCR and Release domains. Connect to the domain copies and then update the new portal server with the domain copies. The process of connecting to the domain copies must be done after you upgrade the ConfigEngine tool but before you upgrade the Portal profile.

Review the following list before you begin.

!!!important
    -   Copying the source portal JCR and Release domains is a recommendation but not a requirement. If you point the new portal server to the source portal domains, you cannot use the JCR and Release domains with the earlier portal server.
    -   During migration, the Community and Customization domains are upgraded to their new definitions required by the new HCL Digital Experience release. This migration might break the compatibility with the source portal server. Carefully check the requirements for the source portal server if you plan to use the earlier portal server until migration is finished.
    -   If you are migrating from Portal Version 7 to HCL Digital Experience 8.5, be aware that there is a major schema change in the JCR database that may cause the JCR database to triple in size. Ensure that there is enough disk space for the new copies of the database when you create the new copies.
    -   DB2® only: When you migrate a source portal to a target portal that uses a different driver type, reconnect all of the affected domains. For example, the source portal is using DB2 with Type 2 drivers for all domains. You plan to use a Type 4 driver type for all of the domains in your target portal. In this case, you must reconnect all of the database domains that use the connect-database command.

!!!warning
    The connect-database configuration task does not preserve customizations to the data sources for the HCL Portal databases. If you previously tuned your data sources for the HCL Portal databases, make a note of the settings, run connect-database, and reapply the tuning after you run the configuration task.

1.  Use your Database tools to copy the source portal JCR domain and Release domain.

2.  DB2 only: On the database copies, verify that the Statement Heap size is set to at least 32k.

    1.  List the database manager configuration parameters by running the following command db2 get db cfg for dbname.

    2.  If the Statement Heap size is smaller than 32k, increase it by running the following command db2 "UPDATE DB CFG FORdbnameUSING stmtheap 32768"

    Where dbname is the name of your HCL Portal database.

3.  On the target portal, update the wkplc_dbdomain.properties file in the wp_profile_root/ConfigEngine/properties directory.

    1.  Update the `jcr.*` and `release.*` database properties to point to the JCR and Release domain copies that you created in the previous step.

    !!!note
        If the source portal uses the default Apache Derby database, the migration tools automatically copy the database for you. However, if you modified or customized the default Derby database, you must copy the entire Derby directory to a new directory on your target server. Then, update all database properties of your target environment to point to the copy of the Derby database. Ensure that derby.DBLibrary is set to use the derby.jar of the target WebSphere® Application Server as the JDBC driver class and includes the directory location of the file. Enter the parameter as `derby.DBLibrary=Target\_WAS\_ROOT\\derby\\lib\\derby.jar`.



???+ info "Related information"  
    -   [Port conflicts](../../../../deployment/manage/migrate/planning_migration/migration_consideration/mig_plan_port_conflicts.md)
    -  [WebSphere® Integrated Solutions Console](../../portal_admin_tools/WebSphere_Integrated_Solutions_Console.md)

