# Setting cookies for a JSR 286 portlet 

Although cookies can be set like any other HTTP header, the portlet API provides the addProperty convenience method on the PortletResponse for setting cookies.

1.  Invoke the addProperty method to set cookies.

    -   PortletReponse.addProperty\(javax.servlet.http.Cookie cookie\)
    **Note:** When setting cookies, you must invoke the addProperty method before the response headers are committed. This should occur no later than during the render headers sub phase of the render lifecycle phase.

    Example:

    ```
    protected void doHeaders(RenderRequest request, RenderResponse response)
    {
        ...	
        Cookie c = new Cookie("myCookieName", "myCookieValue");
        c.setPath(request.getContextPath());
        response.addProperty(c);
        ...
    }
    ```


**Parent topic:**[Using two-phase rendering with JSR 286 portlets ](../dev-portlet/jsr2phase_overview.md)

