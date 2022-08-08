# Connecting to existing database domains

View the steps to share a database domain between two separate HCL Digital Experience instances \(instance1 and instance2\), where instance2 is connected to an instance1 database domain.

An HCL Digital Experience instance can be either a single server or HCL Portal cluster.

**Notes:**

-   Release data cannot be shared between separate HCL Digital Experience instances. Also, if Web Content Manager is installed, the JCR domain cannot be shared.
-   You can share only the HCL Portal Version 8.5 Version 8.0 data.
-   The entire set of database properties that are specified in the file [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties/wkplc\_dbomain.properties must be valid for the current configuration of all database domains. If you plan to connect or transfer a single database domain, you must modify only the database properties for that domain before you run the connect-database or database-transfer tasks.

**Warning:** The connect-database configuration task does not preserve customizations to the data sources for the HCL Digital Experience databases. If you previously tuned your data sources for the HCL Digital Experience databases, make a note of the settings, run connect-database, and reapply the tuning after you run the configuration task.

Both HCL Digital Experience instances must be installed and operational.

1.  Verify that both HCL Digital Experience instances are operational.

2.  Ensure that the database client software is installed on instance2 with the same settings as instance1 and that you can connect to the remote database.

3.  The instance2 data sources must be made to point to the database used by instance1. The wkplc\_dbtype.properties and wkplc\_dbdomain.properties files must be updated to specify what remote database is used. This information must match the database information that is used for the instance1 installation.

    **Remember:** Do not use the same data source names for the domains that are used in the previous version of the product. Use a different data source so that the connect-database command drops the old data source and create the new one with the new connection information.

4.  Reconfigure instance2 to use one or more remote database domains of instance1 by running the following command from the directory [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine:

    -   Windows™: `ConfigEngine.bat connect-database -DTransferDomainList=domain1,domain2,domain3 -DWasPassword=password`
    -   UNIX™Linux™: `./ConfigEngine.sh connect-database -DTransferDomainList=domain1,domain2,domain3 -DWasPassword=password`
    -   IBM® i From the UserData directory:
        -   `ConfigEngine.sh connect-database -DTransferDomainList=domain1,domain2,domain3 -DWasPassword=password`
5.  Restart instance2.


**Parent topic:**[Database Management Systems](../config/config_dbms.md)

