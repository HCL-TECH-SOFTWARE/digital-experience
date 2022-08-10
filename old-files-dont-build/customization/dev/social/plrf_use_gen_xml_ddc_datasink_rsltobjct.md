# The generic XML data sink result object

The Digital Data Connector \(DDC\) for HCL Portal data sink returns a JSON string. The JSON string contains the result information for the outbound interaction call that was performed.

The JSON object makes the following data available:

-   **status**

    This member provides the return status of the interaction. If the target service responded to the outbound request with an error response, the status is set to the value `error`. Otherwise, the value is set to `success`.

-   **httpStatusCode**

    This member provides the HTTP status code that is returned for the HTTP outbound call by the remote REST service. Designers can use it to distinguish between the following types of operations:

    -   Operations that are not available, for example because the item to operate on was not found
    -   Operations that are not permitted, because the user does not have sufficient privileges on the remote service.
-   **message**

    This member returns the error message in case of an error.

-   **resultAttributeData**

    This JSON member contains a JSON object with the name-value pairs of attributes that the data sink reads from the XML document that the target service returns. It contains the values for all attributes that the corresponding `ddc.itemattribute.operation` parameter references by using the action value `get`.

-   **passbackData**

    This member contains a JSON object with the name-value pairs for all parameters of the processed operation that you specified by using the `ddc.passback.name` parameters.

-   **resultHeaderData**

    This member contains a JSON object with the name-value pairs that represent the HTTP response header field names and values that you specified by using `ddc.resultheaders` parameters for the processed operation. The HTTP response header values refer to the response of the remote REST service.


**Parent topic:**[The generic XML Digital Data Connector data sink](../social/plrf_use_gen_xml_ddc_datasink.md)

