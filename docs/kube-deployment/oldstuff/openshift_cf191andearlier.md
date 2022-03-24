# Deploying DX CF191 and earlier release Containers to Red Hat OpenShift

Learn how to deploy HCL Digital Experience \(DX\) 9.5 CF191 and earlier release Containers using the Red Hat OpenShift platform.

## Prerequisites

Prior to using the procedure below, it is assumed that the HCL DX Administrator is generally experienced in using Kubernetes. Additionally, the DX Administrator must have cluster admin access to the OpenShift environment.

-   The following tools must be installed on a machine other than the Portal server:
    -   Docker
    -   OpenShift Command Line Interface \(CLI\) or kubectl
-   Volume requirement:
    -   Requires an AccessMode of ReadWriteMany
    -   Requires a minimum of **40 GB**, with the default request set to **100 GB**
    -   RECLAIM POLICY = Retain

        **Note:** HCL Digital Experience is input-output \(I/O\) intensive which requires a high performing file system for optimization.


**Note:** Reference the latest HCL DX 9.5 Container Release and Update file listings in the [Docker deployment](../containerization/docker.md) topic.

Video: [Getting Started to deploy HCL DX 9.5 in Red Hat OpenShift](https://www.youtube.com/watch?v=xXsRECRoV7g&feature=youtu.be)

## Procedure

Follow these steps to deploy the HCL Digital Experience \(DX\) 9.5 container release CF191 or earlier to Red Hat OpenShift.

1.  Download the HCL Digital Experience Container Update CF191 or earlier container product and extract it to your local file system:

    ```
    -rw- r--r-- 1 hcl-dx-cloud-operator-image-v95_xxxxxxxx-xxxx.tar.gz
    ```

    ```
    -rw- r--r-- 1 hcl-dx-core-image-v95_xxxxxxxx-xxxx.tar.gz
    ```

    ```
    -rw- r--r-- 1 hcl-dx-openshift-scripts-v95_xxxxxxxx-xxxx.zip
    ```

    **Note:** If using HCL DX 9.5 container update release CF183 and higher, the hcl-dx-openshift-scripts-v95\_xxxxxxxx-xxxx.zip file is renamed to hcl-dx-cloud-scripts-v95\_xxxxxxxx-xxxx.zip. The file name change also affects the directory name for future steps.

2.  Open a terminal window and change to the root directory of the extracted package.
3.  Load the containers into your Docker repository:

    -   ```
docker load < hcl-dx-cloud-operator-image-v95_xxxxxxxx-xxxx.tar.gz
```

    -   ```
docker load < hcl-dx-core-image-v95_xxxxxxxx-xxxx.tar.gz
```

    ![](../images/container_openshift_load_01.png "Loading containers into your Docker repository")

4.  Extract the HCL DX deployment scripts:

    ```
    unzip hcl-dx-openshift-scripts-v95_xxxxxxxx-xxxx.zip
    ```

    ![](../images/container_openshift_load_02.png "Extracting the OpenShift scripts")

5.  Distribute the Docker images in your local Docker repository to your target OpenShift repository by tagging and pushing them appropriately. **If you used**`docker load`**to place your images in the target repository, skip this and proceed to the next step.**

    Syntax for tagging:

    ```
    docker tag <image_name>:<image_tag>  <openshift_registry>/<image_name>:<tag>
    ```

    Syntax for pushing:

    ```
    docker push <openshift_registry>/<image_name>:<tag>
    ```

6.  Change to the extracted files directory.

    ```
    ./hcl-dx-openshift-scripts
    ```

7.  Install the DxDeployment custom resource definition. Do not modify the git\_v1\_dxdeployment\_crd.yaml file. Customize ./deploy/crds/git\_v1\_dxdeployment\_cr.yaml if required. Use either of the following commands:

    ```
    -  ./scripts/deployCrd.sh
                  -  kubectl create -f hcl-dx-openshift-scripts/deploy/crds/git_v1_dxdeployment_crd.yaml
    ```

    ![](../images/DxDeployment_custom_resource_definition.png "Installing the DxDeployment custom resource definition")

8.  Create \(or have the OpenShift administrator create\) a persistent volume where the AccessMode is set to **ReadWriteMany** and the persistent volume reclaim policy set to **Retain**. See the second item in the [Prerequisites](https://help.hcltechsw.com/digital-experience/9.5/containerization/openshift.html#container_openshift_deployment__prereq_o3n_m22_rkb).

    ![](../images/container_persistent_volumes.png "Persistent Volumes settings")

9.  To create the namespace, install the project scoped service account, role, role binding, operator, and deployment, run the `deployDx.sh`script.

    ```
    ./scripts/deployDx.sh NAMESPACE REPLICAS REPOSITORY IMAGENAME IMAGETAG VOLUMENAME STORAGECLASS DBTYPE
    ```

    **Note:** For the initial 9.5 release, you need to edit the `operator.yaml` file and ensure the **IMAGENAME** and **IMAGETAG** are correct.

    -   **NAMESPACE** - the project or the namespace to create or use for deployment.
    -   **REPLICAS** - the number of initial instances for the deployment.
    -   **REPOSITORY** - your local repository, the repository used by OpenShift/Kubernetes.
    -   **IMAGENAME** - the name of the dxCore image, as added to the repository above.
    -   **IMAGETAG** - the tag for the target image as added to the above repository.
    -   **VOLUMENAME** - if you have a self provisioning storage class, you can use the keyword 'create' \(or leave it blank\) instead of the volume name.
    -   **STORAGECLASS** - the storage class name used to create the persistent volume.
    -   **DBTYPE** - the database type. By default, and initially, this is Derby. HCL DX 9.5 uses Apache Derby, Oracle Database, IBM DB2, or Microsoft SQL Server. Acceptable values are `derby`, `oracle`, `db2`, or `msSql`.

**Note:** For more information, see sections on [Understanding the OpenShift deployment](understanding_openshift_deployment.md)and [Customizing the container deployment](customizing_container_deployment.md).

## Update

To update the deployment, follow these steps:

1.  Run the `updateDx.sh` script with updated values:

    ```
    ./scripts/updateDx.sh NAMESPACE REPLICAS REPOSITORY IMAGENAME IMAGETAG VOLUMENAME STORAGECLASS DBTYPE
    ```

    -   **NAMESPACE** - the project or the namespace to create or use for deployment.
    -   **REPLICAS** - the number of initial instances for the deployment.
    -   **REPOSITORY** - your local repository, the repository used by OpenShift/Kubernetes.
    -   **IMAGENAME** - the name of the dxCore image, as added to the repository above.
    -   **IMAGETAG** - the tag for the target image as added to the above repository.
    -   **VOLUMENAME** - the volume to be used by the deployment for persistence, this must use **AccessMode** **ReadWriteMany**.
    -   **STORAGECLASS** - the storage class name used to create the persistent volume.
    -   **DBTYPE** - the database type. By default, and initially, this is Derby.
    For example, once the database is transferred, the **DBTYPE** will need to be updated so you can scale the instances higher. Additionally, once the database is transferred, the number of replicas could be increased. There are additional options to [customize the deployment](customizing_container_deployment.md).

    ![](../images/Container_upgrade.png "Sample Upgrade")


## Delete

Removing the entire deployment requires several steps, this is by design.

1.  Run the following to remove the deployment in a specific namespace:

    ```
    ./scripts/removeDx.sh NAMESPACE
    ```

    -   **NAMESPACE** - the project or the namespace created or used for deployment.
2.  Use any of the following commands to remove a namespace:
    -   OpenShift commands:

        ```
        oc delete "project project"_name
        oc delete -f dxNameSpace_NAMESPACE.yaml
        ```

        where **NAMESPACE** is the namespace to be removed.

    -   Kubernetes command:

        ```
        kubectl delete -f dxNameSpace_NAMESPACE.yaml
        ```

        where **NAMESPACE** is the namespace to be removed.

3.  The persistent volume associated to the deployment needs to be cleaned up by your Administrator. To reuse a persistent volume, see the following steps:
    -   Open the persistent volume in a visual editor \(vi\) using any of the following commands:
        -   OpenShift command:

            ```
            oc edit pv your_namespace
            ```

        -   Kubernetes command:

            ```
            kubectl edit pv your_namespace
            ```

    -   Remove the `claimRef` section:

        ```
        claimRef:
            apiVersion: v1
            kind: PersistentVolumeClaim
            name: dx-deploy-pvc
            namespace: your_namespace
            resourceVersion: "488931120"
            uid: ebd58361-0e2a-11ea-b02e-02f8fe687954
                        
        ```

    -   Ensure you get the `'persistentvolume/your_namespace edited'` message.
    -   You may need to manually remove any data remaining from the previous deployment.

**Parent topic:**[Deploying DX Container to Red Hat OpenShift](../containerization/deploy_openshift.md)

