# Configuring a remote Search in a portal farm

To support Search in a portal farm, you must install and configure a remote search service. Install and configure it on an IBM WebSphere Application Server instance that is not part of the farm.

1.  Install the remote search service. Go to the installation topics in [Remote search service](../admin-system/srcusgrmtsrchsrv.md) for specific steps.

    The service is on a remote WebSphere® Application Server instance that is not part of the portal farm. You can provide the remote search service either as an EJB or as a web service with SOAP. Deploy the appropriate EJB or SOAP EAR file on the remote WebSphere Application Server instance. For details, refer to the WebSphere Application Server documentation.

2.  Configure the search portlets for remote search service so that they access the remote server.

3.  Complete the following steps to ensure that the Seedlist Servlet is started:

    1.  Log on to the WebSphere Integrated Solutions Console on the remote server.

    2.  Go to **Applications** \> **Application Types** \> **WebSphere enterprise applications**.

    3.  Search for the **Seedlist Servlet**.

    4.  Ensure that the **Application Status** is set to the arrow. If it is not started, click **Start**.

    5.  Save your changes and then log out of the WebSphere Integrated Solutions Console.


**Notes:**

1.  You must configure the default location for search collections to a directory on the remote server that has write access.
2.  The portal site default search collection is created the first time when an administrator selects the Manage Search portlet. If this occurred before you configure the remote search portlet, the default portal site search collection is only available on the primary farm instance. However, it is not available on the remote server. In this case, you must re-create the portal site collection to make it available for search on all instances of the farm.

**Parent topic:**[Configuring search in a portal farm](../install/config_search_farm.md)

