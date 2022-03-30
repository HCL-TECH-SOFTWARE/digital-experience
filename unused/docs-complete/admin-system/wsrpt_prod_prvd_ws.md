# Providing WSRP services as a Producer 

After you prepared your portal as a Producer portal, you can provide your portlets through WSRP. Providing portlets makes them available to Consumers. They can integrate them into their Consumer portals and use them as remote portlets. You can also withdraw portlets from being provided through WSRP. Consumer portals can then no longer use them.

To provide or withdraw a portlet for WSRP services, you can use either of the following options:

-   The portal administration portlet **Manage Portlets**.
-   The portal XML configuration interface. For more information about the XML configuration interface \(XMLAccess\), read the topics about the XML configuration interface.

**Notes:**

1.  A Producer provides portlets, not portlet instances. Therefore, only settings that are made in the Configure mode of the portlet on the Producer portal are available at the consumed remote portlet. Adding a remote portlet to a page on the Consumer side might create a new instance of the provided portlet on the Producer side. This portlet instance can be modified only on the Consumer portal. It is not available for use on the Producer portal.
2.  Customization of the Producer portlets by Consumer portal users can be exported by using the XML configuration interface.

Proceed by selecting the appropriate topic from the following links:

-   **[Using the Manage Portlets portlet to provide portlets through WSRP](../admin-system/wsrpt_prod_prvd_by_plt.md)**  
To provide portlets through WSRP, you use the Manage Portlets portlet. You can also use this portlet to withdraw the portlet from being available through WSRP.
-   **[Using the XML configuration interface to provide or withdraw a portlet ](../admin-system/wsrpt_prod_prvd_by_xml.md)**  
A WSRP Producer can provide or withdraw portlets by using the XML configuration interface.

**Parent topic:**[Using your portal as a WSRP Producer ](../admin-system/wsrpt_prod_use.md)

**Previous topic:**[Information that the Producer exchanges with the Consumer](../admin-system/wsrpc_prod_prep_info.md)

**Next topic:**[Exporting customized WSRP portlet instances by using the XML configuration interface ](../admin-system/wsrpr_prod_xmlxp_custplt.md)

**Related information**  


[Enabling remote rendering with WSRP and the Web Content Viewer ](../wcm/wcm_config_wcmviewer_wsrp.md)

[Working with the XML configuration interface](../admin-system/adxmltsk.md)

[The XML configuration interface ](../admin-system/admxmlai.md)

