# Install and prepare DB2

Use this information to install DB2 or DB2 pureScale for use with HCL Digital Experience.

-   Review the database considerations.
-   Ensure the database that you plan to use is supported by this version of HCL Portal. Refer to the list of supported databases in the HCL Portal detailed system requirements.
-   Set up the operating system with updated kernel parameters according to the DB2® Quick Beginnings guide at DB2 Technical Support.
-   When you install DB2 with the DB2 installation program, it automatically creates a DB2 administrative user with the correct operating system rights.
-   Ensure that you have enough disk space for the DB2 instance home directory to be able to create the required databases.
-   A DB2 instance supports a limited number (NUMDB) of concurrently active databases. Increase this value if the DB2 instance maintains databases for HCL Portal and other applications. The NUMDB value depends on how many databases are concurrently used on the DB2 instance. Examples of concurrent usage include two portals that access the same DB2 instance or transferring data from multiple portals that use the same DB2 instance. To change the default to 30, enter the following command at the database prompt: UPDATE DATABASE MANAGER CONFIGURATION USING NUMDB 30. A message displays that confirms a successful completion of the update.
-   HCL Portal supports DB2 JDBC Type 2 (CLI-based) and Type 4 (JCC) drivers.

All DB2 instructions apply to DB2 pureScale except where specifically noted.

1.  To install DB2 or the DB2 client and the required fix pack, follow the instructions that are provided with the DB2 documentation.

2.  If DB2 is installed on another system than HCL Portal, copy the driver JAR files from the DB2 server to the Portal server.

    The typical location for these files on the DB2 server is in the db2_home/java directory. Place these driver files within the `wp_profile_root` directory, for example:

    -   wp_profile_root/PortalServer/dbdrivers/db2jcc4.jar
    -   wp_profile_root/PortalServer/dbdrivers/db2jcc_license_cu.jar

3.  Ensure that the DB2 instance port was added to the services file during the DB2 installation.

    AIX® HP-UX Linux™ Solaris:

    1.  Get the value for the TCP/IP service name (SVCENAME). Open a shell and log in as the instance owner. Enter the following command:

        ```
        db2 "get dbm cfg"|grep (SVCENAME)
        ```

        A typical value for the SVCENAME is (SVCENAME) = db2c_db2inst1

    2.  Get the DB2 port number by using the SVCENAME value. Enter the following command:

        ```
        echo /etc/services | grep your\_SVCENAME\_value
        ```

        A typical output for the port number:

        your_SVCENAME_value 50000/tcp

        In this example, 50000 is the port number.

    Windows™:

    1.  Get the value for the TCP/IP service name (SVCENAME). Open a DB2 Command Window and enter the following command:

        ```
        db2 get dbm cfg | findstr (SVCENAME)
        ```

        A typical value for the SVCENAME is (SVCENAME) = db2c_DB2

    2.  Get the DB2 port number by using the SVCENAME value. Enter the following command:

        ```
        type %SystemRoot%\system32\drivers\etc\services | findstr db2c_DB2
        ```

        A typical output for the port number:

        your_SVCENAME_value 50000/tcp

        In this example, 50000 is the port number.


Use the Configuration Wizard to set up and configure the database to work with HCL Portal. You can use the wizard to create custom scripts that you or your database administrator can use to configure the database. You can also use the wizard to automatically set up and configure the database. The wizard creates instructions and scripts that are based on your selections and provided data.

When you use the wizard and provide information about the database for your environment, be aware of the following considerations:

-   The value for the database name, database server node, or schema name must be unique.
-   When the DB2 Universal JDBC driver (type 4 mode) is used, connect to the database directly. Do not connect to an alias database (gateway), instead specify the real database name in the JDBC connection URL (`dbdomain.DbUrl`) and in the database name property (`dbdomain.DbName`).
-   The Configuration Wizard's default configuration uses the instance (`db2inst1`) that is created by the installation program. Using separate databases can improve scalability and performance. The wizard allows you to change the default behavior. You can select whether each of the portal database domains exist in one or many instances.
-   Your database name (`dbdomain.DbName`) cannot exceed eight characters.
-   You cannot use the **Database Transfer** option in the Configuration Wizard to assign custom table spaces on your database server. You can perform manual steps to assign custom table spaces. Go to [Assigning custom table spaces](../../../../manage/db_mgmt_sys/custom_tablespace/index.md) for more information.

Optional: After you transfer your data to DB2, run a configuration task to enable support for high availability recovery (HADR) and roll-forward recovery.

**Related information**: [JDBC type 2 and type 4 drivers](/docs/get_started/plan_deployment/traditional_deployment/database_consideration/db_jdbc_type.md)

