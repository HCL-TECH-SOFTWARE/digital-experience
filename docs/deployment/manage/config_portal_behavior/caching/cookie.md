# cookie.ignore.regex parameter

Use the cookie.ignore.regex parameter to configure which cookies to ignore from the header field. Ignoring these cookies excludes them from the digest computation.

Complete the following steps to add the cookie.ignore.regex parameter to the portal resource environment provider:

1.  If necessary, start the WebSphere\_Portal server.

2.  Log in to the WebSphere® Integrated Solutions Console.

3.  Go to **Resources** \> **Resource Environment** \> **Resource Environment Providers**.

4.  Select **WP ConfigService**.

5.  Under Additional Properties, select **Custom Properties**.

6.  Click **New**.

7.  Specify the name of the required property and set the value of the property to the appropriate value as needed.

    To specify cookies that are NOT included in the digest computation, specify cookie.ignore.regex = digest\\.ignore.\*\|Item1\|Item2\|Item3\|Item4, where Item1, Item2, Item3, Item4 are the items that you want to exclude from getting cached. The default value is digest\\.ignore.\*\|$\{com.ibm.websphere.security.customLTPACookieName\}\|$\{com.ibm.websphere.security.customSSOCookieName\}\|$\{cookie.sessionid.name\}\|WASReqURL. The variables are defined such that the variables resolve to the values listed. For example,

    digest\\.ignore.\*\|LTPAToken\|LTPAToken2\|JSESSIONID\|WASReqURL where

      
     $\{com.ibm.websphere.security.customLTPACookieName\}= LTPAToken  
     $\{com.ibm.websphere.security.customSSOCookieName\}= LTPAToken2  
     $\{cookie.sessionid.name\}=JSESSIONID

    **Important:** Any cookie that is set or modified by any component causes the digests in the URL to change, directly affecting the cache of those resources. If a particular cookie is required for some custom code or feature to work but it is not designed to invalidate the cache, that cookie name must be included in the cookie.ignore.regex list or at least matched successfully by the regular expression in that property. This process ensures that changes to the cookie value do not have any adverse impact on performance by prematurely invalidating cache entries.

8.  Click **Apply** and save your changes.

9.  Log out of the WebSphere Integrated Solutions Console.

10. Restart the WebSphere\_Portal server.



