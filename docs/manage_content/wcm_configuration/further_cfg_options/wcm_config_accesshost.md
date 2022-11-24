# Controlling access to hosts specified in a URL

By default, you can specify any host name in a URL used to retrieve content. However, you can restrict access to a specified list of host names by modifying the configuration of the WCM WCMConfigService service.

1.  Log in to the WebSphere® Integrated Solutions Console.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **WCM WCMConfigService** \> **Custom properties**.

    **Cluster note:** If you are using this web content server as part of a cluster, ensure that you use the WebSphere Integrated Solutions Console for the deployment manager when you edit configuration properties.

3.  Update the configuration to block access from unknown hosts.

    Specify the following property:

    -   Property name: `connect.connector.httpconnector.denyunknownhosts`
    -   Value: `true`
4.  For each host name for which you want to grant access, add property.

    Use the following format for new properties:

    -   Property name: `connect.connector.httpconnector.hosts.host\_name`, where `host\_name` is the fully qualified host name of the server for which you want to grant access. For example: `connect.connector.httpconnector.hosts.www.example.com`
    -   Value: `true` or `false`
5.  Specify a default cache expiration value for the host name you added by adding a property.

    Use the following format for new properties:

    -   Property name: `connect.connector.httpconnector.hosts.host\_name.defaultcacheexpires`, where `host\_name` is the fully qualified host name of the server for which you want to grant access. For example: `connect.connector.httpconnector.hosts.www.example.com.defaultcacheexpires`
    -   Value: `expiration\_time`. For example: `REL 9000s`

6.  Specify a default cache setting for the host name you added by adding a property.

    Use the following format for new properties:

    -   Property name: `connect.connector.httpconnector.hosts.host\_name.defaultcache`, where `host\_name` is the fully qualified host name of the server for which you want to grant access. For example: `connect.connector.httpconnector.hosts.www.example.com.defaultcacheexpires`
    -   Value: `true` or `false`


???+ info "Related information"
    - [Setting service configuration properties](../../../../deployment/manage/config_portal_behavior/service_config_properties/index.md)
    - [Cache expire parameters](../custom_caching/wcm_dev_caching_expire-parameters.md)

