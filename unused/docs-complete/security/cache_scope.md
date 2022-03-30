# Cache scope 

The cache scope determines where the content is cached.

There are two types of caching:

-   **Shared cache across users**

    This type of caching provides the biggest performance improvement. A proxy server caches content and serves requests for the content. This caching eases the load on the server because requests that are served by the proxy do not reach HCL Portal. If most requests are for customized content, this type of caching provides no performance improvement. The following default values exist for portlet definitions and themes if nothing is provided:

    **Note:** This type of caching should be used only for pages that contain public content that is not personalized.

    -   Remote cache scope is `non-shared`
    -   Remote cache expiry is `0 seconds`
-   **Non-shared cache for a single user \(Web browser cache\)**

    This type of caching provides a much smaller performance improvement. The cache is typically located in each user's Web browser. This type of caching can be used for all content, including content that is personalized. If the computer is shared among multiple users, a user may see personalized content from other users if served from the browser cache. To prevent this from happening, do not enable private caching, even for personalize content.


**Parent topic:**[Caching](../security/tune_cache.md)

