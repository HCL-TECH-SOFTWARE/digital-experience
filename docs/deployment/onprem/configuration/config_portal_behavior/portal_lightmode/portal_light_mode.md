# Using portal light mode

HCL Portal provides a portal light mode which can improve portal startup time and reduce the memory consumption in production environments.

## Overview

The portal light mode feature helps speed up the boot time of the portal server instances, because the portlet applications do not start directly at server startup. When the first standard HTTP request is made for the portal page that contains the portlet application, the portlet application is started \(lazy startup\). Direct access to the portlet \(i.e. an Ajax request\) does not start the portlet.

The portal light mode can be enabled with a ConfigEngine script task that activates a list of applications, for which the Auto Start flag is set to `NO`. A server restart \(a full Node resynchronization in a cluster environment\) is needed after the script is called to take effect.

The default list of these applications whose initialization is deferred until first use \(sometimes called "lazy applications"\), contains administrative and sample portlet applications. To benefit from a higher performance improvement, you can adapt the default list of these applications to your needs.

The portal server can be booted very quickly, because at the server start up, only the applications that are needed are loaded to bring the server ready for e-business. You can decide and configure which applications you need to be auto-started, not started, or "lazy" started.

**Note:** If an application is set to be "lazy," the first HTTP response to a portal-page can take a little bit longer because the application needs to be loaded first before the request can be handled. As such, this is not recommended for large applications that need a long time to be initialized or for applications that require a faster response time.

-   **[Configuring portal light mode](../admin-system/portal_light_cfg.md)**  
The default list of these applications whose initialization is deferred until first use \(sometimes called "lazy applications"\), contains administrative and sample portlet applications. To benefit from a higher performance improvement, you can adapt the default list of lazy applications to your needs.
-   **[Enabling and disabling portal light mode](../admin-system/portal_light_nbl.md)**  
When you enable portal light mode, a portlet application is not started by a user request, but by the first standard HTTP request that occurs and renders a portal page that contains the portlet application on the server. Direct access to the portlet, for example an Ajax request, does not start the portlet.
-   **[Automatically enable and disable applications via portal light mode](../admin-system/portal_light_nbl_apps.md)**  
The `enable-portal-light-startup-performance`configuration task will set Auto Start to `No` for all applications defined in the file <wp\_profile\_root\>\\PortalServer\\config\\StartupPerformance\\wp.base\_TargetMapInclList.properties to stop them from being auto started during Portal server startup, as long as the same application is not listed in the wp.base\_TargetMapExcList.properties file.


