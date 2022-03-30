# Add the HCL DX Portal Version 8.5 site toolbar to a HCL DX Portal 8.0 theme

You can easily add the modularized site toolbar of HCL DX Portal Version 8.5 to a HCL DX Portal 8.0 theme. Or, you can add a toolbar to a custom theme that is derived from the HCL DX Portal 8.0 theme. The theme must be a modularized theme, which supports theme profiles and theme modules.

You can add the site toolbar of HCL DX Portal Version 8.5 to an existing modularized theme. You can also remove the HCL DX Portal 8.0 site toolbar from it. In the HCL DX Portal Version 8.5 theme, the HCL DX Portal Version 8.5 site toolbar is available by default. If you migrate your system to HCL DX Portal Version 8.5, you need to install the site toolbar first by running a configuration task. For more information, *Enabling the 8.5 site toolbar*.

**Note:** You must add the Portal 8.5 toolbar to a migrated custom theme that you use. Adding the toolbar enables your content creators to take advantage of updates to the site manager and other updates in the maintenance of your portal including creating, reusing, deleting, copying, and moving pages and content items.

There are two ways to embed a HCL DX Portal Version 8.5 toolbar into your HCL DX Portal 8.0 theme.

1.  You can embed the site toolbar by adding dynamic content spot to your theme HTML template. You must be familiar with theme templates and dynamic content spots to use this option. For more information, see *Dynamic content spots*.
2.  You can embed the site toolbar dynamically without adding dynamic contents spots to your theme HTML. You must be familiar with theme modules and theme profiles to use this option. For more information, see *The module framework*.

Both options are valid. The dynamic content spots option provides a more customizable user experience. There are no flickering effects because of the dynamic content spot. However, the dynamic option offers integration without editing the theme HTML template. It is easier to implement. Both options require that you add a certain theme module to the theme profiles of your theme.

-   **[Embedding a toolbar into a theme by adding a dynamic content spot to an HTML template](themeopt_cust_toolbar_dyn_spot_template_mig.md)**  
Embedding a toolbar into a theme with a dynamic content spot provides an optimized user experience when compared to embedding it dynamically.
-   **[Embedding the Version 8.5 site toolbar dynamically without a dynamic content spot](themeopt_cust_toolbar_dynamic_embedding_mig.md)**  
Embedding a toolbar into a theme dynamically integrates the toolbar without editing the theme HTML template.

**Parent topic:**[Enable new functions in migrated themes](themeopt_migrate_deploy80.md)

**Related information**  


[Supported toolbar customization ](../migrate/mig_plan_toolbar_customize.md)

[Dynamic content spots](themeopt_cust_jsp.md)

[The module framework](themeopt_module.md)

[Understanding the Portal Version 8.5 modularized theme](themeopt_defaultparts.md)

[Customizing the theme](themeopt_cust.md)

