# The programming model for using the AJAX proxy

View information on using the proxy when programming portlets.

The programming model specifies the following:

-   How you make requests, that is how you format URLs that address the proxy
-   How the proxy reacts in specific cases, for example in case of an error.

!!!note
    The proxy does not rewrite URLs that are part of the received content, because the proxy does not know the semantics of the content that it fetches. Consequently, AJAX applications that use the proxy need to generate proxy URLs by themselves.

-   **[URL format and examples](ajax_proxy_prgrmdl_urlfmt.md)**  
The proxy can be addressed via URLs that comply with the REST-based URL format given here.
-   **[AJAX proxy status codes](ajax_proxy_prgrmdl_sts_cod.md)**  
The AJAX proxy responds to requests by defined status codes. Possible errors that can occur in the proxy are mapped to the corresponding HTTP status codes.
-   **[Using the AJAX proxy in portlets](ajax_proxy_prgrmdl_inplt.md)**  
Here is how you use the AJAX proxy in portlets.


