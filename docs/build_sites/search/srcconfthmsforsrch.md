# Configuring your custom portal themes to include the search box

Enable your portal users to use the Portal Search box and Search portlet in your own custom theme.

The Portal Search box is included as part of the themes of a portal installation. If you use your own custom themes with your portal and want your users to be able to use the Portal Search box and Search portlet, make sure that your custom themes include the Portal Search box.

The code for including the search box in a theme is located in the file [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/theme/wp.theme.modules/webapp/installedApps/ThemeModules.ear/ThemeModules.war/modules/search/jsp/search.jsp . To make the search box available for users in your custom theme, do either of the following:

-   Copy the contents of the file into your custom theme files.
-   Copy the file into your theme and include it directly.


**Previous topic:**[Enabling anonymous users to search public pages of your portal](../admin-system/srtusgsrchbrwanonpgs.md)

**Next topic:**[Redirecting search requests from a custom search form to the Search Center](../admin-system/redirect_search_custom_form.md)

