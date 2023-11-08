# Adding additional CA to the DAM trust store

Implementing a custom plugin for the [Digital Asset Management extensibility](../../../../../../manage_content/digital_assets/configuration/dam_extensibility/configure_dam_extensibility.md) is by default limited to publicly trusted certificates. If the plugin is signed with a self-signed or otherwise untrusted certificate authority (CA), the trust store of DAM can be extended.

## Prerequisites

The Digital Asset Management leverages basic Node.JS functionality to extend the trust store by using the [NODE_EXTRA_CA_CERTS](https://nodejs.org/api/cli.html#node_extra_ca_certsfile) flag. Therefore, the certificate file used for the next steps must be one single file in the `pem` format with all necessary CAs aggregated into it.

## Adding the PEM file as a secret

To have your deployment and DAM use the certificate, you must store it in the Kubernetes cluster as a secret.

The secret can be created using the following commands:

!!! note
    You can choose the secret name and this must be referenced in the next configuration step (for example, `custom-ca-cert`). The namespace is the Kubernetes namespace where you want to deploy HCL Digital Experience 9.5 to (for example, `digital-experience`). However, you must set the key name to `customCACert.pem` in the following command like in [`--from-file=key=source`](https://kubernetes.io/docs/tasks/configmap-secret/managing-secret-using-kubectl/#use-source-files).

```
# Create secret with the name "custom-ca-cert" and the key "customCACert.pem"
# Secret will be created in the namespace "digital-experience"

kubectl create secret generic custom-ca-cert --from-file=customCACert.pem=./customCACert.pem -n digital-experience
```

## Configuring secret in deployment

Make sure that the reference to the secret is set up correctly in your `custom-values.yaml` file. Otherwise, Digital Asset Management will not be able to trust the additional certificates.

You can set the name of the certificate used with the following syntax. By default, no secret is set:

```yaml
# Networking specific configuration
networking:
  addon:
    digitalAssetManagement:
      caTrustSecret: "custom-ca-cert"
```

!!! note
    Verify you have entered the correct name.
