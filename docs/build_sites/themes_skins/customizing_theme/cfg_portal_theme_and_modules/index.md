# Configuring the portal theme and modules

Themes and modules are configured through theme metadata properties and resource environment provider custom properties.

-   **[Changing theme metadata](../dev-theme/themeopt_cust_config_metadata.md)**  
The first step of theme configuration is through theme metadata properties. Changes to the metadata are specific to a single theme, and the entries and values, therefore, can vary from theme to theme.
-   **[Changing resource environment provider custom properties](../dev-theme/themeopt_cust_config_rep.md)**  
The second order of theme configuration is through resource environment provider \(REP\) custom properties in the WP GlobalThemeConfig REP. Changes to the REP custom properties apply across all themes, and the values, therefore, cannot vary from theme to theme.
-   **[Adding resource environment provider properties](../dev-theme/themeopt_cust_config_repcust.md)**  
Resource environment provider \(REP\) custom properties are global in scope, but you can use a consistent naming convention for a theme or module that applies across multiple themes.
-   **[Configuration for resource aggregation](../dev-theme/config_res_agg.md)**  
Set the following properties in the WP ConfigService Resource Environment Provider to configure the resource aggregator.
-   **[Using your configuration properties](../dev-theme/themeopt_cust_config_useprops.md)**  
Create a JavaScript object for your theme on the client side. Theme metadata properties must be loaded dynamically. If you must load a property statically, use a resource environment provider custom property instead.
-   **[Configuration settings for capability filters](../dev-theme/themeopt_mod_capfilter_settings.md)**  
Set the following properties in the Wp ConfigService Resource Environment Provider to enable or disable the various capability filters.


