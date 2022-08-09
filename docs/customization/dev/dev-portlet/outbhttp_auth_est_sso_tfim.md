# Configuration settings for Tivoli Federated Identity Manager \(TFIM\)

Learn about establishing an SAML-based SSO connection for Tivoli Federated Identity Manager. Tivoli Federated Identity Manager must be installed and operational before an SSO connection can be established.

For more information about the administrative settings of Tivoli Federated Identity Manager, see *Creating a generic SAML 2.0 federation with a new or existing domain* in the related links.

-   **[Finding the Identity Provider login URL and the Partner URL \(TFIM\)](../dev-portlet/outbhttp_auth_est_sso_tfim_idpp_url.md)**  
In order to establish an SSO connection through Tivoli Federated Identity Manager, you must specify the Identity Provider login URL and the Partner URL. Learn how to find these values from the Tivoli Federated Identity Manager configuration if you do not already know them. If you know these values already, skip this step.
-   **[Creating Identity Provider settings at the Outbound Connection Service configuration \(TFIM\)](../dev-portlet/outbhttp_auth_est_sso_tfim_idpp_settings.md)**  
Certain metadata settings such as the Identity Provider URL and the Partner URL are required to use Tivoli Federated Identity Manager Identity Provider for SSO connections through SAML 2.0 authentication protocol.
-   **[Defining policy rules for the remote connection \(TFIM\)](../dev-portlet/outbhttp_auth_est_sso_tfim_rules.md)**  
Learn about how to create a policy rule for the SSO connection. Creating a policy rule is required to use the SSO connection for the Identity Provider that you registered.
-   **[Adding the Java Authentication and Authorization Service \(JAAS\) login module to the Tivoli Federated Identity Manager \(TFIM\) server](../dev-portlet/add_jaas.md)**  
The Java Authentication and Authorization Service \(JAAS\) login module is available as a plug-in. This plug-in sets the email address of the logged in user within the security context so that the email address can be used within Tivoli Federated Identity Manager.

**Parent topic:**[Configuration settings for SAML authenticated connections](../dev-portlet/config_settings_saml_auth_connections.md)

**Related information**  


[Establishing single sign-on \(SSO\) between the portal installation and HCL Connections in SmartCloud for Social Business](../dev-portlet/est_sso_portal_sc4sb.md)

[Configuring single sign-on \(SSO\) for backend calls to HCL Connections in SmartCloud for Social Business](../dev-portlet/configuring_sso_sc4sb.md)

[Creating a generic SAML 2.0 federation with a new or existing domain](https://www.ibm.com/docs/en/tfim/6.2.2.7?topic=ipsc-creating-generic-saml-20-federation-new-existing-domain)

