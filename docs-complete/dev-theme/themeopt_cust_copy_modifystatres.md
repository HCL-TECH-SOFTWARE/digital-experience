# Modify the dynamic resource references for your theme 

You must modify the dynamic resource references to link to the static resources for your theme.

Dynamic content spots are defined through a module called `wp_dynamicContentSpots_85`. The module is defined in the plugin.xml file, which was copied when you copied your theme.

1.  Open the plugin.xml from the CustomTheme project that you created when you completed the steps in [Copying the dynamic resources for your theme](themeopt_cust_copy_dyntheme.md#).

2.  Edit the IDs and names to have a unique custom name. Use custom plug-in IDs with the prefix of your company name to ensure that your .WAR files are invalidated. See *Configuration for resource aggregation* for more information about creating custom plug-in IDs.

    For example,

    ```
    <?xml version="1.0" encoding="UTF-8"?>
    <plugin id="com.yourcompany.customtheme" name="Custom Theme Modules" provider-name="Your Company" version="1.0.0">
    
    <extension id="wp_dynamicContentSpots_custom" point="com.ibm.portal.resourceaggregator.module">
            <module id="wp_dynamicContentSpots_custom">
                <contribution type="dyn-cs">
                    <sub-contribution type="markup" ref-id="customtheme_footer">
                        <uri value="res:{war:context-root}/themes/html/dynamicSpots/footer.jsp"/>
                    </sub-contribution>
                    <sub-contribution type="markup" ref-id="customtheme_crumbTrail">
                        <uri value="mvc:res:{war:context-root}/themes/html/dynamicSpots/crumbTrail.jsp,smartphone@"/>
                    </sub-contribution>
                    <sub-contribution type="markup" ref-id="customtheme_topNav">
                        <uri value="mvc:smartphone/tablet@res:{war:context-root}/themes/html/dynamicSpots/navigation.jsp?type=top"/>"
                    </sub-contribution>
                    <sub-contribution type="markup" ref-id="customtheme_primaryNav">
                        <uri value="mvc:res:{war:context-root}/themes/html/dynamicSpots/navigation.jsp?type=primary,smartphone@,tablet@"/>
                    </sub-contribution>
                    <sub-contribution type="markup" ref-id="customtheme_secondaryNav">
                        <uri value="mvc:res:{war:context-root}/themes/html/dynamicSpots/navigation.jsp?type=secondary,smartphone@,tablet@"/>
                    </sub-contribution>
                    <sub-contribution type="markup" ref-id="customtheme_sideNav">
                        <uri value="mvc:res:{war:context-root}/themes/html/dynamicSpots/sideNavigation.jsp?startLevel=2,smartphone@,tablet@"/>
                    </sub-contribution>
                    <sub-contribution type="markup" ref-id="customtheme_mobileNav">
                        <uri value="mvc:smartphone/tablet@res:{war:context-root}/themes/html/dynamicSpots/mobileNavigation.jsp"/>
                    </sub-contribution>
                    <sub-contribution type="markup" ref-id="customtheme_commonActions">
                        <uri value="res:{war:context-root}/themes/html/dynamicSpots/commonActions.jsp"/>
                    </sub-contribution>
                    <sub-contribution type="markup" ref-id="customtheme_layout">
                        <uri value="lm:template"/>
                    </sub-contribution>
                    <sub-contribution type="markup" ref-id="85theme_toolbar">
                        <uri value="mc:wp_toolbar85@mvc:dyn-cs%3Aid%3A85toolbar%2Csmartphone%40%2Ctablet%40"/>
                    </sub-contribution>
                    <sub-contribution type="markup" ref-id="customtheme_head">
                        <uri value="res:{war:context-root}/themes/html/dynamicSpots/head.jsp"/>
                    </sub-contribution>
                    <sub-contribution type="markup" ref-id="customtheme_status">
                        <uri value="mc:wp_status_bar@res:{war:context-root}/themes/html/dynamicSpots/status.jsp"/>
                    </sub-contribution>
                </contribution>
            </module>
        </extension>
    ```

3.  On your local disk, access the customTheme directory that you created when you completed the steps in [Copy the static resources for your theme](themeopt_cust_copy_statictheme.md#).

4.  Modify the profiles for your custom theme to include the module in your plugin.xml.

    1.  From the customTheme/profiles folder, edit each profile file.

    2.  Replace the `wp_dynamicContentSpots_85` module with the `wp_dynamicContentSpots_custom` module that you created when you modified the plugin.xml.

    3.  Save your changes.

5.  From thecustomTheme/nls folder, edit the theme\_en.html file \(or whichever file is your default locale\) on your local drive. Repeat for any of the other locale files for languages that you support.

6.  In the theme\_lang.html files, find and replace all occurrences of 85theme with customtheme.

    For example, `dyn-cs:id:85theme_head` becomes `dyn-cs:id:customtheme_head`.

7.  Save your files.


**Note:** You do not need to modify the theme.html file in the customTheme folder. That file is not used other than to redirect to the appropriate locale file in the nls folder. You need to modify it only if you add or remove locales.

**Parent topic:**[Creating a WebDAV-based theme copy ](../dev-theme/themeopt_themedev_manual_webdav.md)

**Related information**  


[Copying the dynamic resources for your theme ](../dev-theme/themeopt_cust_copy_dyntheme.md)

[Configuration for resource aggregation ](../dev-theme/config_res_agg.md)

[Adapting the list of required runtime configuration changes for your theme ](../dev-theme/themeopt_move_repack_runtime.md)

