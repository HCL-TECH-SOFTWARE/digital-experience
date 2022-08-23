# Further configuration options

These configuration options are available to address installation requirements for other deployment scenarios.

-   **[Controlling access to hosts specified in a URL](../wcm/wcm_config_accesshost.md)**  
By default, you can specify any host name in a URL used to retrieve content. However, you can restrict access to a specified list of host names by modifying the configuration of the WCM WCMConfigService service.
-   **[Web content substitution variables](../wcm/wcm_config_wasvariables.md)**  
HCL Web Content Manager uses several substitution variables that are defined in the configuration for IBM WebSphere Application Server.
-   **[Setting scoped configuration settings for virtual portals](../wcm/wcm_config_scoped_vp.md)**  
Web Content Manager configuration settings can be scoped for individual virtual portals.
-   **[Disabling Workflow Actions](../wcm/wcm_config_disable_actions.md)**  
Disable workflow action on servers that do not require workflows to be processed, such as a subscriber. This strategy can improve performance and reduce the number of versions that are created for each item.
-   **[Enabling connect tags](../wcm/wcm_config_connect.md)**  
Enable connect tags to reference web content components and apply customized caching to the components.
-   **[Remove authoring configuration task](../wcm/wcm_install_configtasks_removeauthoring.md)**  
The remove authoring configuration task uninstalls the authoring portlet and related portal pages.
-   **[Enabling email](../wcm/wcm_config_smtp.md)**  
To use the email workflow action, you must configure Web Content Manager to use your SMTP server.
-   **[Defining alternative administrators for multi-realm configurations](../wcm/wcm_config_admin_multirealm.md)**  
Web Content Manager requires a user to run various system tasks such as initialization, and background tasks such as syndication. By default, this system user is the configured JCR domain administrator. In scenarios where the configured user realm does not contain the domain administrator then an alternative user must be provided.
-   **[Changing the login or redirect page used for servlet rendering](../wcm/wcm_config_admin_redirect.md)**  
When an unauthenticated user accesses secured content using servlet rendering, the user is redirected to the Web Content Manager login page by default.


