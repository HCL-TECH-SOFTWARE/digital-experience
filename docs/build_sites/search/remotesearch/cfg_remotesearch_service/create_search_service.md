# Creating a new search service

Learn about creating a new search service for Portal Search.

**Cluster note:** In a clustered environment, complete these steps on the primary node.

For more detailed information about the search service configuration parameters refer to [Search service configuration parameters](../../portal_search/administer_portal_search/search_service_params/index.md).

1.  Log in to your portal as an administrator.

2.  To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**. Then, click **Search Services**.

3.  Click **New Search Service**.

4.  Depending on whether you are using EJB or Web service via SOAP, type Remote PSE service EJB or Remote PSE service SOAP for the service name.

    !!! note
        Configuring for remote search service as a Web service via SOAP is not supported on Portal 8.5.

5.  For the **Search service implementation** select **Portal Search Service Type**.

6.  To configure a remote search service by using EJB, proceed as follows:

    1.  Edit the search service parameter `PSE_Type` and change its value to `ejb`.

    2.  Modify the parameter `IIOP_URL`. Set its value to `iiop://your\_ejb\_search\_server.your.example\_domain.com:port`, where your\_ejb\_search\_server.your.example\_domain.com is the name of the remote search server and `port` is the port number that you obtained in the [step to determine the port for EJB](../srtprrmtsrchsrv.md) under [Preparing for remote search service](../srtprrmtsrchsrv.md). For example, this can be iiop://ejb\_server.your\_company.com:2809.

    3.  Modify the parameter EJB. Set it to the following value: ejb/com/ibm/hrl/portlets/WsPse/WebScannerLiteEJBHome. This is the default JNDI name. If you have modified the EJB parameter to a JNDI name of your own choice, use that name instead.

7.  Modify the parameter `DefaultCollectionsDirectory` to the portal search service.

    Use it to determine the default directory where your search collections are created on the server that hosts the remote search service. This parameter does not have a default value.

8.  Add the parameter `CONFIG_FOLDER_PATH` to the portal search service.

    Use it to determine where the configuration data for search collections is stored on the server that hosts the remote search service. The default is `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/CollectionsConfig`.

9.  Click **OK** to save the new search service.

    The **Manage Search** portlet now lists the new search service in the list of search services. A check mark in the status column indicates that the new search service is working correctly. If the search service is not working properly, it has a red cross, and a message is displayed. Click the **View details** link of the message for more information about the problem and how to resolve it.

10. Restart all servers in your configuration for your changes to take effect.


Manually create new search collections for JCR search and Portal search.
