# Adding the social rendering theme module to a theme profile

For the social lists provided by social rendering to work, the theme that renders these lists needs to load CSS and JavaScript files. To include the CSS and JavaScript files in your theme, you need to add the wp\_social\_lists\_v1\_1 theme module to your theme.

The presentation components that the social rendering feature provides and that the social lists use rely on specific CSS styles and JavaScript files that the theme needs to load. To load those styles, you need to make sure that the `wp_social_lists_v1_1` theme module is available in the theme profile that is active on the page that renders the social list. If the `wp_social_lists_v1_1` theme module is not loaded for a page, the social list does not look as expected, and users cannot interact with the social lists on that page.

Until HCL Portal CF05, the theme module was `wp_social_rendering_85`. If you have portal with CF05 or earlier, use `wp_social_rendering_85` for the theme module instead of `wp_social_lists_v1_1`. This applies to the configuration task examples listed in the following.

To determine which HCL Portal theme profiles already specify the `wp_social_lists_v1_1` theme module, review the theme profiles that come with the portal installation.

To add the theme module to your theme, you register the theme module by using the `add-theme-modules` portal configuration task. For more information, see the following examples.

-   To add the social rendering theme module to a custom profile of a custom theme, run the task as follows:
    -   For AIX® HP-UX Linux™ Solaris z/OS®:

        ```
        ./ConfigEngine.sh add-theme-modules 
             -DThemeUniqueName=my.custom.theme
             -DThemeProfileFileName=profile_my_custom_profile.json 
             -DModuleIDs=wp_social_lists_v1_1
        
        ```

    -   For IBM® i:

        ```
        ConfigEngine.sh add-theme-modules 
             -DThemeUniqueName=my.custom.theme
             -DThemeProfileFileName=profile_my_custom_profile.json 
             -DModuleIDs=wp_social_lists_v1_1
        
        ```

    -   For Windows™:

        ```
        ConfigEngine.bat add-theme-modules 
             -DThemeUniqueName=my.custom.theme
             -DThemeProfileFileName=profile_my_custom_profile.json 
             -DModuleIDs=wp_social_lists_v1_1
        
        ```

-   To remove the social rendering theme module from the lightweight profile of the Portal 8.5 theme, run the remove task as follows:
    -   For AIX HP-UX Linux Solaris z/OS:

        ```
        ./ConfigEngine.sh remove-theme-modules 
             -DThemeUniqueName=my.custom.theme 
             -DThemeProfileFileName=profile_my_custom_profile.json 
             -DModuleIDs=wp_social_lists_v1_1
        
        ```

    -   For IBM i:

        ```
        ConfigEngine.sh remove-theme-modules 
             -DThemeUniqueName=my.custom.theme 
             -DThemeProfileFileName=profile_my_custom_profile.json 
             -DModuleIDs=wp_social_lists_v1_1
        
        ```

    -   For Windows:

        ```
        ConfigEngine.bat remove-theme-modules 
             -DThemeUniqueName=my.custom.theme 
             -DThemeProfileFileName=profile_my_custom_profile.json 
             -DModuleIDs=wp_social_lists_v1_1
        
        ```



**Related information**  


[Using social lists with your own custom theme](../social/soc_rendr_use_oob_socl_list_wcusthm.md)

