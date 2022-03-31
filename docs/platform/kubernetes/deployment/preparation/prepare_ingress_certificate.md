# Configure ingress certificate

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

!!! note
    The secret name can be chosen by you and must be referenced in the next configuration step \(the following example uses `dx-tls-cert`\). The namespace is the Kubernetes namespace where you want to deploy HCL Digital Experience 9.5 to \(the example uses `digital-experience`\).

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

!!! note
    Verify you have entered the correct name.

## Configure minimum TLS version for Ingress

From CF201 and onwards the default minimum TLS version for the Ambassador Ingress is set to `v1.2`. TLS v1.2 or higher is recommended to increase security. If support for older TLS versions is still required, then it can be adjusted via the `custom-values.yaml`.

```
# Networking specific configuration
networking:
  # Set the minimum acceptable TLS version for Amassador Ingress: v1.0, v1.1,
  # v1.2, or v1.3. It defaults to v1.2
  minTlsVersion: "v1.2"
```

<!-- Refer to **[Additional tasks](helm_additional_tasks.md)** for the next steps. -->

