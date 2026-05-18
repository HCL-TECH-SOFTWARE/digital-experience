# Installing and Deploying IQ

This section provides instructions for installing and deploying the IQ AI assistant in your HCL Digital Experience (DX) environment.

!!! note
    IQ is available starting from HCL Digital Experience (DX) CF236 and is deployed as a container-based service. You can enable or disable it using ConfigEngine tasks or Helm configuration.

## Overview

IQ is an AI-powered assistant integrated into the DX toolbar. It is delivered as a containerized microservice (`dx-iq-integrator`) that serves both the backend API and the UI assets.

For container-based deployments, you can enable or disable IQ using:

- **ConfigEngine tasks** - For traditional deployments and container-based Core deployments
- **Helm configuration** - For Kubernetes/Helm-based deployments

!!! important
    Before you can enable IQ, the IQ backend service (`dx-iq-integrator`) must be deployed and accessible in your environment. Contact your HCL DX deployment team or HCL Support for environment-specific guidance on deploying the IQ backend service.

---

## Enabling IQ

This section describes how to enable IQ in your DX environment.

!!! important
    Before manually enabling IQ, you need to enable Practitioner Studio. For more information, refer to [How to enable Practitioner Studio](https://help.hcl-software.com/digital-experience/9.5/CF234/build_sites/practitioner_studio/working_with_ps/enable_prac_studio/).

For additional information on container-based deployments, refer to:

- [Deploying using Helm](https://help.hcl-software.com/digital-experience/9.5/CF234/deployment/install/container/helm_deployment/overview/)
- [Running DX Core configuration tasks](https://help.hcl-software.com/digital-experience/9.5/CF234/deployment/manage/container_configuration/run_core_config_engine/)

### Using ConfigEngine task

To enable IQ manually, run the `enable-iq` config task. You do not need to stop or restart the Portal when running this task.

**AIX / Linux:**

```bash
./ConfigEngine.sh enable-iq -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password> -Diq.backend.url=http://{iq.backend.url}/dx/ui/iq
```

**Windows:**

```bash
ConfigEngine.bat enable-iq -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password> -Diq.backend.url=http://{iq.backend.url}/dx/ui/iq
```

!!! important
    Replace `{iq.backend.url}` with the exact IQ backend service hostname and port in your deployment. For example: `http://dx-iq-integrator:3000`

### Using Helm deployment

To enable IQ in a Helm-based DX deployment, update your custom `values.yaml` file with the IQ service configuration.

#### Prerequisites

Before enabling IQ, ensure the following:

- The IQ backend service must be deployed in your Kubernetes cluster
- The IQ service must be accessible from your DX Core or WebEngine pods
- You have access to modify your DX Helm chart `values.yaml` file

!!! note
    HCL provides a separate Helm chart (`hcl-dx-iq`) for deploying the IQ backend services. Contact your HCL DX deployment team or HCL Support for assistance with deploying the IQ backend chart.

#### Steps to enable IQ

1.  **Identify your IQ service name**

    Determine the Kubernetes service name for your IQ integrator deployment. This is typically `dx-iq-integrator` if deployed using the `hcl-dx-iq` Helm chart.

2.  **Update your values.yaml file**

    Add or modify the `networking.dxIqService` parameter in your custom `values.yaml`:

    ```yaml
    networking:
      # Set the IQ integrator service name to enable IQ
      dxIqService: "dx-iq-integrator"
    ```

3.  **Apply the Helm chart update**

    Deploy the updated configuration:

    ```bash
    helm upgrade <release-name> <chart-name> -f values.yaml
    ```

#### What happens when you enable IQ

- HAProxy automatically routes `/dx/api/iq/v1/` and `/dx/ui/iq/` requests to the IQ service
- IQ features are automatically enabled in DX Core or WebEngine
- The IQ interface (sparkle icon or FAB) becomes available in the DX toolbar

!!! important
    - Use the **service name only**, not a full URL (e.g., `dx-iq-integrator`, not `http://dx-iq-integrator:3000`)
    - The service must be in the same Kubernetes namespace as your DX deployment, or use the fully qualified service name (e.g., `dx-iq-integrator.namespace.svc.cluster.local`)

---

## Disabling IQ

This section describes how to disable IQ in your DX environment.

### Using ConfigEngine task

To disable IQ manually, run the `disable-iq` config task.

**AIX / Linux:**

```bash
./ConfigEngine.sh disable-iq -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>
```

**Windows:**

```bash
ConfigEngine.bat disable-iq -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>
```

After disabling IQ using the `disable-iq` config task, the IQ interface elements (sparkle icon and floating action button) are removed from the toolbar. To re-enable IQ, execute the `enable-iq` config task again.

### Using Helm deployment

To disable IQ in a Helm-based DX deployment, update your custom `values.yaml` file to remove the IQ service configuration.

#### Steps to disable IQ

1.  **Update your values.yaml file**

    Set the `networking.dxIqService` parameter to an empty string in your custom `values.yaml`:

    ```yaml
    networking:
      # Set to empty string to disable IQ
      dxIqService: ""
    ```

2.  **Apply the Helm chart update**

    Deploy the updated configuration:

    ```bash
    helm upgrade <release-name> <chart-name> -f values.yaml
    ```

#### What happens when you disable IQ

- HAProxy stops routing IQ-related requests
- IQ features are automatically disabled in DX Core or WebEngine
- The IQ interface (sparkle icon or FAB) is removed from the DX toolbar

!!! note
    Disabling IQ in the DX Helm chart does not uninstall the IQ backend services (`dx-iq-integrator` and `dx-mcp-server`). If you want to completely remove IQ, you also need to uninstall the `hcl-dx-iq` Helm chart separately.

---

## Next Steps

After successfully installing IQ:

- **[Accessing IQ](./access.md)** — Learn how IQ appears in the DX interface
- **[Using IQ](./usage.md)** — Explore IQ features and capabilities
- **[Troubleshooting](./troubleshooting.md)** — Resolve common issues
