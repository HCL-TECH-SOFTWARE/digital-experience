# Logging and tracing client side rendering

Learn the how to enable client side logging and tracing of your HCL Digital Experience pages.

Portal pages that are rendered in client side aggregation mode differ in their logging behavior from portal pages rendered in server side mode. For client side rendered pages, a considerable amount of code is written in JavaScript that is executed in the corresponding browser JavaScript engine rather than on the server. As a result, the corresponding logging and tracing information is collected in the browser and not on the server side.

-   **[Enabling client side logging and tracing](../dev-portlet/csa2t_trbl_nbllogtrc.md)**  
Modify the custom properties cc.isDebug and cc.traceConfig in the WP CommonComponentConfigService to enable client-side logging and tracing.
-   **[Capturing the log statements](../dev-portlet/csa2t_trbl_captlogs.md)**  
Client side log statements are written to the JavaScript console of your browser.
-   **[Enabling module tracing](../dev-portlet/csa2t_trble_tracemod.md)**  
Enable tracing to debug your module information to improve performance through trace string or with cookies.

**Parent topic:**[Logging and tracing](../trouble/pd_intr_logs.md)

