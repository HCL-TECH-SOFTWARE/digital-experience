# Pre-rendered delivery

You can pre-render a complete HCL Web Content Manager site into HTML and save it to disk. The pre-rendered site can then be used as your live site and displayed to users that use either Web Content Manager or a web server. You deploy a pre-rendered site when you are not using any HCL Portal features and your content is static and is only updated periodically.

-   **Restrictions**

    -   Site areas and content item names cannot contain characters that are considered invalid in file names by the operating system on which you are pre-rendering. For example, on a Windows™ server, these characters are invalid: `/ \ : * ? " < > |`.
    -   The path to the content item, including the directory path to which you are pre-rendering \(for example, site area/content\) cannot exceed the operating system's maximum path length:
        -   Windows™: 255 characters
        -   AIX®IBM® iLinux™Solarisz/OS®: 1024 characters
    -   The Search component cannot be used in pre-rendered sites.

    -   The Page navigation component cannot be used in pre-rendered sites.

    -   Personalization elements can be pre-rendered only if the personalization rule is configured for anonymous access.

-   **Site security**

    Item security for different users set in an Web Content Manager environment is not transferred to pre-rendered sites. The security for the entire pre-rendered site is based on the `connect.moduleconfig.cacher.rendereruser` property as specified in the **WCM WCMConfigService** service by using the WebSphere® Integrated Solutions Console.


-   **[Pre-render methods](../wcm/wcm_config_delivery_pre-rendered_running.md)**  
Pre-rendering can be configured to run automatically, or you can manually pre-render a website by using a URL.
-   **[How to access the pre-rendered site](../wcm/wcm_config_delivery_pre-rendered_accessing.md)**  
Pre-rendered sites are accessed either through HCL Web Content Manager, or through a web server.

**Parent topic:**[Delivering web content](../wcm/wcm_cms_delivery_system.md)

