# Co-Deployment Configuration Sharing

!!!attention
    This configuration sharing capability is currently in *incubator* status and is **not ready for production use**. Features in the incubator phase are experimental, subject to change, and intended for evaluation and feedback only. For more information, see [Incubator Features Definition](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_experimental_features.md).

This guide explains how you can use the standardized **Configuration Sharing** feature between HCL products (such as DX, LEAP, and MX) deployed within the same Kubernetes namespace. The goal is to simplify integration, reduce manual configuration, and create a single source of truth for common settings.

## Overview and Key Benefits

Configuration sharing is an **opt-in mechanism** that allows one product (the **Producer**) to securely share configuration data with other products (the **Consumers**) using native Kubernetes **Secrets**.

**Key Benefits:**

  * **Seamless Integration**: Automatically configure integrations, such as Single Sign-On (SSO), between co-deployed HCL products without manual configuration.
  * **Independent Operation**: Products operate independently. The shared configuration is **optional**, so a consumer product will still start successfully even if the producer product is not deployed or if the shared Secret is missing.
  * **Reduced Overhead**: Minimize configuration effort and operational overhead by using a single, shared source for common settings.
  * **Decentralized**: The mechanism relies on core Kubernetes features (Secrets), ensuring there is no new, complex component or single point of failure introduced to your cluster.

## How Configuration Sharing Works

The process is managed automatically by the products Helm charts once the feature is enabled.

### 1. The Producer Creates the Shared Secret

When you enable configuration sharing on a product (the Producer, e.g., DX), its Helm chart will automatically create a Kubernetes Secret to house the shared settings.

  * **Secret Naming Convention**: The Secret follows a strict, well-known naming convention: **`<product-name>-shared-config-v<major>`**.
      * For example, HCL Digital Experience (DX) creates a Secret named `dx-shared-config-v1`.
      * The major version (`v1`) only increments if there are breaking changes to the configuration schema.
  * **Shared Data**: The Secret contains integration-critical settings, such as **LTPA** (Lightweight Third-Party Authentication) and **SSL** configuration, provided by the DX Core and WebEngine components.
      * *Note*: The data in the Secret is keyed (e.g., `core.ltpa`, `webengine.ltpa`) to prevent configuration conflicts between components.

### 2. The Consumer Uses the Shared Secret

Any other co-deployed HCL product (the Consumer, e.g., LEAP or MX) can be configured to look for and use this shared Secret.

  * The Consumer's pod is configured to **mount the Secret as a volume**.
  * **Runtime Consumption**: At runtime, the consumer application reads the configuration files from the mounted volume and applies the settings, enabling the seamless integration.
  * **Optional Dependency**: The volume mount is set as `optional: true` in the Kubernetes deployment. This is a critical feature that ensures the consumer product will start successfully even if the producer product or the shared Secret is not deployed.

-----

## How to Enable and Configure the Feature

The entire mechanism is controlled via feature flags in your product's Helm `values.yaml` file.

### Enabling the Producer (Sharing Product's Configuration)

To make your product share its configuration, set the primary feature flag to `true` in its `values.yaml` file:

```yaml
# values.yaml
# enableConfigurationSharing: Enables the creation of the <chart-name>-shared-config-v1 secret
# to share configuration with other HCL products in the same namespace.
enableConfigurationSharing: false  # Change this to true
```

### Configuring the Consumer (Consuming Shared Configuration)

The consuming product can explicitly define which version of shared configuration it intends to use for greater control.

You can configure the consumer product to look for a specific shared Secret by its name and version in the `values.yaml`:

```yaml
consumeSharedConfigs:
    - name: dx-shared-config  # The name of the producer's shared secret
      version: v1            # The version of the schema it expects
```

Alternatively, you can specify a range of versions the consumer is compatible with:

```yaml
consumeSharedConfigs:
    - name: dx-shared-config
      version: 
          min: v1
          max: v2
```

This explicit configuration helps prevent unintended integration issues if new products are deployed in the future that also share configurations.

### Accessing the Shared Data within a Container

Once the consumer pod is running, the shared configuration data becomes accessible inside the container.

  * The Secret is mounted to a path inside the container, such as `/etc/config/shared/<application>`.
  * Each key from the shared Secret's data (e.g., `core.ltpa`) is exposed as a separate file at that mount path.
  * For example, if the producer's shared Secret contains the key `core.ltpa`, the consumer application will read its contents from the file path: `/etc/config/shared/dx/core.ltpa`.