# Update the Digital Experience 9.5 Core Kubernetes or Red Hat OpenShift container deployment

Update the Digital Experience 9.5 Core Kubernetes container deployment.

Follow the processes below to create a backup, then update the Digital Experience 9.5 Core Kubernetes or Red Hat OpenShift Container Deployment to a later Container Update release.

New HCL Digital Experience 9.5 CFxxx container images are released on a regular cadence, through the **[HCL DX 9.5 Container Update deliveries](../overview/container_update_releases.md)**.

Consult the Digital Experience 9.5 Container [**Deployment**](deployment.md) topic for the latest list of DX 9.5 Container images that are available.

HCL DX administrators should not apply maintenance to an HCL Digital Experience 9.5 container image. Instead, they should run the update process as described below.

**Note:** HCL DX 9.5 CF191 images are available and may be installed. **HCL DX 9.5 CF191 is supported for new deployments only**. DX administrators should not upgrade DX 9.5 container deployments to this release.

HCL DX administrators should not extend the HCL Digital Experience 9.5 container images. They are not intended to be used in the FROM instruction as a parent image.

**It is recommended you create a backup of your DX 9.5 deployment before managing the update processes using the following steps:**

1.  **Create a backup of the `wp_profile`.**

    To backup the `wp_profile`, it is recommended that the number of instances is 1 instance, and your Digital Experience 9.5 Container deployment is stopped using the following command:

    ```
    /opt/HCL/wp_profile/stopServer.sh
    ```

    Next, ensure the entire /opt/HCL/wp\_profile directory is backed up. A method to generate this backup is shown using the following commands:

    ```
    cd /opt/HCL/wp_profile 
    tar -cvpzf backup.tar.gz --exclude=/backup.tar.gz --one-file-system /opt/HCL/wp_profile
    ```

    **Note:** Before starting the tar ensure that your file system has ~50% free capacity.   Once complete, it is recommended that you copy the backup.tar.gz file that is generated to alternate long term storage.

    In addition, as outlined in the [Backup and Recovery](../../9.0/plan/mig_plan_backup_and_recovery.md) topic, the Digital Experience 9.5 database should be backed up at the same time as the `wp_profile`.

2.  **Create a backup of the Persistence layer using the following example commands:**

    ```
    pg_dump name_of_database > name_of_backup_file.
    ```

    We recommend backing up the system on a remote system:

    ```
    pg_dump -U user_name -h remote_host -p remote_port name_of_database > name_of_backup_file. 
    ```

    If it is done locally, you need to execute into the POD.

    Once you have completed the command, it is recommended that a copy of the resulting file is created and placed to an alternate long-term storage.

    **Update the HCL Digital Experience 9.5 core deployment files:**

    **Note:** Beginning with HCL DX 9.5 Container Update CF192, the dxctl process is used to manage updates to later update releases. See the following deployment topics below for the update instructions details.

    -   Documentation resource: [Deploy HCL Digital Experience 9.5 Container to Red Hat OpenShift](../containerization/deploy_openshift.md)
    -   Documentation resource: [Deploy HCL Digital Experience 9.5 Container to Amazon EKS](../containerization/deploy_kubernetes_eks.md)
    -   Documentation resource: [Deploy HCL Digital Experience 9.5 Container to Microsoft Azure AKS](../containerization/azure_aks.md)
    -   Documentation resource: [Deploy HCL Digital Experience 9.5 Container to Google Kubernetes Engine \(GKE\)](../containerization/google_gke.md)
    -   Video: [Using dxctl to update HCL DX 9.5 on Red Hat OpenShift to Container Update CF192](https://youtu.be/PCsEWiCrRKo)
    -   Video: [Updating the HCL DX 9.5 Portal & IBM WebSphere Application Server Administrator Secrets in OpenShift and Kubernetes](https://www.youtube.com/watch?v=kei6--qMwY4)
3.  **Download the later version of the HCL DX 9.5 Container Update packages to update from the HCL Software License Portal.**

    Consult the Digital Experience 9.5 Container [Deployment](deployment.md) topic for the latest list.

4.  **Load, tag, and push the later version DX 9.5 Container images to your supported Kubernetes or OpenShift platform** \(similar to steps followed with your original HCL DX 9.5 image detailed in the HCL DX 9.5 Help Center **[Deployment](deployment.md)** topics\).

    **Use the following guidance and steps if managing an update to Container Update versions prior to CF192:**

5.  To upgrade the deployment to a new version, update the **IMAGETAG** value that was used in the original `deployDx.sh` execution to the new **IMAGETAG**.

    **Note:** If you performed a database transfer, please ensure the `<database>.DbUser` and `<database>.DbPassword` for all Portal databases reflect the current user and password in opt/HCL/wp\_profile/ConfigEngine/properties/wkplc\_dbdomain.properties prior to updating the Portal Core image.

6.  Update the tag in the operator.yaml file to the later HCL DX 9.5 Container Update versions tag.

    **Note:** If updating your DX 9.5 container deployment to CF19, complete the following steps before proceeding to step 7.

    1.  Delete the DxDeployment CRD. This terminates all deployments.
        -   OpenShift command:

            ```
            oc delete crd dxdeployments.git.cwp.pnp-hcl.com
            ```

        -   Kubernetes command:

            ```
            kubectl delete crd dxdeployments.git.cwp.pnp-hcl.com
            ```

    2.  Release claim on the `wp_profile` persistent volume to make it available:
        -   OpenShift command:

            ```
            oc edit pv VOLUME
            ```

        -   Kubernetes command:

            ```
            kubectl edit pv VOLUME
            ```

    3.  Delete the claimRef section:

        ```
        Example: 
        claimRef:
        kind: PersistentVolumeClaim
        namespace: dx-ns
        name: dx-deployment-pvc
        uid: 633c67f9-89fe-4ac8-8db1-929ccbb8a657
        apiVersion: v1
        resourceVersion: '658831'
        
        ```

    4.  Create the CF19 DxDeployment CRD:
        -   OpenShift command:

            ```
            oc create -f deploy/crd/git.cwp.pnp-hcl.com_dxdeployments_crd.yaml
            ```

        -   Kubernetes command:

            ```
            kubectl create -f deploy/crd/git.cwp.pnp-hcl.com_dxdeployments_crd.yaml
            ```

7.  To update the HCL Digital Experience 9.5 core deployment files to the later Container Update version, run the `updateDx.sh` script with updated values, as shown in the following examples:

    -   Kubernetes command:

        ```
        ./scripts/updateDx.sh NAMESPACE REPLICAS REPOSITORY IMAGENAME IMAGETAG VOLUMENAME STORAGECLASS DBTYPE INGRESSIMAGE INGRESSTAG
        ```

    -   OpenShift command:

        ```
        ./scripts/updateDx.sh NAMESPACE REPLICAS REPOSITORY IMAGENAME IMAGETAG VOLUMENAME STORAGECLASS DBTYPE
        ```

        -   **NAMESPACE** - the project or the namespace to create or use for deployment.
        -   **REPLICAS** - the number of initial instances for the deployment.
        -   **REPOSITORY** - your local repository, the repository used by OpenShift/ or supported Kubernetes platforms, Amazon EKS or MS Azure AKs
        -   **IMAGENAME** - the name of the dxCore image, as added to the repository above.
        -   **IMAGETAG** - the tag for the target image as added to the above repository.
        -   **VOLUMENAME** - the volume to be used by the deployment for persistence, this must use **AccessMode ReadWriteMany**.
        -   **STORAGECLASS** - the storage class name used to create the persistent volume.
        -   **DBTYPE** - the database type. By default, and initially, this is Derby.

            -   **INGRESSIMAGE** - The image name to use for ambassador.
            -   **INGRESSTAG** - The image tag to use for ambassador.
            After the `updateDx.sh` script has completed, DX administrators are encouraged to check the following log files to ensure the CF update completed successfully.

            1.  Check the ConfigTrace.log located under the /opt/HCL/wp\_profile/ConfigEngine/log/ directory to ensure the update task was successful, as shown in this example:

```
[2020-08-26 19:53:28.658] Target finished: action-apply-cf
```

```
BUILD SUCCESSFUL
```

            2.  Review for any exceptions in the SystemOut.log located under the /opt/HCL/wp\_profile/logs/WebSphere\_Portal directory.
    **Additional steps required for HCL DX 9.5 deployments to supported Kubernetes platforms: Amazon EKS or Microsoft Azure AKS.**

8.  Administrators must perform delete/deploy or redeploy the ambassador definitions. This can be done by performing these commands, operating on an MS Azure AKS environment in these examples:

    -   *kubectl delete crd tracingservices.getambassador.io -n az-demo*
    -   *kubectl delete crd tlscontexts.getambassador.io -n az-demo*
    -   *kubectl delete crd tcpmappings.getambassador.io -n az-demo*
    -   *kubectl delete crd ratelimitservices.getambassador.io -n az-demo*
    -   *kubectl delete crd ratelimits.getambassador.io -n az-demo*
    -   *kubectl delete crd projectversions.getambassador.io -n az-demo*
    -   *kubectl delete crd projects.getambassador.io -n az-demo*
    -   *kubectl delete crd projectsrevisions.getambassador.io -n az-demo*
    -   *kubectl delete crd modules.getambassador.io -n az-demo*
    -   *kubectl delete crd mappings.getambassador.io -n az-demo*
    -   *kubectl delete crd logservices.getambassador.io -n az-demo*
    -   *kubectl delete crd authservices.getambassador.io -n az-demo*
    -   *kubectl delete crd consulresolvers.getambassador.io -n az-demo*
    -   *kubectl delete crd hosts.getambassador.io -n az-demo*
    -   *kubectl delete crd kubernetesserviceresolvers.getambassador.io -n az-demo*
    -   *kubectl delete crd kubernetesendpointresolvers.getambassador.io -n az-demo*
    Upon completion, these are automatically redeployed at version 1 and version 2, provided you have an active deployment. If not, they are redeployed once the HCL DX 9.5 DX is deployed. The previous ambassador version, prior to CF183 at level 0.85.0, is deployed and uses the ambassador version 1 APIs.

    There are additional options to [customize the deployment](../containerization/customizing_container_deployment.md). For example, once the database is transferred to a non-Derby database, the **DBTYPE** must updated so you can scale the instances higher. Additionally, once the database is transferred, the number of replicas can be increased.

    ![](../assets/Sample_upgrade.png "Sample upgrade")

9.  During the Update process, the deployment automatically restarts a few times and make appropriate configuration changes during these restarts. Once complete the deployment is upgraded.

    For instructions to update the Content Composer, Digital Asset Management, and Experience API container deployment images, see the following topics.

    -   Documentation resource: [Install the Experience API, Content Composer, and DAM Components](../containerization/install_config_cc_dam.md)
    -   Documentation resource: [Update the Experience API, Content Composer, and DAM Components](../containerization/update_config_cc_dam.md)

## Instructions to Delete a DX 9.5 Container Deployment

Removing the entire deployment requires several steps, this is by design.

-   To remove the deployment in a specific namespace, run the following:

    ```
    ./scripts/removeDx.sh NAMESPACE
    ```

    -   **NAMESPACE** - the project or the namespace created or used for deployment.

To remove a namespace, use any of the following commands:

-   OpenShift commands:

    ```
    'oc delete project **<project\_name\>**'
     'oc delete -f dxNameSpace_**NAMESPACE**.yaml' where **NAMESPACE** is the namespace to be removed
    ```

-   Kubernetes command:

    ```
    'kubectl delete -f dxNameSpace_**NAMESPACE**.yaml' where **NAMESPACE** is the namespace to be removed 
    ```


The persistent volume associated to the deployment needs to be cleaned up by your Administrator. To reuse a persistent volume, see the following steps:

-   Open the persistent volume in a visual editor \(vi\) using the:
    -   OpenShift command:

        ```
        oc edit pv your_namespace
        ```

    -   Kubernetes command:

        ```
        kubectl edit pv your_namespace
        ```

-   Remove the `claimRef` section:

    ```
    claimRef:
       apiVersion: v1
       kind: PersistentVolumeClaim
       name: dx-deploy-pvc
       namespace: your_namespace
       resourceVersion: "488931120"
       uid: ebd58361-0e2a-11ea-b02e-02f8fe687954
    ```

-   Ensure you get the `'persistentvolume/your_namespace edited'` message.
-   You may need to manually remove any data remaining from the previous deployment.

**Parent topic:**[Container administration 9.5](../containerization/maintenance.md)

