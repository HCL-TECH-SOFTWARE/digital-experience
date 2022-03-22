# Configure PersistentVolumeClaims \(PVCs\)

To run HCL Digital Experience 9.5 Container deployments in your Kubernetes or OpenShift cluster, you need to set up PersistentVolumes \(PVs\) on your cluster and configure the Helm Chart to create the appropriate PersistentVolumeClaims \(PVCs\).

Before you proceed, review the [Persistent Volumes and related operations considerations](persistent_volumes_helm.md) topic in the DX Help Center.

**Note:** The provisioning of PersistentVolumes \(PVs\) may differ based on your cluster configuration and your cloud provider. Please reference the documentation of your cloud provider for additional information.

## Persistent Volume Types

**Important note:** Ensure that your PersistentVolumes \(PVs\) are created with the Reclaim Policy set to RETAIN. This allows for the reuse of PVs after a PersistentVolumeClaim \(PVC\) is deleted. This is important to keep data persisted, for example, between deployments or tests. Refrain from using the Reclaim Policy DELETE unless you have the experience in managing these operations successfully, to avoid unpredictable results. This is not recommended in production use, as deleting PVCs causes the Kubernetes or OpenShift cluster to delete the bound PV as well, thus, deleting all the data on it.

-   **`ReadWriteOnce` \(RWO\)**

    `ReadWriteOnce` PVs allow only one pod per volume to perform reading and writing transactions. This means that the data on that PV cannot be shared with other pods and is linked to one pod at a time.

    In the HCL Digital Experience 9.5 Kubernetes or OpenShift deployment using Helm, the only DX applications leveraging RWO PVs are Core and Persistence.

    Information regarding how to calculate the number of required volumes for the DX Core and Persistence applications is presented in the [Persistent Volumes and related operations considerations](persistent_volumes_helm.md) topic in the DX Help Center.

    Since Core requires RWO PVs per pod, it may be necessary to have auto-provisioning of such volumes configured in your cluster if you don't know the final maximum number of possible Core pods running at the same time. Each Core pod requires 2 RWO PVs.

    Since the number of pods for Persistence is limited by design, you need 2 RWO PVs for Persistence.

-   **`ReadWriteMany` \(RWX\)**

    `ReadWriteMany` PVs support read and write operations by multiple pods. This means the data on that PV can be shared with other pods and can be linked to multiple pods at a time.

    In the HCL Digital Experience 9.5 Kubernetes and OpenShift deployment using Helm the only DX applications leveraging RWX PVs are Core and Digital Asset Management.

    Since the PV can be shared between all Core pods, you need one \(1\) RWX PV for Core, regardless of the pod count. Since the PV can be shared between all Digital Asset Management pods, you need one \(1\) RWX PV for Digital Asset Management, regardless of the pod count.


## Configuration parameters

To access the PersistentVolumes \(PVs\) on your cluster, the HCL Digital Experience 9.5 Kubernetes or OpenShift deployment using Helm creates PersistentVolumeClaims \(PVCs\) that binds the PVs to the corresponding pods.

Each PVC that applications require allows you to configure the following parameters, as shown below. For a PVC of the Core application:

```
# Persistent Volume Setup
volumes:
  # Persistent Volumes for Core
  core:
    # Shared profile PVC shared by all Core pods
    profile:
      storageClassName: "manual"
      requests:
        storage: "10Gi"
      # Optional volume name to specifically map to
      volumeName:
```

**Important note:** Make sure to properly define the PVC configuration in your custom-values.yaml file before running the deployment. This avoids issues when trying to get your deployment up and running.

-   ****StorageClassName****

    Depending on your Cluster configuration, you may have configured a specific `StorageClass` that should be used for your PVs and the PVCs of HCL Digital Experience.

    This property allows you to enter the name of the `StorageClass` you want the deployment to use. PVCs then only accepts PVs that match the `StorageClassName` you have defined in the configuration. If there are no PVs that match, the pods remain pending and do not start until a fitting PV is provided by the cluster.

    If you enter an empty `StorageClassName`, Kubernetes falls back to the default `StorageClass` configured in your Cluster. Refer to your cloud provider for additional information about your default StorageClass, since this depends on your Kubernetes or OpenShift environment.

    Reference the original values.yaml file you have extracted as outlined in the *Prepare configuration* topic for all configurable PVCs.

-   **`Requests`**

    **Storage**

    Storage allows you to define the amount of space that is required by the PVC. Once defined, it only accepts PVs that have the same or more storage capacity as requested. If there are no PVs matching the definitions, the pods remain pending and do not start until a properly-sized PV is provided by the cluster.

-   **`VolumeName`**

    If you want your deployment to pick up a specific PV that you have created, use of the `VolumeName` can define that instruction. Ensure that the PV you created has a unique name. Then, add that name as a configuration parameter for the PVC.

    The PVCs only matches with a PV of that name, matching the other requirements-like type \(`RWO/RWX`, as defined by the deployment itself\), storage capacity, and `StorageClassName`.

    This allows you to properly prepare your PVs beforehand and ensure that the applications store their data where you want them to.


## Sample PVC configurations

The following are some examples for configuration of the PersistentVolumeClaims \(PVCs\) using your custom-values.yaml:

**Fallback to default `StorageClass` for all applications**

Leaving an empty `StorageClassName` causes Kubernetes or OpenShift to fall back to the `StorageClass` that has been configured as the default one in your cluster:

```
# Persistent Volume Setup
volumes:
  # Persistent Volumes for Core
  core:
    # Shared profile PVC shared by all Core pods
    profile:
      storageClassName: ""
    # Transaction Log PVC, one per Core pod
    tranlog:
      storageClassName: ""
    # Application Log PVC, one per Core pod
    log:
      storageClassName: ""
  # Persistent Volumes for Digital Asset Management
  digitalAssetManagement:
    # Binary storage PVC, shared by all Digital Asset Management Pods
    binaries:
      storageClassName: ""
  # Persistent Volumes for Persistence
  persistence:
    # Database PVC, one per Persistence pod
    database:
      storageClassName: ""
  # Persistent Volumes for Open LDAP
  openLdap:
    # slapd directory PVC, one per Open LDAP pod
    slapd:
      storageClassName: ""
    # certificate directory, on per Open LDAP pod
    certificate:
      storageClassName: ""
    # ldap directory PVC, one per Open LDAP pod
    ldap:
      storageClassName: ""
  # Persistent Volumes for Remote Search
  remoteSearch:
    # Remote Search profile PVC, one per Remote Search pod
    prsprofile:
      storageClassName: ""

```

**Specific StorageClasses for all applications**

Setting the `StorageClassName` to `mycloudstorage` causes Kubernetes or OpenShift to create PVCs that only accepts PVs with the `StorageClass` `mycloudstorage`:

```
# Persistent Volume Setup
volumes:
  # Persistent Volumes for Core
  core:
    # Shared profile PVC shared by all Core pods
    profile:
      storageClassName: "mycloudstorage"
    # Transaction Log PVC, one per Core pod
    tranlog:
      storageClassName: "mycloudstorage"
    # Application Log PVC, one per Core pod
    log:
      storageClassName: "mycloudstorage"
  # Persistent Volumes for Digital Asset Management
  digitalAssetManagement:
    # Binary storage PVC, shared by all Digital Asset Management Pods
    binaries:
      storageClassName: "mycloudstorage"
  # Persistent Volumes for Persistence
  persistence:
    # Database PVC, one per Persistence pod
    database:
      storageClassName: "mycloudstorage"
  # Persistent Volumes for Open LDAP
  openLdap:
    # slapd directory PVC, one per Open LDAP pod
    slapd:
      storageClassName: "mycloudstorage"
    # certificate directory, on per Open LDAP pod
    certificate:
      storageClassName: "mycloudstorage"
    # ldap directory PVC, one per Open LDAP pod
    ldap:
      storageClassName: "mycloudstorage"
  # Persistent Volumes for Remote Search
  remoteSearch:
    # Remote Search profile PVC, one per Remote Search pod
    prsprofile:
      storageClassName: "mycloudstorage"

```

**Specific volume names**

Specifying a name ensures that Kubernetes or OpenShift only assigns PVs with the matching name to the PVCs created for the applications:

```
# Persistent Volume Setup
volumes:
  # Persistent Volumes for Core
  core:
    # Shared profile PVC shared by all Core pods
    profile:
      storageClassName: "mycloudstorage"
      # Optional volume name to specifically map to
      volumeName: "core-profile"
  # Persistent Volumes for Digital Asset Management
  digitalAssetManagement:
    # Binary storage PVC, shared by all Digital Asset Management Pods
    binaries:
      storageClassName: "mycloudstorage"
      # Optional volume name to specifically map to
      volumeName: "dam-binaries"

```

**Adjusted volume size for Core PVCs**

You may override the default sizes for PVCs by adjusting the storage requests:

```
# Persistent Volume Setup
volumes:
  # Persistent Volumes for Core
  core:
    # Shared profile PVC shared by all Core pods
    profile:
      storageClassName: "mycloudstorage"
      requests:
        storage: "150Gi"
    # Transaction Log PVC, one per Core pod
    tranlog:
      storageClassName: "mycloudstorage"
      requests:
        storage: "1Gi"
    # Application Log PVC, one per Core pod
    log:
      storageClassName: "mycloudstorage"
      requests:
        storage: "1Gi"

```

## Sample Persistent Volume definitions

**Sample `StorageClass`**

It is recommended to have a separate `StorageClass` for HCL Digital Experience 9.5 deployments in order to prevent other deployed applications in the same Kubernetes or OpenShift cluster to interfere with Persistent Volumes \(PVs\) that should only be used by HCL Digital Experience.

The following example shows a `StorageClass` with the name `dx-deploy-stg` that can be created in your cluster for that purpose:

```
kind: StorageClass 
apiVersion: storage.k8s.io/v1 
metadata: 
  name: dx-deploy-stg 
provisioner: kubernetes.io/no-provisioner 
reclaimPolicy: Retain 
volumeBindingMode: WaitForFirstConsumer 

```

Applying this yaml on your Kubernetes or OpenShift cluster creates the `StorageClass` as a cluster-wide resource.

**Sample Persistent Volume**

To leverage the `StorageClass` you created, you can use the following Persistent Volume example, which connects to an NFS Server of your choice to provide a PV:

```
kind: PersistentVolume 
apiVersion: v1
metadata:
  name: wp-profile-volume 
spec: 
  capacity: 
  storage: 100Gi    
  nfs: 
    server: your_nfs_server.com 
    path: /exports/volume_name 
  accessModes: 
  - ReadWriteMany 
  persistentVolumeReclaimPolicy: Retain 
  storageClassName: dx-deploy-stg 
  mountOptions: 
  - hard 
  - nfsvers=4.1 
  - rsize=8388608 
  - wsize=8388608 
  - timeo=600 
  - retrans=2 
  - noresvport 
  volumeMode: Filesystem

```

Refer to **[Networking configuration](helm_configure_networking.md)** for the next steps.

****

