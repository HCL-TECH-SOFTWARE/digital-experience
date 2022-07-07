# Configure Harbor Helm Repository

Instead of downloading the Helm Charts previously, you can also directly use the HCL Harbor Helm repository with Helm from CF205 on.

## Adding HCL Harbor Helm repository

To add the HCL Harbor Helm repository to your Helm installation, you can use the following command:

```sh
helm repo add \
--username <YOUR_HARBOR_USERNAME> \
--password <YOUR_HARBOR_CLI_SECRET_> \
hcl-dx https://hclcr.io/chartrepo/dx
```

You can obtain the CLI secret from harbor by navigating to your `User Profile` in [HCL Harbor](https://hclcr.io). You can copy it from the field called `CLI secret`.

After adding the repository to Helm, you should see the following message:

```text
"hcl-dx" has been added to your repositories
```

## Listing available Helm Chart versions

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

## Pulling Helm Chart for deployment

To use the HCL Digital Experience Helm Chart from the HCL Harbor Helm repository, we recommend you pull it via Helm to your local machine, by that you can work with it the same way, as you would have downloaded it manually.

To do so, run the following command with the correct Helm Chart version:

```sh
# Use Helm Pull with the version you want to deploy (example uses 2.7.1, please fill in your desired version)
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
