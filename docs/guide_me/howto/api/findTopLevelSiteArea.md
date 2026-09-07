# How to use WCM API `findByName` method to retrieve top-level site areas

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

When using the findByName method with the `DocumentTypes.SiteArea` option, the API queries only non-top-level site areas (as noted in the official Javadoc). To locate a top-level site area, you must use `DocumentTypes.Site` instead.

This behavior is by design to preserve backward compatibility with versions 6.1 and earlier, ensuring custom code does not break after migrating to newer versions of HCL Digital Experience.

## Instructions

???+ info "Disclaimer of warranties"
    The following code sample was created by HCL Corporation. It is provided solely to help you develop your applications. This sample is provided as is, without warranties of any kind. HCL is not liable for any damages that result from your use of this sample, even if HCL has been advised of the possibility of such damages.

The following query searches for a site area that has a child named siteAreaB, rather than searching directly for a top-level site area named siteAreaB:

```java
   DocumentIdIterator itemsIterator = myworkspace.findByName(DocumentTypes.SiteArea, "siteAreaB");
```

Results in this xpath query:

```text
   Executed Query [//element(, ibmcontentwcm:siteArea)[@ibmcontentwcm:libraryUuid = 'af4b86bf-6b14-4324-b262-ecffc3fddad5']/element(, ibmcontentwcm:siteArea)     
   [@ibmcontentwcm:name = 'siteAreaB'][(@ibmcontentwcm:workflowStatus = (0,1,2))][@ibmcontentwcm:classification = 'Site Area']] found 0 results in [15] ms 
```
