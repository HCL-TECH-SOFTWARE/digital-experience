# Change the auto-loading of portlet capabilities 

You can determine whether portlets automatically load their dependent capabilities for a theme.

In Combined Cumulative Fix 03 and later, auto-loading is turned on by default in the Portal 8.5 theme. If you create your custom theme from the Portal 8.5 theme using Combined Cumulative Fix 03 or later, you do not need to manually enable this feature. If your custom theme was created from the Portal 8.5 theme before Combined Cumulative Fix 03, you need to manually enable this feature if you want to use it.

Enabling auto-loading makes the system simpler and easier to use. Users can add any portlet to the page without having to think about the theme and which profile is assigned to the page. Fewer profiles are needed, and the size of each profile can be smaller.

When auto-loading is turned on for a theme, it is not common to turn it off later. If you do, many pages can report missing capability error messages until appropriate profiles are assigned to the pages.

-   **[Changing the auto-loading of portlet capabilities with WebDAV](../dev-theme/themeopt_chng_auto_load_cap_webdav.md)**  
You can change the auto-loading of portlet capabilities with WebDAV.
-   **[Changing the auto-loading of portlet capabilities with XMLAccess](../dev-theme/themeopt_chng_auto_load_cap_xmlaccess.md)**  
You can change the auto-loading of portlet capabilities with XMLAccess.

**Parent topic:**[The module framework ](../dev-theme/themeopt_module.md)

**Related information**  


[Resource Aggregator overview ](../dev-theme/themeopt_reso_agg.md)

[Module dependencies in portlets ](../dev-theme/themeopt_mod_capfilters.md)

[Configuration settings for capability filters ](../dev-theme/themeopt_mod_capfilter_settings.md)

