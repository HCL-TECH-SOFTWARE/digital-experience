# How to create an outbound HTTP connection configuration profile

This configuration task creates an outbound HTTP connection configuration profile by using the settings that you specify in an XML document. Use this task if you want to initially create outbound HTTP settings for your configuration. You can create a global configuration or an application-scoped configuration.

The configuration task creates the specified configuration settings if they do not exist. In contrast to the configuration task update-outbound-http-connection-config, this task leaves existing configuration settings unchanged. The syntax of the configuration task differs, depending on whether you want to create the settings for a global configuration or for an application-scoped configuration.

## Creating the global outbound HTTP connection profile

1.  Open a command prompt.

2.  Change to the wp_profile_root/ConfigEngine directory.

3.  Run the following task to create all settings of the global configuration for an outbound HTTP profile:

    -   AIX®: `./ConfigEngine.sh create-outbound-http-connection-config -DConfigFileName=your_path/config_file.xml -DWasPassword=password -DPortalAdminPwd=password`
    -   Linux™: `./ConfigEngine.sh create-outbound-http-connection-config -DConfigFileName=your_path/config_file.xml -DWasPassword=password -DPortalAdminPwd=password`
    -   Windows™: `ConfigEngine.bat create-outbound-http-connection-config -DConfigFileName=your_path/config_file.xml -DWasPassword=password -DPortalAdminPwd=password`
    `your_path/config_file.xml` is the absolute path name of the XML document that contains the configuration settings for the outbound HTTP connection infrastructure that you want to add.

    For more information, see [Adding an outbound connection policy](../../../../../../../extend_dx/portlets_development/web2_ui/outbound_http_connection/cfg_outbound_http_connections/sample_admin_tasks/outbhttp_cfgsmptsk_add_ob_conn_plcy.md).


## Creating an application-scoped outbound HTTP connection profile

1.  Open a command prompt.

2.  Change to the wp_profile_root/ConfigEngine directory.

3.  Run the following task to create an application-scoped outbound HTTP connection profile:

    -   AIX: `./ConfigEngine.sh create-outbound-http-connection-config -DConfigFileName=your_path/config_file.xml -DApplicationScopeRef=scoperef -DWasPassword=password -DPortalAdminPwd=password`
    -   Linux: `./ConfigEngine.sh create-outbound-http-connection-config -DConfigFileName=your_path/config_file.xml -DApplicationScopeRef=scoperef -DWasPassword=password -DPortalAdminPwd=password`
    -   Windows: `ConfigEngine.bat create-outbound-http-connection-config -DConfigFileName=your_path/config_file.xml -DApplicationScopeRef=scoperef -DWasPassword=password -DPortalAdminPwd=password`
    `your_path/config_file.xml` is the absolute path name of the XML document that contains the configuration settings for the outbound HTTP connection infrastructure that you want to add.

    `scoperef` is the context root of the application to which the configuration settings are scoped. To obtain the scope reference, proceed as follows:

    1.  Access the WebSphere® Integrated Solutions Console.
    2.  Select the enterprise application for which the outbound HTTP connection is scoped.
    3.  Click **View Deployment Descriptor**.
    4.  Locate the value of the `context root` tag.
    An example context root is `/PA_Banner_Ad`.


???+ info "Related information"  
    -   [Adding and configuring the External Search Results portlet](../../../../../../../build_sites/search/portal_search/administer_portal_search/customize_searchcenter/srtsearchlet.md)