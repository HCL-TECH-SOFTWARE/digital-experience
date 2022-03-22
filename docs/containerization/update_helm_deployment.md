# Update Helm deployment configuration

This section describes how to update the configuration of an HCL Digital Experience 9.5 CF196 or later deployment to Kubernetes or OpenShift installed using Helm.

This section assumes that you prepared your cluster and your custom-values.yaml file, using guidance provided in the [Planning your HCL DX 9.5 container deployment using Helm](helm_planning_deployment.md) topic, and then installed your deployment using the instructions in the [Install](helm_install_commands.md) topic.

-   **Overview of Helm Configuration Updates**

    Once an HCL Digital Experience Kubernetes 9.5 deployment is installed, it is possible to update its configuration directly using the standard Kubernetes or OpenShift commands \(for example, by updating values in the various config maps\). However, this is NOT the recommended approach. Some of the configuration parameters have interdependencies, as outlined in the [Planning section](helm_planning_deployment.md). These require knowledgeable management to make changes that are compatible with interdependency requirements. For example, if you change the context root for DX Core you also need to change the readiness and liveness probes.

    The recommended approach for configuration changes is to update the custom-values.yaml file used to install the deployment, and then run a Helm upgrade. This has the added benefit that your custom-values.yaml file remains an up-to-date description of the configuration of your environment.

-   **Helm Upgrade configuration command**

    After making the needed changes to your custom-values.yaml file, use the following command:

    ```py
    # Helm upgrade command
    helm upgrade -n your-namespace -f path/to/your/custom-values.yaml your-release-name path/to/hcl-dx-deployment-vX.X.X_XXXXXXXX-XXXX.tar.gz
    ```

    -   The `your-namespace` is the namespace in which your HCL Digital Experience 9.5 deployment is installed and `your-release-name` is the Helm release name you used when installing.
    -   The `-f path/to/your/custom-values.yaml` parameter must point to the custom-values.yaml you have updated.
    -   The path/to/hcl-dx-deployment-vX.X.X\_XXXXXXXX-XXXX.tar.gz is the HCL Digital Experience Helm Chart that you extracted in the preparation steps.

**Parent topic:**[Operations using Helm](../containerization/helm_operations.md)

