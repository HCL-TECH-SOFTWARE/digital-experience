# Adding cookie handling to the Active Directory Federation Services \(ADFS\) server

The Internet Information Services \(IIS\) server as a part of the ADFS configuration sets up the ADFS cookies by default on a specific path and a specific host. To use these cookies for single sign-on \(SSO\) between the portal server and the ADFS server, the cookies need to flow on requests to the portal server as well. The cookie domain and cookie path must be changed.

-   To change the cookie domain, open the web.CONF of the IIS ADFS module and add the following:

    ```
    <configuration>
    
    ...
    
    <system.web>
    
    ...
    
    <httpCookies domain="your\_domain" httpOnlyCookies="false" requireSSL="false" />
    
    ...
    ```

-   To change the cookie path, an outboundRule on IIS is needed. To support this outboundRule via the IIS Management console, Application Request Routing \(ARR\) is needed. This enhancement creates an outboundRule like the following example:

    ```
    <rewrite>
    <outboundRules>
    <remove name="ChangeCookiePath" />
    <rule name="ChangeCookiePath">
    <match serverVariable="RESPONSE_Set_Cookie" pattern="^(.*; path=/)adfs/ls" />
    <conditions />
    <action type="Rewrite" value="{R:1}" />
    </rule>
    </outboundRules>
    </rewrite>
    ```



