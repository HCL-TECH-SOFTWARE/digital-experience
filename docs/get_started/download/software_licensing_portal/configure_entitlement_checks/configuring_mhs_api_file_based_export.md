---
title: Configuring My HCL Software API and File based export
---

# Configuring My HCL Software API and File based export

My HCL Software provides seamless access to various customer-facing systems such as Downloads, Software Entitlements, eCommerce, Support, Subscriptions, Account Management, Marketplace, and more.

## Configuring MHS APIs

To begin testing with MHS APIs, you must first create a test account and deployment instances within the MHS UAT environment. Interacting with MHS APIs requires an initial refresh token, typically obtained after the initial deployment. This token is used to generate an access token, which grants temporary permissions for performing API calls.

**Prerequisites for using MHS APIs Beta**

- Contact Beta testing support (rajeshkumar_a@hcl.com) to create the test account in [MHS UAT portal](https://dmeft4t0khh41.cloudfront.net)
- Contact Beta testing support (rajeshkumar_a@hcl.com) to add the members (internal users with hcl.com domain) to the test account
- Create new deployment via MHS UI:
    - Log in to the MHS Portal UAT using your HCL ID (via Okta login) at [this URL](https://dmeft4t0khh41.cloudfront.net/)
    - Go to the Deployments tab and click Add Deployment. A new deployment will be created, labeled with a deployment prefix followed by an auto-generated name.

![](./mhs_deployments.png)

    - Click the three dots in the top-right corner of the panel to create a deployment key.
  
![](./mhs_deployment_key.png)

    - Use this unique deployment key (initial refresh token) to generate access tokens for calling MHS APIs. You can also replace the deployment key if needed.

**Accessing the MHS APIs**

You can find detailed API specifications and usage via the Global Protect VPN using the [Base URL(UAT)](https://d2kerxf8ujkcp4.cloudfront.net)

-  Obtain an Access Token using exchange API
   -  API Spec: https://github01.hclpnp.com/pages/hcl-software-bus-it/mhs-product-api/#tag/API-Keys/operation/apiKeyExchange
   -  Example (UAT): POST {Base URL}/v1/apikeys/exchange

- License Allocation API
  - API Spec: https://github01.hclpnp.com/pages/hcl-software-bus-it/mhs-product-api/#tag/License-Allocation/operation/readLicenseAllocation
  - Example (UAT): GET {Base URL}/v1/licenseallocation

- Report Usage Metering Data
  - API Spec: https://github01.hclpnp.com/pages/hcl-software-bus-it/mhs-product-api/#tag/Usage-Metering/operation/postUsageMeteringEvent
  - Example (UAT): POST {Base URL}/v1/ums
