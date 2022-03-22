# Prepare the Operator properties for migration

This section shows the guidance to prepare the mapping of your Operator deployment properties, so you can reuse them in your Helm deployment.

The Operator-based to Helm-based migration is a strict side-by-side migration. This section outlines the needed steps to configure your new Helm-based deployment with your old Operator-based deployment configuration settings. Once you have extracted the needed data, and have shut down your Operator-based deployment, you can apply your exported data in your new Helm-based deployment. Note that you are not migrating your DX Core database as you will reuse the same database instance in your Helm-based deployment.

**Important:**

-   Ensure that the current [HCL DX 9.5 limitations and requirements](limitations_requirements.md), as well as [limitations specific to a Helm deployment](limitations_requirements.md#section_ydj_z2n_1qb), are met.
-   Ensure that you have followed the preparation process in [Planning your container deployment using Helm](helm_planning_deployment.md), and that you have already created your custom-values.yaml.
-   As with any migration activity, we recommend that you make backups of the data of your current environment before proceeding. See [Backup and recovery procedures](operator_backup_and_recovery_procedures.md) for more information.
-   In case of any errors after migration, you can fall back to your previous Operator-based environment. See [Migration to restore Core and DAM Operator deployment](helm_fallback_migration_Operator_deployment.md) for more information.
-   You must have the properties file you used with `dxctl` in your old Operator deployment. If you do not have the properties file, refer to the [`dxctl` topic](dxtools_dxctl.md) to extract the properties file from your existing deployment using the `getProperties` function.
-   Ensure to prepare any other needed infrastructure-related items \(like persistent volumes, Kubernetes load balancer configuration, etc.\) before proceeding with migration to Helm.

Optionally, you can perform a test deployment to make sure that all prerequisites and requirements for the Helm deployment are met. Follow the [installation steps](helm_install_commands.md#run_using_Helm) and check if all the functionality of the default deployment is accessible. If you do not prefer to do an initial test, you can skip to start with the [Core](helm_operator_core_migration.md) and [DAM](../digital_asset_mgmt/operator_dam_backup_restore_image.md) migration immediately.

Before migrating to Helm, you must migrate the configuration of your Operator-based deployment first. Follow this guidance to prepare the property mappings for your HCL DX 9.5 Operator-based deployment. You can reuse the values from your deployment.properties file in your new custom-values.yaml.

**Property mappings**

This section lists the mapping of the `dxctl` deployment.properties file with the custom-values.yaml.

**Note:** You should only transfer settings that you have adjusted for your Operator deployment. It is not recommended to overwrite all Helm defaults with the defaults of the old Operator deployment. Only migrate settings that are relevant for you, or those that have been adjusted by you prior deploying the Operator with `dxctl`.

|`dxctl` deployment.properties|custom-values.yaml|Description|
|-----------------------------|------------------|-----------|
|`dx.namespace`|Not applicable|The `namespace` used for the deployment. This is handed directly to Helm through the command line interface.|
|`dx.name`|Not applicable|The `deployment name`. This is handed directly to Helm through the command line interface.|
|`default.repository`|`images.repository`|Defines the image repository for all container images.|
|`dx.pullpolicy`|`images.pullPolicy`|Defines the image pull policy for all container images.|
|`<application>.image`|`images.name.<application>`|Name of the container image.|
|`<application>.tag`|`images.tag.<application>`|Name of the container tag.|
|`<application>.enabled`|`applications.<application>`|Enables or disables specific applications.|
|`dx.pod.nodeselector`|`nodeSelector.<application>`|`NodeSelector` used for pods, can now be done per application in Helm|
|`dx.config.authoring`|`configuration.core.tuning.authoring`|Selects if the instance is tuned for authoring or not.|
|`composer.enabled`|`applications.contentComposer`|Selects if Content Composer is deployed or not.|
|`dam.enabled`|`applications.digitalAssetManagement`|Selects if Digital Asset Management is deployed or not.|
|`persist.force-read`|Not applicable|Read-only fallback enablement. This is always enabled in Helm.|

|`dxctl` deployment.properties|custom-values.yaml|Description|
|-----------------------------|------------------|-----------|
|`dx.volume`|`volumes.core.profile.volumeName`|The name of the volume used for the DX core profile.|
|`dx.volume.size`|`volumes.core.profile.requests.storage`|Size of the volume used for the DX core profile.|
|`dx.storageclass`|`volumes.core.profile.storageClassName`|`StorageClass` of the volume used for the DX core profile.|
|`dx.splitlogging: false`|Not applicable.|Defines if the log directory uses a separate volume. This is always enabled in Helm.|
|`dx.logging.stgclass`|`volumes.core.log.storageClassName`|`StorageClass` for the DX core logging volume.|
|`dx.logging.size`|`volumes.core.log.requests.storage`|`StorageClass` for the DX core logging volume.|
|`dx.tranlogging`|Not applicable.|Defines if the transaction log directory uses a separate volume. This is always enabled in Helm.|
|`dx.tranlogging.reclaim`|Not applicable.|Reclaim policy for DX core transaction log volume. Determined by PV instead of Helm|
|`dx.tranlogging.stgclass`|`volumes.core.tranlog.storageClassName`|`StorageClass` for the DX core transaction log volume.|
|`dx.tranlogging.size`|`volumes.core.tranlog.requests.storage`|Size used for the DX core transaction log volume.|
|`remote.search.volume`|`volumes.remoteSearch.prsprofile.volumeName`|Name of the volume used for the DX Remote Search profile.|
|`remote.search.stgclass`|`volumes.remoteSearch.prsprofile.storageClassName`|`StorageClass` of the volume for the DX Remote Search profile.|
|`dam.volume`|`volumes.digitalAssetManagement.binaries.volumeName`|Name of the volume used for DAM.|
|`dam.stgclass`|`volumes.digitalAssetManagement.binaries.storageClassName`|`StorageClass` of the volume used for DAM.|

|`dxctl` deployment.properties|custom-values.yaml|Description|
|-----------------------------|------------------|-----------|
|`dx.path.contextroot`|`networking.core.contextRoot`|Context root used for DX.|
|`dx.path.personalized`|`networking.core.personalizedHome`|Personalized URL path for DX.|
|`dx.path.home`|`networking.core.home`|Non-personalized URL path for DX.|
|`dx.deploy.host.override`|`networking.core.host`|Host name to be used instead of the load balancer host name.|
|`dx.deploy.host.override.force`|Not applicable.|Force the use of the override host. Obsolete in Helm.|
|`dx.config.cors` / `dam.config.cors`|`networking.addon.<application>.corsOrigin`|CORS configuration for applications, can be configured per application in Helm.|
|`hybrid.enabled`|Not applicable.|Defines if hybrid is enabled or not. Helm derives this from other networking and application settings.|
|`hybrid.url`|`networking.core.host`|URL of the DX core instance in a hybrid deployment.|
|`hybrid.port`|`networking.core.port`|Port of the DX core instance in a hybrid deployment.|

|`dxctl` deployment.properties|custom-values.yaml|Description|
|-----------------------------|------------------|-----------|
|`dx.minreplicas`|`scaling.horizontalPodAutoScaler.core.minReplicas`|Minimum number of pods when scaling is enabled.|
|`dx.maxreplicas`|`scaling.horizontalPodAutoScaler.core.maxReplicas`|Maximum number of pods when scaling is enabled.|
|`dx.replicas`|`scaling.replicas.core`|Default number of pods when scaling is enabled.|
|`dx.targetcpuutilizationpercent`|`scaling.horizontalPodAutoScaler.core.targetCPUUtilizationPercentage`|CPU target for autoscaling.|
|`dx.targetmemoryutilizationpercent`|`scaling.horizontalPodAutoScaler.core.targetMemoryUtilizationPercentage`|Memory target for autoscaling.|

|`dxctl` deployment.properties|custom-values.yaml|Description|
|-----------------------------|------------------|-----------|
|`api.minreplicas`|`scaling.horizontalPodAutoScaler.ringApi.minReplicas`|Minimum number of pods when scaling is enabled.|
|`api.maxreplicas`|`scaling.horizontalPodAutoScaler.ringApi.maxReplicas`|Maximum number of pods when scaling is enabled.|
|`api.targetcpuutilizationpercent`|`scaling.horizontalPodAutoScaler.ringApi.targetCPUUtilizationPercentage`|CPU target for autoscaling.|
|`api.targetmemoryutilizationpercent`|`scaling.horizontalPodAutoScaler.ringApi.targetMemoryUtilizationPercentage`|Memory target for autoscaling.|

|`dxctl` deployment.properties|custom-values.yaml|Description|
|-----------------------------|------------------|-----------|
|`composer.minreplicas`|`scaling.horizontalPodAutoScaler.contentComposer.minReplicas`|Minimum number of pods when scaling is enabled.|
|`composer.maxreplicas`|`scaling.horizontalPodAutoScaler.contentComposer.maxReplicas`|Maximum number of pods when scaling is enabled.|
|`composer.targetcpuutilizationpercent`|`scaling.horizontalPodAutoScaler.contentComposer.targetCPUUtilizationPercentage`|CPU target for autoscaling.|
|`composer.targetmemoryutilizationpercent`|`scaling.horizontalPodAutoScaler.contentComposer.targetMemoryUtilizationPercentage`|Memory target for autoscaling.|

|`dxctl` deployment.properties|custom-values.yaml|Description|
|-----------------------------|------------------|-----------|
|`dam.minreplicas`|`scaling.horizontalPodAutoScaler.digitalAssetManagement.minReplicas`|Minimum number of pods when scaling is enabled.|
|`dam.maxreplicas`|`scaling.horizontalPodAutoScaler.digitalAssetManagement.maxReplicas`|Maximum number of pods when scaling is enabled.|
|`dam.targetcpuutilizationpercent`|`scaling.horizontalPodAutoScaler.digitalAssetManagement.targetCPUUtilizationPercentage`|CPU target for autoscaling.|
|`dam.targetmemoryutilizationpercent`|`scaling.horizontalPodAutoScaler.digitalAssetManagement.targetMemoryUtilizationPercentage`|Memory target for autoscaling.|

|`dxctl` deployment.properties|custom-values.yaml|Description|
|-----------------------------|------------------|-----------|
|`imgproc.minreplicas`|`scaling.horizontalPodAutoScaler.imageProcessor.minReplicas`|Minimum number of pods when scaling is enabled.|
|`imgproc.maxreplicas`|`scaling.horizontalPodAutoScaler.imageProcessor.maxReplicas`|Maximum number of pods when scaling is enabled.|
|`imgproc.targetcpuutilizationpercent`|`scaling.horizontalPodAutoScaler.imageProcessor.targetCPUUtilizationPercentage`|CPU target for autoscaling.|
|`imgproc.targetmemoryutilizationpercent`|`scaling.horizontalPodAutoScaler.imageProcessor.targetMemoryUtilizationPercentage`|Memory target for autoscaling.|

|`dxctl` deployment.properties|custom-values.yaml|Description|
|-----------------------------|------------------|-----------|
|`dx.request.cpu`|`resources.core.requests.cpu`|CPU request.|
|`dx.request.memory`|`resources.core.requests.memory`|Memory request.|
|`dx.limit.cpu`|`resources.core.limits.cpu`|CPU limit.|
|`dx.limit.memory`|`resources.core.limits.memory`|Memory limit.|

|`dxctl` deployment.properties|custom-values.yaml|Description|
|-----------------------------|------------------|-----------|
|`api.request.cpu`|`resources.ringApi.requests.cpu`|CPU request.|
|`api.request.memory`|`resources.ringApi.requests.memory`|Memory request.|
|`api.limit.cpu`|`resources.ringApi.limits.cpu`|CPU limit.|
|`api.limit.memory`|`resources.ringApi.limits.memory`|Memory limit.|

|`dxctl` deployment.properties|custom-values.yaml|Description|
|-----------------------------|------------------|-----------|
|`composer.request.cpu`|`resources.contentComposer.requests.cpu`|CPU request.|
|`composer.request.memory`|`resources.contentComposer.requests.memory`|Memory request.|
|`composer.limit.cpu`|`resources.contentComposer.limits.cpu`|CPU limit.|
|`composer.limit.memory`|`resources.contentComposer.limits.memory`|Memory limit.|

|`dxctl` deployment.properties|custom-values.yaml|Description|
|-----------------------------|------------------|-----------|
|`dam.request.cpu`|`resources.digitalAssetManagement.requests.cpu`|CPU request.|
|`dam.request.memory`|`resources.digitalAssetManagement.requests.memory`|Memory request.|
|`dam.limit.cpu`|`resources.digitalAssetManagement.limits.cpu`|CPU limit.|
|`dam.limit.memory`|`resources.digitalAssetManagement.limits.memory`|Memory limit.|

|`dxctl` deployment.properties|custom-values.yaml|Description|
|-----------------------------|------------------|-----------|
|`persist.request.cpu`|`resources.persistence.requests.cpu`|CPU request.|
|`persist.request.memory`|`resources.persistence.requests.memory`|Memory request.|
|`persist.limit.cpu`|`resources.persistence.limits.cpu`|CPU limit.|
|`persist.limit.memory`|`resources.persistence.limits.memory`|Memory limit.|

|`dxctl` deployment.properties|custom-values.yaml|Description|
|-----------------------------|------------------|-----------|
|`imgproc.request.cpu`|`resources.imageProcessor.requests.cpu`|CPU request.|
|`imgproc.request.memory`|`resources.imageProcessor.requests.memory`|Memory request.|
|`imgproc.limit.cpu`|`resources.imageProcessor.limits.cpu`|CPU limit.|
|`imgproc.limit.memory`|`resources.imageProcessor.limits.memory`|Memory limit.|

**Parent topic:**[Migrating from Operator to Helm deployments](../containerization/helm_operator_migration.md)

