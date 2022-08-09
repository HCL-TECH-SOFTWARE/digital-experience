# Digital Data Connector caches

The Digital Data Connector \(DDC\) for HCL Portal framework provides the caches that are listed here.

Both social rendering and the DDC framework use the following caches to cache bean list information:

-   **com.ibm.workplace.wcm.pzn.plr.BeanListCache**

    The bean list cache caches the bean list Java objects that the Digital Data Connector plug-ins return. The DDC plug-ins control the cache key generation for the individual entries and whether the bean lists are automatically removed from the cache during user login. By default, this cache is enabled.

    **Note:** Single entries of this cache can have a size of several MB. Therefore, the default number of cache entries for this cache is much lower than the default of other portal caches. When you use the bean list cache, closely monitor the cache and tune it as required. You might also consider the size of individual cache entries and how to influence it. For more information, read *Configuring the maximum number of items loaded from HCL Connections*.

-   **com.ibm.workplace.wcm.pzn.plr.xml.DocumentCache**

    The document cache is used by the generic XML DDC plug-in for caching the Document Object Model \(DOM\) objects for individual source URIs. This cache specifically caches the DOMs for associated item attributes. If an individual associated item attribute is flagged as `shared` in the list-rendering profile, the cache entries are shared between different users. Such shared documents do not get invalidated on user login. Documents that are loaded through non-shared associated item attributes are cached separately per user. These cache entries are automatically invalidated during login. By default, this cache is enabled.

-   **com.ibm.workplace.wcm.pzn.plr.json.DocumentCache**

    The document cache is used by the generic JSON DDC plug-in for caching the Document Object Model \(DOM\) objects for individual source URIs. This cache specifically caches the DOMs for associated item attributes. If an individual associated item attribute is flagged as `shared` in the list-rendering profile, the cache entries are shared between different users. Such shared documents do not get invalidated on user login. Documents that are loaded through non-shared associated item attributes are cached separately per user. These cache entries are automatically invalidated during login. By default, this cache is enabled.

-   **com.ibm.workplace.wcm.pzn.plr.ListRenderingCache**

    The list-rendering cache caches the markup that a specific appearance component generates for a specific bean list instance. If you enable this cache, the updates in the appearance component might not become visible immediately, as updates to the corresponding HCL Web Content Manager design components do not invalidate this cache. In general, the entries in this cache are invalidated together with the corresponding bean list objects in the bean list cache that is listed earlier. As a result, it is good practice to disable this cache on authoring systems and enable it on delivery systems.

    To use this cache, you must use the `ListRenderingCache` rendering plug-in to instrument the Web Content Manager design components that are involved in the markup generation for this cache. For more information, read *Using the list-rendering cache*.


You configure the caches through the WP Cache Manager Service resource environment provider in the WebSphere® Integrated Solutions Console. For more information, read the *Portal service configuration* and *Setting service configuration properties*.

**Parent topic:**[Digital Data Connector cache tuning](../social/plrf_cach_tune.md)

**Related information**  


[Setting service configuration properties](../admin-system/adsetcfg.md)

[Portal service configuration](../admin-system/srvcfgref.md)

[Configuring the maximum number of items loaded from HCL Connections](../social/soc_rendr_cfg_connct_item_limit.md)

