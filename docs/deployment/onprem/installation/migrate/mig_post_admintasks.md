# Administrative tasks

To ensure that your new environment functions properly, complete administrative tasks such as enabling automatic synchronization, migrating web server configurations, configuring a federated LDAP user registry, and more.

-   **[Enabling automatic synchronization for a clustered environment](../migrate/mig_enable_auto-sync.md)**  
Before you started migration, you disabled automatic synchronization to prevent the source and target environments from becoming corrupted. Now that the data migration is complete, it is safe to enable this feature on both the source and target environments.
-   **[Staying logged in when switching URI](../migrate/mig_post_swtcurl.md)**  
If you migrated from Version 8.0.0.1, the default portal behavior was to log you out when you switched from a protected to unprotected URI. In Version 8.5, the default behavior is to keep you logged in. If you do not want to get logged out, you can enable the Version 8.5 default behavior.
-   **[Enabling unprotected URI Authentication](../migrate/mig_post_saml_uri_auth.md)**  
If Security Assertion Markup Language \(SAML\) is enabled, or if you plan to enable SAML, you must ensure that LTPA authentication works correctly with the web and proxy servers.
-   **[Federating the LDAP user registry](../migrate/mig_t_pre_standalone_ldap.md)**  
The stand-alone LDAP user registry configuration is deprecated. Instead, configure the federated LDAP user registry. Run the wp-modify-federated-security task to change to a federated LDAP user registry.
-   **[Migrating web server configurations](../migrate/mig_webserver_configs.md)**  
Migrate a web server so that it supports the latest version of WebSphere® Application Server. The Application Migration Toolkit for WebSphere® Application Server supports migrating applications from previous versions of WebSphere® Application Server to the latest product version.
-   **[Disabling TAI if disabled previously](../migrate/mig_post_tai.md)**  
If TAI was disabled before you began migration, and you had to enable it in order to run the migration, then you might need to disable TAI on both the source and target environments as a post-migration step.
-   **[Adding secondary nodes to a clustered environment](../migrate/mig_post_secondarynodes.md)**  
The standard process of adding HCL Portal server nodes to a cluster is to set up a stand-alone HCL Portal server with the correct database settings, and run the enable-profiles task to generate profile templates that can be used to create the secondary node profiles. However, there is a limitation with the enable-profiles task and it cannot be run in a clustered environment.
-   **[Reviewing and updating scheduled tasks](../migrate/mig_post_sched_tasks.md)**  
After you complete the migration by using the Configuration Wizard, review your scheduled tasks to verify that the tasks are still valid for your current environment.

**Parent topic:**[Post-migration activities](../migrate/mig_t_post_mig.md)

