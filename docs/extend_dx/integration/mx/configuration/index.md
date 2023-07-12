# HCL MX Foundry configuration for the integration with HCL Digital Experience

## Configure Ingress for HCL Digital Experience and HCL MX Foundry

HCL Digital Experience allows for the use of an [optional Ingress](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress.md). While this is not required to run HCL Digital Experience, when configured it can be reused by HCL MX Foundry to handle the routing for both products and make them available on the same host.

1. Setup the Ingress for HCL Digital Experience according to the [optional Ingress documentation](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress.md).
2. Configure HCL MX Foundry to use the existing Ingress controller. The following example values for HCL MX Foundry configure the Ingress to use an SSL connection using the provided custom certificates. 
     - The certificate in `customCert` must match the certificate used for the Ingress configuration of HCL Digital Experience. The `cer` and `key` file must be located in the `apps/certs` directory of the MX Helm chart.
     - The `class` in this configuration refers to the class name of the deployed Ingress controller.
     - The `serverDomainName` must match the hostname that the Ingress is available at:
    
         ```yaml
         ingress:
           enabled: true
           protocol: "https"
           port: "443"
           class: "nginx"
           tls:
             enabled: true
             customCert:
               cert: "certs/your-ssl-cert.cer"
               key: "certs/your-ssl-cert.key"
         serverDomainName: "your-mx-and-dx-host.com"
         ```
         
     Refer to the [HCL MX Foundry Configuration documentation](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmxfoundry_containers_helm/Content/Installing_Containers_With_Helm.html#configuration) for more details on the used values.
3. After applying the configuration, both HCL Digital Experience and HCL MX Foundry should be accessible using the provided hostname
