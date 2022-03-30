# PersistentVolumes and related operations considerations

This topic provides details covering the PersistentVolumes \(PVs\) and related operations considerations in storing data for DX 9.5 stateful applications.

Digital Experience 9.5 container-based stateful applications \(DX 9.5 Core, Digital Asset Management, and Persistence\) require PersistentVolumes \(PVs\) to store their data. Refer to the [Deploy DX 9.5 applications to container platforms using Helm](deploy_applications_using_helm.md) topic for a description of the DX 9.5 Applications details.

As Kubernetes and OpenShift Pods do not have their own persistent file storage, the use of PVs is a must. For more information on PVs, consult the [Kubernetes documentation](https://kubernetes.io/docs/concepts/storage/persistent-volumes/).

**Note:** You need to consider the type of PVs before you perform an installation. The type of volumes used depends on the type of deployment you are performing. If you are using only `ReadWriteOnce` \(RWO\) persistent volumes for all applications, you will not be able to scale them up to multiple Pods.

## Core

The DX 9.5 Core application requires multiple PersistentVolumes \(PVs\) of different types and sizes for its operation. From an application perspective, there are three different things that need to be persisted:

-   Profiles \(called `wp_profile` and `cw_profile`\)
-   Logs
-   Transaction logs

While the profile needs to be shared between all DX 9.5 Core Pods, the logs and transaction logs are per Pod and not shared. This means that the persistent volume used for the profile must be `ReadWriteMany` \(RWX\).

The persistent volumes used for logs and transaction logs are established as `ReadWriteOnce` \(RWO\) for proper operations performance.

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

The Digital Asset Management \(DAM\) application requires one \(1\) PV for storing binary asset data. This persistent volume is shared between all Digital Asset Management Pods. The PV used must be `ReadWriteMany (RWX)`.

## Persistence

Persistence consists of at least two Pods. One which acts as a read/write primary node, and at least one that acts as a read-only fallback.

All Persistence Pods work with `ReadWriteOnce` \(RWO\) persistent volumes, since there is no sharing of storage between the Pods.

Therefore, the minimum required amount of PVs for Persistence is 2.

## Remote Search

Remote Search requires 1 persistent volume for storing the profile \(called `prs_profile`\) with the type `ReadWriteOnce` \(RWO\).

Remote Search is limited to only one Pod, therefore, requires one PV for that Pod.

Refer to **[Networking configuration](helm_configure_networking.md)** for next steps.

**Parent topic:**[Overview of the Helm architecture](../containerization/helm_overview.md)

