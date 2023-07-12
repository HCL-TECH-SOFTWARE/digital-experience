# Installing HCL MX Foundry to integrate with HCL Digital Experience

!!! note
    This guide only applies to HCL Digital Experience 9.5 Container Deployments in combination with HCL Volt MX Foundry Helm installations.
    The currently supported version combination is:

      - HCL Digital Experience CF213
      - HCL MX Foundry 9.5.3.0

HCL Digital Experience (DX) can be integrated with HCL MX Foundry. Both products can be installed in the same Kubernetes cluster using one Kubernetes namespace per product. Common parts of the deployments can be reused which is described [in the Configuration section](../configuration/index.md).

## Deploy HCL Digital Experience using Helm

For the deployment and installation of DX, refer to the [Deploy Container Platforms Using Helm](../../../../deployment/install/container/helm_deployment/overview.md) page of this documentation. This integration guide assumes that DX is deployed and configured successfully.

## Deploy HCL MX Foundry using Helm

For the deployment and installation of MX Foundry, refer to [HCL Volt MX Documentation: Installation Guide for Volt MX Foundry Containers Helm Installation](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmxfoundry_containers_helm/Content/Introduction.html).
