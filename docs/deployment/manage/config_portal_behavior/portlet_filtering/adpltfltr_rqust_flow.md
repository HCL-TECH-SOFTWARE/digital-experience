# Request flow of portlet filters

On server startup, all portlet filters that are registered in the PortletFilterService are initialized and are made available for filter registration. After that, the portlet filters go through a sequence of processing steps.

1.  When a portlet is dispatched, the portlet container gets the required filters from the filter registration and calls these filters successively in the specified order.
2.  Before the portlet is rendered, the portlet request and portlet response is forwarded through this chain of portlet filters.
3.  Afterwards, the portlet container passes the request and response back through the chain of filters in the reverse order.

If a filter is to manipulate the output of a portlet, it must exchange the actual writer in the portlet response with one that stores data for later changes. This can be implemented by using the wrapper classes delivered with the portal. After the portlet is called and the response is returned, the filter can then manipulate the output of the portlet and write the resulting output to the original writer.


