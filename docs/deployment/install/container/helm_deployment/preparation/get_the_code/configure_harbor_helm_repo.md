# Configure Harbor Helm Repository

The HCL Digital Experience 9.5 container images and Helm charts can be accessed from the [HCL Harbor container repository](https://hclcr.io/){:target="_blank"}. Customers with credentials to access entitled software in the HCL Software Licensing Portal may apply those credentials to optionally access these components of Digital Experience v9.5. 

As of the CF216 release, the Harbor repository is updated with an OCI-based registry. The Helm chart command is updated to be OCI-compliant. However, older versions of the Helm chart are still utilized in the non-OCI approach. On this page, both approaches are described.

## OCI-based registry

Note that Helm Charts pushed and managed through OCI are not part of the `Helm Charts` category in Harbor anymore. Therefore, the `Helm Charts` section does not reflect the newer version of helm charts which are pushed using OCI commands. OCI assets such as container images and helm charts are now in the same category and both are listed as an OCI repository.

### Pulling helm charts via OCI commands

These commands are different from the previous approach with the non-OCI-based registry. It now requires an initial login before executing the pull command.

1. Log in to the Helm registry using the following command: 

    ```sh
    helm registry login -u <YOUR_HARBOR_USERNAME> -p <YOUR_HARBOR_CLI_SECRET_> https://hclcr.io/
    ```
    
2. After logging in, execute the OCI-based pull command:

    ```sh
    helm pull oci://hclcr.io/dx/hcl-dx-deployment --version <HELM_CHART_VERSION_NUMBER>
    ```
    
3. After running the pull command, you can check if the Helm Chart has been downloaded to your local machine:

    ```sh
    # List directory content to check successful pull
    ls -lah 

    # total 8868
    # -rw-r--r--. 1 user user  136052 Jul  7 11:28 hcl-dx-deployment-2.7.1.tgz
    ```

## Non-OCI-based registry

This section describes the previous non-OCI approach where older versions of the Helm chart are still used. 

### Adding HCL Harbor Helm repository

To add the HCL Harbor Helm repository to your Helm installation, you can use the following command:

```sh
helm repo add \
--username <YOUR_HARBOR_USERNAME> \
--password <YOUR_HARBOR_CLI_SECRET_> \
hcl-dx https://hclcr.io/chartrepo/dx
```

To obtain the `CLI secret`, you must log in to [HCL Harbor](https://hclcr.io/){:target="_blank"} using your authorized user credentials, navigate to your `User Profile` in HCL Harbor, and then copy it from the field called `CLI secret`.

After adding the repository to Helm, you should see the following message:

```text
"hcl-dx" has been added to your repositories
```

### Listing available Helm Chart versions

To verify that your Helm configuration works and to see which application versions are available, you can use the following command:

```sh
# Using helm search to find available versions, the DX helm charts are named hcl-dx-deployment
helm search repo hcl-dx/hcl-dx-deployment --versions
```

This would return you a list of available versions, looking similar to this:

```text
NAME                    	CHART VERSION	APP VERSION	DESCRIPTION                                    
hcl-dx/hcl-dx-deployment	2.7.1        	95_CF204   	Kubernetes Deployment of HCL Digital Experience
```

You see which chart version correlates to which HCL Digital Experience version. In the above example, installing CF204 would require you to use Helm Chart version 2.7.1.

Your Helm configuration is now capable of using HCL DX Helm Charts directly from the HCL Harbor Helm Repository.

### Pulling Helm Chart for deployment

To use the HCL Digital Experience Helm Chart from the HCL Harbor Helm repository, we recommend you pull it via Helm to your local machine, by that you can work with it the same way, as you would have downloaded it manually.

To do so, run the following command with the correct Helm Chart version:

```sh
# Use Helm Pull with the version you want to deploy (example uses 2.7.1, please enter your desired version)
helm pull hcl-dx/hcl-dx-deployment --version 2.7.1
```

After running this command, you can check if the Helm Chart has been downloaded to your local machine:

```sh
# List directory content to check successful pull
ls -lah 

# total 8868
# -rw-r--r--. 1 user user  136052 Jul  7 11:28 hcl-dx-deployment-2.7.1.tgz
```

You have now downloaded your Helm Chart and can continue with your deployment.
