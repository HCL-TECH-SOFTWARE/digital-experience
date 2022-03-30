# How DAM communicates with custom plug-ins

DAM extensibility allows DAM to support user-defined custom renditions and transformations for images. This feature can integrate with third-party plug-ins for asset processing and allows you to resize, crop, rotate, and many more while supporting default and custom renditions.

## DAM extensibility

With this new feature, Administrators can:

-   Define custom asset renditions.
-   Configure the transformations done to create a rendition for an asset.

After you upload assets in DAM, renditions are created. You can then do the actions you need on the assets. For example, you can rotate the uploaded assets by calling the default image processor plug-in. For other actions \(like adding a watermark\) that are not supported by the default image processor plug-in, the user can configure DAM extensibility to use third-party plug-ins and use them along with the default plug-in.

## High-level application flow

A custom plug-in must meet certain conditions to work with DAM. The high-level application flow for a DAM plug-in is as follows:

![How DAM communicates with custom plug-ins](../images/dam-extensibility-plugin-design.png "DAM custom plug-in communication")

-   DAM sends a request to the plug-in API with an authentication token, along with the asset and action parameters in the request body.
-   The plug-in receives and validates the token.
-   After successful authentication, the plug-in sends an acknowledgment response to DAM.
-   The plug-in API performs the actual operation.
-   After completing the operation, the plug-in API sends the modified asset back to DAM through a callback API request.

## Using a third-party plug-in with DAM

This describes the overall application flow for using third-party plug-ins with DAM.

To use a custom DAM plug-in, you must use a simple middleware to communicate with DAM. The plug-in itself must hold the logic to do the asset transformation, or call another service to do so. You can then configure the plug-in with DAM.

You need to get the following up and running with a custom plug-in:

-   Write a simple middleware that sends a POST request to the third-party plug-ins.
-   The middleware must meet the request and response structure supported by DAM to make successful requests to the API.
-   You must configure the middleware API URL in DAM.
-   You must configure the `renditions` and `operations` in rendition-extensibility.json in configurations. This allows generating asset renditions with the specific operations handled by the respective plug-ins.
-   DAM picks the URL in the plug-in configuration file and makes the request to the middleware. The middleware then requests the third-party plug-ins to do the operations, and once successfully completed, sends back the asset to DAM through a callback API.

## Extensibility API design

This describes the APIs that allow the use of third-party plug-ins with DAM. Each API has a defined request structure to be sent and a defined response structure to be received back.

**Endpoints**

-   `Plugin-API` request
-   `Callback-API` request

**Plugin-API request**

This API route/URL is a middleware URL configured in DAM configurations. This is picked from plug-in configurations and a POST request is made to this API with the file, Auth-key, callback-url, and actions parameters passed along. The Auth-key is also configured in the configuration and is also picked by DAM. The `Callback-API` is called back by middleware after the operation is completed successfully by the plug-in and the modified asset is sent back to DAM.

See this page for the [Plugin-API Specification](https://opensource.hcltechsw.com/experience-api-documentation/image-processor-api/).

**Body request**:

```
{
    "callBackUrl":"", // URL with the DES encrypted Operation ID
    "file":"", //File binary
    "actionParams": {
       // any Object
    }
}
```

**Acknowledgment response**:

```
{
  "error": {
    "statusCode": "string",
    "message": "string",
  }
}
```

**Callback-API request**

This is an API at the DAM end, the URL to this API is defined in the `Plugin-API` request itself. This can be accessed by making a PUT call by the middleware when the operation is successfully completed. This `Callback-API` expects the modified file, download URL, and other metadata which is served to the user through DAM. To successfully communicate with DAM, a callback request must be made with a defined structure of request and response.

See this page for the [Callback-API Specification](https://opensource.hcltechsw.com/experience-api-documentation/dam-api/).

**Body request**:

```
{
    "file":"", //File binary
    "downloadUrl":"", //asset URL
    "metadata":{
      [keys: values]
    }, //any object
    "keywords":[]
}
```

**Error scenario \(400/500 code range\)**:

```
{
  "error": {
    "statusCode": "string",
    "message": "string",
  }
}
```

**Parent topic:**[Using DAM extensibility ](../containerization/dam_extensibility.md)

