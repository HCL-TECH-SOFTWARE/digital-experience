---
title: Harbor container registry
---

# Downloading and deploying HCL products from a Harbor Repository
<!-- Harbor is a project name that, as far as I can see, does not belong to HCL. Therefore, placing our company name in front of “ Harbor container repository” makes it seem as though It’s HCL’s Harbor container repository. The Harbor container repository is associated with HCL, to be sure, but we have to word items like this so there’s no confusion.  -->

The HCL Digital Experience (DX) 9.5 container images and Helm charts can be accessed from the [HCL Harbor container repository](https://hclcr.io/){target="_blank"}. Customers with credentials to access entitled software on the HCL Software Licensing Portal can apply those credentials to optionally access these components of DX 9.5.

Starting from CF216, the Harbor repository is updated with a registry based on Open Container Initiative (OCI) standards. The Helm chart command is updated to be OCI-compliant.

## Pulling Helm charts using OCI commands

Using OCI commands requires an initial login before you can run the pull command.

!!!Important
    - It is recommended to pull the Helm chart images directly into your own repositories in the event that Harbor becomes unavailable.
    - While the Helm chart images may remain available in Harbor indefinitely, only the three most recent images are guaranteed to be available.

1. Log in to the Helm registry by using the following command:

    ```sh
    helm registry login -u <YOUR_HARBOR_USERNAME> -p <YOUR_HARBOR_CLI_SECRET_> https://hclcr.io/
    ```

2. Run the following OCI-based pull command:

    ```sh
    helm pull oci://hclcr.io/dx/hcl-dx-deployment --version <HELM_CHART_VERSION_NUMBER>
    ```

    !!!note
        Running the pull command without the version parameter downloads the latest Helm chart version. To see the available Helm chart versions, refer to [Listing available Helm chart versions](#listing-available-helm-chart-versions).

3. After you run the pull command, you can check whether the Helm Chart was downloaded to your local computer:

    ```sh
    # List directory content to check successful pull
    ls -lah 

    # total 8868
    # -rw-r--r--. 1 user user  136052 Jul  7 11:28 hcl-dx-deployment-2.7.1.tgz
    ```

## Listing available Helm chart versions

To verify that your Helm configuration works to connect and to see which [HCL DX 9.5 Container Update CF application versions](../../deployment/install/container/image_list.md) are available from the HCL repository on Harbor, use the following command:

```
# Using helm search to find available versions, the DX helm charts are named hcl-dx-deployment
    
helm search repo hcl-dx/hcl-dx-deployment --versions
```

This command returns a list of available versions. For example:

```
NAME                        CHART VERSION   APP VERSION DESCRIPTION                                    
hcl-dx/hcl-dx-deployment    2.7.1           95_CF204    Kubernetes Deployment of HCL Digital Experience
```

You can see which chart version correlates to which HCL DX 9.5 Container Update CF version. In the preceding example, installing Container Update CF204 requires you to use Helm chart version 2.7.1.

After you complete the preceding actions, your Helm configuration can use HCL DX 9.5 Helm charts directly from the Helm Repository on Harbor.

!!! note
    Applying the method to pull DX 9.5 Container Update images directly from the HCL container registry on Harbor requires that every cluster node can access the HCL container registry on Harbor. To leverage this feature, you have to configure an `ImagePullSecret` with your HCL credentials for the Harbor site. For instructions, see [Configuring deployment to use the HCL container registry on Harbor](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_imagepullsecrets.md#configuring-deployment-to-use-the-hcl-harbor-container-registry)

## Pulling a Helm chart for deployment

To use the HCL DX 9.5 Helm chart from the Helm repository on Harbor, for best results, pull the Helm chart through Helm to your local computer. By using this method, you can work in the same manner as the manually downloaded method.

To do so, run the following command with the [correct Helm chart version](#listing-available-helm-chart-versions):

```sh
# Use Helm Pull with the version you want to deploy. (This example uses version 2.7.1. Enter the version you want to use.)
helm pull hcl-dx/hcl-dx-deployment --version 2.7.1
```

After running this command, you can verify whether the Helm chart was downloaded to your local computer:

```sh
# List directory content to check successful pull
ls -lah 

# total 8868
# -rw-r--r--. 1 user user  136052 Jul  7 11:28 hcl-dx-deployment-2.7.1.tgz
```

You downloaded your DX 9.5 Container Update Helm chart from the HCL repository on Harbor and can continue with your deployment. 

After the Helm charts are downloaded, the next step is [Retagging images](../../deployment/install/container/helm_deployment/preparation/get_the_code/prepare_load_images.md#re-tag-images).

???+ info "Related information"
    -   [Deploying container platforms by using Helm](../../deployment/install/container/helm_deployment/overview.md)
