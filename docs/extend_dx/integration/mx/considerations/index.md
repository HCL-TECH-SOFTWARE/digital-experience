# Considerations and limitations

## Volt MX on Cloud

Make sure to configure [CORS](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Runtime_Configuration.html#cors-configuration){target="_blank"} while setting up [single sign-on](../configuration/index.md#enable-sso-for-dx-and-mx) (SSO).

## Volt MX Foundry and HCL DX in the same deployment

HCL Volt MX Foundry uses ingress. If HCL DX is deployed on the same deployment, the ingress routing should be used. For more information, refer to [Configuring Ingress for HCL Digital Experience and HCL Volt MX Foundry](../configuration/index.md#configuring-ingress-for-hcl-digital-experience-and-hcl-volt-mx-foundry).

## Limitations

- Portlets built with Iris support multiple languages for content rendering. However, you can only use the English version of the portlet name to search for the portlet when adding it to the HCL DX page.
- The default language for the portlet is still English and not the configured default DX portal language.

