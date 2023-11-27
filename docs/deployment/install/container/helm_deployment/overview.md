# Deploy Using Helm
    
HCL DX V9.5 is designed to run on any Certified Kubernetes platform with some conditions. See the [system requirements for Kubernetes platforms](../../../../get_started/system_requirements/kubernetes/kubernetes-runtime.md) for more information.

This section provides administrators with instructions to deploy HCL Digital Experience to supported Kubernetes platforms. This includes preparation, installation, and uninstallation of the deployments using Helm.

Older versions of HCL DX shipped with an operator instead of helm charts, and shipped Ambassador for use as an ingress controller. These have been removed is CF 200 and CF 202 respectively. Please refer to documentation of prior product versions for [Operator](https://opensource.hcltechsw.com/digital-experience/CF216/deployment/install/container/operator-migration/operator_migration_preparation/) and [Ambassador](https://opensource.hcltechsw.com/digital-experience/CF216/deployment/install/container/haproxy-migration/haproxy-introduction/) migration steps. 

**Before you begin:** Refer to the latest HCL DX 9.5 Update image files list given in the [Container image list](../image_list.md) topic.

``` mermaid
flowchart TD
  accTitle: Steps in DX Helm installation.
  accDescr: Flowchart showing the mandatory and optional steps in DX Helm installation.
  
  A([Start])
  B[Get access to helm charts and images];
  C[/Mandatory or Optional Tasks/];
  D[Prepare Namespace];
  E[Setup Custom Configuration];
  F[Setup Persistent Volumes];
  G[Configure Networking];
  H[Configure Certificate];
  I[Move on to optional tasks];
  J[Install DX]

  A --> B;
  B --> C;
  C --> |Mandatory| D;
  D --> E;
  E --> F;
  F --> G;
  G --> H;
  H --> J;
  C ----> |Optional| I;
  I --> J;

  click D "../preparation/mandatory_tasks/prepare_namespace/"
  click E "../preparation/mandatory_tasks/prepare_configuration/"
  click F "../preparation/mandatory_tasks/prepare_persistent_volume_claims/"
  click G "../preparation/mandatory_tasks/prepare_configure_networking/"
  click H "../preparation/mandatory_tasks/prepare_ingress_certificate/"
  click I "../preparation/optional_tasks/optional_internal_networking/"
  click J "../helm_install_commands/"





``` 

Refer to the following videos and guides for more information:

-   [Deploy HCL DX 9.5 using Helm](https://www.youtube.com/watch?v=pFKpMImqOQE){:target="_blank"}
-   [Update HCL DX 9.5  to a later version using Helm](https://www.youtube.com/watch?v=TwZuNOeWdT4){:target="_blank"}
-   [DX CF197 on Azure AKS using the Helm Chart](https://support.hcltechsw.com/sys_attachment.do?sys_id=876b1adf1bb97490a67e9759bc4bcb03){:target="_blank"}.
