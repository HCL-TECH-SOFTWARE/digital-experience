---
title:  My HCLSoftware delivery portal entitlement checking
---

# My HCLSoftware delivery portal entitlement checking
My HCLSoftware (MHS) provides seamless access to various customer-facing systems such as Downloads, Software Entitlements, eCommerce, Support, Subscriptions, Account Management, Marketplace, and more.

## Prerequisites
The following elements are the prerequisites for configuring the HCL DX Cloud Native V9.5 entitlements to be deployed on supported Kubernetes platforms using My HCLSoftware delivery portal for entitlement checking:  

-   My HCLSoftware account and access to the [My HCLSoftware](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0109011) portal.
-   A valid [HCL DX Cloud Native 9.5 (Tier 1 – 7)](https://www.hcltechsw.com/wps/wcm/connect/61f40a7e-d2ca-42d4-b24c-d5adfd4fe54d/HCL+Digital+Experience+Cloud+Native+v9.5.pdf?MOD=AJPERES&CONVERT_TO=url&CACHEID=ROOTWORKSPACE-61f40a7e-d2ca-42d4-b24c-d5adfd4fe54d-n-MmIad) offering part purchased and issued by the HCL Software licensing team.
-   Your DX Cloud Native 9.5 (Tier 1 – 7) entitlements are mapped to your My HCLSoftware portal instances.  
   
-   A plan to deploy or update to [HCL DX 9.5 Container Update CF226](../../../../whatsnew/cf20/newcf226.md) or later release, if currently using a prior version.

-   Create a deployment in [My HCLSoftware](../../software_licensing_portal/configure_entitlement_checks/create_deplyment_mhs_ui.md).

Review the architecture that presents the License Manager component of HCL DX v9.5 Container Update software, which follows in the next section.

## Architecture
The License Manager component communicates with the My HCLSoftware entitlement service, to validate license entitlement at set periods for HCL Digital Experience Cloud Native V9.5 Tier 1 – 7 software after you configure it via the DX Cloud Native 9.5 deployment Helm chart. The License Manager component also transmits user session consumption from your production DX Cloud Native 9.5 deployment(s) to the My HCLSoftware usage reporting services.

![](../../software_licensing_portal/_img/DX_95_container_license_manager_arch_mhs.png) 

Follow the configuration steps in the following procedure before you deploy a new or update an existing DX 9.5 Container deployment. By completing these steps, you configure the DX Cloud Native 9.5 Tier 1 – 7 deployment a Helm chart and enable the License Manager entitlement-checking functions.  

## Procedure
The below properties must be configured to your entitlements, you will configure those properties in your Helm chart to validate the entitlement details for your software.

```yaml

# License Manager Configuration
  licenseManager:
    # Configures if this environment is a production environment.
    # For non production environments sessions are not counted but the license
    # is still validated.
    productionEnvironment: true
    # MHS License Server URI
    licenseServerUri: ""
    # Custom Deployment key secret for MHS deployment instance
    customMhsDeploymentKeySecret: ""
    # Deployment key for MHS deployment instance
    mhsDeploymentKey: ""

```

-   `productionEnvironment`: Set to true to send usage reports to MHS, and for other environments (e.g. test or UAT), set to false.
-   `licenseServerUri`: MHS License Server URI
-   `customMhsDeploymentKeySecret`: The deployment key creates a custom secret name. Any method can use `customMhsDeploymentKeySecret` or `mhsDeploymentKey` for the deployment key. 
-   `mhsDeploymentKey`: Credentials for product deployments. Any method can use `customMhsDeploymentKeySecret` or `mhsDeploymentKey` for the deployment key. This can be optained from [My HCLSoftware Portal](https://my.hcltechsw.com/)

```sh
#Example to create custom secret
kubectl create secret generic <secret-name> --from-literal=deploymentKey=<deploymentKey> --namespace=<namespace>
```

