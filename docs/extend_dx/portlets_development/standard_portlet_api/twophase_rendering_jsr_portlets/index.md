# Using two-phase rendering with JSR 286 portlets

For portlets conforming to JSR 286, HCL Digital Experience includes support for two-phase rendering, which allows portlets to set cookies and the HTTP headers and to change the portal page title dynamically.

-   **[Enabling two-phase rendering for a portlet](../dev-portlet/jsr2phase_enabling.md)**  
By default, two-phase rendering is turned off. To enable two-phase rendering for a portlet, you must update the `portlet.xml` deployment descriptor for the portlet.
-   **[Setting headers for a JSR 286 portlet](../dev-portlet/jsr2phase_sethead.md)**  
To set HTTP header information in your JSR 286 portlet, use the setProperty and addProperty methods of the PortletResponse.
-   **[Setting cookies for a JSR 286 portlet](../dev-portlet/jsr2phase_setcookie.md)**  
Although cookies can be set like any other HTTP header, the portlet API provides the addProperty convenience method on the PortletResponse for setting cookies.
-   **[Modifying the HTML head section of a JSR 286 portlet](../dev-portlet/jsr2phase_htmlhead.md)**  
To write into the HTML head section of your JSR 286 portlet, for example, to change a page title, use the `addProperty` method on the `PortletResponse`.
-   **[Setting portlet caching values for a JSR 286 portlet](../dev-portlet/jsr2phase_caching.md)**  
You can dynamically modify portlet caching parameters for a JSR 286 portlet during the render phase.


**Related information**  


[WSRP two-phase rendering](../admin-system/wsrpr_2phase_render.md)

