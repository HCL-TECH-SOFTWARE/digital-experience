# Download and deploy through HCL Harbor repository

Beginning with HCL Digital Experience V9.5 Container Update 205 the [Docker images](../platform/kubernetes/docker.md) for deployment to Kubernetes environments can be optionally accessed via Helm charts in the [HCL Harbor repository](https://hclcr.io/account/sign-in?redirect_url=/harbor/projects){:target="_blank"}. Customers with credentials to access entitled software in the HCL Software Licensing Portal may apply those credentials to optionally access the Docker components of Digital Experience v9.5 Container Update CF205 or later releases. For more information, see Access and Deploy DX 9.5 Docker components from HCL Harbor (add hyperlink to new page) for more information. 

!!! note

    The Harbor repository structure does not support storage and access of binary zip files.  Specifically, all Docker images except for the DX Client and Ring API sample zip files may be accessed via the HCL Harbor repository. 
    
Harbor is an open-source Container Image and Helm Chart registry.  It can be accessed through use of CLI tools, such as Docker and HELM using a CLI Secret. For more information about Harbor capabilities reference the Harbor documentation at https://goharbor.io

Follow the procedures below to optionally access and deploy HCL DX 9.5 Container Update CF205 or later release components from the HCL Harbor repository. 

## Configure the HCL Harbor Helm Repository to your DX 9.5 K8s Deployment

As an alternative to downloading the DX 9.5 Helm Charts from the Docker components from your HCL DX offering entitlements in the HCL Software License Portal, you can also directly use the HCL Harbor Helm repository with Helm from Container Update CF205 and later releases.

### Adding the HCL Harbor Helm repository

To add the HCL Harbor Helm repository to your Helm configuration, you can use the following command:

```
helm repo add \
--username <YOUR_HARBOR_USERNAME> \
--password <YOUR_HARBOR_CLI_SECRET_> \
hcl-dx https://hclcr.io/chartrepo/dx
```

You can obtain the CLI secret from [HCL Harbor](https://hclcr.io/) after you are authenticated by navigating to your `User Profile` in HCL Harbor. You can copy it from the field called `CLI secret`. 

After adding the repository to your Helm deployment, you should see the following message:

```
"hcl-dx" has been added to your repositories
```

### Listing available Helm Chart versions

To verify that your Helm configuration works to connect and to see which [HCL DX 9.5 Container Update CF application versions](../platform/kubernetes/docker.md) are available from the HCL Harbor repository, you can use the following command:

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
    Applying the method to pull DX 9.5 Container Update images directly from the HCL Harbor container registry requires every cluster node to be able to access the HCL Harbor container registry. To leverage this feature, you will have to configure an `ImagePullSecret` with your HCL Harbor credentials. For instructions, see [Configure deployment to use the HCL Harbor container registry](../platform/kubernetes/deployment/preparation/optional_imagepullsecrets.md#configure-deployment-to-use-the-hcl-harbor-container-registry).

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

After the Helm charts are downloaded, the next step is [Re-tagging images](../platform/kubernetes/deployment/preparation/prepare_load_images.md#re-tag-images).

???+ info "**Related information:**"
    -   [Deploying container platforms using Helm](../platform/kubernetes/deployment/helm_deployment.md)
