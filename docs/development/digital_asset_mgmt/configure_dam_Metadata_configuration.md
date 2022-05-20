# Metadata configuration through DAM Extensibility

This topic describes how the metadata can be configured through DAM extensibility.

## DAM extensibility

DAM Extensibility feature improves and empowers DAM to support user-defined custom renditions and configure transformations for assets. Adding to the configuration of metadata generation for all renditions, you can now configure metadata generation specifically for MIME types and their renditions.

## Metadata configuration via DAM Extensibility

Similar to rendition and thumbnail actions such as crop and resize, the Image processor plugin also supports metadata extraction so that DAM invokes the Image processor plugin by default. In case of custom plugin, corresponding API can be configured in the Plugins configuration as follows.

1.  The first change is in the Plugin configuration, which specifies the methods and URL to be invoked for metadata generation.

    !!! note
        The action name needs to be `metadata` and cannot contain any custom names.

    ```
    
    {
       "image-processor":{
          "url":"<PROTOCOL>://<IMAGE_PROCESSOR_HOST>/dx/api/image-processor/v1/plugin",
          "callBackHost": "<PROTOCOL>://<DAM_HOST>",
          "key":"IMAGE_PROCESSOR_PLUGIN_SECRET_KEY",
          "actions":{
             "metadata":{
                "params":{},
                "url":"/metadata"
             }
          }
       }
    ```

2.  The second change is to add metadata to the new stack configuration `SupplementalStack` in rendition extensibility configuration.

    !!! note 
        The operation name needs to be `metadata` and cannot contain any custom names.

    ```
    
    {
        "[mimeType: string]": {
            "type": "string",
            "rendition": [
                {
                    "name": "string",
                    "transformationStack": [
                        {
                            "plugin": "string",
                            "operation": {
                                "[operation]": "object"
                            },
                        }
                    ],
                    "thumbnailStack": [
                        {
                            "plugin": "string",
                            "operation": {
                                "[operation]": "object"
                            },
                        }
                    ],
                    "supplementalStack": [
                        {
                            "plugin": "string",
                            "operation": {
                                "[operation]": "object"
                            },
                        }
                    ]
                }
            ]
        }
    }
    ```

    !!! example

      ```
      
      {
        'image/jpeg': {
          rendition: [
            {
              name: 'Original',
              transformationStack: [],
              thumbnailStack: [],
              supplementalStack: [
                {
                  plugin: 'image-processor',
                  operation: {
                    metadata: {},
                  },
                },
              ],
            },
            {
              name: 'Desktop',
              transformationStack: [],
              thumbnailStack: [],
              supplementalStack: [
                {
                  plugin: 'image-processor',
                  operation: {
                    metadata: {},
                  },
                },
              ],
            },
            {
              name: 'Tablet',
              transformationStack: [],
              thumbnailStack: [],
              supplementalStack: [
                {
                  plugin: 'image-processor',
                  operation: {
                    metadata: {},
                  },
                },
              ],
            },
            {
              name: 'Smartphone',
              transformationStack: [],
              thumbnailStack: [],
              supplementalStack: [
                {
                  plugin: 'image-processor',
                  operation: {
                    metadata: {},
                  },
                },
              ],
            },
          ],
        }
      }
      ```


