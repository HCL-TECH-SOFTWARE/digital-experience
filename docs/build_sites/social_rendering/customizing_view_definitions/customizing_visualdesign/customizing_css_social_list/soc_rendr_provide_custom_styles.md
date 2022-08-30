# Providing custom styles for social lists

The default CSS styles that are used to define the visual appearance of social lists are defined in the wp\_social\_rendering\_85 theme module. You can define your own styles.

To create your own styles, proceed by the following steps:

1.  Create your own custom theme module.

    For information about how to create a new theme module, see the topic about *Define the module* in the HCL Portal product documentation.

2.  Add an extension point to your theme module that adds CSS styles to the HEAD section of the page.

    As an example, the `wp_social_rendering_85` theme module uses the following extension point:

    ```
    <extension point="com.ibm.portal.resourceaggregator.module" id="social_rendering_head" >
       <module id="wp_social_rendering_85">
          <capability id="social_rendering_85" value="8.5"/>
          <contribution type="head">
             <sub-contribution type="css">
                <uri value="res:{rep=WP GlobalThemeConfig;key=resources.modules.ibm.contextRoot}/modules/sr/v8.5/css/master_sr.css" />
                <uri type="rtl" 
                     value="res:{rep=WP GlobalThemeConfig;key=resources.modules.ibm.contextRoot}/modules/sr/v8.5/css/master_sr_rtl.css"/>
                <uri deviceClass="smartphone" 
                     value="res:{rep=WP GlobalThemeConfig;key=resources.modules.ibm.contextRoot}/modules/sr/v8.5/css/master_sr_mobile.css"/>
                <uri deviceClass="tablet" 
                     value="res:{rep=WP GlobalThemeConfig;key=resources.modules.ibm.contextRoot}/modules/sr/v8.5/css/master_sr_mobile.css"/>
             </sub-contribution>
          </contribution>
       </module>
    </extension>
    ```

    Make sure to leave the `social_rendering` capability ID and the `8.5` capability version number intact as it is, but change the module ID from `wp_social_rendering_85` to a value of your choice.

3.  Make a copy of the theme profile provided with the portal, for example profile\_basic\_content.json. You can use that copied profile on your pages with social lists. If you update the default theme profile provided with the portal, your updates will be overwritten if you install a fix pack or otherwise upgrade your portal.

4.  Add the new module ID from a previous step to your copy of the theme profile.

5.  Copy the default CSS files from the social rendering theme into the new theme module.

    These files are in the following directory: `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)PortalServer\_root/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/modules/sr/v8.5/css`

    The following CSS files are available:

    |CSS file name|Purpose|
    |-------------|-------|
    |sr.css|This file contains the basic social rendering list styles.|
    |sr\_wptheme.css|This file contains all styles that depend on `wptheme` sample CSS classes to detect wide, narrow, and thin columns.|
    |sr\_rtl.css|This file contains the style overrides for bidirectional languages.|
    |sr\_wptheme\_rtl.css|This file contains the style overrides for wide, narrow, and thin column definitions in bidirectional languages.|
    |sr\_mobile.css|This file contains the style overrides and media queries for mobile devices.|

    The following table shows the master CSS files. They import the CSS files that are shown in the previous table.

    |CSS file name|Purpose|
    |-------------|-------|
    |master\_sr.css|This master CSS file links to the basic CSS styles for left-to-right languages.|
    |master\_sr\_rtl.css|This master CSS file links to the basic CSS styles for bidirectional languages.|
    |master\_sr\_mobile.css|This master CSS file links to the CSS styles for mobile devices and left-to-right and bidirectional languages.|
    |master\_sr\_mobile\_rtl.css|This master CSS file links to the CSS styles for mobile devices and bidirectional languages|

6.  Remove `wp_social_rendering_85` from your new theme profile, and add the identifier of your new theme module instead. Repeat this process for all profiles that you are using in your website.

    By default, the `wp_social_rendering_85` module is part of the following theme profiles:

    -   profile\_wab.json
    -   profile\_search\_tag.json
    -   profile\_dojo\_deferred.json
    -   profile\_dojo\_basic\_content.json
    -   profile\_basic\_content.json
    -   profile\_deferred.json
    In the following code section, replace `wp_social_rendering_85` by `your\_theme\_module\_id`:

    ```
    "wp_ic4_wai_resources",
    	"wp_worklight_ext",
    "wp_social_rendering_85",
    "wp_sametime_proxy"    
          ],
    ```

7.  Save your changes.

8.  If you updated your custom theme profile in a separate environment, copy your updated custom profile to the portal.

9.  If you built your own custom theme and you do not use the `wptheme` sample CSS classes, make sure to modify the CSS rules in the CSS files sr\_wptheme.css and sr\_wptheme\_rtl.css accordingly.

10. If you added more CSS files or renamed existing ones, make sure to update the master\_\*.css files, as they import one or more of the other sr\_\*.css files and make them available to the theme module.

11. If you add more master\_\*.css files or change their names, make sure to update the CSS contribution in the plugin.xml file of your theme module.

    See the following sample code snippet:

    ```
    ... 
       <sub-contribution type="css">
          <uri value="res:{rep=WP GlobalThemeConfig;key=resources.modules.ibm.contextRoot}/modules/sr/v8.5/css/master_sr.css" />
          <uri type="rtl" 
               value="res:{rep=WP GlobalThemeConfig;key=resources.modules.ibm.contextRoot}/modules/sr/v8.5/css/master_sr_rtl.css"/>
          <uri deviceClass="smartphone" 
               value="res:{rep=WP GlobalThemeConfig;key=resources.modules.ibm.contextRoot}/modules/sr/v8.5/css/master_sr_mobile.css"/>
          <uri deviceClass="tablet" 
               value="res:{rep=WP GlobalThemeConfig;key=resources.modules.ibm.contextRoot}/modules/sr/v8.5/css/master_sr_mobile.css"/>
          <uri ...additional contributions go here.../>
       </sub-contribution>
    ...
    ```

12. If you use social rendering with your own theme, modify the profiles of your custom theme accordingly.

13. Modify the CSS files that you copied to the new theme module in an earlier step as required. After you modified the CSS files, invalidate browser cache for your updates to take effect. To invalidate your cache, click **Theme Analyzer** \> **Utilities** \> **Control Center** \> **Invalidate Cache**. Auto invalidation recognizes your changes automatically for WebDAV based themes. No further action is required. For more information, see [Utilities](../dev-theme/themeopt_an_util.md#).


After you complete this procedure, you can use your own custom styles for your social lists.


**Related information**  


[Defining theme modules](../dev-theme/themeopt_mod_register.md)

