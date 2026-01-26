# LTPA Configuration

## Overview

LTPA (Lightweight Third Party Authentication) is a single sign-on (SSO) mechanism used for authentication and session sharing across multiple applications. In the DX Core component, LTPA configuration is managed through Helm values and Kubernetes secrets.

## Configuration Methods

There are **two mutually exclusive** ways to configure LTPA for Core:

### Method 1: Inline Configuration (Values)

Configure LTPA credentials directly in your `values.yaml` file:

```yaml
configuration:
  core:
    ltpa:
      enabled: true
      version: "1.0"
      realm: "myLTPARealm"
      desKey: "your-des-key"
      privateKey: "your-private-key"
      publicKey: "your-public-key"
      password: "your-ltpa-password"
      customLtpaSecret: ""  # Must be empty when using inline config
```

**When to use:** 
- Development environments
- Non-critical deployments
- When credentials are managed through other means

### Method 2: Custom Secret Reference

Reference an existing Kubernetes secret containing LTPA credentials:

```yaml
configuration:
  core:
    ltpa:
      enabled: true
      version: ""
      realm: ""
      desKey: ""
      privateKey: ""
      publicKey: ""
      password: ""
      customLtpaSecret: "my-ltpa-secret"  # Reference your secret
```

**When to use:**
- Production environments
- Enhanced security requirements
- Credentials managed externally (e.g., HashiCorp Vault, AWS Secrets Manager)

## Generating LTPA Keys

To generate LTPA keys for Core, you can export them from the IBM WebSphere Administrative Console:

1. Login to the IBM WebSphere Administrative Console at `/ibm/console` with credentials (e.g., wpsadmin/wpsadmin)

2. Navigate to **Security** > **Global security**

3. Under **Authentication**, click on **LTPA**

4. Add a password and specify a path for the LTPA key file (e.g., `/opt/HCL/mykey.ltpa`), then click **Export keys**

5. Extract the LTPA key file from the running pod:
   ```bash
   kubectl -n <namespace> exec -it pod/<release>-core-0 -- cat /opt/HCL/ltpa.keys
   ```

6. Save the output for creating the secret in the next section

## Secret Structure

When using a custom secret, the secret must contain the following data keys:

| Key | Description | Format |
|-----|-------------|--------|
| `ltpa.version` | LTPA token version | String (e.g., "1.0") |
| `ltpa.realm` | LTPA realm name | String |
| `ltpa.desKey` | 3DES encryption key | String |
| `ltpa.privateKey` | Private key for LTPA token signing | String |
| `ltpa.publicKey` | Public key for LTPA token verification | String |
| `ltpa.password` | Password for LTPA key protection | String |

### Creating a Custom LTPA Secret

#### Using kubectl

```bash
kubectl create secret generic my-ltpa-secret \
  --from-literal='ltpa.version=1.0' \
  --from-literal='ltpa.realm=myLTPARealm' \
  --from-literal='ltpa.desKey=<your-des-key>' \
  --from-literal='ltpa.privateKey=<your-private-key>' \
  --from-literal='ltpa.publicKey=<your-public-key>' \
  --from-literal='ltpa.password=<your-password>' \
  -n <your-namespace>
```

#### Using a YAML manifest

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: my-ltpa-secret
  namespace: dx-namespace
type: Opaque
stringData:
  ltpa.version: "1.0"
  ltpa.realm: "myLTPARealm"
  ltpa.desKey: "your-des-key-value"
  ltpa.privateKey: "your-private-key-value"
  ltpa.publicKey: "your-public-key-value"
  ltpa.password: "your-ltpa-password"
```

### Mutual Exclusivity

You **cannot** specify both inline values and a custom secret simultaneously:

```yaml
# INVALID - This will fail
configuration:
  core:
    ltpa:
      enabled: true
      version: "1.0"
      realm: "myRealm"
      customLtpaSecret: "my-secret"  # Cannot mix both!
```

**Error Message:**
```
Either configuration.core.ltpa values are set even though a custom secret was provided. 
Please explicitly set the unused credentials to be empty/null
```

### Completeness Requirement

If LTPA is enabled, you must provide **all required fields** through either method:

```yaml
# INVALID - Missing publicKey and privateKey
configuration:
  core:
    ltpa:
      enabled: true
      version: "1.0"
      realm: "myRealm"
      desKey: "key"
      password: "pwd"
      # Missing: privateKey, publicKey
```

**Error Message:**
```
Please provide a configuration for LTPA by either setting Values.configuration.core.ltpa values 
or by referencing a secret in configuration.core.ltpa.customLtpaSecret
```

### Custom Secret Validation

When using a custom secret, the secret must:
1. Exist in the same namespace as the deployment
2. Contain all required data keys
3. Have properly encoded values

The chart performs runtime validation using Kubernetes `lookup` function to verify secret existence and completeness.

## Configuration Examples

### Example 1: Development with Inline Values

```yaml
applications:
  core: true

configuration:
  core:
    ltpa:
      enabled: true
      version: "1.0"
      realm: "DXDevelopment"
      desKey: "dev-des-key-12345"
      privateKey: "xxxxxx"
      publicKey: "xxxxxx"
      password: "dev-password"
      customLtpaSecret: ""
```

### Example 2: Production with External Secret

```yaml
applications:
  core: true

configuration:
  core:
    ltpa:
      enabled: true
      version: ""
      realm: ""
      desKey: ""
      privateKey: ""
      publicKey: ""
      password: ""
      customLtpaSecret: "prod-ltpa-credentials"
```

**Pre-requisite:** Secret must exist in the target namespace:

```bash
# If using Vault, AWS Secrets Manager, etc., create the secret first
kubectl create secret generic prod-ltpa-credentials \
  --from-literal='ltpa.version=1.0' \
  --from-literal='ltpa.realm=ProdRealm' \
  --from-file='ltpa.desKey=./ltpa.des' \
  --from-file='ltpa.privateKey=./ltpa.private.key' \
  --from-file='ltpa.publicKey=./ltpa.public.key' \
  --from-literal='ltpa.password=prod-secure-password' \
  -n production
```

### Example 3: Shared LTPA Configuration (Configuration Sharing)

When configuration sharing is enabled, LTPA keys are exported to a shared secret (`dx-shared-config-v1`) for use by other applications (LEAP, MX, etc.):

```yaml
incubator:
  enableConfigurationSharing: true

configuration:
  core:
    ltpa:
      enabled: true
      customLtpaSecret: "my-ltpa-secret"
```

The Core LTPA configuration becomes available to other products mounting the `dx-shared-config-v1` secret.

## Kubernetes Secret Details

### Generated Secret Structure

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: my-release-core-ltpa
  labels:
    app.kubernetes.io/name: hcl-dx-deployment
    app.kubernetes.io/instance: my-release
type: Opaque
data:
  ltpa.version: <base64-encoded>
  ltpa.realm: <base64-encoded>
  ltpa.desKey: <base64-encoded>
  ltpa.privateKey: <base64-encoded>
  ltpa.publicKey: <base64-encoded>
  ltpa.password: <double-base64-encoded>
```

**Note:** The password field undergoes double base64 encoding for additional security.

### Secret Lifecycle

- **Creation:** Secret is created during Helm release installation if LTPA is enabled
- **Updates:** When values change, Kubernetes automatically triggers pod restarts (via checksum annotation)
- **Deletion:** Secret is deleted when the Helm release is uninstalled (unless using external secrets)

## Checksum & Pod Restart

The chart automatically includes a checksum of LTPA configuration in the StatefulSet annotations. This ensures:

- Pods automatically restart when LTPA credentials change
- Configuration changes take effect immediately
- No manual pod restart required

```yaml
annotations:
  checksum/ltpa: "sha256:abc123def456..."
```

## Troubleshooting

### Issue: LTPA Secret Not Found

**Symptom:** Pod fails to start with error about missing secret

```
Error: lookup failed: Secret my-ltpa-secret not found
```

**Solution:**
1. Verify secret exists: `kubectl get secret my-ltpa-secret -n <namespace>`
2. Verify secret is in correct namespace
3. Check secret key names match requirements

### Issue: Validation Fails

**Symptom:** Helm deployment fails with validation error

```
Either configuration.core.ltpa values are set even though a custom secret was provided
```

**Solution:**
1. Use **either** inline values **or** custom secret, not both
2. Clear unused fields:
   ```yaml
   configuration:
     core:
       ltpa:
         customLtpaSecret: "my-secret"
         version: ""
         realm: ""
         desKey: ""
         privateKey: ""
         publicKey: ""
         password: ""
   ```
