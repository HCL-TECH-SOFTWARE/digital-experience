# HCL Volt MX Foundry Custom Data Adapters for HCL Digital Experience APIs

> [Custom Data Adapters](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/CustomDataConfig.html) act as reusable services with a defined set of operations

The Custom Data Adapters for HCL Digital Experience allow easy access to the APIs. They allow for the creation of services in HCL Volt MX Foundry with predefined request and response schemas. All available endpoints are included in the Custom Data Adapter and can directly be used when creating services.

## Custom Data Adapter for REST service for Web Content Manager V2 (WCM REST V2)

The WCM REST V2 Custom Data Adapter includes all endpoints of the [WCM REST V2 APIs](../../../../manage_content/wcm_development/wcm_rest_v2/index.md).

### Download and import the WCM REST V2 Custom Data Adapter in HCL Volt MX Foundry

If you are using the SaaS offer of HCL Volt MX the Custom Data Adapter can be downloaded from the [HCL Volt MX Marketplace](https://marketplace.hclvoltmx.com/) directly. An instruction on how to consume a Custom Data Adapter from the Marketplace is available in [the HCL Volt MX Foundry documentation](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Iris/iris_tutorials/Content/Module/consuming_data_adapter_from_marketplace.html).

For [Helm deployments](../installation/index.md) of HCL Volt MX Foundry, the Custom Data Adapter can be downloaded from the Marketplace page in a Webbrowser and imported in the HCL Volt MX Foundry console under:

`API Management > Custom Data Adapters > Import`

!!! note
    Please make sure that the version of the Custom Data Adapter matches the version of your HCL Digital Experience deployment.

### Prepare the HCL Digital Experience environment

To make authenticated requests against the WCM V2 API, the HCL Digital Experience environment must be configured to use [an OIDC Identity Provider for authentication](../../../../deployment/manage/security/people/authentication/oidc/index.md).

Additionally, WCM REST V2 API must be configured to use the identity provider instead of Basic Authentication. To change this, access the WebSphere Administration console and navigate to:

`Security > Global Security > Web and SIP security > Trust association > Interceptors > com.ibm.portal.auth.tai.HTTPBasicAuthTAI`

Either remove `/wps/mycontenthandler*` from the `urlWhiteList` property or remove the property completely if it is the only entry. Restart the Websphere Application Server or all Core Pods after applying the change.

This will allow HCL Volt MX Foundry to use the same identity provider and forward the authentication to the backend API.

### Prepare the HCL Volt MX Foundry environment

In HCL Volt MX Foundry an [OAuth 2.0 identity provider must be set up](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Identity10_VoltMX_OAuth2.html). It must be connected to the same identity provider as the HCL Digital Experience environment.

### Create a Service using the Custom Data Adapter

To configure a new Service in HCL Volt MX Foundry using the Custom Data Adapter, follow the [HCL Volt MX Foundry Documentation](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/ConfigureIntegrationService.html) and select the newly imported WCM V2 Custom Data Adapter as the `Service Type`.

For the `Server URL` set the URL to your HCL Digital Experience environment. For example `https://<my DX hostname>/wps/mycontenthandler/wcmrest-v2/`. For `Authentication` set the Identity provider configured in the [Prepare the HCL Volt MX Foundry environment](#prepare-the-hcl-volt-mx-foundry-environment) section.

In the next step you can chose from the list of `Operations` to add the WCM REST V2 endpoints.

For additional information on HCL Volt MX Foundry Services please refer to the following documentation topics:

- [Integration introduction](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Services.html)
- [Configure Integration Service](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/ConfigureIntegrationService.html)
- [Advanced Configurations](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmx_foundry_user_guide/Content/Advanced_Configurations.html)

### Testing the Service

The HCL Volt MX Foundry console offers the option to test each operation after creating it. This can be done using the `Save and Fetch response` button at the bottom of each operation. A new window will open to authenticate with your identity provider and the result of the request is logged at the bottom of the console.
