# Configuring WSRP web service clients

You might want to set up a specific and complex service configuration. In this case, you can configure the WSRP service clients and service references of the WSRP Consumer by using the concept of policy sets. If you intend to configure web service security by using LTPA or username tokens, do not configure the WSRP service clients and service references. In this case, you do not need to read this topic and its subtopics, but follow the procedure described in Configuring WSRP Producer ports for web service security on the Consumer portal.

The WSRP Consumer of HCL Portal provides a set of service clients and default service references. The set includes two service clients, one each to support WSRP 1.0 and WSRP 2.0 and the respective port types or web service interfaces. There is one default service reference per service client. You can configure and administer the service clients and service references by using the WebSphere® Integrated Solutions Console. For example, you can use the WebSphere Integrated Solutions Console to configure WSRP service providers and WSRP service clients by attaching policy sets. You can configure each service client and service reference separately. If your Consumer portal communicates with Producer portals with different web service configurations, you can also use extra service client references.

The service clients realize the communication with the remote WSRP Producers. They comply to the JAX-WS standard and build upon the JAX-WS web service stack.

The following table lists the supported service clients and service references:

| |WSRP 1.0|WSRP 2.0|
|--|--------|--------|
|Service client|`WSRPService`|`WSRPService_v2`|
|Service reference|service/wsrp/WSRPService|service/wsrp/WSRPService\_v2|

The service clients support all WSRP service interfaces: Service Description, Markup, Portlet Management, and Registration.

HCL Portal provides a set of default WSRP policy sets and client policy set bindings. You can use them to configure the WSRP service clients and service references. In this case, you do not have to create your own policy sets and client policy set bindings. By alternative, you can create and use a policy set and client policy set binding of your choice.

For more detailed information about configuring the JAX-WS compliant web service clients, read the WebSphere Application Server product documentation.

**Note:** The configuration of the WSRP service clients is managed outside HCL Portal. The portal WSRP Consumer supports all service client configurations that are configured in WebSphere Application Server. This support includes message level security, transport level security, and other quality of service configuration. However, the service client configuration of the WSRP Consumer must be compatible with the web service configuration of the WSRP Producer. Example: If the service providers of the Producer portal are configured for WS-Security, the service references of the Consumer portal must also be configured for WS-Security. Otherwise, the WSRP communication fails.

You can configure your WSRP Consumer portal to consume portlets from Producer portals that have different web service configurations. To do so, you deploy extra service references for the WSRP service clients. You can assign the service references to the ports of a Producer definition. This way, you can configure multiple WSRP Consumer side web service configurations. You can configure each service reference separately. Use this option only if your WSRP Consumer portal communicates with multiple Producer portals that have different web service configurations. For more detailed information, read the following topics.

1.  [Communicating with Producer portals with different web service configurations](../admin-system/wsrpt_cons_cfg_wsrvc_clnt_xtra.md)  
You can use your Consumer portal to communicate with Producer portals that have different web service configurations.
2.  [Using the WSRP policy sets and client policy set bindings](../admin-system/wsrpt_cons_use_deflt_polsets.md)  
HCL Portal provides a set of default WSRP policy sets and client policy set bindings. You can use them to configure the WSRP service clients and service references. In this case, you do not have to create your own policy sets and client policy set bindings. By alternative, you can create and use a policy set and client policy set binding of your choice.
3.  [Creating and deploying custom service references](../admin-system/wsrpt_cons_crt_cust_wsrvc_refs.md)  
In your WSRP Consumer portal, you can deploy extra service references for the WSRP service clients.


**Related information**  


[Securing the WSRP Producer by WS-Security](../admin-system/wsrpt_prod_sec_ws_wss.md)

[Administering web services](http://pic.dhe.ibm.com/infocenter/wasinfo/v8r5/topic/com.ibm.websphere.nd.doc/ae/welc6tech_wbs_adm.html)

[Administering message-level security for JAX-WS web services](http://pic.dhe.ibm.com/infocenter/wasinfo/v8r5/topic/com.ibm.websphere.nd.doc/ae/container_wssec_admin_message_security_jaxws.html)

[Securing web services using policy sets](http://pic.dhe.ibm.com/infocenter/wasinfo/v8r5/topic/com.ibm.websphere.nd.doc/ae/twbs_securewbsps.html)

