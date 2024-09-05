# Deploying using Helm

!!!important "Before deployment, see the following resources first."
    * [Kubernetes deployment](../../../../get_started/plan_deployment/container_deployment/index.md) for an understanding of the capabilities, deployment structures, configuration and scaling options available for HCL DX 9.5 CF196 and later deployments.
    * [Containerization requirements and limitations](../../../../get_started/plan_deployment/container_deployment/limitations_requirements.md) for an understanding of the requirements, including capacity planning, and current limitations for an HCL Digital Experience 9.5 and later deployment using Helm.

HCL DX V9.5 is designed to run on any Certified Kubernetes platform with some conditions. See the [system requirements for Kubernetes platforms](../../../../get_started/system_requirements/kubernetes/kubernetes-runtime.md) for more information.

This section provides administrators with instructions to deploy HCL Digital Experience to supported Kubernetes platforms. This includes preparation, installation, and uninstallation of the deployments using Helm.

Older versions of HCL DX shipped with an operator instead of helm charts, and shipped Ambassador for use as an ingress controller. These have been removed is CF 200 and CF 202 respectively. Please refer to documentation of prior product versions for [Operator](https://opensource.hcltechsw.com/digital-experience/CF216/deployment/install/container/operator-migration/operator_migration_preparation/) and [Ambassador](https://opensource.hcltechsw.com/digital-experience/CF216/deployment/install/container/haproxy-migration/haproxy-introduction/) migration steps. 

**Before you begin:** Refer to the latest HCL DX 9.5 Update image files list provided in the [Container image list](../image_list.md) topic.

``` mermaid
flowchart TD
  accTitle: Steps in DX Helm installation.
  accDescr: Flowchart showing the mandatory and optional steps in DX Helm installation.

  A([Start])
  B1[Configure Helm Repository];
  B2[Load the Images];
  C[/Mandatory or Optional Tasks/];
  D[Prepare Namespace];
  E[Setup Custom Configuration];
  F[Setup Persistent Volumes];
  G[Configure Networking];
  H[Configure Certificate];
  I[Optional tasks];
  J[Install DX]

  A --> B1;
  B1 --> B2;
  B2 --> C;
  C --> |Mandatory| D;
  D --> E;
  E --> F;
  F --> G;
  G --> H;
  H --> J;
  C ----> |Optional| I;
  I --> J;

  click B1 "../helm_deployment/preparation/get_the_code/configure_harbor_helm_repo.html"
  click B2 "../helm_deployment/preparation/get_the_code/prepare_load_images.html"
  click D "../helm_deployment/preparation/mandatory_tasks/prepare_namespace.html"
  click E "../helm_deployment/preparation/mandatory_tasks/prepare_configuration.html"
  click F "../helm_deployment/preparation/mandatory_tasks/prepare_persistent_volume_claims.html"
  click G "../helm_deployment/preparation/mandatory_tasks/prepare_configure_networking.html"
  click H "../helm_deployment/preparation/mandatory_tasks/prepare_ingress_certificate.html"
  click I "../helm_deployment/preparation/optional_tasks/optional_internal_networking.html"
  click J "../helm_deployment/helm_install_commands.html"





``` 