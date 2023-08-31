# Installing and Deploying DX Picker

This document contains instructions on how to install and deploy DX Picker.

## Packaging, installing, and deploying design

DX Picker is an instance of a react integration portlet configured to point to where the static files of the app can be loaded from. It can be enabled and disabled by using Config Engine tasks. The enable task would deploy, configure the portlet, then deploy the page. You can also enable dxPicker in the `values.yaml` file. For more information, see [Prepare Configuration](../../../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configuration.md#the-default-hcl-dx-95-container-valuesyaml-file).

## Enabling and disabling DX Picker

This section describes how to enable and disable DX Picker.

!!! important
    Before enabling DX Picker, it is required to have Digital Asset Management (DAM) installed and enabled. For more information on DAM, refer to [Digital Asset Management](../../../digital_assets/index.md).

### Hybrid Deployment

In a Hybrid Deployment, you need to run the config engine commands in order to enable and disable the DX Picker.

To enable DX Picker for hybrid deployment, run the **enable-dx-picker** command. 

-   AIX, Linux: `./ConfigEngine.sh enable-dx-picker -Ddxpicker.static.ui.url="/dx/ui/picker/static" -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
-   Windows: `ConfigEngine.bat enable-dx-picker -Ddxpicker.static.ui.url="/dx/ui/picker/static" -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`

To disable DX Picker for traditional deployment, run the **disable-dx-picker** command.

-   AIX, Linux: `./ConfigEngine.sh disable-dx-picker -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`
-   Windows: `ConfigEngine.bat disable-dx-picker -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>`

!!! note
    It is not required to stop or restart the Portal when running these configuration tasks.

### Kubernetes Deployment

In a Kubernetes Deployment, you can enable or disable the DX Picker by modifying the DX Picker Helm value which can be found under the `applications` property.

```yaml
applications:
    dxPicker: true
```

