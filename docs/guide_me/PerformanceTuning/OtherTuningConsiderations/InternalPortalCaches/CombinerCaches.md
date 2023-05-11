# Combiner Caches

In WebSphere Portal 8, HCL DX 8.5 and higher releases, some PAC and model caches are consolidated into
a single combiner cache. For reference, here are the sets of caches that were combined into new caches in
WP8. The name in blue is the new cache name. The names underneath the new cache, are the set of
caches from WP7 that were combined and no longer exist in WP8.

com.ibm.wps.ac.CommonApplicationRoleMgmt
    com.ibm.wps.ac.ApplicationRoleForApplicationUserCache
    com.ibm.wps.ac.MappedRolesToUserCache
    com.ibm.wps.ac.ApplicationRoleOIDCache
    com.ibm.wps.ac.ApplicationRoleDescriptorCache
    com.ibm.wps.ac.ApplicationRolesForPrincipalCache
    com.ibm.wps.ac.ApplicationRoleChildrenCache
    com.ibm.wps.ac.ApplicationRoleMappingsCache
    com.ibm.wps.ac.ContainedRolesCache
com.ibm.wps.ac.CommonRolesCache
    com.ibm.wps.ac.RolesCache
    com.ibm.wps.ac.ParentResourceRoleMappingCache
    com.ibm.wps.ac.ResourceRoleMappingCache
com.ibm.wps.ac.CommonExplicitEntitlementsCache
    com.ibm.wps.ac.ExplicitEntitlementsCache
    com.ibm.wps.ac.ExplicitEntitlementsCache.CONTENT_NODE
    com.ibm.wps.ac.ExplicitEntitlementsCache.PORTLET_APPLICATION_DEFINITION
    com.ibm.wps.ac.ExplicitEntitlementsCache.PORTLET_DEFINITION
    com.ibm.wps.ac.ExplicitEntitlementsCache.USER_GROUP
    com.ibm.wps.ac.ExplicitEntitlementsCache.VIRTUAL
    com.ibm.wps.ac.ExplicitEntitlementsCache.WEB_MODULE
    com.ibm.wps.ac.ExplicitEntitlementsCache.WSRP_PRODUCER
com.ibm.wps.ac.groupmanagement.CommonUserGroupMgmt
    com.ibm.wps.ac.groupmanagement.NestedGroupCache
    com.ibm.wps.ac.groupmanagement.GroupCache
    com.ibm.wps.ac.groupmanagement.PeerGroupCache

For HCL DX 8.5, this cache was split back into com.ibm.wps.ac.groupmanagement.GroupCache and
com.ibm.wps.ac.groupmanagement.NestedGroupCache for performance reasons.
com.ibm.wps.ac.groupmanagement.PeerGroupCache was used for the Application Infrastructure feature,
which is no longer supported.

com.ibm.wps.puma.CommonPrincipalCache
    com.ibm.wps.puma.OID_User_Cache
    com.ibm.wps.puma.OID_Group_Cache
    com.ibm.wps.puma.DN_Group_Cache
    com.ibm.wps.puma.DN_User_Cache
com.ibm.wps.model.factory.UserSpecificModelCache
    com.ibm.wps.model.factory.ContentModelCache.live
    com.ibm.wps.model.factory.ContentModelCache.isolated
    com.ibm.wps.model.factory.NavigationSelectionModelCache.live
    com.ibm.wps.model.factory.NavigationSelectionModelCache.isolated
    com.ibm.wps.model.factory.NavigationModelCache.live
    com.ibm.wps.model.factory.NavigationModelCache.isolated