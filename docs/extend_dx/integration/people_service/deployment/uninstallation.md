# Uninstallation

People Service is bundled as a dependency in the HCL Digital Experience (DX) Helm chart. To uninstall People Service, set the `peopleservice.enabled` property to `false` in the Helm chart `values.yaml`.

```yaml
peopleservice:
  # If enabled deploys people-service
  enabled: false
```

## Upgrade command

To run the upgrade command for uninstalling People Service using Helm, refer to [Helm Upgrade configuration command](../../../../deployment/install/container/helm_deployment/helm_uninstall/#uninstall-command).
