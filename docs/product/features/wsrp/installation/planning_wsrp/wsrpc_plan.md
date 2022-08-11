# Planning for WSRP

Before you work with WSRP, plan your configuration based on the information in the following topics.

You can consume portlets from a HCL Digital Experience or from a different WSRP Producer such as the IBM WSRP Version 2.0 Producer for IBM® WebSphere® Application Server.

## Prerequisites for WSRP in the portal

If you want to use WSRP with your portal, you must have the appropriate level of IBM WebSphere Application Server installed. Refer to the [detailed system requirements](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0013514) to determine the WebSphere Application Server version that is required by your version of HCL Digital Experience.

**Note:** When creating a WSRP Producer in a Kubernetes environment, you must first import the external certificate used by Kubernetes into the truststore of the WebSphere Application Server and then click ***Apply*** and ***OK***.

![](../images/ssl_certificate_key_mgmt.png "SSL certificate and key management")

-   **[Supported portlet APIs](../admin-system/wsrpc_sprtd_apis.md)**  
Learn about how the WSRP implementation in HCL Portal 8.5 supports different portlet APIs.
-   **[Exchanging the required information between Producer and Consumer portals](../admin-system/wsrpc_xchg_info.md)**  
The WSRP standard defines the interfaces and the protocol for communication between the Producer portal and the Consumer portal. The Producer portals provide WSRP services that can be called to invoke provided portlets. The Consumer portals request WSRP services to call the remote portlets.
-   **[Security for WSRP services](../admin-system/wsrpc_secy.md)**  
HCL Portal supports two security mechanisms for WSRP.
-   **[How you work with WSRP in your portal](../admin-system/wsrpc_howuse_wp.md)**  
To work with WSRP in your portal, you perform different administrative tasks. Some of these tasks depend on whether you use your portal as a Producer or Consumer portal.

**Parent topic:**[WSRP services](../admin-system/wsrpc.md)

