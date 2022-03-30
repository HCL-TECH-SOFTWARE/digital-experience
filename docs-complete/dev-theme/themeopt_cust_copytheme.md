# Manually creating a copy of your theme 

You need to create your own custom theme by copying the Portal Version 8.5 theme before you start customization. You should create a copy of both the static and dynamic content even if you plan to modify files from only one. When you create copies of both your static and dynamic theme content, you ensure that your theme has all of the required elements that it needs to function. You also ensure that changes to any of the theme files in future Combined Cumulative Fixes do not affect your theme.

To create a copy of your theme by using the Theme Manager, see [Copy Theme](themeopt_themedev_copy.md#).

**Note:** Do not modify the Portal Version 8.5 theme directly, because this theme can be updated by service fix packs and override your changes.

-   **[Creating a WebDAV-based theme copy ](../dev-theme/themeopt_themedev_manual_webdav.md)**  
With a WebDAV-based theme, static theme content is deployed through WebDAV. Use this option if your theme developers update static theme content by using WebDAV.
-   **[Creating a WAR-based theme copy ](../dev-theme/themeopt_themedev_manual_warbased.md)**  
With a WAR-based theme, you deploy both static and dynamic content as an EAR file. You can easily deploy your theme to your Portal server when your static and dynamic contents are contained in a single EAR file. Use this option when your theme is ready for production.

**Parent topic:**[Copying your theme ](../dev-theme/themeopt_copy.md)

**Related information**  


[Manually packaging themes for deployment ](../dev-theme/themeopt_move_repackstatic.md)

