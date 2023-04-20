# Syntax for Addressing Portal Resources

To obtain information about a portal resource or to modify a portal resource, you need to obtain a feed for this resource, or you send a request to a certain URL that can contain a feed. Find out how you can construct URLs to which you can send HTTP requests related to the REST service.

For example, a URL can address a specific resource or can contain certain query parameters that allow you to control the extent and the way by which information on resources is exposed, or they allow you to control the way by which resources are modified.

In order to obtain a feed that contains certain portal resources, you send an HTTP GET request to the following URL:

```
/wps/[my]contenthandler[/vpmapping]?(uri=model-uri)+(&mode=verb)?(&name=value)*
```

For Virtual Portals, use the following URL instead:
```
/wps/[my]contenthandler[/vpmapping]/!ut/p/?(uri=model-uri)+(&mode=verb)?(&name=value)*
```

The meanings of the syntax elements are as follows:

-   **contenthandler**

    The name of the servlet for unauthenticated access. No J2EE security context is available.

-   **mycontenthandler**

    The name of the servlet for authenticated access. There is a J2EE security context. Refer to the security topics for more details.

-   **vpmapping**

    The optional name of the URL mapping to a virtual portal. If no mapping is given, the default virtual portal is assumed, otherwise the ID of the addressed virtual portal is associated with the current thread.

-   **uri=model-uri**

    The identification of the addressed resource, as described in Model schemas for addressing resources. The `uri` parameter can appear only once.

-   **mode=verb**

    An optional specification for the mode of access. By default `mode=download` is assumed.

-   **name=value**

    An arbitrary set of parameters. These include additional query parameters. For details refer to the following topics.


-   **[Model schemas for addressing resources](rest_addr_res.md)**  
Addressing a resource includes specifying the model to which the resource is associated. To do this, you specify a schema.
-   **[Additional query parameters](rest_addl_prms.md)**  
In order to specify the extent and the contents of the requested feed, you may use additional query parameters. All additional query parameters are optional.


