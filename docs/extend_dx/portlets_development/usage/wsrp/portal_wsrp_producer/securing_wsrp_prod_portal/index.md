# Securing a WSRP Producer portal

To secure provided portlets, you can configure the WSRP Producer for web service message security, for example, for message authentication. If you configure message authentication, you must also configure Portal Access Control.

-   **[Configuring security on the Producer portal](../admin-system/wsrpt_prod_sec_ws.md)**  
You can configure security for the WSRP Producer portal and the provided portlets. If you enable security, the WSRP Producer processes the WSRP requests from the WSRP Consumer under the user identity that is associated with the WSRP request that the Consumer sent. This user identity is represented by a security credential that is included in the WSRP request message. The security credential is provided by the WSRP Consumer. Normally, it represents the identity of the user who is logged in to the Consumer Portal.
-   **[Configuring Portal Access Control for a WSRP Producer portal](../admin-system/wsrpt_prod_sec_pac.md)**  
If you configure security for WSRP services, you must also configure Portal Access Control for the Producer.


**Previous topic:**[How to access the Producer WSDL](../admin-system/wsrpr_prod_wsdl.md)

**Next topic:**[Information that the Producer exchanges with the Consumer](../admin-system/wsrpc_prod_prep_info.md)

**Related information**  


[Access permissions](../admin-system/sec_acc_rights.md)

[Updating a WSRP Producer](../migrate/mig_post_wsrp_producer.md)

