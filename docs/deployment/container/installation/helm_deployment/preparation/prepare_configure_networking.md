# Configure networking

This section explains what must be configured from a networking perspective to get HCL Digital Experience 9.5 running in your Kubernetes or OpenShift cluster, and to provide accessibility to your deployment from outside the Cluster.

## Full Kubernetes or OpenShift deployment

If you deploy both Core and all other applications inside OpenShift or Kubernetes, this section shows you what needs to be configured.

## Core host

In a full deployment, the host for both the Core and the other applications are the same.

It is recommended to configure the host before you run the deployment. This is only possible if you know the fully qualified domain name \(FQDN\) or the IP address that the HAProxy assigns in your deployment beforehand.

If that is the case, define the host using the following syntax:

   ```
   # Networking specific configuration
   networking:
   # Networking configuration specific to Core
   core:
   # Host of Core
   host: "your-dx-instance.whateverdomain.com"
  ```

If you do not know the hostname beforehand, you can leave it blank and run an additional step later in the installation, which would retrieve the assigned hostname from HAProxy and configure all applications accordingly.

## Configure Cross Origin Resource Sharing \(CORS\)

The HCL Digital Experience 9.5 Helm Chart allows you to configure CORS configuration for all the `addon` to Core applications such as Digital Asset Management or Ring API. This allows you to access the APIs provided by those applications in other applications with ease.

You can define a list of allowed hosts for a specific application using the following syntax in your `custom-values.yaml`:

```
   # Networking specific configuration
   networking:
     # Networking configurations specific to all addon applications
     addon:
       contentComposer:
         # CORS Origin configuration for Content Composer, comma separated list
         corsOrigin: "https://my-different-application.net,https://the-other-application.com"               
```

Refer to the HCL DX 9.5 `values.yaml` detail for all possible applications that can be configured.
## Hybrid host

**Configuring Hybrid Host**

In a [Hybrid](../helm_deployment.md) deployment, the host for the on-premise DX Core will be added in the core configuration section and the other applications host will be placed under the add-on section. See the following example:

```
networking:
    # Networking configuration specific to Core
    core:
      # Host of Core, must be specified as a FQDN
      # If you are running hybrid, you need to specify the FQDN of the on-premise Core 
      host
      # Example: eks-hybrid.dx.com
      host: "your-dx-core-instance.whateverdomain.com"
      port: "10042"
      contextRoot: "wps"
      personalizedHome: "myportal"
      home: "portal"
    addon:
      # Host of the addon applications
      # If you are not running hybrid, you can leave this value empty and the Core host 
     will be used
      # If you are running hybrid, you need to specify the FQDN of the Kubernetes 
     deployment
      # Example: eks-hybrid.apps.dx.com
      host: "your-dx-apps-instance.whateverdomain.com"
      # Port of the addon applications
      # If you are running hybrid, you can specify a port
      # If left empty, no specific port will be added to the host
      port: "443"
      # Setting if SSL is enabled for addon applications
      # If you are running hybrid, make sure to set this accordingly to the Kubernetes 
     deployment configuration
      # Will default to true if not set    
      ssl: "true"
```

Please refer to the original values.yaml for all available applications that can be configured. See the [Planning your container deployment using Helm topic](../preparation/overview.md) for details.

## Configure HAProxy certificate

For HAProxy to allow forward requests to your applications, you must provide it with a TLS Certificate. This certificate is used for incoming/outgoing traffic from the outside of the Kubernetes or OpenShift cluster to your applications. HAProxy performs TLS offloading.

## Configure HAProxy networking

HAProxy is deployed with a `LoadBalancer` type service to handle the incoming traffic as well as the SSL offloading for HCL Digital Experience. In addition, the Helm deployment offers adjustability for HAProxy and its services to allow for more flexible deployment and use of custom `Ingress Controllers`.

|Parameter|Description| Type | Default value|
|---------|-----------|-------------|------|
|`ssl` { width="20%" }  |Enable or disable SSL offloading in HAProxy. Depending on this setting, HAProxy handles either `HTTP` or `HTTPS` traffic. { width="40%" } | Boolean { width="20%" }| `true` { width="20%" }|
|`serviceType`|Defines the Kubernetes [`ServiceType`](https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types) of the HAProxy service. Supported ServiceType includes `LoadBalancer`, `ClusterIP` and `NodePort` | `LoadBalancer` \| `ClusterIP` \| `NodePort` |`LoadBalancer`|
|`servicePort`|This value is used to select the port exposed by the HAProxy service. Defaults to port `443` if `ssl` is set to `true`, otherwise, port `80` is used. | Number |`null`|
|`serviceNodePort`|This value is used to select the node port exposed by the HAProxy service. Defaults to a port selected by Kubernetes if no value is set. | Number |`null`|
|`strictTransportSecurity.enabled`|This value is used for HTTP Strict Transport Security (HSTS) to determine if it should be `enabled` | Boolean |`true`|
|`strictTransportSecurity.maxAge`|This value is used to set for how long the browser should remember the HSTS rule | Number |`31536000`|
|`customDamAssetPath`| Optional custom path definition to access the DAM resources. This will add a rewrite to HAProxy and make the assets accessible at the custom path. If no path is set, the rewrite is disabled. <br/><br/> Example: `/assets` will make the assets accessible at `/assets/{collection name/id}/{asset name/id}`.<br/> The following query parameters can be used with the custom path: <br/><br/> `binary`: true/false - retrieves the asset file as a binary if true or the metadata if false <br/> `rendition`: "Original"/"Desktop"/"Tablet"/"Smartphone"/"{custom rendition}" - retrieves the specified rendition of the asset <br/> `version`: (Version number or id) - retrieves the specified version of the asset | String |`""`|

!!!note
    If `ssl` is set to `true`, HAProxy will use the certificate that is supplied as a secret in `networking.tlsCertSecret`.

```yaml
networking:
  # Networking configurations specific to HAProxy
  haproxy:
    # Configuration to enable/disable ssl offloading in HAProxy
    ssl: true
    # Configuration to set the service type for the HAProxy service. Supported values are "ClusterIP", "LoadBalancer", and "NodePort"
    serviceType: "LoadBalancer"
    # Configuration to set the port exposed by the HAProxy Service. If the port is not set, then port 80 is used if SSL offloading is disabled, and port 443 if SSL offloading is enabled.
    servicePort:
    # Only applies for the "NodePort" serviceType. Configuration to set the NodePort exposed by the HAProxy service. If this is not set, a port is automatically selected by Kubernetes
    serviceNodePort:
    # HTTP Strict Transport Security(HSTS)
    strictTransportSecurity:
      enabled: true
      maxAge: 31536000
    customDamAssetPath: ""
```
  
This configuration is helpful for those who want to use a custom `Ingress Controller` to expose the service in a compatible way. Even then, HAProxy will still be active. The `Ingress Controller` will handle the incoming traffic and then route them to the HAProxy service.

## Generate self-signed certificate

**It is recommended that you use a properly signed certificate for HAProxy**. However, it is also possible to create and use a self-signed certificate, for example, for staging or testing environment.

Creation of that certificate can be achieved using the following commands for OpenSSL:

```
   # Creation of a private key
   openssl genrsa -out my-key.pem 2048
                      
   # Creation of a certificate signed by the private key created before
   openssl req -x509 -key my-key.pem -out my-cert.pem -days 365 -subj '/CN=my-cert'
```

This provides you with a key and cert file that can be used in the next step, creation of the certificate to your deployment.

## Use certificate

**Create secret**

To have your deployment and HAProxy to use the certificate, you must store it in the Kubernetes or OpenShift cluster as a secret.

The secret can be created using the following commands:

!!! note
    The secret name can be chosen by you and must be referenced in the next configuration step \(the following example uses `dx-tls-cert`\). The namespace is the Kubernetes namespace where you want to deploy HCL Digital Experience 9.5 to \(the example uses `digital-experience`\).

```
   # Create secret with the name "dx-tls-cert"
   # Secret will be created in the namespace "digital-experience"
   # You can either reference the cert and key file created before, or a proper signed certificate e.g. from your CA
   kubectl create secret tls dx-tls-cert --cert=my-cert.pem --key=my-key.pem -n digital-experience 
```

## Configure secret in deployment

You need to make sure that the reference to the secret is set up correctly in your `custom-values.yaml`. Otherwise, HAProxy cannot answer HTTPS requests due to a missing certificate.

You can set the name of the certificate used with the following syntax, the default value is `dx-tls-cert`:

```
   # Networking specific configuration
   networking:
   # TLS Certificate secret used for haproxy
    tlsCertSecret: "dx-tls-cert"            
```

!!! note
    Verify you have entered the correct name.

### OpenShift Passthrough
Helm charts have an `openShiftPassthrough` value to create a `Route` resource, which only passes through the main HAProxy port (443 most of the time). Instead of having such a flavor-specific configuration in Helm charts, such setups are documented and point to the flavor-specific documentation and will be deprecated.

The default value set for "openShiftPassthrough" is `auto` i.e it detects openshift deployments automatically. Even though it is not manually enabled it will be active by default. To prevent this it needs to be manually disabled. This can be done by setting "openShiftPassthrough" to `false`

!!! note
    The "openShiftPassthrough" value is deprecated and if "openShiftPassthrough" is to be used a new route resource must be created manually 

#### Create the route resource manually
If you want to deploy openshift manually using Routes, youll need to create a yaml file like below and any changes required can be made in that. To apply those change the the openshift cluster you can run `kubectl apply` and specify its namespace and location.
This conversation was marked as resolved by kevin-hendel
Click [here](https://docs.openshift.com/container-platform/latest/networking/routes/route-configuration.html) for more details on Openshift Route Configuration

```yaml
apiVersion: "route.openshift.io/v1"
kind: "Route"
metadata:
  name: "<helm-deployment-name>-passthrough"
spec:
  port:
    targetPort: "haproxy"
  tls:
    insecureEdgeTerminationPolicy: "Redirect"
    termination: "passthrough"
  to:
    kind: "Service"
    name: "<helm-deployment-name>-haproxy"
    weight: 100
  wildcardPolicy: "None"
```

`<helm-deployment-name>` must be replaced with the name of the deployed Helm release.