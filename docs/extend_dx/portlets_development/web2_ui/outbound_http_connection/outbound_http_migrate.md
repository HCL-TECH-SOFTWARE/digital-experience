# Migration

HCL Portal Version 8.5 provides a migration process for the change from the Ajax proxy of previous portal versions to the new outbound HTTP connection.

If you upgrade your HCL Portal from a previous version to Version 8.5, the outbound HTTP connection infrastructure attempts to migrate existing Ajax proxy configuration settings to the outbound HTTP connection service configuration. It moves all settings from the Ajax proxy configuration into database settings for the outbound HTTP connection service. This migration takes place as follows:

-   **Migration of global configuration settings:**

    In previous HCL Portal versions, global proxy configuration settings were in the proxy-config.xml file of the Ajax Proxy Configuration web module. The outbound HTTP connections infrastructure migrates global proxy configuration settings when the portal Version 8.5 outbound HTTP connection service is accessed for the first time after the portal upgrade. The global configuration settings are updated in the system configuration profile.

-   **Migration of customized global configuration settings:**

    In previous HCL Portal versions, custom global proxy configuration settings were in the WP Configuration Service Resource Environment Provider \(REP\) property named proxy.config.file. The outbound HTTP connections infrastructure migrates these custom global configuration settings when the portal Version 8.5 outbound HTTP connection service is accessed for the first time after the portal upgrade. Custom global configuration settings are updated into the global configuration profile.

-   **Migration of application-specific proxy configurations**

    Application-specific configurations are imported into the outbound HTTP connection configuration when the web module for the application is deployed. The deployment program scans for the file /WEB-INF/proxy-config.xml. If this file exists, the migration program creates a scoped configuration profile that relates to the web module that is created.


!!!note "Important"
        In previous HCL Portal versions, the proxy-config.xml file held the configuration of the Ajax proxy. Changes that you make to this file became effective when you restarted the web module. In contrast, the outbound HTTP connection infrastructure makes only the necessary updates to the proxy-config.xml file. Changes to this file do not become effective until one of the following events occur:

        -   For global or customized global configuration settings: The outbound HTTP connection service is started for the first time after the portal upgrade.
        -   For application-specific proxy configurations: The web module that contains the proxy-config.xml is deployed.
        -   One of the portal configuration tasks `create-outbound-http-connection-config` or `update-outbound-http-connection-config` is started.


???+ info "Related information" 
    - [Configuring outbound HTTP connections by using configuration tasks](../outbound_http_connection/cfg_outbound_http_connections/adm_tools_for_cfg_outbound_http_conn/cfg_outbound_http_using_cfgtsk/index.md)

