# Utilities for theme issues

If you need help with a theme issue, you can export your system data. Support personnel can then import and view your data as a simulated system to troubleshoot problems.

The import and export features are compatible with later versions, so if you have a recent version of HCL Portal you can themes from previous versions. For example, an exported Portal 7002 theme can be viewed on a HCL Portal 8.0 system.

-   **Export**

    You can export your data to share with IBM support or your local support organization.

-   **Import**

    You can import data from an external system to create a simulated system to aid in troubleshooting.

    !!! note
        When you import display data, the portlet enters a simulation mode. When the portlet is in simulation mode, page browsing is disabled and resource contributions cannot be clicked or viewed.

-   **Control Center**

    The Control Center provides some short cuts for changing settings, which can help with theme analysis and debugging. These shortcuts are explained in detail on the Control Center page. Tools in the control center affect only the node on which you are currently working.

    -   **Invalidate Cache**

        Allows you to clear theme optimization-related caches so that changes you make locally to a theme's modules and profiles can be made available immediately, without restarting the server. Modify your theme then click the **Click to invalidate** link.

        The framework can recognize updates to module and profile definitions of WebDAV based themes automatically. It significantly reduces the need for you to invalidate the cache manually. However, this feature does not work on .WAR file based themes.

        For example, updating the file dav:fs-type1/themes/Portal8.5/contributions/theme.json through any WebDAV client, is recognized from the default pattern and causes an automatic theme invalidation.

        For more information, see [Configuration for resource aggregation](../../../customizing_theme/cfg_portal_theme_and_modules/config_res_agg.md).

    -   **Invalidate system modules**

        Allows you to invalidate system modules that are defined in plugin.xml files during the theme invalidation process. However, this feature skips all.WAR files.

        For more information, see [Configuration for resource aggregation](../../../customizing_theme/cfg_portal_theme_and_modules/config_res_agg.md).

    -   **Remote Debugging**

        Allows you to see each module contribution as an individual request, and if there is a debug uncompressed version of the contribution it uses that resource. This is the same as setting the trace string to `com.ibm.wps.resourceaggregator.CombinerDataSource.RemoteDebug=all`.

    -   **Development Mode**

        Disables all caches of the theme optimization framework. It is equivalent to setting the `resourceaggregation.development.mode` property to true within the HCL Portal ConfigService resource environment provider.

    -   **Reports**

        Allows you to see further information about the theme optimization framework, which is written to the trace log. There are three types of reports, profiles, modules, and meta-modules. Click the link in each section to turn on the reports, and click again to turn them off.

-   **Client tracing**

    Client tracing enables traces for JavaScript code. The difference between client tracing and enabling tracing with the administration portlet is that the administration portlet enables Java tracing. You can add multiple strings by adding strings with a pipe. When you click add, the trace is persisted immediately. You can choose to enable the trace scope for the current browser or all users on the server. If you set the trace scope to Server, any client who accesses the server will have JavaScript traces on that server only. If you set it to current browser, you can remotely debug a server. You must have uncompressed Java resources enabled.

-   **Advanced Utilities**

    Provide an option to export all titles and descriptions of all known modules in the system to a .CSV file.


-   **[How to Clear the Theme Caches](clear_themes_caches.md)**  
The Theme Optimization Analyzer portlet which is part of the Portal administration gives users the ability to clear theme related caches.
-   **[How to Clear the Theme Caches](clear_themes_caches.md)**  
The Theme Optimization Analyzer portlet which is part of the Portal administration gives users the ability to clear theme related caches.


???+ info "Related information"
    - [Resource Aggregator overview](../../themeopt_reso_agg.md)

