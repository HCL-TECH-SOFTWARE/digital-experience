# Establishing a form-based authenticated HTTP connection

To establish an HTTP connection with form-based authentication, you enable an outbound connection policy for form-based authentication.

The settings in the following example code snippet enable an outbound connection policy for form-based authentication. The example assumes that the site http://the\_remote\_server.com/login-form-protected/ is protected by a form-based authentication. The form is submitted by an action URL https://the\_remote\_server.com/doLogin.php.

```
<policy url="http://the_remote_server.com/login-form-protected/*" >	
     <meta-data>
          <name>hpaa.authtype</name>
          <value>form</value>
     </meta-data>
     <meta-data>
          <name>hpaa.slotid</name>
          <value>OutboundConnectionCredentials</value>
     </meta-data>
     <meta-data>
          <name>forward-credentials-from-vault</name>
          <value>true</value>
     </meta-data>
     <meta-data>
          <name>form-action-url</name>
          <value>https://the\_remote\_server.com/doLogin.php</value>
     </meta-data>
     <meta-data>
          <name>form-field-name-user</name>
          <value>user\_id</value>
     </meta-data>
     <meta-data>
          <name>form-field-name-password</name>
          <value>user\_id\_password</value>
     </meta-data>
     <meta-data>
          <name>form-additional-fields</name>
          <value>param1=value1,param2=value2</value>
          </meta-data>
     <meta-data>
          <name>form-session-cookies</name>
          <value>sessioncookie1,sessioncookie2</value>
     </meta-data>
</policy>
```

Set the following metadata parameters as required:

-   **hpaa.slotid**

    Use this parameter to specify the slot ID of the credential vault. For information about how to provide the user credentials of the remote connection, read *Providing user credentials for authenticated connections*.

-   **forward-credentials-from-vault**

    Use this parameter to specify that the credentials of the form-based authentication are gathered from the Credential Vault.

-   **form-action-url**

    Use this parameter to specify the URL to which the form data is submitted.

-   **form-field-name-user**

    Use this parameter to specify the ID of the HTML `<input>` tag that contains the user ID. In the previous example, the specified value is user\_id.

-   **form-field-name-password**

    Use this parameter to specify the ID of the HTML `<input>` tag that contains the password. In the previous example, the specified value is user\_id\_password.

-   **form-additional-fields**

    Use this parameter to specify the names of the additional HTML input elements that are present in the form. In the previous example, the specified elements are param1=value1 and param2=value2.

-   **form-session-cookies**

    Use this parameter to specify the names of the session cookies that are received from the remote server as part of Set-Cookie headers when the form is submitted and the authentication is successful. In the previous example, the specified cookies are sessioncookie1 and sessioncookie2.



