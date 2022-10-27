# Restore Digital Asset Management image to a previous version

This shows you how to restore the HCL Digital Experience 9.5 Digital Asset Management image to a previous version.

You can restore your DAM deployment to a previous version, in case the database migration fails repeatedly.

See [Updating a deployment](../../platform/kubernetes/operator-based/dxtools_dxctl.md#updating-a-deployment) for more information on updating your deployment using dxctl. For the latest HCL DX 9.5 images, see [Docker image list](../../../deployment/install/docker/index.md).

-   To restore, get the properties file and modify the `dam.tag` property value under `## DAM configuration` and replace it with the previous image version tag.

    In this example, `dam.tag` is updated with the CF196 DAM image version tag:

    ```
    # Ensure to use the correct image version tags
    dam.tag: "95_CF196_20210625-2013"
    ```

<!--
## HCL Digital Experience Solution Feedback

HCL Digital Experience is interested in your experience and feedback working with HCL Digital Experience 9.5 release software. To offer comments or issues on your findings, please access the [HCL Digital Experience 9.5 Feedback Reporting application](https://www.hclleap.com/apps/secure/org/app/158bbc7c-f357-4ef0-8023-654dd90780d4/launch/index.html?form=F_Form1).-->
