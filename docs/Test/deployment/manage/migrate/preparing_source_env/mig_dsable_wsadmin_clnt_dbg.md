# Disabling wsadmin client debug

If you use either IBM® WebSphere® Application Server Version 8.5.5.4 or WebSphere Application Server Version 8.5.5.5, disable the wsadmin client trace to avoid a failure.

There is a known issue in wsadmin client connections to node agents on WebSphere Application Server Version 8.5.5.4 and WebSphere Application Server Version 8.5.5.5 that can cause wsadmin to fail if tracing is enabled.

Disable the wsadmin client trace:

-   In [wp\_profile\_root](../../../../guide_me/wpsdirstr.md#wp_profile_root)/properties/wsadmin.properties, comment out `com.ibm.ws.scripting.traceString`. For example:

    `#com.ibm.ws.scripting.traceString=com.ibm.*=all=enabled`


If the wsadmin client trace is needed, you can append the following line to the trace string to disable tracing for the MetaInfoCache class.

-   Append `:com.ibm.ws.scripting.MetaInfoCache=off`. For example,

    `com.ibm.ws.scripting.traceString=com.ibm.*=all=enabled:com.ibm.ws.scripting.MetaInfoCache=off`



