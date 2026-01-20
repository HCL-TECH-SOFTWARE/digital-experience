# Configuration Sharing for co-deployments

!!!warning
    - The Configuration Sharing feature is currently in **Incubator** status and is **not ready for production use**. This feature can be subject to change, and is intended for information and evaluation. For more information, refer to [Experimental Features](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_experimental_features.md).
    - This feature requires HCL Leap version 9.3.13 or later.
    - If HCL Leap is an earlier version, is in a different namespace, or the shared Secret is missing, the system falls back to the local configuration.

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

    - The Secret follows a strict, well-known naming convention: `<product-name>-shared-config-v<major-version>`.
    - For example, HCL DX creates a Secret named `dx-shared-config-v1`.
    - The major version (`v1`) only increments if there are breaking changes to the configuration schema.
    - The Secret contains integration related settings, such as Lightweight Third-Party Authentication (LTPA) keys provided by the DX Core component.
    - The shared Secret will be recreated during a Helm upgrade if the values setting the configuration values within it have changed (for example, a password update).

        !!!note
            The Secret contains the producer's Helm values or custom secrets.

2. The consumer uses the shared Secret.

    You can configure other co-deployed HCL products (the consumer, such as Leap or MX) to look for, and use this shared Secret.

    - The consumer's pod is configured to mount the Secret as a volume.
    - At runtime, the consumer application reads the configuration files from the mounted volume and applies the settings, enabling the seamless integration.
    - The volume mount is set as `optional: true` in the Kubernetes deployment. This is a critical feature that ensures the consumer product will start successfully even if the producer product is not deployed or the shared Secret is missing.
    - Consumers use the shared configuration when available, but fall back to their default configuration if it is missing.

## Enabling and configuring Configuration Sharing

The entire mechanism is controlled using the feature flags in the Helm `values.yaml` file of your product.

1. Enable the Producer by sharing the product's configuration.

    Set the primary feature flag to `true` in the product's `values.yaml` file:

    ```yaml
    # values.yaml
    # enableConfigurationSharing: Enables the creation of the <chart-name>-shared-config-v1 secret
    # to share configuration with other HCL products in the same namespace.
    enableConfigurationSharing: false  # Change this to true
    ```

2. Configure the Consumer product to look for a specific shared Secret by defining which version of the shared configuration it intends to use for greater control.

    Set the `name`, `min`, and `max` `version` of the `consumeSharedConfigs` parameter in the `values.yaml` file:

    ```yaml
    consumeSharedConfigs:
      - name: dx-shared-config
        minVersion: 1
        maxVersion: 2
    ```

    This explicit configuration helps prevent unintended integration issues if new products that also share configurations are deployed in the future.

3. Once the consumer pod is running, you can access the shared configuration data inside the container.

    The Secret is mounted to a path inside the container, such as `/mnt/shared-config/`. Each key from the shared Secret is exposed as a separate file at that mount path. For example, if the producer's shared Secret contains the key `ltpa.key`, the consumer application will read its contents from the file path: `/mnt/shared-config/dx-shared-config-v1/ltpa.key`.
