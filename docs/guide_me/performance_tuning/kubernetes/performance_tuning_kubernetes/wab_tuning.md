# Web Application Bridge (WAB) Tuning

Web application bridge (WAB) is a feature that allows a user to access a backend server via a portlet. To the end user, it appears that the backend service is part of Portal.

## Tuning via the Integrated Solutions Console

The base Portal High Volume Sites tunings were used to achieve optimal WAB performance.

### JVM Tuning

**_MaxDirectMemorySize_**

In our measurements a 1MB page was accessed via WAB. This required us to set the max direct memory size in the JVM using -XX:MaxDirectMemorySize=1G. Also, to make sure there was enough physical memory for the Portal JVM heap plus the native memory used by direct memory, we increased the physical memory on the system to16GB from 8GB.

If large pages are fetched via Portal (not directly from the back end server) MaxDirectMemorySize can be set to avoid out of memory conditions.

In Portal 9.5, the base Portal scenarios set this value to 1G. The WAB configuration used the same value.

## Other WAB Tuning

### Selecting users to access the WAB page

Part of setting up a page with the WAB portlet on it involves granting authorization to the portlet. In WebSphere Portal v8001, the option to select ‘all authenticated users’ was added. If applicable, this option should be selected.

### profile_wab Theme Profile

The WAB setup documentation discusses using profile_wab on pages that include the WAB dock portlet. profile_wab contains one theme-profile module that supports WAB: wp_webdock. An alternative to specifying profile_wab on a page that has the Web Dock Portlet, is to add wp_webdock to the theme profile that is used on other pages. This will avoid having to download ra:collection URLs when accessing a WAB page because the ra:collections will already be downloaded and cached by the browser. The downside of this approach is that the ra:collections for other pages will be slightly larger. The increase in size is offset by being able to avoid downloading the ra:collections when accessing the WAB pages.

Refer to the Theme section of this document for more information about theme profiles.
