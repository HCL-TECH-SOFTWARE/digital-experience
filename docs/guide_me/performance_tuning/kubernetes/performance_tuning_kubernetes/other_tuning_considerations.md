# Other Tuning Considerations

In addition to the scenarios discussed above, HCL Portal has some other tuning options which may be useful in some scenarios or when using specific features. These are documented here. Note that unless explicitly overriding a base Portal tuning setting, the tuning previously documented in this chapter still applies and will be required for optimal performance.

## Nested Group Cache

It’s important to understand how this cache is used so that it can be set appropriately for your environment.


n some environments—including the lab environment for our performance measurements—nested groups are not used for access permissions. In such cases, two settings can be used to improve performance: disabling nested group support, and disabling the nested group cache. This is done with the following two settings:


**How to Set**

1.  In the WebSphere Integrated Solutions Console, go to: **Resources** > **Resource Environment** > **Resource Environment Providers** > **WP CacheManagerService** > **Custom properties** > **New**.
2.  Add the following custom property:
    * **Name:** `cacheinstance.com.ibm.wps.ac.groupmanagement.NestedGroupCache.enabled`
    * **Value:** `false`

3.  Then, go to: **Resources** > **Resource Environment** > **Resource Environment Providers** > **WP AccessControlDataManagementService** > **Custom properties** > **New**.
4.  Add the following custom property:
    * **Name:** `accessControlDataManagement.enableNestedGroups`
    * **Value:** `false`

If permissions are assigned to nested groups, disabling nested group support is not appropriate, and the settings above should not be applied. In particular, disabling the nested group cache while keeping nested group support enabled can lead to significant performance issues—especially in environments that use third-party authentication solutions such as IBM Tivoli Access Manager (TAM) and WebSEAL.

## PAC Warmup Service

In environments with a large number of pages or significant amounts of WCM content(especially where many explicit role mappings are defined), a substantial volume of Portal Access Control (PAC) data may be required to render pages for users. When the portal is first started, this data is not yet cached and must be retrieved from the database. As a result, the initial users accessing the system may experience longer response times.
To improve initial response times, the PAC Warmup Service can be enabled to load data into caches at Portal startup. The service will load the specified users or groups asynchronously from the database before users access the site.

!!! Note The syndication or authoring will potentially clear the caches so the warmup is typically useful only for the first hits on the system, before any changes are made to the content.

**How to Set**

1. In the WebSphere Integrated Solutions Console,

go to: **Resources > Resource Environment > Resource Environment Providers > WP AccessControlWarmUpService**

Add the following custom properties:

| **Name**                    | **Value**                         |
|----------------------------|-----------------------------------|
| `enabled`                  | `true`                            |
| `numberOfMostRecentUsers`  | `10`                              |
| `numberOfGroups`           | `1`                               |
| `group.1`                  | `all authenticated portal users`  |
| `numberOfUsers`            | `1`                               |
| `user.1`                   | `anonymous portal user`           |
| `fillResourceCachesDomains`| `rel,jcr`                         |
| `fillResourceCaches`       | `0`                               |


!!! Note 
    multiple users and groups can be added by incrementing the user or group number (ex. `group.2`) and the `numberOfUsers` or `numberOfGroups` property. Ideally all groups or users that have many roles should be loaded.

See [Optimizing Portal Access Control](../../../../deployment/manage/tune_servers/wp_pac_tool.md) for more information on this service.

## Warming Up Portal Before Opening for Business

The first time Portal is accessed JSPs get compiled. That can be a slow process. Therefore, after starting Portal, but before ‘going live’ it is a good idea to access a few pages to get common JSPs compiled.

Recording Last Login Time for UsersBy default, WebSphere Portal will record the time a user logs in. This is used for reporting the number of users who have logged in recently; it is also needed for session resumption support. If neither of these features is needed, then it is possible to disable recording the user’s last login time.

Disabling the last login time will eliminate an insert or update operation on the USER_DESC table for each user login. This will reduce IO on the database server but will probably not significantly reduce CPU utilization.

For more information about user session persistence, see [Configuring user session persistence](../../../../deployment/manage/config_portal_behavior/user_session_persistence/index.md).

**How to Set**

1. In the Integrated Solutions Console, go to: **Resources** > **Resource Environment** > **Resource Environment Providers** > **WP ConfigService** > **Custom Properties** > **New**.

2. Add the following properties:

| **Name** | **Value** |
| :------------------------ | :-------- |
| `timeout.resume.session`  | `true`    |
| `persistent.session.level`| `0`       |
| `record.lastlogin`        | `false`   |

## Optimizing Retrieval of Permissions in Access Control

In HCL Portal, permissions are granted by assigning a principal to a specific role. There are four types of principals:

 - Users

 - Groups

 - Virtual users (the anonymous "user")

 - Virtual groups (all authenticated users).

When determining a user’s permissions, HCL Portal will check for permission assignments in its access control database for all of these types of principals. However, in some Portal sites, one or more of these classes of principals has no roles assigned. For example, if groups are not used for access control, then there would presumably be no roles assigned to groups.

In this case, a performance optimization is possible. By telling HCL Portal that no roles are assigned to certain types of principals, these queries will never be run. This can save processing time on the Portal server and the database server.

Since roles are always on resources within a specific domain, this performance optimization is specified at the level of a resource domain. Thus the configuration will tell HCLPortal that "No role assignments exist for this type of principal in this domain". For example, "No role assignments exist for Groups in the Community domain".

To enable this performance optimization, first determine which types of principals won't have role assignments and in which domains. Then, for each principal type + domain pair which will not have role assignments, add an entry to `AccessControlDataManagementService.properties`. 
The format is: 
```
accessControlDataManagement.domain.domain-name.disableRolesFor.principal-type=true
```

Replace `domain-name` with the desired resource domain and `principal-type` with the desired type of principal.

For example, to indicate that no role assignments exist for **Groups** in the **Community** domain, use the following setting:

```
accessControlDataManagement.domain.comm.disableRolesFor.groups=true
```

**The principal types are specified as follows:**

 - Users: users

 - Groups: groups

 - Virtual users: v_users

 - Virtual groups: v_groups

The domain name can be any of the valid domains (i.e. rel, jcr, comm, or cust).

If requirements change and role assignments that have been disabled are needed again, this setting can be undone by setting the value to `false`.

For example, to re-enable role assignments for **Groups** in the **Community** domain, use the following setting:

```
accessControlDataManagement.domain.community.disableRolesFor.groups=false
```


## High Performance Extensible Logging (HPEL)

In some configurations, enabling HPEL may improve performance. However, benchmark tests have also shown a 2% throughput reduction in other configurations. Performance testing in your own environments is recommended to understand the impact of enabling this feature.

**How to Set**

In the Integrated Solutions Console, navigate to: **Troubleshooting > Logs and trace**

1. Select the server(s) that you want to switch to HPEL Mode
2. Save the changes
3. Restart the application server