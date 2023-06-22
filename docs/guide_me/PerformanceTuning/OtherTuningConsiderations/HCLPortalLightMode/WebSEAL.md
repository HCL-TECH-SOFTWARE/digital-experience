# WebSEAL

IBM Security Access Manager is a robust and secure centralized policy management solution for e-business
and distributed applications. IBM Security Access Manager WebSEAL is a high performance, multi-threaded
Web server that applies fine-grained security policy to the Security Access Manager protected Web object
space. WebSEAL can provide single sign-on solutions and incorporate back-end Web application server
resources into its security policy.

General installation and configuration instructions can be found at Configuring Security Access Manager.

WebSEAL provides several security mechanism for providing SSO services, however, our performance effort
specifically on LTPA.

## LTPA

In the LTPA mechanism WepSphere shares its LTPA keys with the WebSEAL server. WebSEAL then negotiates with the client browser using LTPA cookies. This relieves the WebSphere server of all user authentication exchanges. The setup for this mechanism is discussed in Single signon to IBM WebSphere
(LTPS).

## Tuning

### Redirecting Portal Login Link
Our WebSEAL server was configured to pass all pages visited by unauthenticated users and to invoke SSO
when users attempt to visit authenticated pages. All of the Authenticated pages have URLs prefixed with
/wps/myportal/. On the first visit to any page with this URL structure, WebSEAL will load the SSO login
page. To prevent the appearance of two logins (WebSEAL followed by Portal) it is recommended to redirect
the Portal Login page to /wps/myportal.

#### How to Set

Modify the content of the JSP file
`<ServerRoot>/PortalServer/theme/wp.theme.themes/default85/installedApps/DefaultTheme85.ear/De
faultTheme85.war/themes/html/dynamicSpots/commonActions.jsp`.

Find the `<%-- Login Link --%>` section and change the highlighted fields in this part of the file from this:
`<a href='<% wpsURL.write(escapeXmlWriter); %>'…`

To this: `<a href='/wps/myportal'…`

Save the file and restart Portal.

### Worker Threads
The worker-threads setting was changed to support more concurrent users during the benchmark
measurements.

#### How to Set
1. Edit <pdweb install>/etc/webseald-default.conf
2. Change the property worker-threads to 1000 (default 100)
3. Save the configuration and restart WebSEAL

### RA Compression

By default the Portal server GZIPs the theme resources, then the WebSEAL server unzips them for internal
use. It would be more efficient for Portal to leave them unzipped and allow WebSEAL GZIP them when it is
ready.

#### How to Set

1. Configure Portal to not compress ra:collection URLs
    1. In the WAS admin console navigate to Resources -> Resource Environment Providers -> WP ConfigService -> Custom properties
        Create a new property:
        Name: com.ibm.wps.resolver.servlet.ContentHandlerGzip.mime-type.exclude
        Value: ^.*$
    2. Save the configuration and restart Portal

2. Configure WebSEAL to compress ra:collection URLs
    1. Edit `<pdweb install>/etc/webseald-default.conf`
    2. In the `compress-mime-type` section add `text/* = 1000`
    3. Save the configuration and restart WebSEAL

    
