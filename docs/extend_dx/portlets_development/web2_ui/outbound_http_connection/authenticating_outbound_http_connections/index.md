# Authenticating outbound HTTP connections

You can protect the access to the remote host by an authentication mechanism.

For several authentication mechanisms, the outbound HTTP connection infrastructure provides an internal authentication support. By this support, the outbound HTTP connection service can handle the authentication protocol that is run by built-in authentication handlers. The outbound HTTP connection service supports the following authentication types:

-   HTTP basic authentication
-   HTTP digest authentication
-   SPNEGO authentication
-   Single Sign-On \(SSO\) by using LTPA tokens
-   Form-based authentication.

-   **[Providing user credentials for authenticated connections](outbhttp_auth_prv_ucreds.md)**  
Several authentication handlers require that user credentials are presented in the authentication process. For example, the HTTP basic authentication handler requires such user credentials. Before the outbound connection can be used, these user credentials are set in the Credential Vault.
-   **[Establishing a basic authenticated HTTP connection](outbhttp_auth_est_base_auth.md)**  
To establish an HTTP connection with basic authentication, you enable an outbound connection policy for HTTP basic authentication.
-   **[Establishing a digest authenticated HTTP connection](outbhttp_auth_est_digest_auth.md)**  
To establish an HTTP connection with digest authentication, you enable an outbound connection policy for HTTP digest authentication.
-   **[Establishing a form-based authenticated HTTP connection](outbhttp_auth_est_form_based_auth.md)**  
To establish an HTTP connection with form-based authentication, you enable an outbound connection policy for form-based authentication.
-   **[Establishing SSO connections through LTPA token](outbhttp_auth_est_sso_ltpa_tok.md)**  
To establish a Single Sign-On \(SSO\) connection through LTPA token, you enable an outbound connection policy for the SSO connection through LTPA token.
-   **[Establishing SSO connections through SPNEGO token](outbhttp_auth_est_sso_spnego_tok.md)**  
To establish a Single Sign-On \(SSO\) connection through SPNEGO token, you enable an outbound connection policy for the SSO connection through SPNEGO token.
-   **[Establishing SSO connections through SAML 2.0 tokens](../authenticating_outbound_http_connections/establish_sso_connections_thru_SAML20_tokens/index.md)**  
It is possible to establish outbound HTTP connections to remote resources that are authenticated by using the SAML 2.0 protocol. Outbound HTTP connections take care of the communication with the Identity provider \(IDP\) to get an authenticated connection by using SAML tokens. The SAML Authentication handler uses the HTTP POST binding protocol of the SAML specification. Therefore, it is required that both the Identity Provider and the Service Provider support the HTTP POST binding, if they are used by Outbound HTTP Connections for authentication.
-   **[Adding or changing endpoint URL settings](outbound_http_adding_endpoint_url.md)**  
Sometimes a URL needs to include query parameters or POST forms data that isn’t known or cannot be known at the client site. For example, an API key for a REST service, or an application code such as a Google maps key. The URL transformation feature of the outbound connection services can handle this requirement.
-   **[Establish OAuth 2.0 authenticated connections](../authenticating_outbound_http_connections/establish_oauth2_authenticated_connections/index.md)**  
The Outbound HTTP Connection services support the connection of remote sites, such as Twitter, Dropbox, or Facebook, which are protected with a OAuth 2.0 authentication protocol. This section describes ways to configure Outbound HTTP connections to access resources which are protected.


???+ info "Related information"
    - [Configuration Service](../../../../../deployment/manage/config_portal_behavior/service_config_properties/portal_svc_cfg/cfg_svc/index.md)
    - [Adding an outbound connection policy](../../outbound_http_connection/cfg_outbound_http_connections/sample_admin_tasks/outbhttp_cfgsmptsk_add_ob_conn_plcy.md)

