# What's new in CF210

The following features and updates are available to customers installing HCL Digital Experience Container Update and CF210 on supported platforms:

- Updated minimal system requirements for Kubernetes deployments [in our documentation](../../../get_started/plan_deployment/container_deployment/limitations_requirements/)
- Reduced default CPU and memory settings in the helm charts' `values.yaml`.
**NOTE**: If you have not overwritten the resource configuration in your helm chart, effectively with 210 the resource limits are reduced and your scenarios might not work any more. Ensure proper performance testing before rolling this change out. If you want to go with the previous values you can find them in the values.yaml file of the previous release.
- Copy content from one site area to another in Content Composer
- Remove Design Studio (Beta) from delivery
- DX-Connections 8 integration
- WCM support for relative rendering of DAM assets
- New property introduced in the portal Configuration Service
- Old parameters removed from DXClient Artifact Types
- Using a custom TinyMCE editor toolbar in the HCL Web Content Manager authoring portlet
- Using a custom TinyMCE editor toolbar with inline editing
- Unica PZN Picker
- WCM Page and Menu sorting improvements
- Maven portlet and page creation sample on github
- PZN UI Augmentation
- Allow setting secret names for credentials/Harden security, move credentials to Kube secrets
- Helm chart adjustment for default scaling
