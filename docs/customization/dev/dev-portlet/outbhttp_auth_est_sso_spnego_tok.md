# Establishing SSO connections through SPNEGO token

To establish a Single Sign-On \(SSO\) connection through SPNEGO token, you enable an outbound connection policy for the SSO connection through SPNEGO token.

The settings in the following example code snippet enable an SSO outbound connection policy through SPNEGO token. The example assumes that the connection `http://the_remote_server.com/sso-protected/` is a remote site that is protected by an SPNEGO token.

```
<policy url="http://the_remote_server.com/sso-protected/*"  
     basic-auth-support="true">
     <meta-data>
          <name>hpaa.authtype</name>
          <value>spnego</value>
     </meta-data>
</policy>
```

-   The policy attribute `basic-auth-support` enables the authentication filter.
-   The value of the metadata parameter `hpaa.authtype` specifies the authentication type as SSO authentication by using SPNEGO tokens.

**Parent topic:**[Authenticating outbound HTTP connections](../dev-portlet/outbhttp_authntct.md)

