# Handling HTTP headers 

You can configure both the WSRP Producer and the Consumer to ignore headers.

To do so, use the following portal service configuration parameter in the portal Configuration Service:

-   **wsrp.ignore.headers = \(comma-separated list of headers\)**

    Use this parameter to specify one or more headers that you want to be ignored by WSRP. The Producer portal does not pass any headers that are contained in this list to the Consumer. The Consumer portal does not pass any headers that are contained in this list to the Producer. The Consumer portal also ignores headers that are contained in this list if it receives them from the Producer portal. By default this parameter is not set. You can set this parameter in the portal WP Configuration Service by using the WebSphere® Integrated Solutions Console. For details about how to do so, read Setting service configuration properties.


**Parent topic:**[Reference for using WSRP with the portal ](../admin-system/wsrpr_ref.md)

