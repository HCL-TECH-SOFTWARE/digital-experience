# Configuring outbound HTTP connections

In HCL Portal Version 8.0 and earlier versions, outbound HTTP connections were accessible through the Ajax Proxy service. The Ajax Proxy service was configured by a configuration document named proxy-config.xml. You find this document in the /WEB-INF directory of the web module that uses the Ajax Proxy service. Starting with HCL Portal Version 8.5 and the new outbound connection service, the configuration of outbound HTTP connections is now part of the standard datastore-based portal configuration.

For more detailed information, read the following topics.

-   **[Configuration structure](../cfg_outbound_http_connections/cfg_structure/index.md)**  
The Outbound Connection Service Configuration model has the following structure.
-   **[XML format for outbound HTTP connection configuration settings](../cfg_outbound_http_connections/xml_format_outbound_http/index.md)**  
To export or import the outbound HTTP Connections configuration, you use an XML file with a specific schema.
-   **[Administration tools for configuring outbound HTTP connections](../cfg_outbound_http_connections/adm_tools_for_cfg_outbound_http_conn/index.md)**  
Portal system administrators can administer the outbound HTTP connection configuration in one of two ways: either by using configuration tasks, or by using the portal Model and Controller SPIs.
-   **[Sample administration tasks](../cfg_outbound_http_connections/sample_admin_tasks/index.md)**  
Here you find some procedures for running administration tasks on the outbound HTTP connection settings. These tasks use the portal configuration engine interface.


???+ info "Related information"
    - [Preparing your system environment and the prerequisites for Integrator for SAP](https://help.hcltechsw.com/digital-experience/8.5/admin-system/sap_int_prep.html)
    - [Performance tuning for Integrator for SAP](https://help.hcltechsw.com/digital-experience/8.5/admin-system/sap_int_perf_tun.html)
