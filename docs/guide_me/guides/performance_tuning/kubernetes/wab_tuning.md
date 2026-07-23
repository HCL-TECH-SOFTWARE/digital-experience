# Web Application Bridge (WAB) Tuning

Web application bridge (WAB) is a feature that allows a user to access a backend server via a portlet. To the end user, it appears that the backend service is part of Portal.

##  Tuning via the Integrated Solutions Console

The base Portal High Volume Sites tunings were applied to achieve optimal **WAB** performance.

###  JVM Tuning

#### **MaxDirectMemorySize**

In our measurements, a 1MB page was accessed via WAB. This required setting the max direct memory size in the JVM using:  

## Other WAB Tuning

### Selecting users to access the WAB page

Part of setting up a page with the WAB portlet on it involves granting authorization to the portlet. In WebSphere Portal v8001, the option to select ‘all authenticated users’ was added. If applicable, this option should be selected.

###  profile_wab Theme Profile

An alternative to specifying `profile_wab` on pages with the Web Dock Portlet is to add `wp_webdock` to the theme profile used on other pages. This approach:
An alternative to specifying `profile_wab` on pages with the Web Dock Portlet is to add `wp_webdock` to the theme profile used on other pages. This approach:

- Avoids downloading `ra:collection` URLs when accessing a WAB page, since these collections will already be downloaded and cached by the browser.
- Increases the size of `ra:collections` for other pages slightly.

The increase in size is balanced by improved performance on WAB pages due to reduced downloads.

Refer to the **Theme** section of this document for more information about theme profiles.
