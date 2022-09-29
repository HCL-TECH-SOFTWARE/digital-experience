# Administering vanity URLs

HCL Digital Experience provides some configuration tasks. You can use these tasks to administer vanity URL support. You can also configure your IBM HTTP Server so that you can use short vanity URLs.

-   **Staging vanity URLs to production**

    A vanity URL is a portal artifact that is stored with the portal page that it targets. Vanity URLs are managed and stored in the Web Content Manager Portal Site library. To stage vanity URLs to production, you stage the HCL Web Content Manager page that the vanity URL targets.


-   **[Enabling vanity URL support](van_url_cfgtsk_enable_vus.md)**  
In a new HCL Portal 8.5 installation, vanity URL support is enabled. If you upgrade your HCL Portal from a previous version to Version 8.5, vanity URL support is disabled. You can enable and disable vanity URL support as required by using a portal configuration task.
-   **[Providing short vanity URLs](van_url_short.md)**  
You might want to make your vanity URLs as short and simple as possible for your customers. You can create vanity URLs that contain only the vanity segment by omitting the string /wps/vanityurl. In this case, you must use a web server and define a rewrite rule. If you also use IBM Web Application Bridge, or if you have static files in the root of the HTTP server document directory, adapt the rewrite rule.
-   **[Configuring the vanity URL preview link](van_url_cfg_preview.md)**  
The user interface for managing vanity URLs has a preview link. By default, this link shows the full vanity URL. If you installed an HTTP server and configured it to allow short vanity URLs, you can configure the preview link to show the short vanity URL instead.
-   **[Synchronizing the vanity URL database](van_url_cfgtsk_sync_db.md)**  
Vanity URLs are stored as part of the page in the JCR database in the portal page site area of Web Content Manager. For performance reasons, the data is also stored in the HCL Portal database. When the data is modified, the portal synchronizes the data between both sides. However, under certain circumstances it can happen that the data is not synchronized. For such cases, the portal provides a configuration task that synchronizes the data.
-   **[Setting an error URI for undefined vanity URLs](van_url_cfgtsk_set_error_uri.md)**  
You can configure how the portal behaves if a user tries to access an undefined vanity URL.


???+ info "Related information:"
    - [Syndication and staging](../../../../../deployment/manage/staging_to_production/updates_with_syndication/dep_up_syn.md)

