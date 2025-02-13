# WebSEAL

IBM Security Access Manager is a robust and secure centralized policy management solution for e-business and distributed applications. IBM Security Access Manager WebSEAL is a high performance, multi-threaded Web server that applies fine-grained security policy to the Security Access Manager protected Web object space. WebSEAL can provide single sign-on solutions and incorporate back-end Web application server resources into its security policy.

WebSEAL provides several security mechanisms for providing SSO services, however, our performance effort was specifically on LTPA.

## LTPA

In the LTPA mechanism WepSphere shares its LTPA keys with the WebSEAL server. WebSEAL then negotiates with the client browser using LTPA cookies. This relieves the WebSphere server of all user authentication exchanges. The setup for this mechanism is discussed in Single signon to IBM WebSphere (LTPS).

During the medium configuration tests, we encountered an LTPA token timeout error in the Core logs. To address this issue, the LTPA token timeout was increased from 120 minutes to 480 minutes specifically for the rendering tests execution. This adjustment ensured that the tests could run smoothly without interruptions caused by token expiration.

For more information, refer to the HCL Support article [How can I avoid SESN0008E errors](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0079521){target="_blank"}.

**How to Set**

In the WebSphere Integrated Solutions Console

Navigate to Security → Global Security → LTPA → LTPA Timeout

## Tuning

### Redirecting Portal Login Link

Our WebSEAL server was configured to pass all pages visited by unauthenticated users and to invoke SSO when users attempt to visit authenticated pages. All of the Authenticated pages have URLs prefixed with /wps/myportal/. On the first visit to any page with this URL structure, WebSEAL will load the SSO login page. To prevent the appearance of two logins (WebSEAL followed by Portal) it is recommended to redirect the Portal Login page to /wps/myportal.

**How to Set**

**Modify the content of the JSP file**

&lt;ServerRoot&gt;/PortalServer/theme/wp.theme.themes/default85/installedApps/DefaultTheme85.ear/De faultTheme85.war/themes/html/dynamicSpots/commonActions.jsp.

Find the &lt;%-- Login Link --%&gt; section and change the highlighted fields in this part of the file from this: &lt;a href='<% wpsURL.write(escapeXmlWriter); %&gt;'…

To this: <a href='/wps/myportal'…

Save the file and restart Portal.

### Worker Threads

The worker-threads setting was changed to support more concurrent users during the benchmark measurements.

**How to Set**

1. Edit &lt;pdweb install&gt;/etc/webseald-default.conf
2. Change the property worker-threads to 1000 (default 100)
3. Save the configuration and restart WebSEAL

### RA Compression

By default, the Portal server GZIPs the theme resources, then the WebSEAL server unzips them for internal use. It would be more efficient for Portal to leave them unzipped and allow WebSEAL GZIP them when it is ready.

**How to Set**

1. Configure Portal to not compress ra:collection URLs
    1. In the WAS admin console navigate to Resources → Resource Environment Providers → WP ConfigService → Custom properties Create a new property:

        **Name:** com.ibm.wps.resolver.servlet.ContentHandlerGzip.mime-type.exclude

        **Value:** ^.\*$
    2. Save the configuration and restart Portal

2. Configure WebSEAL to compress ra:collection URLs
    1. Edit &lt;pdweb install&gt;/etc/webseald-default.conf
    2. In the \[compress-mime-type\] section add text/\* = 1000
    3. Save the configuration and restart WebSEAL