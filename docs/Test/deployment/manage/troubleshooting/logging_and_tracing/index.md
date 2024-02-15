# Logging and tracing

If you are experiencing a problem, you might want to enable tracing and then re-create the problem to capture more log information.

Refer to the MustGather data collection lists used in troubleshooting various problems in HCL Portal and HCL Web Content Manager. Collecting MustGather data early, even before you open a PMR, helps HCL Software Support quickly determine whether:

-   Symptoms match known problems \(rediscovery\).
-   A non-defect problem can be identified and resolved.
-   A defect identifies a workaround to reduce severity.
-   Locating the root cause can speed development of a code fix.

You can enable logging and tracing for software that is included with HCL Digital Experience. Enabling tracing makes log output more verbose. For example, you can enable tracing within WebSphere® Application Server to obtain information about application servers and other processes.

You can use the information gathered to help solve your own problems or to report an issue to HCL Software Support.

## Links to important HCL Digital Experience tracing questions

-   **How do I turn on HCL Digital Experience trace logging?**

    See [Trace logging](adsyslog.md#tra_log) for information.


-   **What are the different trace settings and where are they logged?**

    See [Portal runtime logs](run_logs.md) for information.


-   **How do I change the location of my logs?**

    See [Changing the log file name and location](adsyslog.md#log_loc) for information.


-   **[Installation and migration logs](inst_logs.md)**  
Learn about the different log files that HCL Digital Experience provides to help administrators identify and correct problems with installation and migration.
-   **[HCL Portal runtime logs](run_logs.md)**  
If tracing is enabled, HCL Digital Experience generates a log file during run time that contains messages and trace information.
-   **[Verbosegc in Java VM logs](verbosegc.md)**  
Verbose garbage collection \(verbosegc\) logging is often required when tuning and debugging many issues, and has negligible impact on system performance.
-   **[WebSphere Application Server tracing and log files](was_logs.md)**  
Use WebSphere Application Server log files and tracing to troubleshoot problems with HCL Portal.
-   **[Configuration Wizard log files](cfg_wizd_logs.md)**  
The Configuration Wizard generates log files each time you run it. The log file can help you to debug problems.
-   **[Virtual Member Manager tracing](wmm_logs.md)**  
Enable WebSphere Application Server trace facilities to create trace information for Virtual Member Manager.
-   **[System event logging](adsyslog.md)**  
The system event logging facility of HCL Digital Experience enables the recording of information about the operation of HCL Portal.
-   **[HCL Web Content Manager tracing](/wcm_logs.md)**  
Enable the use of WebSphere Application Server trace facilities to create trace information for Web Content Manager. This tracing can be enabled either permanently or for just the current HCL Digital Experience session.
-   **[Logging and tracing for containers and new services](logging_tracing_containers_and_new_services.md)**  
The following table outlines the tracing options that are used to capture logging and tracing for HCL Digital Experience 9.5 container-based services with container update CF181 and later releases.
-   **[Logging and tracing client side rendering](../logging_and_tracing/logging_and_tracing_clientside)**  
Learn the how to enable client side logging and tracing of your HCL Digital Experience pages.


**Related information**  


[Portal Search trace and log files](../../../../build_sites/search/portal_search/hint_tips/srrlogtrac.md)

[Debugging your module systematically](../../../../build_sites/themes_skins/the_module_framework/troubleshooting_modular_themes/themeopt_mod_debug_pattern.md)

[Data collection and symptom analysis](../../../manage/troubleshooting/tools_for_troubleshooting_and_diagnostics/tbl_apdt_over.md)

