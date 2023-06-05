---
title: AI analyzer API for content
---

# AI analyzer API for content

Starting from CF213, a new WCM REST v2 API is available for sentimental analysis of content, keyword extraction from content, and auto summarization of content element.

## WCM REST V2 API explorer

The WCM REST V2 API explorer allows developers using the Digital Experience WCM REST APIs to explore and test these APIs. 

Access the WCM REST V2 API explorer located at:

```
http or https://host:port/dx/api/wcm/v2/explorer/
```

!!! example

    ```
    https://localhost:10039/dx/api/wcm/v2/explorer/
    ```

### How to use REST with AI analyzer API for content
#### Request Details

Once you access the WCM REST V2 API explorer, you can also access the following AI analyzer API endpoint.

-   POST request to:

    ```
    https://localhost:10039/wps/mycontenthandler/wcmrest-v2/contents/analysis
    ```
### Current API capabilities and limitations

- Only Text Elements such as Plain Texts and Rich Texts are supported and are used for AI analysis.
- Only Content Elements are used for AI analysis. In other words, only those components within the elements data array (Refer above request body's "data": {} item to understand more) are used for AI analysis and other fields in parent level like description, name and title of content are not used for AI analysis.
- If value of request parameter selected is summary: By default extractive summarization is done during analysis. Currently abstractive summarization is not supported.

For more information on the API request and response details, refer to ```/contents/analysis``` API with method type as ```POST``` in the Swagger REST API documentation at ```http or https://host:port/dx/api/wcm/v2/explorer/```.
