# Configure federated documents feature for files

Complete the configuration of the federated documents feature to communicate with HCL Connections.

1.  Specify whether credential vaults slots are used for authentication with remote servers.

    Because you can access federated documents through either the personalization editor or the rich text editor that is provided with Web Content Manager, you can configure credential vault slots for each method independently.

    1.  If you are accessing federated documents through the personalization editor, click **wp.federated.documents.pzn.vaultselection.enabled**. To enable credential vaults slots, set the value to true, or, to disable credential vault slots, set the value to false.

        By default, the value is true.

    2.  If you are accessing federated documents through the rich text editor in Web Content Manager, click **wp.federated.documents.wcm.vaultselection.enabled**. To enable credential vaults slots, set the value to true, or, to disable credential vault slots, set the value to false.

        By default, the value is true.

    If you enable credential vault slots, users can select a credential vault slot in the user interface. You can also use the property **wp.federated.documents.suffix.vault.slot** to specify a default credential slot to be used with a given remote server.

2.  If you enable credential vault slots, grant access to credential vault slots for all authenticated users.

    1.  Log in to the portal as an administrator.

    2.  Click the **Administration menu** icon. Then, click **Access** \> **Resource Permissions**.

    3.  From the list of resource types, click **Virtual Resources**.

    4.  For the ADMIN\_SLOTS resource, click the **Assign Access** icon.

    5.  Edit the User role, and add the All Authenticated Portal Users group to the role.

3.  Configure the amount of data that is returned for the summary metadata attribute of the document.

    1.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

    2.  Click **WCM WCMConfigService**.

    3.  Under **Additional Properties**, click **Custom Properties**.

    4.  Click **wcm.pzn.ecm.max.field.length**, and enter the number of characters to be returned. If no value is specified, the default value is 128 characters.

4.  Configure whether property changes are automatically loaded.

    By default, the Federated Documents service automatically reloads properties at a specified interval, without requiring you to restart the portal. You can change the automatic reloading behavior or modify the reloading interval.

    1.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

    2.  Click **WP FederatedDocumentsService**.

    3.  Under **Additional Properties**, click **Custom Properties**.

    4.  Click **wp.federated.documents.document.service.reload.disabled**, and specify a value of true to disable automatic reloading of properties. The default value is false.

    5.  Click **wp.federated.documents.document.service.reload.interval**, and specify the interval in seconds for reloading properties. The default value is 3 seconds.

5.  Save your changes. The Federated Documents service automatically reloads any updated properties.

    If you disabled automatic reloading, restart the portal server.


**Parent topic:**[Integrating HCL Connections files](../collab/i_coll_t_enable_lcfiles.md)

**Related information**  


[Inserting a link to remote content](https://help.hcltechsw.com/digital-experience/8.5/panel_help/wcm_dev_elements_insert_link_ecm.html)

[Personalizing federated documents](../wcm/wcm_dev_feddocs.md)

