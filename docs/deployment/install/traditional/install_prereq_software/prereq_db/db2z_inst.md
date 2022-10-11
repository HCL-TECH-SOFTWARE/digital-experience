# Install and prepare DB2 for z/OS

Use this information to install DB2 for z/OS for use with HCL Digital Experience.

-   Review the database considerations.
-   Ensure the database that you plan to use is supported by this version of HCL. Refer to the list of supported databases in the HCL detailed system requirements.
-   The DB2® subsystem must be on a supported z/OS operating system.
-   Ensure that Java Database Connectivity requirements are met. Consult the following references:
    -   *DB2 Universal Database for OS/390 and z/OS: Application Programming Guide and Reference for Java™*
    -   The IBM Redbooks publication, [DB2 for z/OS and OS/390: Ready for Java SG24-6435-00](http://www.redbooks.ibm.com/abstracts/sg246435.html?Open).
-   Except, when you migrate to a new release of HCL Portal, using the same DB2 for z/OS subsystem for two independent lines of production must be avoided. Each line of production of HCL Portal must use a subsystem of DB2 for z/OS that is dedicated exclusively to this installation. Because the DB2 for z/OS database catalog is shared, complications might occur in a shared environment.

1.  To use DB2 for z/OS as the database software for HCL Portal, you must have DB2 for z/OS installed on your z/OS system. Refer to the DB2 for z/OS product documentation for instructions.

2.  Read the Planning for DB2 for z/OS topic before you configure DB2 for z/OS as the HCL Portal database.

3.  Check the buffer pool allocations for your system and define the buffer pools as appropriate for your installation and define a large enough size.

    ```
    -db2 display bufferpool(bp2) 
    -db2 alter bufferpool(bp2) vpsize(15000)
    ```

    1.  Repeat for extra buffer pools as needed.

        For example:

        -   bp3
        -   bp4
        -   bp5
        -   bp32k1
        -   bp32k2
4.  Update the BP8K0 catalog buffer pool to 35,000 buffers before you transfer the database. Change this value according to your environment. The SYSIBM.SYSDATABASE table is in this buffer pool and is used extensively by DB2 for z/OS for the database transfer.

5.  Change the Common Service Area (CSA) setting to 3500,350000.

    Read the appropriate DB2 for z/OS topic for complete information about calculating and setting CSA:

    -   DB2 for z/OS Version 10.1, [End of Support Statement](https://www.ibm.com/support/pages/db2-version-101-end-support-september-30-2017)
    -   DB2 for z/OS Version 11.1, [Common service area storage requirements](https://www.ibm.com/docs/en/db2-for-zos/11?topic=zos-common-service-area-storage-requirements)
6.  During database transfer from Derby to DB2 for z/OS, a supporting low-order byte table space is created for the database tables that store documents. The PRIQTY and SECQTY for the table space are assigned with the default values. If you plan to store many documents, use an automatic class selection (ACS) routine to allocate the DB2 for z/OS data sets with a primary and secondary space allocation of at least 10 cylinders. Or, specify a large enough value for **PRIQTY** and **SEQTY** in the DB2 DSNTIJUZ member. The table spaces can be identified by their name, having a structure like JCRDB.Sxxxxxxx, where xxxxxxx is a system-assigned combination of seven numbers and characters.

    1.  Also, in member DSNTIJUZ, update the following parameters and then verify DSNTIJUZ runs successfully.

        -   edmdbdc = 204800
        -   edmpool=409600
        -   edmstmtc=204800
        -   rrulock=no
        -   rrulock=yes
        -   cachedyn=yes (prepared, dynamic SQL statements are cached)
        -   dbacrvw=yes (to allow database administrators to create Views)
        -   +++tbsbpxml=BP16K1 (to explicitly create an XML table space. This value can be changed to any valid 16 K buffer pool where the Administrative User has the USE privilege.)
7.  Ensure that the job DSNTIJSG ran to create the objects that are needed for the DB2 JDBC and ODBC metadata methods. See the DB2 Installation Guide Enabling stored procedures and tables for JDBC and ODBC support.

8.  Ensure that job DSNTIJMS runs successfully (re-execute binds).

9.  Ensure that job DSNTIJEX runs successfully.

10. Because large objects are stored in columns that can become large, logging changes to these columns requires a huge amount of log space. For this reason, large object (LOB) logging is disabled by default for table spaces that contain such data. With LOB logging disabled, you can recover full backups, but not incremental backups that can be used for point in time recovery. To recover point in time backups, you must enable LOB logging. For detailed instructions, see technote 1306637, *Managing LOB logging in DB2 for z/OS*.

11. Changes to DB2 for z/OS Version 9.1 that is related to defaults buffer pools affect the CREATE LOB TABLESPACE in that version of DB2 for z/OS. The **CREATE LOB TABLESPACE** takes its default buffer pool from **ZPARM** field TBSBPLOB if the buffer pool is not explicitly specified, rather than taking the buffer pool from the database.

12. LikeMinds
13. If you intend to run the LikeMinds sample, increase the NUMLKTS and NUMLKUS parameters: Ten times the default is sufficient, more depending on your usage of the sample.

    For example, if NUMLKTS=1000 and NUMLKUS=10000 are the installation default values, then update these values to NUMLKTS=10000 and NUMLKUS=100000.

14. Type 2 driver configuration
15. If you are planning to use Type 2 driver with DB2 for z/OS Version 9.1.2, ensure that DB2 for z/OS APAR PK58105 is installed.

16. If you are using the older DB2 Type 2 JDBC driver, enable extended shared memory usage with the following commands:

    ```
    export EXTSHM=ON
    db2set DB2ENVLIST=EXTSHM
    db2start
    ```

    For permanent changes, add the environment variable to the profile.env file:

    ```
    DB2ENVLIST='EXTSHM'
    ```

    in /home/db2inst/sqllib/userprofile add:

    ```
    export EXTSHM=ON
    ```

    !!!note
        The shell must be reopened before you restart DB2 for z/OS.

17. If you are using the older DB2 Type 2 JDBC driver, configure your DB2 Connect client with the following commands:

    ```
    db2 update dbm cfg using tp_mon_name WAS
    db2 update dbm cfg using spm_name hostname
    ```

    where `hostname` is the host name for the server where the DB2 Connect client is installed (same as portal server).

18. If you are using the older DB2 Type 2 JDBC driver, install the DB2 Connect client on the HCL Portal server to connect to the remote database.


Use the Configuration Wizard to set up and configure the database to work with HCL. You can use the wizard to create custom scripts that you or your database administrator can use to configure the database. You can also use the wizard to automatically set up and configure the database. The wizard creates instructions and scripts that are based on your selections and provided data.

When you use the Configuration Wizard and provide information about your database, consider the following points:

-   If you plan to use a single DB2 for z/OS subsystem to hold data for more multiple installations, use the same user name but a separate schema name for each database domain. For Member Manager, the user name must match the schema; the same database user cannot be used for the Member Manager databases of two distinct portal installations.

-   Each portal installation must be in separate and distinct WebSphere® Application Server cells. If the portals are installed in the same file system, each must be installed in a separate and unique directory. If the portals are installed in different file systems, the same directory name can be used.

-   In a remote database environment, HCL Portal and DB2 Connect are installed on one server (the local server) and the DB2 for z/OS server is installed on a separate server (the remote server).

-   Before you enter your database name (`dbdomain.DbName`) in the Configuration Wizard, check your database documentation for restrictions on character length.
-   You cannot use the **Database Transfer** option in the Configuration Wizard to assign custom table spaces on your database server. You can perform manual steps to assign custom table spaces. Go to [Assigning custom table spaces](../../../../manage/db_mgmt_sys/custom_tablespace/index.md) for more information.

???+ info "Related information" 
    -   [JDBC type 2 and type 4 drivers](/docs/get_started/plan_deployment/traditional_deployment/database_consideration/db_jdbc_type.md)

