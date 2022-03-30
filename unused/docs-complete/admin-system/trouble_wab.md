# Troubleshooting the Web Application Bridge 

The troubleshooting information is useful for planning and implementing your Web Application Bridge integration \(WAB\).

The following items are known limitations:

-   **Multiple subdomain URLs when you configure multiple web dock applications on a page**

    If you are on HCL Portal V8.5 CF13 or earlier or V9 CF13, configuring multiple web dock applications on a single portal page generates multiple subdomain URLs. Improvements to manage these events were added to CF14. Upgrade to the latest CF level to experience more efficient subdomain URL processing when you configure multiple web dock applications to portal pages.

-   **Known issue with Microsoft Silver light plug-in**

    Disable the Microsoft Silver light plug-in in browsers when you use the Sharepoint features with the Web Application Bridge.

-   **Known issue when you edit the host or port information for a content provider profile**

    If the system administrator changes the host or port information in the content provider profile, you must edit the web dock application and reselect the profile. Otherwise, the web dock application does not pick up the changes.

-   **Known security issue**

    Do not enter < or \> into any of the text boxes.

-   **Known issue with turning on information mode**

    If you turn on information mode while you create a content provider, the dialog closes. You return to the summary table with no additional information shown. Turn on information mode and then create your content provider.

-   **Web applications that contain navigation to multiple hosts**

    A web page that is served by an application that contains URLs that point to a host that is not the registered host for the web application does not work.

-   **Web applications with URL redirection**

    Any web application that uses URL redirection for serving content is not supported. For example, <meta http-equiv="refresh" content="2;url=http://someotherserver.com/"\> does not work.

-   **Web applications that serve content with incorrect mime-types**

    Any web application that serves web resources with an incorrect mime-type does not work. For example, a jpg image that is served as text/html instead of the correct image/jpeg mime-type does not work.

-   **Web applications that server an iFrame that overlays the complete page**

    Any web application that serves content inside an iFrame that overlays the complete page is not supported.

-   **Web applications that prevent their content to be loaded inside an iFrame**

    Any web application that contains a script to check whether the page document window is the main window or not before it displays the contents does not work.

-   **Web applications with non-standard browser features**

    Any web application that depends specifically on a non-standard feature that is provided by a specific vendor's web browser does not work.

-   **Web applications with vendor-specific client-side capabilities**

    Any web application that uses vendor-specific offline caching APIs, for example: Google and Gears, does not work.

-   **Web dock applications and Mobile devices**

    Starting with CF03, mobile support is provided for web applications that were developed and tested for rendering inside mobile device browsers. If the web application was originally built and tested for desktops, it does not work properly on mobile devices.

    **Note:** Mobile devices might not show scroll bars for any overflow content. Instead, the swipe feature of the mobile is enabled.

-   **Edit Shared Settings does not work on mobile devices**

    The Web Application Bridge does not support the **Edit Shared Settings** mode when accessed through a mobile device.


-   **Reverse Proxy servlet**

    -   No Persistent Cookie handling \(all cookies are treated as sessions\)
    -   No special HTTP 1.0 support
    -   Caching that is based on HTTP headers not yet implemented
-   **The Portal search does not work for WAB - iFrame content**

    If the search crawler indexes a page, the page might not be available for search in a later session. Therefore, make sure that the Search crawler user ID does not have access to the Web Application Bridge.

-   **Sharepoint integration**

    The **View RSS feed** option is not supported.


Review the following questions to help you integrate and troubleshoot your Web Application Bridge integration:

-   **Can I use the localhost or IP address of an application to integrating it with the Web Application Bridge?**

    Always specify fully qualified host name of your application. Do not use the localhost or IP address. You must also use the fully qualified host name when you access HCL Portal.

-   **What request headers are always propagated?**

    -   Date
    -   Pragma
    -   Via
    -   Accept
    -   Accept-Charset
    -   Accept-Encoding
    -   Accept-Language
    -   From
    -   Referrer
    -   Allow
    -   Content-Encoding
    -   Content-Language
    -   Content-Length
    -   Content-Location
    -   Content-MD5
    -   Content-Type
    -   User-Agent
-   **What request headers are always blocked?**

    -   Host
    -   Authorization
    -   Range
    -   Connection
    -   Keep-Alive
    -   Proxy-Authorization
    -   TE
    -   Trailers
    -   Transfer-Encoding
    -   Upgrade
-   **What response headers are always propagated?**

    -   Date
    -   Pragma
    -   Via
    -   Server
    -   Allow
    -   Content-Encoding
    -   Content-Language
    -   Content-Length
    -   Content-Location
    -   Content-MD5
    -   Content-Type
-   **What response headers are always blocked?**

    -   Location
    -   WWW-Authenticate
    -   Proxy-Authenticate
    -   Accept-Ranges
    -   Content-Range
    -   Connection
    -   Trailers
    -   Transfer-Encoding
    -   Upgrade
-   **What do I do if I consistently see an error page in the view mode?**

    Log out of HCL Portal. Clear all cookies and log back in to HCL Portal. Use the fully qualified host name.

-   **How do I remove the Sharepoint navigation that shows in the Web Dock portlet?**

    Review your Sharepoint documentation about hiding the navigation pane without changing the master page. You can also add filters to your application to parse the content that is not required.

-   **What sites create integration problems?**

    The following types of sites can cause integration problems:

    -   Sites that have absolute URLs in the content or JavaScript
    -   Sites that use JavaScript, META refresh, absolute URLs for redirection
    -   Sites that use JavaScript to ensure that a web application is within the top frame and not an embedded frame, for example:

        ```
        if(top.location.href!=self.location.href){top.location.href=self.location.href
        ```

-   **What is the unit for specifying height and width in the Web Dock portlet?**

    Height and width are specified in pixels. The page theme might restrict the width to maximum limit allowed by the theme.

-   **How can I enable tracing for the Web Application Bridge?**

    Add the following string to the Enable Tracing portlet in HCL Portal:

    ```
    com.ibm.wps.vwat.*=all:com.ibm.wps.wab.*=all 
    ```

-   **Why can I not access my internet mail application?**

    If you are using an internet application that has complex security features, the Web Application Bridge might not be able to access the application. One example of an internet application with complex security features is Yahoo. If you are unable to access your internet application and you verified that your settings in the application component are correct, contact Support.

-   **Browse page never loads and keeps cycling**

    If your web browser never loads and keeps cycling, your server times might not match. If you are using Firefox, you see a message that your portal session timed out and to log in. To fix this issue, match your server time to the application you are bridging and restart portal.

-   **Public URLs with multiple host do not display properly**

    If the public site fetches content from multiple hosts, then such sites do not render properly on the Web Dock portlet. For example, Wikipedia loads content from the following different hosts:

    -   en.wikipedia.org
    -   bits.wikimedia.org
    -   upload.wikimedia.org
    -   meta.wikimedia.org
-   **Cookies that are exchanged between the web server and the application server**

    Setting the cookies that are exchanged between the web server and the application server to **HTTP only** disables the Web Application Bridge.

-   **What if the context root for the application that needs to be integrated matches the context root of another application that is already installed on the portal server?**

    You want to integrate an application whose URI starts with /abc. A second application exists on the Portal server with the same context root: /abc. If the first application needs to be integrated into portal through the Web Application Bridge, then the second application needs to be stopped or removed from the portal server.

-   **I see too many pollings requests when I integrate with Netweaver**

    This issue might be because some headers are not being forwarded to the Netweaver server. These headers are **is\_icm\_polling\_user**, **userId**, and **Content-Type**. Open the Virtual Web Application Manager portlet and add these headers to the list of allowed headers in the policy for Netweaver.

-   **Using Simple and Protected GSS-API Negotiation \(SPNEGO\) on Windows™**

    With SPNEGO-based single-sign on, the credentials are always automatically picked. Therefore, the user does not need to provide the credentials in the **Personalize** mode. They are always the user who is logged in to Windows™.

-   **Single sign-on**

    It is expected that the login buttons or similar things like "Switch user" buttons of the backend application are not available. They are either removed with the filters or the backend applications are directly configured. In other words, the content author can provide the credentials only through the **Personalize** mode of the web dock application portlet.

-   **Single sign-on settings**

    The Web Application Bridge stores the authentication cookies that are received from the backend application in session. Perform authentication with the backend server only once per session. You do not need to authenticate for every request. After the user logs in to the backend server with single sign-on through WAB, the authentication remains active for the entire session. Even if the single sign-on settings in the policy change for the backend application, the user is still authenticated until the user logs out of portal. Therefore, if you change the policy, make sure that you log out of portal and then log back on to completely change the policy settings.


**Parent topic:**[Integrating with web applications ](../admin-system/wab.md)

