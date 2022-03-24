# Removing the Portal 8.0 site toolbar from a Portal 8.0 theme 

To use the new site toolbar of HCL Digital Experience 8.5 within a Portal 8.0 theme, you must first remove the existing toolbar that comes with your Portal 8.0 theme.

All of the theme modules providing functions for editing and managing the site, which are also available in the new site toolbar, can be removed when you remove the toolbar. You cannot add the Portal 8.5 site toolbar to a Portal 8.0 theme while keeping the version 8.0 toolbar.

1.  Remove the theme modules from the HCL Portal 8.0 site toolbar from the theme profiles. Go through the theme profiles of your Portal 8.0 theme and remove the theme modules that are listed.

    -   `wp_theme_edit`
    -   `wp_project_menu`
    -   `wp_preview`
    -   `wp_toolbar`
    -   `wp_project_menu_edit`
    -   `wp_preview_menu`
    -   `wp_pagebuilder_controls`
    -   `wp_pagebuilder_dnd`
    -   `mm_new_page_dialog`
    -   `mm_builder_wiring`
    -   `mm_move_page`
    -   `mm_delete_page`
    -   `mm_delete_control`
    -   `mm_page_sharing_permission`
2.  Remove the dynamic content spots of the Portal 8.0 site toolbar from the theme templates. Edit the theme HTML templates of your Portal 8.0 theme and remove the dynamic content spots with the following IDs.

    -   `80theme_preview`
    -   `80theme_projectMenu`
    -   `80theme_toolbar`
    -   `80theme_pageModeToggle`
3.  For each of the dynamic content spots, look for HTML anchor elements that reference the spots with its ID in your templates.

    ```
    <a rel="dynamic-content" href="dyn-cs:id:spot-id"></a>
    ```

4.  Remove the HTML anchor element from the template and save the template file. Depending on your theme, check if there is other decorating HTML markup which can be removed in addition to the anchor elements referencing the dynamic content spots. Verify that the changes are applied to the theme template of each locale.

5.  In the default version 8.0 theme, the names of the theme template files are theme.html and theme\_sidenav.html. The localized versions of theme.html can be found in the locale subfolder, nls.

    For example theme\_en.html. The theme template Plain.html does not need to be edited.

6.  In the menuDefinitions directory, remove shelfActions.json and moreActions.json.

7.  In the menuDefinitions directory, you can optimize the menu definition skinActions.json by removing the menu contributions in `mm_builder_wiring`, `wp_pagebuilder_controls`, and `mm_delete_control`.

8.  In the system directory, keep layouts.json and styles.json. Remove all other files.


**Parent topic:**[Enable new functions in migrated themes ](../dev-theme/themeopt_migrate_deploy80.md)

**Related information**  


[Supported toolbar customization ](../migrate/mig_plan_toolbar_customize.md)

