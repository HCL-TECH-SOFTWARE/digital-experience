# Automatically clearing your cache entry

In Combined Cumulative Fix 10 and later, an automatic cache entry clearing feature is enabled by default to automatically clear cache entries that are affected by a content change.

When the automatic cache entry clearing feature is enabled, content authors can see updates to content faster without waiting for the cache to clear. Disabling this feature can improve performance. Administrators of production environments might choose to disable this feature when performance is more important than quick content changes on the server. The suggested Portal tuning task tune-initial-portal-performance disables this feature without -DAuthoringServer set to true.

1.  Go to the following directory:

    [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine

2.  Run the pzn-disable-Force-Cache-Refresh configuration task to disable this feature or run the pzn-force-enable-Force-Cache-Refresh configuration task to enable this feature.

        |**Disable automatic cache clearing**|    -   AIX® HP-UX Linux™ Solaris z/OS®: ./ConfigEngine.sh pzn-disable-Force-Cache-Refresh
    -   IBM® i: ConfigEngine.sh pzn-disable-Force-Cache-Refresh
    -   Windows™: ConfigEngine.bat pzn-disable-Force-Cache-Refresh
|
    |**Enable automatic cache clearing**|    -   AIX HP-UX Linux Solaris z/OS: ./ConfigEngine.sh pzn-force-enable-Force-Cache-Refresh
    -   IBM i: ConfigEngine.sh pzn-force-enable-Force-Cache-Refresh
    -   Windows: ConfigEngine.bat pzn-force-enable-Force-Cache-Refresh
|

3.  Restart your server to apply your changes. In a clustered environment, restart all cluster nodes.


**Parent topic:**[Resource cache](../pzn/pzn_resource_cache.md)

**Related information**  


[Portal server performance tuning tool](../install/wp_tune_tool.md)

