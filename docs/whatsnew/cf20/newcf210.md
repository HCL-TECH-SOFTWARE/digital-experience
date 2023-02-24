# What's new in CF210

The following features and updates are available to customers installing HCL Digital Experience Container Update and CF210 on supported platforms:

- Updated minimal system requirements for Kubernetes deployments [in our documentation](../../../get_started/plan_deployment/container_deployment/limitations_requirements/)
- Reduced default CPU and memory resource settings in the helm charts' `values.yaml` to match HCL DX's minimal system requirements.
  If you have not overwritten the resource configuration in your `custom-values.yaml`, please double check on the updated settings to ensure they still fit your purpose. As mentioned above, resource limits have been reduced and might not fit your scenarios any more. Ensure proper performance testing before rolling this change out.
  Feel free to update your `custom-values.yaml` with resource settings that fit your needs. You may also want to check the default resource settings in previous releases.
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
