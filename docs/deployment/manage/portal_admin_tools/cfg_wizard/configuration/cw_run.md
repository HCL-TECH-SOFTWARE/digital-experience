# Accessing the Configuration Wizard

The home page of the Configuration Wizard provides access to common configuration tasks. Supported tasks include setting up a stand-alone server, setting up a cluster, transferring from Apache Derby to another supported database, migrating your server, installing add-ons, and more.

Click **Back** and **Next** to move back or forward in the Configuration Wizard.

1.  To get the latest updates for the wizard, apply the most recent Combined Cumulative Fix. For more information about applying the latest fix pack, see [Apply Combined Cumulative Fix](../../../../../deployment/install/traditional/cf_install/index.md) for more information.

2.  Restart server1 to ensure that the Configuration Wizard uses the updated environment variables. Go to AppServer_home/profiles/cw_profile/bin and stop the server:

    -   AIX® and Linux™: `./stopServer.sh server1 -username username -password password`
    -   Windows™: `stopServer.bat server1 -username username -password password`

    Then, start the server:

    -   AIX and Linux: `./startServer.sh server1`
    -   Windows: `startServer.bat server1`

3.  Access the Configuration Wizard. Go to https://your_server/hcl/wizard for a Kubernetes deployment or http://your_server:10200/ibm/wizard for a traditional deployment.

    !!!note
        If working with HCL Digital Experience a software level prior to CF18, the wizard address is: http://your_server:10200/ibm/wizard. After installing CF18, the Configuration Wizard address is http://your_server:10200/hcl/wizard.


4.  Log in to the Configuration Wizard with the administrative ID for the configuration wizard profile, cw_profile.

    !!!note
        The wizard user interface might not be available in all languages. If the language is not currently supported, you might see the English version. For details on the supported languages for all of the HCL Digital Experience user interfaces, see [Language support](../../../portal_admin_tools/language_support/index.md).

## Accessing the Configuration Wizard admin console in a container deployment

To access the Configuration Wizard admin console in a container deployment, you can directly enable it [in the custom values of the Helm deployment](../../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_configure_apps.md#configuration-wizard-configuration). The Configuration Wizard admin console is exposed on the TCP port number 10203. Navigate to the following URL to open the Configuration Wizard admin console: `https://<your-deployment-url>:10203/ibm/console`.

???+ info "Related information"  
    -   [Setting up a stand-alone server](../../../../../deployment/manage/config_standalone.md)
    -   [Setting up a cluster](../../../../../deployment/manage/config_cluster/index.md)
    -   [Create a deployment manager](../../../../../deployment/manage/config_cluster/cw_dmgr_profile.md)
    -   [Create a cluster](../../../../../deployment/manage/config_cluster/create_cluster/index.md)
    -   [Static cluster](../../../../../deployment/manage/config_cluster/create_cluster/cw_create_staticcluster.md)
    -   [Dynamic cluster](../../../../../deployment/manage/config_cluster/create_cluster/cw_create_dynamiccluster.md)
    -   [Create an additional cluster node](../../../../../deployment/manage/config_cluster/cw_add_node.md)
    -   [Completing the context root change started during installation](../../../../../deployment/manage/siteurl_cfg/cfg_intr_inst.md)
    -   [Changing the portal URI after an installation](../../../../../deployment/manage/siteurl_cfg/changing_portal_uri_after_install/index.md)
    -   [DB2: Database transfer](../../../../../deployment/manage/db_mgmt_sys/dbtransfer_db2/index.md)
    -   [Enable federated security](../../../../../deployment/manage/security/people/authentication/user_registry/cw_ldap.md)
    -   [Starting and stopping servers, deployment managers, and node agents](../../../../../deployment/manage/stopstart.md)
    -   [Migrate a stand-alone server](../../../../../deployment/manage/migrate/migrate_using_cfgwizard/cw_migrate_stand_alone.md)
    -   [Cluster Step 1: Migrate the deployment manager profile](../../../../../deployment/manage/migrate/migrate_using_cfgwizard/cw_migrate_cluster_1.md)
    -   [Cluster Step 2: Migrate node profiles](../../../../../deployment/manage/migrate/migrate_using_cfgwizard/cw_migrate_cluster_2.md)
    -   [Cluster Step 3: Upgrade node profiles](../../../../../deployment/manage/migrate/migrate_using_cfgwizard/cw_migrate_cluster_3.md)
    -   [Troubleshooting the Configuration Wizard](../../../../../deployment/manage/troubleshooting/troubleshooting_configwizard/index.md)
    -   [Troubleshooting: Database Transfer](../../../../../deployment/manage/troubleshooting/troubleshooting_configwizard/troubleshooting_db_transfer/index.md)
    -   [DB2: Troubleshooting Database Transfer](../../../../../deployment/manage/troubleshooting/troubleshooting_configwizard/troubleshooting_db_transfer/index.md)
    -   [SQL: Troubleshooting Database Transfer](../../../../../deployment/manage/db_mgmt_sys/dbtransfer_sql/index.md)
    -   [Oracle: Troubleshooting Database Transfer](../../../../../deployment/manage/db_mgmt_sys/dbtransfer_oracle/index.md)
    -   [Troubleshooting: Enable federated security option](../../../../../deployment/manage/troubleshooting/troubleshooting_configwizard/cw_ldap.md)
    -   [Troubleshooting: Create a deployment manager](../../../../../deployment/manage/troubleshooting/troubleshooting_configwizard/cw_create_dmgr.md)
    -   [Troubleshooting: Create a cluster option](../../../../../deployment/manage/troubleshooting/troubleshooting_configwizard/cw_create_cluster.md)
    -   [Troubleshooting: Create an additional cluster node](../../../../../deployment/manage/troubleshooting/troubleshooting_configwizard/cw_create_addnode.md)
    -   [Troubleshooting: Create an HCL Digital Experience profile](../../../../../deployment/manage/troubleshooting/troubleshooting_configwizard/cw_createprofile.md)
    -   [Troubleshooting: Remove a WebSphere Portal profile](../../../../../deployment/manage/troubleshooting/troubleshooting_configwizard/cw_removeprofile.md)
    -   [Troubleshooting: Migrate a stand-alone server](../../../../../deployment/manage/troubleshooting/troubleshooting_configwizard/cw_migrate_standalone.md)
    -   [Troubleshooting: Migrate the deployment manager profile for a cluster environment](../../../../../deployment/manage/troubleshooting/troubleshooting_configwizard/cw_migrate_cluster1.md)
    -   [Troubleshooting: Migrate node profiles for a cluster environment](../../../../../deployment/manage/troubleshooting/troubleshooting_configwizard/cw_migrate_cluster2.md)
    -   [Troubleshooting: Upgrade node profiles for a cluster environment](../../../../../deployment/manage/troubleshooting/troubleshooting_configwizard/cw_migrate_cluster3.md)

