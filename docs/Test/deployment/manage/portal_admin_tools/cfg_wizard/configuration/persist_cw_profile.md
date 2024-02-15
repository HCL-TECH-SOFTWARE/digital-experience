# Persisted Config Wizard Profile

Starting from CF213, the profile of the Config Wizard in Helm deployments is persisted on the same persistent volume as the Core profile. This allows advanced configuration of the Config Wizard profile that are persisted through restarts.

## Volume mount points

Config Wizard is reusing the `/opt/HCL/profiles` directory of Core. A single directory is created for the Config Wizard profile called `cw_prof`. It is symbolically linked to `/opt/HCL/AppServer/profiles/cw_profile`.

### Backward Compatibility

For deployments prior to CF213 that have not persisted the Config Wizard profile, the file-based user registry of Core was shared with Config Wizard, so the same users and credentials could be used for both. When upgrading from such a CF version, the file-based user registry of Core is duplicated and copied into the Config Wizard profile. This is to make sure all users and groups are still available for Config Wizard in the same way as before the upgrade.

After this initial migration, the two profiles have separated user registries and can be managed independently.

!!!note
    Upgrading to CF213 would require additional space of approximately *120MiB* to persist the Config Wizard Profile. 

## Core container upgrade

When a new version \(tag\) of the DX 9.5 Core container is specified in your [custom values YAML file](../../../../install/container/helm_deployment/preparation/index.md) and you run `helm upgrade`, Kubernetes recycles all the pods in your Core stateful set one by one. It starts with the highest numbered pod and works downwards, only recycling the next pod when the current pod reports that it is "ready".

-   When upgrading to a newer CF version (first time creation of the persisted `cw_prof` and the installed version does not contain the persisted Config Wizard profile), the user registry of wp_profile is copied to cw_profile. This ensures that if the user registry is modified on the older deployment, it is also migrated to the new deployment. 
-   On any further deployments, the existing persisted profile will be symbolically linked to the Config Wizard profile.
