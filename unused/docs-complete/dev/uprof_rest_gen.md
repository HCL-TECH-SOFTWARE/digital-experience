# Structure of the remote REST service for PUMA 

The interface provided by the remote REST service for PUMA defines single operations that are characterized by a particular URI path, the HTTP method, the expected input or output, and a list of query parameters. With regards to the input or output format, the interface only describes a common baseline for the payload, which can be wrapped or represented individually by different implementations of the service.

## Remote REST service structure

All URI paths that the interface defines start with the prefix `/um`. This can be considered as the identifying part of the service. Implementations of the service can add additional path elements before the `/um` element, for example to represent the context root of a servlet. Therefore clients should not assume that the complete servlet path always starts with `/um`.

URI paths that start with `/um/secure` will be served only within a valid user context, that is only in an authenticated request. If the `/secure` path element is omitted, this means that the operation is performed in the context of the anonymous user. For simplicity, the interface description denotes all URI paths without the `/secure` element. However, all corresponding operations can be performed for both authenticated and anonymous users. For operations related to authenticated users you have to prefix the `/secure` element. This also implies that the particular implementation of the interface has to make sure to apply the appropriate access control checks before executing an operation.

Variable parts within URI paths or query parameters can contain special characters. These must be encoded in order to represent valid path elements or parameters. The interface defines that UTF-8 must be used by the client and that URLs returned by the server are UTF-8 encoded.

Some operations of the interface make use of HTTP PUT and DELETE operations, but many environments only allow GET or POST operations for HTTP requests for security reasons. To be compatible to such scenarios, the interface defines a general replacement mechanism for PUT and DELETE operations by POST requests:

-   Request parameter postAction with a value of put or delete. The case is ignored.
-   Request header X-Method-Override with a value of put or delete. The case is ignored.

The implementation must make sure that it is possible to enable or disable this tunneling of request methods as needed. For each operation, you can specify the input and output format. You can do this by using either the request parameter mime-type or by using the accept request header as defined in the HTTP specification RFC 2616. If you set the request parameter, the information from the accept header is ignored.

-   **[Interface operations ](../dev/uprof_rest_ifops.md)**  
View all operations of the remote REST service for PUMA including the necessary attributes and a description.
-   **[Payload description ](../dev/uprof_rest_pyld.md)**  
The actual data that is processed by the remote REST service for PUMA that is the attributes and their values, user or group profiles, and membership lists, is described by an XML schema document. This schema is normative for all kinds of input and output formats. Therefore, for representations that are not based on XML, such as JSON, you need to apply an appropriate transformation.
-   **[PUMA REST service XML schema document ](../dev/uprof_rest_xmlschm.md)**  
The data processed by the remote REST service for PUMA is described by an XML schema document. View the XML schema for the PUMA REST service XML schema document.
-   **[Error codes ](../dev/uprof_rest_errcod.md)**  
If the operations described previously fail for some reason, the remote REST service for PUMA returns a subset of the HTTP error codes. They include a message with a detailed description of the error.
-   **[Data types for attributes ](../dev/uprof_rest_datyps.md)**  
Data types for attributes belong to a subset of the XML Schema data type specification.

**Parent topic:**[Remote REST service for PUMA ](../dev/uprof_rest.md)

**Related information**  


[Accept request-header field](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.1)

