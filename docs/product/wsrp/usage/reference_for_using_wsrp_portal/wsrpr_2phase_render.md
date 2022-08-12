# WSRP two-phase rendering

The WSRP Consumer and the WSRP Producer in the portal support two-phase rendering for JSR 286 portlets. Two-phase rendering allows a remote portlet to set headers and cookies and to modify the HTML head section.

The Consumer and Producer determine whether a JSR 286 portlet requires two-phase rendering. The following description explains how the Consumer and Producer process a portlet that supports two-phase rendering:

By default, the Consumer and Producer process both render phases during one WSRP getMarkup request. The default process is advantageous since the two-phase rendering requires only one WSRP request/response roundtrip. Here the Consumer sends a WSRP getMarkup request only during the render headers phase and uses the WSRP response for processing both the render headers phase and the render markup phase. The Producer starts the portlet's render method both in the render headers and the render markup phases.

Starting with Portal CF 05, you can configure WSRP to use separate WSRP requests for processing the render headers and the render markup phases. This configuration enables the use of portlets, which depend on increased separation between the render phases over WSRP. Here the Consumer sends separate WSRP getMarkup requests during the render headers phase and the render markup phase and uses the corresponding WSRP response during each phase.

To configure WSRP two phase rendering, configure the following configuration parameters on the Consumer:

-   **wsrp.requiresSeparateRenderPhases=\(false,true\)**

    Use this parameter to define whether WSRP uses separate WSRP requests to process the render headers and the render markup phases. The default for this parameter is false. This default setting means that WSRP uses one WSRP request to process both render phases, if no value is specified for this parameter.

    You can set this parameter specifically for a remote portlet. To do so, set this parameter as a preference in the portlet definition of the remote portlet on the Consumer.

    Alternatively, you can set this parameter for all remote portlets on the Consumer. To do so, set this parameter in the portal WP ConfigurationService by using the WebSphere® Integrated Solutions Console.

    If you set the parameter as a preference for both a remote portlet and the WP Configuration Service, the value that is defined in the preference of the remote portlet takes precedence.

    **Note:** Enabling this parameter automatically disables WSRP markup caching.


**Parent topic:**[Reference for using WSRP with the portal](../admin-system/wsrpr_ref.md)

**Related information**  


[Using two-phase rendering with JSR 286 portlets](../dev-portlet/jsr2phase_overview.md)

