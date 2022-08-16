# Setting portlet caching values for a JSR 286 portlet

You can dynamically modify portlet caching parameters for a JSR 286 portlet during the render phase.

1.  Update the doHeaders call in the javax.portlet.CacheControl object to set the portlet caching parameters.

    The following sample code sets the portlet's cache scope to private and the cache expiration time to a value of 30 seconds.

    ```
    protected void doHeaders(RenderRequest request, RenderResponse response)
    {
    		response.getCacheControl().setExpirationTime(30);
    		response.getCacheControl().setPublicScope(false);
    }
    ```


**Parent topic:**[Using two-phase rendering with JSR 286 portlets](../dev-portlet/jsr2phase_overview.md)

