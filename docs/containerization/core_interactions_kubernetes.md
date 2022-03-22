# DX 9.5 Core Interactions with Kubernetes

This section provides more detailed information about how the [HCL Digital Experience 9.5 Core container](deploy_applications_using_helm.md#) interacts with Kubernetes. Understanding this information may assist in interpreting observed behavior or in troubleshooting your HCL DX 9.5 Container deployments in Helm.

## Volume mount points

The [persistent volumes](persistent_volumes_helm.md) used by the DX Core pod are mounted to the following directories in the Core container:

-   profile \(WebSphere Application Server profiles for the WebSphere\_Portal application server, shared between pods\): /opt/HCL/profiles
-   log \(WebSphere Application Server logs for the WebSphere\_Portal application server, unique to a pod\): /opt/HCL/logs
-   tranlog \(transaction log, unique to a pod\): /opt/HCL/tranlog

The logs directory /opt/HCL/wp\_profile/logs is symbolically linked to /opt/HCL/logs. 

The tranlog directory /opt/HCL/wp\_profile/tranlog is symbolically linked to /opt/HCL/tranlog.

## Additional Information about profile directories

The profile persistent volume \(and thus, the /opt/HCL/profiles directory\) contains a directory per container version, named:

```
```
prof_ < product-version > _ < container-version >
```
```

for example, `prof_95_CF199`. During the Core container startup process the latest version directory is symbolically linked from /opt/HCL/wp\_profile.

## Core container Version-to-Version upgrade

When a new version \(tag\) of the DX 9.5 Core container is specified in your [custom values YAML file](helm_planning_deployment.md) and you run `helm upgrade`, Kubernetes recycles all the pods in your Core stateful set one by one. It starts with the highest numbered pod and work downwards, only recycling the next pod when the current pod reports that it is "ready".

Whenever a Core container is started, it compares its container version with the latest profile version. If they do not match, perform an [Update](helm_update_deployment.md) using the process set out below:

![../../../../Desktop/Core_container_Version-to-Version_upgrade.png](../images/Core_container_Version-to-Version_upgrade.png)

1.  Kubernetes recycles the highest numbered pod, supplying the new DX 9.5 Container image.
2.  Highest numbered pod creates a new profile directory on the shared volume for the new version \(named as described above\) with contents copied from the previous version profile directory.
3.  Pod switches its symbolic link for /opt/HCL/wp\_profile to the new directory.
4.  Pod performs the actual upgrade \("`applyCF`"\) and, when this is complete, is declared "ready" to Kubernetes.
5.  Kubernetes recycles the next highest numbered pod.
6.  Pod determines that a profile directory is already populated for the new HCL DX 9.5 container image version, and so, links to that as normal; and onwards
7.  Steps 5 and 6 are repeated until there are no further pods using the old image.

**Note:** If you have more than one DX Core pod, those not yet recycled will still use the previous profile directory. Therefore, any configuration changes made during this time that are stored to the profile \(for example, the installation of a portlet\) are lost, as they are made to the previous profile after it has already been copied. We recommend that you avoid making any configuration changes while a Version-to-Version upgrade is in progress.

As of HCL DX 9.5 Container Update CF199, DX profile directories are not automatically removed. If your DX 9.5 deployment has been around through a number of Container upgrades, you may wish to consider removing very old profile directories to save space \(leaving, at least, two of the most recent profile directories\).

**Parent topic:**[Overview of the Helm architecture](../containerization/helm_overview.md)

