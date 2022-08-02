# Configuring the federated documents feature

Configure the federated documents feature to specify information about the source servers for the documents that are available to users.

When the portal retrieves documents from a remote server, authentication might be required to access the documents on the remote server. You can use several types of authentication:

-   Single sign-on \(SSO\) between the portal and the remote server
-   User name and password information in the user interface. Only HTTP basic authentication is supported for CMIS servers.
-   Credential vault slots that handle HTTP authentication

In addition to enabling or disabling credential vault slots for authentication, you can identify the servers that provide documents. For each server, you can define characteristics such as the type of document that the server returns and the title that is used to identify the server.

1.  Log in to the WebSphere® Integrated Solutions Console.

2.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

3.  Click **WP FederatedDocumentsService**.

4.  Under **Additional Properties**, click **Custom Properties**.

5.  Specify whether credential vaults slots are used for authentication with remote servers.

    Because you can access federated documents through either the personalization editor or the rich text editor that is provided with Web Content Manager, you can configure credential vault slots for each method independently.

    1.  If you are accessing federated documents through the personalization editor, click **wp.federated.documents.pzn.vaultselection.enabled**. To enable credential vaults slots, set the value to true, or, to disable credential vault slots, set the value to false.

        By default, the value is true.

    2.  If you are accessing federated documents through the rich text editor in Web Content Manager, click **wp.federated.documents.wcm.vaultselection.enabled**. To enable credential vaults slots, set the value to true, or, to disable credential vault slots, set the value to false.

        By default, the value is true.

    If you enable credential vault slots, users can select a credential vault slot in the user interface. You can also use the property **wp.federated.documents.suffix.vault.slot** to specify a default credential slot to be used with a given remote server.

6.  Specify whether users can enter their own servers when they access remote content or can use only predefined servers that you configure.

    1.  Click **wp.federated.documents.custom.server.enabled**.

    2.  To allow users to enter their own servers, set the value to true. To prevent users from entering custom servers, set the value to false. When set to false, the user interface does not display the entry field for custom servers. By default, the value is true.

7.  Specify whether documents from servers that support Document Services remote interfaces can be retrieved by the portal.

    Examples of products that support Document Services remote interfaces include HCL Content Manager, and IBM FileNet Content Manager.

    1.  Click **wp.federated.documents.document.services.enabled**.

    2.  To enable access to Document Services feeds, set the value to true. To disable access to Document Services feeds, set the value to false. If set to false, users can still access servers that support CMIS or Atom feeds, but connections to Document Services servers are not supported.

        Prior to CF06, this value is set to true by default. In CF06 or higher, this value is set to false by default.

8.  For each remote server that contains documents you want to access from the portal, configure the server URL, feed type, and extra optional properties.

    The value of the `suffix` portion of the property key is used to group related properties for each server. Use the same `suffix` value for properties that are related to the same server. The `suffix` can be any value when it is unique across the property keys.

    For each property, click **New** and enter the name and value:

    -   **wp.federated.documents.suffix.url**

        Value: The URL for an Atom feed or CMIS service document for the remote server. This property is required.

    -   **wp.federated.documents.suffix.type**

        Value:

        -   The value CMIS indicates that the remote server provides a CMIS service document.
        -   The value DocumentServices indicates that the remote server supports Document Services remote interfaces.
        -   The value ATOM indicates that the remote server provides a generic Atom feed.
        If no value is specified, a default value of CMIS is used.

    -   **wp.federated.documents.suffix.title.default**

        Value: The title that is used to identify this source server in the user interface, when there is no resource bundle that is defined to provide title text. If no default title and no resource bundle are defined, the value of the wp.federated.documents.suffix.url property is used in the user interface.

    -   **wp.federated.documents.suffix.nls.resources**

        Value: The name of the resource bundle that contains the translated title and description that is used to identify this source server in the user interface. If this property is not defined, the default title is used. If no default title and no resource bundle are defined, the value of the wp.federated.documents.suffix.url property is used in the user interface.

    -   **wp.federated.documents.suffix.vault.slot**

        Value: The name of the credential vault slot that stores the credentials that are used for authentication with the remote server. Credential vault slots are set up and managed by the portal administrator. This property defines the default credential vault slot that is predefined in the user interface, although the user can also select a different slot if one is available. If this property is not defined, the user interface does not display a default credential vault slot, but you can still select a slot from the available list. This property is optional.

        **Note:** The credential vault slot must contain the credentials that are required for authentication with the remote server.

    -   **wp.federated.documents.suffix.override.authentication.enabled**

        Value: true or false. When set to true, the user can change the authentication method for the server in the user interface. When set to false, the user interface does not display the field to change the authentication method. The default value is true.

9.  Configure the amount of data that is returned for the summary metadata attribute of the document.

    1.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

    2.  Click **WCM WCMConfigService**.

    3.  Under **Additional Properties**, click **Custom Properties**.

    4.  Click **wcm.pzn.ecm.max.field.length**, and enter the number of characters to be returned. If no value is specified, the default value is 128 characters.

10. Configure whether property changes are automatically loaded.

    By default, the Federated Documents service automatically reloads properties at a specified interval, without requiring you to restart the portal. You can change the automatic reloading behavior or modify the reloading interval.

    1.  Click **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

    2.  Click **WP FederatedDocumentsService**.

    3.  Under **Additional Properties**, click **Custom Properties**.

    4.  Click **wp.federated.documents.document.service.reload.disabled**, and specify a value of true to disable automatic reloading of properties. The default value is false.

    5.  Click **wp.federated.documents.document.service.reload.interval**, and specify the interval in seconds for reloading properties. The default value is 3 seconds.

11. Save your changes. The Federated Documents service automatically reloads any updated properties.

    If you disabled automatic reloading, restart the portal server.

12. If you enable credential vault slots, grant access to credential vault slots for all authenticated users.

    1.  Log in to the portal as an administrator.

    2.  Click the **Administration menu** icon. Then, click **Access** \> **Resource Permissions**.

    3.  From the list of resource types, go to **Virtual Resources**.

    4.  For the **ADMIN\_SLOTS** resource, click the **Assign Access** icon.

    5.  Edit the **User** role, and add the **All Authenticated Portal Users** group to the role.


**Parent topic:**[Setting up support for federated documents](../wcm/wcm_dev_feddocs_setup.md)

**Related information**  


[Creating a federated documents selection rule](../wcm/wcm_dev_feddocs_createrule.md)

