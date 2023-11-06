---
title: Harbor Container Registry
---

# Download and Deploy from HCL Harbor Repository

Beginning with HCL Digital Experience 9.5 Container Update CF205, the [Docker images](../../deployment/install/docker/index.md) for deployment to Kubernetes environments can be accessed via Helm charts in the [HCL Harbor repository](https://hclcr.io/account/sign-in?redirect_url=/harbor/projects){:target="_blank"}. Customers with credentials to access entitled software in the HCL Software Licensing Portal may apply those credentials to access the Docker components of Digital Experience v9.5 Container Update CF205 or later releases. 

!!! note

    The Harbor repository structure does not support storage and access of binary zip files.  Specifically, all Docker images except for the DX Client and Ring API sample zip files may be accessed via the HCL Harbor repository. 
    
Harbor is an open-source Container Image and Helm Chart registry.  It can be accessed through the  CLI tools, such as Docker and HELM, using a CLI Secret. For more information about Harbor capabilities, refer to the Harbor documentation at [https://goharbor.io](https://goharbor.io){:target="_blank"}.

Refer to the following procedures to access and deploy the components of HCL DX 9.5 Container Update CF205 or later releases from the HCL Harbor repository.

!!! note

    As of the CF216 release, the Harbor repository is updated with an OCI-based registry. The Helm chart command is updated to be OCI-compliant. However, older versions of the Helm chart are still utilized in the non-OCI approach. On this page, both approaches are described.

## OCI-based registry
Note that Helm Charts pushed and managed through OCI are not part of the `Helm Charts` category in Harbor anymore. Therefore, the `Helm Charts` section does not reflect the newer version of helm charts which are pushed using OCI commands. OCI assets such as container images and helm charts are now in the same category and both are listed as an OCI repository.

### Pulling helm charts via OCI commands

These commands are different from the previous approach with the non-OCI-based registry. It now requires an initial login before executing the pull command:

```sh
helm registry login -u <YOUR_HARBOR_USERNAME> -p <YOUR_HARBOR_CLI_SECRET_> https://hclcr.io/
```
After logging in, execute the OCI-based pull command:.

```sh
helm pull oci://hclcr.io/dx/hcl-dx-deployment --version <HELM_CHART_VERSION_NUMBER>
```
After running the pull command, you can check if the Helm Chart has been downloaded to your local machine:

```sh
# List directory content to check successful pull
ls -lah 

# total 8868
# -rw-r--r--. 1 user user  136052 Jul  7 11:28 hcl-dx-deployment-2.7.1.tgz
```


## Non-OCI-based registry

This section describes the previous non-OCI approach where older versions of the Helm chart are still used. 
### Configuring the HCL Harbor Helm repository to your DX 9.5 Kubernetes Deployment

As an alternative to downloading the DX 9.5 Helm Charts from the Docker components from your HCL DX offering entitlements in the HCL Software License Portal, you can also directly use the HCL Harbor Helm repository with Helm from Container Update CF205 and later releases.

### Adding the HCL Harbor Helm repository

To add the HCL Harbor Helm repository to your Helm configuration, you can use the following command:

```
helm repo add 
--username <YOUR_HARBOR_USERNAME> 
--password <YOUR_HARBOR_CLI_SECRET_> 
hcl-dx https://hclcr.io/chartrepo/dx
```

To obtain the `CLI secret`, you must log in to [HCL Harbor](https://hclcr.io/) using your authorized user credentials, navigate to your `User Profile` in HCL Harbor, and then copy it from the field called `CLI secret`.

After adding the repository to your Helm deployment, you should see the following message:

```
"hcl-dx" has been added to your repositories
```

### Listing available Helm Chart versions

To verify that your Helm configuration works to connect and to see which [HCL DX 9.5 Container Update CF application versions](../../deployment/install/container/image_list.md) are available from the HCL Harbor repository, you can use the following command:

```
# Using helm search to find available versions, the DX helm charts are named hcl-dx-deployment
    
helm search repo hcl-dx/hcl-dx-deployment --versions
```

This would return you a list of available versions, looking similar to this:

```
NAME                        CHART VERSION   APP VERSION DESCRIPTION                                    
hcl-dx/hcl-dx-deployment    2.7.1           95_CF204    Kubernetes Deployment of HCL Digital Experience
```

You can see which chart version correlates to which HCL Digital Experience 9.5 Container Update CF version. In the above example, installing Container Update CF204 would require you to use Helm Chart version 2.7.1.

Your Helm configuration is now capable of using HCL DX 9.5 Helm Charts directly from the HCL Harbor Helm Repository.

!!! note
    Applying the method to pull DX 9.5 Container Update images directly from the HCL Harbor container registry requires every cluster node to be able to access the HCL Harbor container registry. To leverage this feature, you will have to configure an `ImagePullSecret` with your HCL Harbor credentials. For instructions, see [Configure deployment to use the HCL Harbor container registry](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_imagepullsecrets.md#configure-deployment-to-use-the-hcl-harbor-container-registry).

### Pulling Helm Chart for deployment

To use the HCL Digital Experience v9.5 Helm Chart from the HCL Harbor Helm repository, we recommend you pull it via Helm to your local machine. Using this method, you can work in the same manner as the manually downloaded method.

To do so, run the following command with the correct Helm Chart version:

```
# Use Helm Pull with the version you want to deploy (example uses 2.7.1, please fill in your desired version)
helm pull hcl-dx/hcl-dx-deployment --version 2.7.1
```

After running this command, you can check to verify if the Helm Chart has been downloaded to your local machine:

```
# List directory content to check successful pull
ls -lah 

# total 8868
# -rw-r--r--. 1 user user  136052 Jul  7 11:28 hcl-dx-deployment-2.7.1.tgz
```

You have now downloaded your DX 9.5 Container Update Helm Chart from the HCL Harbor repository and can continue with your deployment. 

After the Helm charts are downloaded, the next step is [Re-tagging images](../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_load_images.md#re-tag-images).

???+ info "Related information"
    -   [Deploying container platforms using Helm](../../deployment/install/container/helm_deployment/overview.md)
