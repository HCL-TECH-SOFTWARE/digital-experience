# Persisting CW Profile

## Volume mount points

The [persistent volumes](../../../../../get_started/plan_deployment/container_deployment/persistent_volumes.md) used by the DX Core pod are mounted in profile \(WebSphere Application Server profiles for the WebSphere\_Portal application server, shared between pods\): /opt/HCL/profiles.

## Additional Information about profile directories

The profile persistent volume \(and thus, the /opt/HCL/profiles directory\) contains a single directory named:

```
cw_prof
```

### Backward Compatibility

When upgrading to a newer CF version, if the wpsadmin password is updated the cw_profile contains the newly updated password and the new credentials are copied to the config wizard user registery, and if the wpsadmin password is not updated then the cw_profile and the config wizard user registry contains the default password.

## Core container Version-to-Version upgrade

When a new version \(tag\) of the DX 9.5 Core container is specified in your [custom values YAML file](../../../../install/container/helm_deployment/preparation/index.md) and you run `helm upgrade`, Kubernetes recycles all the pods in your Core stateful set one by one. It starts with the highest numbered pod and works downwards, only recycling the next pod when the current pod reports that it is "ready".

Whenever a Core container is started, the profile in the Persisten Volume will be overwritten whenever the user makes any changes.

![Core_container_Version-to-Version_upgrade](../../../../../images/cw_profile_version-to-version_upgrade.png)

   1. When upgrading to a newer CF version (first time creation of cw_prof and older version doesnt contain cw_profile persisting) the user registry of wp_profile will be copied to cw_profile which ensures that if the user registry is modified on the older deployment it will be also be migrated to the new deployment. 
   2. On any further new deployments the old profile from the container will be symlinked to the newly created profile in the persistent volume.
   3. Pod performs the actual upgrade \("`applyCF`"\) and, when this is complete, its declared "ready" to Kubernetes. The profile in the persisted volume will just be overwritten by the new updates.


   <!-- 1.  Kubernetes recycles the highest numbered pod, supplying the new DX 9.5 Container image.
   2.  Highest numbered pod creates a new profile directory on the shared volume for the new version \(named as described above\) with contents copied from the previous version profile directory.
   3.  Pod switches its symbolic link for /opt/HCL/cw\_profile to the new directory.
   4.  Pod performs the actual upgrade \("`applyCF`"\) and, when this is complete, is declared "ready" to Kubernetes.
   5.  Kubernetes recycles the next highest numbered pod.
   6.  Pod determines that a profile directory is already populated for the new HCL DX 9.5 container image version, and so, links to that as normal; and onwards.
   7.  Steps 5 and 6 are repeated until there are no further pods using the old image. -->
