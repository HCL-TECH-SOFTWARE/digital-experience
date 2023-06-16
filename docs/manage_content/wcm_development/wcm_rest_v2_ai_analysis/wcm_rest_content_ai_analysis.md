---
title: Using the AI analyzer API for content
---

# Using the AI analyzer API for content

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

- Only Content Elements are used for AI analysis. 
- Only those Components within the elements data array are used for AI analysis. The components for which AI analysis will be done are Text Element Components (such as Plain Text, Short Text and Rich Text) and HTML Components.
- Other fields in the parent level such as description, name, and title of content are not used for AI analysis.
- If the value of the request parameter selected is **summary**, extractive summarization is done during analysis by default. Currently, abstractive summarization is not supported.

For more information on the API request and response details, refer to ```/contents/analysis``` API with method type as ```POST``` in the Swagger REST API documentation at ```http or https://host:port/dx/api/wcm/v2/explorer/```.

!!! note

    Before you call Content AI analyzer API's of any Content AI Provider, you need to configure them in your DX deployment. Instructions for enabling AI Analysis for Kubernetes deployment is available at [Web content AI analysis in Kubernetes Deployment](../../../get_started/plan_deployment/container_deployment/wcm_content_ai_analysis.md) and instructions for enabling AI Analysis for DX on-premise deployment is available at [Web content AI analysis in on-premise deployment](../../../get_started/plan_deployment/traditional_deployment/wcm_env/wcm_ai_analysis.md)
