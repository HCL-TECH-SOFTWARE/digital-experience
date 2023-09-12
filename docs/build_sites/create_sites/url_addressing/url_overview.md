---
id: url_overview
title: URLs in DX Overview
---

# Overview
Addressing a web based solution happens via Uniform Resource Locators (URLs). URLs are used by browsers or other software to retrieve published resources on the internet. 
HCL DX comes with various features like Web Content Management, Sites, Digital Asset Manager, API layers and many more. Each of the features allows
addressing the different artifacts with URLs.
HCL DX also allows you to customize the URLs produced by your site - for instance to change the context root, optimize for Search Engines, shorten the URL.
When developing a site different APIs allow you to generate URLs to address the different artifacts.
When accessing APIs remotely different URLs can be used to explore the REST based APIs - via API explorers.

This document outlines on a high level the different ways of how to use and customize URLs with HCL Digital Experience. 
It links to more detailed documents for more in depth information.

# DX Artifacts and how to address them - accessing a site
When accessing the UI of DX a site is being rendered - historically called Portal. The site can render different pages and portlets or other applications on those pages. The applications can be web content rendering portlets, script applications, the DAM user interface, Personalization rules and many other things.
The default URL for a site is https://mydxsample.hcl.com:443/wps/portal/[virtual-portal-context]/rootpage/childpage/[content]/[state]?query-params#anchor. The protocol can be http or https, the hostname can be configured as needed (note that a virtual Portal can have a different hostname - more to that later). The /wps/portal context root can be customized or completely removed. The virtual-portal-context can be leveraged to address a virtual portal. The state information is leveraged to store render parameters, history and other data. Pages can be addressed with friendly names, WCM Content can be targeted as well. Query parameters can be leveraged for passing additional parameters, an anchor to address areas on the page or some state information for a SPA based on hash routing.

## Authentication
Typically the authenticated URL is different than the URL for anonymous access to allow for better caching and higher security. For the sample above instead of /portal the URL would contain /myportal - this can be customized. Note that while the anonymous URL context can be completely removed, there is a need for an authenticated URL context.

## Virtual Portals
Virtual portals can be of benefit if you want to serve multiple user groups by separate virtual portals for different purposes, but still want to keep your environment simple and limited to a single HCL Portal installation. Virtual portals allow a large extent of scoping and separating portal resources, user groups, and administration.
Virtual Portals can be addressed either with a context root or a hostname (to avoid the context root in the URL).
For more details see: [Virtual Portal URLs](../build_sites/virtual_portal/vp_planning/shape_vp_ux/advppln_shpux_urlmap.md)

## Removing State
DX state URLs have a complex structure and include a large compressed and encoded XML Navigation State document. The stream of random characters in a DX Site URL is the Navigation State document. Full function depends on correctly maintaining this Navigation State document during all the operations a user might do in Portal. The state can be removed for different use cases to get a cleaner URL.
For more details see: [Changing your site URL](../../../deployment/manage/siteurl_cfg.md)

## Friendly Names
Friendly URLs have human-readable strings in the URL that describe the path to a Portal page. 
For more details see: [Portal URLs](../building_website/site_urls.md)

## Vanity URLs
You can associate vanity URLs with portal pages and labels. Vanity URLs are short URLs that people can easily remember.
For more details see: [Vanity URLs](../../../manage_content/wcm_delivery/vanity_url/index.md)

## Friendly Content URLs
Instead of having a different page for each piece of content the same page and content viewers can be leveraged to address a large set of different content and still maintain friendly URLs.
For more details see: [Friendly Web Content Viewer URLs](../../../manage_content/wcm_delivery/deliver_webcontent_on_dx/customizing_content/friendlyurl_wcmviewer.md)

## Project URLs
Projects are reflected in the URL when working on an active project.
For more details see: [Friendly Web Content Viewer URLs](../../../manage_content/wcm_authoring/authoring_portlet/content_management_artifacts/pages/managed_pages/advadmin_managedpages/wcm_mngpages_projectapi.md)

# Other artifacts in DX
## Web Content Manager resources
WCM Content, components, Site Areas or other artifacts can be addressed via the REST API (headless) or via the WCM Servlet.
For more details on servlet rendering see: [Access web content by using a servlet](../../../manage_content/wcm_delivery/wcm_config_delivery_servlet.md)
For more details on the REST API see: [Friendly Web Content Viewer URLs](../../../manage_content/wcm_development/wcm_rest.md)
Leveraging the API explorer to discover the WCM REST API: [URLs for API Access](../../../get_started/product_overview/api_access.md)

## DAM resources
DAM assets and collections can be accessed via the API and in the API with different endpoints. A custom URL and friendly URL feature both allow some form of customization of the URLs.
Default URL: https://mydxsample.hcl.com:443/dx/api/dam/v1/collections/[collectionID]/items/[assetID]/renditions/[renditionID]?binary=true
Friendly URL: https://mydxsample.hcl.com:443/dx/api/dam/v1/collections/[collectionName]/items/[assetName]/renditions/[renditioName]?binary=true
Custom URL: https://mydxsample.hcl.com:443/dx/api/dam/custom/[custom]

## POC URLs
Piece-of-content URLs or PoC URLs are late binding mechanism that targets content instead of DX artifacts such as pages. They use a different URL entry point into HCL Portal (typically mypoc or mycontenthandler instead of myportal). A programming API is available for working with Piece-of-Content URLs.

## API Explorers
DX provides a rich set of REST APIs that also bring API explorers along to explore and try the APIs.
For more information see: [URLs for API Access](../../../get_started/product_overview/api_access.md)

## J2EE resources
Underlying HCL DX is the IBM WebSphere Application Server, a powerful J2EE server. The features of a J2EE server for addressing resources can also be leveraged. I.e. when deploying a theme ear file the resource URLs can be chosen within the realm of the J2EE specifications.

## Other resources
There are many more resources beyond what is mentioned in this document like for instance Personalization Rules, Web Application bridge, Ajax proxy (outbound connections) or others and they allow to have different URLs - check out the product documentation for more details on those.