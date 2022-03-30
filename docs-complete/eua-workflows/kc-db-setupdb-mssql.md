# Database transfer: Download the script and setup your MS SQL database 

Manual steps from the Configuration Wizard are included in HCL Digital Experience Product Documentation for reference and for advanced users. The procedure includes variables and steps for different databases. When you use the wizard to configure your deployment, it replaces the variable with information that you provided in the wizard. It also shows only the steps that are specific to your environment. The instructions that the wizard generates are specific to your environment.

**Attention:** All steps for all database environments are included without consideration for your environment. Use the Configuration Wizard to generate custom instructions for your environment.

1.  Copy the downloaded script to the database server and extract it.

2.  Run the SQL statements that are listed in this script in your SQL processor.

    db2 -tvf SetupDB2Database.sql

    Example of the script that the Configuration Wizard generates:

    ```
    -- Create the schema
    USE [WPSDB];
    GO
    CREATE SCHEMA release;
    GO
    -- Create the configuration user
    USE [WPSDB];
    EXEC sp_addlogin 'config\_ID', 'config\_pwd', 'WPSDB';
    -- Add a role to the user for XA transactions
    USE [master];
    EXEC sp_addrolemember N'SqlJDBCXAUser', N'config\_ID';
    GO
    -- Add the configuration user to the database
    USE [WPSDB];
    EXEC sp_grantdbaccess 'config\_ID';
    GO
    -- Create the runtime user
    USE [WPSDB];
    EXEC sp_addlogin 'runtime\_ID', 'run\_pwd', 'WPSDB';
    -- Add a role to the user for XA transactions
    USE [master];
    EXEC sp_addrolemember N'SqlJDBCXAUser', N'runtime_ID';
    GO
    -- Add the runtime user to the database
    USE [WPSDB];
    EXEC sp_grantdbaccess 'runtime\_ID';
    GO
    -- Create the configuration role
    USE [WPSDB];
    CREATE ROLE [WP_BASE_CONFIG_USERS];
    GRANT CREATE TABLE TO [WP_BASE_CONFIG_USERS];
    GRANT ALTER, SELECT, INSERT, UPDATE, DELETE, REFERENCES ON SCHEMA::[release] TO [WP_BASE_CONFIG_USERS];
    EXEC sp_addrolemember N'WP_BASE_CONFIG_USERS', N'config\_ID';
    GO
    -- Create the runtime role
    CREATE ROLE [WP_BASE_RUNTIME_USERS];
    EXEC sp_addrolemember N'WP_BASE_RUNTIME_USERS', N'runtime\_ID';
    GO
    -- Create the schema
    USE [WPSDB];
    GO
    CREATE SCHEMA community;
    GO
    -- Add the configuration user to the database
    USE [WPSDB];
    EXEC sp_grantdbaccess 'config\_ID';
    GO
    -- Add the runtime user to the database
    USE [WPSDB];
    EXEC sp_grantdbaccess 'runtime\_ID';
    GO
    -- Create the configuration role
    USE [WPSDB];
    GRANT ALTER, SELECT, INSERT, UPDATE, DELETE, REFERENCES ON SCHEMA::[community] TO [WP_BASE_CONFIG_USERS];
    EXEC sp_addrolemember N'WP_BASE_CONFIG_USERS', N'config\_ID';
    GO
    -- Create the runtime role
    EXEC sp_addrolemember N'WP_BASE_RUNTIME_USERS', N'runtime\_ID';
    GO
    -- Create the schema
    USE [WPSDB];
    GO
    CREATE SCHEMA customization;
    GO
    -- Add the configuration user to the database
    USE [WPSDB];
    EXEC sp_grantdbaccess 'config\_ID';
    GO
    -- Add the runtime user to the database
    USE [WPSDB];
    EXEC sp_grantdbaccess 'runtime\_ID';
    GO
    -- Create the configuration role
    USE [WPSDB];
    GRANT ALTER, SELECT, INSERT, UPDATE, DELETE, REFERENCES ON SCHEMA::[customization] TO [WP_BASE_CONFIG_USERS];
    EXEC sp_addrolemember N'WP_BASE_CONFIG_USERS', N'config';
    GO
    -- Create the runtime role
    EXEC sp_addrolemember N'WP_BASE_RUNTIME_USERS', N'runtime\_ID';
    GO
    -- Create the schema
    USE [WPSDB];
    GO
    CREATE SCHEMA jcr;
    GO
    -- Add the configuration user to the database
    USE [WPSDB];
    EXEC sp_grantdbaccess 'config\_ID';
    GO
    -- Add the runtime user to the database
    USE [WPSDB];
    EXEC sp_grantdbaccess 'runtime\_ID';
    GO
    -- Create the configuration role
    USE [WPSDB];
    CREATE ROLE [WP_JCR_CONFIG_USERS];
    GRANT CREATE TABLE TO [WP_JCR_CONFIG_USERS];
    GRANT CREATE VIEW TO [WP_JCR_CONFIG_USERS];
    GRANT ALTER, SELECT, INSERT, UPDATE, DELETE, REFERENCES ON SCHEMA::[jcr] TO [WP_JCR_CONFIG_USERS];
    EXEC sp_addrolemember N'WP_JCR_CONFIG_USERS', N'config\_ID';
    GO
    -- Create the runtime role
    CREATE ROLE [WP_JCR_RUNTIME_USERS];
    EXEC sp_addrolemember N'WP_JCR_RUNTIME_USERS', N'runtime\_ID';
    GO
    -- Create the schema
    USE [WPSDB];
    GO
    CREATE SCHEMA feedback;
    GO
    -- Add the configuration user to the database
    USE [WPSDB];
    EXEC sp_grantdbaccess 'config\_ID';
    GO
    -- Add the runtime user to the database
    USE [WPSDB];
    EXEC sp_grantdbaccess 'runtime\_ID';
    GO
    -- Create the configuration role
    USE [WPSDB];
    CREATE ROLE [WP_PZN_CONFIG_USERS];
    GRANT CREATE TABLE TO [WP_PZN_CONFIG_USERS];
    GRANT ALTER, SELECT, INSERT, UPDATE, DELETE, REFERENCES ON SCHEMA::[feedback] TO [WP_PZN_CONFIG_USERS];
    EXEC sp_addrolemember N'WP_PZN_CONFIG_USERS', N'config\_ID';
    GO
    -- Create the runtime role
    CREATE ROLE [WP_PZN_RUNTIME_USERS];
    EXEC sp_addrolemember N'WP_PZN_RUNTIME_USERS', N'runtime\_ID';
    GO
    -- Create the schema
    USE [WPSDB];
    GO
    CREATE SCHEMA likeminds;
    GO
    -- Add the configuration user to the database
    USE [WPSDB];
    EXEC sp_grantdbaccess 'config\_ID';
    GO
    -- Add the runtime user to the database
    USE [WPSDB];
    EXEC sp_grantdbaccess 'runtime\_ID';
    GO
    -- Create the configuration role
    USE [WPSDB];
    GRANT CREATE PROCEDURE TO [WP_PZN_CONFIG_USERS];
    GRANT ALTER, SELECT, INSERT, UPDATE, DELETE, REFERENCES ON SCHEMA::[likeminds] TO [WP_PZN_CONFIG_USERS];
    EXEC sp_addrolemember N'WP_PZN_CONFIG_USERS', N'config\_ID';
    GO
    -- Create the runtime role
    EXEC sp_addrolemember N'WP_PZN_RUNTIME_USERS', N'runtime\_ID';
    GO
    ```


**Parent topic:**[Manual Steps: Database Transfer option in the Configuration Wizard](../eua-workflows/kc-db-parent.md)

