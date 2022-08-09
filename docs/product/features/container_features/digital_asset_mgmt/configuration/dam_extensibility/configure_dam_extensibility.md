# Configuring DAM extensibility

This topic describes how to configure DAM extensibility in the configuration folder for Helm packages.

## Configure DAM extensibility

Rendition and plug-in configurations are currently maintained as config maps. You can find these config maps \(`renditions-extensibility.json` and `plugin-extensibility.json`\) in the Helm configuration folder. You can deploy these into DAM through a Helm upgrade.

Refer to the section [Planning your container deployment using Helm](../../deployment/kubernetes/deployment/preparation/prepare_configuration.md) for more information on Helm support.

Once configured, DAM gets the latest config maps to handle assets and their transformations.

You must change the JSON files so the predefined values.yaml file is updated with the latest configuration.

```
configuration:
    # Digital asset management configurations
    digitalAssetManagement:
      # Configuration for extensibility
      extensibility:
        # File path for the rendition config JSON file
        renditionConfigFile: "configurations/renditions-extensibility.json"
        # File path for the plugin config JSON file
        pluginConfigFile: "configurations/plugin-extensibility.json"
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

**Sample key attribute of plug-in config:**

```
{
    "plugins": {
        "image-processor": {
            "url": "http://localhost:8083/api/external/image",
            "key": "IMAGE_PROCESSOR_PLUGIN_SECRET_KEY",
            "actions": {
                "crop": {
                    "params": {}, 
                    "url": "/crop"
                },
                "resize": {
                    "params": {}, 
                    "url": "/resize"
                },
                "rotate": {
                    "params": {}, 
                    "url": "/rotate"
                }
            }
        },
        "thirdparty-image-processor": {
            "url": "http://localhost:8083/api/external/image",
            "key": "THIRD_PARTY_PLUGIN_SECRET_KEY",
            "actions": {
                "resize": {
                    "params": {}, 
                    "url": "/resize"
                }
            }
        }
    }
}
```



