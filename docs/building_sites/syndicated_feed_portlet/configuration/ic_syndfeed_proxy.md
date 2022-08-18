# Configuring proxy settings

The Syndicated Feed Portlet for HCL Digital Experience is supported in a proxied environment.

To specify the details of proxy server, proceed as follows:

1.  Click the **Administration menu** icon in the toolbar. Then, click **Portlet Management** \> **Portlets**.

2.  Search for the Syndicated Feed portlet entry.

3.  Click the **Configure portlet** \(wrench\) icon for the Syndicated Feed Portlet.

4.  Add the following configuration parameters to the existing list of configuration parameters for the Syndicated Feed Portlet.

    |Parameter|Value|
    |---------|-----|
    |`proxyHost`|Specify the proxy server hostname|
    |`proxyPort`|Specify the proxy server port number|

    To add these configuration parameters:

    1.  Type the parameter name in the **New Preference** text field.

    2.  Type the value of the parameter in the **New value** text field.

    3.  Click **Add**.

    **Note:** You do not need to restart the portal server after you specify the configuration parameters. The updated configuration becomes effective without restart.


**Parent topic:**[Syndicated Feed Portlet for HCL Digital Experience](../admin-system/ic_syndfeed_features.md)

