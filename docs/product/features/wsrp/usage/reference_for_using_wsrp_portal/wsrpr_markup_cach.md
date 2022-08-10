# WSRP markup caching

To improve performance, the WSRP implementation in the portal can use expiry-based markup caching for remote portlets. This caching reduces the number of interactions between the Consumer and the Producer. The Consumer caches remote portlet content, based on the cache-control data structure that the Producer provides as part of its response. You can enable markup caching on the Consumer for all remote portlets or specifically for selected remote portlets.

To enable the use of remote caches, the Consumer can use the cache control data structure to set the HTTP cache control header of a resource response or a render response during the render headers phase.

Starting with Portal 8.5 CF05, markup caching is no longer based on the portlet container's fragment caching feature. You can now use WSRP markup caching without enabling fragment caching. The WSRP Consumer uses the Portal cache wsrp.cache.markup to store WSRP getMarkup responses according to the cache control.

The Producer derives the WSRP cache control from the cache settings of the local standard API portlet. These settings are specified statically in the portlet definition or dynamically through the Portlet API during run time. They comprise the following information:

-   Expiration specifies the duration in seconds that markup fragment remains valid. A value of `-1` indicates that the markup fragment never expires.

    **Note:** If an expiration value of `-1` is specified, the Consumer and all remote caches cache the content for unlimited time. This way, the content is never updated.

-   Scope specifies a string that indicates when the cached markup can be used by various users. The markup is either cached specifically for one user or for all users. This parameter is relevant for remote caching. For more information, read the section about tuning your portal.

If the local portlet is not a standard API portlet, the Producer does not return any cache control information. It disables caching for this portlet.

The Consumer can configure WSRP markup caching by using the following configuration parameters:

-   **wsrp.markupcaching.enabled = \(false,true\)**

    Use this parameter to enable or disable WSRP markup caching. The default for this parameter is `false`. This default setting means that WSRP markup caching is disabled, if no value is specified for this parameter.

    **Note:** If the parameter wsrp.requiresSeparateRenderPhase is enabled, the Consumer automatically disables WSRP markup caching for the corresponding portlet and does not consider this parameter.

-   **wsrp.caching.enabled = \(true, false\)**

    Use this parameter to enable or disable setting the HTTP cache control header in a resource response or in a render response during the render headers phase. The default for this parameter is `true`.


You can set these parameters specifically for a remote portlet. To do so, set this parameter as a preference in the portlet definition of the remote portlet on the Consumer.

Alternatively, you can set these parameters for all remote portlets on the Consumer. To do so, set this parameter in the portal WP Configuration Service by using the WebSphere® Integrated Solutions Console.

If you set a parameter both as a preference of a remote portlet and in the WP Configuration Service, the value that is defined in the preference of the remote portlet takes precedence.

**Parent topic:**[Reference for using WSRP with the portal](../admin-system/wsrpr_ref.md)

