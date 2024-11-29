# Considerations

## MX on Cloud

Ensure to configure [CORS](https://opensource.hcltechsw.com/volt-mx-docs/docs/documentation/Foundry/vmf_integrationservice_admin_console_userguide/Content/Runtime_Configuration.html#cors-configuration) while setting up [SSO](../configuration/index.md#enable-sso-for-dx-and-mx)

## MX and DX on Same environment

MX uses ingress and hence if DX is deployed on the same environment, the ingress routing should be used. Also note that, the portlet size during upload will be restricted to 1 MB and hence its necessary to modify the configuration through `kubectl -n <namespace> edit ingress/custom-routes`

```
metadata:
    annotations:
        nginx.ingress.kubernetes.io/proxy-body-size: 8m
```


## Limitations

1. Though MX Portlet supports multi language, deployed portelt will be searchable only in English while adding it to the page in HCL DX
2. Default Language for the portlet would be still english and not the configured default DX portal language.

