# Installing HCL Leap to integrate with HCL Digital Experience

!!! note
    This guide only applies for HCL Digital Experience 9.5 Container Deployments in combination with HCL Leap Helm installations.
    The currently supported version combination is:

      - HCL Digital Experience CF213
      - HCL Leap 9.3.2 
HCL Digital Experience (DX) can be integrated with HCL Leap. Both products can be installed in the same Kubernetes cluster using same Kubernetes namespace. Common parts of the deployments can be reused which is described [in the Configuration section](../configuration/index.md).

## Deploy HCL Digital Experience using Helm

For the deployment and installation of DX, please refer to the [Deploy Container Platforms Using Helm](../../../../deployment/install/container/helm_deployment/overview.md) page of this documentation. This integration guide will assume that DX is deployed and configured successfully.

## Deploy HCL Leap using Helm

1. Update the custom values file to set Leap image name, tags and repository name. The procedure is very similar to the instructions in the [Prepare Configuration page for DX](../../../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configuration/). The value options for Leap are documented [in the Leap documentation](https://help.hcltechsw.com/Leap/9.3.2/deploy_container_kubernetes_openliberty.html)

2. Please refer to the [Deploying to a Container (Kubernetes) Platform - Open Liberty](https://help.hcltechsw.com/Leap/9.3.2/deploy_container_kubernetes_openliberty.html) section of the HCL Leap product documentation.

???+ info "Post deployment tasks"
    - You should now be able to access Leap through `https://<your-domain>/apps`. It's is recommended that you do the [post-deployment tasks](https://help.hcltechsw.com/Leap/9.3.2/in_setting_up_environment.html)
