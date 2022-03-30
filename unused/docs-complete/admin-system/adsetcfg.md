# Setting service configuration properties 

HCL Digital Experience comprises a framework of services to accommodate the different scenarios that portals need to address. Services are available for both HCL Portal and HCL Web Content Manager. You can configure some of these services.

-   **[Overview of configuration services ](../admin-system/srvcfgovu.md)**  
Get an overview of the HCL Portal configuration services available for the portal.
-   **[Portal service configuration ](../admin-system/srvcfgref.md)**  
HCL Portal comprises a framework of configuration services to accommodate the different scenarios that portals of today need to address. You can configure some of these services.
-   **[Web Content Manager service configuration ](../admin-system/srvcfgwcmref.md)**  
Configuration services for HCL Web Content Manager contain settings for the general operation of the web content system, including settings for messaging, pre-rendering, and searching.

**Parent topic:**[Configuring portal behavior ](../admin-system/adptlcfg.md)

**Related information**  


[Using a page navigation element ](../panel_help/wcm_dev_elements_page-navigation_using.md)

[Creating category selection trees ](../panel_help/wcm_dev_elements_taxonomy_selectiontrees.md)

[Setting the language of the portal ](../admin-system/adlang.md)

[Setting the portal entry page ](../admin-system/adloginview.md)

[How administrators define persistent session options ](../admin-system/adcfgpss_adm_define.md)

[Configuring your own delayed deletion schedule by using the XML configuration interface ](../admin-system/addelclnup_cfgxml.md)

[Pre-render methods ](../wcm/wcm_config_delivery_pre-rendered_running.md)

[Syndication properties](../wcm/wcm_config_prop_syndication.md)

[Web content authoring options ](../wcm/wcm_config_prop_authoring.md)

[Data cache configuration ](../wcm/wcm_config_delivery_caching_data.md)

[How to configure authoring tools components ](../wcm/wcm_config_wcmviewer_authcomp.md)

[How to configure authoring portlet search ](../wcm/wcm_config_advanced_search.md)

[How to access the pre-rendered site ](../wcm/wcm_config_delivery_pre-rendered_accessing.md)

[Pre-rendering options ](../wcm/wcm_config_delivery_pre-rendered_enable.md)

[Text, rich text and HTML elements ](../wcm/wcm_dev_elements_text-richtext-html.md)

[Syndication troubleshooting ](../wcm/wcm_syndication_troubleshooting.md)

[User roles and access ](../wcm/wcm_security_items.md)

[How to use the member fixer task ](../wcm/wcm_admin_member-fixer.md)

[Cache tuning for federated documents ](../wcm/wcm_dev_feddocs_cache.md)

[Importing large files and images ](../wcm/wcm_config_importbuffer.md)

[Enabling connect tags ](../wcm/wcm_config_connect.md)

[Controlling access to hosts specified in a URL ](../wcm/wcm_config_accesshost.md)

[Enabling email ](../wcm/wcm_config_smtp.md)

[HCL Web Content Manager ](../wcm/wcm_install_cfg.md)

[Configuring remote server access for links ](../wcm/wcm_config_ecm_whitelist.md)

[Configuring access to remote systems for federated documents ](../wcm/wcm_dev_feddocs_cfgcoll.md)

[Enabling People Finder for anonymous users ](../collab/i_coll_t_pfnd_enable_anon_users.md)

[Filtering the content model ](../dev/dgn_modelfilter.md)

[Synchronizing scopes for web content ](../wcm/wcm_tagrate_syncscope.md)

[Synchronizing scopes when items change ](../wcm/wcm_tagrate_syncscope_item.md)

[Synchronizing scopes after syndication ](../wcm/wcm_tagrate_syncscope_synd.md)

[Scheduling scope synchronization ](../wcm/wcm_tagrate_syncscope_sched.md)

[Configuring Integrator for SAP ](../admin-system/sap_int_cfg.md)

[Configuring Tivoli Federated Identity Manager with SAML for single sign-on to SAP NetWeaver Portal ](../admin-system/sap_int_cfg_tfimsaml_sso.md)

[Performance tuning for Integrator for SAP ](../admin-system/sap_int_perf_tun.md)

[Portlet load monitoring properties ](../dev-portlet/plmt_configuration.md)

[Enabling site analysis logging ](../admin-system/adsaconf_tsk_nbl.md)

[Auditing ](../admin-system/sec_audit.md)

[Cache expire parameters ](../wcm/wcm_dev_caching_expire-parameters.md)

[CORS and remote web content rendering with WSRP and the Web Content Viewer ](../wcm/wcm_config_wcmviewer_wsrp_cors.md)

[Setting policy variables ](../dev-portlet/outbhttp_cfg_strctr_policy_variable_set.md)

[Digital Data Connector caches ](../social/plrf_caches.md)

[Working with the XML configuration interface](../admin-system/adxmltsk.md)

[XML Syntax for exporting and importing credential vault data](../admin-system/adxmltsk_cmdln_sntx_crd_vlt.md)

[Updating workflows by using the workflow update tool ](../wcm/wcm_admin_workflow.md)

[Clearing item history ](../wcm/wcm_admin_clear_history.md)

[Exporting and importing web content libraries ](../wcm/wcm_config_wcmlibrary_export_main.md)

[Customize common name generation ](../admin-system/sec_cust_names.md)

[Nested groups ](../admin-system/adusrgrp_nested.md)

[Tagging and rating ](../admin-system/tag_rate_mngadmin.md)

[Parameter reference for the tag and rating widgets](../admin-system/tag_rate_parm_ref.md)

[How public and private tags and ratings work in the portal ](../admin-system/tag_rate_adm_publc_privt.md)

[Filtering content for tagging ](../admin-system/tag_rate_adm_filtr_cont.md)

[The tagging and rating user interface ](../admin-system/tag_rate_ui.md)

[Normalizing tags ](../admin-system/tag_rate_adm_norm_local.md)

[Redirecting to an HCL Connections site ](../admin-system/tag_fed_admin_redirect.md)

[Specifying an icon for a federated resource ](../admin-system/tag_fed_admin_spec_icon.md)

[Hints and tips for tagging and rating ](../admin-system/tag_rate_ref_hintip.md)

[Hints and tips for developers and portal administrators](../admin-system/tag_rate_ref_hintip_4admins.md)

[Customizing Client Cookie Forwarding ](../admin-system/wsrpc_clnt_cook_frwrd.md)

[System event logging ](../trouble/adsyslog.md)

# Setting service configuration properties from the user interface

The configuration for each service is stored in and accessible through the WebSphere® Integrated Solutions Console. Each service is registered as a separate resource environment provider with custom properties that represent the service configuration. Initially in a default installation, only the most common properties are shown as custom properties. You might need to add more properties with key and value as required. Or you might want to remove properties that can be used with their default values or are no longer required.

1.  Select the appropriate WebSphere Integrated Solutions Console, depending on your environment:

    -   If your portal runs stand-alone, use the local console.
    -   If your portal is installed in a cluster, use the console of the deployment manager.
2.  Start the WebSphere Integrated Solutions Console by entering the following string in the **URL location** field of a web browser:

    ```
    http://example.com:admin\_port/ibm/console
    ```

    where `example.com` is the name of your server or node host name of your server when on z/OS® and `admin\_port` is the port that is assigned to the WebSphere Integrated Solutions Console.

3.  Go to **Resources** \> **Resources Environment** \> **Resource Environment Providers**.

4.  In the Resource Environment Providers page, make the appropriate selection. Select the appropriate node or cluster from the scopes list, or clear the **Show Scope** check box and select one of the following options, depending on your portal environment:

    -   If your portal is running as a single server, select **Browse Nodes** and select the node.
    -   If your portal is installed in a cluster, select **Browse Clusters** and select the portal cluster.
5.  Select the service in which you want to change a property.

    **Note:** In the list, the service names are preceded by a product prefix and a blank space. For example, the HCL Portal configuration service is identified as WP ConfigService. The HCL Web Content Manager configuration service is identified as WCM WCMConfigService.

6.  Click **Custom Properties**.

7.  Do one of the following tasks as needed:

    -   To set a property, select that property and change its value.
    -   If the property that you want to set does not exist yet, create it new. When you create a new property, use java.lang.String as its type and do not mark the property as **required**. Otherwise, you might not be able to delete it later.
    -   Select one or more properties for removal.
8.  When you are done, click **Save** at the start of the page under **Message\(s\)**.

9.  Click **Save** again when prompted to confirm your changes.

10. If you have a cluster configuration, replicate your changes to the cluster.

11. Restart the server for the changes to become effective.


Your service configuration properties updates are now in effect.

# Setting service configuration properties from the command line

By alternative, you can also set the properties in the properties files and then enable them by running a configuration task.

**Notes:**

-   This option for setting service configuration properties is not available for all properties.
-   Use this option only if you want to set service configuration properties from the command line. In all other cases, set service configuration properties through the Resource Environment Provider. To do so, use the procedure given earlier in this topic.
-   If your portal is installed in a cluster, use this procedure on the primary node. The configuration task `update-wcm-service-properties` does not take effect on secondary nodes.
-   Changes to properties configuration files do not affect runtime properties until you run the configuration tasks that are described in the following procedure.

1.  Locate the properties file for the appropriate Resource Environment Provider:

    -   The properties files for HCL Portal are in the directory `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/config`.
    -   The properties files for HCL Web Content Manager are in the directory `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/wcm/shared/app/config/wcmservices`.
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

    For changes to HCL Portal properties files to take effect, run the following task from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory.

    -   Windows™: ConfigEngine.bat update-properties -DPortalAdminPwd=password -DWasUserid=username -DWasPassword=password
    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh update-properties -DPortalAdminPwd=password -DWasUserid=username -DWasPassword=password
    -   IBM® i: ConfigEngine.sh update-properties -DPortalAdminPwd=password -DWasUserid=username -DWasPassword=password
    -   z/OS: ./ConfigEngine.sh update-properties -DPortalAdminPwd=password -DWasUserid=username -DWasPassword=password
    For changes to HCL Web Content Manager properties files, run the following task from the `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine` directory.

    -   Windows: ConfigEngine.bat update-wcm-service-properties -DPortalAdminPwd=password -DWasUserid=username -DWasPassword=password
    -   AIX HP-UX Linux Solaris: ./ConfigEngine.sh update-wcm-service-properties -DPortalAdminPwd=password -DWasUserid=username -DWasPassword=password
    -   IBM i: ConfigEngine.sh update-wcm-service-properties -DPortalAdminPwd=password -DWasUserid=username -DWasPassword=password
    -   z/OS: ./ConfigEngine.sh update-wcm-service-properties -DPortalAdminPwd=password -DWasUserid=username -DWasPassword=password

Your service configuration properties updates are now in effect.

