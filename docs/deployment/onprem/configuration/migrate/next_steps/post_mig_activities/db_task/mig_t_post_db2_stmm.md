# Updating DB2 self-tuning memory manager \(STMM\) settings

With the Version 8.5 release, a number of the settings have been changed to be managed by the self-tuning memory manager \(STMM\) engine. Change your settings to the recommended values, if there are no specific needs for the current values.

1.  Stop the portal server.

2.  Change your settings to the recommended values:

    UPDATE DBM CFG USING sheapthres 0;

    For each Portal database \(release, community, customization, jcr, feedback, likeminds\):

    -   UPDATE DB CFG FOR dbname USING applheapsz automatic;
    -   UPDATE DB CFG FOR dbname USING stmtheap automatic;
    -   UPDATE DB CFG FOR dbname USING dbheap automatic;
    -   UPDATE DB CFG FOR dbname USING locklist automatic;
    -   UPDATE DB CFG FOR dbname USING avg\_appls automatic;
    -   UPDATE DB CFG FOR dbname USING PCKCACHESZ automatic;
    -   UPDATE DB CFG FOR dbname USING AUTO\_MAINT on;
    -   UPDATE DB CFG FOR dbname USING SHEAPTHRES\_SHR automatic;
    -   UPDATE DB CFG FOR dbname USING SORTHEAP automatic;
    -   UPDATE DB CFG FOR dbname USING SELF\_TUNING\_MEM ON;
    -   Required only for the database that contains the JCR Domain: UPDATE DB CFG FOR dbname USING logfilsiz 16000;
    -   Required only for the database that contains the JCR Domain: UPDATE DB CFG FOR dbname USING logprimary 20;
    -   Required only for the database that contains the JCR Domain: UPDATE DB CFG FOR dbname USING logsecond 50;
    -   Required only for the database that contains the JCR Domain: UPDATE DB CFG FOR dbname USING logbufsz 500;
3.  Connect to your database.

    db2 connect to dbdomain.DbName user dbdomain.DBA.DbUser using dbdomain.DBA.DbPassword

    **Note:**

    -   For dbdomain.DbName, enter the name of the portal domain database.
    -   For dbdomain.DBA.DbUser, enter the name of the database administrator user ID for privileged access operations during database creation and setup.
    -   For dbdomain.DBA.DbPassword, enter the database administrator password for privileged access operations during database creation.
4.  Change your settings to the recommended bufferpool values:

    -   ALTER BUFFERPOOL ICMLSFREQBP4 SIZE automatic;
    -   ALTER BUFFERPOOL ICMLSVOLATILEBP4 SIZE automatic;
    -   ALTER BUFFERPOOL ICMLSMAINBP32 SIZE automatic;
    -   ALTER BUFFERPOOL CMBMAIN4 SIZE automatic;

**Parent topic:**[Database tasks](../migrate/mig_post_dbtasks.md)

**Related information**  


[Setting up a stand-alone server](../config/config_standalone.md)

[Setting up a cluster](../config/config_cluster.md)

[Create a deployment manager](../config/cw_dmgr_profile.md)

[Create a cluster](../config/cw_create_cluster.md)

[Static cluster](../config/cw_create_staticcluster.md)

[Dynamic cluster](../config/cw_create_dynamiccluster.md)

[Create an additional cluster node](../config/cw_add_node.md)

[DB2 z/OS: Database transfer](../config/cw_db_transfer.md)

[Enable federated security](../config/cw_ldap.md)

