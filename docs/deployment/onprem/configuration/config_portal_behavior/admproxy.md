# HTTP proxy configuration

Some portlets use HCL Portal resources to support HTTP proxy. Loading and caching remote URLs \(such as RSS streams or HTML files\) is done in the portal by the URL Manager service. If you specify an HTTP proxy in the configuration of the service, all remote requests are loaded using this HTTP proxy. This feature enables servers behind a firewall with no direct access to the Internet to load external data, such as news or stock information.

To configure HCL Portal for HTTP proxy, you use the WP PortletServiceRegistryService property in the portal WP Content Access Service in the WebSphere® Integrated Solutions Console. For more information, see the topic about [Content Access Service](srvcfgref_cont_accs.md) and go to the section about Proxy protocol and port settings.

**Parent topic:**[Configuring portal behavior](../admin-system/adptlcfg.md)

