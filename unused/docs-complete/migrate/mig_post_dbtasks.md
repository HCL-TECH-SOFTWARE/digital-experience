# Database tasks 

There are different post-migration tasks that are required depending on the type of database that is used.

-   **[Updating the isolation level for SQL server databases ](../migrate/mig_post_sql.md)**  
If you are using an SQL Server, you must update the isolation level of your release, community, customization, and JCR databases to improve concurrency and efficiency of the databases.
-   **[Updating DB2 self-tuning memory manager \(STMM\) settings ](../migrate/mig_t_post_db2_stmm.md)**  
With the Version 8.5 release, a number of the settings have been changed to be managed by the self-tuning memory manager \(STMM\) engine. Change your settings to the recommended values, if there are no specific needs for the current values.
-   **[Oracle: Enabling the auto space advisor background task ](../migrate/mig_post_oracle_enableasa.md)**  
If you use an Oracle database, you must complete a post-migration task to enable the Oracle background task called "Auto Space Advisor" after your run the upgrade-profile task during migration using the Configuration Wizard.

**Parent topic:**[Post-migration activities ](../migrate/mig_t_post_mig.md)

