# Persistent volumes

This topic provides details covering the PersistentVolumes (PVs) and related operations considerations in storing data for DX 9.5 stateful applications.

Digital Experience 9.5 container-based stateful applications require PVs to store their data. Refer to the [Deploy DX 9.5 applications to container platforms using Helm](application_architecture.md) topic for a description of the DX 9.5 application details.

You must use PVs because Kubernetes Pods do not have their own persistent file storage. For more information about PVs, see the [Kubernetes documentation](https://kubernetes.io/docs/concepts/storage/persistent-volumes/).

You use two types of PersistentVolumes with DX: [`ReadWriteOnce (RWO)` and `ReadWriteMany (RWX)`](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes).


## Core

The DX 9.5 Core application requires multiple PVs of different types and sizes to operate. From an application perspective, three items things that have to persist:

-   Profiles (RWX) (including `wp_profile` and `cw_profile`)
-   Logs (RWO)
-   Transaction logs (RWO)

Although the profile must be shared between all DX 9.5 Core pods, the logs and transaction logs are per pod and not shared. This shared status means that the persistent volume for the profile must be `ReadWriteMany` (RWX).

The persistent volumes for logs and transaction logs are established as `ReadWriteOnce` (RWO) for correct operation performance.

For example, in a DX 9.5 Core deployment, to deploy one Core pod, 3 PVs are required. To deploy two more Core pods, the number of required PVs increases by two, resulting in 5 required PVs. The additional pods share the existing profile PV with the first Pod, but require their own log and transaction log PVs.

You can use the following formula example to calculate the required PV count per Core Pods to be deployed:

  ```
  # Formula to calculate PV count
  n(PV) = 1 + m(Core Pods) * 2
  # E.g. for 3 Pods: 1 + 3 * 2 = 7 PVs
  ```

In typical operations, the persistent volumes for logs and transaction logs are relatively small.

## Digital Asset Management

The Digital Asset Management (DAM) application requires one PV for storing binary asset data. This persistent volume is shared between all Digital Asset Management pods. The PV used must be configured as `ReadWriteMany (RWX)`.

## Persistence nodes

All persistence node pods work with `ReadWriteOnce` (RWO) persistent volumes because there they don't share storage among the Pods. Therefore, the minimum required number of PVs is one per persistence node.

## License Manager

The License Manager uses one `ReadWriteOnce` (RWO) PersistentVolume per Pod to store information and logs about the counted sessions.

## Remote search

Remote search requires one persistent volume for storing the profile (called `prs_profile`) with the `ReadWriteOnce` (RWO) type.

Remote search is limited to only one Pod. Therefore, the service requires one PV for that Pod.

!!! note
    Refer to **[PersistentVolumeClaims](../../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_persistent_volume_claims.md)** to learn how to set up the `PersistentVolumes` and `PersistentVolumeClaims`.
