# Troubleshooting modular themes

You can debug your modules to improve performance.

A modular theme is a HCL Digital Experience theme that uses the Resource Aggregator theme optimization framework to allow the encapsulation of function into units that are called modules. You can combine those modules by defining theme profiles, and assign profiles to pages so that only the minimum necessary download data is done for a page. The download of the set of modules for any page is combined to be as efficient as possible.

## Theme Optimization Analyzer Portlet

This portlet visualizes all parts of the theme optimization framework. With this portlet, you can see how the profiles are applied to specific themes or pages and see the defined resources for modules. This portlet features a validation report and the ability to export and import profiles to replicate another environment.

The portlet is included with the current version of HCL Portal. Click the **Administration menu** icon. Then, click **Portal Analysis** \> **Theme Analyzer**.

## Client console and debugging tools

For debugging errors in the client-side execution of JavaScript™ or the client-side application of cascading style sheets, use a client-side console and debugging tool. Most browsers have their own development tools that are built in, or available as an add-on. For example, the Firebug add-on can be downloaded and installed into Mozilla Firefox. If there are client-side errors in the JavaScript, they are displayed in the console of these tools. By default, the resources are still being compressed and aggregated so it can be difficult to identify the exact resource that causes the error.

-   **[Turning off aggregation and compression in client-side debug mode](themeopt_mod_debug.md)**  
Turning on debug mode disables compression and makes modules easier to debug.
-   **[Reloading the profile and module in development mode without caching](themeopt_mod_reloading.md)**  
When you are debugging an issue, sometimes you must actively update the profile or module definitions.
-   **[Debugging your module systematically](themeopt_mod_debug_pattern.md)**  
Use a pattern to determine an issue within your custom modules. This pattern minimizes the time that is required to investigate and debug.
-   **[Verifying JSON file Syntax](themeopt_json_syntax.md)**  
If a JSON file is not formatted correctly it cannot be processed by the server, and is not loaded into your theme.
-   **[Syntax in modules and profile definitions](themeopt_json_syntax_profiles.md)**  
If your theme is not behaving as it should, it could be because there are syntax problems within the module or profile files.


???+ info "Related information"
    - [Theme Optimization Analyzer](../themeopt_analyzer/index.md)
    - [Themes](../../../../deployment/manage/migrate/planning_migration/mig_plan_expectations/mig_plan_expect_themes.md)

