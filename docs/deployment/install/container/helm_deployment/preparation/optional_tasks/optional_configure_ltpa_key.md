# Configuring LTPA

Lightweight Third Party Authentication (LTPA) is a Single Sign-On (SSO) mechanism used for authentication and session sharing across multiple applications. In the DX Core component, LTPA configuration is managed through Helm values and Kubernetes Secrets.

## Configuration methods

There are two mutually exclusive ways to configure LTPA for Core:

- Inline configuration through the `values.yaml` file
- Custom Secret reference

### Inline configuration

Configure LTPA credentials directly in your `values.yaml` file by specifying the following properties:

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

### Custom Secret reference

Reference an existing Kubernetes Secret containing LTPA credentials by specifying the following properties:

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

## Generating LTPA keys

To generate LTPA keys for Core, export them from the IBM WebSphere Administrative Console:

1. Login to the IBM WebSphere Administrative Console at **`/ibm/console`** with your credentials.

2. Go to **Security** > **Global security**.

3. Under **Authentication**, select **LTPA**.

4. Under **Cross-cell single sign-on**, enter a **Password** and specify the **Fully qualified key file name** (for example, `/opt/HCL/mykey.ltpa`).

5. Select **Export keys**.

6. Extract the LTPA key file from the running pod:

    ```bash
    kubectl -n <namespace> exec -it pod/<release>-core-0 -- cat /opt/HCL/ltpa.keys
    ```

7. Save the command output as a local file for use in the next section.

## Creating a custom LTPA Secret

When using a custom Secret, the Secret must contain the following data keys:

| Key | Description | Format |
|-----|-------------|--------|
| `ltpa.version` | LTPA token version | String (for example, "1.0") |
| `ltpa.realm` | LTPA realm name | String |
| `ltpa.desKey` | 3DES encryption key | String |
| `ltpa.privateKey` | Private key for LTPA token signing | String |
| `ltpa.publicKey` | Public key for LTPA token verification | String |
| `ltpa.password` | Password for LTPA key protection | String |

!!!note
    - When using a custom Secret, the resource must exist in the same namespace as the deployment, contain all the required data keys, and use properly encoded values.
    - The chart uses the Kubernetes `lookup` function to verify that the Secret exists and contains all the required keys.

- To create a custom Secret using `kubectl`, run the following command:

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

- To create a custom Secret using a YAML manifest, define the following resource in a separate YAML file (for example, `my-ltpa-secret.yaml`) and apply it to your cluster:

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

## Configuration examples

The following examples demonstrate how to configure LTPA for different environments:

- **Define inline values for development**

    Use this method for local or development environments where you want Helm to manage the Secret lifecycle directly.

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

- **Reference an external Secret for production**

    Use this method for production environments where you manage credentials externally. You must create the Secret in the target namespace before you deploy.

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

    In your `values.yaml`, reference the Secret name and set the inline fields to empty strings:

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

## Troubleshooting

- **Mutual exclusivity error**

    Specifying both inline values and a custom Secret simultaneously results in the following error:

    ```text
    Either configuration.core.ltpa values are set even though a custom Secret was provided. 
    Please explicitly set the unused credentials to be empty/null
    ```

    For example, this configuration is invalid:

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

    To resolve this, ensure you use only one method. If you use a custom Secret, you must set all unused inline fields to empty strings:

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

- **Completeness requirement error**

    Enabling LTPA without providing all required fields through either method results in the following error:

    ```text
    Please provide a configuration for LTPA by either setting Values.configuration.core.ltpa values 
    or by referencing a secret in configuration.core.ltpa.customLtpaSecret
    ```

    For example, this configuration is invalid because it is missing the publicKey and privateKey fields:

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

    To resolve this, ensure you provide all required keys or reference a complete custom Secret.

- **LTPA Secret not found error**

    Referencing a Secret that does not exist or cannot be located during pod startup results in the following error:

    ```text
    Error: lookup failed: Secret my-ltpa-secret not found
    ```

    You can verify the resource using the following command:

    ```bash
    kubectl get secret my-ltpa-secret -n <namespace>
    ```

    To resolve this, ensure the Secret exists in the target namespace, resides in the correct namespace, and that the Secret key names match the requirements.
