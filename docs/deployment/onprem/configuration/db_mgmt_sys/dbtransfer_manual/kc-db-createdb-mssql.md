# Database transfer: Download a script and create your MS SQL database

Manual steps from the Configuration Wizard are included in HCL Digital Experience Product Documentation for reference and for advanced users. The procedure includes variables and steps for different databases. When you use the wizard to configure your deployment, it replaces the variable with information that you provided in the wizard. It also shows only the steps that are specific to your environment. The instructions that the wizard generates are specific to your environment.

**Attention:** All steps for all database environments are included without consideration for your environment. Use the Configuration Wizard to generate custom instructions for your environment.

1.  Copy the downloaded script to the database server and extract it.

2.  Run the SQL statements that are listed in this script in your SQL processor.

    Example of the script that is created by the Configuration Wizard:

    ```
    CREATE DATABASE WPSDB ON (NAME=RELDB_DATA, FILENAME='C:\\Microsoft SQL Server\\instance\\MSSQL/Data/WPSDB_Data.MDF', SIZE=10MB, MAXSIZE=UNLIMITED, FILEGROWTH=5MB)
    LOG ON (NAME=DB_LOG, FILENAME='C:\\Microsoft SQL Server\\instance\\MSSQL/Data/WPSDB_Log.LDF', SIZE=100MB, MAXSIZE=30000MB, FILEGROWTH=100MB)
    collate SQL_Latin1_General_CP1_CS_AS
    ;
    ALTER DATABASE WPSDB SET READ_COMMITTED_SNAPSHOT ON;
    ```


**Parent topic:**[Manual Steps: Database Transfer option in the Configuration Wizard](../eua-workflows/kc-db-parent.md)

