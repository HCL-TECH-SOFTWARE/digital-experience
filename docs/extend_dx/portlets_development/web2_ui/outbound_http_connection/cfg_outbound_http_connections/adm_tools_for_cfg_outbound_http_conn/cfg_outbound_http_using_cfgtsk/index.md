# Configuring outbound HTTP connections by using configuration tasks

Programmers can create, read, update, or delete settings of the outbound HTTP connection by using the appropriate portal configuration engine tasks.

The portal provides the following configuration tasks for these tasks:

```
create-outbound-http-connection-config
read-outbound-http-connection-config
update-outbound-http-connection-config
delete-outbound-http-connection-config
clean-outbound-http-connection-config
```

For more information about how to work with outbound HTTP connection configuration settings, read the following topics. They also provide information about to work with application-scoped configuration settings.

-   **[How to create an outbound HTTP connection configuration profile](outbhttp_cfg_tsk_create.md)**  
This configuration task creates an outbound HTTP connection configuration profile by using the settings that you specify in an XML document. Use this task if you want to initially create outbound HTTP settings for your configuration. You can create a global configuration or an application-scoped configuration.
-   **[How to read an outbound HTTP connection configuration profile](outbhttp_cfg_tsk_read.md)**  
This configuration task reads an outbound HTTP connection configuration and exports it to an XML document. System administrators can use this document to update the configuration of an outbound HTTP connection. You can read a global configuration or an application-scoped configuration.
-   **[How to update an outbound HTTP connection configuration profile](outbhttp_cfg_tsk_update.md)**  
This configuration task updates the configuration profile settings of the outbound HTTP connection with the settings that are specified in an XML document. Use this task to manage existing outbound HTTP settings of your configuration. You can update a global configuration or an application-scoped configuration.
-   **[How to delete outbound HTTP connection configuration settings](outbhttp_cfg_tsk_delete.md)**  
This configuration task deletes configuration settings for an outbound HTTP connection. It deletes the settings that are specified in an XML document. You can delete settings of the global configuration or of an application-scoped configuration.
-   **[How to clear outbound HTTP connection configuration profiles](outbhttp_cfg_tsk_clear.md)**  
The clean-outbound-http-connection-config configuration task clears the complete configuration profile for an outbound HTTP connection. It deletes all settings of an outbound HTTP connection profile. The delete-outbound-http-connection-config configuration task deletes only those configuration settings that are listed in the specified XML document.


???+ info "Related information" 
    - [Preparing your system environment and the prerequisites for Integrator for SAP](../admin-system/sap_int_prep.md)
    - [Migration](../../../../outbound_http_connection/outbound_http_migrate.md)
    - [Changing from Ajax proxy to outbound HTTP connection](../../../../../../../deployment/manage/migrate/next_steps/enable_func_migrated_portal/mig_enable_outboundhttp.md)

