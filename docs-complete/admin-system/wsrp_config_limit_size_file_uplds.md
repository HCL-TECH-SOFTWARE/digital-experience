# Configure a limit for the size of file uploads 

You can configure a limit for the size of file uploads during an action request. You can also configure the Consumer behavior if a file upload exceeds the defined limit.

To configure set the following configuration parameters on the Consumer:

-   **wsrp.maxUploadDataLength = \(the maximum size in Kilo Bytes, a integer value \> 0\)**

    Use this parameter to define a maximum size of upload data. By default this parameter is undefined. The default setting means that the Consumer does not limit the size of upload data. Also, if you specify a negative value, the Consumer does not limit the size of the upload data.

-   **wsrp.uploadErrorHandledByProducer = \(true,false\)**

    Use this parameter to define the Consumer behavior if a file upload exceeds the defined limit. The default for this parameter is true. This default setting means that if the upload data exceeds the defined limit, the Consumer continues processing. The Consumer sends a WSRP request, which is cleared of all upload data, to the Producer. The remote portlet needs to handle this situation.

    If this parameter has the value`false` and if upload data exceeds the defined limit, the Consumer stops processing this action request by throwing an exception. The Consumer does not send a WSRP request to the Producer.


You can set these parameters specifically for a remote portlet. To do so, set this parameter as a preference in the portlet definition of the remote portlet on the Consumer.

Alternatively, you can set this parameter for all remote portlets on the Consumer. To do so, set this parameter in the portal WP Configuration Service by using the WebSphere® Integrated Solutions Console.

If you set a parameter both as a preference of a remote portlet and in the WP Configuration service, the value that is defined in the preference of the remote portlet takes precedence.

**Parent topic:**[Customizing the WSRP configuration of your Consumer portal](../admin-system/wsrpt_cons_cust.md)

