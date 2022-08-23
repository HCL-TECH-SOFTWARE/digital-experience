# Configuring Content Security Policy

To enable Content Security Policy on HCL Digital Experience, you need to configure your web server to return the Content-Security-Policy header.

-   **[WP\_ConfigService Resource Environment Parameters \(REP\) for Content Security Policy configuration](../security/wp_configservice_resource_environment_parameters_rep.md)**  
The following WebSphere Application Server \(WAS\) resource environment parameters will be introduced to configure CSP.
-   **[Create and run a Config Engine task for out-of-the-box Content Security Policy resource environment parameters](../security/create_and_run_a_config_engine_task.md)**  
The out-of-the-box \(OOB\) Content Security Policy \(CSP\) resource environment parameters can be set by creating and running a Config Engine task. In future updates post-Container Update CF192, this configuration task will be provided. If CSP support is implemented using CF192, the DX administrator must create a file containing the task and put in on the DX server to run the task. Alternatively, the parameters can be created individually in the WebSphere Application \(WAS\) Administration console under the WP\_ConfigService resource environment provider custom properties.
-   **[Page Metadata to configure Content Security Policy](../security/page_metadata.md)**  
The following page metadata will be introduced to configure CSP on a per-page basis.


