# Persisting CW Profile

## Volume mount points

The [persistent volumes](../../../get_started/plan_deployment/container_deployment/persistent_volumes.md) used by the DX Core pod are mounted in profile \(WebSphere Application Server profiles for the WebSphere\_Portal application server, shared between pods\): /opt/HCL/profiles

## Additional Information about profile directories

The profile persistent volume \(and thus, the /opt/HCL/profiles directory\) contains a directory per container version, named:

```
cw_prof_< product-version >_< container-version >
```

for example, `cw_prof_95_CF210`. During the Core container startup process the latest version directory is symbolically linked from /opt/HCL/cw\_profile.

## Core container Version-to-Version upgrade

When a new version \(tag\) of the DX 9.5 Core container is specified in your [custom values YAML file](../../install/container/helm_deployment/preparation/index.md) and you run `helm upgrade`, Kubernetes recycles all the pods in your Core stateful set one by one. It starts with the highest numbered pod and work downwards, only recycling the next pod when the current pod reports that it is "ready".

Whenever a Core container is started, it compares its container version with the latest profile version. If they do not match, perform an [Update](../../install/container/helm_deployment/update_helm_deployment.md) using the process set out below:

![Core_container_Version-to-Version_upgrade](../../../images/cw_profile_version-to-version_upgrade.png)

   1.  Kubernetes recycles the highest numbered pod, supplying the new DX 9.5 Container image.
   2.  Highest numbered pod creates a new profile directory on the shared volume for the new version \(named as described above\) with contents copied from the previous version profile directory.
   3.  Pod switches its symbolic link for /opt/HCL/cw\_profile to the new directory.
   4.  Pod performs the actual upgrade \("`applyCF`"\) and, when this is complete, is declared "ready" to Kubernetes.
   5.  Kubernetes recycles the next highest numbered pod.
   6.  Pod determines that a profile directory is already populated for the new HCL DX 9.5 container image version, and so, links to that as normal; and onwards
   7.  Steps 5 and 6 are repeated until there are no further pods using the old image.
