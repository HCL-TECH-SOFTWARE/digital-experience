# Starting and stopping servers, deployment managers, and node agents

Various installation and configuration tasks require you to start and stop IBM WebSphere Application Server and the HCL Digital Experience application servers, deployment managers, and node agents.

!!!note
    Run the following command if you have a clustered environment or you renamed the HCL Portal server as `HCL Portal and HCL Web Content Manager`: <br> -   AIX, HP-UX, Linux, and Solaris: `./startServer.sh HCL Portal and HCL Web Content Manager` <br> -   Windows: `startServer.bat HCL Portal and HCL Web Content Manager` <br> -   IBM i: `startServer HCL Portal and HCL Web Content Manager` <br> -   z/OS: `./startServer.sh HCL Portal and HCL Web Content Manager`

1.  Open a command prompt and change to the following directory:
    
    !!!note
        In a clustered environment, use the dmgr_profile_root directory and not the wp_profile_root directory.
    
    -   Windows™: wp_profile_root\bin
    -   AIX® HP-UX Linux™ Solaris: wp_profile_root/bin
    -   IBM® i: wp_profile_root/bin
    -   z/OS®: wp_profile_root/bin

2.  Complete the following steps to start the servers, deployment managers, and node agents

    |Server|Steps|
    |------|-----|
    |Deployment manager|Enter the following command: <br>   -   AIX, HP-UX, Linux, and Solaris: `./startManager.sh`<br> -   Windows: `startManager.bat`<br> -   IBM i: `startManager`<br> -   z/OS: `./startManager.sh`|
    |Node agent|Enter the following command:  <br>  -   AIX, HP-UX, Linux, and Solaris: `./startNode.sh`<br> -   Windows: `startNode.bat` <br> -   IBM i: `startNode`<br> -   z/OS: `./startNode.sh`|
    |**HCL Portal server**|Enter the following command: <br> -   AIX, HP-UX, Linux, and Solaris: `./startServer.sh HCL Portal and HCL Web Content Manager` <br> -   Windows: `startServer.bat HCL Portal and HCL Web Content Manager`<br> -   IBM i: `startServer HCL Portal and HCL Web Content Manager`<br> -   z/OS: `./startServer.sh HCL Portal and HCL Web Content Manager`|

3.  Complete the following steps to stop the servers, deployment managers, and node agents:

    |Server|Steps|
    |------|-----|
    |**HCL Portal server**|Enter the following command:<br> -   AIX, HP-UX, Linux, and Solaris: `./stopServer.sh HCL Portal and HCL Web Content Manager`<br> -   Windows: `stopServer.bat HCL Portal and HCL Web Content Manager`<br> -   IBM i: `stopServer HCL Portal and HCL Web Content Manager`<br> -   z/OS: `./stopServer.sh HCL Portal and HCL Web Content Manager`|
    |Node agent|Enter the following command:  <br> -   AIX, HP-UX, Linux, and Solaris: `./stopNode.sh`<br> -   Windows: `stopNode.bat`<br> -   IBM i: `stopNode`<br> -   z/OS: `./stopNode.sh`|
    |Deployment manager|Enter the following command: <br> -   AIX, HP-UX, Linux, and Solaris: `./stopManager.sh`<br>  -   Windows: `stopManager.bat`<br> -   IBM i: `stopManager`<br> -   z/OS: .`/stopManager.sh`|

4.  In a clustered environment, you can use the deployment manager WebSphere® Integrated Solutions Console to stop and start the application servers that are managed by the deployment manager:

    |Option|Steps|
    |------|-----|
    |Start a specific application server in a cell|Complete the following steps to start a specific application server in a cell: <br>   1.  Open the deployment manager WebSphere Integrated Solutions Console.<br> 2.  Click **Servers > Application Servers**.<br> 3.  Select the server and click **Start**.|
    |Start the entire cluster|Complete the following steps to start the entire cluster: <br> 1.  Open the deployment manager WebSphere Integrated Solutions Console. <br> 2.  Click **Servers > Clusters**.<br> 3.  Select the cluster and click **Start** or **Ripple Start**.|
    |Stop a specific server in a cell|Complete the following steps to stop a specific application server in a cell:  <br> 1.  Open the deployment manager WebSphere Integrated Solutions Console.<br> 2.  Click **Servers > Application Servers**. <br> 3.  Select the server and click **Stop** or **Immediate Stop**.|
    |Stop the entire cluster|Complete the following steps to stop the entire cluster:  <br> 1.  Open the deployment manager WebSphere Integrated Solutions Console.<br> 2.  Click **Servers > Clusters**.<br> 3.  Select the cluster and click **Stop** or **Immediate Stop**.|

**Related information**  
[Changing ports](../manage/port_chg.md)<br>
[Changing the portal URI after an installation](../manage/siteurl_cfg/changing_portal_uri_after_install/index.md)<br>
[DB2: Enabling support for high availability data replication](../manage/db_mgmt_sys/db2_hadr.md)<br>
[Removing attributes](../manage/security/user_registry/vmm_atts/remove_attr_def.md)<br>
[Adding a database user registry in a clustered environment](../manage/security/user_registry/db_user_registry/add_db_usr_reg_clus.md)<br>
[Adding a database user registry in a stand-alone environment](../manage/security/user_registry/db_user_registry/add_db_usr_reg_stdal.md)<br>
[Updating the database user registry](../manage/security/user_registry/update_user_registry/update_db_ureg.md)<br>
[Integrating HCL Connections profile](../../extend_dx/integration/connections/configuration/cfg_connections_features/i_coll_t_enable_lcprofile.md)<br>
[Configure authentication](../../extend_dx/integration/connections/configuration/cfg_connections_features/integrating_cnx_tags/i_coll_t_enable_lctags_auth.md)<br>
[Configuring OpenID authentication](../manage/security/integrate_oid/use_social.md)<br>
[Modifying the list of OpenID providers](../manage/security/integrate_oid/mod_oid_providers.md)<br>
[Configuring transient users](../manage/security/integrate_oid/openid_trans_users.md)<br>
[Disabling transient users and OpenID authentication](../manage/security/integrate_oid/disable_trans_openid.md)<br>
[Cryptographic hardware for SSL acceleration](../manage/security/configuring_ssl/sec_pw_crypt.md)<br>
[Creating and configuring federated repositories](../manage/security/customer_user_repo/create_update_fed_repo/add_cur_fed.md)<br>
[Updating federated repositories](../manage/security/customer_user_repo/create_update_fed_repo/upd_cur_fed.md)<br>
[Changing the login and logout pages](../manage/security/external_sec_mgmt/sec_chg_login.md)<br>
[Managing access control with external security managers](../manage/security/external_sec_mgmt/man_acc_ext.md)<br>
[Accessing the Configuration Wizard](../../extend_dx/development_tools/portal_admin_tools/cfg_wizard/configuration/cw_run.md)<br>
[Reusing group information](../manage/security/users_and_groups/reuse_group_info.md)<br>
[Enabling and disabling impersonation](../manage/security/users_and_groups/impersonation/impers_enable_disable.md)<br>
[Managing Single sign-on settings in your cluster](../manage/config_cluster/managing_cluster/manage_sso.md)<br>
[System event logging](../manage/troubleshooting/logging_and_tracing/adsyslog.md)<br>

