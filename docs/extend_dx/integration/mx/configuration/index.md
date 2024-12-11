# Configuring HCL Volt MX Foundry for integration with HCL Digital Experience

This topic provides information on how to configure Ingress for HCL Digital Experience (DX) for integration with HCL Volt MX Foundry.

### Prerequisite
Install HCL Digital Experience (DX).  For more information, see [Deploying DX](../../../../deployment/index.md#deploying-dx).

### Configuring Ingress for HCL DX
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


### Verifying the deployment
To test a local deployment that does not include High Availability (HAproxy), access DXConnect by specifying the container port in the following URL:
          ```
          https://<localhost>:10202/hcl/dxconnect/processHandler/version
          ```
If the target environment includes HAproxy, access DXConnect with the following URL:
          ```
          https://<host-name>/hcl/dxconnect/processHandler/version
          ```
Make sure to replace the `<host-name>` value.

When all services and pods are running, access the Volt MX Foundry admin console using the following URL. Update the `<host-name>` accordingly.

```https://<host-name>/mfconsole```

!!! important
    If Ingress is enabled for DX, modify the upload size restriction by running `kubectl -n dxns edit ingress/custom-routes`. Add `nginx.ingress.kubernetes.io/proxy-body-size: <size-restriction>m` to increase the upload size restriction. Make sure to specify your preferred size in the `<size-restriction>` value.  For example, to increase the restriction to 8 MB, add `nginx.ingress.kubernetes.io/proxy-body-size: 8m`.
    
     
After applying the configuration, both HCL Digital Experience and HCL Volt MX Foundry can be accessed using the provided hostname.
