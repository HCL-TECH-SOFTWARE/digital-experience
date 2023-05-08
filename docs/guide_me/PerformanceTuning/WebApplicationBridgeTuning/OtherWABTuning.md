# Other WAB Tuning

## Selecting users to access the WAB page

Part of setting up a page with the WAB portlet on it involves granting authorization to the portlet. In
WebSphere Portal v8001, the option to select ‘all authenticated users’ was added. If applicable, this option
should be selected.

## profile_wab Theme Profile
The WAB setup documentation discusses using profile_wab on pages that include the WAB dock portlet.
profile_wab contains one theme-profile module that supports WAB: wp_webdock. An alternative to
specifying profile_wab on a page that has the Web Dock Portlet, is to add wp_webdock to the theme profile
that is used on other pages. This will avoid having to download ra:collection URLs when accessing a WAB
page because the ra:collections will already be downloaded and cached by the browser. The downside of
this approach is that the ra:collections for other pages will be slightly larger. The increase in size is offset by
being able to avoid downloading the ra:collections when accessing the WAB pages.

Refer to the Theme section of this document for more information about theme profiles.