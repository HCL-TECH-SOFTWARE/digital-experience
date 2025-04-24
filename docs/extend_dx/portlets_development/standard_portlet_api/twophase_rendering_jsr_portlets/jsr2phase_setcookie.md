# Setting cookies for a JSR 286 portlet

Although cookies can be set like any other HTTP header, the portlet API provides the `addProperty` convenience method on the `PortletResponse` for setting cookies.

1.  Use the `addProperty` method to set cookies.

    -   `PortletReponse.addProperty\(javax.servlet.http.Cookie cookie\)`
    
    !!!
    Note When setting cookies, use the `addProperty` method before the response headers are committed. This should occur before the Render headers subphase of the Render lifecycle phase.

    Example:

    ```
    protected void doHeaders(RenderRequest request, RenderResponse response)

    { Cookie c = new Cookie("myCookieName", "myCookieValue"); c.setPath("/"); c.setDomain("localhost"); c.setMaxAge(7200); response.addProperty(c);}
    ```

 Aet a `Domain` and `MaxAge`.The cookies might not be visible in the Web Browser without these additional information.
It is also possible to set cookies on HTTPS sessions only. For that, you can set `c.setSecure(true);`.

