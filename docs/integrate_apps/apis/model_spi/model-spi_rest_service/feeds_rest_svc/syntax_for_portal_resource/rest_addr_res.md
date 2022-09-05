# Model Schemas for Addressing Resources

Addressing a resource includes specifying the model to which the resource is associated. To do this, you specify a schema.

There is a schema defined for each model that the remote model SPI supports:

-   For addressing a resource in the content model: `cm`
-   For addressing a resource in the navigation model: `nm`
-   For addressing a resource in the layout model: `lm`
-   For addressing a resource in the portlet model: `pm`

Furthermore, you need to specify the resource of the model itself, as described in the following resource addressing specification:

```
model-uri = "cm:" page-oid | 
            "nm:" navigationnode-oid | 
            "lm:" [layoutnode-oid "@"] page-oid | 
            "pm:" portlet-oid ["@" page-oid

```

The meanings of the syntax elements are as follows:

-   **page-oid**

    This is the portal object ID of a content page. When you address portlet model resources, this is required for portlet windows, but it must not occur for any other portlet model resource identification.

-   **navigationnode-oid**

    This is the object ID of a navigation model node.

-   **layoutnode-oid**

    This is the object ID of a layout model node.

-   **portlet-oid**

    This is the object ID of a layout control, portlet window, portlet entity, or portlet definition.

-   **oid**

    This is the serialized string that represents a portal object ID. This is URI-escaped with UTF-8 encoding. The character `@` is also escaped by using `%40`. You can also use unique names instead of object IDs. Unique names also have to be URI-escaped, and the `@` character must be escaped. Note that every object ID has the defined scheme `'oid:'`.


Note that the model schemes are mandatory for ambiguity reasons. For example content and navigation nodes currently have got the same object IDs.

Example 1: To obtain a feed of the root node of content model, that is the content node with the unique name `wps.content.root`, send an `HTTP GET` request to the following URL:

```
/wps/mycontenthandler?uri=cm:oid:wps.content.root

```

Example 2: To obtain a feed of the layout node with the object id `'_7_0830M4HTFF0SHFCQ_2BV' on the content page with the object id '_6_0830M4HTFF0SHFCQ_4D'`, send an `HTTP GET` request to the following URL:

```
/wps/mycontenthandler?uri=lm:oid:_7_0830M4HTFF0SHFCQ_2BV@oid:_6_0830M4HTFF0SHFCQ_4D

```


