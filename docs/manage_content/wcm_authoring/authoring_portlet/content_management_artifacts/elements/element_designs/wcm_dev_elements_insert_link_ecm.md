---
id: wcm_dev_elements_insert_link_ecm
title: Inserting a link to remote content
---

# Inserting a Link to Remote Content

You can insert links to remote content into elements that contain a rich text field by using the **Insert Link to Remote Document** button in the rich text editor. Only remote content that is configured remote server access can be selected by using this button.

The **Insert Link to Remote Document** function requires the modularized theme and works only if the wp_federated_documents_picker is part of the profile. You must also set up support for federated documents.

1.  Click **Insert Link to Remote Document**, and use the wizard to select a document.

    To connect to a remote server, you identify the server and the authentication method that is used to access the server. You can either select a predefined server or enter the server URL directly. By default, no predefined servers are configured, but an administrator can add servers to the list. To authenticate with a server, there are several available methods:

    -   If single sign-on is configured between the remote server and the portal, you can connect with the current user.
    -   You can enter a user ID and password for the remote server.
    -   You can select a credential vault slot that is associated with the server. Credential vault slots are set up by an administrator and enable users to log in without credentials.
    If you access the remote server with a user ID and password, a temporary credential vault slot is created to store and manage authentication data. When you close the wizard, the temporary credential vault slot is automatically deleted. However, if you do not close the wizard explicitly, the temporary credential vault slot cannot be deleted. For example, this situation can occur if you close the browser window before you complete the wizard. Any temporary credential vault slots that are not used for at least 3 hours are removed by a cleanup task (com.ibm.portal.cmis.TransientSlotCleanupTask) that runs once a day. An administrator can change the schedule of the cleanup task through the XML configuration interface.


???+ info "**Related information"
    - [Configuring remote server access for links](../../../../../wcm_configuration/cfg_webcontent_auth_env/wcm_config_ecm_whitelist.md)
    - [Reserved authoring portlet](../../../content_management_artifacts/reserved_auth_portlet/index.md)
    - [The module framework](../../../../../../build_sites/themes_skins/the_module_framework/index.md)
    - [Editor options](../../../../../wcm_delivery/wcm_user_assistance/editing_webcontent_portlet/auth_portlet_settings/wcm_config_authoringportlet_richtext.md)
    - [Customizing pages](../../../../../../deployment/manage/portal_admin_tools/portal_user_interface/managing_pages/manage_pages_portlets/customizing_pages/index.md)
    - [Setting up support for federated documents](../../../../../wcm_configuration/cfg_webcontent_auth_env/fed_docs_setup/index.md)
    - [Reserved authoring portlet](../../../content_management_artifacts//reserved_auth_portlet/index.md)
    - [Integrating HCL Connections files](../../../../../../extend_dx/integration/connections/configuration/cfg_connections_features/integrating_cnx_files/index.md)


