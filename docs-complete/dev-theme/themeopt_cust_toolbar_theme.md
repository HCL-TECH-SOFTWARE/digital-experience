# Add the HCL Portal 8.5 site toolbar to a Portal 8.0 theme 

You can easily add the modularized site toolbar of HCL Digital Experience 8.5 to a HCL Portal 8.0 theme. Or, you can add a toolbar to a custom theme that is derived from the HCL Portal 8.0 theme. The theme must be a modularized theme, which supports theme profiles and theme modules.

You can add the site toolbar of HCL Portal Version 8.5 to an existing modularized theme. You can also remove the Portal 8.0 site toolbar from it. In the HCL Portal 8.5 theme, the HCL Digital Experience 8.5 site toolbar is available by default. If you migrate your system to HCL Digital Experience 8.5, you need to install the site toolbar first by running a configuration task. For more information, *Enabling the 8.5 site toolbar*.

**Note:** You must add the Portal 8.5 toolbar to a migrated custom theme that you use. Adding the toolbar enables your content creators to take advantage of updates to the Site Manager and other updates in the maintenance of your portal including creating, reusing, deleting, copying, and moving pages and content items.

There are two ways to embed a HCL Portal 8.5 toolbar into your Portal 8.0 theme.

1.  You can embed the site toolbar by adding dynamic content spot to your theme HTML template. You must be familiar with theme templates and dynamic content spots to use this option. For more information, see *Dynamic content spots*.
2.  You can embed the site toolbar dynamically without adding dynamic contents spots to your theme HTML. You must be familiar with theme modules and theme profiles to use this option. For more information, see *The module framework*.

Both options are valid. The dynamic content spots option provides a more customizable user experience. There are no flickering effects because of the dynamic content spot. However, the dynamic option offers integration without editing the theme HTML template. It is easier to implement. Both options require that you add a certain theme module to the theme profiles of your theme.

-   **[Embedding a toolbar into a theme by adding a dynamic content spot to an HTML template ](../dev-theme/themeopt_cust_toolbar_dyn_spot_template.md)**  
Embedding a toolbar into a theme with a dynamic content spot provides an optimized user experience when compared to embedding it dynamically.
-   **[Embedding the HCL Portal 8.5 site toolbar dynamically without a dynamic content spot ](../dev-theme/themeopt_cust_toolbar_dynamic_embedding.md)**  
Embedding a toolbar into a theme dynamically integrates the toolbar without editing the theme HTML template.

**Parent topic:**[Enable new functions in migrated themes ](../dev-theme/themeopt_migrate_deploy80.md)

