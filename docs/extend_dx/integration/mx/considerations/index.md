# Considerations and limitations

This topic lists down the things to consider when integrating HCL Volt MX Foundry with HCL Digital Experience (DX).

## Volt MX on Cloud

Make sure to configure [CORS](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Runtime_Configuration.html#cors-configuration){target="_blank"} while setting up [single sign-on](../configuration/index.md#enable-sso-for-dx-and-mx) (SSO).

## Volt MX Foundry and HCL DX in the same deployment

HCL Volt MX Foundry uses ingress. If HCL DX is deployed on the same deployment, the ingress routing should be used. For more information, refer to [Configuring Ingress for HCL Digital Experience and HCL Volt MX Foundry](../configuration/index.md#configuring-ingress-for-hcl-digital-experience-and-hcl-volt-mx-foundry).

## Limitations

- Portlets built with Iris support multiple languages for content rendering. However, you can only use the English version of the portlet name to search for the portlet when adding it to the HCL DX page.
- The default language for the portlet is still English and not the configured default DX portal language.
- Portlets built with Iris are not rendered when in Edit Mode.
- In multi-column layout pages, ensure the web app designed in Iris stays within the allowed width and height to avoid data truncation. Refer to [Use Rulers and Guides for the Desktop Channel](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Iris/iris_user_guide/Content/UseRulersAndGuidesforDesktopChannel.html#show-or-hide-rulers){target="_blank"} for more information. 

