# Data cache configuration

Data caching is used to cache data that is retrieved by the HCL Web Content Manager application from external sources that use connect tags or by requests that are made through URLs.

You define and manage data cache options in the `WCM WCMConfigService` service by using the WebSphere® Integrated Solutions Console.

Specify the following properties for data cache options:

-   **`connect.connector.httpconnector.defaultcache`**

    Used when no cache is specified in a request for data. Possible values are `true` or `false`. If `true`, the data is stored in the site cache.

-   **`connect.connector.httpconnector.defaultcacheexpires`**

    The expiry date/time for items added to a cache \(site or session\) if the expiry date/time is not specified in the request.

-   **`connect.connector.sqlconnector.defaultcache`**

    Determines whether to cache data by default or not. Possible values are `true` or `false`.



???+ info "Related information"
    - [Setting service configuration properties](../../../../../deployment/manage/config_portal_behavior/service_config_properties/index.md)

