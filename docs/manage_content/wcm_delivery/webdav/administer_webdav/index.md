# Using WebDAV with HCL Portal

HCL Digital Experience provides a Web-based Distributed Authoring and Versioning \(WebDAV\) implementation that individual services can use by plugging into. WebDAV is a set of extensions to the HTTP protocol that allows you to collaborate on editing and managing files on remote Web servers.

Examples of such services are:

-   WebDAV for managing pages and static content.
-   WebDAV filestore. For example, this is used by portal themes.
-   WebDAV for Web Content Manager.

!!! note
    WebDAV does not support secure connections, such as, HTTPS. For specific WebDAV client version compatibility, refer to the detailed systems requirements documentation and the topic *Using HCL Digital Experience File Sync*.

-   **[Configuring the WebDAV file store](webdav_cfg_filestore.md)**  
By default only administrative users can perform write operations on specific folders of the WebDAV file store. This affects public and user owned folders. You can enable write access for all authenticated users on WebDAV file stores folders.
-   **[Using WebDAV file store](mash_webdav_store.md)**  
You can use WebDAV to work with the portal themes.
-   **[Serving HTTP OPTIONS requests to the server context root by WebDAV clients](webdav_http_options.md)**  
Some WebDAV clients send an HTTP OPTIONS request to the server context root \( / \) to check whether the server supports WebDAV. To support these clients, the portal provides a web application called wp.webdav.options.war that you can enable. This application responds to such requests with a confirmation that the portal supports WebDAV.
-   **[Working with WebDAV clients](webdav_client.md)**  
To use WebDAV for HCL Portal, you must first set up your WebDAV clients.
-   **[Task webdav-deploy-zip-file](csa2r_cfgtsk_webdavdplzip.md)**  
Use this configuration task to manage theme artifacts and to deploy iWidgets. This task uploads archive or compressed files to portal WebDAV folders.


???+ info "Related information"
    - [Updating custom theme Dojo references](../../../../../deployment/manage/migrate/next_steps/post_mig_activities/development_task/mig_post_dojo.md)

