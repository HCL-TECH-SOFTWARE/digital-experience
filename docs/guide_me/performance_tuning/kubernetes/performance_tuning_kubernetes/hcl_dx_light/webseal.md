# WebSEAL

IBM Security Access Manager (ISAM) offers a robust and secure centralized policy management solution for e-business and distributed applications. Within this suite, IBM Security Access Manager WebSEAL functions as a high-performance, multi-threaded Web server. It applies fine-grained security policies to the Security Access Manager protected Web object space, providing single sign-on (SSO) solutions and integrating back-end Web application server resources into its security policy.

While WebSEAL offers various security mechanisms for SSO services, our performance optimization efforts specifically focused on LTPA.

## LTPA

In the LTPA mechanism, WebSphere shares its LTPA keys with the WebSEAL server. WebSEAL then negotiates with the client browser using LTPA cookies, which relieves the WebSphere server of all user authentication exchanges. The setup for this mechanism is discussed in "Single sign-on to IBM WebSphere (LTPS)".

During the medium configuration tests, an `LTPA` token timeout error was encountered in the Core logs. To address this, the `LTPA` token timeout was increased from `120` minutes to `480` minutes specifically for the rendering tests execution. This adjustment ensured that the tests could run smoothly without interruptions caused by token expiration.

For more information, refer to the HCL Support article: [How can I avoid SESN0008E errors](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0079521){target="_blank"}.


## Configuring LTPA Timeout

Follow these steps to configure the LTPA timeout setting in WebSphere:

1.  Open the **WebSphere Integrated Solutions Console**.
2.  Navigate to: **Security > Global Security > LTPA > LTPA Timeout**.
3.  Set the desired **LTPA timeout** value (in minutes).
4.  Click **Apply**.
5.  Click **Save changes** to persist your configuration.
6.  Restart the server for the changes to take effect.

---


## Tuning

### Redirecting Portal Login Link

Our The `WebSEAL` server was configured to **pass through** all unauthenticated pages and to **initiate SSO** when users attempt to visit authenticated pages. All authenticated pages have URLs prefixed with `/wps/myportal/`.

On the first visit to any page with this URL structure, `WebSEAL` will load the `SSO` login page. To prevent a **double login experience** (`WebSEAL` followed by Portal), we recommend redirecting the Portal Login page to `/wps/myportal`.

Modify JSP File Content
To modify the commonActions.jsp file:

1. Locate the JSP file at:
`<ServerRoot>/PortalServer/theme/wp.theme.themes/default85/installedApps/DefaultTheme85.ear/DefaultTheme85.war/themes/html/dynamicSpots/commonActions.jsp`
2. Within this file, find the `<%-- Login Link --%>` section. Change the highlighted field from this:
```
<a href='<% wpsURL.write(escapeXmlWriter); %>'>
```
 To this:
 ```
`<a href='/wps/myportal'>
```
3. Save the file and restart Portal for the changes to take effect.

### Worker Threads

The `worker-threads` setting was changed to support more concurrent users during the benchmark measurements.

**How to Set**

1.  Edit the configuration file: `<pdweb install>/etc/webseald-default.conf`.
2.  Change the `worker-threads` property to `1000` (the default is `100`).
3.  Save the configuration and restart WebSEAL.

### RA Compression

By default, the Portal server GZIPs theme resources, which the `WebSEAL` server then unzips for internal use. For greater efficiency, it is recommended that Portal leave these resources unzipped and allow `WebSEAL` to perform the GZIP compression when ready to serve them.

 **How to Set**

### Configuring RA Compression

1.  **Configure Portal to not compress `ra:collection` URLs:**
    1.  In the WebSphere Application Server (WAS) admin console, navigate to **Resources > Resource Environment Providers > WP ConfigService > Custom properties**.
    2.  Create a new property with the following details:
        - **Name:** `com.ibm.wps.resolver.servlet.ContentHandlerGzip.mime-type.exclude`
        - **Value:** `^.*$`
    3.  Save the configuration and restart Portal.

2.  **Configure WebSEAL to compress `ra:collection` URLs:**
    1.  Edit the configuration file: `<pdweb install>/etc/webseald-default.conf`.
    2.  In the `[compress-mime-type]` section, add the following entry: `text/* = 1000`.
    3.  Save the configuration and restart WebSEAL.