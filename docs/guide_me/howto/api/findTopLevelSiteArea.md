# How to use WCM API `findByName` method to retrieve top-level site areas

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

You can locate content hierarchy nodes using the Web Content Manager (WCM) API in HCL Digital Experience (DX). When using the `findByName` method with the `DocumentTypes.SiteArea` option, the API queries only non-top-level site areas. To locate a top-level site area, you must use `DocumentTypes.Site` instead. This behavior preserves backward compatibility with versions 6.1 and earlier, ensuring custom codes continue to operate as expected. This article explains how to retrieve top-level site areas using WCM API.

## Instructions

To retrieve top-level site areas, perform the following steps:

???+ info "Disclaimer of warranties"
    The following code sample was created by HCL Corporation. It is provided solely to help you develop your applications. This sample is provided as is, without warranties of any kind. HCL is not liable for any damages that result from your use of this sample, even if HCL has been advised of the possibility of such damages.

1. Access the WCM workspace object in your custom Java code.
2. Run the `findByName` search method to query top-level site areas (for example, target top-level site area `siteAreaB`).

    ```java
    DocumentIdIterator itemsIterator = myworkspace.findByName(DocumentTypes.Site, "siteAreaB");
    ```

3. Verify the command returns output similar to the following:

    ```xpath
    //element(*, ibmcontentwcm:siteArea)[@ibmcontentwcm:libraryUuid = 'af4b86bf-6b14-4324-b262-ecffc3fddad5']/element(*, ibmcontentwcm:siteArea)[@ibmcontentwcm:name = 'siteAreaB'][(@ibmcontentwcm:workflowStatus = (0,1,2))][@ibmcontentwcm:classification = 'Site Area']
    ```
    In the output, the `@ibmcontentwcm:name = 'siteAreaB'` attribute identifies the top-level site area.
