# Configure Metadata

This topic describes how the metadata can be configured through DAM extensibility.

## Overview

DAM Extensibility feature improves and empowers DAM to support user-defined custom renditions and configure transformations for assets. Adding to the configuration of metadata generation for all renditions, you can now configure metadata generation specifically for MIME types and their renditions.

## Metadata configuration via DAM extensibility

Similar to rendition and thumbnail actions such as crop and resize, the Image processor plugin also supports metadata extraction so that DAM invokes the Image processor plugin by default. In case of custom plugin, corresponding API can be configured in the Plugins configuration as follows.

1.  The first change is in the Plugin configuration, which specifies the methods and URL to be invoked for metadata generation.

    !!! note
        The action name needs to be `metadata` and cannot contain any custom names.

    ```
    
    pluginsConfiguration:
      image-processor:
        url: http://RELEASE_NAME-image-processor:DAM_HTTP_PORT/dx/api/image-processor/v1/plugin
        callBackHost: http://RELEASE_NAME-digital-asset-management:DAM_HTTP_PORT
        authKey: Key
        enable: true
        actions:
          metadata:
            params: {}
            url: "/metadata"
    ```

2.  The second change is to add metadata to the new stack configuration `SupplementalStack` in rendition configuration.

    !!! note 
        The operation name needs to be `metadata` and cannot contain any custom names.


    !!! example

        ```
        
        image/jpeg:
        rendition:
        - name: Original
          transformationStack: []
          thumbnailStack:[]
          supplementalStack:
          - plugin: image-processor
            operation:
              metadata: {}
        ```

<!--
## HCL Digital Experience Solution Feedback

HCL Digital Experience is interested in your experience and feedback working with HCL Digital Experience 9.5 release software. To offer comments or issues on your findings, please access the [HCL Digital Experience 9.5 Feedback Reporting application](https://www.hclleap.com/apps/secure/org/app/158bbc7c-f357-4ef0-8023-654dd90780d4/launch/index.html?form=F_Form1).-->

