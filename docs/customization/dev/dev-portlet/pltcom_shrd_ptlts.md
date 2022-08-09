# Shared portlet sessions

The following communication methods are based on shared state between multiple portlets. This means that two or more portlets read and write to the same data.

There is no direction imposed for the data flow. Portlets are not explicitly called to receive data, but receive data updates implicitly when they read shared information that has been updated \(pull model\).

The portal supports the following methods for portlet communication based on shared state:

-   **Portlet session sharing**

    This applies to JSR standard API portlets only. All standard portlets and servlets that are deployed within the same Web application have access to the same Web module HTTP session. Portlet session attributes are normally namespaced per portlet window to avoid accidential collisions, but it is possible to access attributes at the actual HTTP session level by using the `PortletSession.APPLICATION_SCOPE` constant. Portlets that rely on shared session attributes need to be developed and deployed together in a single WAR file.

-   **Public render parameters**

    This applies to JSR 286 standard API portlets only. The Java Portlet Specification 2.0 for JSR 286 allows portlets to share navigational state information that is stored as render parameters. This method of data sharing is especially useful for coordinating the view state of multiple portlets that display different information items that are all related to the same parameter name, such as a customerID. In this case, the parameter should be represented as a shared render parameter. Shared render parameters are defined per portlet in the portlet application's portlet.xml. A similar common scenario is the coordination between a navigator and a viewer portlet. Public render parameters provide a simple programming model and allow bookmarking of the shared state and **Back** button support. Public render parameters can also be shared with remote portlets via the WSRP V 2.0 protocol. This is supported by HCL Digital Experience 8.5 and later versions.

    **Note:** Information about render parameters is normally encoded into the URL. Therefore their names and values should be as short as possible in order to not exceed the URL length restrictions that many browsers have.


**Parent topic:**[Portlet communication](../dev-portlet/pltcom_ptlt_com.md)

