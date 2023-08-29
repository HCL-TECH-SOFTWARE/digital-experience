# Persistent Volumes

This topic provides details covering the PersistentVolumes (PVs) and related operations considerations in storing data for DX 9.5 stateful applications.

Digital Experience 9.5 container-based stateful applications require PersistentVolumes (PVs) to store their data. Refer to the [Deploy DX 9.5 applications to container platforms using Helm](application_architecture.md) topic for a description of the DX 9.5 Applications details.

It is required to use PVs because Kubernetes Pods do not have their own persistent file storage. For more information on PVs, see the [Kubernetes documentation](https://kubernetes.io/docs/concepts/storage/persistent-volumes/).

There are two types of PersistentVolumes used for DX: [`ReadWriteOnce (RWO)` and `ReadWriteMany (RWX)`](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes).


## Core

The DX 9.5 Core application requires multiple PersistentVolumes (PVs) of different types and sizes for its operation. From an application perspective, there are three different things that need to be persisted:

-   Profiles (RWX) (including `wp_profile` and `cw_profile`)
-   Logs (RWO)
-   Transaction logs (RWO)

While the profile needs to be shared between all DX 9.5 Core Pods, the logs and transaction logs are per Pod and not shared. This means that the persistent volume used for the profile must be `ReadWriteMany` (RWX).

The persistent volumes used for logs and transaction logs are established as `ReadWriteOnce` (RWO) for proper operations performance.

For example, in a DX 9.5 Core deployment:

To deploy one Core Pod, 3 PVs will be needed. To deploy two Core Pods, the number of required PVs increases by two, resulting in 5 PVs needed, since the second Pod shares the existing profile PV with the first Pod, but requires its own log and transaction log PVs.

The following formula example can be used to calculate the required PV count per Core Pods to be deployed:

  ```
  # Formula to calculate PV count
  n(PV) = 1 + m(Core Pods) * 2
  # E.g. for 3 Pods: 1 + 3 * 2 = 7 PVs
  ```

In typical operations, the persistent volumes for logs and transaction logs are relatively small.

## Digital Asset Management

The Digital Asset Management (DAM) application requires one (1) PV for storing binary asset data. This persistent volume is shared between all Digital Asset Management Pods. The PV used must be `ReadWriteMany (RWX)`.

## Persistence Nodes

All Persistence Node Pods work with `ReadWriteOnce` (RWO) persistent volumes because there is no sharing of storage between the Pods.

Therefore, the minimum required amount of PVs is one per Persistence Node.

## License Manager

The License Manager uses one  `ReadWriteOnce` (RWO) PersistentVolume per Pod to store information and logs about the counted sessions.

## Remote Search

Remote Search requires one persistent volume for storing the profile (called `prs_profile`) with the type `ReadWriteOnce` (RWO).

Remote Search is limited to only one Pod, therefore, requires one PV for that Pod.

!!! note
    Refer to **[PersistentVolumeClaims](../../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_persistent_volume_claims.md)** on how to set up the `PersistentVolumes` and `PersistentVolumeClaims`.
