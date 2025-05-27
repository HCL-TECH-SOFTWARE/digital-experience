# How to clear WebSphere Dynacache caches

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

While you can clear individual WebSphere Dynacaches with the Extended Cache Monitor, clearing individual caches can be tedious when trying to narrow down which cache is holding a stale entry. Clearing multiple caches using a JSP can be a more efficient way to isolate the cache in question.

## Instructions

Refer to the following steps to clear your WebSphere Dynacache caches:

1. Create a file named `clearCache.jsp`.

2. Include the following code in the JSP file based on your use case:

    - To clear object caches whose name is listed in the `JNDI` namespace, use the following code:

        ```jsp
        <%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" session="false" import="javax.naming.InitialContext, com.ibm.websphere.cache.DistributedMap,wcmsupport.*"%>

        <%@ taglib uri="http://java.sun.com/portlet" prefix="portlet"%> <%@include file="../jsp/linkStyles.jspf"%>

        <%@include file="rootLinks.jspf"%>

        <% String [] cacheNames = {"services/cache/iwk/strategy", "services/cache/iwk/global", "services/cache/iwk/module", "services/cache/iwk/processing", "services/cache/iwk/site", "services/cache/iwk/session", "services/cache/iwk/summary", "services/cache/iwk/abspathreverse", "services/cache/iwk/menu", "services/cache/iwk/nav", "services/cache/iwk/abspath"}; if (request.getParameter("clear") != null) { %> Clearing caches...
        <% InitialContext ctx = new InitialContext(); for (int i = 0; i < cacheNames.length; i++) { DistributedMap dm = (DistributedMap) ctx.lookup(cacheNames[i]); dm.clear(); } %>
        Caches cleared. <% } %>
        ```

    - To clear WebSphere caches not listed in the `JNDI` namespace, use the following code:

        ```jsp
        <%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" session="false" import="javax.naming.InitialContext, javax.naming.Context, java.util.*, com.ibm.websphere.naming.genericURLInitialContextFactory, com.ibm.websphere.cache.DistributedMap, com.ibm.wsspi.cache.DistributedObjectCacheFactory, wcmsupport.*"%>

        <% String [] cacheNames = { "com.ibm.wps.datastore.services.Identification.OidAndUniqueName.cache", "com.ibm.wps.model.content.impl.ExplicitOidCache", "com.ibm.wps.ac.ChildResourcesCache", "com.ibm.wps.model.content.impl.TopologyCache", "com.ibm.wps.datastore.pageinstance.DerivationCache", "com.ibm.wps.datastore.pageinstance.OIDCache", "com.ibm.wps.model.factory.public.pages.update", "WSSecureMap", "com.ibm.wps.puma.CommonPrincipalCache", "com.ibm.wps.ac.AccessControlUserContextCache", "com.ibm.wps.resolver.friendly.cache", "com.ibm.wps.ac.groupmanagement.NestedGroupCache", "com.ibm.wps.datastore.pageinstance.MetaDataCache", "com.ibm.wps.model.content.impl.ResourceCache", "com.ibm.wps.ac.CommonExplicitEntitlementsCache", "com.ibm.wps.ac.CommonRolesCache", "com.ibm.wps.pe.portletregistry", "com.ibm.wps.pe.portletentity", "com.ibm.wps.pe.portletentitycounter", "com.ibm.wps.pe.portletmodel.portletdefinition", "com.ibm.wps.resolver.resource.AbstractRequestDispatcherFactory", "com.ibm.wps.resolver.data.cache.DataSourceCache", "com.ibm.wps.model.factory.UserSpecificModelCache", "com.ibm.wps.outbound.datastore.ProxyConfigCache.values", "com.ibm.wps.outbound.datastore.ProxyConfigCache.topologies", "com.ibm.wps.ac.ProtectedResourceCache", "services.cache.pzn.rules", "com.ibm.wps.ac.ExplicitEntitlementsCache.ICM_CONTENT.dyn", "services.cache.pzn.resourceCollections", "com.ibm.wps.datastore.pageinstance.DerivationCache" }; if (request.getParameter("clear") != null) { %> Clearing caches...
        <% for (int i = 0; i < cacheNames.length; i++) { DistributedMap dm = DistributedObjectCacheFactory.getMap(cacheNames[i]); dm.clear(); } %>
        Caches cleared. <% } %>
        ```

3. Copy the file to the `.../wp_profile/installedApps/(cell name)/wcm.ear/ilwwcm.war/jsp/html` directory.

4. Run the JSP using a URL similar to: `http://[your-host]:[your-port]/wps/wcm/jsp/html/clearCache.jsp`.
