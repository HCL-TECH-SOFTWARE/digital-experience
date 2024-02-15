# Configuring access to remote systems for federated documents

To retrieve metadata information for documents on remote content management systems, configure the federated documents feature with information about the remote system and the settings that are used to handle communication with the system.

Because the federated documents feature uses the AJAX proxy component to access the remote content management system, you can use the global AJAX proxy configuration to customize the outgoing HTTP traffic, such as applying specific HTTP timeout values or configuring an outbound HTTP proxy server. You must list the individual content management servers to be accessed through the federated documents feature as allowed request targets in the AJAX proxy configuration, and enable LTPA cookie forwarding for those requests. To do this, map the URL patterns for the content management server to the `federated_documents_policy` dynamic policy using the `WP ConfigService` configuration service.

1.  Log in to the WebSphere® Integrated Solutions Console.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Click **WP ConfigService**.

4.  Under **Additional Properties**, click **Custom Properties**.

5.  Click **New**, and enter the property name wp.proxy.config.urlreplacement.federated\_documents\_policy.suffix, and set the string value to the URL pattern of the content management server.

    For example, to enable the federated documents feature to access information from the content management server `ecm.example.com` on port 10038 over HTTP, you would add the following property:

    ```
    wp.proxy.config.urlreplacement.federated_documents_policy.1=http://ecm.example.com:10038/*
    ```

    !!! note
        The value of the property key `suffix` can be any value as long as it is unique within the set of keys mapping to the `federated_documents_policy` dynamic policy.

6.  Create additional properties as needed for any other content management servers that you need to access through the federated documents feature.

7.  The federated documents feature can also consume arbitrary ATOM feeds. To enable this, you can map the URL prefix of the ATOM feed to the `default_policy` dynamic policy.

    1.  Click **New**, and enter the property name wp.proxy.config.urlreplacement.default\_policy.suffix, and set the string value to the URL pattern of the server providing the ATOM feed.

        For example, to enable the federated documents feature to access ATOM feeds from the server `www.example.com`, you would add the following property:

        ```
        wp.proxy.config.urlreplacement.default_policy.1=http://www.example.com/*
        ```

        The value of the property key `suffix` can be any value as long as it is unique within the set of keys mapping to the `default_policy` dynamic policy.

        **Important:** To prevent security token forwarding to untrusted servers, be sure that you do not use the `federated_documents_policy` dynamic policy for those servers.

    2.  Create additional properties as needed for any other ATOM feed servers that you need to access through the federated documents feature.

8.  Save your changes, and restart the portal server.



???+ info "Related information"
    - [Setting service configuration properties](../../../../deployment/manage/config_portal_behavior/service_config_properties/index.md)

