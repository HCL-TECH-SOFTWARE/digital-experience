# Using social lists with your own custom theme

The social lists that social rendering provides work with portal pages that have the Portal 8.5 theme with a Basic Content theme profile. To use them with your own custom theme, you add the wp\_social\_rendering\_85 theme module to your theme.

The predefined social lists require that the social rendering CSS styles are loaded by the theme that is associated to the page with the social list. The theme loads these styles if the theme profile assigned to the current theme incorporates the `wp_social_rendering_85` theme module. The Portal 8.5 theme with either full or deferred profiles fulfills this requirement.

If you want to use social rendering with your own custom theme or a custom theme profile, add the `wp_social_rendering_85` theme module to that theme profile. For example, you can do so by using the `add-theme-modules` configuration task. If the theme profile that is active on the current page does not contain the social rendering theme module, the social rendering CSS classes are missing. In this case, the markup does not look as expected.

**Parent topic:**[Working with lists of social objects](../social/soc_rendr_tsk_socl_list.md)

**Related information**  


[Customizing the CSS styles of social lists](../social/soc_rendr_custom_css_styles.md)

[Adding the social rendering theme module to a theme profile](../social/soc_rendr_adm_add_sr_thm_2prof.md)

