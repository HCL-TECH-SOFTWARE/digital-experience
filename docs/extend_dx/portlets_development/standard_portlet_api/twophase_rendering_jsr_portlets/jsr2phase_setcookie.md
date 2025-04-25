# Setting cookies for a JSR 286 portlet

You can set the Cookies like other HTTP header. The portlet API provides the `addProperty` convenience parameter on the `PortletResponse` when setting cookies.

- Use the `addProperty` parameter to set the cookies.
``` 
    - PortletReponse.addProperty\(javax.servlet.http.Cookie cookie\)
```
    
    !!!Note 
    When setting cookies, use the `addProperty` parameter before the response headers are committed. This should occur before the Render headers subphase of the Render lifecycle phase.

    Example:

```
    protected void doHeaders(RenderRequest request, RenderResponse response)

{ Cookie c = new Cookie("myCookieName", "myCookieValue"); c.setPath("/"); c.setDomain("localhost"); c.setMaxAge(7200); response.addProperty(c); }
```

!!!Important

- Set the `Domain` and `MaxAge`parameters to ensure the cookies are visible in the web browser.
- It is also possible to set cookies on HTTPS sessions only. So that, you can set the `c.setSecure(true);` parameter.

