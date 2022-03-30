# AJAX proxy status codes 

The AJAX proxy responds to requests by defined status codes. Possible errors that can occur in the proxy are mapped to the corresponding HTTP status codes.

By default, the AJAX proxy does not forward an HTTP status code that it receives from the target host. Only 2xx and 3xx status codes are directly forwarded to the client. If the proxy receives an 4xx error code, it will always return a 404 'Not Found' error instead. You can change this behavior by using the `forward-http-errors` configuration parameter. For more details about this parameter refer to the topic about General configuration parameters.

The proxy returns its response with one of the following status codes:

-   **200 OK**

    This code indicates that the request was accepted by the proxy and that the target server returned a response with a status code 200. This means that the request complied with one of the access policies that you specified in the proxy configuration.

-   **400 Bad Request**

    The proxy returns this code if the syntax of the request was incorrect.

-   **403 Forbidden**

    The proxy returns this code in either of the following two cases:

    -   The request was not accepted by the proxy, that is the proxy found no matching access policy that grants access to the target server.
    -   Basic authentication failed.
-   **404 Not found**

    This code indicates that the proxy accepted the request, but the target server either returned status code 404 itself or a different 4xx error code.

-   **302 Found**

    This code indicates that the authentication was successful.


**Parent topic:**[The programming model for using the AJAX proxy ](../dev-portlet/ajax_proxy_prgrmdl.md)

