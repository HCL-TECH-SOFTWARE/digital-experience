# Adding Cache Headers in IHS

The HTTP protocol allows the server to tell clients how long they can cache responses. When the client has the content in their cache, they do not need to request it again, saving the round-trip time to the server to retrieve the content.

This is done by adding Cache-Control headers to the content which we wish to make cacheable. By default, WebSphere Portal 8.5 will include these headers for static content it served from the theme (ra:collection URLs) and WCM. More information on configuring Portal’s default cache control headers under:

**Appendix A: Where Cache-control headers are set.**

It is possible to use `mod_expires` and `mod_headers` in IBM HTTP Server to add the same headers to images, JavaScript and other static content for which Portal does not add headers.

## How to Set

Add the following to the `httpd.conf` file. If you don’t add the LoadModule directives, the subsequent directives won’t work.

```
LoadModule expires_module modules/mod_expires.so
LoadModule headers_module modules/mod_headers.so
AllowEncodedSlashes On
ExpiresActive On
```

- Note that the following max-age=86400 is just an example.
- A lower value might be more appropriate for your site
- Make sure that the LoadModule directives above have been issued. Alternatively you can have a check if module is loaded before invoking the following directives. That is not shown here because the intent is that they should be loaded.

```
<LocationMatch "\.(gif|jpeg|jpg|png|ico|css|js|swf|json)$">
header setifempty Cache-Control "public,max-age=86400"
ExpiresDefault "access plus 1 week"
</LocationMatch>
```

- if a newer version of dojo delivered in fixpack, this needs to be updated

```
<LocationMatch "/wps/portal_dojo/v1.9/dojo/resources/.*\.html">
header setifempty Cache-Control "public,max-age=86400"
ExpiresDefault "access plus 1 week"
</LocationMatch>
```

- added so apache server status won't be cached

```
<LocationMatch "/server-status">
header setifempty Cache-Control "no-cache,max-age=0"
</LocationMatch>
```

!!! note 
    The setifempty keyword was added in Apache 2.4.7. For earlier versions, the set keyword should be used instead. setifemtpy is preferred since it prevents overwriting existing Cache-Control headers that have already been set by Portal. For more information see:

http://httpd.apache.org/docs/current/mod/mod_headers.html

See Web Server Tuning for WAB for an alternative way to specify these same directives that works for base
Portal and WAB.
