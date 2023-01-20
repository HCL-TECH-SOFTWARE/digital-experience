# Configure aspect ratios for crop

Inside `values.yaml` file, a new field `cropAspectRatio` has been introduced for crop aspect ratios under `digitalAssetManagement` configurations.

```Yaml
configuration:
  digitalAssetManagement:
    cropAspectRatio:
      - "1:1"
      - "4:3"
      - "3:2"
      - "16:9"
      - "9:16"
      - "5:4"
```

`cropAspectRatio` is an array of aspect ratio string, which will be passed to DAM as an environment variable.

Newly added aspect ratios can be seen on the DAM UI.

![Digital media asset crop ratios](../../../images/dam_crop_aspect_ratios.png)
