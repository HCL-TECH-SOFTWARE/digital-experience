# Troubleshooting your Helm deployment

This section shows how to find and resolve issues when deploying HCL DX 9.5 CF196 and later releases using Helm.

## Logs

Access to the HCL Digital Experience 9.5 component logs is important for maintaining and troubleshooting both your container platform environments and your custom applications. It is also essential for supplying information that may be requested by [HCL Software Support](https://support.hcltechsw.com/csm?id=dx_support).

Most component logs can be accessed directly on the Kubernetes or OpenShift platforms via the kubectl logs or OpenShift log access commands. The DX 9.5 Core component has additional important log files that are stored on persistent volumes, and need to be retrieved in a different manner. 

## Accessing DX 9.5 container logs on Kubernetes or OpenShift

All container logs from DX 9.5 pods in a deployment with Helm can be combined into a single output using the commands:

```
kubectl logs -n your-namespace -l release=your-release-name --tail=-1
```

In the example above, the `your-namespace` reference is the namespace in which your HCL Digital Experience 9.5 deployment is installed and `your-release-name` is the Helm release name you used when installing. On UNIX-based operating systems, the output can be directed to a file for convenience by appending `> some-file-name` to the command.

## Retrieving additional DX Core logs

Useful additional DX Core logs are stored on persistent volumes. To retrieve these, repeat the command below for each DX Core pod:

```
kubectl cp -n your-namespace pod-name:opt/HCL/wp_profile/logs/WebSphere_Portal/ .
```

In the example above the `your-namespace` reference is the namespace in which your HCL Digital Experience 9.5 deployment is installed and `pod-name` is the particular DX Core pod from which you wish to retrieve logs.

## Events

Pod events can give useful information for troubleshooting, such as why certain pods are not running. To get the events for a pod, you can use the following command:

```
kubectl describe pod -n your-namespace pod-name
```

In the above example, `your-namespace` is the namespace in which your HCL Digital Experience deployment is installed and `pod-name` is the particular pod that you wish to examine.

## PersistentVolumeClaims \(PVCs\)

One of the more common reasons for a pod not starting that can be identified via the pod events \(see above\) is that it has unbound persistent volume claims. To understand why the claims have not been fulfilled, it is useful to list both the current persistent volume claims and the current persistent volumes and to compare the two. When comparing, it is useful to check mismatches in storage class, access modes and capacity between available volumes and unfulfilled claims.

The commands to list these resources are:

```
kubectl get pvc -n your-namespace
kubectl get pv
```

In the above example, `your-namespace` is the namespace in which your HCL Digital Experience 9.5 deployment is installed.

## Retrieving the deployment configuration

In addition to logs, HCL Support may also request configuration information about your deployment. This is can be obtained using `kubectl` describe commands for different classes of objects and a selector to get all for your deployment. The most likely object types are given in the examples below:

```
kubectl describe pods -n your-namespace -l release=your-release-name
kubectl describe deployments -n your-namespace -l release=your-release-name
kubectl describe statefulsets -n your-namespace -l release=your-release-name
kubectl describe secrets -n your-namespace -l release=your-release-name
kubectl describe services -n your-namespace -l release=your-release-name
kubectl describe mappings -n your-namespace -l release=your-release-name
kubectl describe configmaps -n your-namespace -l release=your-release-name
```

In the above examples, `your-namespace` is the namespace in which your HCL Digital Experience deployment is installed and `your-release-name` is the Helm release name you used when installing. On UNIX-based operating systems, the output can be directed to a file by appending `> some-file-name` to any command.

-   **[Configure and access logs in Helm](../containerization/configure_access_helm_logs.md)**  
This topic shows you how to configure logging in Helm, as well as how to access Kubernetes container logs.
-   **[Basic monitoring](../containerization/basic_monitor_helm_deployment.md)**  
This topic describes options for monitoring an HCL Digital Experience 9.5 Kubernetes deployments installed using Helm.
-   **[Monitor the Digital Experience deployment using metrics](../containerization/monitor_helm_deployment_metrics.md)**  
This topic outlines the use of standards-based metrics to monitor activity and performance of DX container deployments.

**Parent topic:**[Operations using Helm](../containerization/helm_operations.md)

