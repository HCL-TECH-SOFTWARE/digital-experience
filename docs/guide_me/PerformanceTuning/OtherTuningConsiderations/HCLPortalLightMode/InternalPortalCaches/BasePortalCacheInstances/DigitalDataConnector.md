# Digital Data Connector (DDC)

Portal uses the Digital Data Connector caches for Social Rendering. See https://help.hcltechsw.com/digitalexperience/8.5/social/soc_rendr_perf_tune_cach.html for more information on the following caches.

**com.ibm.workplace.wcm.pzn.plr.BeanListCache**
Default size: 307, default lifetime: 900, usage pattern: regular

The bean list cache caches the bean list Java objects that the Digital Data Connector plug-ins return. The
DDC plug-ins control the cache key generation for the individual entries and whether the bean lists are
automatically removed from the cache during user login. By default, this cache is enabled.
Note: Single entries of this cache can have a size of several MB. Therefore, the default number of cache
entries for this cache is much lower than the default of other portal caches. When you use the bean list
cache, closely monitor the cache and tune it as required. You might also consider the size of individual
cache entries and how to influence it. For more information, consult the HCL Digital Experience Social
Rendering and Administration topics in the DX Help Center: https://help.hcltechsw.com/digitalexperience/8.5/social/soc_rendr_adm_socl_list.html

**com.ibm.workplace.wcm.pzn.plr.xml.DocumentCache**
Default size: 3007, default lifetime: 900, usage pattern: regular

The document cache is used by the generic XML DDC plug-in for caching the Document Object Model
(DOM) objects for individual source URIs. This cache specifically the DOMs for associated item attributes. If
an individual associated item attribute is flagged as shared in the list-rendering profile, the cache entries
are shared between different users. Such shared documents do not get invalidated on user login.
Documents that are loaded through non-shared associated item attributes are cached separately per user.
These cache entries are automatically invalidated during login. By default, this cache is enabled.

**com.ibm.workplace.wcm.pzn.plr.ListRenderingCache**
Default size: 3007, default lifetime: 900, usage pattern: regular

The list-rendering cache caches the markup that a specific appearance component generates for a specific
bean list instance. If you enable this cache, updates in the appearance component might not become
visible immediately, as updates to the corresponding IBM Web Content Manager design components do
not invalidate this cache. In general, the entries in this cache are invalidated together with the
corresponding bean list objects in the bean list cache listed earlier in this topic. As a result, it is good
practise to disable this cache on authoring systems and enable it on delivery systems.

To use this cache, you must use the ListRenderingCache rendering plug-in to instrument the Web Content
Manager design components that are involved in the markup generation for this cache. For more
information see https://help.hcltechsw.com/digital-experience/8.5/social/soc_rendr_adm_socl_list.html