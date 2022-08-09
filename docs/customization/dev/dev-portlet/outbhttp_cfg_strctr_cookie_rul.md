# Cookie rules

Cookie rules define handling rules for cookies that you use in the context of an outbound HTTP connection.

Cookies are set by the remote server by using the `Set-Cookie:` response header setting. The cookie rules determine the handling of a created cookie. The cookie rule defines how this cookie is treated. Cookie rule definitions are owned by policy rules. Each policy rule defines individually how to handle cookies that are set in outbound HTTP connections.

A Cookie Rule contains the following settings:

-   **cookie names**

    Use this setting to specify a set of wildcard expressions that contain names or name patterns of cookies. For example, the cookie rule with the name `LtpaToken*` applies to both LtpaToken and LtpaToken2. A cookie rule is owned by a proxy rule. Therefore, a cookie rule is applied if both of the following conditions apply:

    -   The owning proxy rule is applied.
    -   The cookie name matches with the wildcard expression.
-   **cookie handling**

    Use this setting to define how the outbound HTTP connection service handles remote cookies. The outbound HTTP connection service can handle cookies in the following ways:

    -   **block**

        This value is the default value. Cookies that you define as blocked cookies are filtered out: They are not returned in the response header of the outbound HTTP connection.

    -   **store in session**

        Cookies are stored in a cookie store that is placed in the local HTTP session.

    -   **store in request**

        Cookies are stored in a cookie store that is placed in the local HTTP request.

    -   **passthru**

        Cookies of the handling type `passthru` are copied into the response header of the connection of the Ajax proxy. The domain and cookie path of the cookie that is passed through are converted to the domain and path of the Ajax proxy servlet. The handling type `passthru` takes effect only if the outbound connection is established through the Ajax proxy.

    -   **wrap**

        If you use cookies of the handling type `passthru`, they can conflict with local cookies, for example LtpaToken, LtpaToken2, or JSESSIONID cookies. In this case, you can use the handling type `wrap`. Cookies of handling type `wrap` are handled like cookies in `passthru` mode, but additionally, the cookie name is transformed.

-   **cookie scope**

    This setting defines the owner of this cookie. A cookie can be associated with the following scopes:

    -   **user**

        The cookie is scoped to the current user.

    -   **application**

        The cookie is scoped to the application that calls the outbound HTTP connection service.

    -   **system**

        The cookie is not scoped at all.

-   **cookie transformations**

    This setting defines a programming interface. Application developers can use it to implement a custom cookie transformation handler. The custom extension code is called at the following two occasions:

    1.  Before the remote HTTP connection writes the request header to the remote connection
    2.  When the response header of the remote HTTP connection is evaluated.
    The custom transformation handler can modify the name, value, domain, and path of the cookie that is assigned with the custom transformation handler. For more information, read *Using custom cookie transformation handlers*.


**Parent topic:**[Configuration structure](../dev-portlet/outbhttp_cfg_structure.md)

**Related information**  


[Using custom cookie transformation handlers](../dev-portlet/outbhttp_cust_cookie_xform_hdlr.md)

