# Using portal light mode 

HCL Portal now provides a portal light mode which can improve portal startup time and reduce memory consumption in production environments.

When you enable portal light mode, specific portlet applications are not started at portal start up. Instead they are started later by the first standard HTTP request that occurs and renders a portal page with the portlet application on the server. This occurs, for example, when a user accesses the portlet application.

The default list of these applications whose initialization is deferred until first use \(sometimes called "lazy applications"\), contains administrative and sample portlet applications.

To benefit from a higher performance improvement, you can adapt the default list of these applications to your needs.

-   **[Configuring portal light mode ](../admin-system/portal_light_cfg.md)**  
To benefit from a higher performance improvement, you can adapt the default list of lazy applications to your needs.
-   **[Enabling and disabling portal light mode ](../admin-system/portal_light_nbl.md)**  
When you enable portal light mode, a portlet application is not started by a user request, but by the first standard HTTP request that occurs and renders a portal page that contains the portlet application on the server. Direct access to the portlet, for example an Ajax request, does not start the portlet.

**Parent topic:**[Configuring portal behavior ](../admin-system/adptlcfg.md)

