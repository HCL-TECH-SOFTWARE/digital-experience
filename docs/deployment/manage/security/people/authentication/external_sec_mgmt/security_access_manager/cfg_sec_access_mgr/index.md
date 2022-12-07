# Configuring Security Access Manager

HCL Digital Experience can be integrated with IBM Security Access Manager to provide authentication services, authorization, and to link HCL Digital Experience's credential vault to the ISAM GSO Lockbox feature.

Authentication, Authorization and Credential Vault features can be configured in the following combinations:

-   Authentication can be configured either with or without the other features
-   Credential Vault integration can be configured either with or without the other features
-   Authorization cannot be configured without configuring Authentication.

As part of the Authentication integration, you can also configure HCL Digital Experience user provisioning to fully activate the created users as Security Access Manager users. By default, users that are created in LDAP by HCL Digital Experience are not Security Access Manager users. This configuration is necessary only if you do not have an enterprise Identity Management system and provisioning process that is integrated with IBM® Security Access Manager, and are using Digital Experience as your user creation tool.

!!!important "Important information about authentication" 
    To integrate HCL Digital Experience and IBM Security Access Manager for authentication, you must create one or more junctions in WebSEAL that points to HCL Digital Experience. Starting with HCL Portal Version 8.0, the type of junction that is supported depends on your specific use case:

|Use case|Supported junction type|
|--------|-----------------------|
|**Simple use case**<br> A single, logical HCL Digital Experience instance behind the WebSEAL layer, by using the default /wps context root. The HCL Digital Experience instance can be one of the following deployments:<br> - A stand-alone server<br> - A single cluster<br> - A common set of Portal instances in a farm|Either a transparent junction or a virtual host junction can be used. The junctions can be either TCP or SSL. They can use a TAI in WebSphere®, or generate LTPA tokens in WebSEAL for identity assertion.Not all HCL Digital Experience URLs start with /wps. Therefore, if you use transparent junctions, you must configure multiple transparent junctions to get all requests passed back to HCL Digital Experience from WebSEAL. To avoid this complication, use a single virtual host junction.<br> **Tip:** If you plan to change the HCL Digital Experience context root, use virtual host junctions.|
|**Other use cases**<br> Anything other than a simple use case.|The supported junction type for the general case is virtual host junctions. The virtual host junctions can be either TCP or SSL. They can use a TAI in WebSphere, or generate LTPA tokens in WebSEAL for identity assertion.|

**Integrating WebSEAL and HCL Portal by using virtual portals:**

Virtual Portals can be defined and identified in an incoming request by using either a token in the URL, or a virtual host name. If the URL token is used, it comes immediately after the servlet mapping of the URL, for example the `portal` or `myportal` token. If a virtual host name is used, then the host name for a request that targets the virtual portal has a different host name than requests to other virtual portals or the base portal.

When HCL Digital Experience, using the virtual hostname-defined virtual portals, is integrated behind WebSEAL as a proxy, the configuration is to have one virtual host junction in WebSEAL, per virtual portal in HCL Digital Experience (one to one in both directions). In addition, the virtual host junction host name in WebSEAL must be identical to the corresponding virtual portal host name on WebSphere Portal. The virtual host junction itself can be defined by using either the virtual portal host name identical to the virtual host junction host name, or the real portal or HTTP server host name, as the backend server host (the value of the -h parameter on the junction definition). It is better to use the virtual portal host name because some operations (such as redirect calculations) depend on the value of the HOST header, and the -h parameter on the junction definition causes WebSEAL to set the HOST header to this value. If the virtual portal host name is used, then either a secondary, internal DNS resolution, or manipulation of the hosts file, must be used by WebSEAL to resolve that host name to the IP address of the HTTP Server or Portal host.

Choose the appropriate tasks to configure IBM Security Access Manager below.

-   **[Security Access Manager prerequisites](../cfg_sec_access_mgr/tam_prereq.md)**  
Complete the prerequisite tasks before you configure IBM Security Access Manager.
-   **[Creating the PdPerm.properties file](../cfg_sec_access_mgr/run_svrssl_config.md)**  
The PdPerm.properties file configures the Access Manager Java Run Time Environment (AMJRTE). You must create the PdPerm.properties file before you configure IBM Security Access Manager for authentication, authorization, Credential Vault, or user provisioning. Run the run-svrssl-config task to create the files. This task also creates the keystore file that is used to encrypt communication with Security Access Manager.
-   **[Configuring Security Access Manager for authentication only](../cfg_sec_access_mgr/cfg_tam_auth.md)**  
HCL Digital Experience and IBM WebSphere Application Server support the Trust Association Interceptors (TAI) that IBM Security Access Manager provides. If you use Security Access Manager for authorization, you must also use Security Access Manager for authentication. Using Security Access Manager only for authorization is not supported.
-   **[Configuring Security Access Manager for authorization](../cfg_sec_access_mgr/tam_setup_esm.md)**  
You can configure IBM Security Access Manager for both authentication and authorization for HCL Digital Experience. If you configure these functions at different times as independent tasks, configure Security Access Manager for authentication first. Using Security Access Manager only for authorization is not supported.
-   **[Configuring the Credential Vault adapter for Security Access Manager](../cfg_sec_access_mgr/tam_vault.md)**  
You can use IBM Security Access Manager in the HCL Digital Experience Credential Vault service. HCL Portal includes a vault adapter to access the Security Access Manager Global Sign-on (GSO) lockbox. Any existing Tivoli resource or resource credentials can be used in your portlets that access the credential vault service without any additional configuration. In addition, the credential vault service and credential vault management portlet can create or update an existing GSO lockbox entry.
-   **[Configuring Security Access Manager for authentication, authorization, and the Credential Vault](../cfg_sec_access_mgr/tam_prov_usrs.md)**  
You can configure Security Access Manager for authentication, authorization, and the vault adapter with one task.
-   **[Removing Security Access Manager](../cfg_sec_access_mgr/tam_deconfig.md)**  
After you install and use IBM Security Access Manager, you might find that you no longer require its use. You can then remove it from the HCL Digital Experience environment and restore authentication capabilities to IBM WebSphere Application Server and authorization capabilities to HCL Digital Experience.


