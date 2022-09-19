# Accessing the Configuration Wizard

The home page of the Configuration Wizard provides access to common configuration tasks. Supported tasks include setting up a stand-alone server, setting up a cluster, transferring from Apache Derby to another supported database, migrating your server, installing add-ons, and more.

Click ![Back](../images/cw_backicon.jpg) and ![Next](../images/cw_forwardicon.jpg) to move back or forward in the Configuration Wizard.

1.  To get the latest updates for the wizard, apply the most recent Combined Cumulative Fix. For more information about applying the latest fix pack, see [HCL Digital Experience Combined Cumulative Fix Strategy](https://help.hcltechsw.com/digital-experience/9.5/overview/new_cf95.html).


2.  Restart server1 to ensure that the Configuration Wizard uses the updated environment variables. Go to AppServer\_home/profiles/cw\_profile/bin and stop the server:

    -   AIX® HP-UX Linux™ Solaris: ./stopServer.sh server1 -username username -password password
    -   IBM® i: stopServer cw\_profile -username username -password password
    -   Windows™: stopServer.bat server1 -username username -password password
    Then, start the server:

    -   AIX HP-UX Linux Solaris: ./startServer.sh server1
    -   IBM i: startServer cw\_profile
    -   Windows: startServer.bat server1
3.  Access the Configuration Wizard. Go to https://your\_server/hcl/wizard for a Kubernetes deployment or  http://your\_server:10200/ibm/wizard for a traditional deployment.

    **Note:** If working with HCL Digital Experience a software level prior to CF18, the wizard address is: http://your\_server:10200/ibm/wizard. After installing CF18, the Configuration Wizard address is http://your\_server:10200/hcl/wizard.


4.  Log in to the Configuration Wizard with the administrative ID for the configuration wizard profile, cw\_profile.

    **Note:** The wizard user interface might not be available in all languages. If the language is not currently supported, you might see the English version. For details on the supported languages for all of the HCL Digital Experience user interfaces, see [Supported languages](../reference/supportedlanguages.md).



**Related information**  


[Setting up a stand-alone server](../config/config_standalone.md)

[Setting up a cluster](../config/config_cluster.md)

[Create a deployment manager](../config/cw_dmgr_profile.md)

[Create a cluster](../config/cw_create_cluster.md)

[Static cluster](../config/cw_create_staticcluster.md)

[Dynamic cluster](../config/cw_create_dynamiccluster.md)

[Create an additional cluster node](../config/cw_add_node.md)

[Completing the context root change started during installation](../config/cfg_intr_inst.md)

[Changing the portal URI after an installation](../config/cfg_intr.md)

[DB2 z/OS: Database transfer](../config/cw_db_transfer.md)

[Enable federated security](../config/cw_ldap.md)

[Starting and stopping servers, deployment managers, and node agents](../admin-system/stopstart.md)

[Migrate a stand-alone server](../config/cw_migrate_stand_alone.md)

[Cluster Step 1: Migrate the deployment manager profile](../config/cw_migrate_cluster_1.md)

[Cluster Step 2: Migrate node profiles](../config/cw_migrate_cluster_2.md)

[Cluster Step 3: Upgrade node profiles](../config/cw_migrate_cluster_3.md)

[Troubleshooting the Configuration Wizard](../trouble/cw_troubleshooting.md)

[Troubleshooting: Database Transfer](../trouble/cw_dbtransfer_trouble.md)

[DB2: Troubleshooting Database Transfer](../trouble/cw_dbtransfer-db2.md)

[IBM DB2 for i: Troubleshooting Database Transfer](../trouble/cw_dbtransfer_ibmi.md)

[DB2 for z/OS: Troubleshooting Database Transfer](../trouble/cw_dbtransfer_zos.md)

[SQL: Troubleshooting Database Transfer](../trouble/cw_dbtransfer_sql.md)

[Oracle: Troubleshooting Database Transfer](../trouble/cw_dbtransfer_oracle.md)

[Troubleshooting: Enable federated security option](../trouble/cw_ldap.md)

[Troubleshooting: Create a deployment manager](../trouble/cw_create_dmgr.md)

[Troubleshooting: Create a cluster option](../trouble/cw_create_cluster.md)

[Troubleshooting: Create an additional cluster node](../trouble/cw_create_addnode.md)

[Troubleshooting: Create an HCL Digital Experience profile](../trouble/cw_createprofile.md)

[Troubleshooting: Remove a WebSphere Portal profile](../trouble/cw_removeprofile.md)

[Troubleshooting: Migrate a stand-alone server](../trouble/cw_migrate_standalone.md)

[Troubleshooting: Migrate the deployment manager profile for a cluster environment](../trouble/cw_migrate_cluster1.md)

[Troubleshooting: Migrate node profiles for a cluster environment](../trouble/cw_migrate_cluster2.md)

[Troubleshooting: Upgrade node profiles for a cluster environment](../trouble/cw_migrate_cluster3.md)

