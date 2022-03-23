# Establish OAuth 2.0 authenticated connections 

The Outbound HTTP Connection services support the connection of remote sites, such as Twitter, Dropbox, or Facebook, which are protected with a OAuth 2.0 authentication protocol. This section describes ways to configure Outbound HTTP connections to access resources which are protected.

The OAuth 2.0 protocol defines several authentication flows to authenticate clients and authorize access. The following authentication flows are supported:

The following authentication flows are defined:

-   Password Credentials Grant flow
-   Client Credentials Grant flow
-   Stored Authorization Token flow

The following flows are not supported by Outbound HTTP Connections:

-   Authorization Grant flow
-   Implicit Grant flow

-   **[Configure OAuth 2.0 for Password Credentials Grant flows ](../dev-portlet/Oauth2.0_password_credentials.md)**  
Configure an outbound HTTP connection that follows the Password Grant flow.
-   **[Configure OAuth 2.0 for Client Credentials Grant flows ](../dev-portlet/Oauth2.0_client_credentials.md)**  
Configure an outbound HTTP connection that follows the Client Grant flow.
-   **[Configure OAuth 2.0 using stored access tokens ](../dev-portlet/Oauth2.0_stored_access_tokens.md)**  
Some OAuth 2.0 authentication providers allow clients such as Dropbox to set a static access token. Configure an outbound HTTP connection that follows the Client Grant flow. OAuth 2.0 for an outbound HTTP connection is activated by setting the metadata SSO\_OAUTH2\_IDP at the connection policy or policy mapping. The value of this metadata setting is a symbolic name for the Identity provider that establishes the connection. This name is used as a prefix for another set of metadata that define the settings of the Identity provider as the following example illustrates.

**Parent topic:**[Authenticating outbound HTTP connections ](../dev-portlet/outbhttp_authntct.md)

