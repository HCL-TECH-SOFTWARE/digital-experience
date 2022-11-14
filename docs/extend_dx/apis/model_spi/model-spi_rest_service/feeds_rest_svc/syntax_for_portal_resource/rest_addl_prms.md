# Additional Query Parameters

In order to specify the extent and the contents of the requested feed, you may use additional query parameters. All additional query parameters are optional.

## Levels

You can request a feed of a resource that is maintained in a tree model. If you do this, you can parameterize the URL,by the number of levels that the response should contain as follows:

```
   [ &levels = levelcount ] 
```

`levelcount` is an integer value that is greater than zero. Values have the following meaning:

-   **0**

    This is not a valid value and therefore returns 400: Bad Request.

-   **1**

    This represents the model node itself. As a client, you can obtain a subtree of a model by requesting the root of the required subtree and any levels beneath it.

-   **2**

    This represents the requested node including its direct children.

-   **\>2**

    These are entries for the requested node and its children up to the specified depth. The maximum path length is limited by the maximum depth of the requested \(sub-\) model and level count.

-   **all**

    If you specify this value, the obtained feed includes all descendants of the requested root node. As this can be an expensive call, a client should use this only for the layout model or for testing purposes.

-   **\(absent\)**

    This is equivalent to an `all` levels parameter.


-   **The `level` parameter for the portlet model:**

    The PortletModel is not a tree model, therefore the `level` parameter has a different meaning in the context of the PortletModel. You can set it to the following values:

-   **0**

    This is not a valid value and therefore returns 400: Bad Request.

-   **<0**

    This returns all parents on the hierarchy higher than the given object ID with the depths of the value specified.

-   **\(absent\)**

    This returns an ATOM feed that contains the addressed node of the PortletModel. This is equivalent for a levels parameter with the value -1.

-   **1**

    This is equivalent to a value of -1.

-   **-all**

    This returns all levels up to the root web application.


The parameters level and mode are mutually exclusive if the value for mode is view.

**Example:** A URL that explicitly specifies that the node itself and all its direct children should be contained in the returned response:

```
   /wps/mycontenthandler?uri=nm:oid:wps.content.root&levels=2
```

## Representation mode

If the feed always transports all available information, it will be large. Therefore there is a way to limit the size of the feed. You can use the query parameter rep to specify the volume of information that is transported. You use the parameter as follows:

```
[ &rep = compact | full | empty ]
```

You can set the parameter to the following values:

-   **Compact**

    This is the default value for the generated links. For performance reasons, this reduces the volume of returned information to a subset of the most important items. The meaning of the `compact` representation mode is defined separately and different for each model.

-   **full**

    The full representation mode exposes all available information.

-   **empty**

    The empty representation mode returns no response body. However, the response headers, especially the HTTP status code, are the same as if you use the compact or full representation modes. For example, you can use this mode if a client wants to modify the resource, but does not evaluate the response for performance reasons.

-   **\(absent\)**

    If you omit the parameter, the full representation mode is used.


## Extension parameter

For special use cases, for example in the context of federation, there is a parameter that allows you to manipulate the ATOM alternate link, also known as the view link. The value specified for this parameter must be a URI. If you specify this parameter, the Remote Model SPI performs a Piece Of Content \(POC\) lookup through the interface `com.ibm.portal.resolver.LookupService` with the view mode and the given URI. At this time the Remote Model SPI uses the default lookup service. Use the parameter as follows:

```
[ &extension=uri ]

```

## Explicit MetaData

Some metadata names are hidden, as they are not exposed in the MetaData iterator; for example, this is the case for all names that start with `com.ibm.portal`. These names also do not show up in a feed.

In the compact representation mode no metadata may be exposed, although some certain MetaData are required. Therefore, in order to expose them in a feed, you need to explicitly request them. To do this, use the &mdname parameter as follows:

```
[ &mdname=string ]

```

You can use the parameter mdname multiple times in the same URL.

**Example:** This URL specifies explicitly that the otherwise hidden metadata com.ibm.portal.Hidden is exposed in the returned response:

```
/wps/mycontenthandler?uri=nm:oid:wps.content.root&mdname=com.ibm.portal.Hidden

```


