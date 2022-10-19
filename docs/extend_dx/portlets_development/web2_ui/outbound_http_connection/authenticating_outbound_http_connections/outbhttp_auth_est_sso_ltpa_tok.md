# Establishing SSO connections through LTPA token

To establish a Single Sign-On \(SSO\) connection through LTPA token, you enable an outbound connection policy for the SSO connection through LTPA token.

The settings in the following example code snippet enable an SSO outbound connection policy through LTPA token. The example assumes that the connection `http://the_remote_server.com/sso-protected/` is a remote site that is protected by an LTPA token.

```
<policy url="http://the_remote_server.com/sso-protected/*"  
     basic-auth-support="true">
     <meta-data>
          <name>hpaa.authtype</name>
          <value>ltpa</value>
     </meta-data>
     <meta-data>
          <name>hpaa.slotid</name>
          <value>OutboundConnectionCredentials</value>
     </meta-data>
     <meta-data>
          <name>forward-credentials-from-vault</name>
          <value>true</value>
     </meta-data>
</policy>
```

-   The policy attribute `basic-auth-support` enables the authentication filter.
-   The value of the metadata parameter `hpaa.authtype` specifies the authentication type as SSO authentication by using LTPA tokens.
-   The value of `hpaa.slotid` specifies the slot ID of the credential vault. For instructions about how to provide the user credentials of the remote connection, read *Providing user credentials for authenticated connections*. The slot ID identifies the Credential Vault slot for the user subject for which the LTPA tokens are used.
-   The metadata setting `forward-credentials-from-vault` specifies that the credentials of the SSO authentication are gathered from the Credential Vault.


???+ info "Related information"
     - [Providing user credentials for authenticated connections](outbhttp_auth_prv_ucreds.md)

