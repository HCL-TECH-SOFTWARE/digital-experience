# Web Server Tuning for WAB

## IBM HTTP Server (IHS) Tuning
The base Portal HTTP server tunings used by base Portal in 8.5 worked well for WAB. No additional
changes were required.

## WebSphere HTTP Plugin Tuning
WAB requires routing of requests served by the backend server through Portal. This requires modifying the
WebSphere HTTP server plugin. By default WAB routes all requests to WebSphere (blanket mapping). This
is suboptimal because WebSphere does not have to process every request that comes to the HTTP server.

It is better to selectively route requests from the HTTP server to WebSphere. For example, our test fetches
this backend page via Portal: http://<yourbackendserver>/wabtest where wabtest is the name of the
backend application To make this request get sent to WebSphere we changed this line in plugin-cfg.xml:

<Uri AffinityCookie="JSESSIONID" AffinityURLIdentifier="jsessionid" Name="/*"/>
to:
<Uri AffinityCookie="JSESSIONID" AffinityURLIdentifier="jsessionid" Name="/wabtest/*"/>

This change routes any request to /wabtest/anythingElseHere to WebSphere. Note that the /* mapping
must be used if more than one backend server is supported by WAB in one environment.

See base Portal tuning section for instructions how to locate the plugin-cfg.xml.