# How to Use HCL DX APIs in HCL Volt MX Foundry

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

This guide explains how to integrate **HCL DX APIs** into **HCL Volt MX Foundry** using the new HCL DX [Content Adapter](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/CustomDataConfig.html)), available starting with CF218. This adapter allows Volt MX users to consume WCM REST V2 endpoints through custom integration services, providing access to all available DX Experience API endpoints with predefined request and response schemas.

## Prerequisites

To follow this guide, ensure you have:

* An **HCL DX environment** with WCM REST V2 APIs.
* **HCL Volt MX Foundry** (SaaS or Helm deployment).
* Access to the [HCL Volt MX Marketplace](https://marketplace.hclvoltmx.com/items/hcl-dx-content-adapter).
* An **OIDC-based Identity Provider** configured for DX.
* **Administrator access** to WebSphere and Volt MX Foundry.

## Instructions

### Step 1: Import the HCL DX Content Adapter into Volt MX Foundry

#### SaaS Deployment

1.  Open the **Volt MX Foundry UI**.
2.  Navigate to: `API Management > Custom Data Adapters`
3.  Click **Marketplace**, search for "HCL DX Content Adapter", and click **Import**.

    Refer to: [How to Consume a Custom Data Adapter from Marketplace](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Iris/iris_tutorials/Content/Module/consuming_data_adapter_from_marketplace.html)

#### Helm Deployment

1.  Download the adapter from the [Marketplace](https://marketplace.hclvoltmx.com/items/hcl-dx-content-adapter).
2.  Go to: `API Management > Custom Data Adapters > Import`
3.  Upload the adapter manually.

    ![alt text](./MXImportAdapter.png)

    !!!note
        Ensure the adapter version matches your HCL DX deployment version.

### Step 2: Prepare the HCL DX Environment

1.  Use an [OIDC Identity Provider](./../../../../deployment/manage/security/people/authentication/oidc/index.md) for authentication in DX.
2.  Update WCM REST V2 API settings:
    * Open WebSphere Console
    * Navigate to: `Security > Global Security > Web and SIP Security > Trust Association > Interceptors > HTTPBasicAuthTAI`
3.  Remove or clear `urlWhiteList` if it contains `/wps/mycontenthandler*`.
4.  Restart WebSphere or all DX core pods.

    This enables Volt MX to authenticate against the same identity provider used by DX.

### Step 3: Prepare the HCL Volt MX Foundry Environment

* In Volt MX Foundry, configure an [OAuth 2.0 Identity Provider](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Identity10_VoltMX_OAuth2.html).
* Use the same identity provider used in DX to ensure seamless SSO and API authorization.

### Step 4: Create an Integration Service Using the DX Content Adapter

1.  In Volt MX Foundry, go to **Integration Services** and click **Create New**.
2.  Choose the **WCM V2 DX Content Adapter** as the **Service Type**.
3.  For the **Server URL**, set the URL to your HCL DX environment. For example, `https://<your DX hostname>/wps/mycontenthandler/wcmrest-v2/`.
4.  Choose the OAuth Identity Provider configured earlier under **Authentication**.
5.  Click **Save & Add Operation**.

    ![alt text](./MXServiceCreation.png)

### Step 5: Add and Test Operations

1.  After creating the service, click **Add Operation** to select available endpoints from WCM REST V2.
2.  Configure request parameters and click **Save and Fetch response** to test.

    ![Test Operation](./MXTestOperation.png)

3.  Log in using your identity provider credentials.
4.  Confirm the response returns valid data.

## Result

You now have access to DX Experience APIs within Volt MX through the custom content/data adapter integration.

## Additional Resources

* [WCM V2 API Documentation](https://opensource.hcltechsw.com/experience-api-documentation/wcm-api/)
* [Configure Integration Service](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/ConfigureIntegrationService.html)
* [Advanced Configurations](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Advanced_Configurations.html)

## Support

Support for this feature is not available in the HCL Support Center. For questions and issues, reach out either in the [DXers - The HCL DX User Group](https://ptb.discord.com/channels/787019554173485067/992504153328861184) on Discord, the [HCL DX forum](https://support.hcltechsw.com/community?id=community_forum&sys_id=02c5dcf01b32f70cc1f9759d1e4bcb43) or in the [Volt MX Marketplace Forum](https://support.hcltechsw.com/community?id=community_topic&sys_id=941a3aabdbb43010cc426275ca961923).

## HCLSoftware U learning materials

For an introduction and a demo on how to integrate DX with HCL Volt MX as a business user, go to [DX Integration with HCL Volt MX for Business Users](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D747){target="_blank"}. To try it out yourself, refer to [DX Integration with HCL Volt MX for Business Users Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Integration/HDX-INT-BU_DX_Integration_with_HCL_Volt_MX_for_Business_Users.pdf){target="_blank"}.

For an introduction and a demo on how to integrate DX with HCL Volt MX as a developer, go to [DX Integration with HCL Volt MX for Developers](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D1458){target="_blank"}. To try it out yourself, refer to [DX Integration with HCL Volt MX for Developers Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Integration/HDX-INT-DEV_DX_Integration_with_HCL_Volt_MX_for_Developers.pdf){target="_blank"}.

You can also use the dedicated course [HCL Volt MX Integration with HCL DX](https://hclsoftwareu.hcltechsw.com/courses/course/hvmx-int-hdx-integrate-hcl-volt-mx-with-hcl-digital-experience){target="_blank"}. This course explains the benefits of integrating HCL Volt MX with HCL DX and provides integration guidance for business users, developers, and administrators.