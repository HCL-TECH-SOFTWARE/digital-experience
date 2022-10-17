# Configurations

This topic describes how to configure DAM extensibility in the configuration folder for Helm packages.

## Configure DAM extensibility

Rendition and plug-in configurations are currently maintained as config maps. These are maintained in the values.yaml and can be modified through a Helm upgrade.

Refer to the section [Planning your container deployment using Helm](../../platform/kubernetes/deployment/preparation/prepare_configuration.md) for more information on Helm support.

Once configured, DAM gets the latest config maps to handle assets and their transformations.

You must copy the configuration to a custom values.yaml file and updated the required configuration.

Below is the sample configuration for renditions

```
configuration:
    # Digital asset management configurations
    digitalAssetManagement:
      # Configuration for extensibility
      extensibility:
        renditionsConfiguration:
            image/svg+xml:
                rendition:
                - name: Original
                transformationStack: []
                thumbnailStack: []
                supplementalStack: []
            image/png:
                rendition:
                - name: Original
                transformationStack: []
                thumbnailStack:
                - plugin: image-processor
                    operation:
                    crop:
                        region: CENTER
                - plugin: image-processor
                    operation:
                    resize:
                        height: 192
                        width: 192
                supplementalStack:
                - plugin: image-processor
                    operation:
                    metadata: {}
                - plugin: google-vision
                    operation:
                    annotation: {}
                - name: Desktop
                transformationStack:
                - plugin: image-processor
                    operation:
                    resize:
                        height: 1080
                        width: 1920
                thumbnailStack:
                - plugin: image-processor
                    operation:
                    crop:
                        region: CENTER
                - plugin: image-processor
                    operation:
                    resize:
                        height: 192
                        width: 192
                supplementalStack:
                - plugin: image-processor
                    operation:
                    metadata: {}
                - name: Tablet
                transformationStack:
                - plugin: image-processor
                    operation:
                    resize:
                        height: 768
                        width: 1024
                thumbnailStack:
                - plugin: image-processor
                    operation:
                    crop:
                        region: CENTER
                - plugin: image-processor
                    operation:
                    resize:
                        height: 192
                        width: 192
                supplementalStack:
                - plugin: image-processor
                    operation:
                    metadata: {}
                - name: Smartphone
                transformationStack:
                - plugin: image-processor
                    operation:
                    resize:
                        height: 760
                        width: 360
                thumbnailStack:
                - plugin: image-processor
                    operation:
                    crop:
                        region: CENTER
                - plugin: image-processor
                    operation:
                    resize:
                        height: 192
                        width: 192
                supplementalStack:
                - plugin: image-processor
                    operation:
                    metadata: {}
```

Below is the sample configuration for Plugins

```
configuration:
    # Digital asset management configurations
    digitalAssetManagement:
      # Configuration for extensibility
      extensibility:
            pluginsConfiguration:
                image-processor:
                    url: http://RELEASE_NAME-image-processor:DAM_HTTP_PORT/dx/api/image-processor/v1/plugin
                    callBackHost: http://RELEASE_NAME-digital-asset-management:DAM_HTTP_PORT
                    authKey: key
                    enable: true
                    actions:
                    crop:
                        params: {}
                        url: "/crop"
                    resize:
                        params: {}
                        url: "/resize"
                    rotate:
                        params: {}
                        url: "/rotate"
                    metadata:
                        params: {}
                        url: "/metadata"
```
## Configure plug-in security

When using DAM extensibility, plug-ins come with security enabled by default. API requests are authenticated with the security key, which is sent and validated in both `Plugin-API` and `Callback-API` requests. You can configure these under the same config file \(under security configuration\) with the value authenticationKey. This value is sent for the plug-in configuration key attribute, and is sent by DAM with each request to authenticate.

```
# Security related configuration, e.g. default credentials
  security:
    # Security configuration for Image processor
    imageProcessor:
      # Authentication key for Plugin API
      authenticationKey: "PluginSecretAuthKey"
```


## HCL Digital Experience Solution Feedback

HCL Digital Experience is interested in your experience and feedback working with HCL Digital Experience 9.5 release software. To offer comments or issues on your findings, please access the [HCL Digital Experience 9.5 Feedback Reporting application](https://www.hclleap.com/apps/secure/org/app/158bbc7c-f357-4ef0-8023-654dd90780d4/launch/index.html?form=F_Form1).

