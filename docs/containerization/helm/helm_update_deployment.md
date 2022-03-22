# Update deployment to a later version

This section shows how to update your HCL DX 9.5 Container Update CF197 and later deployment to a newer DX 9.5 Container Update release version.

To proceed, administrators should have prepared the container platform cluster, together with the HCL DX 9.5 container deployment custom-values.yaml using the following guidance, [Planning your container deployment using Helm](helm_planning_deployment.md), and then install your deployment using the instructions in [Install and uninstall commands for HCL DX 9.5 CF196 and later container deployments to Kubernetes and Red Hat OpenShift platforms using Helm](helm_install_commands.md).

**Important:**

-   As of HCL DX 9.5 Container Update CF197, you can use this process to update a DX 9.5 deployment from Container Update CF196 on the Google Kubernetes Engine \(GKE\) platform.
-   Support to update DX 9.5 197 container deployments using Helm to CF198 and later DX 9.5 container versions is provided for Red Hat OpenShift, Amazon EKS, Azure AKS, as well as Google GKE platforms beginning with Container Update CF198.

Follow the guidance in this section to update the HCL DX 9.5 container release version CF197 and later deployment, to Kubernetes or Red Hat OpenShift that was installed using Helm.

These instructions assume that you have made all configuration changes using the recommended Helm upgrade route described in [Updating the DX 9.5 Deployment Configuration](helm_operations.md). This ensures that your custom-values.yaml file is an updated description of the configuration of your environment. If that is not the case, you must update your custom-values.yaml file first with all configuration changes.

**Update Ambassador CRDs when updating from CF199 or earlier**

When updating CF199 or earlier, you need to update the ambassador CRDs to a newer version. As a known pattern, Helm will not update CRDs by design.

**Important:**

The CRDs are currently backward compatible. It is still possible to run or perform an install of an older version of DX on that cluster, even when the CRDs are at the latest version.

**Note:**

Do not remove/downgrade the CF200 CRDs to an older version while having CF200 or later deployments running on your cluster.

**Prerequisites:**

You need to have `tar` and HCL DX Helm Chart downloaded. Your `kubectl` configuration must point to the target cluster and the user requires **Cluster Admin Access** to access it.

**Note:** If you changed the Portal or WAS Administrator user, please ensure you have the correct values for `security.core.wasUser/wasPassword` and `wpsUser/wpsPassword` in custom-values.yaml.

**Note:** If you performed a database transfer, please ensure the `<database>.DbUser` and `<database>.DbPassword` for all Portal databases reflect the current user and password in /opt/HCL/wp\_profile/ConfigEngine/properties/wkplc\_dbdomain.properties prior to updating the Portal Core image.

**Procedure to update CRDs**:

1.  Locate the `hcl-dx-deployment-*.tgz` in your downloaded package.
2.  Execute the following commands to update the CRDs:

        # Extract CRD directory from downloaded Helm Chart
        tar vxf hcl-dx-deployment-*.tgz hcl-dx-deployment/crds
        # Apply extracted CRDs on cluster level
        kubectl apply -f hcl-dx-deployment/crds
    
After the action is completed, you can proceed with the DX update procedure. This step is required to be executed only once.

1.  **Populate your repository with the new images**

    Download the new HCL DX 9.5 container update images you need to upgrade and ensure that they are available in the image repository specified in your custom-values.yaml file. See the [Docker image list](../containerization/docker/docker.md) for the latest HCL DX 9.5 container update images available.

2.  **Download the Helm charts for the version to be installed**

    Download the Helm charts corresponding to the HCL DX 9.5 container versions you want to install. You must always use the Helm charts that correspond to the container versions you are installing or to which you are upgrading.

3.  **\(Optional\) Remove the `operatorToHelm` property from the existing custom-values.yaml file before upgrading to CF200 and later**

    If you have CF199 deployed, ensure that you remove the `operatorToHelm` configuration from the custom-values.yaml file before upgrading to CF200, irrespective of whether the property is enabled or not.


        migration:
          operatorToHelm: 
            enabled: true 
    
    **Note:** The `operatorToHelm` configuration property is not supported in CF200, hence it must be removed. This property was introduced in CF199 to facilitate migration from the previous Operator-based deployments to Helm-based deployments.

4.  **Update the image tags**

    Update the image tags in your custom-values.yaml file to match those for the new images in your repository. See [Planning your container deployment using Helm](helm_planning_deployment.md) for more information.

5.  **Run the upgrade command**

    After making the changes to the custom-values.yaml file, use the following command to upgrade your HCL DX 9.5 deployment to CF197 and later release version:

        # Helm upgrade command:
        helm upgrade -n your-namespace -f path/to/your/custom-values.yaml your-release-name path/to/hcl-dx-deployment-vX.X.X_XXXXXXXX-XXXX.tar.gz

    In this example:

    -   `your-namespace` is the namespace in which your HCL Digital Experience 9.5 Container Update deployment is installed and `your-release-name` is the Helm release name you used when installing.
    -   The `-f path/to/your/custom-values.yaml` parameter must point to the custom-values.yaml you updated.
    -   `path/to/hcl-dx-deployment-vX.X.X_XXXXXXXX-XXXX.tar.gz` is the HCL Digital Experience 9.5 Container Update Helm Chart that you extracted in the preparation steps.

<!-- -   **[Running DX Core configuration tasks](../containerization/run_core_config_engine.md)**  
This topic shows how to run manual Core configuration tasks on your HCL DX 9.5 CF197 and later container deployments.
-   **[Migrate to new DAM DB in Helm-based deployments](../containerization/helm_dam_migration_newDB.md)**  
This manual migration process to the new DAM DB is mandatory if you have DX CF196 or CF197 deployed using the Helm-based deployment option and are now upgrading to CF200. It is mandatory because you cannot upgrade to a future release, such as CF201, without manually migrating to the new DB. If you already have CF 198 or CF199 installed using the Helm-based deployment option, then you need not manually migrate the DAM DB.
-   **[Restore Digital Asset Management image to previous version](../digital_asset_mgmt/dam_restore_image_helm.md)**  
This section shows you how to restore the HCL Digital Experience 9.5 Digital Asset Management image to a previous version. -->

**Parent topic:**[Deploying container platforms using Helm](../containerization/helm_deployment.md)

