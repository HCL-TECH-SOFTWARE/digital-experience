# Manual Step: Disabling friendly URL redirects

The Modify Site URLs for Search Engine Optimization option in the Configuration Wizard includes manual steps. For reference only, you can see the details of the manual step for disabling friendly URL redirects. To view this step in the Configuration Wizard, you must select No to wanting navigational state information in your URL.

1.  Optional manual step: Disable friendly URL redirects.

    If the incoming URL does not contain the friendly URL prefix of the addressed page, a URL redirect adds state information to the URL. Use the following steps to disable URL redirects, set the custom property `friendly.redirect.enabled` to the value false in the Resource Environment Provider \(REP\) WPConfigService in the WebSphere® Integrated Solutions Console.

    1.  Log in to the WebSphere Integrated Solutions Console.
    2.  Click **Resources** **\>** **Resource Environment** **\>** **Resource Environment Providers**.
    3.  Find the WP ConfigService Resource Environment Provider.
    4.  Select **WP ConfigService** **\>** **Custom properties**.
    5.  Find the property `friendly.redirect.enabled` and set the value to `false` If this property does not exist, add it as a new custom property and set the value to `false`.
    6.  Apply the changes and save them to the Master Configuration.
    If the property is not listed there, add it and set it to false. For information about this property and how to set it, see the topics *Configuration service* and *Setting service configuration properties*.

    For information about this property and how to set it, see the topics [Configuration Service](../admin-system/srvcfgref_config.md) and [Setting service configuration properties](../admin-system/adsetcfg.md).


