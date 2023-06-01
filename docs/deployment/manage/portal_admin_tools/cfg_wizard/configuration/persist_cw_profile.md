# Persisting CW Profile

## Volume mount points

The [persistent volumes](../../../../../get_started/plan_deployment/container_deployment/persistent_volumes.md) used by the DX Core pod are mounted in profile \(WebSphere Application Server profiles for the WebSphere\_Portal application server, shared between pods\): /opt/HCL/profiles.

## Additional Information about profile directories

The profile persistent volume \(and thus, the /opt/HCL/profiles directory\) contains a single directory named:

```
cw_prof
```

### Backward Compatibility

When upgrading to a newer CF version containing the cw_profile persistence changes from an older deployment which doesn't implement cw_profile persistence, if the wpsadmin password is updated the cw_profile contains the newly updated password and the new credentials are copied to the config wizard user registery, and if the wpsadmin password is not updated then the cw_profile and the config wizard user registry contains the default password.

## Core container upgrade

When a new version \(tag\) of the DX 9.5 Core container is specified in your [custom values YAML file](../../../../install/container/helm_deployment/preparation/index.md) and you run `helm upgrade`, Kubernetes recycles all the pods in your Core stateful set one by one. It starts with the highest numbered pod and works downwards, only recycling the next pod when the current pod reports that it is "ready".

-   When upgrading to a newer CF version (first time creation of cw_prof and older version doesnt contain cw_profile persisting) the user registry of wp_profile will be copied to cw_profile which ensures that if the user registry is modified on the older deployment it will be also be migrated to the new deployment. 
-   On any further new deployments the old profile from the container will be symlinked to the newly created profile in the persistent volume.
-   Pod performs the actual upgrade \("`applyCF`"\) and, when this is complete, its declared "ready" to Kubernetes. The profile in the persisted volume will just be overwritten by the new updates.