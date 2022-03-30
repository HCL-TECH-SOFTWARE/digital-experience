# Configuring a remote search service 

Configure a remote search service for Portal Search.

To configure a remote search service for Portal Search, proceed as follows:

**Cluster note:** In a clustered environment, complete these steps on the primary node.

1.  Log in to your portal as an administrator.

2.  To open the **Manage Search** portlet, click the **Administration menu** icon. Then, click **Search Administration** \> **Manage Search**.

3.  Click **Search Services**.

4.  Click **New Search Service**.

5.  For the **Search service implementation** select **Portal Search Service Type**.

6.  To configure a remote search service by using EJB, proceed as follows:

    1.  Edit the search service parameter `PSE_TYPE` and change its value to `ejb`.

    2.  Modify the parameter `IIOP_URL`. Set its value to `iiop://your\_ejb\_search\_server.your.example\_domain.com:port`, where your\_ejb\_search\_server.your.example\_domain.com is the name of the remote search server and `port` is the port number that you obtained in the [step to determine the port for EJB](srtprrmtsrchsrv.md#dtrmn_ejb_port) under [Preparing for remote search service](srtprrmtsrchsrv.md). For example, this can be iiop://ejb\_server.your\_company.com:2809.

    3.  Modify the parameter EJB. Set it to the following value: ejb/com/ibm/hrl/portlets/WsPse/WebScannerLiteEJBHome. This is the default JNDI name. If you modified the EJB parameter to a JNDI name of your own choice, use that name instead.

7.  Modify the parameter `DefaultCollectionsDirectory` to the portal search service.

    Use it to determine the default directory where your search collections are created on the server that hosts the remote search service. This parameter does not have a default value.

8.  Add the parameter `CONFIG_FOLDER_PATH` to the portal search service.

    Use it to determine where the configuration data for search collections is stored on the server that hosts the remote search service. The default is `[wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/CollectionsConfig`.

9.  Depending on, whether you are using EJB or web service through SOAP, type Remote PSE service EJB or Remote PSE service SOAP for the service name.

    **Note:** Configuring for remote search service as a web service through SOAP is not supported on Portal 8.5.

10. Click **OK** to save the new search service.

    The **Manage Search** portlet now lists the new search service in the list of search services. A green check in the status column indicates that the new search service is working correctly. If the search service is not working properly, it has a red cross, and a message is displayed. Click the **View details** link of the message for more information about the problem and how to resolve it.

11. Restart all servers in your configuration for your changes to take effect.


For more information about the search service configuration parameters, see to [Search service configuration parameters](srrcfgsrvc.md).

1.  [Creating a new search service ](../admin-system/create_search_service.md)  
Learn about creating a new search service for Portal Search.
2.  [Creating new search collections ](../admin-system/create_search_coll.md)  
Before you can begin using remote search service, you must create two new search collections, one for JCR search, and one for Portal search.
3.  [Creating a new content source ](../admin-system/create_content_source.md)  
Before you can begin using remote search service, you must create three new content sources, one for the Web Content Manager, one for your portal site, and one for JCR search.

**Parent topic:**[Remote search service ](../admin-system/srcusgrmtsrchsrv.md)

**Related information**  


[Container Staging ](../containerization/container_staging.md)

