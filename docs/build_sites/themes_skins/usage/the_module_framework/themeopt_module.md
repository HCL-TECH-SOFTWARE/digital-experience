# The module framework

The module framework allows extensions to contribute to different areas of a page to provide flexibility, enhance the user experience, and maximize performance.

The modularization framework decouples feature enablement from the theme code itself. Themes can be developed more easily with little knowledge about the details of how underlying code for a feature works. Logical points are provided where modules can contribute data into a theme at run time and then optimize those contributions by combining them where possible. Multiple disparate remote sources can be combined into one request for greater performance.

The features of a theme can be enabled and disabled by using a profile to configure them. You can then focus your time on the interface design of the theme without being concerned about the details of getting the features to work correctly within their theme. It is easy to turn off features that are not needed in one environment that might be used in another environment. For example, you can disable editing capabilities in a production portal environment, while they are enabled in a development environment. The same theme code can be used across such environments where the only variable is the module inclusion profile.

You can set dependencies on features in portlets and profiles. The features are automatically loaded onto the page in an aggregated way. Your profile does not need to contain more modules that are required by portlets. Your profile can be focused on theme capabilities. Modules that are only required by portlets can be loaded by the portlets. Portlet dependencies are loaded independently from the profile. If many portlets use the same features across many pages, you can add this feature to the profile for better cache performance. If you created your theme based on HCL Portal version 8.5 before CF03, then you must enable this feature to use it. Themes that are based on HCL Portal version 8.5 created in CF03 or after have this feature enabled by default.

Modules are registered extensions that are then used by a module profile. Each module is enumerated by the modules unique identifiers. A module might require other modules to allow the automatic inclusion of necessary code that is required to make a particular feature work. For example, you can use of the Dojo Toolkit within a module. A module can use the Dojo Toolkit to build custom widgets. To separate the code for the module from the Dojo code, the module requires certain Dojo modules to ensure that the code is loaded in the correct sequence. This separation allows greater serviceability by decoupling the packaging of the code for each module.

-   **[Basic artifacts and their relation](../dev-theme/themeopt_mod_objmodel.md)**  
The theme modularization framework foresees the following major artifacts and relations to one another.
-   **[Contribution types](../dev-theme/themeopt_contrib_types.md)**  
Modules can contribute different types of data to the extension points within the page.
-   **[Deferred and non-deferred modules](../dev-theme/themeopt_module_defer.md)**  
The module framework allows a profile to specify whether to defer a particular module. By default, a module is loaded when the initial page loads, but modules that are specified as deferred modules are loaded after the page loads.
-   **[Resource Aggregator overview](../dev-theme/themeopt_reso_agg.md)**  
When the page renders, the Resource Aggregator processes all of the modules coming from the profile.
-   **[Module dependencies in portlets](../dev-theme/themeopt_mod_capfilters.md)**  
When a portlet requires existing client-side capabilities, such as Dojo, loaded on the page, it can define a set of portlet preferences that declare the capabilities it requires.
-   **[Change the auto-loading of portlet capabilities](../dev-theme/themeopt_chng_auto_load_cap.md)**  
You can determine whether portlets automatically load their dependent capabilities for a theme.
-   **[Response rendering for themes](../dev-theme/themeopt_renderflow.md)**  
To decrease the response time of your portal, a template parser resolves which modules are needed and collects all of the modules that are enabled by the current profile. Parts of the content are parsed and displayed as soon as possible.
-   **[Writing modules](../dev-theme/themeopt_mod_plugin_xml.md)**  
You can define global or theme-specific contributions that contain a theme module, which applies to different scopes through theme profiles. A module defines its contributions by using a plugin.xml or JSON file.
-   **[Theme Optimization Analyzer](../dev-theme/themeopt_an_analyzer.md)**  
Use the Theme Optimization Analyzer to view, but not edit, all parts of the theme optimization framework inside of HCL Digital Experience.
-   **[Troubleshooting modular themes](../dev-theme/themeopt_mod_debug_ovr.md)**  
You can debug your modules to improve performance.
-   **[Specify profiles](../dev-theme/themeopt_define_mod_files.md)**  
You can specify the profiles that you want to use two different ways depending on whether you are an administrator or a user. Profiles help define which modules are used to render a page.
-   **[Modules that are provided with the modularized theme](../dev-theme/themeopt_oob.md)**  
HCL Digital Experience provides a set of ready-to-use modules.
-   **[Modules that add features to a theme](../dev-theme/theme_modules_features.md)**  
Theme modules contribute resources, such as JavaScript, CSS and HTML, to a theme or page. The following modules come with the modularized theme and specifically contribute a feature rather than working in the background. The modules can be added to a theme by listing them in the theme's default profile, or to a single page or set of pages.
-   **[Adding or removing a module from a profile](../dev-theme/themeopt_add_oobmod.md)**  
To add or remove a module, update the profile that is used to render a page for the theme.
-   **[ConfigEngine tasks for creating a new profile based on a template and an existing profile in the system](../dev-theme/themeopt_configengine_profile.md)**  
You can extend the theme module framework with a new ConfigEngine task.

**Parent topic:**[Developing themes and skins](../dev-theme/themeopt_themes.md)

**Related information**  


[Module framework for IBM MobileFirst](../integrate/wl_module_fw.md)

[Creating a federated documents selection rule](../wcm/wcm_dev_feddocs_createrule.md)

[Creating content with the Articles template page](../wcm/wcm_delivery_ctsamples_article.md)

[OpenAjax security and remote web content rendering with WSRP and the Web Content Viewer](../wcm/wcm_config_wcmviewer_wsrp_open_ajax.md)

[Using the business card](../social/soc_rendr_use_biz_card.md)

[Understanding the Portal 8.5 modularized theme](../dev-theme/themeopt_defaultparts.md)

