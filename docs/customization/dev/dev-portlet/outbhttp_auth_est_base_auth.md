# Establishing a basic authenticated HTTP connection

To establish an HTTP connection with basic authentication, you enable an outbound connection policy for HTTP basic authentication.

The policy rule settings in the following example code snippet enable an outbound connection policy for HTTP basic authentication. The example assumes that the connection `http://the_remote_server.com/basic-auth-protected/` is a remote site that is protected by basic authentication.

```
<policy url="http://the_remote_server.com/basic-auth-protected/*" 
     basic-auth-support="true">
     <meta-data>
          <name>hpaa.authtype</name>
          <value>http-basic</value>
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

The meanings of the settings are as follows:

-   The policy attribute `basic-auth-support` enables the authentication filter.
-   The value of the metadata parameter `hpaa.authtype` specifies the authentication type as HTTP basic authentication.
-   The value of `hpaa.slotid` specifies the slot ID of the credential vault. For instructions about how to provide the user credentials of the remote connection, read *Providing user credentials for authenticated connections*.
-   The metadata setting `forward-credentials-from-vault` specifies that the credentials of the basic authentication are gathered from the Credential Vault.
-   You can use the parameter `hpaa.piid` to specify the portlet instance ID for which the credential slot is defined. This parameter is optional.

**Parent topic:**[Authenticating outbound HTTP connections](../dev-portlet/outbhttp_authntct.md)

