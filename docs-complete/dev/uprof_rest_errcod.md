# Error codes 

If the operations described previously fail for some reason, the remote REST service for PUMA returns a subset of the HTTP error codes. They include a message with a detailed description of the error.

The following list gives the error codes that the remote REST service for PUMA can return, and typical situations in which each specific error code is returned.

-   **400 - Bad Request**

    The input provided in the request body does not comply to the expected format. For example, this can be invalid XML in a posted profile.

-   **401 - Unauthorized**

    Access control check during request processing failed.

-   **403 - Forbidden**

    The operation that the client tries to perform is not possible. For example, this can be creating a user ID that already exists, setting attribute values for attributes that are not defined, or using mutually exclusive request parameters.

-   **404 - Not Found**

    The URI does not match any of the defined URI paths or a variable part of a defined URI path does not denote a resource that exists.

-   **405 - Method Not Allowed**

    The request addresses a defined URI, but uses an HTTP method that is not defined for this URI.

-   **415 - Unsupported Media Type**

    The format specified in the mime-type URI parameter or accept headers is not supported.


**Parent topic:**[Structure of the remote REST service for PUMA ](../dev/uprof_rest_gen.md)

