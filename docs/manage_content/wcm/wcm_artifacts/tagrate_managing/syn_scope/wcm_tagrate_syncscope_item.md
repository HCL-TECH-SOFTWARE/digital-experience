# Synchronizing scopes when items change

To automatically run scope synchronization whenever an item changes in the web content system, specify the tagging.syndication.enableItemModificationSynchronization property in the Web Content Manager configuration service.

**Note:** This type of synchronization works only for individual item changes. For example, this type of synchronization is not automatically run when an entire site area or folder is moved. To synchronize scopes after such a change, you can run synchronization manually.

1.  Log in to the WebSphere® Integrated Solutions Console \(`http://hostname.example.com:10027/ibm/console`\).

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Click **WCM WCMConfigService**.

4.  Under **Additional Properties**, click **Custom Properties**.

5.  Add the `tagging.syndication.enableItemModificationSynchronization` property.

    1.  Click **New**, and enter the property name `tagging.syndication.enableItemModificationSynchronization`.

    2.  Set the string value to `true`.

6.  Click **OK**, and save the changes to the master configuration.

7.  Restart the portal.



**Related information**  


[Setting service configuration properties](../admin-system/adsetcfg.md)

