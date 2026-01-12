# Configure networking

This section describes the networking configuration required to run HCL Digital Experience (DX) 9.5 in a Kubernetes or OpenShift cluster and to make the deployment accessible from outside the cluster.

## Deploying in a full Kubernetes or OpenShift environment

If you deploy Core and all other applications within Kubernetes or OpenShift, use the guidance in this section to configure the required networking components.

## Configuring Core host

In a full deployment, Core and all other applications share the same host. It is recommended to configure the host before you start the deployment. This approach requires that you know the fully qualified domain name (FQDN) or the IP address assigned by HAProxy in advance.

If this information is available, define the host using the following syntax:

```yaml
# Networking-specific configuration
networking:
  # Core networking configuration
  core:
    # Core host
    host: "your-dx-instance.example.com"
  ```

## Configuring Cross-origin Resource Sharing (CORS)

The HCL DX 9.5 Helm chart lets you configure Cross-origin Resource Sharing (CORS) for all add-on applications to DX Core, such as Digital Asset Management or Ring API. This configuration enables other applications to access the APIs provided by these add-ons.

You can define a list of allowed hosts for a specific application using the following syntax in your `custom-values.yaml`:

```yaml
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

## Configuring Hybrid Host

In a [Hybrid](../../../../../../deployment/install/hybrid/index.md) deployment, configure the host for the on-premises DX Core under the `core` section. Configure the hosts for the other applications under the `addon` section. For example:

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

Refer to the original `values.yaml` for all available applications that can be configured. For more information, refer to [Planning your container deployment using Helm](../../../../container/index.md).

Setting the add-on host is required for all hybrid deployments. Because the default uses relative hostnames, you must set an absolute FQDN for hybrid deployments. API calls must point to a single absolute hostname to avoid authentication issues. Configuring multiple hostnames in a hybrid deployment is not supported. Refer to [Hybrid Deployment Installation](../../../../hybrid/index.md) for more details.

!!! note
    If your DX Core deployment uses a self-signed certificate or a certificate that is not publicly trusted, add the certificate to the trust store of the add-on applications. Refer to [Adding additional CA to the trust store of DAM or RingAPI](../../../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-additonal-ca.md) for instructions.

## Configuring HAProxy certificate

To allow HAProxy to forward requests to your applications, you must provide a TLS certificate. This certificate secures incoming and outgoing traffic between the outside of your Kubernetes or OpenShift cluster and your applications. HAProxy performs TLS offloading.

## Configuring HAProxy networking

HAProxy is deployed as a `LoadBalancer` service to handle incoming traffic and perform SSL offloading for HCL DX. The Helm chart lets you configure HAProxy and its services for flexible deployments, including support for custom `Ingress Controllers`.

|Parameter|Description| Type | Default value|
|---------|-----------|-------------|------|
|`ssl` { width="20%" }|Enable or disable SSL offloading in HAProxy. Depending on this setting, HAProxy handles either `HTTP` or `HTTPS` traffic. { width="40%" } | Boolean { width="20%" }| `true` { width="20%" }|
|`serviceType`|Defines the Kubernetes [`ServiceType`](https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types){target="_blank"} of the HAProxy service. Supported ServiceType includes `LoadBalancer`, `ClusterIP` and `NodePort` | `LoadBalancer` \| `ClusterIP` \| `NodePort` |`LoadBalancer`|
|`servicePort`|This value is used to select the port exposed by the HAProxy service. Defaults to port `443` if `ssl` is set to `true`, otherwise, port `80` is used. | Number |`null`|
|`serviceNodePort`|This value is used to select the node port exposed by the HAProxy service. Defaults to a port selected by Kubernetes if no value is set. | Number |`null`|
|`strictTransportSecurity.enabled`|This value is used for HTTP Strict Transport Security (HSTS) to determine if it should be `enabled`. When enabled, this value requires SSL in DX or any proxy in front of the SSL. | Boolean |`true`|
|`strictTransportSecurity.maxAge`|This value is used to set for how long the browser should remember the HSTS rule | Number |`31536000`|
|`strictTransportSecurity.includeSubDomains`|If this optional parameter is specified, this rule applies to all of the site's subdomains as well. | Boolean |`false`|
|`strictTransportSecurity.preload`|For more information, refer to [Preloading Strict Transport Security](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security#preloading_strict_transport_security){target="_blank"} for details. When using preload, the max-age directive must be at least 31536000 (1 year), and the includeSubDomains directive must be present. This parameter is not part of the HSTS specification. For more information, refer to [Strict-Transport-Security HTTP Response Header Field](https://www.rfc-editor.org/rfc/rfc6797#section-6.1){target="_blank"}. | Boolean |`false`|
|`sessionCookieName`|Available starting CF221. This parameter does not directly change the cookie name. Instead, you must set this value if the cookie name is changed in the [console](../../../../../manage/config_portal_behavior/http_sessn_cookie.md).| String |`JSESSIONID`|
|`affinityCookieSameSiteAttribute`|Sets the "SameSite" attribute for the DxSessionAffinity cookie to the values: `None`, `Lax`, `Strict`, or `""`. This should only be set on an HTTPS environment. | String |`""`|
|`alwaysEnableSessionAffinity`|When enabled, HAProxy will insert the DxSessionAffinity cookie for all incoming requests, regardless of the presence of the cookie defined in the `sessionCookieName`. HAProxy only inserts a new affinity cookie if a valid DxSessionAffinity cookie is not already present. | Boolean |`false`|
|`sslDefaultBindCiphers`|Default SSL/TLS cipher suites for TLS 1.2 and earlier. Specify a colon-separated list of cipher suites to use for SSL/TLS connections. If empty, HAProxy uses the default cipher suites. For more information, refer to [HAProxy TLS Ciphers Documentation](https://www.haproxy.com/documentation/haproxy-configuration-tutorials/security/ssl-tls/client-side-encryption/#set-the-tls-ciphers){target="_blank"}. | String |`""`|
|`sslDefaultBindCiphersuites`|TLS 1.3 cipher suites (specified separately from TLS 1.2 ciphers). Specify a colon-separated list of TLS 1.3 cipher suites. If empty, HAProxy uses the default cipher suites. For more information, refer to [HAProxy TLS Ciphers Documentation](https://www.haproxy.com/documentation/haproxy-configuration-tutorials/security/ssl-tls/client-side-encryption/#set-the-tls-ciphers){target="_blank"}. | String |`""`|
|`sslDefaultBindOptions`|SSL/TLS options for HAProxy global configuration. Common options include: `no-sslv3`, `no-tlsv10`, `no-tlsv11`, `no-tlsv12`, `no-tls-tickets`, `prefer-client-ciphers`, `ssl-min-ver`, `ssl-max-ver`. For more information, refer to [HAProxy Minimum TLS Version Documentation](https://www.haproxy.com/documentation/haproxy-configuration-tutorials/security/ssl-tls/client-side-encryption/#set-the-minimum-tls-version){target="_blank"}. | Array |`[]`|

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
    # Set cookie value for session affinity in HAProxy configuration for DX applications that require session affinity (e.g. HAProxy)
    sessionCookieName: "JSESSIONID"
    # Set the "SameSite" attribute for the HAProxy DxSessionAffinity cookie to the values: None, Lax, Strict, or empty string
    # Setting this to an empty string will not add the SameSite attribute to the DxSessionAffinity cookie.
    # Note: This should only be set in an HTTPS environment to prevent unwanted behaviors
    affinityCookieSameSiteAttribute: ""
    # Set alwaysEnableSessionAffinity to ensure any session, even unauthenticated sessions, receives a DxSessionAffinity token and routes to a single
    # core pod for the lifetime of the session. Defaults to false.
    alwaysEnableSessionAffinity: false
    # HAProxy global section SSL/TLS security configuration
    # These settings define default SSL/TLS parameters in the HAProxy global section that apply to all bind lines
    # Reference: https://www.haproxy.com/documentation/haproxy-configuration-tutorials/security/ssl-tls/client-side-encryption/
    # ssl-default-bind-ciphers: Default SSL/TLS cipher suites for TLS 1.2 and earlier
    # Specify a colon-separated list of cipher suites to use for SSL/TLS connections
    # If empty, HAProxy defaults will be used
    # Reference: https://www.haproxy.com/documentation/haproxy-configuration-tutorials/security/ssl-tls/client-side-encryption/#set-the-tls-ciphers
    # Example for intermediate compatibility (Mozilla Intermediate):
    # "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384"
    # Example for modern security (strong ciphers only):
    # "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305"
    sslDefaultBindCiphers: ""
    # ssl-default-bind-ciphersuites: TLS 1.3 cipher suites (specified separately from TLS 1.2 ciphers)
    # Specify a colon-separated list of TLS 1.3 cipher suites
    # If empty, HAProxy defaults will be used
    # Example: "TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256"
    sslDefaultBindCiphersuites: ""
    # ssl-default-bind-options: SSL/TLS options for HAProxy global configuration
    # Reference: https://www.haproxy.com/documentation/haproxy-configuration-tutorials/security/ssl-tls/client-side-encryption/#set-the-minimum-tls-version
    # Common options include:
    # - "no-sslv3" - Disable SSLv3
    # - "no-tlsv10" - Disable TLS 1.0
    # - "no-tlsv11" - Disable TLS 1.1
    # - "no-tlsv12" - Disable TLS 1.2 (only if using TLS 1.3 exclusively)
    # - "no-tlsv13" - Disable TLS 1.3
    # - "no-tls-tickets" - Disable TLS session tickets
    # - "prefer-client-ciphers" - Prefer client's cipher order
    # - "ssl-min-ver TLSv1.2" - Set minimum TLS version to 1.2
    # - "ssl-max-ver TLSv1.3" - Set maximum TLS version to 1.3
    # Example for modern security: 
    #     - "no-sslv3"
    #     - "no-tlsv10"
    #     - "no-tlsv11"
    #     - "no-tls-tickets"
    # Example for strict security: 
    #     - "no-sslv3"
    #     - "no-tlsv10"
    #     - "no-tlsv11"
    #     - "no-tlsv12"
    #     - "ssl-min-ver TLSv1.3"
    sslDefaultBindOptions: []
```

This configuration is useful for scenarios where you want to use a custom Ingress Controller to expose the service. HAProxy remains active in this setup. The Ingress Controller handles incoming traffic and routes it to the HAProxy service

## Using annotations to control HAProxy service behavior for different cloud providers

The Helm chart lets you add annotations to the HAProxy service to control its behavior for different cloud providers. You can use these annotations to specify a load balancer type or configure other provider-specific settings. Add annotations in your `custom-values.yaml` file, as described [in the Annotations documentation](../optional_tasks/optional_labels_annotations.md#annotations).

Examples for such annotations are in an non-exhaustive list. Refer to the documentation provided by your cloud provider for more information:

- [Amazon Elastic Kubernetes Service - Use Service Annotations to configure Network Load Balancers](https://docs.aws.amazon.com/eks/latest/userguide/auto-configure-nlb.html){target="_blank"}
- [Google Kubernetes Engine - LoadBalancer Service parameters](https://cloud.google.com/kubernetes-engine/docs/concepts/service-load-balancer-parameters){target="_blank"}
- [Azure Kubernetes Service - LoadBalancer annotations](https://cloud-provider-azure.sigs.k8s.io/topics/loadbalancer/#loadbalancer-annotations){target="_blank"}

## Generating a self-signed certificate

It is recommended that you use a properly signed certificate for HAProxy. However, it is also possible to create and use a self-signed certificate, for example, for staging or testing environment.

Creation of that certificate can be achieved using the following commands for OpenSSL:

```sh
# Creation of a private key
openssl genrsa -out my-key.pem 2048
                  
# Creation of a certificate signed by the private key created before
openssl req -x509 -key my-key.pem -out my-cert.pem -days 365 -subj '/CN=my-cert'
```

This provides you with a key and cert file that can be used in the next step, creation of the certificate to your deployment.

## Using a certificate

To have your deployment and HAProxy to use the certificate, you must store it in the Kubernetes or OpenShift cluster as a secret. The secret can be created using the following commands:

!!!note
    The secret name can be chosen by you and must be referenced in the next configuration step (the following example uses `dx-tls-cert`). The namespace is the Kubernetes namespace where you want to deploy HCL DX 9.5 to (the example uses `digital-experience`).

```sh
# Create secret with the name "dx-tls-cert"
# Secret will be created in the namespace "digital-experience"
# You can either reference the cert and key file created before, or a proper signed certificate e.g. from your CA
kubectl create secret tls dx-tls-cert --cert=my-cert.pem --key=my-key.pem -n digital-experience 
```

## Configuring secret in deployment

You need to make sure that the reference to the secret is set up correctly in your `custom-values.yaml`. Otherwise, HAProxy cannot answer HTTPS requests due to a missing certificate.

You can set the name of the certificate used with the following syntax, the default value is `dx-tls-cert`:

```yaml
# Networking specific configuration
networking:
  # TLS Certificate secret used for haproxy
  tlsCertSecret: "dx-tls-cert"
```

!!! note
    Ensure you have entered the correct name.

## OpenShift passthrough

Previous versions of the Helm chart had an `openShiftPassthrough` value that created an OpenShift `Route` resource automatically. This is deprecated and removed and from CF211, a `Route` resource must be created manually when required as part of the deployment.

### Creating a route resource manually

If you want to deploy OpenShift manually using `Routes`, you need to create a `.yaml` file like below and any changes required can be made in that. To apply those changes in the OpenShift cluster, you can run `kubectl apply` and specify its namespace and location.
For more information, refer to the [OpenShift Route Configuration](https://docs.openshift.com/container-platform/latest/networking/routes/route-configuration.html){target="_blank"} documentation.

In some versions of OpenShift, by default, sticky sessions for passthrough `Routes` are enabled in OpenShift using the source (IP) as identifier. To make sure traffic gets forwarded to all DX HAProxy Pods even when another proxy is used in front of it, the `Route` should be annotated as shown in the example below. Refer to the [OpenShift documentation](https://docs.openshift.com/container-platform/latest/networking/routes/route-configuration.html){target="_blank"} to select the appropriate value for your deployment.

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

## Configure Content-Security-Policy frame options

The HCL DX 9.5 Helm chart lets you configure **[Content Security Policy: frame-ancestors](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors){target="_blank"} for DX Core and all other components, such as Digital Asset Management, Ring API, etc.

Setting `cspFrameAncestorsEnabled` to true adds `content-security-policy: frame-ancestor 'self'` headers to the responses, enabling you to frame DX and other add-on applications.

There is also an option to specify allowed URLs that can frame your application using the `cspFrameAncestorAllowedSourceURLs` property. Using this property is a way to mitigate clickjacking attacks. For more information, refer to [Clickjacking Defense Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html){target="_blank"}.

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

## Configuring the SameSite cookie attribute

The HCL DX 9.5 Helm chart lets you configure the [SameSite cookie attribute](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite){target="_blank"} for DX Core. This configuration sets the `WASReqURL` cookie attributes `Secure` and `SameSite`.

!!! note
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

## Configuring HAProxy custom headers

The HCL DX 9.5 Helm chart lets you configure custom HTTP headers in HAProxy. You can add new headers or remove existing headers from responses generated by HAProxy.

### Adding custom headers

Use the `customHeader` property to add custom HTTP headers to all responses from HAProxy. This is useful for enforcing security best practices or including specific information in responses.

Each header entry supports the following properties:

- `name`: The name of the HTTP header to be added
- `value`: The value that should be set for the header

Example configuration in your `custom-values.yaml` file:

```yaml
networking:
  haproxy:
    customHeader:
      - name: X-Content-Type-Options
        value: nosniff
      - name: Referrer-Policy
        value: no-referrer
```

### Removing headers

You can specify header names that should be removed from HAProxy responses using the `deleteHeader` property. This is useful for removing headers that might reveal internal information or that you do not wish to forward.

Example configuration in your `custom-values.yaml` file:

```yaml
networking:
  haproxy:
    deleteHeader:
      - X-Powered-By
```
