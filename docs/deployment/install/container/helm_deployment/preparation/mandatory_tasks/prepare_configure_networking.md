# Configure Networking

This section explains what must be configured from a networking perspective to get HCL Digital Experience 9.5 running in your Kubernetes or OpenShift cluster, and to provide accessibility to your deployment from outside the Cluster.

## Full Kubernetes or OpenShift deployment

If you deploy both Core and all other applications inside OpenShift or Kubernetes, this section shows you what needs to be configured.

## Core host

In a full deployment, the host for both the Core and the other applications are the same.

It is recommended to configure the host before you run the deployment. This is only possible if you know the fully qualified domain name (FQDN) or the IP address that the HAProxy assigns in your deployment beforehand.

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

## Configure Cross Origin Resource Sharing (CORS)

The HCL Digital Experience 9.5 Helm Chart allows you to configure CORS configuration for all the `addon` to Core applications such as Digital Asset Management or Ring API. This allows you to access the APIs provided by those applications in other applications with ease.

You can define a list of allowed hosts for a specific application using the following syntax in your `custom-values.yaml`:

```
   # Networking specific configuration
   networking:
     # Networking configurations specific to all addon applications
     addon:
       contentComposer:
         # CORS Origin configuration for Content Composer, array of elements
         corsOrigin: 
          - "https://my-different-application.net"
          - "https://the-other-application.com"
```

Refer to the HCL DX 9.5 `values.yaml` detail for all possible applications that can be configured.
## Hybrid host

**Configuring Hybrid Host**

In a [Hybrid](../../../../../../get_started/plan_deployment/hybrid_deployment/index.md) deployment, the host for the on-premise DX Core will be added in the core configuration section and the other applications host will be placed under the add-on section. See the following example:

```yaml
networking:
  # Networking configuration specific to Core
  core:
    # Host of Core, must be specified as a FQDN
    # If you are running hybrid, you need to specify the FQDN of the on-premise Core 
    host
    # Example: eks-hybrid.dx.com
    host: "your-dx-core-instance.whateverdomain.com"
    port: 10042
    contextRoot: "wps"
    personalizedHome: "myportal"
    home: "portal"
  addon:
    # Host of the addon applications
    # If you are not running hybrid, you can leave this value empty to use relative hostnames 
    # If you are running hybrid, you need to specify the FQDN of the Kubernetes 
    deployment
    # Example: eks-hybrid.apps.dx.com
    host: "your-dx-apps-instance.whateverdomain.com"
    # Port of the addon applications
    # If you are running hybrid, you can specify a port
    # If left empty, no specific port will be added to the host
    port: 443
    # Setting if SSL is enabled for addon applications
    # If you are running hybrid, make sure to set this accordingly to the Kubernetes 
    deployment configuration
    # Will default to true if not set    
    ssl: true
```

Please refer to the original values.yaml for all available applications that can be configured. See the [Planning your container deployment using Helm](../../../../container/index.md) topic for details.

Setting the add-on host is required for all hybrid deployments. Given the default use of relative hostnames, you must set an absolute FQDN for hybrid deployments. API calls must still point to one absolute hostname to avoid authentication issues when making requests. With that, it is not supported to configure your HCL DX environment to support multiple hostnames if you are running a hybrid deployment. See [Hybrid Deployment Installation](../../../../hybrid/index.md) for more details.

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
|`strictTransportSecurity.includeSubDomains`|If this optional parameter is specified, this rule applies to all of the site's subdomains as well. | Boolean |`false`|
|`strictTransportSecurity.preload`|See [Preloading Strict Transport Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security#preloading_strict_transport_security) for details. When using preload, the max-age directive must be at least 31536000 (1 year), and the includeSubDomains directive must be present. This parameter is not part of the HSTS specification. For more information, see [Strict-Transport-Security HTTP Response Header Field](https://www.rfc-editor.org/rfc/rfc6797#section-6.1). | Boolean |`false`|


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
      includeSubDomains: false
      preload: false
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

!!!note
    The secret name can be chosen by you and must be referenced in the next configuration step (the following example uses `dx-tls-cert`). The namespace is the Kubernetes namespace where you want to deploy HCL Digital Experience 9.5 to (the example uses `digital-experience`).

```
  # Create secret with the name "dx-tls-cert"
  # Secret will be created in the namespace "digital-experience"
  # You can either reference the cert and key file created before, or a proper signed certificate e.g. from your CA
  kubectl create secret tls dx-tls-cert --cert=my-cert.pem --key=my-key.pem -n digital-experience 
```

## Configure secret in deployment

You need to make sure that the reference to the secret is set up correctly in your `custom-values.yaml`. Otherwise, HAProxy cannot answer HTTPS requests due to a missing certificate.

You can set the name of the certificate used with the following syntax, the default value is `dx-tls-cert`:

```yaml
  # Networking specific configuration
  networking:
  # TLS Certificate secret used for haproxy
  tlsCertSecret: "dx-tls-cert"
```

!!! note
    Verify you have entered the correct name.

### OpenShift Passthrough

Previous versions of the Helm chart had an `openShiftPassthrough` value that created an OpenShift `Route` resource automatically. This is deprecated and removed and from CF211, a `Route` resource must be created manually when required as part of the deployment.

#### Create the route resource manually

If you want to deploy OpenShift manually using `Routes`, you need to create a .yaml file like below and any changes required can be made in that. To apply those changes in the OpenShift cluster, you can run `kubectl apply` and specify its namespace and location.
For more information, refer to the [OpenShift Route Configuration](https://docs.openshift.com/container-platform/latest/networking/routes/route-configuration.html) documentation.

In some versions of OpenShift, by default, sticky sessions for passthrough `Routes` are enabled in OpenShift using the source (IP) as identifier. To make sure traffic gets forwarded to all DX HAProxy Pods even when another proxy is used in front of it, the `Route` should be annotated as shown in the example below. Please refer to the [OpenShift documentation](https://docs.openshift.com/container-platform/latest/networking/routes/route-configuration.html) to select the appropriate value for your deployment. 

```yaml
apiVersion: "route.openshift.io/v1"
kind: "Route"
metadata:
  annotations:
    # By default, OpenShift applies load balancing and sticky sessions are routed to the same Pod depending on the source IP.
    # This should be disabled to leverage all DX HAProxy Pods when another proxy is used in front of DX.
    haproxy.router.openshift.io/balance: roundrobin
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

## Configuring Content-Security-Policy Frame Options

The HCL Digital Experience 9.5 Helm Chart allows you to configure **[Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors): frame-ancestors** for DX Core and all other components, such as Digital Asset Management, Ring API, etc.

Setting `cspFrameAncestorsEnabled` to true adds `content-security-policy: frame-ancestor 'self'` headers to the responses, enabling you to frame DX and other add-on applications.

There is also an option to specify allowed URLs that can frame your application using the `cspFrameAncestorAllowedSourceURLs` property. Using this property is a way to mitigate clickjacking attacks. For more information, see: [Clickjacking Defense Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html).

You can define a list of allowed URLs for a specific application using the following syntax in your `custom-values.yaml`. This example uses `contentComposer`, but the same applies for other applications:

```yaml
# Networking specific configuration
networking:
  # Networking configurations specific to all addon applications
  addon:
    contentComposer:
      # Enables/Disables CSP frame-ancestor header
      # Note: 'self' is always added when this is enabled to enable DX internal features
      # see: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors
      cspFrameAncestorsEnabled: false
      # Add list of allowed source URLS to the the CSP frame-ancestor header this will only reflect if cspFrameAncestorsEnabled is set to true
      # Example:
      # cspFrameAncestorsAllowedSourceURLs:
      #   - 'https://example.com'
      # This would result to the following response header:
      # content-security-policy: frame-ancestors 'self' https://example.com
      cspFrameAncestorsAllowedSourceURLs: []        
```

Refer to the HCL DX 9.5 `values.yaml` detail for all possible applications that can be configured.

## Configuring SameSite Cookie Attribute

The HCL Digital Experience 9.5 Helm Chart allows you to configure **[SameSite Cookie Attribute](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite)** for DX Core. This configuration sets the `WASReqURL` Cookie Attributes `Secure` and `SameSite`.

!!!note
    This should only be set in an HTTPS environment to prevent unwanted behaviors.

You can define the SameSite value in your `custom-values.yaml`:

```yaml
# Networking specific configuration
networking:
  core:
    # None, Lax, Strict, or empty string
    # Setting this to an empty string would not add the SameSite attribute for WASReqURL cookie
    # Note: This should only be set in an HTTPS environment to prevent unwanted behaviours
    cookieSameSiteAttribute: ""
```

Refer to the HCL DX 9.5 `values.yaml` detail for all possible applications that can be configured.
