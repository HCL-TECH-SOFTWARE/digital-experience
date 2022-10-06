# Setting service configuration properties

HCL Digital Experience comprises a framework of services to accommodate the different scenarios that portals need to address. Services are available for both HCL Portal and HCL Web Content Manager. You can configure some of these services.

## Setting service configuration properties from the user interface

The configuration for each service is stored in and accessible through the WebSphere® Integrated Solutions Console. Each service is registered as a separate resource environment provider with custom properties that represent the service configuration. Initially in a default installation, only the most common properties are shown as custom properties. You might need to add more properties with key and value as required. Or you might want to remove properties that can be used with their default values or are no longer required.

1.  Select the appropriate WebSphere Integrated Solutions Console, depending on your environment:

    -   If your portal runs stand-alone, use the local console.
    -   If your portal is installed in a cluster, use the console of the deployment manager.

2.  Start the WebSphere Integrated Solutions Console by entering the following string in the **URL location** field of a web browser:

    ```
    http://example.com:admin\_port/ibm/console
    ```

    where `example.com` is the name of your server or node host name of your server when on z/OS® and `admin\_port` is the port that is assigned to the WebSphere Integrated Solutions Console.

3.  Go to **Resources > Resources Environment > Resource Environment Providers**.

4.  In the Resource Environment Providers page, make the appropriate selection. Select the appropriate node or cluster from the scopes list, or clear the **Show Scope** check box and select one of the following options, depending on your portal environment:

    -   If your portal is running as a single server, select **Browse Nodes** and select the node.
    -   If your portal is installed in a cluster, select **Browse Clusters** and select the portal cluster.

5.  Select the service in which you want to change a property.

    !!!note
        In the list, the service names are preceded by a product prefix and a blank space. For example, the HCL Portal configuration service is identified as WP ConfigService. The HCL Web Content Manager configuration service is identified as WCM WCMConfigService.

6.  Click **Custom Properties**.

7.  Do one of the following tasks as needed:

    -   To set a property, select that property and change its value.
    -   If the property that you want to set does not exist yet, create it new. When you create a new property, use java.lang.String as its type and do not mark the property as **required**. Otherwise, you might not be able to delete it later.
    -   Select one or more properties for removal.

8.  When you are done, click **Save** at the start of the page under **Message(s)**.

9.  Click **Save** again when prompted to confirm your changes.

10. If you have a cluster configuration, replicate your changes to the cluster.

11. Restart the server for the changes to become effective.


Your service configuration properties updates are now in effect.

## Setting service configuration properties from the command line

By alternative, you can also set the properties in the properties files and then enable them by running a configuration task.

!!!note "Notes"
    -   This option for setting service configuration properties is not available for all properties.
    -   Use this option only if you want to set service configuration properties from the command line. In all other cases, set service configuration properties through the Resource Environment Provider. To do so, use the procedure given earlier in this topic.
    -   If your portal is installed in a cluster, use this procedure on the primary node. The configuration task `update-wcm-service-properties` does not take effect on secondary nodes.
    -   Changes to properties configuration files do not affect runtime properties until you run the configuration tasks that are described in the following procedure.

1.  Locate the properties file for the appropriate Resource Environment Provider:

        -   The properties files for HCL Portal are in the directory `wp_profile_root/PortalServer/config`.
        -   The properties files for HCL Web Content Manager are in the directory `wp_profile_root/PortalServer/wcm/shared/app/config/wcmservices`.
    
    If there is no default properties file for a Resource Environment Provider, for example, for WP DynamicContentSpotMappings, create a new properties file as follows:

    1.  Create a properties file by using a text editor.

    2.  Give the file the name of the Resource Environment Provider without the `WP` prefix.

        Example: `DynamicContentSpotMappings.properties`.

        Save the file in the appropriate directory for the Resource Environment Provider as given earlier.

2.  Edit the properties file and modify or add configuration properties as needed.

    Example:

    ```
    newDynamicContent=res:/CustomThemeContext/themes/html/MyTheme/dynamicContent.jsp
    ```

3.  Save the updated properties file.

4.  Run the appropriate configuration task to update the configuration properties:

    For changes to HCL Portal properties files to take effect, run the following task from the wp_profile_root/ConfigEngine directory.

    -   Windows™: `ConfigEngine.bat update-properties -DPortalAdminPwd=password -DWasUserid=username -DWasPassword=password`
    -   AIX®, Linux™: `./ConfigEngine.sh update-properties -DPortalAdminPwd=password -DWasUserid=username -DWasPassword=password`
    
    For changes to HCL Web Content Manager properties files, run the following task from the wp_profile_root/ConfigEngine directory.

    -   Windows: `ConfigEngine.bat update-wcm-service-properties -DPortalAdminPwd=password -DWasUserid=username -DWasPassword=password`
    -   AIX, Linux: `./ConfigEngine.sh update-wcm-service-properties -DPortalAdminPwd=password -DWasUserid=username -DWasPassword=password`

Your service configuration properties updates are now in effect.

???+ info "Related information"  
    -   [Using a page navigation element](../../../../manage_content/wcm/wcm_artifacts/elements/howto_work_with_elements/page_nav_element/index.md)
    -   [Creating category selection trees](../../../../manage_content/wcm/wcm_artifacts/elements/howto_work_with_elements/taxonomy_element/wcm_dev_elements_taxonomy_selectiontrees.md)
    -   [Setting the language of the portal](../../config_portal_behavior/adlang.md)
    -   [Setting the portal entry page](../../config_portal_behavior/adloginview.md)
    -   [How administrators define persistent session options](../../config_portal_behavior/user_session_persistence/adm_define_user_session_persistence/index.md)
    -   [Configuring your own delayed deletion schedule by using the XML configuration interface](../../config_portal_behavior/delayed_cleanup/addelclnup_cfgxml.md)
    -   [Pre-render methods](../../../../manage_content/wcm/wcm_content_delivery/delivering_web_content/pre-rendered_delivery/wcm_config_delivery_pre-rendered_running.md)
    -   [Syndication properties](../../../../manage_content/wcm/wcm_content_delivery/syndication/wcm_config_prop_syndication.md)
    -   [Web content authoring options](../../../../manage_content/wcm/wcm_content_delivery/cfg_webcontent_auth_env/wcm_config_prop_authoring.md)
    -   [Data cache configuration](../../../../manage_content/wcm/wcm_content_delivery/cfg_webcontent_delivery_env/caching_options/wcm_config_delivery_caching_data.md)
    -   [How to configure authoring tools components](../../../../manage_content/wcm/wcm_artifacts/elements/howto_work_with_elements/authoringtools_element/using_authoringtools_elements/wcm_config_wcmviewer_authcomp.md)
    -   [How to configure authoring portlet search](../../../../manage_content/wcm/wcm_content_delivery/cfg_webcontent_auth_env/wcm_config_advanced_search.md)
    -   [How to access the pre-rendered site](../../../../manage_content/wcm/wcm_content_delivery/delivering_web_content/pre-rendered_delivery/wcm_config_delivery_pre-rendered_accessing.md)
    -   [Pre-rendering options](../../../../manage_content/wcm/wcm_content_delivery/delivering_web_content/pre-rendered_delivery/wcm_config_delivery_pre-rendered_accessing.md)
    -   [Text, rich text and HTML elements](../../../../manage_content/wcm/wcm_artifacts/elements/howto_work_with_elements/richtext_element/wcm_dev_elements_text-richtext-html.md)
    -   [Syndication troubleshooting](../../../../manage_content/wcm/wcm_content_delivery/syndication/wcm_syndication_troubleshooting.md)
    -   [User roles and access](../../security/controlling_access/wcm_security/wcm_cms_access/wcm_security_items.md)
    -   [How to use the member fixer task](../../../../manage_content/wcm/wcm_management/wcm_adm_tools/wcm_member_fixer/wcm_admin_member-fixer.md)
    -   [Cache tuning for federated documents](../../../../manage_content/wcm/wcm_content_delivery/cfg_webcontent_auth_env/fed_docs_setup/wcm_dev_feddocs_cache.md)
    -   [Importing large files and images](../../../../manage_content/wcm/wcm_content_delivery/cfg_webcontent_auth_env/wcm_config_importbuffer.md)
    -   [Enabling connect tags](../../../../manage_content/wcm/wcm_management/further_cfg_options/wcm_config_connect.md)
    -   [Controlling access to hosts specified in a URL](../../../../manage_content/wcm/wcm_management/further_cfg_options/wcm_config_accesshost.md)
    -   [Enabling email](../../../../manage_content/wcm/wcm_management/further_cfg_options/wcm_config_smtp.md)
    -   [HCL Web Content Manager](../../../../manage_content/wcm/index.md)
    -   [Configuring remote server access for links](../../../../manage_content/wcm/wcm_content_delivery/cfg_webcontent_auth_env/wcm_config_ecm_whitelist.md)
    -   [Configuring access to remote systems for federated documents](../../../../manage_content/wcm/wcm_content_delivery/cfg_webcontent_auth_env/fed_docs_setup/wcm_dev_feddocs_cfgcoll.md)
    -   [Enabling People Finder for anonymous users](https://help.hcltechsw.com/digital-experience/9.5/collab/i_coll_t_pfnd_enable_anon_users.html)
    -   [Filtering the content models](../../../../extend_dx/apis/model_spi/dgn_modelfilter.md)
    -   [Synchronizing scopes for web content](../../../../manage_content/wcm/wcm_artifacts/tagrate_managing/syn_scope/index.md)
    -   [Synchronizing scopes when items change](../../../../manage_content/wcm/wcm_artifacts/tagrate_managing/syn_scope/wcm_tagrate_syncscope_item.md)
    -   [Synchronizing scopes after syndication](../../../../manage_content/wcm/wcm_artifacts/tagrate_managing/syn_scope/wcm_tagrate_syncscope_synd.md)
    -   [Scheduling scope synchronization](../../../../manage_content/wcm/wcm_artifacts/tagrate_managing/syn_scope/wcm_tagrate_syncscope_sched.md)
    -   [Configuring Integrator for SAP](https://help.hcltechsw.com/digital-experience/9.5/admin-system/sap_int_cfg.html)
    -   [Configuring Tivoli Federated Identity Manager with SAML for single sign-on to SAP NetWeaver Portal](https://help.hcltechsw.com/digital-experience/9.5/admin-system/sap_int_cfg_tfimsaml_sso.html)
    -   [Performance tuning for Integrator for SAP](https://help.hcltechsw.com/digital-experience/9.5/admin-system/sap_int_perf_tun.html)
    -   [Portlet load monitoring properties](../../../../build_sites/site_analytics/portlet_load_monitoring/plmt_configuration.md)
    -   [Enabling site analysis logging](../../monitoring/analyze_portal_usage/serverside_site_data/adsaconf_tsk_nbl.md)
    -   [Auditing](../../monitoring/sec_audit.md)
    -   [Cache expire parameters](../../../../manage_content/wcm/wcm_management/custom_caching/wcm_dev_caching_expire-parameters.md)
    -   [CORS and remote web content rendering with WSRP and the Web Content Viewer](../../../../manage_content/wcm/wcm_content_delivery/delivering_web_content/deliver_webcontent_on_portal/enable_remote_render_wsrp/wcm_config_wcmviewer_wsrp_cors.md)
    -   [Setting policy variables](../../../../extend_dx/portlets_development/web2_ui/outbound_http_connection/cfg_outbound_http_connections/cfg_structure/outbhttp_cfg_strctr_policy_variable.md)
    -   [Digital Data Connector caches](../../../../extend_dx/ddc/ddc_cache_tuning/plrf_caches.md)
    -   [Working with the XML configuration interface](../../../../extend_dx/development_tools/portal_admin_tools/xml_config_interface/working_xml_config_interface/index.md)
    -   [XML Syntax for exporting and importing credential vault data](../../../../extend_dx/development_tools/portal_admin_tools/xml_config_interface/working_xml_config_interface/using_xml_config_cmd_line/cmdline_syntax/xml_syntax_export_import_creds/index.md)
    -   [Updating workflows by using the workflow update tool](../../../../manage_content/wcm/wcm_management/wcm_adm_tools/wcm_admin_workflow.md)
    -   [Clearing item history](../../../../manage_content/wcm/wcm_management/wcm_adm_tools/wcm_admin_clear_history.md)
    -   [Exporting and importing web content libraries](../../../../manage_content/wcm/wcm_management/wcm_adm_tools/wcmlibrary_export/index.md)
    -   [Customize common name generation](../../security/users_and_groups/sec_cust_names.md)
    -   [Nested groups](../../security/users_and_groups/adusrgrp_nested.md)
    -   [Tagging and rating](../../../../build_sites/tagging_rating/index.md)
    -   [Parameter reference for the tag and rating widgets](../../../../build_sites/tagging_rating/cfg_reference/parm_ref_tag_rate_widget/index.md)
    -   [How public and private tags and ratings work in the portal](../../../../build_sites/tagging_rating/howto_tagging_rating/tag_rate_adm_publc_privt.md)
    -   [Filtering content for tagging](../../../../build_sites/tagging_rating/howto_tagging_rating/tag_rate_adm_filtr_cont.md)
    -   [The tagging and rating user interface](../../../../build_sites/tagging_rating/tagging_rating_ui/index.md)
    -   [Normalizing tags](../../../../build_sites/tagging_rating/howto_tagging_rating/tag_rate_adm_norm_local.md)
    -   [Redirecting to an HCL Connections site](../../../../build_sites/tagging_rating/tag_rate_federation/fed_admin/tag_fed_admin_redirect.md)
    -   [Specifying an icon for a federated resource](../../../../build_sites/tagging_rating/tag_rate_federation/fed_admin/tag_fed_admin_spec_icon.md)
    -   [Hints and tips for tagging and rating](../../../../build_sites/tagging_rating/hints_tips_tag_rate/index.md)
    -   [Hints and tips for developers and portal administrators](../../../../build_sites/tagging_rating/hints_tips_tag_rate/tag_rate_ref_hintip_4admins.md)
    -   [Customizing Client Cookie Forwarding](../../../../extend_dx/development_tools/wsrp/portal_wsrp_consumer/customizing_wsrp_cfg_consumer_portal/wsrpc_clnt_cook_frwrd.md)
    -   [System event logging](../../troubleshooting/logging_and_tracing/adsyslog.md)