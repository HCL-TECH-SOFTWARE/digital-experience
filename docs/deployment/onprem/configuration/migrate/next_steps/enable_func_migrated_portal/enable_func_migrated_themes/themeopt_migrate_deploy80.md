# Enable new functions in migrated themes

When you migrate your themes, migration moves your existing themes to the new server. Migration does not upgrade themes from an earlier version to use new functions that are introduced in more recent versions of the product.

When migrating modular themes, the modular theme architecture makes it easy to enable new functions in your themes by turning on and off the modules or versions of the modules. For example, if you want to update your theme to use the current version of Dojo, replace the dojoxx.json file in the capabilities folder, where xx is the version number. Your Dojo meta-modules load the newer version of Dojo as specified in the dojoxx.json file.

HCL Digital Experience provides an optimized, modular theme architecture from Version 7.0.0.2 onward. Non-modular Version 6.1, such as Portal, PortalWeb2, and Tab Menu - Page Builder themes were deprecated in Version 8.0 and are no longer supported in Version 8.5.

Non-modular version 7.0 \(Page Builder\) themes are still supported on version 8.5 but are also deprecated and will be unsupported in the next version of HCL Digital Experience. It is either required \(6.1 themes\) or recommended \(7.0 themes\) that you upgrade to a modular theme. If you are starting a new project, you must start with a copy of the 8.5 theme. If you must migrate a previous project, the older non-modular themes can physically be migrated. But, you must then manually update your themes to the modular architecture, which allows you to enable any new features.

-   **[Migrating themes](../migrate/mig_theme.md)**  
When migrating themes that were developed in an earlier version, you must be aware of general guidelines, differences, and known issues.
-   **[Device class support in a migrated theme](../dev-theme/themeopt_dev_class_migr_theme.md)**  
You can use the new device classes and equation support to modify your themes from previous versions so they are more efficient.
-   **[Removing the Portal 8.0 site toolbar from a Portal 8.0 theme](../dev-theme/themeopt_cust_toolbar_remove.md)**  
To use the new site toolbar of HCL Digital Experience 8.5 within a Portal 8.0 theme, you must first remove the existing toolbar that comes with your Portal 8.0 theme.
-   **[Add the HCL Portal 8.5 site toolbar to a Portal 8.0 theme](../dev-theme/themeopt_cust_toolbar_theme.md)**  
You can easily add the modularized site toolbar of HCL Digital Experience 8.5 to a HCL Portal 8.0 theme. Or, you can add a toolbar to a custom theme that is derived from the HCL Portal 8.0 theme. The theme must be a modularized theme, which supports theme profiles and theme modules.
-   **[Updating your theme to use simple context menus](../migrate/mig_t_enable_simplemenus.md)**  
The theme context menu framework that is provided with the module wp\_theme\_menus in Portal 8.0 and earlier versions is relabeled and improved in HCL Digital Experience 8.5. The new Simple Menu Framework is compatible with all previous versions of the wp\_theme\_menus.

**Parent topic:**[Enabling new functionality in a migrated portal](../migrate/mig_t_enable_new.md)

