# Database transfer: Download the script and view instructions to delete existing databases for DB2 for z/OS

Manual steps from the Configuration Wizard are included in HCL Digital Experience Product Documentation for reference and for advanced users. The procedure includes variables and steps for different databases. When you use the wizard to configure your deployment, it replaces the variable with information that you provided in the wizard. It also shows only the steps that are specific to your environment. The instructions that the wizard generates are specific to your environment.

!!!attention
    All steps for all database environments are included without consideration for your environment. Use the Configuration Wizard to generate custom instructions for your environment.

1.  Copy the downloaded script to the database server and extract it.

2.  Use your preferred SQL processor, such as SPUFI, to run the script on the database server.

    !!!note
        When you run this script when no other database exists, you might receive a message that this script is unsuccessful. You can ignore this message.

    Example of the script that the Configuration Wizard generates.

    ```
    SET CURRENT SQLID = 'dbadmin';
    REVOKE CREATEIN, DROPIN ON SCHEMA jcr
    FROM dbconfig_ID;
    REVOKE SELECT ON SYSIBM.SYSTABLESPACE FROM dbconfig\_ID;
    REVOKE SELECT ON SYSIBM.SYSVIEWS FROM dbconfig\_ID;
    REVOKE SELECT ON SYSIBM.SYSDUMMY1 FROM dbconfig\_ID;
    REVOKE SELECT ON SYSIBM.SYSTRIGGERS FROM dbconfig\_ID;
    REVOKE SELECT ON SYSIBM.SYSINDEXPART FROM dbconfig\_ID;
    REVOKE SELECT ON SYSIBM.SYSINDEXES FROM dbconfig\_ID;
    REVOKE SELECT ON SYSIBM.SYSSYNONYMS FROM dbconfig\_ID;
    REVOKE SELECT ON SYSIBM.SYSDATABASE FROM dbconfig\_ID;
    COMMIT;
    DROP TABLESPACE WPFDBK.fdbkdbts;
    COMMIT;
    DROP TABLESPACE WPLM.lmdbts;
    COMMIT;
    DROP DATABASE WPREL;
    COMMIT;
    DROP DATABASE WPCOMM;
    COMMIT;
    DROP DATABASE WPCUST;
    COMMIT;
    DROP DATABASE WPJCR;
    COMMIT;
    DROP DATABASE WPFDBK;
    COMMIT;
    DROP DATABASE WPLM;
    COMMIT;
    DROP STOGROUP WPSSG;
    COMMIT;
    REVOKE SELECT ON SYSIBM.SYSCOLUMNS FROM dbconfig\_ID;
    REVOKE SELECT ON SYSIBM.SYSTABLES FROM dbconfig\_ID;
    REVOKE SELECT ON SYSIBM.SYSRELS FROM dbconfig\_ID;
    REVOKE SELECT ON SYSIBM.SYSFOREIGNKEYS FROM dbconfig\_ID;
    COMMIT;
    REVOKE USE OF BUFFERPOOL BP2 FROM dbconfig\_ID;
    COMMIT;
    REVOKE USE OF BUFFERPOOL BP32K1 FROM dbconfig\_ID;
    COMMIT;
    REVOKE USE OF BUFFERPOOL BP3 FROM dbconfig\_ID;
    COMMIT;
    ```



