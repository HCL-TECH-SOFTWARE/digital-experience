# Configuring HCL Volt MX Foundry for integration with HCL Digital Experience

## Configuring Ingress for HCL Digital Experience and HCL Volt MX Foundry

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

## Pull MX Foundry from Harbor
    - Commands to fetch MX Foundry from Harbor:-

    ```
    $ set +x -e
    $ helm repo add hclcr https://hclcr.io/chartrepo/voltmx-qa --username <harbor_username> --password <harbor_password>
    $ helm repo update
    $ helm pull hclcr/voltmx-foundry
    $ tar -xzf voltmx-foundry-*.tgz

    ```
    - Install MX Foundry
    We need to add Harbor credentials and mysql DB details in values.yaml file and run below commands install MX Foundry:-
    Navigate to voltmx-foundry

    ```
    $ cd voltmx-foundry
    ```

    Edit values.yaml

    ```
    $ vi values.yaml
    ```

    Add image pull secret

    ```yaml
    hclImagePullSecret:
    ```

    - Set values for Ingress

    ```yaml
    ingress:
      enabled: true
      # Note: If tls is enabled this setting should be https or Foundry setup will fail.
      protocol: "https"
      # Note: If tls is enabled this setting should be 443.
      port: "443"
      class: "nginx"
      annotations:
    ```
    - Provide secret name which has tls.crt and tls.key:-

    ```yaml
    customCertSecretName: "<cert_file>"
    ```

    - Add domain name for Volt Foundry (String):-

    ```yaml
    serverDomainName: "<domain_name>"
    ```

    - Update DB details:-
    Possible values, "mysql" for MySQL DB server, "sqlserver" for Azure MSSQL or SQLServer "oracle" for Oracle DB server

    ```yaml
    dbType: "mysql"
    ```

    - Set up "cluster" for a cluster database server. "standalone" for a standalone database server.

    ```yaml
    isCluster: "cluster"
    ```

    ```yaml
    dbHost: mysql
    dbPort: 3306
    dbUser: <db_username>
    dbPass: <db_password>
    dbPrefix: ""
    dbSuffix: ""
    ```
    - Set GUIDs

    ```yaml
    accountsEncryptionKey: 
    waasMasterKey: 
    waasMasterKeyId: 
    authMasterKey: 
    authMasterKeyId: 
    ```

    - Go back to the root directory

    ```
    $ cd ..
    ```

## Install MX Foundry by applying helm chart from Harbor.

    ```
    $ helm install -n <namespace> foundry hclcr/voltmx-foundry -f voltmx-foundry/values.yaml
    ```
    Check if the Ingress controller pod and service are deployed

    ```
    $ kubectl get pod -n <namespace>
    $ kubectl get service -n <namespace>
    ```

    Once all services and pods are up and running, the MX Foundry can be accessed by following url like below:-

    protocol://domain_name/mfconsole
     
After applying the configuration, both HCL Digital Experience and HCL Volt MX Foundry can be accessed using the provided hostname.
