# Customizing the home page login URL with the Page Builder theme 

In the Page Builder theme the login link points to a protected URL to the home page of the default portal installation. If you remove this page, or if you want your users to be directed to a different page after login, modify the theme by the following procedure.

1.  Open the file [PortalServer\_root](../reference/wpsdirstr.md#wp_root)/theme/wp.mashup.cc.theme/installedApps/wp.mashup.cc.theme.ear/PageBuilder2.war/themes/html/PageBuilder2/bannerCommonActions.jsp/theme/wp.theme.themes/default80/installedApps/DefaultTheme80.ear/DefaultTheme80.war/themes/html/dynamicSpots/commonActions.jsp .

2.  Locate the line: `<portal-navigation:urlGeneration allowRelativeURL="true"keepNavigationalState="false" contentNode="wps.content.root" home="protected" >`

3.  Change `ibm.portal.Home``wps.content.root` to the unique name of the page to which you want your users to be directed after logging in.


**Parent topic:**[Configuring portal behavior ](../admin-system/adptlcfg.md)

