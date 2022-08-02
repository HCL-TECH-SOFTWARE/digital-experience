# Configuring remote server access for links

Before you can add links to files and documents that are stored in remote content management systems into web content elements, you must configure your server with information about the remote system and the settings that are used to handle communication with the system.

To prevent linking to unsafe servers, you need to specify a list of allowed domains that your portal can access by using the portal's AJAX proxy component. You can use the global AJAX proxy configuration to customize the outgoing HTTP traffic, such as applying specific HTTP timeout values or configuring an outbound HTTP proxy server. To do this, map the URL patterns for the Enterprise Content Manager server to the `federated_documents_policy` dynamic policy using the `WP ConfigService` configuration service.

1.  Log in to the WebSphere® Integrated Solutions Console.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Click **WP ConfigService**.

4.  Under **Additional Properties**, click **Custom Properties**.

5.  Click **New**, and enter the property name wp.proxy.config.urlreplacement.federated\_documents\_policy.suffix, and set the string value to the URL pattern of the Enterprise Content Manager server.

    For example, to enable the server to access information from the Enterprise Content Manager server `ecm.example.com` on port 10038 over HTTP, you would add the following property:

    ```
    wp.proxy.config.urlreplacement.federated_documents_policy.1=http://ecm.example.com:10038/*
    ```

    **Note:** The value of the property key `suffix` can be any value as long as it is unique within the set of keys mapping to the `federated_documents_policy`.

6.  Create additional properties as needed for any other Enterprise Content Manager servers that you need to access through the server.

7.  Save your changes, and restart the portal server.


If a user tries to access a server \(for example, `www.example.com`\) that has not been added to the list of allowed domains, the following message is displayed:

```
Access to remote server www.example.com has not been granted. 
Please contact your system administrator.
```

**Parent topic:**[Configuring a web content authoring environment](../wcm/wcm_install_cfgauthoring.md)

**Related information**  


[Setting service configuration properties](../admin-system/adsetcfg.md)

[Using the AJAX proxy in portlets](../dev-portlet/ajax_proxy_prgrmdl_inplt.md)

[IBM DB2 Content Manager publication library](https://support.hcltechsw.com/csm)

