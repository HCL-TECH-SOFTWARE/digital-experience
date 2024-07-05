# Updating DB2 self-tuning memory manager (STMM) settings

With the Version 8.5 release, a number of the settings have been changed to be managed by the self-tuning memory manager (STMM) engine. Change your settings to the recommended values, if there are no specific needs for the current values.

1.  Stop the portal server.

2.  Change your settings to the recommended values:

    UPDATE DBM CFG USING sheapthres 0;

    For each Portal database (release, community, customization, jcr, feedback, likeminds):

    -   UPDATE DB CFG FOR dbname USING applheapsz automatic;
    -   UPDATE DB CFG FOR dbname USING stmtheap automatic;
    -   UPDATE DB CFG FOR dbname USING dbheap automatic;
    -   UPDATE DB CFG FOR dbname USING locklist automatic;
    -   UPDATE DB CFG FOR dbname USING avg_appls automatic;
    -   UPDATE DB CFG FOR dbname USING PCKCACHESZ automatic;
    -   UPDATE DB CFG FOR dbname USING AUTO_MAINT on;
    -   UPDATE DB CFG FOR dbname USING SHEAPTHRES_SHR automatic;
    -   UPDATE DB CFG FOR dbname USING SORTHEAP automatic;
    -   UPDATE DB CFG FOR dbname USING SELF_TUNING_MEM ON;
    -   Required only for the database that contains the JCR Domain: UPDATE DB CFG FOR dbname USING logfilsiz 16000;
    -   Required only for the database that contains the JCR Domain: UPDATE DB CFG FOR dbname USING logprimary 20;
    -   Required only for the database that contains the JCR Domain: UPDATE DB CFG FOR dbname USING logsecond 50;
    -   Required only for the database that contains the JCR Domain: UPDATE DB CFG FOR dbname USING logbufsz 500;
    
3.  Connect to your database.

    db2 connect to dbdomain.DbName user dbdomain.DBA.DbUser using dbdomain.DBA.DbPassword

    !!!note
        -   For dbdomain.DbName, enter the name of the portal domain database.
        -   For dbdomain.DBA.DbUser, enter the name of the database administrator user ID for privileged access operations during database creation and setup.
        -   For dbdomain.DBA.DbPassword, enter the database administrator password for privileged access operations during database creation.

4.  Change your settings to the recommended bufferpool values:

    -   ALTER BUFFERPOOL ICMLSFREQBP4 SIZE automatic;
    -   ALTER BUFFERPOOL ICMLSVOLATILEBP4 SIZE automatic;
    -   ALTER BUFFERPOOL ICMLSMAINBP32 SIZE automatic;
    -   ALTER BUFFERPOOL CMBMAIN4 SIZE automatic;


???+ info "Related information"  
    -   [HCL Digital Experience roadmaps for stand-alone servers](../../../../../../get_started/plan_deployment/traditional_deployment/roadmaps/rm_install_deployment/rm_standalone_servers/rm_standalone_parent.md)
    -   [Setting up a cluster](../../../../../../deployment/manage/config_cluster/index.md)
    -   [Create a deployment manager](../../../../../../deployment/manage/config_cluster/cw_dmgr_profile.md)
    -   [Create a cluster](../../../../../../deployment/manage/config_cluster/create_cluster/index.md)
    -   [Create an additional cluster node](../../../../../../deployment/manage/config_cluster/cw_add_node.md)
    -   [Enable federated security](../../../../../../deployment/manage/security/people/authentication/user_registry/cw_ldap.md)

