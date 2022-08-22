# Database transfer: Download the script and create the database on DB2 for z/OS server

Manual steps from the Configuration Wizard are included in HCL Digital Experience Product Documentation for reference and for advanced users. The procedure includes variables and steps for different databases. When you use the wizard to configure your deployment, it replaces the variable with information that you provided in the wizard. It also shows only the steps that are specific to your environment. The instructions that the wizard generates are specific to your environment.

**Attention:** All steps for all database environments are included without consideration for your environment. Use the Configuration Wizard to generate custom instructions for your environment.

1.  Copy the downloaded script to the database server and extract it.

2.  Use your preferred SQL processor, such as SPUFI, to run the script on the database server. Run the DB2® commands on z/OS® in the order that is listed in the script.

    Example of the script that the Configuration Wizard generates.

    ```
    SET CURRENT SQLID = 'dbadmin';
    CREATE STOGROUP WPSSG
           VOLUMES('*')
           VCAT DSN910;
    COMMIT;
    CREATE DATABASE WPREL
           STOGROUP WPSSG
           BUFFERPOOL BP2
           INDEXBP BP3
           CCSID UNICODE;
    COMMIT;
    CREATE DATABASE WPCOMM
           STOGROUP WPSSG
           BUFFERPOOL BP2
           INDEXBP BP3
           CCSID UNICODE;
    COMMIT;
    CREATE DATABASE WPCUST
           STOGROUP WPSSG
           BUFFERPOOL BP2
           INDEXBP BP3
           CCSID UNICODE;
    COMMIT;
    CREATE DATABASE WPJCR
           STOGROUP WPSSG
           BUFFERPOOL BP2
           INDEXBP BP3
           CCSID UNICODE;
    COMMIT;
    CREATE DATABASE WPFDBK
           STOGROUP WPSSG
           BUFFERPOOL BP2
           CCSID UNICODE;
    COMMIT;
    CREATE DATABASE WPLM
           STOGROUP WPSSG
           BUFFERPOOL BP2
           CCSID UNICODE;
    COMMIT;
    GRANT CREATEIN, DROPIN ON SCHEMA jcr
    TO dbconfig\_ID;
    GRANT SELECT ON SYSIBM.SYSTABLESPACE TO dbconfig\_ID;
    GRANT SELECT ON SYSIBM.SYSVIEWS TO dbconfig\_ID;
    GRANT SELECT ON SYSIBM.SYSDUMMY1 TO dbconfig\_ID;
    GRANT SELECT ON SYSIBM.SYSTRIGGERS TO dbconfig\_ID;
    GRANT SELECT ON SYSIBM.SYSINDEXPART TO dbconfig\_ID;
    GRANT SELECT ON SYSIBM.SYSINDEXES TO dbconfig\_ID;
    GRANT SELECT ON SYSIBM.SYSSYNONYMS TO dbconfig\_ID;
    GRANT SELECT ON SYSIBM.SYSDATABASE TO dbconfig\_ID;
    COMMIT;
    CREATE TABLESPACE fdbkdbts IN WPFDBK
           BUFFERPOOL BP2
           LOCKSIZE ROW
           SEGSIZE 4
           DEFINE NO;
    COMMIT;
    CREATE TABLESPACE lmdbts IN WPLM
           BUFFERPOOL BP2
           LOCKSIZE ROW
           SEGSIZE 4
           DEFINE NO;
    COMMIT;
    GRANT SELECT ON SYSIBM.SYSCOLUMNS TO dbconfig\_ID;
    GRANT SELECT ON SYSIBM.SYSTABLES TO dbconfig\_ID;
    GRANT SELECT ON SYSIBM.SYSRELS TO dbconfig\_ID;
    GRANT SELECT ON SYSIBM.SYSFOREIGNKEYS TO dbconfig\_ID;
    COMMIT;
    GRANT DBADM ON DATABASE WPREL
    TO dbconfig\_ID WITH GRANT OPTION;
    COMMIT;
    GRANT DBADM ON DATABASE WPCOMM
    TO dbconfig\_ID WITH GRANT OPTION;
    COMMIT;
    GRANT DBADM ON DATABASE WPCUST
    TO dbconfig\_ID WITH GRANT OPTION;
    COMMIT;
    GRANT DBADM ON DATABASE WPJCR
    TO dbconfig\_ID WITH GRANT OPTION;
    COMMIT;
    GRANT DBADM ON DATABASE WPFDBK
    TO dbconfig\_ID WITH GRANT OPTION;
    COMMIT;
    GRANT DBADM ON DATABASE WPLM
    TO dbconfig\_ID WITH GRANT OPTION;
    COMMIT;
    GRANT USE OF STOGROUP WPSSG
    TO dbconfig\_ID;
    COMMIT;
    GRANT USE OF BUFFERPOOL BP2 TO dbconfig\_ID;
    COMMIT;
    GRANT USE OF BUFFERPOOL BP32K1 TO dbconfig\_ID;
    COMMIT;
    GRANT USE OF BUFFERPOOL BP3 TO dbconfig\_ID;
    COMMIT;
    ```



