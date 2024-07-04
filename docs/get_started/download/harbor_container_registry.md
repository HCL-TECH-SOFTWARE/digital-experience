---
title: Harbor container registry
---

# Download and deploy HCL products from a Harbor Repository
<!-- Harbor is a project name that, as far as I can see, does not belong to HCL. Therefore, placing our company name in front of “ Harbor container repository” makes it seem as though It’s HCL’s Harbor container repository. The Harbor container repository is associated with HCL, to be sure, but we have to word items like this so there’s no confusion.  -->

The HCL Digital Experience 9.5 container images and Helm charts can be accessed from the [HCL container repository on Harbor](https://hclcr.io/){:target="_blank"}. Customers with credentials to access entitled software on the HCL Software Licensing Portal can apply those credentials to optionally access these components of Digital Experience v9.5. 

With the CF216 release (November 2023), the Harbor repository provides an OCI-based registry. The Helm chart command is updated to be OCI-compliant. However, older versions of the Helm chart are still used in the non-OCI approach. Both approaches are described later.

## OCI-based registry
Helm Charts that are pushed and managed through OCI are not part of the `Helm Charts` category in Harbor anymore. Therefore, the `Helm Charts` section does not reflect the newer version of Helm charts, which are pushed by using OCI commands. OCI assets such as container images and Helm charts are currently in the same category and both are listed as an OCI repository.

### Pulling Helm charts by using OCI commands

These commands are different from the previous approach in the non-OCI-based registry. Using OCI commands requires an initial login before you can run the pull command.


1. Log in to the Helm registry by using the following command: 

    ```sh
    helm registry login -u <YOUR_HARBOR_USERNAME> -p <YOUR_HARBOR_CLI_SECRET_> https://hclcr.io/
    ```

2. After you log in, run the following OCI-based pull command:

    ```sh
    helm pull oci://hclcr.io/dx/hcl-dx-deployment --version <HELM_CHART_VERSION_NUMBER>
    ```

3. After you run the pull command, you can check whether the Helm Chart was downloaded to your local computer:

    ```sh
    # List directory content to check successful pull
    ls -lah 

    # total 8868
    # -rw-r--r--. 1 user user  136052 Jul  7 11:28 hcl-dx-deployment-2.7.1.tgz
    ```

## Non-OCI-based registry

This section describes the previous non-OCI approach that still uses older versions of the Helm chart. 

### Configuring the Helm repository on Harbor to your HCL Digital Experience 9.5 Kubernetes deployment

As an alternative to downloading the DX 9.5 Helm charts from the Docker components from your HCL DX offering entitlements on the HCL Software License Portal, you can directly use the Helm repository on Harbor with Helm from HCL DX Container Update CF205 and later releases.

#### Adding the Helm repository on Harbor to your Helm configuration

To add the Helm repository on Harbor to your Helm configuration, you can use the following command:

```
helm repo add 
--username <YOUR_HARBOR_USERNAME> 
--password <YOUR_HARBOR_CLI_SECRET_> 
hcl-dx https://hclcr.io/chartrepo/dx
```

To obtain the `CLI secret`, you must log in to [Harbor GitHub site for HCL](https://hclcr.io/) by using your authorized HCL user credentials, navigating to your HCL `User Profile` on Harbor, and then copying it from the `CLI secret` field.

After you add the repository to your Helm deployment, you should see the following message:

```
"hcl-dx" has been added to your repositories
```

#### Listing available Helm chart versions

To verify that your Helm configuration works to connect and to see which [HCL DX 9.5 Container Update CF application versions](../../deployment/install/container/image_list.md) are available from the HCL repository on Harbor, you can use the following command:

```
# Using helm search to find available versions, the DX helm charts are named hcl-dx-deployment
    
helm search repo hcl-dx/hcl-dx-deployment --versions
```

This command returns a list of available versions, which looks similar to this example:

```
NAME                        CHART VERSION   APP VERSION DESCRIPTION                                    
hcl-dx/hcl-dx-deployment    2.7.1           95_CF204    Kubernetes Deployment of HCL Digital Experience
```

You can see which chart version correlates to which HCL Digital Experience 9.5 Container Update CF version. In the preceding example, installing Container Update CF204 requires you to use Helm chart version 2.7.1.

After you complete the preceding actions, your Helm configuration can use HCL DX 9.5 Helm charts directly from the Helm Repository on Harbor.

!!! note
    Applying the method to pull DX 9.5 Container Update images directly from the HCL container registry on Harbor requires that every cluster node can access the HCL container registry on Harbor. To leverage this feature, you have to configure an `ImagePullSecret` with your HCL credentials for the Harbor site. For instructions, see [Configure deployment to use the HCL container registry on Harbor](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_imagepullsecrets.md#configure-deployment-to-use-the-hcl-harbor-container-registry).

#### Pulling a Helm chart for deployment

To use the HCL Digital Experience v9.5 Helm chart from the Helm repository on Harbor, for best results, pull the Helm chart through Helm to your local computer. By using this method, you can work in the same manner as the manually downloaded method.

To do so, run the following command with the correct Helm chart version:

```
# Use Helm Pull with the version you want to deploy. (This example uses version 2.7.1. Enter the version you want to use.)
helm pull hcl-dx/hcl-dx-deployment --version 2.7.1
```

After running this command, you can verify whether the Helm chart was downloaded to your local computer:

```
# List directory content to check successful pull
ls -lah 

# total 8868
# -rw-r--r--. 1 user user  136052 Jul  7 11:28 hcl-dx-deployment-2.7.1.tgz
```

You downloaded your DX 9.5 Container Update Helm chart from the HCL repository on Harbor and can continue with your deployment. 

After the Helm charts are downloaded, the next step is [Retagging images](../../deployment/install/container/helm_deployment/preparation/get_the_code/prepare_load_images.md#re-tag-images).

???+ info "Related information"
    -   [Deploying container platforms by using Helm](../../deployment/install/container/helm_deployment/overview.md)
