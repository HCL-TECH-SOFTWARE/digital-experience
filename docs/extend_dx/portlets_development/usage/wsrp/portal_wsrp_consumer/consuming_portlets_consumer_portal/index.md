# Consuming portlets in a Consumer portal

After you create a Producer definition, you can proceed to consume the portlets that are provided by that Producer. This way, you integrate them into your Consumer portal as remote portlets.

To consume a remote portlet in your Consumer portal, you can use either of the following tools:

-   The **Manage Web Modules** portlet.
-   The portal XML configuration interface. For more information about the XML configuration interface, read the appropriate topics.

**Notes:**

1.  On the Consumer side, all remote portlets behave like standard API-compliant portlets, independent of their implementation on the Producer side.
2.  When a Producer provides a portlet, only settings that are made in the Configure mode of the portlet are available at the consumed remote portlet. Adding a remote portlet to a page on the Consumer side creates a new instance of the provided portlet on the Producer side. But this instance can be modified only on the Consumer and is not visible on the Producer portal.
3.  Customization of the consumed portlets by Consumer portal users can be exported by using the XML configuration interface.

Proceed by selecting the appropriate topic from the following links:

-   **[Using the Manage Web Modules portlet to consume portlets from a Producer portal](../admin-system/wsrpt_cons_consrv_plt.md)**  
To consume portlets from a Producer portal, you use the Manage Web Modules portlet and consume a web module.
-   **[Using the XML configuration interface to consume portlets from a Producer portal](../admin-system/wsrpt_cons_consrv_xml.md)**  
You can use the XML configuration interface \(XMLAccess\) to consume portlets from a Producer portal.


**Previous topic:**[Working with Producer definitions](../admin-system/wsrpt_cons_creat_prod.md)

**Next topic:**[Customizing the WSRP configuration of your Consumer portal](../admin-system/wsrpt_cons_cust.md)

