# Customizing the CSS styles of social lists

The lists of social objects rely on the availability of several CSS class definitions in the wp\_social\_rendering\_85 theme module.

Pages that render the sample items must use a theme profile that includes the `wp_social_rendering_85` theme module or another module that contains the same CSS class definitions. An example of such a theme profile is the Basic Content theme profile that is installed by default.

The `wp_social_rendering_85` theme module includes a single CSS file that is named sr.css. This style sheet is loaded from the following directory location: `[PortalServer\_root](../reference/wpsdirstr.md#wp_root)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/modules/sr/v8.5/css/sr.css`.

The `wp_social_rendering_85` theme module defines the capability with the name `social_rendering_85` and the version `8.5`. No prerequisites are required to use this theme module.

**Style sheet note:** The lists of social objects use CSS styles that render differently, depending on the layout container that contains the social list web content viewer. Different classification CSS classes are assigned to these layout containers. As a result, the styles change when a social list web content viewer is moved from the center column into a narrower side column or vice versa. Furthermore, the styles are responsive to screen width and screen orientation. This responsiveness is achieved by using HTML5 and CSS3 media queries.

<!--
-   **[Providing custom styles for social lists](../social/soc_rendr_provide_custom_styles.md)**  
The default CSS styles that are used to define the visual appearance of social lists are defined in the wp\_social\_rendering\_85 theme module. You can define your own styles.
-   **[CSS class hierarchy for social lists](../social/soc_rendr_css_class_hierarchy.md)**  
To define its visual appearance, the default markup for social lists uses several CSS classes. They are defined in the wp\_social\_rendering\_85 theme module. Learn about the purpose of the most important CSS classes.
-   **[Using media queries to target mobile devices](../social/soc_rendr_media_qs_4_mobile.md)**  
The default social list CSS styles use CSS3 media queries to target specific mobile devices and implement responsive web design. Learn more about media queries.
--->

???+ info "Related information:"
    - [Using social lists with your own custom theme](../../../working_with_social_objects/soc_rendr_use_oob_socl_list_wcusthm.md)
    - [Modules that are provided with the modularized theme](../../../../themes_skins/the_module_framework/oob_modules/index.md)
    - [Module capabilities](../../../../themes_skins/the_module_framework/oob_modules/themeopt_oob_capability.md)

