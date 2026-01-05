# Downloading and deploying HCL products from a Harbor Repository
<!-- Harbor is a project name that, as far as I can see, does not belong to HCL. Therefore, placing our company name in front of “ Harbor container repository” makes it seem as though It’s HCL’s Harbor container repository. The Harbor container repository is associated with HCL, to be sure, but we have to word items like this so there’s no confusion.  -->

## Accessing DX 9.5 Container Images and Helm Charts

The HCL Digital Experience (DX) 9.5 container images and Helm charts are available from the [HCL Harbor container repository](https://hclcr.io/){target="_blank"}. If you have credentials for the [My HCLSoftware (MHS) portal](https://my.hcltechsw.com/){target="blank"}, you can use them to access these DX 9.5 components.
 Starting with CF216, the Harbor repository uses a registry that follows [Open Container Initiative (OCI)](https://opencontainers.org/){target="_blank"} standards.   The Helm chart command has also been updated to comply with OCI standards.

## Pulling Helm charts using OCI commands

Using OCI commands requires an initial login before you can run the pull command.

!!! important
    - It is recommended to pull the Helm chart images directly into your own repositories in the event that Harbor becomes unavailable.
    - While the Helm chart images may remain available in Harbor indefinitely, only the three most recent images are guaranteed to be available.

  1. Log in to the Helm registry by using the following command:

    ```bash
    helm registry login -u <YOUR_HARBOR_USERNAME> -p <YOUR_HARBOR_CLI_SECRET> https://hclcr.io/
    ```

2. Run the following OCI-based pull command:

    ```bash
    helm pull oci://hclcr.io/dx/hcl-dx-deployment --version <HELM_CHART_VERSION_NUMBER>
    ```


    !!! note
        Running the pull command without the `--version` parameter downloads the latest Helm chart version.  
        To see the available Helm chart versions, refer to [Helm chart and CF versions](#helm-chart-and-cf-versions).

3. After you run the pull command, verify that the Helm chart was downloaded to your local computer:

    ```bash
    # List directory contents to check successful pull
    ls -lah
    ```


    **Example output:**


    ```
    total 8868
    -rw-r--r--. 1 user user 136052 Jul  7 11:28 hcl-dx-deployment-2.7.1.tgz
    ```

## Helm chart and CF versions

Refer to the following table to identify which Helm chart version corresponds to each CF (Continuous Fix) version.

| HCL DX Deployment version | HCL DX Search version | CF version |
| :------------------------ | :-------------------- | :--------- |
| 2.26.0                    |                       | CF217      |
| 2.27.0                    |                       | CF218      |
| 2.28.0                    |                       | CF219      |
| 2.29.0                    |                       | CF220      |
| 2.30.0                    |                       | CF221      |
| 2.31.0                    |                       | CF222      |
| 2.32.0                    |                       | CF223      |
| 2.33.0                    |                       | CF224      |
| 2.34.0                    | 2.23.0                | CF225      |
| 2.35.0                    | 2.24.0                | CF226      |
| 2.36.0                    | 2.25.0                | CF227      |
| 2.37.3                    | 2.26.0                | CF228      |
| 2.40.0                    | 2.27.0                | CF229      |
| 2.41.0                    | 2.28.0                | CF230      |
| 2.42.1                    | 2.29.0                | CF231      |
| 2.43.0                    | 2.30.0                | CF232      |

After downloading the Helm charts, the next step is [Retagging images](../../deployment/install/container/helm_deployment/preparation/get_the_code/prepare_load_images.md#re-tag-images) as part of your deployment process.

???+ info "Related information"
    -   [Deploying container platforms by using Helm](../../deployment/install/container/helm_deployment/overview.md)
