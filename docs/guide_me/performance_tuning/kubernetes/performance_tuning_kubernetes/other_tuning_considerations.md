# Other Tuning Considerations

In addition to the scenarios discussed above, HCL Portal has some other tuning options which may be useful in some scenarios or when using specific features. These are documented here. Note that unless explicitly overriding a base Portal tuning setting, the tuning previously documented in this chapter still applies and will be required for optimal performance.

## Nested Group Cache

It’s important to understand how this cache is used so that it can be set appropriately for your environment.

In some environments – including the lab environment for our performance measurements – nested groups are not used for access permissions. In such cases, two settings can be used to improve performance: disable nested group support, and disable the nested group cache. This is done with the following two settings:

**How to Set**

In the WebSphere Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → WP CacheManagerService → Custom properties → New

**Name**: cacheinstance.com.ibm.wps.ac.groupmanagement.NestedGroupCache.enabled

**Value**: false

In the WebSphere Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → WP AccessControlDataManagementService → Custom properties → New

**Name**: accessControlDataManagement.enableNestedGroups 

**Value**: false

If permissions are assigned to nested groups, it is not appropriate to disable nested group support, so the settings above should not be used. In particular, disabling the nested group cache while nested group support is enabled can cause significant performance problem, especially in environments that use thirdparty authentication software like IBM Tivoli Access Manager (TAM) and WebSEAL.

## PAC Warmup Service

In environments with either many pages or with a large amount of WCM content (especially with many explicit role mappings) there can be a large amount of Portal Access Control (PAC) data required to display pages to the user. When first started, Portal will not have any of this data cached and will have to retrieve it from the database instead. As a result, the first several users who o hit the system may see longer response times.

To improve initial response times, the PAC Warmup Service can be enabled to load data into caches at Portal startup. The service will load the specified users or groups asynchronously from the database before users access the site.

Note that syndication or authoring will potentially clear the caches so the warmup is typically useful only for the first hits on the system, before any changes are made to the content.

**How to Set**

In the WebSphere Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → WP AccessControlWarmUpService

Add the following properties:

**Name**: enabled

**Value**: true

**Name**: numberOfMostRecentUsers

**Value**: 10

**Name**: numberOfGroups

**Value**: 1

**Name**: group.1

**Value**: all authenticated portal users

**Name**: numberOfUsers

**Value**: 1

**Name**: user.1

**Value**: anonymous portal user

**Name**: fillResourceCachesDomains

**Value**: rel,jcr

**Name**: fillResourceCaches

**Value**: 0

Note that multiple users and groups can be added by incrementing the user or group number (e.x. group.2) and the numberOfUsers or numberOfGroups property. Ideally all groups or users that have many roles should be loaded.

See [Optimizing Portal Access Control](../../../../deployment/manage/tune_servers/wp_pac_tool.md) for more information on this service.

## Warming Up Portal Before Opening for Business

The first time Portal is accessed JSPs get compiled. That can be a slow process. Therefore, after starting Portal, but before ‘going live’ it is a good idea to access a few pages to get common JSPs compiled.

Recording Last Login Time for UsersBy default, WebSphere Portal will record the time a user logs in. This is used for reporting the number of users who have logged in recently; it is also needed for session resumption support. If neither of these features is needed, then it is possible to disable recording the user’s last login time.

Disabling the last login time will eliminate an insert or update operation on the USER_DESC table for each user login. This will reduce IO on the database server but will probably not significantly reduce CPU utilization.

For more information about user session persistence, see [Configuring user session persistence](../../../../deployment/manage/config_portal_behavior/user_session_persistence/index.md).

**How to Set**

In the Integrated Solutions Console

Resources → Resource Environment → Resource Environment Providers → WP ConfigService → Custom Properties → New

Add the following properties: 

**Name**: timeout.resume.session

**Value**: true

**Name**: persistent.session.level

**Value**: 0

**Name**: record.lastlogin

**Value**: false

## Optimizing Retrieval of Permissions in Access Control

In HCL Portal, permissions are granted by assigning a principal to a specific role. There are four types of principals:

Users

Groups

Virtual users (the anonymous "user")

Virtual groups (all authenticated users).

When determining a user’s permissions, HCL Portal will check for permission assignments in its access control database for all of these types of principals. However, in some Portal sites, one or more of these classes of principals has no roles assigned. For example, if groups are not used for access control, then there would presumably be no roles assigned to groups.

In this case, a performance optimization is possible. By telling HCL Portal that no roles are assigned to certain types of principals, these queries will never be run. This can save processing time on the Portal server and the database server.

Since roles are always on resources within a specific domain, this performance optimization is specified at the level of a resource domain. Thus the configuration will tell HCLPortal that "No role assignments exist for this type of principal in this domain". For example, "No role assignments exist for Groups in the Community domain".

To enable this performance optimization, first determine which types of principals won't have role assignments and in which domains. Then, for each principal type + domain pair which will not have role assignments, add an entry to AccessControlDataManagementService.properties. The format is: accessControlDataManagement.domain.domain-name.disableRolesFor.principal-type=true

Replace domain-name with the desired resource domain and principal-type with the desired type of principal. For example, to indicate that no role assignments exist for Groups in the Community domain, the setting would be accessControlDataManagement.domain.comm.disableRolesFor.groups=true.

**The principal types are specified as follows:**

Users: users

Groups: groups

Virtual users: v_users

Virtual groups: v_groups

The domain name can be any of the valid domains (i.e. rel, jcr, comm, or cust).

If requirements change and role assignments which have been disabled are again needed, this setting can be undone by setting the value to ‘false’. For example, to make use of role assignments for Groups in the Community domain, the setting would be changed to:

**accessControlDataManagement.domain.community.disableRolesFor.groups=true**

## High Performance Extensible Logging (HPEL)

In some configurations, enabling HPEL may improve performance. However, benchmark tests have also shown a 2% throughput reduction in other configurations. Performance testing in your own environments is recommended to understand the impact of enabling this feature.

**How to Set**

In the Integrated Solutions Console

Troubleshooting → Logs and trace

1. Select the server(s) that you want to switch to HPEL
2. Save the changes
3. Restart the application server