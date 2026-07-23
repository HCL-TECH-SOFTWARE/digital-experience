# Considerations and limitations

This topic discusses things to consider when integrating HCL Volt MX Foundry with HCL Digital Experience (DX).

## Volt MX on Cloud

Ensure you configure [Cross Origin Resource Sharing (CORS)](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Runtime_Configuration.html#cors-configuration){target="_blank"} when setting up [Single Sign-On (SSO)](./configuration/enable_sso.md).

## Volt MX Foundry and HCL DX in the same deployment

HCL Volt MX Foundry uses Ingress. If HCL DX is deployed on the same deployment, Ingress routing should be used. For more information, refer to [Configuring Ingress for HCL DX](./configuration/configure_access_layer.md).

## Limitations

- Portlets built with Iris support multiple languages for content rendering. However, you can only use the English version of the portlet name to search for the portlet when adding it to the HCL DX page.
- The default language for the portlet is English rather than the configured default language in HCL DX. However, if you choose a specific language, the portlet is rendered in your chosen language.
- Portlets built with Iris are not rendered when the HCL DX page is in Edit Mode.
- [SSO](./configuration/enable_sso.md) between HCL DX and Volt MX hosts that do not share a common DNS domain is not supported.
- In multi-column layout pages, ensure the web application designed in Iris stays within the allowed width and height to avoid data truncation. For more information, refer to [Use Rulers and Guides for the Desktop Channel](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Iris/iris_user_guide/Content/UseRulersAndGuidesforDesktopChannel.html#show-or-hide-rulers){target="_blank"}.
