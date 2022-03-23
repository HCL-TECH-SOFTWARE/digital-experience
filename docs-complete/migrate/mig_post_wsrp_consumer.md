# Updating a WSRP Consumer 

After you complete the migration of your data, perform the following tasks if you use HCL Digital Experience as a WSRP Consumer.

-   Verify the web service security configuration for the WSRP ports of the Producer definitions. For more information about configuring and securing WSRP on a Consumer portal, see *Configuring security on the Consumer portal*.

-   If you configured web services security using LTPA version 1 tokens for a WSRP port of a Producer definition, you must complete more steps. WebSphere® Application Server Version 8.5.5 does not support creating LTPA version 1 tokens for immediate use. Your options depend on whether the Producer requires LTPA version 1 tokens or is able to accept LTPA version 2 tokens. For information about your options and the required configuration changes, see *Configuring WSRP Producer ports for Web Service Security on the Consumer portal*.

    **Note:** HCL Digital Experience does not provide a default configuration option for web service security that uses signed user name tokens anymore. If you used this security configuration on earlier versions of HCL Digital Experience, see *Configuring WSRP Producer ports for Web Service Security on the Consumer portal* for available security options for WSRP.

    **Note:** HCL Digital Experience does not support to secure WSRP by Secure Socket Layer \(SSL\) with Client Certificate Authentication anymore. If you used this security configuration on earlier versions of HCL Digital Experience, see *Security for WSRP services*.

-   When you complete the migration of a Producer, verify the corresponding Producer definition on the WSRP Consumer. For details about working with Producer definitions, see *Working with Producer definitions*.

    **Note:** In particular, verify the WSDL URL of the Producer and the web service security configuration and the endpoint URLs of the Producer ports. If the context root of the Producer was changed, adapt the endpoint URLs of the WSRP ports.

-   Configure the JVM setting for retrieving multiple transport headers from a JAX-WS web service response, as described in description of APAR PM91361. See *PM91361: MULTIPLE SET-COOKIE VALUES FROM AN HTTP TRANSPORT HEADER IN A JAX-WS WEB SERVICE RESPONSE ARE NOT RETRIEVED CORRECTLY*.


**Parent topic:**[WSRP ](../migrate/mig_post_wsrp.md)

**Related information**  


[Configuring security on the Consumer portal ](../admin-system/wsrpt_cons_prep_sec.md)

[Configuring WSRP Producer ports for Web Service Security on the Consumer portal ](../admin-system/wsrpt_cons_sec_ws_wss.md)

[Security for WSRP services ](../admin-system/wsrpc_secy.md)

[Working with Producer definitions ](../admin-system/wsrpt_cons_creat_prod.md)

[PM91361: MULTIPLE SET-COOKIE VALUES FROM AN HTTP TRANSPORT HEADER IN A JAX-WS WEB SERVICE RESPONSE ARE NOT RETRIEVED CORRECTLY](https://support.hcltechsw.com/csm)

