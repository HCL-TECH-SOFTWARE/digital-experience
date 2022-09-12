# Caching pages shared by multiple users

If you use a proxy server such as WebSphere Edge Server and your system has content that can be shared among multiple users, you can improve performance by caching this shared content.

HCL Portal allows you to configure the cache scope and the cache expiry time of the specified content. The cache scope and cache expiry time are configured by page, portlet, and theme. HCL Portal combines this information to produce a final cache scope and expiry time for each page it serves. You can configure these cache settings in one of the following two ways:

-   **The XML configuration interface**

    See the XML configuration interface for information.

-   **Portlets**

    The Manage Pages, Manage Portlets, and Properties portlets allow you to configure cache settings. For detailed information, refer to the portlet helps.

    !!!note
        When caching JSR portlets, the cache scope is only for proxy server caching policies and requires the use of an edge server cache. Local display caching policies are not affected by this setting. The cache expiration setting is used for both local and remote caching policies.



