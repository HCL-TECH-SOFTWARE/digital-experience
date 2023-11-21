# Configuring authentication

Set up single sign-on integration between HCL Connections and HCL Portal with third-party security products, or configure basic authentication to enable access to the portlets.

HCL Connections uses single sign-on \(SSO\) to secure the transfer of user ID and password information that is used to authenticate with the system. With SSO, users can switch to different applications without needing to authenticate again. SSO is automatically enabled when HCL Connections is installed on a single WebSphere® Application Server profile or when different profiles are federated into the same cell.

Configuring basic authentication allows the manual entry of user credentials in the personalize mode of the portlets. Basic authentication for the portlets can be supported only if single sign-on is not already enabled between HCL Portal and HCL Connections. If single sign-on is enabled \(through LTPA, Kerberos or another mechanism\), it takes precedence. If single sign-on is enabled, the basic authentication credentials that are entered in the personalize mode of the portlets are ignored.

Configuring single sign-on for users is suggested over using basic authentication for user interactions. If you use basic authentication for the portlets, every user must type in their personal credentials manually in the personalize mode of the portlets or shared credentials can be supplied from the Credential Vault. Basic authentication can be especially useful for trials of the portlets before you have a chance to configure some form of single sign-on, but is not suggested for production use.

-   **[Enabling single sign-on for the portlets for a stand-alone LDAP server](t_connections_portlets_SSO_LPTA.md)**  
Before you install the HCL Connections Portlets for HCL Digital Experience, enable single sign-on (SSO) between HCL Connections and HCL Portal.
-   **[Configuring single sign-on for portlets with SAM and SPNEGO](connections_portlets_TAM_Spnego_SSO.md)**  
Configure HCL Connections portlets to use single sign-on with IBM Security Access Manager and SPNEGO.
-   **[Configuring single sign-on with Security Access Manager](connections_portlets_TAM_SSO.md)**  
Configure HCL Connections portlets to use single sign-on with IBM Security Access Manager.
-   **[Configuring single sign-on for portlets with SiteMinder and SPNEGO](t_connections_portlets_SSO_siteminder_spnego.md)**  
Configure HCL Connections portlets to use single sign-on with Computer Associates eTrust SiteMinder and SPNEGO.
-   **[Configuring single sign-on for portlets with SPNEGO](connections_portlets_spnego_SSO.md)**  
Configure HCL Connections portlets to use single sign-on with SPNEGO.
-   **[Changing the realm name](connections_portlets_change_realm_name.md)**  
When you configure HCL Connections portlets to use single sign-on, you might need to change the Portal realm name to match the one used in HCL Connections.
-   **[Enabling basic authentication](c_connections_portlets_basic_auth.md)**  
Configure basic authentication for the HCL Connections portlets. Use basic authentication if you are not using single sign-on for authentication.



???+ info "Related information"
    - [WebSphere® Integrated Solutions Console](../../../../../../../deployment/manage/portal_admin_tools/WebSphere_Integrated_Solutions_Console.md)
