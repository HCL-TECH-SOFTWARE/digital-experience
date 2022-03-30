# Theme PAA files 

Using the Theme Development tools, you can quickly copy, create, and modify themes. After you modify a theme, you can export that theme as a PAA file so that you can install it on a different server. You can also uninstall theme PAA files that you no longer want to use.

While you develop your Portal site, you can copy the Simple Theme by clicking **Copy** in the Theme Manager. Then, you can modify the theme. When you are ready to deploy the modified theme to a production server, you can export the theme in a PAA file and import the PAA file to the production server. After you import the PAA file, the theme is available for use on the production server.

The exported theme contains only the theme definition and static resources. It does not include the WAR file that is connected to the theme template. Install the connected WAR file before you import the new theme so that the theme works correctly. In this example, the Simple Theme must be installed on the production server at the same context root as the development server before you import the PAA for the modified Simple Theme.

-   **[Exporting theme PAA files ](../dev-theme/themeopt_themedev_export.md)**  
You can export your themes as PAA files so that you can install them on other servers.
-   **[Installing theme PAA files ](../dev-theme/themeopt_themedev_install.md)**  
After you export a theme as a PAA file, you can install it on a different server.
-   **[Uninstalling theme PAA files ](../dev-theme/themeopt_themedev_uninstall.md)**  
You can uninstall theme PAA files that you no longer want to use.

**Parent topic:**[Development and operations overview ](../dev-theme/themeopt_move_devopaspect.md)

