# Web Experience Factory (WEF)

## Tuning via the Integrated Solutions Console

The base Portal High Volume Sites tunings were used to acheive optimal WAB performance.
In addition, the web container threadpool minimum and maximum was set to 60.

## Web Server Tuning

**IBM HTTP Server (IHS) Tuning**

Header Edit Cache-Control ^max-age=0$ “no-cache, no-store”
was added to the httpd.conf file. This stopped the http server from caching elements served by Portal that
specified max-age=0 with no other modifiers

## Java & WAS Fixes

WEF requires APAR number PI17435 (8.5.0.0-WP-IFPI17435.zip). This fix avoids the refetching of various
items when navigating within server side portlets.