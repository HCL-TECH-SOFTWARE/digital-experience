# Cache tuning for federated documents

The federated documents feature uses the document list cache, the document data cache, and the feed type cache to manage information about the list of documents, the document data, and the types of feeds a server provides.

-   The document list cache contains the list of document identifiers that are contained in the rule selection result of a specific user and a specific selection rule. The cache is activated by default with a default cache entry lifetime of 10 minutes.
-   The document data cache contains the metadata of a specific document. The cache is activated by default with a default cache entry lifetime of 10 minutes.
-   The feed type cache contains the type of feed for a feed URL. The feed type can be Document Services, CMIS, or ATOM. The cache is activated by default with a default cache entry lifetime of 24 hours.

To tune these caches, you can configure the Cache Manager Service \(`WP CacheManagerService`\) in the WebSphere® Integrated Solutions Console by using the following properties:

-   Document list cache: `cacheinstance.com.ibm.pzn.wcm.ecm.DocumentListCache`
-   Document data cache: `cacheinstance.com.ibm.pzn.wcm.ecm.DocumentMetaDataCache`
-   Feed type cache: `cacheinstance.com.ibm.pzn.wcm.ecm.FeedTypeServerCache`

Updates occurring on the remote content management system might not immediately be reflected on the portal side if there is a corresponding entry in the cache. The individual cache life time values determine the maximum time lag for corresponding updates.

**Note:**

-   The time lag for new documents to be visible and deleted documents to be removed depends on the lifetime value for the configured document list cache.
-   The time lag for updates in the metadata in a document \(for example, changes to the document title\) depends on the configured lifetime value for the document data cache.

The user-specific document list cache is explicitly invalidated each time the user logs in, so that the most current list of available document identifiers is available upon login.

**Parent topic:**[Setting up support for federated documents](../wcm/wcm_dev_feddocs_setup.md)

**Related information**  


[Setting service configuration properties](../admin-system/adsetcfg.md)

