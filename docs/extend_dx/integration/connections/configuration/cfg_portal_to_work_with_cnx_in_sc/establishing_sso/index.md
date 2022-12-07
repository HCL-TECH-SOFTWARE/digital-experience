# Establishing single sign-on (SSO) between the portal installation and HCL Connections in SmartCloud for Social Business

Learn about the requirements that must be fulfilled in order to successfully integrate HCL Portal with HCL Connections in SmartCloud for Social Business. You can provide a user experience where a user logs in one time into HCL Portal and then automatically sees all integrated HCL Connections information.

Since SmartCloud for Social Business uses a specific user repository, the following requirements are established by using Identity Federation and Security Assertion Markup Language (SAML):

-   Users do not have to maintain separate user names and passwords for HCL Portal and HCL Connections.
-   A user logs on one time in to your digital experience and can view:

    -   Information from HCL Connections in SmartCloud for Social Business Rest APIs that are rendered by using portlets or HCL Web Content Manager rendering in HCL Portal.
    -   The SmartCloud for Social Business HCL Connections web user interface.

-   The infrastructure to complete outbound calls must be configured to support SAML-based single sign-on (SSO), since single sign-on needs to be established for calls from the portal JVM to the HCL Connections server in SmartCloud for Social Business APIs. To configure support for SAML-based single sign-on, you must use one of the following identity providers:

    -   To use Tivoli Federated Identity Manager (TFIM) as your identity provider, view the information in [Configuration settings for Tivoli Federated Identity Manager (TFIM)](../../../../../portlets_development/web2_ui/outbound_http_connection/authenticating_outbound_http_connections/establish_sso_connections_thru_SAML20_tokens/cfg_saml_auth_conn/cfg_settings_tfim/index.md).
    -   To use Active Directory Federation Services (ADFS) as your identity provider, view the information in [Configuration settings for Active Directory Federation Services (ADFS)](../../../../../portlets_development/web2_ui/outbound_http_connection/authenticating_outbound_http_connections/establish_sso_connections_thru_SAML20_tokens/cfg_saml_auth_conn/cfg_settings_adfs/index.md).

    !!! note
        -   SAML 2.0 is the only supported version.
        -   Active Directory Federation Services (ADFS) is supported beginning with CF05 and later.

The infrastructure for your integrated system is as follows:

-   There is an identity provider server in your local environment that uses the same user repository as your portal server.
-   SSO between your portal server and the local identity provider system is established.
-   The local identity provider server and the SmartCloud for Social Business infrastructure trust each other.

To establish trust between the local identity provider server and SmartCloud for Social Business, complete the steps that are outlined in the SmartCloud for Social Business documentation:

-   For general information, see *Federated identity management* in the related links.
-   For specifics of enabling federated Identity Management, see [Enabling federated identity management](https://support.hcltechsw.com/csm).


-   **[Configuring single sign-on (SSO) for backend calls to HCL Connections in SmartCloud for Social Business](configuring_sso_sc4sb.md)**  
The HCL Connections integration assets use a common infrastructure that is called HTTP Outbound to complete calls to the HCL Connections backend server. Learn about the steps that are required to configure the HTTP outbound component to complete calls to HCL Connections in SmartCloud for Social Business.
-   **[Configuring single sign-on (SSO) for browser-based access to HCL Connections in SmartCloud for Social Business](config_sso_browser_access_sc4sb.md)**  
Single sign-on (SSO) for browser-based access to HCL Connections in SmartCloud for Social Business is enabled by using Service Provider Initiated Authentication Flow. You can enable SSO for all links, including external URLs, custom markup, search results, and social portlets. 


???+ info "Related information"
    - [Configuration settings for Tivoli Federated Identity Manager (TFIM)](../../../../../portlets_development/web2_ui/outbound_http_connection/authenticating_outbound_http_connections/establish_sso_connections_thru_SAML20_tokens/cfg_saml_auth_conn/cfg_settings_tfim/index.md)
    - [Configuration settings for Active Directory Federation Services (ADFS)](../../../../../portlets_development/web2_ui/outbound_http_connection/authenticating_outbound_http_connections/establish_sso_connections_thru_SAML20_tokens/cfg_saml_auth_conn/cfg_settings_adfs/index.md)
    - [Enable federated security](../../../../../../deployment/manage/security/people/authentication/user_registry/cw_ldap.md)
    - [Enabling federated identity management](https://support.hcltechsw.com/csm)

