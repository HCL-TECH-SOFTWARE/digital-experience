# Establishing a digest authenticated HTTP connection

To establish an HTTP connection with digest authentication, you enable an outbound connection policy for HTTP digest authentication.

The settings in the following example code snippet enable an outbound connection policy for HTTP digest authentication. The example assumes that the connection `http://the_remote_server.com/digest-auth-protected/` is a remote site that is protected by digest authentication.

```
<policy url="http://the_remote_server.com/basic-auth-protected/*" 
     digest-auth-support="true">
     <meta-data>
          <name>hpaa.authtype</name>
          <value>http-digest</value>
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
-   The value of the metadata parameter `hpaa.authtype` specifies the authentication type as HTTP digest authentication.
-   The value of `hpaa.slotid` specifies the slot ID of the credential vault. For instructions about how to provide the user credentials of the remote connection, read *Providing user credentials for authenticated connections*.
-   The metadata setting `forward-credentials-from-vault` specifies that the credentials of the digest authentication are gathered from the Credential Vault.
-   You can use the parameter `hpaa.piid` to specify the portlet instance ID for which the credential slot is defined. This parameter is optional.


