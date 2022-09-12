# Mobile navigation

The HCL Digital Experience 8.5 ready-to-use theme provides two new responsive page navigation designs for mobile devices. One is aimed at smartphones, while the other is designed for tablets. The user agent for a device is parsed to determine which navigation to render on the portal page.

## Smartphone navigation design

1.  Scroll up to display the navigation toggle: When the portal loads, this level of navigation is hidden to maximize the limited real estate on a smartphone.
2.  Tap the navigation button to show the navigation for your portal.
3.  Tap this link to return to the portal home page.
4.  Tap the name of the page to load a specific page.
5.  Tap the arrow near the page name to display the child pages for that page.

## Tablet navigation design

![Welcome page displayed on a tablet.](../../../images/rwd_tablet_welcome.jpg)

1.  Tap the navigation button to show the navigation for your portal.
2.  Tap this link to return to your portal home page.
3.  Tap the arrow button to show the navigation.
4.  Tap the name of the page to open a specific page.
5.  Tap the arrow near the page name to display the child pages for that page.

You can have the navigation and portal navigation open individually or at the same time without affecting the functionality of the portal.

## Mobile navigation markup

The mobile navigation markup for both smartphone and tablet is created by the mobileNavigation.jsp file of the theme, found at [PortalServer\_root](../../../guide_me/wpsdirstr.md)/theme/wp.theme.themes/default85/installedApps/DefaultTheme85.ear/DefaultTheme85.war/themes/html/dynamicSpots. The mobileNavigation.jsp file is controlled by the mobile navigation dynamic spot in theme.html: dyn-cs:id:85theme\_mobileNavigation

The navigation on mobile devices is rendered by the mobileNavigation.jsp file. Therefore, the primary, secondary, breadcrumb, and side navigation that is used on the desktop do not produce any output for a mobile device. The navigation is rendered for mobile, but is hidden when the page loads. On a tablet, the arrow button in the banner can be tapped to reveal the navigation. On a smartphone, the user can scroll up to see the first-level navigation pages. Since smartphones have little real estate, site designers might want to hide certain first-level pages, such as Administration, for these devices. Add the `com.ibm.portal.mobile.Hidden` metadata to the page to hide certain first-level pages. By default, the Administration, Application, and Tag Center pages are hidden.

!!! note
   If the expanded navigation for your Portal site ends up being long on a smartphone, it is possible part of the navigation can get cut off. This cut off happens because a maximum height is required to be set on the navigation in order for the CSS3 animations to work correctly. If your navigation does not fit into this maximum height, it can be adjusted by editing the mobilenav.css file of your custom theme in WebDAV at dav:fs-type1/themes/myCustomTheme/css/. Look for the following style declaration, increase the max-height, and save.

```
.wpthemeMobileNav ul.wpthemeExpandNav {
   /* navigation lists */
   max-height: 100em;
}
```


???+ info "Related information:"
   - [Working with dynamic content spots](../customizing_theme/dynamic_content_spots/working_with_dcs/index.md)
   - [Customizing navigation](../customizing_theme/cust_nav/)

