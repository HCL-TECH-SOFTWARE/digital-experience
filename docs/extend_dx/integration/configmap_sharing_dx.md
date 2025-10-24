# Configuration Sharing for co-deployments

!!!warning
    The Configuration Sharing feature is currently in **incubator** status and is **not ready for production-use**. This Feature is experimental, subject to change, and intended for information and evaluation. For more information, refer to [Experimental Features](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_experimental_features.md). 

This guide explains how you can use the standardized Configuration Sharing feature between HCL products such as HCL Digital Experience (DX), HCL Leap, and Volt MX Foundry (MX) deployed within the same Kubernetes namespace. This feature simplifies integration, reduces manual configuration, and creates a single source of truth for common settings.

## Overview and key benefits

Configuration sharing is an opt-in mechanism that allows one product (the producer) to securely share configuration data with other products (the consumers) using native Kubernetes Secrets.

- This feature automatically configures integrations, such as Single Sign-On (SSO), between co-deployed HCL products without manual configuration.
- The shared configuration is optional, ensuring that consumer products start successfully and remain functional even if the producer product is not deployed or the shared Secret is missing.
- It minimizes configuration effort and operational overhead by leveraging a single, shared source for common settings.
- The mechanism relies on core Kubernetes features (Secrets), ensuring there is no new, complex component or a single point of failure introduced to your cluster.

## Configuration Sharing process

The process is managed automatically by the products' Helm charts once the feature is enabled.

1. The producer creates the shared Secret.

    When you enable configuration sharing on a product (the producer, such as DX), its Helm chart automatically creates a Kubernetes Secret to house the shared settings.

    - The Secret follows a strict, well-known naming convention: `<product-name>-shared-config-v<major>`.
    - For example, HCL DX creates a Secret named `dx-shared-config-v1`.
    - The major version (`v1`) only increments if there are breaking changes to the configuration schema.
    - The Secret contains integration-critical settings, such as Lightweight Third-Party Authentication (LTPA) and Secure Sockets Layer (SSL) configurations, provided by the DX Core and WebEngine components. For custom Secrets, only the Secret's name is shared. Each consumer product independently looks up the actual custom Secret.
    - The shared Secret will be recreated during a Helm upgrade if the values setting the configuration values within it have changed (for example, a password update).

        !!!note
            The data in the Secret is labeled (for example, `core.ltpa`, `webengine.ltpa`) to prevent configuration conflicts between components. The shared Secret does not decode any other secrets. It is a fresh secret containing information from the producer's Helm `values.yaml` file.

2. The consumer uses the shared Secret.

    You can configure other co-deployed HCL products (the consumer, such as Leap or MX) to look for, and use this shared Secret.

    - The Consumer's pod is configured to mount the Secret as a volume.
    - At runtime, the consumer application reads the configuration files from the mounted volume and applies the settings, enabling the seamless integration.
    - The volume mount is set as `optional: true` in the Kubernetes deployment. This is a critical feature that ensures the consumer product will start successfully even if the producer product or the shared Secret is not deployed.

## Enabling and configuring the Configuration Sharing feature

The entire mechanism is controlled via feature flags in your product's Helm `values.yaml` file.

1. Enable the producer by sharing the product's configuration.

    Set the primary feature flag to `true` in the product's `values.yaml` file:

    ```yaml
    # values.yaml
    # enableConfigurationSharing: Enables the creation of the <chart-name>-shared-config-v1 secret
    # to share configuration with other HCL products in the same namespace.
    enableConfigurationSharing: false  # Change this to true
    ```

2. Configure the consumer product to look for a specific shared Secret by defining which version of the shared configuration it intends to use for greater control.

    Set the `name` and `version` of the `consumeSharedConfigs` parameter in the `values.yaml`:

    ```yaml
    consumeSharedConfigs:
        - name: dx-shared-config  # The name of the producer's shared secret
          version: v1            # The version of the schema it expects
    ```

    Alternatively, you can specify a `version` range the consumer is compatible with:

    ```yaml
    consumeSharedConfigs:
        - name: dx-shared-config
          version: 
            min: v1
            max: v2
    ```

    This explicit configuration helps prevent unintended integration issues if new products that also share configurations are deployed in the future.

3. Once the consumer pod is running, you can access the shared configuration data inside the container.

    The Secret is mounted to a path inside the container, such as `/etc/config/shared/<application>`. Each key from the shared Secret (for example, `core.ltpa`) is exposed as a separate file at that mount path. For example, if the producer's shared Secret contains the key `core.ltpa`, the consumer application will read its contents from the file path: `/etc/config/shared/dx/core.ltpa`.
