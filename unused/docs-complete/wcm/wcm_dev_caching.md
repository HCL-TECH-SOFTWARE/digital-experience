# Custom caching 

You can overrule the default caching parameters of a site by using "cache" and "expire" parameters in URLs and HCL Web Content Manager tags.

**Note:** Custom caching can be used only when a server's default web content cache is set to none or advanced caching. If basic caching is used as your default web Content cache, Custom caching cannot be used.

There are two basic methods in which custom caching can be used with your default server caching settings:

-   **Default Server Caching Enabled**

    In this scenario, some form of default server caching is enabled. Caching parameters within connect tags and URLs can be used to either:

    -   Disable caching for the data that is being requested.
    -   Apply different caching parameters to the data that is being requested.
    This method is used with sites that are mostly static, but that contain a few dynamic elements that require a different caching strategy from the server's default caching strategy.

-   **Default Server Caching Disabled**

    In this scenario, default server caching is disabled. Caching parameters within connect tags and URLs can be used to enable caching for the data that is being requested.

    This scenario is used with sites that contain many elements that require different caching strategies.


-   **[Cache parameters ](../wcm/wcm_dev_caching_cache-parameters.md)**  
Use the cache parameters in HCL Web Content Manager tags and URLs to specify whether the retrieved data is cached or not. If it is cached, how it is cached. The cache parameter is not mandatory.
-   **[Cache expire parameters ](../wcm/wcm_dev_caching_expire-parameters.md)**  
You use the "expires" parameter in HCL Web Content Manager tags and URLs to specify how long to maintain data in the cache before it is expired. When data expires from a cache, the next request for the data will be retrieved from the original server. The expires parameter is not mandatory.
-   **[Caching HCL Web Content Manager elements ](../wcm/wcm_dev_caching_components.md)**  
You can apply caching to elements by using "connect" tags to reference elements within presentation templates instead of the component or element tag.

**Parent topic:**[Tags ](../wcm/wcm_build_tags.md)

