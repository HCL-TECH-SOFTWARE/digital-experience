# Installation with HCL Leap

!!! note
    This guide only applies for HCL Digital Experience 9.5 Container Deployments in combination with HCL Leap Helm installations.
    The currently supported version combination is:

      - HCL Digital Experience CF213
      - HCL Leap 9.3.2 
HCL Digital Experience (DX) can be integrated with HCL Leap. Both products can be installed in the same Kubernetes cluster using same Kubernetes namespace. Common parts of the deployments can be reused which is described [in the Configuration section](../configuration/index.md).

## Deploy HCL Digital Experience using Helm

For the deployment and installation of DX, please refer to the [Deploy Container Platforms Using Helm](../../../../deployment/install/container/helm_deployment/overview.md) page of this documentation. This integration guide will assume that DX is deployed and configured successfully.

## Deploy HCL Leap using Helm

The following are high-level steps for Installing HCL Leap with an existing DX Deployment.
Please see [HCL Leap product documentation](https://help.hcltechsw.com/Leap/9.3.2/deploy_container_kubernetes_openliberty.html) for detailed instructions.

???+ info "Post deployment tasks"
    - You should now be able to access Leap through `https://<your-domain>/apps`. It's is recommended that you do the [post-deployment tasks](https://help.hcltechsw.com/Leap/9.3.2/in_setting_up_environment.html)
