# Configuring the maximum number of items loaded from HCL Connections

You can define a value for the maximum number of social objects that you want the HCL Connections to return when data for a list of social objects is requested.

To configure this maximum value, proceed by the following steps:

1.  Log in to the WebSphere® Integrated Solutions Console.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Select **WP ConnectionsIntegrationService**.

4.  Under **Additional properties**, click **Custom properties**.

5.  Edit the value for the `search.page.size` property as required.

    The default value is `50`.

6.  Save your changes.

7.  Restart your portal server for the changes to take effect.


**Performance note:** Setting this value to a high figure can affect the response time of the HCL Connections server.

**Note:** A page editor can override this default value for an individual social list by editing the social list definition and setting the value in the field Maximum Results. For more information, see *Customizing social list definitions by using inline editing*.


**Related information**  


[Cache Manager Service](../admin-system/srvcfgref_cach_mgr.md)

[Customizing social list definitions by using inline editing](../social/soc_rendr_cust_socl_list.md)

[Digital Data Connector caches](../social/plrf_caches.md)

