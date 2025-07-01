# Configuring HCL Leap for integration with HCL DX

This page provides information on how to configure the integration of HCL Leap with the existing Digital Experience (DX) environment.

## Access Layer for HCL DX and HCL Leap

You have two options for implementing the Access Layer in the DX deployment and Leap: [Ingress](#ingress-for-hcl-dx-and-hcl-leap) and [Gateway API](#gateway-api-for-hcl-dx-and-hcl-leap). Choose the option that fits your specific needs and preferences.

### Ingress for HCL DX and HCL Leap

Refer to the following steps to implement a generic Ingress on your Kubernetes cluster for use with DX and Leap. The actual implementation might vary depending on the cluster's setup and configuration.

#### Prerequisites

Ensure you follow the guidelines provided in the [optional Ingress documentation](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-access-layer.md#ingress-implementation-for-dx-deployments) to set up Ingress for DX.

#### Implementing Ingress for HCL DX and HCL Leap

1. Create a separate Ingress resource for Leap or extend the existing DX Ingress configuration. In Kubernetes, Ingress resources manage how external HTTP(S) traffic is routed to services within the cluster. You can either define a dedicated Ingress for Leap or incorporate its routes into the existing DX Ingress.

2. Ensure the Ingress resource is configured to match Leap’s deployment path. The specified path (for example, `/apps`) should align with Leap’s context route so that incoming requests are correctly routed to the Leap service as accessed by end users.

The following YAML file demonstrates how to define an Ingress resource that routes traffic to the Leap backend service based on a specific path (for example, `/apps`):

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
    name: custom-routes
spec:
    ingressClassName: nginx
    tls:
    - secretName: dx-tls-cert
        hosts:
        - your-kube-deployment.com
    rules:
    - host: your-kube-deployment.com
        http:
        paths:
        - path: /apps
            pathType: Prefix
            backend:
            service:
                name: leap-deployment-leap
                port:
                number: 9080
```

- The `metadata` section identifies the Ingress resource.
- The `spec` section outlines the routing configuration.
- The `tls` block sets up HTTPS for the specified domain.
- Within the `rules` section, requests to the `/apps` path (including sub-paths) for the defined host are directed to the Leap service deployed in the cluster.

### Gateway API for HCL DX and HCL Leap

Refer to the following steps to configure the optional Gateway API for DX and Leap. The Gateway API allows you to route requests to both products under the same hostname, enhancing the deployment's efficiency and management.

#### Prerequisites

Ensure you follow the guidelines provided in the [optional Gateway API documentation](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-access-layer.md#gateway-api-implementation-for-dx-deployments) to set up the Gateway API for HCL DX.

#### Implementing Gateway API for HCL DX and HCL Leap

1. Create a separate Gateway API resource for Leap or extend the existing DX Gateway configuration. The Gateway API offers a more flexible and expressive approach to traffic management than traditional Ingress. Consolidating routing for both DX and Leap under a single configuration can simplify access layer management.

2. Ensure the Gateway API configuration accurately reflects the context route used in the Leap deployment (for example, `/apps`). This ensures that incoming requests to that path are properly routed to the Leap backend service.

The following YAML file demonstrates how to define a Gateway API `HTTPRoute` resource for routing requests to the Leap backend service:
  
  ```yaml
  apiVersion: gateway.networking.k8s.io/v1
  kind: HTTPRoute
  metadata:
    name: leap-http-api-route
  spec:
    parentRefs:
    - name: gateway
      sectionName: https
    hostnames:
    - your-kube-deployment.com
    rules:
    - matches:
      - path:
          type: PathPrefix
          value: /apps
      backendRefs:
      - name: leap-deployment-leap
        port: 9080
  ```

- The `metadata` section assigns a name to the HTTPRoute resource.
- The `spec` section outlines the routing configuration.
- The `parentRefs` section links the route to a specific Gateway and its section (for example, `https`).
- The `hostnames` section indicates the domain this route is intended for.
- Within `rules`, the `matches` block defines the path prefix condition (such as `/apps`)
- The `backendRefs` section specifies the target backend service and port where Leap is hosted.

## Enabling LTPA SSO between HCL Leap and HCL DX in Kubernetes

These steps are based on [this community post](https://support.hcltechsw.com/community?id=community_blog&sys_id=ba541e4b1b820614f37655352a4bcbc4) 
 
1\. Ensure both DX and Leap use an identical user registry configuration.
 
2\. Ensure both DX and Leap use the same realm name (e.g., defaultWIMFileBasedRealm).
  
   - For DX, you may check the realm name as follows: go to the WAS Console (your-domain.com/ibm/console). Go to Security > Global Security > User Account Repository > Realm Name, as shown in the following image:
![](../../../../assets/dx-leap-integration-realm.png)
  
   - For Leap, you may use the configOverrideFiles parameter in your Helm chart's values.yaml file to ensure that the realm name is the same as in DX. In this example, DX uses the realm name "defaultWIMFileBasedRealm", so we set Leap's realm name to that as well. Note where the realm name `defaultWIMFileBasedRealm` appears in the following example:

```yaml
configuration:
  leap:  
    configOverrideFiles:
      mycustomoverride: |
        <server description="leapServer">
          <federatedRepository id="leapRepo">
            <primaryRealm name="defaultWIMFileBasedRealm" allowOpIfRepoDown="true">
              <participatingBaseEntry name="o=defaultWIMFileBasedRealm" />
            </primaryRealm>
          </federatedRepository>
          <basicRegistry id="leapRegistry" realm="defaultWIMFileBasedRealm" ignoreCaseForAuthentication="true">
            <user id="<my-user-id>" name="uid=<my-uid>,o=defaultWIMFileBasedRealm" password="<my-password>" />
          </basicRegistry>
        </server>
```

!!!note
    For more information regarding Leap's configOverrideFiles parameter, refer to [this documentation](https://opensource.hcltechsw.com/leap-doc/latest/helm_open_liberty_custom.html?h=configoverridefile).
 
3\. Ensure both sides use the same DNS domain (xyz.com).
 
4\. Security best practices suggest that we ensure LTPA cookie flows only over HTTPS.
 
   - On Traditional WAS, we can limit LTPA cookies to SSL only by ticking the “Requires SSL” checkbox under Security > Global Security > Web and SIP security > Single sign-on (SSO)
   - On Liberty, we can limit LTPA cookies to SSL only by adding this line to your config override file: `<webAppSecurity ssoRequiresSSL="true"/>`
 
5\. Ensure both sides use the same LTPA keys.
 
   - To export the keys from WebSphere Application Server, follow these steps:

      i\. Log in to the WebSphere Application Server Integrated Solutions Console as an administrator.
      
      ii\. Go to Security > Global security and select Authentication mechanisms and expiration.
      
      iii\. Click LTPA.
      
      iv\. In the Cross-cell single sign-on section, enter values for the following fields:
         
       - Password – Enter and confirm a secure password. You will require this password later.
         
       - Fully qualified key file name – Specify a name for the file that holds the exported keys, e.g., `ltpa.keys`. 
      
      v\. Click Export keys.

    
   - Convert the ltpa key file exported in the last step into a Kubernetes secret by copying its contents into a file called `ltpa.keys` in your current folder and running the following: `kubectl create secret generic my-custom-ltpa-key --from-file=./ltpa.keys --namespace=<namespace>`
      
   - Update ltpa-key in the Leap custom Helm values:
```yaml
configuration: 
  leap: 
    customSecrets: 
      ltpa-key: my-custom-ltpa-key
```
   - Update the LTPA keysFileName and keysPassword by adding this line to your config override file: `<ltpa keysFileName="/path/to/ltpa.keys" keysPassword="<myLtpaKeyPassword>" />`. 

!!! note    
    For more details on using custom secrets as key file, click [here](https://opensource.hcltechsw.com/leap-doc/latest/helm_admin_customsecret.html?h=ltpa#using-custom-secrets-as-key-file).


Adding the `<webAppSecurity...>` and `<ltpa...>` lines to the example config override shown previously, the result would be as follows:
```yaml
### Leap custom values file
configuration:
  leap:  
    configOverrideFiles:
      mycustomoverride: |
        <server description="leapServer">
          <webAppSecurity ssoRequiresSSL="true"/>
          <ltpa keysFileName="/path/to/ltpa.keys" keysPassword="<myLtpaKeyPassword>" />
          <federatedRepository id="leapRepo">
            <primaryRealm name="defaultWIMFileBasedRealm" allowOpIfRepoDown="true">
              <participatingBaseEntry name="o=defaultWIMFileBasedRealm" />
            </primaryRealm>
          </federatedRepository>
          <basicRegistry id="leapRegistry" realm="defaultWIMFileBasedRealm" ignoreCaseForAuthentication="true">
            <user id="<my-user-id>" name="uid=<my-uid>,o=defaultWIMFileBasedRealm" password="<my-password>" />
          </basicRegistry>
        </server>
```
            
6\. Restart HCL Leap and HCL Digital Experience. You should now be able to log in to DX and open Leap without having to log in again.
