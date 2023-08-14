# Installing and Deploying DX Picker

This document contains instructions on how to install and deploy DX Picker.

## Packaging, installing, and deploying design

DX Picker is an instance of a react integration portlet configured to point to where the static files of the app can be loaded from. It can be enabled and disabled by using Config Engine tasks. The enable task would deploy, configure the portlet, then deploy the page. You can also enable dxPicker in the `values.yaml` file. For more information, see [Prepare Configuration](../../../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configuration.md#the-default-hcl-dx-95-container-valuesyaml-file).

## Enabling and disabling DX Picker

This section describes how to enable and disable DX Picker.

!!! important
    Before enabling DX Picker, it is required to have Digital Asset Management (DAM) installed and enabled. For more information on DAM, refer to [Digital Asset Management](../../digital_assets/index.md).

### Enabling DX Picker for traditional deployment

To enable DX Picker for traditional deployment, run the **enable-dx-picker** config task. It is not required to stop or restart the Portal when running these configuration tasks.

-   AIX, Linux: `./ConfigEngine.sh enable-dx-picker -Ddxpicker.static.ui.url="/dx/ui/picker/static" -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
-   Windows: `ConfigEngine.bat enable-dx-picker -Ddxpicker.static.ui.url="/dx/ui/picker/static" -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`

### Enabling DX Picker - Helm processes for DX deployments on Kuberenetes

In the `values.yaml` file, under configuration, enable DX Picker by setting the `enabled` flag to `true`:

```
# DX Picker configuration
dxPicker:
  # Enable or disable DX Picker
  enabled: true
```

!!! note
    Enabling DX Picker runs the **enable-dx-picker** config engine task in the background. The **enable-dx-picker** config engine task can also be manually executed. See [Enabling DX Picker for traditional deployment](#enabling-dx-picker-for-traditional-deployment) for more information. For steps on how to run manual Core configuration tasks, see [Running DX Core configuration tasks](../../../../deployment/manage/container_configuration/run_core_config_engine.md).

### Disabling DX Picker for traditional deployment

To disable DX Picker for traditional deployment, run the **disable-dx-picker** config task.

-   AIX, Linux: `./ConfigEngine.sh disable-dx-picker -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
-   Windows: `ConfigEngine.bat disable-dx-picker -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`

### Disabling DX Picker - Helm processes for DX deployments on Kubernetes

In the `values.yaml` file, under the configuration, disable DX Picker by setting the `enabled` flag to `false`:

```
# DX Picker configuration
dxPicker:
  # Enable or disable DX Picker
  enabled: false
```

!!! note
    Disabling DX Picker runs the **disable-dx-picker** config engine task in the background. The **disable-dx-picker** config engine task can also be manually executed. See [Disabling DX Picker for traditional deployment](#disabling-dx-picker-for-traditional-deployment) for more information. For steps on how to run manual Core configuration tasks, see [Running DX Core configuration tasks](../../../../deployment/manage/container_configuration/run_core_config_engine.md).
