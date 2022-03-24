# Page properties for configuring the SAP navigation integration 

To configure the SAP navigation integration of Integrator for SAP, you can set the following page configuration properties.

For details about where and how to set these properties, read the topic about *Configuring your Integrator for SAP*.

-   **sap.BaseUri**

    This property is mandatory. Use this property to specify the base URI to the SAP NetWeaver Portal. Example: `http://sapportal.company.com:50000` . This property has no default.

-   **sap.CredentialSlotId**

    This property is mandatory only if you use Basic Authentication for SSO. Use this property to specify the name of the Credential Vault slot that you want to use for authentication to the SAP NetWeaver Portal.

-   **sap.SSOTokenUrl**

    This property is mandatory only if you use Basic Authentication for SSO and if you have created a Credential Vault slot for this authentication method. In this case use this property to specify the absolute URL to a protected resource of your choice in your SAP NetWeaver Portal, for example a specific page or iView. This URL is used for login to retrieve the SSO token. During retrieval of the SSO token, HCL Portal follows all HTTP redirects. If you use a SAML scenario, you do not need to set this property.

-   **sap.SSOTokenDomain**

    This property is mandatory only if you use Basic Authentication for SSO. Add this property if you want to pass also the SSO token defined by the property `sap.SSOTokenName` from HCL Portal to the client browser. If you do so, the integration also authenticates the clients that use the configured SSO scenario between HCL Portal and SAP NetWeaver Portal. To enable this authentication by token, specify the domain for which you want to set the token, starting with a dot, for example `.ibm.com`   . This property has no default. If you set this property, you also must do the following:

    -   Add the login filter implementation `com.ibm.wps.integration.sap.login.LoginFilter` to both the explicit **and** implicit login filter chains.
    -   Add the logout filter implementation `com.ibm.wps.integration.sap.logout.LogoutFilter` to both the explicit **and** implicit logout filter chains.
    For details see the topic about *Configuring authentication filters*in the HCL Portal Version 7.0 product documentation.

-   **sap.SSOTokenName = \(MYSAPSSO2\)**

    This property is optional. Use it only if you use Basic Authentication for SSO. Use this property to specify the SSO token name of your SAP NetWeaver Portal. If you use the Credential Vault, use this property for authentication of the web service call. The default value is `MYSAPSSO2` .

-   **sap.NavUri = \(/NavigationWS/NavigationWSConfig?style=document\)**

    This property is optional. Use this property to specify the relative URI of the SAP NetWeaver Portal navigation web service. The default value is `/NavigationWS/NavigationWSConfig?style=document` .

-   **sap.InteropUri = \(/irj/portal/interop\)**

    This property is optional. Use this property to specify the relative URI of the SAP Interop service. The default value is `/irj/portal/interop` .

-   **sap.NavUriTimeout**

    This property is optional. Use this property to specify a timeout in seconds for the web service call. The default value is `5` .

-   **sap.ClientSideLogging = \(false\)**

    This property is optional. Use this property to determine whether HCL Portal gives out client-side JavaScript debugging messages to the JavaScript console. This is helpful if problems with the automatic resizing of the iframe occur. If you want the portal to give out client-side JavaScript debugging messages to the JavaScript console, set this property to `true`. Restart the HCL Portal server for the change to become active.


**Parent topic:**[Configuring Integrator for SAP ](../admin-system/sap_int_cfg.md)

**Related information**  


[Configuring Integrator for SAP ](../admin-system/sap_int_cfg.md)

[Configuring Basic Authentication for SSO for the SAP navigation integration ](../admin-system/sap_int_cfg_basauth_sso_4nav.md)

[Completing the configuration ](../admin-system/sap_int_cfg_cmplt.md)

[Configuring authentication filters ](../admin-system/adauthflt.md)

