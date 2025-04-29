# Setting cookies for a JSR 286 portlet

Like  other HTTP headers, you can also set the cookies.  When setting cookies, the portlet API provides the `addProperty` convenience parameter on the `PortletResponse`. 

1. Use the `addProperty` parameter to set the cookies. For example:
    ```
    PortletReponse.addProperty\(javax.servlet.http.Cookie cookie\)
    ```
    
2. When setting cookies, use the `addProperty` parameter before the response headers are committed. This should occur before the Render headers subphase of the Render lifecycle phase.  
    Example:

    ```
    protected void doHeaders(RenderRequest request, RenderResponse response)
    {
        Cookie c = new Cookie("myCookieName", "myCookieValue"); 
        c.setPath("/"); c.setDomain("localhost"); c.setMaxAge(7200); 
        response.addProperty(c); 
    }
    ```
    !!!Important

    - To ensure the cookies are visible in the web browser, set the `Domain` and `MaxAge`parameters.
    - To set cookies on HTTPS sessions only, use the `c.setSecure(true);` parameter.


