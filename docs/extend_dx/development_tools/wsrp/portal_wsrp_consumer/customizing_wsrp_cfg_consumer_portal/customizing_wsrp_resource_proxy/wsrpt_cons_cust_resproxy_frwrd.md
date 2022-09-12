# Customizing the WSRP resource proxy HTTP header forwarding behavior

By default, the WSRP resource proxy forwards all HTTP headers from the client request except for the host header and cookie headers. You can define further headers that you do not want to be forwarded.

To do so, set the following property in the Configuration Service: wsrp.resourceproxy.no.header.forwarding = comma-separated list of header names. Use this property to specify the list of HTTP headers that are not forwarded from the client request in addition to the host header and cookie headers. The host header and cookie headers are never forwarded independent of how this property is set. The default behavior is that WSRP forwards all headers except for the host header and cookie headers. After you set this property, restart the portal or the cluster for the change to take effect.


**Related information**  


[CORS and remote web content rendering with WSRP and the Web Content Viewer](../wcm/wcm_config_wcmviewer_wsrp_cors.md)

[OpenAjax security and remote web content rendering with WSRP and the Web Content Viewer](../wcm/wcm_config_wcmviewer_wsrp_open_ajax.md)

