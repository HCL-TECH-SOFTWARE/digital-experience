# Differences between V1 and V2 APIs

This topic outlines how the V2 APIs differ from V1 APIs.

- URL uses **wcmrest-v2**.

    The request URL uses **wcmrest-v2** instead of **wcmrest**. See the following examples:

    |V1 API URL|V2 API URL|
    |----------|----------|
    |`/wps/mycontenthandler/wcmrest/PresentationTemplate`|`/wps/mycontenthandler/wcmrest-v2/PresentationTemplate`|
    |`/wps/mycontenthandler/wcmrest/Workflow`|`/wps/mycontenthandler/wcmrest-v2/Workflow`|

    All links in the response body also use **wcmrest-v2**.

- Request and response body use JSON instead of XML.

    For V1 APIs, request body and response body can be in XML or JSON formats. If the request body is in an XML format, you have to add `?mime-type=application/json` query parameter in the URL for the response body to be in JSON format. 
    
    On the other hand, V2 APIs use only the JSON format for the request and response body. You do not have to add `?mime-type=application/json` query parameter to get a response body in JSON. 

- V2 APIs are in Swagger Explorer.

    The [WCM REST v2 Swagger API Explorer](https://opensource.hcltechsw.com/experience-api-documentation/wcm-api/) contains the following information that can help you with using the V2 APIs:

    - A description of what you can do with the API
    - Sample request value that you can use when executing an API
    - Sample response codes with a description of each code
    
    In addition, you can try executing an API in the Swagger Explorer. To test an API:
    
    1. Access the WCM REST V2 API explorer located at:

        ```
        http or https://host:port/dx/api/wcm/v2/explorer/
        ```

        !!! example

            ```
            https://localhost:10039/dx/api/wcm/v2/explorer/
            ```
    
    2. Go to the endpoint you want to test and click **Try it out**. 
    3. Modify the **Request body** as needed and click **Execute**.

