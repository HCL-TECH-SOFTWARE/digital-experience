# Installing and Deploying IQ

This section provides instructions for installing and deploying the IQ AI assistant in your HCL Digital Experience (DX) environment.

!!! note
    IQ is available starting from HCL Digital Experience (DX) CF236 and is deployed as a container-based service. You can enable or disable it using ConfigEngine tasks or Helm configuration.

## Packaging, installing, and deploying design

IQ is an AI-powered assistant integrated into the DX toolbar. It is delivered as a containerized microservice (`dx-iq-integrator`) that serves both the backend API and the UI assets. You can enable or disable it using ConfigEngine tasks for container-based deployments. The enable task deploys and configures the IQ integration, creates the necessary proxy configuration, and activates the IQ interface in the toolbar.

For container-based Helm deployment, you can configure the `values.yaml` file to enable IQ by default.

!!! important
    Before you can enable IQ, you need to have the IQ backend service (`dx-iq-integrator`) deployed and accessible in your environment. Contact your HCL DX deployment team or HCL Support for environment-specific guidance on deploying the IQ backend service.

## Enabling and disabling IQ

This section describes how to enable and disable IQ manually.

The `enable-iq` config task is not automatically executed. You can enable and disable IQ by running `enable-iq` and `disable-iq` respectively.

!!! important
    Before manually enabling IQ, you need to enable Practitioner Studio. For more information on how to enable Practitioner Studio, refer to [How to enable Practitioner Studio](https://help.hcl-software.com/digital-experience/9.5/CF234/build_sites/practitioner_studio/working_with_ps/enable_prac_studio/).

For more information on how to do container-based Helm deployments, refer to [Deploying using Helm](https://help.hcl-software.com/digital-experience/9.5/CF234/deployment/install/container/helm_deployment/overview/).

For more information on how to run ConfigEngine tasks on container deployments, refer to [Running DX Core configuration tasks](https://help.hcl-software.com/digital-experience/9.5/CF234/deployment/manage/container_configuration/run_core_config_engine/).

### Enabling IQ using a ConfigEngine task

To enable IQ manually, run the `enable-iq` config task. You do not need to stop or restart the Portal when running these tasks.

- **AIX**:
    ```
    ./ConfigEngine.sh enable-iq -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password> -Diq.backend.url=http://{iq.backend.url}dx/ui/iq
    ```

- **Linux**:
    ```
    ./ConfigEngine.sh enable-iq -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password> -Diq.backend.url=http://{iq.backend.url}dx/ui/iq
    ```

- **Windows**:
    ```
    ConfigEngine.bat enable-iq -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password> -Diq.backend.url=http://{iq.backend.url}dx/ui/iq
    ```

!!! important
    The `{iq.backend.url}` placeholder needs to be replaced with the exact IQ backend service name in your deployment. For example: `http://dx-iq-integrator:3000`.

### Enabling IQ through Helm deployment

Apply the following changes to your installation `values.yaml` to enable IQ.

```yaml
# Application configuration
configuration:
  # Application specific configuration for Core
  core:
    # Settings for IQ configuration
    iq:
      # Determines if IQ is enabled or not
      enabled: true
```

### Disabling IQ using a ConfigEngine task

To disable IQ manually, run the `disable-iq` config task.

- **AIX**:
    ```
    ./ConfigEngine.sh disable-iq -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>
    ```

- **Linux**:
    ```
    ./ConfigEngine.sh disable-iq -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>
    ```

- **Windows**:
    ```
    ConfigEngine.bat disable-iq -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>
    ```

After disabling IQ using the `disable-iq` config task, the IQ interface elements (sparkle icon and floating action button) are removed from the toolbar. To re-enable IQ, execute the `enable-iq` config task again.

### Disabling IQ through Helm deployment

Apply the following changes to your installation `values.yaml` to disable IQ.

```yaml
# Application configuration
configuration:
  # Application specific configuration for Core
  core:
    # Settings for IQ configuration
    iq:
      # Determines if IQ is enabled or not
      enabled: false
```

---

## Next Steps

After successfully installing IQ:

- **[Accessing IQ](./access.md)** — Learn how IQ appears in the DX interface
- **[Using IQ](./usage.md)** — Explore IQ features and capabilities
- **[Troubleshooting](./troubleshooting.md)** — Resolve common issues
