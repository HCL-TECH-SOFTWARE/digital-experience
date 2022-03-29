# Restore Digital Asset Management image to previous version

This section shows you how to restore the HCL Digital Experience 9.5 Digital Asset Management image to a previous version.

## Restore DAM image using Helm

This procedure restores your DAM deployment to a previous version, in case the database migration fails repeatedly.

See [Update deployment to a later version](../containerization/helm_update_deployment.md) for more information on updating your Helm deployment. For the latest HCL DX 9.5 images, see [Docker image list](../containerization/docker.md).

To restore, get the custom-values.yaml file and modify the `digitalAssetManagement` property value and replace it with the previous image version tag.

In this example, `digitalAssetManagement` is updated with the CF196 DAM image version tag:

```
# Ensure to use the correct image version tags
digitalAssetManagement: "95_CF196_20210625-2013"
```

**Parent topic:**[Update deployment to a later version](../containerization/helm_update_deployment.md)

