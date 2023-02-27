# Reference for using WSRP with the portal

Reference information about using WSRP with the portal includes WSRP markup caching and Known limitations.

-   **[WSRP markup caching](wsrpr_markup_cach.md)**  
To improve performance, the WSRP implementation in the portal can use expiry-based markup caching for remote portlets. This caching reduces the number of interactions between the Consumer and the Producer. The Consumer caches remote portlet content, based on the cache-control data structure that the Producer provides as part of its response. You can enable markup caching on the Consumer for all remote portlets or specifically for selected remote portlets.
-   **[Cookie support](wsrpc_cookie.md)**  
The WSRP Consumer stores cookies that it receives from a WSRP Producer or from resources that the Consumer serves as a proxy. It forwards the cookies appropriately in subsequent requests to a Producer or other resources.
-   **[WSRP two-phase rendering](wsrpr_2phase_render.md)**  
The WSRP Consumer and the WSRP Producer in the portal support two-phase rendering for JSR 286 portlets. Two-phase rendering allows a remote portlet to set headers and cookies and to modify the HTML head section.
-   **[Handling HTTP headers](wsrpr_handle_htgtp_headers.md)**  
You can configure both the WSRP Producer and the Consumer to ignore headers.
-   **[Hints and tips for using WSRP with the portal](wsrpr_hints_tips.md)**  
Here are some hints and tips for using WSRP with HCL Digital Experience.
-   **[Troubleshooting WSRP](../troubleshooting/wsrpr_trbl.md)**  
You can troubleshoot WSRP by using different methods such as logging and tracing, debugging, and monitoring.


