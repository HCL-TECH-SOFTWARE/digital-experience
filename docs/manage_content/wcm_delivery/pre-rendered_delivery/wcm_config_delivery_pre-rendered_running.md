# Pre-render methods

You can configure pre-rendering to run automatically, or you can manually initiate it using a URL.

!!!note
    To pre-render a website, you must have administrator access to the library that contains the site area.

- **Automatic pre-rendering**: Configure the cacher settings specified in the `WCM WCMConfigService` service.
- **Manual pre-rendering for a website**: Initiate pre-rendering through the URL interface. For example:

    ```url
    http://host_name:port\_number/wps/wcm/connect?MOD=Cacher&SRV=cacheSite&sitearea=sitearea\_name&library=library\_name
    ```

    |Service|Description|Required Parameters|Optional Parameters|
    |-------|-----------|-------------------|-------------------|
    |`SRV=cacheSite`|Initializes pre-rendering for the site area with a specified delay\(in seconds\).|`sitearea=`site area name|`DELAY=<delay>`<br>`LIBRARY=<library>` <br><br> **Note:** If no library is specified, the default library is used, as specified by the `defaultLibrary` property in the `WCM WCMConfigService` service.|
    |`SRV=cacheSiteExtended`|Initializes pre-rendering for the site area with a specified delay (in seconds). Passes the `ServletContext` to be used during processing. The `ServletContext` is required to pre-render JSP components and might be needed in other processing. <br> The associated user must be an administrative user.|`sitearea=`site area name|`DELAY=<delay>`<br>`LIBRARY=<library>` <br><br> **Note:** If no library is specified, the default library is used, as specified by the `defaultLibrary` property in the `WCM WCMConfigService` service.|
    |`SRV=flushSiteCache`|Clears (flushes) the site cache and deletes all pre-rendered data.|`sitearea=`site area name|`LIBRARY=<library>` <br><br>**Note:** If no library is specified, the default library is used, as specified by the `defaultLibrary` property in the `WCM WCMConfigService` service.|
    |`SRV=flushPageCache`|Flushes the page from the site cache. The site area and page are determined from the request URL.| | |
    |No `SRV` specified|The `CacherModule` attempts to retrieve the page from the cache.| | |

- **Manual pre-rendering for individual content items**: Use the following URL structure:

    ```url
    http://host_name:port_number/wps/wcm/connect/library_name/site_area_name/content?MOD=Cacher
    ```

    !!! note
        Before you can pre-render an individual content item, the site area specified in the URL must already exist in the target destination. It must either be defined in the `connect.moduleconfig.cacher.task.siteareas` property of the `WCM WCMConfigService` service, or you must have manually pre-rendered it using the `SRV=cacheSite` parameter.

???+ info "Related information"
    - [Setting service configuration properties](../../../deployment/manage/config_portal_behavior/service_config_properties/index.md)
    - [Pre-rendering options](../../wcm_configuration/cfg_webcontent_delivery_env/wcm_config_delivery_pre-rendered_enable.md)
