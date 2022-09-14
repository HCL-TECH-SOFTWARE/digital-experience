# Setting scoped configuration settings for virtual portals

Web Content Manager configuration settings can be scoped for individual virtual portals.

1.  Log in to the WebSphere® Integrated Solutions Console.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers** \> **WCM WCMConfigService** \> **Custom properties**.

    **Cluster note:** If you are using this web content server as part of a cluster, ensure that you use the WebSphere Integrated Solutions Console for the deployment manager when you edit configuration properties.

3.  Add a configuration setting for each virtual portal that requires unique configuration settings. You can set this setting for either the host name or context path:

    -   **Host name:**

        ```
        vp.uniquename.hostname=ExistingVPHost
        ```

    -   **Context path:**

        ```
        vp.uniquename.context=ExistingVPContext
        ```

4.  To add a scoped configuration setting for a virtual portal, use this format:

    ```
    PropertyKey.vp.uniquename=override\_value
    ```

    This setting overrides the property key in the virtual portal that is specified in the unique name.

5.  Restart the server or cluster.


## Base override settings

If your virtual portal was named "yellowportal", you might create a scoped configuration for it using this format.

```
vp.yellow.context=yellowportal
```

The default value for the deployment subscriber is "false": `deployment.subscriberOnly=false`

You can override this value for the "yellowportal" virtual portal and change it to "true" by using this configuration parameter: `deployment.subscriberOnly.vp.yellow=true`

If the base configuration for a setting is different from all the virtual portals, it is more efficient to use a base override setting. To do this, add this setting: `enable.base.portal.overrides=true`

To add a setting just for the base portal, add "`.base`" to the end of the parameter name.

For example, if you use the default setting `deployment.subscriberOnly=true`, you can add another setting that is named `deployment.subscriberOnly.base=false` that is applied to the base portal only. All the virtual portals use the default value of `deployment.subscriberOnly=true`.


???+ info "Related information:"
    - [Configuring Web Content Manager search options](../../../../build_sites/search/wcm_config_search.md)

