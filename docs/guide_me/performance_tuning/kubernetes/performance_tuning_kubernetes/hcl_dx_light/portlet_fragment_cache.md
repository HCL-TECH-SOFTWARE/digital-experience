# Portlet Fragment Cache

Depending on processing requirements, it may be beneficial to cache the HTML output of an individual portlet on a page. Portlets that make requests to slow backends or have high processing requirements are good candidates for fragment caching. Note that Performance measurements with and without fragment caching are recommended to see if this feature provides any benefit under real-world conditions.

Fragment caching is useful when only a single portlet on a page is dynamic. In this case, the entire page cannot have a Cache-Control header (set with Adaptive Page Caching) since that will prevent the dynamic content from being updated. But, there is no need to regenerate the content of the portlets that do not change. So, the static portlets’ content can be cached to improve performance of the page overall.

Portlet Fragment Caching leverages the underlying WebSphere Servlet Fragment Cache. So, this service must be enabled first. Then, the Portlet Fragment Cache can be enabled. Once enabled, individual portlets must be configured to enable caching for each portlet.

**How to Set**

- Enable servlet caching

In the WebSphere Integrated Solutions Console

Servers → Server Types → WebSphere application servers → WebSphere_Portal → Web Container Settings → Web container

Check Enable servlet caching

- Enable portlet fragment caching

In the WebSphere Integrated Solutions Console

Servers → Server Types → WebSphere application servers → WebSphere_Portal → Portlet Container Settings → Portlet container

Check Enable portlet fragment caching

- Restart the Portal Server
- Change the portlet cacheability settings
    a. For standard portlets, login to Portal as an administrator and navigate to Portal administration page. Select Portlet Management → Portlets. Find the portlet you want to configure and click the Configure portlet button to load the portlet settings.
    b. For WCM Rendering Portlets, go into edit mode and load the portlet menu. Select either Configure or Edit Shared Settings from the dropdown in the upper part of the portlet. With Configure, the settings apply to all instances of WCM Rendering Portlets. With Edit Shared Settings, the settings only apply to the one instance of the portlet.

**WCM Rendering Portlet Configuration**

![alt text](../../WCMRenderingPortletConfiguration.jpg)

- Select the appropriate Cache Scope and Cache Expiration for the portlet.

**Portlet Cache Options**

![alt text](../../PortalCacheOptions.jpg)

## Cache Scope

_Shared Cache across users_

This type of cache provides the biggest performance improvement as it caches the output of the rendering portlet across users. This cache scope should be used only for rendering portlets that render Web content that is not personalized.

_Non-shared cache for a single user_

This type of cache provides a smaller performance improvement but allows caching of personalized Web content that is displayed by the rendering portlet.

## Expiration

_Cache always expires_

The content will never be cached in either a shared or a private portlet cache (i.e. this setting disables the cache).

_Cache never expires_

The content can be stored indefinitely in either a shared or a private portlet cache.

Cache expires after this many seconds: The content will be stored for the number of seconds specified in either a shared or a private portlet cache

## Monitoring

WebSphere Application Server comes with a Cache Monitor application that allows you to monitor your cache to make sure it is working properly. In addition, there's an extended cache monitor with more functionality and additional bug fixes.

**How to Set**

1. Install/Update the Cache Monitor. For more information, see [Detailed steps to download and install the WebSphere Extended Cache Monitor](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0075565){target="_blank"}.

2. Before you can access the Cache Monitor application, you will need to give an administrator account access to this application.

    1. In the WebSphere Integrated Solutions Console, go to Applications → Application Types → WebSphere enterprise applications → Dynamic Cache Monitor → Security role to user/group mapping → Select “administrator”.

    2. Click **Map Users**.

    3. Search for the right user account and add it to the “selected” box.

    4. Click **OK**.

    5. Click **Save**.

3. Login to the Cache Monitor application. The URL should look like `http://myserver.com:<port>/cachemonitor`.
4. Select the “baseCache” and click OK
5. At this point any WCM Web Content Viewer JSR 286 portlet with caching enabled should add entries to this cache.
6. To look at the contents of the cache, simply click on the “Cache Content” link on the left side menu.
7. In addition to viewing the contents of the cache, you can also use the Cache Monitor application to view cache statistics, invalidate individual cache entries, and compare cache content.

Note that the Cache Monitor application will also allow you to view Portal and WCM caches. However, the information displayed is not specific to Portal. The Portal Cache Viewer, mentioned below, should be used for monitoring Portal and WCM caches.