---
title: Using the AI analyzer API for content
---

# Using the AI analyzer API for content

Starting from CF213, a new [WCM REST v2 API](https://opensource.hcltechsw.com/experience-api-documentation/wcm-api/#tag/AI-Analyzer-Rest) is available for sentimental analysis of content, keyword extraction from content, and auto summarization of content element.

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

For more information about the WCM REST V2 API Explorer, see [HCL Experience API](../../../extend_dx/apis/hcl_experience_api/index.md).

### How to use REST with AI analyzer API for content

#### Request Details

Using the WCM REST V2 API explorer, access the following AI analyzer API endpoint.

-   POST request to:

    ```
    https://localhost:10039/wps/mycontenthandler/wcmrest-v2/contents/analysis
    ```
### Current API capabilities and limitations

- Only Content Elements are used for AI analysis. 
- Only those components within the elements data array are used for AI analysis. These components are Text Element Components (for example, Plain Text, Short Text, and Rich Text) and HTML Components.
- Other fields in the parent level such as description, name, and title of content are not used for AI analysis.
- If the value of the request parameter selected is **summary**, extractive summarization is done during analysis by default. Currently, abstractive summarization is not supported.

For more information on the API request and response details, refer to ```/contents/analysis``` API with method type as ```POST``` in the Swagger REST API documentation at ```http or https://host:port/dx/api/wcm/v2/explorer/```.

!!! note

    Before calling the Content AI analyzer API of any Content AI Provider, configure them in your DX deployment. For instructions on how to enable AI Analysis for Kubernetes deployment, see [Web content AI analysis in Kubernetes Deployment](../../../get_started/plan_deployment/container_deployment/wcm_content_ai_analysis.md). For instructions on how to enable AI Analysis for DX on-premise deployment, see [Web content AI analysis in on-premise deployment](../../../get_started/plan_deployment/traditional_deployment/wcm_env/wcm_ai_analysis.md).
