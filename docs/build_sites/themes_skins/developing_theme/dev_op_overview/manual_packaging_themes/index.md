# Manually packaging themes for deployment

You must repackage the static content as a WAR file or as an EAR file containing the WAR file when it is not possible to exchange the static content with the Operations Team as a separate compressed file.

To package and export theme files using the Theme Manager, go to [Theme PAA files](../../../developing_theme/dev_op_overview/theme_paa_files/index.md).

Create a custom theme before starting this process. To create a theme based on the Version 8.5 theme, go to [Create a copy of the theme](../../../customizing_theme/copying_theme/manual_copy_theme/index.md).

You must create and collect the required code artifacts, the scripts to register the theme and skins, and the list of required runtime configuration changes. Create an EAR file that contains one WAR file containing the dynamic content of the theme and one WAR file containing the static content.

-   **Theme is created based on the modularized portal theme.**

    Create a custom version of the dynamic content as a new EAR file and a custom version of the static content by creating a folder in the file store. For more information about copying a theme for customization, see Create a copy of the theme. No further customization was performed so far. Also, an XML Access script is used to register the themes and skins that are part of the EAR file.


If you performed more changes, like deleting files or changing file names, then you need to map the following steps accordingly.

Cache headers are not automatically set for static files served from a war file. External means, such as overwriting headers in the HTTP Server, must be used in this case. When you use this approach, complete the Base Portal Tuning - *Web Server tuning* chapter of the [HCL Digital Experience Performance Tuning Guide](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0074411) for optimal performance.


-   **[Adding static content to your custom theme](themeopt_move_repack_addstatic.md)**  
After you create a theme, you can begin to customize it by adding static content.
-   **[Adapt the scripts that register the custom theme and skins](themeopt_move_repack_script.md)**  
You must adapt the scripts that register the custom theme and skins that were moved from the file store.
-   **[Adapting the list of required runtime configuration changes for your theme](themeopt_move_repack_runtime.md)**  
You must adapt the list of required runtime configuration changes for your theme.
-   **[Test the custom EAR file](themeopt_move_repack_test.md)**  
Test the new custom EAR file on your test server to verify that it deploys successfully.
-   **[Exporting content from the filestore](themeopt_move_expfilestore.md)**  
You must export content from the filestore to create your custom theme. There are different options available to export files from the portal file store.


???+ info "Related information:"
    - [Manually creating a copy of your theme](../../../customizing_theme/copying_theme/manual_copy_theme/index.md)
    - [Development and operations overview](../../dev_op_overview/index.md)

