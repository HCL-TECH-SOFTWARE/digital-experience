# Synchronizing scopes after syndication

To automatically run scope synchronization whenever syndication occurs, specify the tagging.syndication.enableTagSynchronization property in the Web Content Manager configuration service.

1.  Log in to the WebSphere® Integrated Solutions Console (`http://hostname.example.com:10027/ibm/console`).

2.  Click **Resources > Resource Environment > Resource Environment Providers**.

3.  Click **WCM WCMConfigService**.

4.  Under **Additional Properties**, click **Custom Properties**.

5.  Add the `tagging.syndication.enableTagSynchronization` property.

    1.  Click **New**, and enter the property name `tagging.syndication.enableTagSynchronization`.

    2.  Set the string value to `true`.

6.  Click **OK**, and save the changes to the master configuration.

7.  Restart the portal.


???+ info "Related information"  
    -   [Setting service configuration properties](../../../../../../deployment/manage/config_portal_behavior/service_config_properties/index.md)

