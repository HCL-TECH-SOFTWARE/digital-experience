# Configuring OIDC for authentication

The authentication configuration of People Service is a crucial part of the setup process. The service leverages on OpenID Connect (OIDC) as one of its authentication strategies. OIDC requires an existing Identity Provider (IdP) and respective setup around users, clients, and potentially mappings of identity information. In this section, you will learn how to configure People Service to use OIDC and set up the service against an IdP.

## Setting up IdP and configuring People Service to use OIDC

Refer to the following steps to set up the IdP client and configure People Service to use OIDC.

1. Add the following URIs to the configuration to allow People Service and IdP to properly redirect the users during login and logout.

    - `https://<HOSTNAME>/dx/api/people/v1/auth/login`
    - `https://<HOSTNAME>/dx/ui/people`

2. Gather the following details:

    - The URL of the IdP that issues the OpenID Connect tokens. This URL is used to discover the IdP's public keys and other important configuration details.
    - The client ID, or the unique identifier assigned to your application by the IdP. This ID is used during the authentication process to identify the application requesting access.
    - The client secret, or a secret used alongside the client ID to authenticate your application to the IdP. Keep this secret safely secured.
    - The duration in milliseconds before the JWT token expires. This defines how long the token will be considered valid after its issuance. This should match the validity of the IdP's access token.
    - The OpenID Connect scopes which specify what information your application is requesting about the user. Each scope returns a set of user attributes which are used in the user's ID token or are accessible through the UserInfo endpoint and may be used to contextualize the authenticating user.
    - The URL to which the user is redirected after a successful login. This URL is where your application receives and processes the authentication response from the IdP. It should match the URL in *Step 1*.

3. Replace the sample values in the Helm chart configuration below with the actual values you gathered from your IdP configuration.

    ```
    auth:
    enabled: true
    strategy: "OIDC"
    jwtTokenExpiration: 3600000
    jwtSecret: "<JWT_SECRET>"
    oidc:
        issuer: "https://<IDP_URL>/auth/realms/<REALM>"
        clientId: "<CLIENT_ID>"
        clientSecret: "<CLIENT_SECRET>"
        redirectURI: "https://<HOSTNAME>/people/api/v1/auth/login"
        scopes: "openid profile email"
        uniqueUserIdentifierClaim: "sub"
    ```

For more details on the values you can use, refer to [Configuration - OIDC configuration](../../deployment/configuration/index.md#oidc-configuration).

## User sessions

User sessions are managed by People Service and are based on the OIDC authentication flow. When a user logs in, People Service issues a session token that is stored in the user's browser. This token is used to authenticate the user for subsequent requests to the service. The session token is valid for a configurable duration, after which the user will be required to log in again. Refer to the [Configuration - OIDC configuration](../../deployment/configuration/index.md#oidc-configuration) page for more information on session management.

First, you need to create or extend an existing client configuration within your IdP and realm. Ensure that you have prepared the appropriate and valid redirection URIs to allow People Service and IdP to properly redirect the users during login and logout.

Add the following URIs to the configuration:

- `https://<HOSTNAME>/dx/api/people/v1/auth/login`
- `https://<HOSTNAME>/dx/ui/people`

## Gathering the required details

To prepare for the configuration, gather the following details:

- The URL of the Identity Provider (IdP) that issues the OpenID Connect tokens. This URL is used to discover the IdP's public keys and other important configuration details.

- The client id, or the unique identifier assigned to your application by the IdP. This ID is used during the authentication process to identify the application requesting access.

- The client secret, or a secret used alongside the Client ID to authenticate your application to the IdP. Like a password, this should be kept secure and not exposed publicly.

- The duration in milliseconds after which the JWT token expires. This defines how long the token will be considered valid after its issuance. This should match the validity of the IdP's access token.

- The OpenID Connect scopes, which specify what information your application is requesting about the user. Each scope returns a set of user attributes, which are used in the user's ID token or are accessible through the UserInfo endpoint and may be used to contextualize the authenticating user.

- The URL to which the user is redirected after a successful login. This URL is where your application receives and processes the authentication response from the IdP. It should match the one [configured in the IdP client](#configuring-people-service-to-use-oidc-and-the-idp).

## Configuring People Service to use OIDC and the IdP

People Service is conducted through the values in Helm charts. Set the following values to configure People Service to use OIDC and the IdP:

```yaml
peopleservice:
  configuration:
    oidc:
      issuer: "https://<IDP_URL>/auth/realms/<REALM>"
      clientId: "<CLIENT_ID>"
      clientSecret: "<CLIENT_SECRET>"
      redirectURI: "https://<HOSTNAME>/dx/api/people/v1/auth/login"
      scopes: "openid profile email"
      existingSecret: ""
      existingSecretClientSecretKey: ""
```

Replace the sample values or placeholders with the actual values you gathered from your IdP configuration. For more details on the values you can use, see the [Configuration - OIDC configuration](../../deployment/configuration/index.md#oidc-configuration).

## User sessions

User sessions are managed by People Service and are based on the OIDC authentication flow. When a user logs in, People Service issues a session token that is stored in the user's browser. This token is used to authenticate the user for subsequent requests to the service. The session token is valid for a configurable duration, after which the user will be required to log in again. Refer to the [Configuration - OIDC configuration](../../deployment/configuration/index.md#oidc-configuration) for more information on session management.
