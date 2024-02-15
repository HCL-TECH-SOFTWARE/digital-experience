# Customizing the WSRP resource proxy for basic authentication

You can customize the WSRP resource proxy for HTTP basic authentication.

To do so, set the following property in the WP Configuration Service:

-   **wsrp.resourceproxy.basic.auth.credentialslot = your\_credential\_slot**

    Use this property to specify a credential vault slot that contains the user ID and password credentials. The resource proxy servlet uses the credentials from the credential vault slot when it fetches resources that are protected by HTTP basic authentication. The user ID and password are sent to all remote resources that are referenced in the markup of the remote WSRP portlet. By default no value is set for this property.


After you set the property, restart the portal or the cluster for your changes to take effect.

For details about creating a credential vault slot and about how to set configuration properties refer to the following links:


