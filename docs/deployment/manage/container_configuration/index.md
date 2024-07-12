# Configuration

This topic covers details the configuration structure in the HCL Digital Experience 9.5 Kubernetes deployment with Helm.

## Configuration overview

In the DX 9.5 component definitions, each application has a dedicated ConfigMap. They contain application specific key/value pairs that are derived from the templates in the DX 9.5 [Helm Chart](https://helm.sh/docs/topics/charts/) and the values inside the values.yaml (and/or your custom value overrides).

## Rollout of configuration changes

Configuration changes are automatically processed by the HCL Digital Experience 9.5 Kubernetes deployment with Helm.

**DX 9.5 Container Upgrades Via Helm Operations Details**

As Helm deployment methods are supported on the additional DX 9.5 supported Kubernetes platforms of choice, administrators must use Helm to manage upgrade processes. When supported on the additional DX 9.5 container platforms, the recommended way to change the configuration of a running deployment is through a Helm upgrade. Once the upgrade command is executed, it calculates and apply all changes that derive from the changes that have been made to the values definitions.

The DX Helm deployment uses annotations on each application to share the checksum of the last ConfigMap. This checksum is updated as soon as Helm upgrade is performed and that there has been a change to the configuration of an application. When the checksum is updated, Kubernetes proceeds to roll out the new configuration. Based on the count of Pods per application that you are running, this may cause a downtime in operations.

To minimize the impact of operations to configuration changes processing, consider running at least a quorum of 3 Pods per application. This allows Kubernetes to properly roll out the new configurations and maintain availability of the applications operations throughout the entire upgrade processing cycle.

**Direct Configuration changes in Kubernetes**

Starting CF221, the Runtime Controller triggering Pod restarts for manual changes to the ConfigMaps through `kubectl edit cm` is removed. For more information, see [Deprecated features](../../../whatsnew/deprecated_features.md).

If any changes are made to the ConfigMaps for testing configurations, the appropriate Pods must be restarted manually to apply the changes. This can be triggered using the [`kubectl rollout restart`](https://kubernetes.io/docs/reference/kubectl/generated/kubectl_rollout/kubectl_rollout_restart/) command.

!!! note
    Always use Helm upgrade for configuration changes because the DX 9.5 Helm chart contains logic to calculate certain values. If you choose to edit ConfigMaps directly in Kubernetes, do note that you can end up in an unsupported state and running a `helm upgrade` overwrites all entries you inserted or changed directly/manually in your deployment. It is recommended to apply configuration changes directly on an as-needed basis and only for development and testing purposes.

## List of HCL DX 9.5 ConfigMaps

|Name|Application|
|----|-----------|
|`<RELEASE-NAME>-content-composer`|Content Composer|
|`<RELEASE-NAME>-core`|Core|
|`<RELEASE-NAME>-digital-asset-management`|Digital Asset Management|
|`<RELEASE-NAME>-haproxy`|HAProxy|
|`<RELEASE-NAME>-image-processor`|Image Processor|
|`<RELEASE-NAME>-license-manager`|License Manager|
|`<RELEASE-NAME>-persistence-connection-pool`|Persistence Connection Pool|
|`<RELEASE-NAME>-persistence-node`|Persistence Nodes|
|`<RELEASE-NAME>-ring-api`|Ring API|
|`<RELEASE-NAME>-runtime-controller`|Runtime Controller|
|`<RELEASE-NAME>-global`|Global Log configurations|

## Limitation

Config Wizard on Kube using Chrome browser can hang while filling out entries.

When using the Configuration Wizard on a Kubernetes deployment, the browser can hang indefinitely due to the autofill feature of Chrome. To work around this, you can use another supported browser or disable the **Chrome Auto-fill** feature.
