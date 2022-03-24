# Configure networking

This section explains what must be configured from a networking perspective to get HCL Digital Experience 9.5 running in your Kubernetes or OpenShift cluster, and to provide accessibility to your deployment from outside the Cluster.

## Full Kubernetes or OpenShift deployment

If you deploy both Core and all other applications inside OpenShift or Kubernetes, this section shows you what needs to be configured.

## Core host

In a full deployment, the host for both the Core and the other applications are the same.

It is recommended to configure the host before you run the deployment. This is only possible if you know the fully qualified domain name \(FQDN\) or the IP address that the Ambassador Ingress assigns in your deployment beforehand.

If that is the case, define the host using the following syntax:

```
# Networking specific configuration
networking:
 # Networking configuration specific to Core
 core:
  # Host of Core
  host: "your-dx-instance.whateverdomain.com"
                
```

If you do not know the hostname beforehand, you can leave it blank and run an additional step later in the installation, that retrieves the assigned hostname from the Ambassador Ingress and configure all applications accordingly.

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

In a [Hybrid](hybrid_deployment_helm.md) deployment, the host for the on-premise DX Core will be added in the core configuration section and the other applications host will be placed under the add-on section. See the following example:

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

Please refer to the original values.yaml for all available applications that can be configured. See the [Planning your container deployment using Helm topic](helm_planning_deployment.md) for details.

## Configure Ingress certificate

To have the Ambassador Ingress allow forward requests to your applications, you must provide it with a TLS Certificate. This certificate is used for incoming/outgoing traffic from the outside of the Kubernetes or OpenShift cluster to your applications. Ambassador performs TLS offloading.

## Generate self-signed certificate

**It is recommended that you use a properly signed certificate for the Ambassador Ingress**. However, it is also possible to create and use a self-signed certificate, for example, for staging or testing environment.

Creation of that certificate can be achieved using the following commands for OpenSSL:

```
# Creation of a private key
openssl genrsa -out my-key.pem 2048
                    
# Creation of a certificate signed by the private key created before
openssl req -x509 -key my-key.pem -out my-cert.pem -days 365 -subj '/CN=my-cert              
```

This provides you with a key and cert file that can be used in the next step, creation of the certificate to your deployment.

## Use certificate

**Create secret**

To have your deployment and the Ambassador Ingress use the certificate, you must store it in the Kubernetes or OpenShift cluster as a secret.

The secret can be created using the following commands:

**Note:** The secret name can be chosen by you and must be referenced in the next configuration step \(the following example uses `dx-tls-cert`\). The namespace is the Kubernetes namespace where you want to deploy HCL Digital Experience 9.5 to \(the example uses `digital-experience`\).

```
# Create secret with the name "dx-tls-cert"
# Secret will be created in the namespace "digital-experience"
# You can either reference the cert and key file created before, or a proper signed certificate e.g. from your CA
kubectl create secret tls dx-tls-cert --cert=my-cert.pem --key=my-key.pem -n digital-experience 
```

## Configure secret in deployment

You need to make sure that the reference to the secret is set up correctly in your `custom-values.yaml`. Otherwise your Ambassador Ingress is not able to answer HTTPS requests due to a missing certificate.

You can set the name of the certificate used with the following syntax, the default value is `dx-tls-cert`:

```
# Networking specific configuration
networking:
 # TLS Certificate secret used for Ambassador Ingress
 tlsCertSecret: "dx-tls-cert"            
```

**Note:** Verify you have entered the correct name.

## Configure minimum TLS version for Ingress

From CF201 and onwards the default minimum TLS version for the Ambassador Ingress is set to `v1.2`. TLS v1.2 or higher is recommended to increase security. If support for older TLS versions is still required, then it can be adjusted via the `custom-values.yaml`.

```
# Networking specific configuration
networking:
  # Set the minimum acceptable TLS version for Amassador Ingress: v1.0, v1.1,
  # v1.2, or v1.3. It defaults to v1.2
  minTlsVersion: "v1.2"
```

Refer to **[Additional tasks](helm_additional_tasks.md)** for the next steps.

