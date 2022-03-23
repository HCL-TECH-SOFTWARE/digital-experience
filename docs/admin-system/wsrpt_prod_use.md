# Using your portal as a WSRP Producer 

Learn about the tasks that you perform when you use your portal to provide WSRP services as a WSRP Producer portal.

1.  [How to access the Producer WSDL ](../admin-system/wsrpr_prod_wsdl.md)  
As a Producer you must provide the URL for the Producer WSDL service description document to the Consumer.
2.  [Securing a WSRP Producer portal ](../admin-system/wsrpt_prod_prep_sec.md)  
To secure provided portlets, you can configure the WSRP Producer for web service message security, for example, for message authentication. If you configure message authentication, you must also configure Portal Access Control.
3.  [Information that the Producer exchanges with the Consumer](../admin-system/wsrpc_prod_prep_info.md)  
As a WSRP Producer, you must provide information to Consumers of your WSRP services so that they can prepare for consuming them as remote portlets. Depending on the configuration, you might also need information from the Consumer.
4.  [Providing WSRP services as a Producer ](../admin-system/wsrpt_prod_prvd_ws.md)  
After you prepared your portal as a Producer portal, you can provide your portlets through WSRP. Providing portlets makes them available to Consumers. They can integrate them into their Consumer portals and use them as remote portlets. You can also withdraw portlets from being provided through WSRP. Consumer portals can then no longer use them.
5.  [Exporting customized WSRP portlet instances by using the XML configuration interface ](../admin-system/wsrpr_prod_xmlxp_custplt.md)  
If consumed portlets are customized on the Consumers portal, then the Producer can export the customized instances of those portlets by using the XML configuration interface.
6.  [Changing the WSRP Producer context root ](../admin-system/wsrpt_chg_prod_uri.md)  
The context root for the WSRP Producer references the context root for the WSRP Producer facade servlet. This context root is the entry point for all WSRP protocol traffic, and you can change the context root as required to support your environment. This customization is optional.

**Parent topic:**[WSRP services ](../admin-system/wsrpc.md)

