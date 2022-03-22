# Install the HCL Digital Experience 9.5 components

This section provides a high-level overview of the architecture and the steps to install, configure, and update the HCL Digital Experience 9.5 components: Experience API, Content Composer, and Digital Asset Management.

**Video**: [Install HCL Digital Experience components \(Experience API, Content Composer, and Digital Asset Management\) on Red Hat OpenShift](https://youtu.be/Hhop8M89SVA)

## High-level architecture and topology

![](../images/container_deploy_tp_cf_181.png "High-level architecture")

![](../images/cf_181_topology.png "Topology")

## Prerequisite

DX Administrators can choose to install the DX Core containers then proceed to install Content Composer and Digital Asset Management containers to the supported Kubernetes container platforms as outlined in the following steps. See the [Deployment](deployment.md) section for the latest DX 9.5 container file listings.

Deploying the HCL Digital Asset Management or Content Composer components is supported on Kubernetes or OpenShift platforms and is not supported for deployment to Docker platforms. See the [System requirements](../overview/inst_req.md) section for more information and the latest updates.

**Note:** For initial deployments, it is recommended to install the HCL Digital Experience 9.5 components \(Experience API, Content Composer, and Digital Asset Management\) to a non-production \(test\) HCL Digital Experience 9.5 environment.

## Installing the HCL Digital Experience 9.5 Container components

Follow these steps to install your HCL Digital Experience 9.5 components \(Experience API, Content Composer, and Digital Asset Management\):

**Asset Management components**

If installing in conjunction with HCL Digital Experience 9.5 CF181 or higher, follow the instructions in the [Container Deployment](deployment.md) topic. This page lists the latest HCL Digital Experience 9.5 CF181 or higher product images available and how to obtain and load the images into your Docker repository before continuing with these instructions.

If installing to an existing HCL Digital Experience 9.5 CF181 or higher Kubernetes environment:

1.  Verify that you can access the HCL Digital Experience 9.5 CF181 or higher Practitioner Studio by logging in to your HCL Digital Experience 9.5 Practitioner Studio interface. See the [HCL Digital Experience 9.5 Practitioner Studio](../practitioner_studio/practitionerstudio_overview.md) topic for information.
2.  Download and extract the HCL Digital Experience 9.5 components from your Digital Experience entitlements from the [HCL Software License Portal](https://www.hcltech.com/software/support/release) to the local file system.

    **Sample download package name**: `hcl-dx-kubernetes-v95-CF181-other.zip` or higher, depending on the DX 9.5 Container Update version you are installing.

    **Example**:

    ```
    **hcl-dx-kubernetes-v95-CF181-other.zip:**
    ```

    -   **HCL Experience API \(Docker image\)** - `hcl-dx-ringapi-image-v1.0.0_xxxxxxxx-xxxx.tar.gz`
    -   **Postgres** - `hcl-dx-postgres-image-v1.0.0_xxxxxxxx-xxxx.tar.gz`
    -   **HCL Digital Asset Management \(Operator\)** - `hcl-dx-medialibrary-operator-image-v95_CF181_xxxxxxxx-xxxx.tar.gz`
    -   **HCL Digital Asset Management \(Image processor\)** - `hcl-dx-image-processor-image-v1.0.0_xxxxxxxx-xxxx.tar.gz`
    -   **HCL Digital Asset Management \(Docker image\)** - `hcl-dx-digital-asset-manager-image-v1.0.0_xxxxxxxx-xxxx.tar.gz`
    -   **HCL Content Composer \(Docker image\)** - `hcl-dx-content-composer-image-v1.0.0_xxxxxxxx-xxxx.tar.gz`
3.  Extract the images to the local file system.
4.  Open a terminal window and change to the root directory of the extracted package images.
5.  Load the images into your Docker environment.

    Example:

    ```
    Docker load < hcl-dx-ringapi-image-v1.0.0_xxxxxxxx-xxxx.tar.gz
    ```

    ```
    Docker load < hcl-dx-medialibrary-operator-image-v95_CF181_xxxxxxxx-xxxx.tar.gz
    ```

    ```
    Docker load < hcl-dx-digital-asset-manager-image-v1.0.0_xxxxxxxx-xxxx.tar.gz
    ```

    ```
    Docker load < hcl-dx-content-composer-image-v1.0.0_xxxxxxxx-xxxx.tar.gz
    ```

    ```
    Docker load < hcl-dx-image-processor-image-v1.0.0_xxxxxxxx-xxxx.tar.gz
    ```

    ```
    Docker load < hcl-dx-postgres-image-v1.0.0_xxxxxxxx-xxxx.tar.gz
    ```

    **Note:** Either **`-i`** or **`<`** works for the load command. In case you encounter an error when using one, try running the command using the other.

6.  Get the Docker images in your local Docker repository to your target Kubernetes system by tagging and pushing them appropriately. If you used `docker load` to get your images on the target environment, proceed to the next step.
7.  Install the HCL Digital Experience 9.5 CF181 or higher Experience API, Content Composer, and Digital Asset Management components by using the following steps. Container Update CF182 or higher is required if deploying to Microsoft Azure Kubernetes Service \(AKS\).

    **Notes:**

    -   The config map name value used must be the same as the HCL Digital Experience 9.5 CF181 and higher deployment. By default, the config map deployment name value is dx-deployment.
    -   The HCL Experience API must be installed to access and use the HCL Content Composer and the HCL Digital Asset Management features.
    **Reminder**: If you are currently running an HCL Digital Experience 9.5 CF181 or higher Kubernetes deployment in production, adding new components requires an outage and setup time so plan it carefully.

    If you are creating the dx-deployment config map, you can use the following content \(adjusting the image tag values to match your environment\) to create a YAML file and use a command line client to create the config map which is used to deploy the HCL Experience API, HCL Content Composer, and HCL Digital Asset Management CF181 and later components.

    **Note:** It is possible to deploy the services for the HCL Experience API and HCL Content Composer and/or Digital Asset Management, if either of those combinations is preferred, by removing either the HCL Content Composer or HCL Digital Asset Management service lines from the YAML file.

8.  Confirm your HCL Digital Experience 9.5 CF181 and higher container instance is up and running on Amazon EKS, Microsoft Azure \(CF182 or higher\), or Red Hat OpenShift platform.

    **Note:** If you are adding components for HCL Content Composer, HCL Digital Asset Management, and HCL Experience API to an existing HCL Digital Experience 9.5 environment \(must be at level 9.5 CF181 or higher\) deployment, you must stop the deployment and restart it with one \(1\) replica.

    **Reminder**: For an initial deployment, it is not advisable to deploy these components to a production HCL Digital Experience 9.5 deployment.

9.  Update the HCL Digital Experience 9.5 CF181 or higher container deployment configuration map to deploy the HCL Experience API, HCL Content Composer, and HCL Digital Asset Management CF181 and higher components.

    **Note:** The config map name value used to support the CF181 or higher components must be the same as the HCL Digital Experience 9.5 CF181 and higher deployment. By default, the config map deployment name value is `dx-deployment`.

10. Create a YAML file with the following config map settings:

    ```
    kind: `ConfigMap`
    ```

    ```
    metadata:
      name: dx-deployment
    ```

11. Use the following example YAML \(`dx-deploy-config-map.yaml`\) to deploy the HCL Experience API, HCL Content Composer, and HCL Digital Asset Management CF181 or higher components. If deploying HCL Content Composer and HCL Digital Asset Management CF181 components, replace their file names in the sample YAML file services lines used.

    **Note:** It is possible to deploy the services for the HCL Experience API and HCL Content Composer and/or Digital Asset Management by removing either the HCL Content Composer or HCL Digital Asset Management service lines from the YAML file.

    ```
    kind: ConfigMap
    metadata:
      name: dx-deployment
    data:
      dx.deploy.dam.persistence.tag: v1.0.0_20200622-1806
      dx.deploy.dam.persistence.image: portal/persistence/postgres
      dx.deploy.dam.volume: volume name
      dx.deploy.dam.imgprocessor.tag:  v95_CF181_20200622-1550
      dx.deploy.remotesearch.tag: v95_CF181_20200622-1550
      dx.deploy.dam.imgprocessor.image: portal/image-processor
      dx.deploy.dam.storageclass: dx-deploy-stg
      dx.deploy.remotesearch.image: dxrs
      dx.deploy.openldap.tag: v1.0.0-release_20200622_1592846796
      dx.deploy.openldap.image: dx-openldap
      dx.deploy.contentui.tag: v1.0.0_20200622-1709
      dx.deploy.contentui.image: portal/content-ui
      dx.deploy.remotesearch.enabled: 'true'
      dx.deploy.dam.tag: v1.0.0_20200622-1718
      dx.deploy.experienceapi.tag: v1.0.0_20200622-1719
      dx.deploy.experienceapi.image: portal/api/ringapi
      dx.deploy.dam.image: portal/media-library
      dx.deploy.openldap.enabled: 'true'
      dx.deploy.contentui.enabled: 'true'
      dx.deploy.experienceapi.enabled: 'true'
      dx.deploy.dam.enabled: 'true'
      dx.deploy.dam.operator.tag: v95_CF181_20200622-1756
      dx.deploy.dam.operator.image: hcl-medialibrary-operator
      dx.deploy.remotesearch.volume.storageclass: gp2
    
    ```

    **Notes:**

    -   The deployment of HCL Content Composer and HCL Experience API components create:
        -   The `dx.deploy.contentui.enabled` and `dx.deploy.experienceapi.enabled` configurations tell the operator to deploy HCL Content Composer and HCL Experience API components. This defaults to using the same repository as the HCL Digital Experience 9.5 CF181 or higher container core deployment.

        -   Services `dx-deployment-service-content-ui` and `dx-deployment-service-ring-api`, and a route for each.
    -   Administrators can override the repository by adding the following to the config map entries:

        ```
        dx.deploy.contentui.repository
        ```

    -   The `dx.deploy.dam.enabled` tells the operator to deploy the HCL Digital Asset Management component. Note that there are 4 required sets of image/tag parameters:

        -   The HCL Digital Asset Management operator component uses `prefixdx.deploy.dam.operator`.
        -   The Postgres datastore component uses `dx.deploy.dam.persistence`.
        -   The HCL Digital Asset Management library services use `dx.deploy.dam`.
        -   The Image processor uses `dx.deploy.dam.persistence`.
        To override the repository values for the components above, use `dx.deploy.COMPONENT.repository`

        The last two parameters in the example YAML file provide the storage class and volume \(must be **ReadWriteMany**\) for the HCL Digital Asset Management component. This is where the persistence layer maintains the datastore layer.

        The `dx.deploy.dam.volume: volume name` setting is optional if the storage class used/specified by `dx.deploy.dam.storageclass` is self-provisioning.

        A `dx.dam.config.cors` config map setting is auto-generated and provides the ability for Cross Origin Resource Sharing across Content Composer and Digital Asset Management resources.

        In the Digital Experience 9.5 core deployment, the `dx.config.cors` setting is set in the DX configuration map. Reference the [Containerization Deployment](deployment.md) pages for additional details.

        An additional self-provisioning volume is created for each of the HCL Digital Asset Management Persistence \(Postgres\) pods. The access mode of these self-provisioning persistent volumes must include `ReadWriteOnce`. If this volume is not present the images are lost and shows blank if/when the HCL Digital Asset Management library is restarted.

        Administrators can override the repository by adding to:

        ```
        dx.deploy.contentui.repository
        ```

        In addition, the following default settings are configurable:

        -   `dx.deploy.contentui.resources.cpurequest`, the default is 1.
        -   `dx.deploy.contentui.resources.cpulimit`, the default is 3.
        -   `dx.deploy.contentui.resources.memoryrequest`, the default is 2G.
        -   `dx.deploy.contentui.resources.memorylimit`, the default is 4G.
        -   `dx.deploy.experienceapi.resources.cpurequest`, the default is 1.
        -   `dx.deploy.experienceapi.resources.cpulimit`, the default is 3.
        -   `dx.deploy.experienceapi.resources.memoryrequest`, the default is 2G.
        -   `dx.deploy.experienceapi.resources.memorylimit`, the default is 4G.
        Additional configuration options are currently not supported.

12. Deploy the YAML \(`dx-deploy-config-map.yaml`\) by issuing the following:
    -   Kubernetes command:
        -   ```
kubectl apply -f dx-deploy-config-map.yaml -n your-namespace
```

    -   OpenShift command:
        -   ```
oc project your-namespace
```

            followed by

        -   ```
oc apply -f dx-deploy-config-map.yaml
```

13. Stop and restart the HCL Digital Experience 9.5 CF181 and higher container deployment.

    **Note:** If you are adding components for HCL Content Composer, HCL Digital Asset Management, and HCL Experience API to an existing HCL Digital Experience 9.5 environment \(must be at level 9.5 CF181 or higher\) deployment, you must stop the deployment and restart it with one \(1\) replica. Once it is fully started, you can safely scale it to `N` instances.

    **Reminder**: As outlined in this section, adding new components to a production deployment requires an outage and some setup time. It is advisable to plan carefully if you are currently running a Digital Experience container deployment in a supported Kubernetes environment.

14. Change to the extracted hcl-dx-cloud-scripts directory.

    ```
    ./scripts/removeDx.sh NAMESPACE
    ```

    **Note:** This script removes resources from the existing deployment \(pods, statefulsets, etc\) but does not remove persisted data or existing configmaps.

15. Remove the `claimRef` from the PersistedVolume.

    **Note:** Instructions to re-use the Persistent Volume may also be viewed in the **[Deploy HCL Digital Experience 9.5 Container to Amazon EKS](kubernetes_eks.md) topic.**

16. Open the persistent volume in a visual editor \(vi\) using the Kubernetes or OpenShift command line client command:

    ```
    kubectl edit pv <pv name>
    ```

    or

    ```
    oc edit pv <pv name>
    ```

17. Remove the `claimRef` section:

    ```
    claimRef:
    apiVersion: v1
    kind: PersistentVolumeClaim
    name: dx-deploy-pvc
    namespace: awseks-demo
    resourceVersion: "488931120"
    uid: ebd58361-0e2a-11ea-b02e-02f8fe687954
    ```

18. Ensure you get the '`persistentvolume/your_namespace edited`' message.
19. Change to the extracted hcl-dx-cloud-scripts directory.

    ```
    ./scripts/deployDx.sh NAMESPACE REPLICAS REPOSITORY IMAGENAME IMAGETAG VOLUMENAME STORAGECLASS DBTYPE
    ```

    or

    ```
    ./scripts/deployDx.sh NAMESPACE REPLICAS REPOSITORY IMAGENAME IMAGETAG VOLUMENAME STORAGECLASS DBTYPE INGRESSIMAGE INGRESSTAG
    ```

    **Note:** You must restart the deployment with one \(1\) replica. Once it is fully started, you can safely scale it to `N` instances.

    **Reminder**: As outlined in this section, adding new components to a production deployment requires an outage and some setup time. It is advisable to plan carefully if you are currently running a Digital Experience container deployment in a supported Kubernetes environment.

20. Access the HCL Content Composer and HCL Digital Asset Management components by navigating to **Practitioner Studio** \> **Web Content** \> **Content**, or **Practitioner Studio** \> **Digital Assets**.

    ```
    https://your-portal.net/wps/myportal/Practitioner/Web Content/Content Library
    ```

    ```
    https://your-portal.net/wps/myportal/Practitioner/Digital Assets
    ```

21. Access the HCL Experience API Explorer at the following URL:

    ```
    http://<HOST>:<PORT>dx/api/core/v1/explorer
    ```

    For example,

    ```
    http://127.0.0.1:3000/dx/api/core/v1/explorer
    ```


## \(Optional\) Configure Digital Asset Management with a CDN

If you are using a content delivery network \(CDN\) such as [Akamai](https://www.akamai.com/our-thinking/cdn/what-is-a-cdn), using `Vary: Origin` may prevent you from caching content. To bypass this limitation, your CDN configuration must strip the `Vary` header on the way in, to reinstate your ability to cache content. On the way out, you can append the `Origin` parameter to the `Vary` header when serving a response using **'Modify Outgoing Response Header'**.

**Parent topic:**[Operator-based deployment](../containerization/deploy_container_platforms.md)

