# Configure scaling

The HCL Digital Experience 9.5 Kubernetes deployment using Helm allows you to configure the pod count of each individual application.

In addition, it is possible to configure the use of HorizontalPodAutoscalers that scales up and down the applications by adding or removing Pods based on the pod metrics. Refer to the [Scaling DX 9.5 container deployments using Helm](../../architecture/container_scaling.md) Help Center topic for detailed overview information.

!!! note
    You are not able to use more than one \(1\) Core Pod until you have performed a database transfer.

## Configuring pod count

Even if you don't want to automatically scale your DX 9.5 deployment based on CPU and memory utilization, you still can control the amount of pods per application.

You can use the following syntax to reconfigure the pod count per application in your custom-values.yaml file:

```
# Scaling settings for deployed applications
scaling:
  # The default amount of replicas per application
  replicas:
    contentComposer: 1
    core: 1
    designStudio: 1
    digitalAssetManagement: 3
    imageProcessor: 5
    ringApi: 3
    haproxy: 3

```

## Configuring HorizontalPodAutoscalers

The use of HorizontalPodAutoscalers requires your cluster to have the [Kubernetes Metrics](https://github.com/kubernetes-sigs/metrics-server) running. Ensure that this is the case, and reference your cloud provider documentation for further information.

You can set up the use of `HorizontalPodAutoscalers` on a per application basis using the following syntax in your custom-values.yaml file, showing Content Composer, as an example:

```
# Scaling settings for deployed applications
scaling:
  # Automated scaling using HorizontalPodAutoscaler
  horizontalPodAutoScaler:
    # Autoscaling settings for Content Composer
    contentComposer:
      # Enable or disable autoscaling
      enabled: true
      # Minimum and maximum Pod count
      minReplicas: 1
      maxReplicas: 3
      # Target CPU utilization scaling threshold
      targetCPUUtilizationPercentage: 75
      # Target Memory utilization scaling threshold
      targetMemoryUtilizationPercentage: 80

```

The example configures a `HorizontalPodAutoscaler` for Content Composer, that scales up to 3 pods maximum. It considers scaling when a CPU utilization of 75% or Memory utilization of 80% per pod is reached.

Refer to the default values.yaml file for all configurable applications.
mands](helm_install_commands.md)** for the next steps.