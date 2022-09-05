# Disabling support for relative URLs for the WSRP resource proxy

By default, the WSRP resource proxy serves resources relative to the current resource proxy URI. You can disable the support for relative URLs.

If you disable the support for relative URLs, the resource proxy accepts only requests for URLs that are rewritten and signed by the WSRP Consumer portal itself. URLs that are manipulated at the client side, for example by modifying URL parameters with JavaScript functions, are discarded.

To switch off the support for relative URLs, access the WebSphere® Integrated Solutions Console and set the following property in the WP Configuration Service: wsrp.resourceproxy.support.relative = false. Restart the portal or the cluster for the changes to take effect.


