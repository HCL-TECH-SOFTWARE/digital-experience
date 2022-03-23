# Configuration settings for SAML authenticated connections 

To enable a connection policy for SAML-based authentication, the following settings must be defined in the metadata section of the policy, the policy mapping, or the default mapping.

-   **SSO\_SAML20\_IDP**

    The unique name of the Identity Provider, for example, `IdpName`. This metadata enables the policy for SAML-based authentication and is used to locate the Identity Provider settings. This metadata is required to support SAML-based authentication. Refer to the following example:

    ```
    <meta-data>
    	<name>SSO\_SAML20\_IDP</name>
    	<value>IdpName</value>
    </meta-data>
    ```

    **Important:** For the remaining settings, `IdpName` refers to the name of the Identity Provider that you specified in the SSO\_SAML20\_IDP setting.

-   **IdpName.IDP\_HOST**

    The host name or IP address of the identity provider. This setting is required. Refer to the following example:

    ```
    <meta-data>
    	<name>IdpName.IDP\_HOST</name>
    	<value>www.mytfim.org</value>
    </meta-data>
    ```

-   **IdpName.IDP\_PROTOCOL**

    This setting defines how the Identity Provider is connected and has two possible values, either `http` or `https`. Refer to the following example:

    ```
    <meta-data>
    	<name>IdpName.IDP\_PROTOCOL</name>
    	<value>https</value>
    </meta-data>
    ```

-   **IdpName.IDP\_PORT**

    This setting defines the TCP port that is used for the Identity Provider connection. The default value is 80. Refer to the following example:

    ```
    <meta-data>
    	<name>IdpName.IDP\_PORT</name>
    	<value>9443</value>
    </meta-data>
    ```

-   **IdpName.IDP\_URI**

    The URI of the Identity Provider service to which the SAML authentication is submitted. If this metadata setting is not defined, the connection uses the default URI /SAML2/SSO/POST. Refer to the following example:

    ```
    <meta-data>
    	<name>IdpName.IDP\_URI</name>
    	<value>/idp/saml20/post</value>
    </meta-data>
    ```

-   **IdpName.IDP\_TIMEOUT**

    The timeout value of the connection to the Identity Provider. If this metadata setting is not defined, the connection timeout is 60 seconds. Refer to the following example:

    ```
    <meta-data>
    	<name>IdpName.IDP\_TIMEOUT</name>
    	<value>120</value> <!-- wait 2 minutes -->
    </meta-data>
    ```

-   **IdpName.IDP\_AUTH\_TOKEN\_SOURCE**

    Optional parameter that determines from where the authentication tokens for the IDP are taken. The default value is `ltpa`. The SAML authentication protocol begins with a request to the Identity provider. This request contains an authentication token, used to identify the caller at the Identity provider. The IdpName.IDP\_AUTH\_TOKEN\_SOURCE parameter determines where this authentication token is taken from. Currently, two values are enabled:

    -   **`ltpa`**

        If the value `ltpa` is defined, then the Ajax proxy creates an LTPA token from the user subject of the Ajax proxy connection. This LTPA token is submitted to the Identity provider to authenticate the IDP request. For most authentication scenarios that are based on Tivoli Federated Identity Manager, the `ltpa` setting is the preferred one.

    -   **`cookies`**

        If the value `cookies` is defined, then the Ajax proxy uses authentication cookies from the local connection to authenticate the IDP request. The authentication cookie names are defined in the IdpName.IDP\_AUTH\_TOKEN.n metadata settings.

    Refer to the following example:

    ```
    <meta-data>
    	<name>IdpName.IDP\_AUTH\_TOKEN\_SOURCE</name>
    	<value>cookies</value>
    <! -- take cookie list from IDP_AUTH_TOKEN_COOKIE.n as authentication tokens -->
    </meta-data>
    ```

-   **IdpName.PARAM\_NAME.n and IdpName.PARAM\_VALUE.n**

    IdpName.PARAM\_NAME.n is the name of a URL query parameter to the Identity Provider. Use this setting with IdpName.PARAM\_VALUE.n, which defines the value of a URL query parameter to the Identity Provider. For both settings, n is a counter beginning with 1. Refer to the following example:

    ```
    <meta-data>
    	<name>IdpName.PARAM\_NAME.1</name>
    	<value>RequestBinding</value>
    </meta-data>
    <meta-data>
    	<name>IdpName.PARAM\_VALUE.1</name>
    	<value>HTTPPost</value>
    </meta-data>
    ```

-   **IdpName.IDP\_AUTH\_COOKIE.n**

    The name of the authentication cookie, where n is a counter beginning with 1. If this metadata setting is not defined, the default authentication cookie is `SAML20`. Refer to the following example:

    ```
    <meta-data>
    	<name>IdpName.IDP\_AUTH\_COOKIE.1</name>
    	<value>SAML20</value>
    </meta-data>
    <meta-data>
    	<name>IdpName.IDP\_AUTH\_COOKIE.2</name>
    	<value>another_cookie</value>
    </meta-data>
    ```

-   **IdpName.IDP\_AUTH\_TOKEN\_COOKIE.n**

    The name of the authentication cookie that is used to authenticate against the Identity Provider to start the SAML authentication protocol. This metadata is only effective if the metadata IdpName.IDP\_AUTH\_TOKEN\_SOURCE is set to `cookies`. Otherwise, the settings are ignored. The following example defines the authentication cookies `MSISAuthenticated`, `MSISAuth`, and `MSISAuth1`.

    ```
    <meta-data>
    	<name>IdpName.IDP\_AUTH\_TOKEN\_COOKIE.1</name>
    	<value>MSISAuthenticated</value>
    </meta-data>
    <meta-data>
    	<name>IdpName.IDP\_AUTH\_TOKEN\_COOKIE.2</name>
    	<value>MSISAuth</value>
    </meta-data>
    <meta-data>
    	<name>IdpName.IDP\_AUTH\_TOKEN\_COOKIE.3</name>
    	<value>MSISAuth1</value>
    </meta-data>
    ```


-   **[Configuration settings for Tivoli Federated Identity Manager \(TFIM\) ](../dev-portlet/outbhttp_auth_est_sso_tfim.md)**  
Learn about establishing an SAML-based SSO connection for Tivoli Federated Identity Manager. Tivoli Federated Identity Manager must be installed and operational before an SSO connection can be established.
-   **[Configuration settings for Active Directory Federation Services \(ADFS\) ](../dev-portlet/outbhttp_auth_est_sso_adfs.md)**  
Learn about establishing a single-sign on \(SSO\) connection for Active Directory Federation Services \(ADFS\).

**Parent topic:**[Establishing SSO connections through SAML 2.0 tokens ](../dev-portlet/outbhttp_auth_est_sso_saml_tok.md)

