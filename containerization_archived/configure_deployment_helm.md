# Configuring DX 9.5 deployments to container platforms using Helm

This topic covers details the configuration structure in the HCL Digital Experience 9.5 OpenShift and Kubernetes deployment with Helm.

## Configuration overview

In the DX 9.5 component definitions, each application has a dedicated ConfigMap. They contain application specific key/value pairs that are derived from the templates in the DX 9.5 [Helm Chart](https://helm.sh/docs/topics/charts/) and the values inside the values.yaml \(and/or your custom value overrides\).

## Rollout of configuration changes

Configuration changes are automatically processed by the HCL Digital Experience 9.5 OpenShift or Kubernetes deployment with Helm.

**DX 9.5 Container Upgrades Via Helm Operations Details**

Beginning with HCL DX 9.5 Container Upgrade CF196, Helm deployment is supported on the Google Kubernetes Engine platform \(GKE\). As Helm deployment methods are supported on the additional DX 9.5 supported OpenShift or Kubernetes platform of choice, it is recommended that administrators use Helm deployment to manage upgrade processes. Note that use of [dxctl](dxtools_dxctl.md) to manage these operations is also supported, but will be deprecated over time in favor of Helm. When supported on the additional DX 9.5 container platforms, the recommended way to change the configuration of a running deployment is via a Helm upgrade. Once the upgrade command is executed, it calculates and apply all changes that derive from the changes that have been made to the values definitions.

The DX Helm deployment uses annotations on each application to share the checksum of the last ConfigMap. This checksum is updated as soon as Helm upgrade is performed and that there has been a change to the configuration of an application. When the checksum is updated, OpenShift or Kubernetes proceeds to roll out the new configuration. Based on the count of Pods per application that you are running, this may cause a downtime in operations.

To minimize the impact of operations to configuration changes processing, consider running at least a quorum of 3 Pods per application. This allows OpenShift and Kubernetes to properly roll out the new configurations and maintain availability of the applications operations throughout the entire upgrade processing cycle.

**Direct Configuration changes in Kubernetes or OpenShift**

For development and testing, sometimes it is useful to directly adjust configuration in ConfigMaps via Kubernetes \(for example, `kubectl edit cm`\) or OpenShift commands. In that case, the runtime controller is to notice that there has been a change to a ConfigMap and calculates the checksum for the Pod specification of the affected application. Kubernetes or OpenShift thens proceed to roll out the new configuration. This is the same processing methodology applies as when using Helm upgrade definitions.

**Note:** It is recommended that administrators use Helm upgrade for configuration changes, as the DX 9.5 Helm chart contains logic to calculate certain values. If you choose to edit ConfigMaps directly in the Kubernetes or OpenShift console, do note that running a Helm upgrade overwrites the settings you inserted directly/manually in your deployment. It is recommended to apply configuration changes directly on an as-needed basis and only for development and testing purposes. Please also ensure that the **keys** used inside the ConfigMap are ordered **alphabetically**.

## List of HCL DX 9.5 ConfigMaps

|Name|Application|
|----|-----------|
|`<RELEASE-NAME>-content-composer`|Content Composer|
|`<RELEASE-NAME>-core`|Core|
|`<RELEASE-NAME>-design-studio`|Design Studio \(beta\)|
|`<RELEASE-NAME>-digital-asset-management`|Digital Asset Management|
|`<RELEASE-NAME>-image-processor`|Image Processor|
|`<RELEASE-NAME>-persistence`|Persistence|
|`<RELEASE-NAME>-ring-api`|Ring API|
|`<RELEASE-NAME>-runtime-controller`|Runtime Controller|

**Parent topic:**[Overview of the Helm architecture](../containerization/helm_overview.md)

