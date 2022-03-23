# Cookie support 

The WSRP Consumer stores cookies that it receives from a WSRP Producer or from resources that the Consumer serves as a proxy. It forwards the cookies appropriately in subsequent requests to a Producer or other resources.

The following list gives an overview of the supported use cases of the WSRP Consumer cookie handling.

-   **Cookies that the Consumer receives from the Producer during session context initialization for a remote portlet:**

    If the Consumer receives a cookie from the Producer during session context initialization for a remote portlet, the Consumer forwards that cookie to remote portlets of the same Producer or of the same group. The forwarding target depends on the Producer initialization cookie policy. Additionally, the Consumer forwards the cookie to resources that the Consumer serves as a proxy and that the remote portlet addresses.

-   **Cookies that the Consumer receives from a remote JSR 286 portlet:**

    If the Consumer receives a cookie from a remote JSR 286 portlet, the Consumer forwards that cookie to remote portlets and resources that the Consumer serves as a proxy, if the cookie domain and path match.

-   **Cookies that the Consumer receives from resources that the Consumer serves as a proxy:**

    If the Consumer receives a cookie from resources that the Consumer serves as a proxy, the Consumer forwards that cookie to remote portlets and resources that the WSRP Consumer serves as a proxy, if the cookie domain and path match.

-   **Cookies that the client sends to the Consumer:**

    A client can send cookies to the WSRP Consumer. You can customize the Consumer to forward these cookies to the WSRP Producer or to other resources that the WSRP Consumer serves as a proxy. By default, the Consumer does not forward any cookies that the client sends to the WSRP Consumer.


**Parent topic:**[Reference for using WSRP with the portal ](../admin-system/wsrpr_ref.md)

**Related information**  


[Customizing Client Cookie Forwarding ](../admin-system/wsrpc_clnt_cook_frwrd.md)

[Customizing the WSRP resource proxy ](../admin-system/wsrpt_cons_res_proxy.md)

