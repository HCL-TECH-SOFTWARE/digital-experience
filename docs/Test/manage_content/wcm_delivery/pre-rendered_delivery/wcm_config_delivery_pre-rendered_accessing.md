# How to access the pre-rendered site

Pre-rendered sites are accessed either through HCL Web Content Manager, or through a web server.

## Accessing the pre-rendered site through a Web Content Manager application

To enable users to access the pre-rendered site through a Web Content Manager application, specify the `connect.businesslogic.module.default.class` property in the `WCM WCMConfigService` service by using the WebSphere® Integrated Solutions Console.

-   Property name: `connect.businesslogic.module.default.class`
-   Value: `com.aptrix.cacher.CacherModule`

Users can access the site through the following URL:

```
http://host\_name:port\_number/wps/wcm/connect/library\_name/sitearea\_name
```

The library\_name parameter is optional. If no library is specified, the default library is used, as specified by the `defaultLibrary` property in the **WCM WCMConfigService** service.

-   **Connect tags:**

    Connect tags are not processed by the CacherModule and are rendered intact. When the pre-rendered page is accessed by a user, only then are the connect tags processed.

-   **Pre-rendering JSP components:**

    Extended cache support needs to be enabled to support pre-rendering JSP components. This setting is disabled by default. See the Knowledge Centre topic that is called **Web Content Manager pre-rendering service** for details on how to enable the `prerender.extended.support.enabled` property.

-   **Links to content not yet pre-rendered:**

    A component, such as a menu, that contains links to content not yet pre-rendered is retrieved by the CacherModule and added to the pre-rendered site. This only applies to content belonging to sites configured to be pre-rendered.

-   **Custom expiring:**

    Custom caching parameters cannot be used in connect tags and URL requests in pre-rendered sites. "`EXPIRES=`" and "`CONNECTORCACHEEXPIRY=`" can be used to override your server's default basic and data cache settings.

-   **Authoring portlet:**

    The authoring portlet can still be accessed when the default class is changed from `RendererModule` to `CacherModule` as long as it has not been added to the lists of sites to be pre-rendered.

-   **CacherModule as default:**

    If using the URL interface when the `CacherModule` is the default, you do not need to specify `?mod=cacher`. Instead, enter the request as follows:

    http://host\_name:port\_number/wps/wcm/connect?SRV=cacheSite&library=library\_name&sitearea=sitearea\_name


## Accessing the pre-rendered site through a web server

If your web server is not used for HCL Portal Server, you can configure your web server to map to the following alias and Web Content Manager directories:

|Alias|Directory|
|-----|---------|
|/wps/wcm/connect|\[ILWWCM\_HOME\]/ilwwcm/cacher|

When using a web server to view a pre-rendered site, the previous directories require execute access.

Users access the site using the following URL:

```
http://host\_name:port\_number/wps/wcm/connect/library\_name/sitearea\_name
```

Use the following configuration properties in the `WCM WCMConfigService` to change the context of the URLs generated with pre-rendering:

-   `connect.moduleconfig.cacher.task.cacherurl`
-   `connect.moduleconfig.cacher.task.servletpath`

For example, to set a context of `/sales`, use the following properties:

-   **Cacher URL**

    -   Property name: `connect.moduleconfig.cacher.task.cacherurl`
    -   Value: `http://${WCM_HOST}:${WCM_PORT}/sales`
-   **Servlet path**

    -   Property name: `connect.moduleconfig.cacher.task.servletpath`
    -   Value: `/connect`

If your web server is used for both a HCL Portal server and accessing the pre-rendered site, you must change the context of the URLs. Any context that starts with the HCL Portal server context, `/wps` for example, is redirected to HCL Portal server.

-   **Connect tags cannot be used:**

    Connect tags are not processed by the CacherModule and are rendered intact. When the page is viewed through a web server, connect tags cannot be processed. Therefore, connect tags cannot be used in sites that are to be viewed through a web server.

-   **Pre-rendering JSP components:**

    The pre-rendering feature cannot be used to pre-render JSP components.

-   **Dynamic elements:**

    When viewing a pre-rendered site through a web server, any dynamic elements such as menus and navigators are displayed as rendered by the configured CacherModule user, not by the user that is accessing the site. This means personalization cannot be used.



???+ info "Related information"
    - [Setting service configuration properties](../../../deployment/manage/config_portal_behavior/service_config_properties/index.md)

