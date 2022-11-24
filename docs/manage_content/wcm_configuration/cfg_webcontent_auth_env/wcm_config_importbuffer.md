# Importing large files and images

Because importing large files into HCL Web Content Manager can have a negative impact on performance, you can adjust several settings to ensure better performance when importing files.

Before updating the settings for large file handling, review the following considerations:

**UNIX note:** If you are running on a UNIX operating system, ensure that you have used the ulimit -f command to set the maximum size of files that can be created to be at least the size of the largest file you would need to upload to the content server. The command ulimit -f unlimited removes any limit on file size. When setting the size, also make sure that the system has sufficient disk space to support the setting.

**Disk space requirements:** When importing web content libraries, a temporary directory is used to store the library files during the upload process. If the size of the uploaded files exceeds the available disk space for the temporary directory, the import operation fails. When uploading large libraries, ensure that there is sufficient disk space to accommodate the import.

1.  Log in to the WebSphere® Integrated Solutions Console.
2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **JCR ConfigService PortalContent** \> **Custom properties**.
3.  Make sure the location that is specified under **jcr.binaryValueFileDir** has sufficient disk space to accommodate the import.

1.  Log in to the WebSphere Integrated Solutions Console.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **WCM WCMConfigService** \> **Custom properties**.

    **Cluster note:** If you are using this web content server as part of a cluster, ensure that you use the WebSphere Integrated Solutions Console for the deployment manager when manipulating configuration properties.

3.  For the `resource.maxUploadSize` property, specify a value in megabytes corresponding to the size of the largest file that you want to allow to be imported.

    For example, if you do not want to allow files larger than 34 MB to be imported, update the `resource.maxUploadSize` property to have a value of `34`. Although it is recommended that this value not exceed 100 MB, you cannot upload files larger than 512 MB.

4.  For the `resourceserver.maxCacheObjectSize` property, specify a value of 300 KB or less.

5.  Add the `transaction.sync.remove` property, and specify a value of `true`.

6.  Click **Servers \> Server Types \> WebSphere application servers** \> **portal\_server** \> **Server infrastructure** \> **Administration** \> **Custom Properties**

7.  Add the `protocol_http_large_data_inbound_buffer` property, and for the value specify the maximum file size in bytes.

    This value should correspond to the value you set for the `resource.maxUploadSize` property in the `WCM WCMConfigService` service.

    Note that the `protocol_http_large_data_inbound_buffer` property uses bytes. So if you specified a value of 34 MB for the `resource.maxUploadSize` property, you would specify a value of 35651584 bytes for the `protocol_http_large_data_inbound_buffer` property.

8.  Click **Resources** \> **JDBC** \> **Data sources** \> **JCR Datasource** \> **Custom properties**

9.  Specify the `fullyMaterializeLobData` property with a value of `false`.

10. Click **Resource** \> **JDBC** \> **Data sources** \> **JCR Datasource** \> **Connection pool properties**.

11. Increase the maximum number of database collections that are allowed for the application server by increasing the value of the **Maximum connections** field to a value greater than the default 50 connections.

12. If you are working with files larger than 100 MB, increase the web containers transaction timeout setting.

    1.  Click **Servers \> Server Types \> WebSphere application servers** \> **portal\_server** \> **Container Services** \> **Transaction service**.

    2.  Increase the value of the **Total transaction lifetime timeout** setting from the default setting of 120 seconds.

13. Increase the maximum number of threads that are allowed in the thread pool that is used by the web container.

    1.  Click **Servers \> Server Types \> WebSphere application servers** \> **portal\_server** \> **Thread pools** \> **WebContainer**.

    2.  Set the value of the **Maximum Size** field to 100 threads.

14. If you are using IBM® HTTP Server Version 7, increase the connection timeout value for connections to the application.

    1.  Click **Servers \> Server Types \> web servers** \> **web\_server** \> **plug-in properties** \> **Custom properties** \> **New**.

    2.  In the **name** field, enter ServerIOTimeout.

    3.  In the **value** field, enter the timeout value in seconds.

        The default value is 60 seconds. However, when working with large files, this default value is typically insufficient and can cause a false server error response to be sent, which in turn causes the portal to reissue the request. Specify a timeout value that is long enough to allow a failing request to receive a response, or enter -1 for an unlimited timeout value.

15. Click **Save** to save your configuration changes.

16. Restart the portal for the settings to take effect.


!!! note
    If the portal's policy cache manager indicates that a number of web container threads are hung, set the `cacheinstance.com.ibm.wps.policy.services.PolicyCacheManager.lifetime` property in the `WP CacheManagerService` service to a value of `-1`. This setting reduces the database connections and load times and helps prevent threads from hanging.


???+ info "Related information"
    - [Setting service configuration properties](../../../deployment/manage/config_portal_behavior/service_config_properties/index.md)

