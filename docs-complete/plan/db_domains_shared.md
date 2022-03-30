# Shared database domains 

To maximize data availability, you can distribute portal data across multiple databases and for some domains, share data between multiple lines of production.

When you separate HCL Portal data, you can store each category of data in its own set of database tables or the file system. Database domains support the storage and transfer of data by category, for example, Configuration, Release, Customization, Community, and IBM® Java™ Content Repository \(JCR\). When you separate your data, you can share domains across multiple portals. You can also spread the different domains across different database types. For example, you can choose to leave LikeMinds data on your default database and move all other data to another database. The separation of the domains can be used to support production environments, where the production nodes are split into separate clusters. Each cluster can run independently, but share the Community and Customization database domains, for example. Each of these clusters is called a line of production.

Preferences are kept in layers that are modifiable based on portlet modes. In WebSphere® Application Server, the values of the portlet deployment descriptor are read-only. z/OS® provides one more preference layer that enables portal administrators to specify different default values per portlet window. This capability is supported through the portlet mode EDIT\_DEFAULTS, and applies to all who use the same portlet window. Such a preference layer does not exist in WebSphere Application Server. Both products support the standard modes: VIEW, EDIT, and HELP. When a user customizes a portlet on a page in any standard mode, the user can change their personal portlet preferences. Default preferences on a per page or per portlet base cannot be set in any standard mode; you need to use custom portlet modes instead. Portlet preferences are stored in the customization domain when stored by users \(typically in edit mode\) on the entity level. Whereas, when you use configure mode, you're working on the portlet definition level and the portlet preferences are stored on the release level.

The following table lists the supported database domains, whether a domain is sharable, and notes.

|Database domain|Sharable|Notes|
|---------------|--------|-----|
|Release|no|In an environment that consists of multiple lines of production, one copy of the release data exists per cluster.Considered the domain as release data and promote to production lines individually.

|
|Customization|yes|In an environment that consists of multiple lines of production, customization data is kept in a database that is shared across the lines of production. Therefore, the data is automatically in synchronization across the lines of production.|
|Community|yes| |
|JCR|no|Considered the domain as release data and promote to production lines individually.|
|Feedback|yes| |
|LikeMinds|yes| |
|Virtual Member Manager \(VMM\)|yes| |

Sharing of database domains refers to concurrent access to the same physical database by multiple lines of production. A setup in which each line of production owns a copy of the shareable database domains and data replication is used to synchronize these copies is not supported.

The following table summarizes the portlet modes, the database that data is in, and whether that database is sharable:

|Type|Portlet mode|Domain|Shareable between multiple lines of production|
|----|------------|------|----------------------------------------------|
|Administrator preferences|config|release|no|
|Shared preferences|edit\_defaults|release|no|
|Personalized preferences|edit|customization|yes|

For maintenance and staging purposes, you can take a single line of production out of service while another line is still serving requests with the old data. After the first production line is updated and back in service again, the second line is updated by using the same approach. Updates of data in the shared domain are critical because they influence the other production line.

The capacity of the entire environment must be greater than the intended use so that individual servers can be taken out of production without affecting application availability. To ensure that all of the system resources are available for the portal, production systems must be dedicated to the portal. You must not run any other server software that is not related to the portal.

For maintenance purposes, the following database domains can be taken offline:

-   Community
-   Customization
-   Feedback
-   LikeMinds

The following databases must not be taken offline at anytime when HCL Portal is started:

-   Release
-   JCR

While a database domain is offline, HCL Portal cannot access the corresponding data and thus error messages might be displayed. HCL Portal itself remains responsive. When a database domain becomes available again, HCL Portal detects this availability, reconnect, and continue working with the corresponding data. Regular maintenance must not affect the shared database domains because it is imperative that this data remains available to all lines of production currently in use.

## Configuring portlet entity caches for multiple lines of production

You need to configure the portal cache settings, if you plan to use multiple lines of production and if portal users customize portlets to change their personal portlet preferences. Since portal caches portlet entities, if the cache is not refreshed portal preference changes created on a first line of production are not visible on the second line of production. It is important to cache the most relevant portlet entities. Disabling these caches degrade portal performance. Therefore, you must choose a cache lifetime, which balances your need for data coherence between lines of production and your need for portal performance. You can configure the lifetime of the corresponding portal caches com.hcl.wps.pe.portletentity and com.hcl.wps.pe.portletentitycounter. Both caches are accessed many times during portal request processing.

To define the cache lifetime, configure the following properties in the CacheManagerService. For more information, see *Cache Manager Service*.

-   cacheinstance.com.hcl.wps.pe.portletentity.lifetime=900
-   cacheinstance.com.hcl.wps.pe.portletentitycounter.lifetime=900

This configuration defines a cache lifetime of 900 seconds. You can choose another lifetime if required. The cache lifetime must be at least 5 to allow portlet entities to be cached for one request. For more information about caches, see [HCL Digital Experience Performance Tuning Guide](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0074411).

## Sharing of VMM databases

The VMM database feature makes it much simpler to use multiple repositories, since this capability is achieved through configuration, rather than development, with the use of the new VMM. In essence, with this feature you can map entries from multiple individual user repositories into a single virtual repository. The federated repository consists of a single named realm, which is a set of independent user repositories. Each repository might be an entire external repository or in the case of LDAP, a subtree within that repository. The root of each repository is mapped to a base entry within the federated repository, which is a starting point within the hierarchical namespace of the virtual realm. The Virtual Member Manager \(VMM\) databases for a full repository and for the property extension can be shared between lines of production. If the VMM databases are out of service, HCL Portal does not function.

**Parent topic:**[Database considerations ](../plan/db_considerations.md)

**Related information**  


[Cache Manager Service ](../admin-system/srvcfgref_cach_mgr.md)

[HCL Digital Experience Performance Tuning Guide](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0074411)

