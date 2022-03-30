# Optional: Configuration Settings to Manage Digital Asset Management Media upload storage services

This section outlines optional configuration steps to tune Digital Asset Management storage services.

Reference the HCL Digital Experience [Deployment topic](deployment.md) for the latest list of HCL Digital Experience 9.5 container files available for your implementation, and instructions to install to supported container platforms.

As outlined in the steps to install and configure HCL Digital Asset Management, four files are provided for deployment:

-   HCL Digital Asset Management \(Operator\)
-   HCL Digital Experience Digital Asset Management \(Docker image\)
-   HCL Digital Experience Digital Asset Management \(Image processor\)
-   Postgres Persistence Layer

There are two independent volume types used in the deployment and runtime of the Digital Asset Management:

1.  There is a volume per persistence layer, this volume is self-provisioned and defaults to the platform’s default storage class and therefore the volume has not been made configurable.
    -   See the [Sample Storage Class and Volume topic](sample_storage_class_volume.md) for additional information to set storage class and volume using sample storage class and volume scripts for HCL Digital Experience 9.5 CF171 and higher container releases deployed to Amazon Elastic Container Service \(EKS\) or Red Hat OpenShift environment.
2.  There is a Digital Asset Management Media storage upload folder that is related to the upload performance of assets inside the Digital Asset Management library. This folder is a read/write/many folder and therefore is shared by all instances.

There are 2 main settings for the Digital Asset Management upload folder:

-   `dam.deploy.dam.storageclass` \(REQUIRED\)
-   `dam.deploy.dam.volume` \(OPTIONAL\)

There are two choices to configure this volume:

1.  **DX Administrator specifies volume:** In this model, the DX administrator sets both the `dam.deploy.dam.storageclass` and `dam.deploy.dam.volume` before initial deployment, and therefore tells the deployment to use a specific storage class and a specific volume provisioned within that storage class.  This option provides a bit more control to the DX Administrator.
2.  **DX Administrator specifies only the** `dam.deploy.dam.storageclass`, and allows either a volume from a pool of volumes to be used or a volume to be provisioned based on the storage class configuration.

**Note:** It is highly recommended that the storage class used have a Reclaim Policy of **RETAIN!!** This is not enforced and not an issue if the volumes are managed correctly:

-   When a user is done with their volume, they can delete the Persistent Volume Claim \(PVC\) objects from the API that allows reclamation of the resource. The Reclaim policy for a `PersistentVolume` tells the cluster what to do with the volume \* after it has been released of its claim.
-   Exercise caution when using the DELETE policy.\*

See the following sections for additional information:

-   [Deployment](deployment.md)
-   [Containerization Limitations/Requirements](limitations_requirements.md)

**Parent topic:**[Container administration 9.5](../containerization/maintenance.md)

