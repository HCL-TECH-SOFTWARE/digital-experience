# Scaling DX 9.5 container deployments using Helm

This topic provides information to apply container scaling capabilities, and how scaling resources are handled within the HCL DX 9.5 deployment using Helm. Refer to `HorizontalPodAutoscaler` details in [Kubernetes](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) and [Red Hat OpenShift documentation](https://docs.openshift.com/container-platform/4.7/nodes/pods/nodes-pods-autoscaling.md) for more information on these services.

## Use of `HorizontalPodAutoscalers` in DX 9.5 Deployments using Helm

The following DX 9.5 applications can be configured to leverage `HorizontalPodAutoscalers` for Kubernetes and OpenShift based automated scaling:

-   Core
-   Content Composer
-   Design Studio \(beta\)
-   Digital Asset Management
-   Image Processor
-   Ring API

`HorizontalPodAutoscalers` monitor Pod resources such as CPU and Memory usage, and automatically scales up/down applications based on specific thresholds defined and scaling limits.

For the above mentioned DX applications, the maximum and minimum count of Replicas can be configured via the values.yaml. The thresholds for CPU and Memory usage are also configurable allowing for load-based automated scaling of these applications.

Per default, the automated scaling is not active and needs to be enabled before taking effect.

## Known limitations

-   **Core**

    The HCL Digital Experience 9.5 Core can only be scaled to more than one Pod if you have performed a database transfer from the default packaged Derby database. Prior to that, any other additional Pod except for Pod-0 fails to start, since the default packaged Derby database does not allow for multiple Pods connecting to it.

-   **Persistence**

    The Persistence used for Digital Asset Management currently supports scaling only with the updated persistence feature. For more information, see [Digital Asset Management persistence architecture](dam_persistence_architecture.md).


**Parent topic:**[Overview of the Helm architecture](../containerization/helm_overview.md)

