---
title: Increase storage of a PersistentVolumeClaim
---
# Increasing the storage of a PersistentVolumeClaim

Since version 1.24, Kubernetes offers a stable feature to expand PersistentVolumeClaims if the underlying StorageClass supports this. Supported StorageClasses are listed [in the Kubernetes documentation](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#expanding-persistent-volumes-claims).

This feature can be used to increase the size of PVCs used by HCL Digital Experience (DX). Due to the immutability of some of the fields in StatefulSets, a workaround must be used for resizing any volumes that are used by DX. This makes sure that the resizing is applied and the Helm values are still in sync with the actually deployed PVCs in the cluster. This prevents any unwanted behavior when using `helm upgrade` at a later time.

!!! important
    During this procedure, make sure that no scaling of the Pods is happening because this could result in Pods with the previous storage size. If in doubt, disable the HorizontalPodAutoscaler for the application you are changing the PVC for.

To resize a PVC:

1. Resize the PVC manually using `kubectl`.
   
      1. Edit the PVC resource.

         ```sh
         kubectl -n <namespace> edit pvc <pvc-name>
         ```
   
      2. Increase the storage request according to your requirements.

         ```yaml
         resources:
            requests:
            storage: 3Gi
         ```

2. Update the `custom-values.yaml` file to reflect the new storage size. Enter the appropriate storage request in the `volumes` section of your values.

3. Delete the StatefulSet that uses the PVC.

      Make sure to use the [`--cascade=orphan`](https://kubernetes.io/docs/tasks/administer-cluster/use-cascading-deletion/#set-orphan-deletion-policy) option to only delete the StatefulSet, but keep the Pods.

      This allows the Pods to be picked up again after the updated StatefulSet is created in the next step.

      ```sh
      kubectl -n <namespace> delete sts <statefulset-name> --cascade=orphan
      ```

4. Recreate the StatefulSet with the updated parameters from the values by running `helm upgrade`:

      ```sh
      helm upgrade -n <namespace> -f <custom-values.yaml> <deployment name> <chart>
      ```

The previously deleted StatefulSet should have been recreated with the appropriate storage size while the previously resized PVCs should still have their updated storage size.

Any new Pods created by the StatefulSet due to autoscaling or manual scaling should be created with PVCs of the new size.
