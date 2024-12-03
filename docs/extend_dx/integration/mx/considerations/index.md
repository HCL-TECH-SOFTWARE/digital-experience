# Considerations

## Volt MX on Cloud

Ensure to configure [CORS](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Runtime_Configuration.html#cors-configuration) while setting up [SSO](../configuration/index.md#enable-sso-for-dx-and-mx)

## Volt MX Foundry and HCL DX in same deployment

MX uses ingress and hence if HCL DX is deployed on the same deployment, the ingress routing should be used. Please refer this [link](../configuration/index.md#configuring-ingress-for-hcl-digital-experience-and-hcl-volt-mx-foundry) for more details

## Limitations

1. Though portlets built with Iris support multiple languages for content rendering, only the English version of the portlet name can be used to search for it while adding it to the HCL DX page.
2. Default Language for the portlet would be still english and not the configured default DX portal language.

