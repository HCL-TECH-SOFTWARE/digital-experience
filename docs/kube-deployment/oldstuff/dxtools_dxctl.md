# dxctl

Learn how to use `dxctl` for custom HCL Digital Experience 9.5 container deployments

## About this task

Administrators can use the `dxctl` tool provided with Container Update CF19 and later releases to define and configure custom DX container deployments. See the following guidance:

-   **Video**: [Using dxctl to Deploy DX Portal on OpenShift](https://youtu.be/pLN_ea8-d_E)

General help for the `dxctl` tool or help related for sub-commands \(`create`, `update`, `collect`, and `destroy`\) and the command syntax are found with `--help`.

`dxctl` can be used to deploy DX using a properties file. Sample properties files are included in the dxctl/properties directory.

The properties files function as follows:

-   `Full deployment config: full-deployment.properties`

    ```
    hybrid.enabled: false
    hybrid.host: onprem_hostname.com
    hybrid.port: 10042
    ```

    -   For Mac:

        ```
        ./mac/dxctl --deploy -p properties/full-deployment.properties
        ```

    -   For Windows:

        ```
        win\dxctl.exe -–deploy -p properties/full-deployment.properties
        ```

    -   For Linux:

        ```
        ./linux/dxctl -–deploy -p properties/full-deployment.properties
        ```

-   `Hybrid deployment config: hybrid-deployment.properties`

    ```
    hybrid.enabled: true
    hybrid.host: aws-hybrid.sample-dx-deploy.com
    hybrid.port: 10042
    ```

    -   For Mac:

        ```
        ./mac/dxctl --deploy -p properties/hybrid-deployment.properties
        ```

    -   For Windows:

        ```
        win\dxctl.exe -–deploy -p properties/hybrid-deployment.properties
        ```

    -   For Linux:

        ```
        ./linux/dxctl -–deploy -p properties/hybrid-deployment.properties
        ```

        These create a hybrid deployment with Experience API, Content Composer, and Digital Asset Management. You can disable any of these features by making a copy of the hybrid file and setting the value to `false` to disable it.

        **Example:**

        `composer.enabled: false` disables Content Composer.

        **Note:** Experience API must be enabled to deploy Content Composer and Digital Asset Management.


## Prerequisites

The following are the prerequisites for using `dxctl`.

-   Before running the `dxctl` tool, you must log in on the targeted cluster using your platform's cloud-specific command-line interface \(CLI\), such as Azure CLI \(az\), gcloud CLI, AWS CLI, OpenShift CLI \(oc\), etc. For example, in Red Hat OpenShift, you must use `oc login`.
-   `dxctl` does not deploy the DxDeployment custom resource definition. You must run the `./scripts/deployCrd.sh` before using `dxctl`.

## Creating a deployment

Follow these steps to create a deployment.

1.  You must copy the properties file once a deployment is created.
2.  Use the copied file to perform a deployment and maintain and update a deployment.

    For example:

    ```
    mkdir -p /home/$USER/deployments/
    ```

    ```
    cp dxctl/properties/full-deployment.properties /home/$USER/deployments/myfirst_deployment.properties
    ```

3.  Change the settings. For example, change `dx.namespace:` to `myfirst-dx-deployment`.

    ```
    ./linux/dxctl --deploy -p /home/$USER/deployments/myfirst_deployment.properties
    ```


**Note:** For OpenShift deployments, `/linux/dxctl --deploy` is all you need. For all other Kubernetes environments \(EKS, GKE, etc.\), you need to generate a TLS certification and private key. See the [Generate TLS Certificate](kubernetes_eks_cf192andlater.md#section_generate_tls_cert_cf192andlater) topic for more information.

## Updating a deployment

Limitation: If you have a DX-only deployment \(a deployment that contains only DX without any other features, such as the Experience API, Content Composer, or Digital Asset Management\) installed using the deployment script, the `dxctl` tool cannot be used to update this deployment. You may continue to use the DX deployment script to update this deployment.

**Note:** When working with HCL Digital Experience 9.5 Container Update CF192 and later, the dxctl tool can be used to update the deployment.

The dxctl tool does not deploy or update the DxDeployment custom resource definition. Prior to running an update process, administrators should check the DxDeployment custom resource definition \(`hcl-dx-cloud-scripts/deploy/crds/git.cwp.pnp-hcl.com_dxdeployments_crd.yaml`\) for changes and update accordingly:

-   **Red Hat OpenShift command:**

    ```
    oc delete crd dxdeployments.git.cwp.pnp-hcl.com
    ```

-   **Kubernetes command:**

    ```
    kubectl delete crd dxdeployments.git.cwp.pnp-hcl.com
    ```

    CAUTION:

    Since `crd` is a cluster-wide resource, the use of `kubectl delete crd dxdeployments.git.cwp.pnp-hcl.com` or `oc delete crd dxdeployments.git.cwp.pnp-hcl.com` causes a service outage for all the **dx-deployment** across the cluster.

-   **Red Hat OpenShift command:**

    ```
    oc create -f deploy/crds/git.cwp.pnp-hcl.com_dxdeployments_crd.yaml
    ```

-   **Kubernetes command:**

    ```
    kubectl create -f deploy/crds/git.cwp.pnp-hcl.com_dxdeployments_crd.yaml
    ```


Follow these steps to update a deployment.

-   Update the properties file with the new image values and run the update command:

    For Mac:

    ```
    ./mac/dxctl --update -p properties/myfirst_deployment.properties
    ```

    For Windows:

    ```
    .\win\dxctl.exe --update -p properties\myfirst_deployment.properties
    ```

    For Linux:

    ```
    ./linux/dxctl -–update -p properties/myfirst_deployment.properties
    ```


With the updated deployment, if you were switching to a next release, you can use the properties file to replace the repository, image, and tag as required and perform the update command.

## Deleting a deployment

There are two ways to delete a deployment.

-   Method 1: Remove the deployment but allow for redeployment with the same volumes.

    ```
    ./linux/dxctl --destroy -p properties/hybrid-deployment.properties
    ```

-   Method 2: Remove the entire `namespace/project`.

    ```
    ./linux/dxctl --destroy -p properties/hybrid-deployment.properties -all true
    ```


If some resources, like services, are not deleted, run the following command:

```
kubectl patch services $(kubectl get services -n $NAMESPACE  | grep -v "NAME" |awk  '{print $1}') -p '{"metadata":{"finalizers":null}}' -n $NAMESPACE
```

## Main usage

Usage information for `dxctl`, for additional information, use `--help` with an action.

-   Deploy

    Run to deploy a DX deployment.

    ```
    dxctl --deploy --help
    ```

-   Update

    Run to update a DX deployment.

    ```
    dxctl --update --help
    ```

-   Collect

    Run to collect support data for a given deployment.

    ```
    dxctl --collect --help
    ```

-   Destroy

    Run to destroy a DX deployment.

    ```
    dxctl --destroy --help
    ```


## dxctl help

Sub-commands, required: `deploy`, `update`, `collect`, or `destroy`.

-   --deploy or --update

    **`action string`**

    -   Update an existing DX deployment. Default: `update`
    **`dx.database string`**

    -   The database type Oracle, DB2, etc. Default: `derby`
    **`dx.image string`**

    -   Required, the DX core image.
    **`dx.name string`**

    -   Deployment name. Default: `dx-deployment`
    **`dx.namespace string`**

    -   Required, the target `namespace/project`.
    **`dx.operator.image string`**

    -   Required, the HCL cloud operator image.
    **`dx.operator.tag string`**

    -   Required, the HCL cloud operator tag.
    **`dx.repository string`**

    -   Required, the image HCL cloud operator repository.
    **`dx.tag string`**

    -   Required, the DX core tag.
    **`filename string`**

    -   File name to write into dx-tests.dx-deployment.txt. This contains the test and deployment logs.

        By default, the `namespace` is used as the filename.

        **Example:** NAMESPACE.txt

    **`ingress.image string`**

    -   Required, the ambassador image. Not used in OpenShift deployments.
    **`ingress.tag string`**

    -   Required, the ambassador tag. Not used in OpenShift deployments.
    **`p string`**

    -   dxctl can be run from a properties file, `-p` namespace.properties, no default.
    **`verbose`**

    -   Display messages on the command line. Default: `false`
-   --collect

    **`action string`**

    -   Collecting deployment information about an existing deployment. Default: `collect`
    **`dx.name string`**

    -   Deployment name. Default: `dx-deployment`
    **`dx.namespace string`**

    -   Required, the target `namespace/project`.
    **`filename string`**

    -   File name to write into dx-tests.dx-deployment.txt. This contains the test and deployment logs.

        By default, the `namespace` is used as the filename.

        **Example:** NAMESPACE.txt

    **`verbose`**

    -   Display messages on the command line. Default: `false`
-   --destroy

    **`action string`**

    -   Destroy a DX deployment. Default: `destroy`
    **`all`**

    -   Delete the `project/namespace` and all artifacts. Default: `false`
    **`dx.name string`**

    -   Deployment name. Default: `dx-deployment`
    **`dx.namespace string`**

    -   Required, the target `namespace/project`.
    **`filename string`**

    -   File name to write into dx-tests.dx-deployment.txt. This contains the test and deployment logs.

        By default, the `namespace` is used as the filename.

        **Example:** NAMESPACE.txt

    **`verbose`**

    -   Display messages on the command line. Default: `false`

**Parent topic:**[Operator-based deployment](../containerization/deploy_container_platforms.md)

