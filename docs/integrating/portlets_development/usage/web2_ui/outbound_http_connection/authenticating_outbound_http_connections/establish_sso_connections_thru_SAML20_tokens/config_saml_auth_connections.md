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


-   **[Configuration settings for Tivoli Federated Identity Manager \(TFIM\)](../dev-portlet/outbhttp_auth_est_sso_tfim.md)**  
Learn about establishing an SAML-based SSO connection for Tivoli Federated Identity Manager. Tivoli Federated Identity Manager must be installed and operational before an SSO connection can be established.
-   **[Configuration settings for Active Directory Federation Services \(ADFS\)](../dev-portlet/outbhttp_auth_est_sso_adfs.md)**  
Learn about establishing a single-sign on \(SSO\) connection for Active Directory Federation Services \(ADFS\).

# Adding the \(JAAS\) login module to the \(TFIM\) server

The Java Authentication and Authorization Service \(JAAS\) login module is available as a plug-in. This plug-in sets the email address of the logged in user within the security context so that the email address can be used within Tivoli Federated Identity Manager.

The local Tivoli Federated Identity Manager server creates SAML tickets to interact with SmartCloud for Social Business. You can identify the user in those tickets by their email address. The default mapping rules in Tivoli Federated Identity Manager enable access to attributes within the security context of a user. It is not possible to use the email address of the user that is currently logged in. Instead of custom programming, HCL Portal provides a Java Authentication and Authorization Service \(JAAS\) login module implementation that must be added to your Tivoli Federated Identity Manager system. The JAAS plug-in accesses the user's email address and inserts it into the Authorization Token, so the email address can be used within the standard mapping rules. Because the plug-in uses VMM API calls to obtain the email address, the Federated Repository type needs to be configured on your Tivoli Federated Identity Manager system. The following WebSphere® Application Server JAAS login modules must be enabled before you enable the plug-in:

-   com.ibm.ws.security.server.lm.ltpaLoginModule
-   com.ibm.ws.security.server.lm.wsMapDefaultInboundLoginModule

The preceding modules are enabled by default.

If these prerequisites are not met in your environment, or you have another way of obtaining the email address that is not stored in your User Repository, you can implement your own JAAS plug-in by using the developerWorks guidelines. For more information, see the developerWorks article *Developing a custom Java module* in the related links.

-   **[Configuring the Java Authentication and Authorization Service \(JAAS\) login module](../dev-portlet/config_jaas.md)**  
The behavior of the JAAS login module is configurable. If you change the attribute name for the security context, make sure to adjust the mapping rule accordingly.
-   **[Tivoli Federated Identity Manager \(TFIM\) mapping for the Java Authentication and Authorization Service \(JAAS\) login module](../dev-portlet/tfim_mapping.md)**  
By default, the JAAS plug-in reads a user's email address from the VMM attribute with the name mail. The JAAS plug-in sets the mail attribute in the security context. If you change the name of the attribute in the security context, update the following mapping rule accordingly.

# Configuring the Java Authentication and Authorization Service \(JAAS\) login module

The behavior of the JAAS login module is configurable. If you change the attribute name for the security context, make sure to adjust the mapping rule accordingly.

-   Verify that the following WebSphere® Application Server JAAS login modules are enabled:
    -   com.ibm.ws.security.server.lm.ltpaLoginModule
    -   com.ibm.ws.security.server.lm.wsMapDefaultInboundLoginModule
-   Copy the JAAS plug-in to the AppServer\\lib\\ext directory of your Tivoli Federated Identity Manager installation. If your Tivoli Federated Identity Manager is clustered, complete this step on the Deployment Manager and all cluster nodes. The JAAS plug-in file is named wp.auth.jaas and is available in the PortalServer/base directory.

Copying the JAAS plug-in to the AppServer directory prevents the plug-in from being updated during a portal installation update. If fixes are available, make sure to update the portal installation and then replace the existing JAR files in the Tivoli Federated Identity Manager installations with the new JAR files.

-   To configure the plug-in by using the default settings, complete the following steps:

    1.  Open a wsadmin shell.

    2.  Run the following command:

        ```
        $AdminTask configureLoginModule { -loginType system
              -loginEntryAlias WEB_INBOUND -loginModule com.ibm.wps.auth.jaas.EnrichAttributeLoginModule
              -useLoginModuleProxy true -authStrategy OPTIONAL  -newModule true }
        $AdminConfig save
        ```

    3.  Exit wsadmin and restart the server.

-   To configure the plug-in by using an alternative VMM attribute name for the email address, complete the following steps.

    1.  Open a wsadmin shell.

    2.  Run the following command:

        ```
        $AdminTask configureLoginModule { -loginType system
              -loginEntryAlias WEB_INBOUND -loginModule com.ibm.wps.auth.jaas.EnrichAttributeLoginModule
              -useLoginModuleProxy true -authStrategy OPTIONAL  -customProperties
              {"vmm_email_attribute_name=internet\_mail"} -newModule true }
        $AdminConfig save
        ```

        Where internet\_mail is the alternative VMM attribute name for the email address.

    3.  Exit wsadmin and restart the server.

-   To configure the plug-in by using an alternative attribute name for the security context, complete the following steps:

    1.  Open a wsadmin shell.

    2.  Run the following command:

        ```
        $AdminTask configureLoginModule { -loginType system
              -loginEntryAlias WEB_INBOUND -loginModule com.ibm.wps.auth.jaas.EnrichAttributeLoginModule
              -useLoginModuleProxy true -authStrategy OPTIONAL  -customProperties
              {"context_email_attribute_name=email"} -newModule true }
        $AdminConfig save
        ```

        Where email is the alternative attribute name for the security context.

    3.  Exit wsadmin and restart the server.

-   To configure the plug-in by using an alternative VMM attribute name for the email address and an alternative attribute name for the security context, complete the following steps:

    1.  Open a wsadmin shell.

    2.  Run the following command:

        ```
        $AdminTask configureLoginModule
                { -loginType system -loginEntryAlias WEB_INBOUND -loginModule
                com.ibm.wps.auth.jaas.EnrichAttributeLoginModule -useLoginModuleProxy true -authStrategy
                OPTIONAL  -customProperties {"vmm_email_attribute_name=internet\_mail",
                "context_email_attribute_name=email"} -newModule true }
        $AdminConfig save
        ```

        Where internet\_mail is the alternative VMM attribute name for the email address and email is the alternative attribute name for the security context.

    3.  Exit wsadmin and restart the server.

-   To remove the plug-in, complete the following steps:

    1.  Open a wsadmin shell.

    2.  Run the following command:

        ```
        $AdminTask
                unconfigureLoginModule { -loginType application -loginEntryAlias Portal_LTPA -loginModule
                com.ibm.wps.auth.jaas.EnrichAttributeLoginModule }
        $AdminConfig save
        ```

    3.  Exit wsadmin and restart the server.

# Tivoli Federated Identity Manager \(TFIM\) mapping for the Java Authentication and Authorization Service \(JAAS\) login module

By default, the JAAS plug-in reads a user's email address from the VMM attribute with the name mail. The JAAS plug-in sets the mail attribute in the security context. If you change the name of the attribute in the security context, update the following mapping rule accordingly.

```
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
xmlns:xalan="http://xml.apache.org/xalan"
version="1.0"
xmlns:mapping-ext="com.tivoli.am.fim.trustserver.sts.utilities.IDMappingExtUtils"
extension-element-prefixes="mapping-ext"
xmlns:stsuuser="urn:ibm:names:ITFIM:1.0:stsuuser">
        <xsl:strip-space elements="*" />
        <xsl:output method="xml" version="1.0" encoding="utf-8" indent="yes" />
        <!-- Initially we start with a copy of the document. -->
        <xsl:template match="@* | node()">
            <xsl:copy>
               <xsl:apply-templates select="@* | node()" />
            </xsl:copy>
        </xsl:template>

        <!-- This will replace the principal name with the user's email. -->
        <xsl:template
        match="//stsuuser:Principal/stsuuser:Attribute[@name='name']">
            <stsuuser:Attribute name="name" type="urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress">
            <stsuuser:Value>
               <xsl:value-of select="//stsuuser:AttributeList/stsuuser:Attribute[@name='mail']/stsuuser:Value"/>
            </stsuuser:Value>
            </stsuuser:Attribute>
        </xsl:template>
</xsl:stylesheet>
```
