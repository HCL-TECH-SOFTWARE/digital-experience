# Lookup facility in the portal 

For both convenience and alignment to other portal REST services, the portal remote REST service for PUMA offers a lookup facility. This lookup facility is done by plugging a provider into a reusable lookup facility in the portal. This function makes it possible for you to retrieve particular URLs of the service by specifying an absolute URI as a parameter to the so-called lookup servlet addressed by `/wps/poc`.

The absolute URIs for the remote REST service for PUMA can be constructed from the service URL paths. They can also be taken from the `atom:id` elements of the ATOM feeds or entries. The URIs are completely UTF-8 encoded. When you construct a URI manually, you take the URI path after the element `/um/` without a leading slash, add `um:` as URI prefix, and encode the whole expression by using UTF-8. Example URL:

```
/um/secure/users/profiles?searchAttributes=uid%3Dwps*
```

This URL has the following URI:

```
um:secure/users/profiles%3FsearchAttributes%3Duid%3Dwps*
```

You can then call the following URL:

```
/wps/poc?uri=um:secure/users/profiles%3FsearchAttributes%3Duid%3Dwps*

```

If you do so, you are redirected to the corresponding REST service URL. For GET operations, it is mandatory to append `&mode=download` to the URI so that a redirect is done to get the data. Or, when you use the `verb=lookup` parameter, which is mandatory for operations other than GET, get an ATOM feed with the service description such as the one shown here:

```
<?xml version="1.0" encoding="UTF-8"?>
<atom:entry xmlns:atom="http://www.w3.org/2005/Atom" xmlns:xhtml="http://www.w3.org/1999/xhtml">
    <atom:author>
        <atom:name>HCL Digital Experience</atom:name>
    </atom:author>
    <atom:id>um:secure/users/profiles?searchAttributes=uid=wps*</atom:id>
    <atom:link href="/wps/um/secure/users/profiles?searchAttributes=uid=wps*"/>
    <atom:title>Remote PUMA REST service URI information</atom:title>
    <atom:updated>2006-12-19T19:21:37.562Z</atom:updated>
</atom:entry>

```

If you need the service description of several REST Service URLs, you can set the `uri` parameter multiple times by using different URIs. In this case, the lookup servlet aggregates the descriptions into one ATOM feed.

**Parent topic:**[How the portal implements the remote PUMA REST service ](../dev/uprof_rest_wpspec.md)

