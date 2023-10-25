# Starting and stopping servers, deployment managers, and node agents

Various installation and configuration tasks require you to start and stop IBM WebSphere Application Server and the HCL Digital Experience application servers, deployment managers, and node agents.

!!!note
    Run the following command if you have a clustered environment or you renamed the HCL Portal server as `HCL Portal and HCL Web Content Manager`: <br> -   AIX and Linux: `./startServer.sh HCL Portal and HCL Web Content Manager` <br> -   Windows: `startServer.bat HCL Portal and HCL Web Content Manager`

1.  Open a command prompt and change to the following directory:
    
    !!!note
        In a clustered environment, use the dmgr_profile_root directory and not the wp_profile_root directory.
    
    -   Windows™: wp_profile_root\bin
    -   AIX®, Linux™: wp_profile_root/bin

2.  Complete the following steps to start the servers, deployment managers, and node agents

    |Server|Steps|
    |------|-----|
    |Deployment manager|Enter the following command: <br>   -   AIX and Linux: `./startManager.sh`<br> -   Windows: `startManager.bat`|
    |Node agent|Enter the following command:  <br>  -   AIX and Linux: `./startNode.sh`<br> -   Windows: `startNode.bat`|
    |**HCL Portal server**|Enter the following command: <br> -   AIX and Linux: `./startServer.sh HCL Portal and HCL Web Content Manager` <br> -   Windows: `startServer.bat HCL Portal and HCL Web Content Manager`|

3.  Complete the following steps to stop the servers, deployment managers, and node agents:

    |Server|Steps|
    |------|-----|
    |**HCL Portal server**|Enter the following command:<br> -   AIX and Linux: `./stopServer.sh HCL Portal and HCL Web Content Manager`<br> -   Windows: `stopServer.bat HCL Portal and HCL Web Content Manager`|
    |Node agent|Enter the following command:  <br> -   AIX and Linux: `./stopNode.sh`<br> -   Windows: `stopNode.bat`|
    |Deployment manager|Enter the following command: <br> -   AIX and Linux: `./stopManager.sh`<br>  -   Windows: `stopManager.bat`|

4.  In a clustered environment, you can use the deployment manager WebSphere® Integrated Solutions Console to stop and start the application servers that are managed by the deployment manager:

    |Option|Steps|
    |------|-----|
    |Start a specific application server in a cell|Complete the following steps to start a specific application server in a cell: <br>   1.  Open the deployment manager WebSphere Integrated Solutions Console.<br> 2.  Click **Servers > Application Servers**.<br> 3.  Select the server and click **Start**.|
    |Start the entire cluster|Complete the following steps to start the entire cluster: <br> 1.  Open the deployment manager WebSphere Integrated Solutions Console. <br> 2.  Click **Servers > Clusters**.<br> 3.  Select the cluster and click **Start** or **Ripple Start**.|
    |Stop a specific server in a cell|Complete the following steps to stop a specific application server in a cell:  <br> 1.  Open the deployment manager WebSphere Integrated Solutions Console.<br> 2.  Click **Servers > Application Servers**. <br> 3.  Select the server and click **Stop** or **Immediate Stop**.|
    |Stop the entire cluster|Complete the following steps to stop the entire cluster:  <br> 1.  Open the deployment manager WebSphere Integrated Solutions Console.<br> 2.  Click **Servers > Clusters**.<br> 3.  Select the cluster and click **Stop** or **Immediate Stop**.|

???+ info "Related information" 
    -   [Changing ports](../manage/port_chg.md)
    -   [Changing the portal URI after an installation](../manage/siteurl_cfg/changing_portal_uri_after_install/index.md)
    -   [DB2: Enabling support for high availability data replication](../manage/db_mgmt_sys/db2_hadr.md)
    -   [Removing attributes](../manage/security/people/authentication/user_registry/vmm_atts/remove_attr_def.md)
    -   [Adding a database user registry in a clustered environment](../manage/security/people/authentication/user_registry/db_user_registry/add_db_usr_reg_clus.md)
    -   [Adding a database user registry in a stand-alone environment](../manage/security/people/authentication/user_registry/db_user_registry/add_db_usr_reg_stdal.md)
    -   [Updating the database user registry](../manage/security/people/authentication/user_registry/update_user_registry/update_db_ureg.md)
    -   [Integrating HCL Connections profile](../../extend_dx/integration/connections/configuration/cfg_connections_features/i_coll_t_enable_lcprofile.md)
    -   [Configure authentication](../../extend_dx/integration/connections/configuration/cfg_connections_features/integrating_cnx_tags/i_coll_t_enable_lctags_auth.md)
    -   [Configuring OpenID authentication](../manage/security/people/authentication/integrate_oid/index.md)
    -   [Integrating with Transient Users with OpenID Connect](../manage/security/people/authentication/integrate_oid/index.md)
    -   [Cryptographic hardware for SSL acceleration](../manage/security/information/confidentiality/configuring_ssl/sec_pw_crypt.md)
    -   [Creating and configuring federated repositories](../manage/security/people/authentication/customer_user_repo/create_update_fed_repo/add_cur_fed.md)
    -   [Updating federated repositories](../manage/security/people/authentication/customer_user_repo/create_update_fed_repo/add_cur_fed.md)
    -   [Changing the login and logout pages](../manage/security/people/authentication/external_sec_mgmt/sec_chg_login.md)
    -   [Managing access control with external security managers](../manage/security/people/authentication/external_sec_mgmt/man_acc_ext.md)
    -   [Accessing the Configuration Wizard](../../deployment/manage/portal_admin_tools/cfg_wizard/configuration/cw_run.md)
    -   [Reusing group information](../manage/security/people/authorization/users_and_groups/reuse_group_info.md)
    -   [Enabling and disabling impersonation](../manage/security/people/authorization/users_and_groups/impersonation/impers_enable_disable.md)
    -   [Managing Single sign-on settings in your cluster](../manage/config_cluster/managing_cluster/manage_sso.md)
    -   [System event logging](../manage/troubleshooting/logging_and_tracing/adsyslog.md)
    - [WebSphere® Integrated Solutions Console](portal_admin_tools/WebSphere_Integrated_Solutions_Console.md)
