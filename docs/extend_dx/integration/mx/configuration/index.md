# Configuring HCL Volt MX Foundry for integration with HCL Digital Experience

## Configuring Ingress for HCL Digital Experience and HCL Volt MX Foundry

As a pre-requisite, HCL DX needs to be installed already. Use the below link to install HCL DX and configure ingress

[Install HCL DX](../../../../deployment/index.md#deploying-dx)

You can use an [optional Ingress](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress.md) with HCL Digital Experience. While an Ingress is not required to run HCL Digital Experience, it can be configured to be reused by HCL Volt MX Foundry to handle the routing for both products and make them available on the same host.

1. Set up the Ingress for HCL Digital Experience. For more information, refer to the [optional Ingress documentation](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress.md).
2. Configure HCL Volt MX Foundry to use the existing Ingress controller. The following sample values for HCL Volt MX Foundry configure the Ingress to use an SSL connection using the provided custom certificates. 
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
         
     Refer to the [HCL Volt MX Foundry Configuration documentation](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmxfoundry_containers_helm/Content/Installing_Containers_With_Helm.html#configuration) for more details on the used values.


### Verification
When testing with a local deployment that does not include haproxy, access DXConnect by specifying the container port with a URL of the form [https://localhost:10202/hcl/dxconnect/processHandler/version](https://localhost:10202/hcl/dxconnect/processHandler/version). If the target environment includes haproxy, then access via [https://host-name/hcl/dxconnect/processHandler/version](https://host-name/hcl/dxconnect/processHandler/version) and replace the host-name part as appropriate.

Once all services and pods are up and running, the MX Foundry admin console can be accessed as below after updating host-name accordingly:-

[https://host-name/mfconsole](https://host-name/mfconsole) 

!!! important
      If ingress is enabled for DX, then upload size restriction needs to be modified by executing kubectl -n dxns edit ingress/custom-routes.
      Add `nginx.ingress.kubernetes.io/proxy-body-size: 8m` to increase it to 8 MB (Use desired value).
    
     
After applying the configuration, both HCL Digital Experience and HCL Volt MX Foundry can be accessed using the provided hostname.
