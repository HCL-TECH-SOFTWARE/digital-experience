---
title:  Entitlement checking in the My HCLSoftware delivery portal
---

The My HCLSoftware portal (MHS) is available for the distribution of HCLSoftware products. In MHS, you can find and download the latest HCLSoftware product releases and supported older releases. This topic provides information on how you can check your entitlements in the My HCLSoftware delivery portal.

## Prerequisites

Make sure you have the following elements before configuring the HCL Digital Experience (DX) Cloud Native V9.5 entitlements to be deployed on supported Kubernetes platforms using My HCLSoftware delivery portal for entitlement checking:  

-   A My HCLSoftware account and access to the [My HCLSoftware](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0109011){target="_blank"} portal.
-   A valid [HCL DX Cloud Native 9.5 (Tier 1 – 7)](https://www.hcltechsw.com/wps/wcm/connect/61f40a7e-d2ca-42d4-b24c-d5adfd4fe54d/HCL+Digital+Experience+Cloud+Native+v9.5.pdf?MOD=AJPERES&CONVERT_TO=url&CACHEID=ROOTWORKSPACE-61f40a7e-d2ca-42d4-b24c-d5adfd4fe54d-n-MmIad){target="_blank"} offering part purchased and issued by the HCL Software licensing team.
-   Your DX Cloud Native 9.5 (Tier 1 – 7) entitlements are mapped to your My HCLSoftware portal instances.  
-   A plan to deploy or update to [HCL DX 9.5 Container Update CF226](../../../../whatsnew/cf20/newcf226.md) or to a later release, if currently using a prior version.
-   An instance deployment. To create an instance deployment, refer to the steps in [creating a deployment instance](#creating-mhs-deployment-instance) in [My HCLSoftware portal](https://my.hcltechsw.com/).

In addition to these elements, review the [architecture](#architecture) that presents the License Manager component of the HCL DX v9.5 Container Update software.

## Architecture

The License Manager component communicates with the My HCLSoftware entitlement service. This is to validate license entitlement at set periods for HCL DX Cloud Native V9.5 Tier 1 – 7 software after configuring the DX Cloud Native 9.5 deployment through the Helm chart. The License Manager component also transmits user session consumption from your production DX Cloud Native 9.5 deployments to the My HCLSoftware usage reporting services.

![Architecture](../../software_licensing_portal/_img/DX_95_container_license_manager_arch_mhs.png) 

Follow the configuration steps in [Configuring the DX Cloud Native 9.5 entitlement](#configuring-the-dx-cloud-native-95-entitlement) before you deploy a new or update an existing DX 9.5 Container deployment. By completing these steps, you configure the DX Cloud Native 9.5 Tier 1 – 7 deployment using a Helm chart and enable the License Manager entitlement-checking functions.



## Configuring the DX Cloud Native 9.5 entitlement

**Entitlement Validation**: The License Manager periodically validates the active DX entitlement by communicating with MHS. Entitlements are typically valid for 12 months, with a 28-day grace period before expiration. During this grace period, reminder messages are logged within the container to prompt timely renewal.

**User Session Reporting**: The License Manager regularly transmits user session data to My HCLSoftware. This reporting allows both customers and HCL to monitor license consumption and ensure usage remains within the bounds of the assigned entitlement tier. The reports also help determine whether a shift to a different usage tier may be necessary based on actual session activity.

### Creating MHS Deployment Instance

A My HCLSoftware (MHS) deployment instance is a registered environment—such as development, test, or production—associated with a customer’s account in the MHS portal. It serves as the target for license metering and entitlement tracking, allowing HCL software (like HCL Digital Experience) to report usage data such as user sessions. Each deployment instance helpsnmonitor consumption against licensed entitlements. In connected environments, the DX License Manager reports directly to the assigned instance; in disconnected setups, [usage data is exported and manually uploaded to the appropriate instance in the portal](../configuring_mfs_file_base_session_reporting.md).

1. Log in to [My HCLSoftware portal](https://my.hcltechsw.com/).

2. Go to **Deployments** tab and click **Add Deployment**.

3. In the **Add Deployments** window, enter the **Deployment Name** and select the type of the deployment.
    
    ![Create Deployment](../../software_licensing_portal/_img/create_deployment.png){ width="500" }

4. Click the **Add Deployment** button to create the deployment.

### Obtaining the deployment key

After creating a deployment, refer to the following steps to get the deployment key.

1. Go to Main menu and check the deployment card list. You can see the deployment card of the deployment you created (for example, **My Deployment**) under **Deployments**. 

2. In the deployment card of your deployment, click the three-dot menu to get the option to create a deployment key and create a new refresh token. Select **Replace Deployment Key**.

    ![More menu](../../software_licensing_portal/_img/deployment_key.png){ width="500" }

3. Copy the unique deployment key, also known as the initial refresh token.

    ![Deployment key](../../software_licensing_portal/_img/new_deployment_key.png){ width="500" }

4. (Optional) If you lose the old deployment key, you can replace it with a new deployment key by clicking the three-dot menu in the deployment card and clicking **Replace Deployment Key**.

### Configuring License Server

To validate the entitlement details for your software, configure the following properties in the Helm chart:

```yaml

# License Manager Configuration
  licenseManager:
    # Configures if this environment is a production environment.
    # For non production environments sessions are not counted but the license
    # is still validated.
    productionEnvironment: true
    # MHS License Server URI
    licenseServerUri: "https://api.hcltechsw.com"
    # Custom Deployment key secret for MHS deployment instance
    customMhsDeploymentKeySecret: ""
    # Deployment key for MHS deployment instance
    mhsDeploymentKey: ""

```

-   `productionEnvironment`: Set to `true` to send usage reports to MHS. For other environments (for example, test or UAT), set to `false`.
-   `licenseServerUri`: Set to the MHS License Server URI (`https://api.hcltechsw.com`).
-   `customMhsDeploymentKeySecret`: The name of a secret that has been created and contains the deployment key in a data element called `deploymentKey`. Use a secret for production environments or in any situation where you prefer not to store the deployment key directly in `values.yaml`.
-   `mhsDeploymentKey`: A unique identifier for a specific deployment of DX, against which the usage information for that environment is reported. You can generate a deployment and its associated deployment key for each environment in which you enable License Manager within the [My HCLSoftware portal](https://my.hcltechsw.com/){target="_blank"}. Put the deployment key in this value element for non-production environments or in situations where storing the key directly in `values.yaml` is acceptable.

To create a custom secret, run the following command:

```sh
# Sample command for creating a custom secret
kubectl create secret generic <secret-name> --from-literal=deploymentKey=<deploymentKey> --namespace=<namespace>
```

See the following secret produced by the command:

```yaml
apiVersion: v1
data:
  deploymentKey: <deploymentKey> # base64 encoded version of <deploymentKey> from the command
kind: Secret
metadata:
  name: <secret-name>
  namespace: <namespace>
type: Opaque
```

## Validating the DX Cloud Native 9.5 deployment entitlement

To validate your entitlement, you must check the logs generated by the License Manager component. The following sample command uses `kubectl` to fetch the logs from a specific pod within a Kubernetes namespace.

```sh
 #Example to get logs:
 kubectl logs pod/dx-deployment-license-manager-0 --namespace=<namespace>
``` 

### Expected logs

This section shows what a successful entitlement check should look like. The logs should indicate a successful connection to the entitlement server, as illustrated in the following example:

```log
INFO: The connection to the entitlement server is successful. You have a valid HCL Digital Experience Cloud Native 9.5 entitlement. HCL DX Cloud Native 9.5 server starts.
INFO: Starting session count of the license manager
INFO: License validity: true
```