# HCL Digital Experience Cloud Native 9.5 entitlement checks

The [HCL Software License Portal](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0073344) supports entitlement checking for several HCL Software solutions, including the [HCL Digital Experience (DX) Cloud Native 9.5 Tier 1 – 7 offerings](https://blog.hcltechsw.com/digital-experience/introducing-new-hcl-digital-experience-cloud-native-9-5-bundle-with-user-session-pricing/) in the HCL DX portfolio. By checking entitlements, you can track purchased software entitlement periods and usage levels. 

## Overview
Beginning with [HCL DX 9.5 Container Update CF207](../../../../whatsnew/cf20/newcf207.md), if you deploy DX to supported Kubernetes platforms you must specify certain entitlement check parameters in [HCL Digital Experience Cloud Native 9.5 Tier 1 – 7](../../../../get_started/product_overview/offerings.md#hcl-digital-experience-cloud-native) installations to accomplish entitlement checks. If you do not specify these entitlement check parameters or fail to configure them correctly, then the entitlement check will not pass and software access will enter the grace period. To learn more about the various entitlement check scenarios, see [HCL DX Cloud Native 9.5 entitlement check scenarios](entitlement_checks_scenarios.md).

Optionally, you can [configure a local FlexNet entitlement server](./configuring_local_flexnet_entitlement_server.md) for enhanced control over the security of entitlement checks in your environments. With this option, you can dedicate a computer to act as a local FlexNet entitlement server. You can remain in entitlement compliance without the need for outbound connections to the HCL-hosted FlexNet entitlement service from your HCL DX Cloud Native 9.5 Kubernetes installations.

A local FlexNet entitlement server can also be configured to function without outbound connections. You can accomplish this configuration by using the offline version of the HCL FlexNet Embedded License Server. With outbound connections disabled, however, a member of your development team must manually update the entitlement server periodically, to verify entitlement with HCL. See [Configuring a local FlexNet License Server](configuring_local_flexnet_entitlement_server.md) for more information.

During the grace period, errors are displayed in the DX Kubernetes deployment server logs. If you encounter these errors, contact HCL Support to resolve the issue. For more information about FlexNet user and device management, see the [What is the HCL License & Delivery Portal (FlexNet Portal?)](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0073344) knowledge article on the HCL Customer Support portal.

!!!note
    Entitlement checking is not implemented in HCL DX Cloud Native v9.5 software that is deployed to supported specified Operating Systems (for example, Windows, Linux or IBM AIX). Customers deploying HCL DX Cloud Native v9.5 software to these platforms should plan to measure and report the total number of User Sessions consumed per contract year, in accordance with the terms of the [HCL DX Cloud Native v9.5 license](https://www.hcltechsw.com/wps/wcm/connect/61f40a7e-d2ca-42d4-b24c-d5adfd4fe54d/HCL+Digital+Experience+Cloud+Native+v9.5.pdf?MOD=AJPERES&CONVERT_TO=url&CACHEID=ROOTWORKSPACE-61f40a7e-d2ca-42d4-b24c-d5adfd4fe54d-ofP.t-Y).  

Customers can use web analytics reporting software such as Google Analytics to track user session consumption in their DX v9.5 production deployments. For more information, see [Integrate Google Analytics with HCL Digital Experience](../../../../build_sites/site_analytics/google_analytics/index.md). In addition, customers that have deployed DX 9.5 to supported Kubernetes platforms can use the HCL DX 9.5 user session tracking and reporting to monitor user sessions over a specified time period. For more information, see [Tracking user session consumption and exporting usage reports](export_usage_report.md).

## Prerequisites
The following elements are the prerequisites for configuring the DX Cloud Native V9.5 entitlements to be deployed to supported Kubernetes platforms on your HCL FlexNet License and Delivery Portal instance for entitlement checking:  

-   HCL Software Account and access to the [HCL Software License & Delivery Portal](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0073344). 
-   A valid [HCL DX Cloud Native 9.5 (Tier 1 – 7)](https://www.hcltechsw.com/wps/wcm/connect/61f40a7e-d2ca-42d4-b24c-d5adfd4fe54d/HCL+Digital+Experience+Cloud+Native+v9.5.pdf?MOD=AJPERES&CONVERT_TO=url&CACHEID=ROOTWORKSPACE-61f40a7e-d2ca-42d4-b24c-d5adfd4fe54d-n-MmIad) offering parts have been purchased and issued by the HCL Software licensing team.
-   Your DX Cloud Native 9.5 (Tier 1 – 7) entitlements are mapped to your HCL Software License portal instances. 
    ![DX Cloud Native 9.5 (Tier 1 – 7) entitlements](../../software_licensing_portal/_img/DX_cloud_native_entitlements.png)
See the "How to check your entitlements" and "Map entitlements" sections in: [What is the HCL Software License & Download Portal?](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0073344#a8) for guidance in locating and mapping your entitlements on your deployment servers.
-   A plan you must implement to deploy or update an [HCL DX 9.5 Container Update CF207](../../../../whatsnew/cf20/newcf207.md) or later release. 

Review the architecture that presents the License Manager component of HCL DX v9.5 Container Update software, which follows in the next section.

## Architecture
The License Manager component communicates with the HCL FlexNet server to validate license entitlement at set periods for HCL Digital Experience Cloud Native V9.5 Tier 1 – 7 software after you configure it in the DX Cloud Native 9.5 deployment Helm chart. The License Manager component also transmits user session consumption from your production DX Cloud Native 9.5 deployments to their specific FlexNet entitlements dashboard.

![](../../software_licensing_portal/_img/DX_95_container_update_software_architecture_license_manager_component.png)

Follow the configuration steps in the following procedure before you deploy a new or update an existing DX 9.5 Container deployment. By completing these steps, you configure the DX Cloud Native 9.5 Tier 1 – 7 deployment a Helm chart and enable the License Manager entitlement-checking functions.  

## Procedure
1. Obtain access to the [HCL License and Delivery Portal](https://hclsoftware.flexnetoperations.com/flexnet/operationsportal/startPage.do) for your organization. There, you can download the Flexnex entitlement server software and manage your FlexNet entitlement user names, passwords, and device IDs. Entitlement verification is performed against the HCL-hosted FlexNet entitlement server.

    !!!important
        For remote entitlement checks to succeed, ensure that your system and network firewalls allow for outbound connections to `hclsoftware.compliance.flexnetoperations.com`.

2. Configure your [HCL DX Cloud Native 9.5](../../../../get_started/product_overview/offerings.md#hcl-digital-experience-cloud-native) software for entitlement checks by making adjustments to your HCL DX [deployment Helm chart](../../../../get_started/plan_deployment/container_deployment/index.md). You can make these adjustments to a new or existing deployment.

3. Look for the following information to configure in the DX 9.5 Container Update CF207 or later Helm chart to enable License Manager and FlexNet entitlement checking:

You must configure these properties to your entitlements to the applicable **DX Cloud Native 9.5 Tier 1 – 7 offering parts** that you have previously mapped to your HCL Software server devices defined on the HCL Software License Portal. See the [Pre-requisites](#prerequisites) section for instructions.

    ```yaml
    # License Manager Configuration Controls which application is deployed and configured
    applications:
      # License Manager
      # If using the HCL DX 9.5 Cloud Native Tier 1 – 7 software and licensing you are required to set this to true.
      # The License Manager service manages the license requirements for your DX deployment.
      licenseManager: <boolean>
    configuration:
      # License Manager Configuration
      licenseManager:
          # Configures if this environment is a production environment. 
          # For non production environments user sessions are not counted but the license 
          # must still be validated.
          productionEnvironment: true
          # Flexnet License Server ID
          licenseServerId: "LICENSE_SERVER_ID"
          # Flexnet or MHS License Server URI
          licenseServerUri: "LICENSE_SERVER_URI"
          # Flexnet License Server's Configured Features
          licenseFeatureNameWithVersion: "LICENSE_SERVER_FEATURE_WITH_VERSION"
          # Flexnet License Username
          licenseManagerUser: "LICENSE_USERNAME"
          # Flexnet License Password
          licenseManagerPassword: "LICENSE_PASSWORD"
          # Deployment key for MHS deployment instance
          deploymentKeySecret: ""

    ```

    By using entitlements and device properties that you defined through the mapping process, you will configure those properties to your Helm chart to validate the entitlement period for your software. After completion, your DX 9.5 Container Update 207 and higher deployments verifies the entitlement period is valid for your [HCL DX Cloud Native 9.5 Tier 1 – 7](../../../../get_started/product_overview/offerings.md#hcl-digital-experience-cloud-native) subscription entitlements.

5. Configure the following items of your DX 9.5 Container Update CF207 or later Helm chart according to the DX Cloud Native 9.5 entitlements (Tier 1 – 7) that you are entitled to and have mapped to your HCL FlexNet Server instance:

    - `productionEnvironment:true` - Configure this variable to true if this deployment will be used to support a Production deployment. See the [HCL DX 9.5 license document](https://www.hcltechsw.com/wps/wcm/connect/61f40a7e-d2ca-42d4-b24c-d5adfd4fe54d/HCL+Digital+Experience+Cloud+Native+v9.5.pdf?MOD=AJPERES&CONVERT_TO=url&CACHEID=ROOTWORKSPACE-61f40a7e-d2ca-42d4-b24c-d5adfd4fe54d-n-MmIad) for the definitions of production and non-production deployments. 
    - `licenseServer ID` – Set to your HCL FlexNet Software licenseServer ID.
    - `licenseServer URL` – Verify your connection to the HCL FlexNet Server URL. Ensure that your system and network firewalls allow outbound connections to hclsoftware.compliance.flexnetoperations.com.
    - `licenseFeatureNameWithVersion` – Configure this variable according to the [HCL DX Cloud Native 9.5 Tier 1 – 7](../../../../get_started/product_overview/offerings.md#hcl-digital-experience-cloud-native) offering part your organization has acquired and that is mapped to your HCL FlexNet server instances. See HCL DX Cloud Native 9.5 Tier 1 – 7 parts and FlexNet License Server Feature Name table that follows.
    - `licenseManagerUser` – Configure this variable with the user name of the administrator who is authenticated to manage your HCL Software License Portal entitlements. 
    - `licenseManagerPassword` – Configure this variable with the password associated with the user name of the administrator to manage your HCL Software License Portal entitlements that you defined in the previous step.

6. (Optional) [Create and upload a public/private key pair](#securing-license-server-communication-for-the-license-manager-application). The License Manager uses a default key when no custom key is configured.

**HCL DX Cloud Native 9.5 Tier 1 – 7 parts and HCL FlexNet License Server Feature Name**

| HCL Digital Experience Cloud Native 9.5 Part Description Part Number | Part Number | Feature Name |
| ----------- | ----------- | ----------- |
| HCL Digital Experience Cloud Native Tier 1, 12 Month Term License & S&S, 1-500K User Sessions|TN100928Y01|DXPN_CloudNative_Tier1_500K@9.5 |
| HCL Digital Experience Cloud Native Tier 2, 12 Month Term License & S&S, 500K-2M User Sessions|TN100929Y01|DXPN_CloudNative_Tier2_2M@9.5|
| HCL Digital Experience Cloud Native Tier 3, 12 Month Term License & S&S, 2M-6M User Sessions|TN100930Y01|DXPN_CloudNative_Tier3_6M@9.5|
| HCL Digital Experience Cloud Native Tier 4, 12 Month Term License & S&S, 6M-12M User Sessions|TN100931Y01|DXPN_CloudNative_Tier4_12M@9.5|
| HCL Digital Experience Cloud Native Tier 5, 12 Month Term License & S&S, 12M-24M User Sessions|TN100932Y01|DXPN_CloudNative_Tier5_24M@9.5|
| HCL Digital Experience Cloud Native Tier 6, 12 Month Term License & S&S, 24M-60M User Sessions|TN100933Y01|DXPN_CloudNative_Tier6_60M@9.5|
| HCL Digital Experience Cloud Native Tier 7, 12 Month Term License & S&S, 60M-120M User Sessions|TN100934Y01|DXPN_CloudNative_Tier7_120M@9.5|

Example values configured to an HCL DX Cloud Native 9.5 deployment Helm chart follow:  

```yaml
configuration:
# License Manager Configuration
  licenseManager:
    # Configures if flexnet license checking is enabled
    productionEnvironment: true
    # Flexnet License Server ID
    licenseServerId: "Q8A6YCZ3A4GH"
    # Flexnet License Server URL
    licenseServerUri: "https://hclsoftware.compliance.flexnetoperations.com"
    # Flexnet License Server's Configured Features
    licenseFeatureNameWithVersion: "DXPN_CloudNative_Tier1_500K@9.5"
    # Flexnet License Username
    licenseManagerUser: "admin"
    # Flexnet License Password
    licenseManagerPassword: "mypassword"
    # Deployment key for MHS deployment instance
    deploymentKeySecret: "aQDALT7QJVU9V8KESqvi4xE0TBwdNgWIdbm1Gt2OfodEe5QEZLr55Srxs9sM"
```

!!!reminder
    These properties must be configured to your Helm chart **before** you install the environment. If you're changing the environment, configure the properties before you start the DX 9.5 ContainerUpdate 207 or later Helm upgrade to your HCL Digital Experience Cloud Native 9.5 production or non-production deployment. For more information about the Helm configuration steps to manage DX 9.5 Container Update upgrades, see [Upgrade the Helm deployment to the latest version](../../../../deployment/install/container/helm_deployment/update_helm_deployment.md).

## Results
Your HCL DX Cloud Native 9.5 environments are configured for entitlement checks that will validate that your deployment software remains in the purchased timeframe. 

Ensure that your entitlement checks succeed by viewing your HCL DX 9.5 Container Update Server License Manager pod logs.

Use kubectl logs for the license manager pod. For example, in a namespace dxns, run the following command: 

```
kubectl logs pod/<release-name>-license-manager-0 -n <namespace>
```

See the HCL DX Cloud Native 9.5 entitlement check scenarios for success and error messages and how to manage them: [HCL Digital Experience Cloud Native 9.5 entitlement check scenarios](entitlement_checks_scenarios.md). 

Entitlement checking to ensure that the entitlement period for the DX Cloud Native 9.5 part is valid for the purchased term is initiated at deployment start, upgrade, or configuration-change processes. Entitlement checking also occurs once per day for active deployments. 

Refer to [Configuring a local HCL Flexnet entitlement server](configuring_local_flexnet_entitlement_server.md) topic for additional configurations needed to enable connectivity to a local license server.

## Securing License Server communication for the License Manager application

Secure communication between HCL DX and the HCL License Server (cloud or local) involves signed content that uses a public and private keypair. HCL DX signs licensing requests with the private key and the License Server verifies signatures with the corresponding public key.

!!! note
     The License Manager expects the public key to be uploaded to the License Server beforehand and the private key to be passed as a secret in the Helm values. However, if the private key is not provided, the default key is used and uploaded automatically.

### Generating a public/private keypair

You must generate a public/private keypair to be used for secure communication. The following list shows the required formats: 

- The keypair must be in “RSA 2048-bit” format. 
- The private key must be “pksc8” format. 
- The public key must be in “DER” format.

Various third-party tools are available for generating this keypair. See the documentation supplied with the third-party tool for instructions.
The following is an example of keypair generation by using OpenSSL:

```
# Generate private key 
openssl genrsa -out portal_private_key.pem 2048

# Get the public key. 
openssl rsa -in portal_private_key.pem -pubout -outform DER -out portal_public_key.der

# Convert private key to pkcs8 format to use it with HCL Portal
openssl pkcs8 -topk8 -inform PEM -outform PEM -in portal_private_key.pem -out portal_private_key_pkcs8.pem -nocrypt

```
### Uploading public key

The following instructions show you how to upload the public key to your License Server by using the provided command line tool. 

1. Get the Bearer Authentication from FlexNet by using authorize endpoint:

```sh
curl --location 'https://hclsoftware.compliance.flexnetoperations.com/api/1.0/instances/<instance ID>/authorize' \
--header 'Content-Type: application/json' \
--data-raw '{"password":"XXXXXXX","user":"XXXXXXX"}'

```
Response from authorize endpoint:

```JSON
{
    "expires": "2023-12-19T05:39:28.850Z",
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlzcyI6IlE4QTVZQ1ozQTRHSCIsImlhdCI6MTcwMjg3Nzk2OCwiZXhwIjoxNzAyOTY0MzY4LCJyb2xlcyI6IlJPTEVfQURNSU4sUk9MRV9EUk9QQ0xJRU5ULFJPTEVfUkVBRCxST0xFX1JFU0VSVkFUSU9OUyIsInhzcmZUb2tlbiI6IjRmOWRjMGFkLWQ1MGMtNGZhZi05YmE0LTc0N2ZmMjJjODQ0MiJ9.mvuXXJNfew-WzJ7CX8Y8yH339zX3SNpaX79jMTu-shanE8nHPfZRA240EAsVO64nMxFAPyr_8gP7JOLRQ2XOeA"
}
```

2. Upload the public key to the FlexNet server:

```sh
curl --location 'https://hclsoftware.compliance.flexnetoperations.com/api/1.0/instances/<instance ID>/rest_licensing_keys' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlzcyI6IlE4QTVZQ1ozQTRHSCIsImlhdCI6MTcwMTk0NTY5NCwiZXhwIjoxNzAyMDMyMDk0LCJyb2xlcyI6IlJPTEVfQURNSU4sUk9MRV9EUk9QQ0xJRU5ULFJPTEIOPKLVBRCxST0xFX1JFU0VSVkFUSU9OUyIsInhzcmZUb2tlbiI6IjI0MjRiOTgwLWY2ZDEtNGViYi04NWQ5LTI3YmQzMTJmYzIwZiJ9.JR0fnMZyyMY4wwPtE9kMWD2kvbxLgBplq2X-wgmYpe7COFW-5IVvdLmdaRvb0AydSKHf3DKPDGVrd2dubr9Lbw' \
--header 'Content-Type: application/octet-stream' \
--data '@/Flexnet-release/portal_public_key.der'
```
Response from FlexNet server:

```JSON
{
    "publicKey": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAUUUIPHJnjgPOMnbqsjqsL29p313tvMpV0QjIDT03traV3v4UnUuIrIYmYPerzQJsVzoKZHU0IYA9FZTLXP4uJMPTwNJhDVtbki5Fbx4h9U2c7h78QCFne07kdtAeBh0keReFklpj7CJbOi4RhqSX6uaZ/gBOg+RMT6/q9Oxkry31WvqISNWlAXmyfNQTo/GMUe4dKpbEBGPOLKRESHlBXnqrqPw+EqlrJDiJSr/TIfLokm8qFLSzBwYahhi6L0gnLmnuEPPfkxFwhjaSjdb336dVGzkRc1AsS9L0TDTtQBzUxkL6cIW+EzxXOyWnT2ekcFMripuyXBG80UkhXKTVpRwj/nXeXQIDAQAB"
}

```

### Helm Chart configuration to enable the private key in License Manager deployment
 
1. Create your secret using a private Key:

 ```sh
 kubectl create secret generic <secret name> --from-file=privateKey=portal_private_key_pkcs8.pem -n <namespace>
 ```
2. Refer to the secret in helm values in yaml:

 ```yaml
 security:
   licenseManager:
     customFlexnetLicenseManagerPrivateKeySecret: <secret name>
 ```

!!! note
     For multiple instances that run with the same entitlement and license server, all instances must conform to one of the following criteria:
     - They use the same private key.
     - They do not have a private key configured.

### Revoking of public key from FlexNet

If you have to revoke the public key from FlexNet, complete the following steps. To complete the revocation process, you must provide the Bearer Authentication token to authenticate the request. Without the token, the revocation you cannot complete the process.

1. Get the Bearer Authentication from Flextnet by using authorize endpoint:

```sh
curl --location 'https://hclsoftware.compliance.flexnetoperations.com/api/1.0/instances/<instance ID>/authorize' \
--header 'Content-Type: application/json' \
--data-raw '{"password":"XXXXXXX","user":"XXXXXXX"}'

```
Response from authorize endpoint:

```JSON
{
    "expires": "2023-12-19T05:39:28.850Z",
    "token": "eyJ0eXAiOiJKV1QiLCJhbXXXYYYUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlzcyI6IlE4QTVZQ1ozQYUPLFWNUISQACIsImlhdCI6MTcwMjg3Nzk2OCwiZXhwIjoxNzAyOTY0MzY4LCJyb2xlcyI6IlJPTEVfQURNSU4sUk9MRV9EUk9QQ0xJRU5ULFJPTEVfUkVBRCxST0xFX1JFU0VSVkFUSU9OUyIsInhzcmZUb2tlbiI6IjRmOWRjMGFkLWQ1MGMtNGZhZi05YmE0LTc0N2ZmMjJjODQ0MiJ9.mvuXXJNfew-WzJ7CX8Y8yH339zX3SNpaX79jMTu-shanE8nHPfZRA240EAsVO64nMxFAPyr_8gP7JOLRQ2XOeA"
}
```
2. Use DELETE endpoint to revoke the public key:

```sh
curl --location --request DELETE 'https://hclsoftware.compliance.flexnetoperations.com/api/1.0/instances/<instance ID>/rest_licensing_keys' \
--header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlzcyI6IlE4QTVZQ1ozQTRHSCIsImlhdCI6MTcwMzQ5ODg0MywiZXhwIjoxNzAzNTg1MjQzLCJyb2xlcyI6IlJPTEVfQURNSU4sUk9MRV9EUk9QQ0xJRU5ULFJPTEVfUkVBRCxST0xFX1JFU0VSVkFUSU9OUyIsInhzcmZUb2tlbiI6IjJlYTNjM2U3LWQ3MDEtNDFjMS05NWQ2LWEyOTMzZjBlNTQwNyJ9.u8ZAF4SpBoLucxPA0WaEtcDkuQVT3ZCGx-qAtHYbcZDD%YYBBzqvYWkxN3fTRHjNRKE0idV8bh5Zs75KSvU9A'
```
Expected status: `410 Gone`
