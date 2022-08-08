# Portlet filter life cycle

For performance reasons, portlet filters have a limited life cycle.

All filters have the following stages:

-   **Init**

    The filter will be initialized. To get information about the specific filter settings and portal information, the `FilterConfig` is given to the `init` method of the filter. After the call of the init method, the filter will switch to the use mode.

-   **Use**

    Filter requests are handled by the `doFilter` method.

-   **Destroy**

    The filter is taken out of service and the `doFilter` method will not be called again. This way, system resources can be given back to the portal.


**Parent topic:**[Configuring portlet filtering](../admin-system/adpltflt.md)

