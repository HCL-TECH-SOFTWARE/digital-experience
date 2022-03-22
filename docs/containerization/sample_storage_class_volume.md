# Sample storage class and volume for HCL Digital Experience 9.5 containers

Learn how to set storage class and volume using a sample storage class and volume scripts for  HCL Digital Experience 9.5 CF171 and higher container releases deployed to Amazon Elastic Container Service \(EKS\) or Red Hat OpenShift environment.

It is recommended to set a separate storage class and volume for production, especially if you have more than one project in the Kubernetes \(Amazon EKS or Red Hat OpenShift\) environment. This is a good practice because it prevents projects from overlapping storage volumes.

See video: [Understanding the Core Persistent Volumes in HCL Digital Experience Container Update CF194](https://youtu.be/yDU7SMnrz_U)

Follow these steps to create a new persistent volume and storage class, in either Amazon EKS or OpenShift.

1.  Use and save the following as your storage class file:

    ```
    kind: StorageClass 
                        apiVersion: storage.k8s.io/v1 
                        metadata: 
                        name: dx-deploy-stg 
                        provisioner: kubernetes.io/no-provisioner 
                        reclaimPolicy: Retain 
                        volumeBindingMode: WaitForFirstConsumer 
    ```

2.  Use and save the following as your storage volume file:

    ```
    kind: PersistentVolume 
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
                        - ReadWriteMany 
                        persistentVolumeReclaimPolicy: Retain 
                        storageClassName: dx-deploy-stg 
                        mountOptions: 
                        - hard 
                        - nfsvers=4.1 
                        - rsize=8388608 
                        - wsize=8388608 
                        - timeo=600 
                        - retrans=2 
                        - noresvport 
                        volumeMode: Filesystem
    ```

3.  Copy both files to your local file system.
4.  Change at least the server and path in your sample volume .yaml file to an appropriate NFS server and volume.
5.  To create the storage class, run the following command:

    ```
    kubectl apply -f subclass.yaml
    ```

6.  To create the storage volume, run the following command:

    ```
    kubectl apply -f SampleZVolume.yaml
    ```

7.  Continue with deployment.

**Note:** In these examples, NFS volumes have been used. You can use the following sample yaml to create the volume in Amazon EKS OpenShift with the corrected values: 

```
nfs:     
                server: your_nfs_server.com     
                path: /exports/volume_name
```

**Parent topic:**[Customizing your container deployment](../containerization/customization.md)

