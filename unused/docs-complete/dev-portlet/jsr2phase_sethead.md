# Setting headers for a JSR 286 portlet 

To set HTTP header information in your JSR 286 portlet, use the setProperty and addProperty methods of the PortletResponse.

1.  Specify the appropriate method, depending on whether you want to overwrite or append key values.

    -   `setProperty(String key, String value)`: Overwrites all previous values for the given key.
    -   `addProperty(String key, String value)`: Attempts to append the key value.
    When setting headers in the render lifecycle phase, portlets should set the header in the render headers part or simply override the GenericPortlet.doHeaders method to make sure the server's response headers have not already been committed. Note, however, that the delivery of HTTP headers to the client cannot be guaranteed, because other portlets on a page might override it or the setting of some header attributes might be against the portal's policy.


**Parent topic:**[Using two-phase rendering with JSR 286 portlets ](../dev-portlet/jsr2phase_overview.md)

