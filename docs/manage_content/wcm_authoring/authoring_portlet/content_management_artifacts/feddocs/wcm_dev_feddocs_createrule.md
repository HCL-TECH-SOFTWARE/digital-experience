# Creating a federated documents selection rule

Create a selection rule that selects metadata of documents that are contained in a specific folder of a remote content management system or document repository.

Before you create a rule to access federated documents information, ensure that you configure the feature as described in [Setting up support for federated documents](../../../../wcm_configuration/cfg_webcontent_auth_env/fed_docs_setup/index.md).

1.  Open the Personalization Navigator.

2.  Browse to the folder where you want to create the rule, or create a folder for the new rule.

3.  Click **New > Rule**.

4.  Enter a name for the rule.

5.  Enter a description for the rule to identify the data that the rule selects.

6.  Click the link for the **Select** action in the rule editor (for example, **Web Content**), and select **Federated Documents**.

7.  Specify the folder on the remote system either by entering the URL directly or by browsing the remote system.

    In addition to a folder on a remote system, you can enter the URL of any Atom feed available on the network. The Atom data that is created by those feeds is mapped to corresponding AttributeResource tags in HCL Web Content Manager.

    -   To enter the URL for a folder directly, complete these steps:
        1.  Click **value**.
        2.  Enter the URL of the folder.
        3.  Click **Submit**.
    -   To browse a Document Services server or CMIS server, click the **\>** symbol on the **Feed URL** condition, and click **Select Document Folder** to start the wizard to select a folder.

        To connect to a remote server, you identify the server and the authentication method that is used to access the server. You can either select a predefined server or enter the server URL directly. By default, no predefined servers are configured, but an administrator can add servers to the list. To authenticate with a server, there are several available methods:

        -   If single sign-on is configured between the remote server and the portal, you can connect with the current user.
        -   You can enter a user ID and password for the remote server.
        -   You can select a credential vault slot that is associated with the server. Credential vault slots are set up by an administrator and enable users to log in without credentials.
        If you use a user ID and password or credential vault slot, the remote server must accept authentication requests that use HTTP basic authentication.

        For details on how administrators can add servers and configure authentication, see *Configuring the federated documents feature.*

        !!!note
            To browse remote servers and select a folder, the page that contains the Personalization Editor requires a theme and module profile that support the wp_federated_documents_picker theme module. For example, you can use the Portal 8.0 theme and the full or deferred profile. If the page does not use this theme module, the wizard to select a folder is not available when you click **Select Document Folder**. You can still manually enter a feed URL to a remote folder by clicking **value**. To enable the folder selection wizard, ensure that the wp_federated_documents_picker theme module is available to the page that contains the Personalization Editor.

8.  Click **show all items**, and specify the maximum number of entries to be retrieved.

9.  Click **Save**.


You can now use this rule in a personalization component to render the selection result of this rule in web content.


???+ info "Related information"  
    -   [Configuring the federated documents feature](../../../../wcm_configuration/cfg_webcontent_auth_env/fed_docs_setup/wcm_dev_feddocs_cfgfeddocs.md)
    -   [Reserved authoring portlet](../../content_management_artifacts/reserved_auth_portlet/index.md)
    -   [The module framework](../../../../../build_sites/themes_skins/the_module_framework/index.md)

