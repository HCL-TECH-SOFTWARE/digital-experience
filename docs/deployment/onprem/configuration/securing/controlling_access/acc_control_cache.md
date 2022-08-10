# Access Control Caching

Access Control internally uses several caches to improve the access control decision times. You can improve access control performance for special scenarios by setting the lifetime and size properties of these caches in the Cache Manager Service. In most cases, HCL Digital Experience will run smoothly with the default cache settings. However, if you have a large number of resources or a large number of customized resources, you may want to adjust cache settings and conduct some tests to find the best performance trade-offs.

## Cache Invalidation Behavior

In most cases, all necessary access control caches are immediately invalidated when a change to the access control configuration is done such as assigning roles to a user. If using External authorization, it is not possible to permanently synchronize the caches with changes to externally managed roles. For users that already have an authenticated portal session when the change becomes valid, they must wait for a cache timeout or logout and re-login for the changes to become active for that user. Performing a login or logout always enforces the invalidation of all caches related to the current user.

There are three additional cases where the invalidation is not performed immediately and require the user to re-login or to wait for a cache timeout:

-   If a role assignment is granted to or revoked from a user group, the change of permissions is not propagated immediately to those members of this group that are currently logged in
-   If a role block is set or removed, the resulting change of permissions is not propagated immediately to those users currently logged in
-   If nested groups are enabled and group A is added or removed from group B, the permission changes are not propagated immediately to those members of group A that are currently logged in

As in the external case, you can enforce a permissions refresh by performing a logout and login for the user. Alternatively, modify the following properties in the wp\_profile\_root/PortalServer/config/CacheManagerService.properties file to influence the caching behavior:

-   To switch it off completely and allow immediate propagation of all permission changes, remove the comment tag from the cacheinstance.com.ibm.wps.ac.AccessControlUserContextCache.enabled property and set the value to false. This can have a considerable performance impact.
-   To speed up permission refresh by timeout, the lifetime of this cache can be decreased by setting the cacheinstance.com.ibm.wps.ac.AccessControlUserContextCache.lifetime property \(in seconds\) to a smaller numerical value. These settings can affect performance.
-   For nested groups, you can also modify the values for the enabled or lifetime properties for both cacheinstance.com.ibm.wps.ac.groupmanagement.NestedGroupCache and cacheinstance.com.ibm.wps.ac.groupmanagement.GroupCache. These settings can affect performance.
-   If you configure access control to use nested groups, disable cacheinstance.com.ibm.wps.ac.groupmanagement.GroupCache and modify the values of the enabled and lifetime properties for cacheinstance.com.ibm.wps.ac.groupmanagement.NestedGroupCache.

    If you use group cache, disable cacheinstance.com.ibm.wps.ac.groupmanagement.NestedGroupCache and modify the values of the enabled and lifetime properties for cacheinstance.com.ibm.wps.ac.groupmanagement.GroupCache.

    These settings can affect performance.

-   All user and user group specific cache data can be explicitly invalidated upon user login authentication through the following two configuration settings through the WebSphere® Integrated Solutions Console:

    **Note:** These two settings will cause high Dynamic Replication Service load in the application server in a cluster environment and therefore can affect performance.

    -   Navigate to **Resource environment providers** \> **WP PACGroupManagementService** \> **Custom properties**. Either add or update **accessControlGroupManagement.invalidateGroupCacheOnLoginLogout** with a value of true.
    -   Navigate to **Resource environment providers** \> **WP AccessControlDataManagementService** \> **Custom properties**. Either add or update **accessControlDataManagement.invalidateResourceCacheOnLoginLogout** with a value of true.

**Note:** After modifying the CacheManagerService.properties file, run the following task, from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory, to make the changes effective:

-   UNIX™Linux™: ./ConfigEngine.sh update-properties -DWasPassword=password
-   IBM® i: ConfigEngine.sh update-properties -DWasPassword=password
-   Windows™: ConfigEngine.bat update-properties -DWasPassword=password

**Note:** Under z/OS®, modify the CacheManagerService.properties file. Then open a UNIX System Services \(USS\) command prompt or a Telnet client, and run the ./ConfigEngine.sh update-properties -DWasPassword=password task, from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory, to make the changes effective.

**Parent topic:**[Controlling access](../admin-system/control_access.md)

