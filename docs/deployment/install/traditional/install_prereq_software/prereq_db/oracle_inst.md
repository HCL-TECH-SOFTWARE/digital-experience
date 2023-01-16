# Install and prepare Oracle or Oracle RAC

You can use Oracle or Oracle RAC as the database software to configure it to work with HCL Digital Experience.

## Before you begin

-   Review the database considerations.
-   Ensure the database that you plan to use is supported by this version of HCL Portal. Refer to the list of supported databases in the HCL Portal detailed system requirements.
-   For Linux™ and Oracle OCI Type-2 JDBC driver: The Oracle OCI Type-2 JDBC driver with the full oracle client works with HCL Portal. However, to successfully complete the database transfer task, the Oracle Thin Type-4 JDBC is required for Linux. After successfully completing the database transfer task using the thin driver, if needed, you can specify and then return to using the Oracle OCI Type-2 full client.

## Procedure

1.  Install Oracle JDBC Type 4 drivers or Oracle JDBC OCI Type 2 client and drivers as appropriate.

    Refer to the Oracle or [Oracle RAC product documentation](https://docs.oracle.com/cd/E11882_01/rac.112/e41960/admcon.htm#RACAD1111) for installation instructions.

2.  On your **Oracle RAC**, ensure the Oracle CRS (Cluster Ready Service) and Oracle RAC databases are installed and configured on the primary and secondary nodes.

3.  Start global services daemon (GSD), oracle listeners, and agents in both RAC nodes.

    Run the following commands:

    -   `$ gsdctl start`
    -   `$ lsnrctl start`
    -   `$ agentctl start`

4.  The default table space size for Oracle RAC might need to be set to 1024 MB with `autoextend` turned on for database transfer to be successful.

5.  **Update your environment variables**. For JDBC OCI Type 2 drivers only (AIX): Set the environment variable on the HCL Digital Experience server to point to the directory where you downloaded and extracted the compressed Oracle client files.

    ```
    LIBPATH=/u01/app/oracle/product/11.2.0/client_1;export LIBPATH
    ```

6.  JDBC OCI (Linux): Set the environment variable on the HCL Digital Experience server to point to the directory where you downloaded and extracted the compressed Oracle client files.

    ```
    LD_LIBRARY_PATH=/u01/app/oracle/product/11.2.0/client_1;export LD_LIBRARY_PATH
    ```

7.  Restart server1 to ensure that the Configuration Wizard uses the updated environment variables. Go to AppServer_home/profiles/cw_profile/bin and stop the server:

    -   AIX®, Linux: `./stopServer.sh server1 -username username -password password`
    -   Windows™: `stopServer.bat server1 -username username -password password`
    
    Then, start the server:

    -   AIX, Linux: `./startServer.sh server1`
    -   Windows: `startServer.bat server1`

## What to do next
Use the Configuration Wizard to set up and configure the database to work with HCL Portal. You can use the wizard to create custom scripts that you or your database administrator can use to configure the database. You can also use the wizard to automatically set up and configure the database. The wizard creates instructions and scripts that are based on your selections and provided data.

!!!important
    To successfully complete the database transfer task, the Oracle Thin Type-4 JDBC is required for Linux.

When you use the wizard, you provide information about the database for your environment.

!!!note
    Before you enter your database name (`dbdomain.DbName`) in the Configuration Wizard, check your database documentation for restrictions on character length.

You cannot use the **Database Transfer** option in the Configuration Wizard to assign custom table spaces on your database server. You can perform manual steps to assign custom table spaces. Go to [Assigning custom table spaces](../../../../manage/db_mgmt_sys/custom_tablespace/index.md) for more information.

???+ info "Related information" 
    - [JDBC type 2 and type 4 drivers](../../../../../get_started/plan_deployment/traditional_deployment/database_consideration/db_jdbc_type.md)


