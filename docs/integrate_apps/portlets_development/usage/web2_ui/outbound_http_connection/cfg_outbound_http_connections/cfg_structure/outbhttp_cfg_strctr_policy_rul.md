# Policy rules

Policy rules define handling rules for outbound HTTP connections. Policy rules are identified by a URL pattern. When an outbound HTTP connection is opened, the portal compares the URL of that outbound HTTP connection against the URL pattern of the policy rule and handles the URL accordingly.

A policy rule contains the following settings:

-   **URL pattern:**

    Policy rules are identified by their URL patterns. If an outbound HTTP connection to a certain URL is connected, the outbound HTTP connection service checks the URL patterns of all policy rule items in the accessible policy mappings. The policy rule with the URL pattern that matches best is selected.

-   **basicAuth**

    This flag indicates whether the connection that is defined by this policy rule is protected by basic authentication. If you set this key to `true`, the connection is protected by basic authentication. If you set it to `false`, the connection is not protected by basic authentication.

-   **A set of allowed methods:**

    A policy rule can contain a set of allowed HTTP methods. This list restricts the HTTP methods for the URL connection. For example, if you specify `Get, Post` as the set of allowed methods, then only GET and POST requests are permitted for the URLs that this policy rule controls. If a policy rule does not contain a list of allowed methods, then all HTTP methods are permitted.

-   **A set of mime types:**

    A policy rule can contain a set of mime types. They restrict the allowed mime type of the content that is received. For example, if you specify the set `text/html, text/plain`, it restricts outbound HTTP connections to content that is either plain text or HTML output. If you specify no list of supported mime types, then outbound HTTP connections are not restricted to certain mime types.

-   **A set of Headers:**

    A policy rule can restrict the outbound connection to a set of request headers that are allowed for the remote connection.

-   **A custom chain of URL connection filters:**

    To add an outbound HTTP connection that provides custom function, you can add a chain of custom URL connection filters. The outbound HTTP connection service provides a filter API. Programmers can use this API to write filters that are called whenever an outbound HTTP connection is opened. For more information, read *Using programmatic extensions for outbound HTTP connections*.


**Parent topic:**[Configuration structure](../dev-portlet/outbhttp_cfg_structure.md)

**Related information**  


[Using programmatic extensions for outbound HTTP connections](../dev-portlet/outbhttp_progr_xtns.md)

