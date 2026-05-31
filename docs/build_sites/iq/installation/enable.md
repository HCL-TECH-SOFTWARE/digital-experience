# Enabling IQ

This section provides instructions for enabling and configuring the IQ assistant integration within your HCL DX environment.

## Overview

IQ is an AI-powered assistant integrated into DX and delivered as a containerized microservice (`dx-iq-integrator`) that serves both the backend Websocket API and the UI assets.

Depending on your environment, enable or disable IQ using one of the following methods:

- **ConfigEngine tasks:**  For traditional deployments and container-based Core deployments.
- **Helm configuration:**  For Kubernetes and Helm-based deployments.

## Prerequisites

Before installing IQ, verify that your environment meets the following requirements:

**For all deployments**

1. Deploy the IQ backend service (`dx-iq-integrator`) and ensure it is accessible in your environment. For more information, refer to [Installing IQ backend services](../installation/backend/index.md)
2. Enable Practitioner Studio. For more information, refer to [How to enable Practitioner Studio](../../practitioner_studio/working_with_ps/enable_prac_studio.md).

**For Kubernetes and Helm-based deployments**

1. Deploy the `hcl-dx-iq` Helm chart in your Kubernetes cluster. This separate Helm chart and deploys both the IQ integrator service (`dx-iq-integrator`) and the MCP server (`dx-mcp-server`) to handle communication with the AI or LLM provider. Contact your HCL DX deployment team or [HCL Support](https://support.hcl-software.com/csm){target="_blank"} for assistance with obtaining and deploying the IQ Helm chart. <!--Link to the backend services section?-->
2. Ensure you have access to modify your DX Helm chart `values.yaml` file.

## Enabling IQ

Enable the IQ assistant using either ConfigEngine tasks or Helm configuration, depending on your DX deployment type.

### Enable using ConfigEngine

To enable IQ manually, run the `enable-iq` configuration task. This task does not require a server restart.

**AIX and Linux:**

```bash
./ConfigEngine.sh enable-iq -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password> -Diq.backend.url=http://{iq.backend.url}/dx/ui/iq
```

**Windows:**

```bash
ConfigEngine.bat enable-iq -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password> -Diq.backend.url=http://{iq.backend.url}/dx/ui/iq
```

!!! important
    Replace `{iq.backend.url}` with the exact IQ backend service hostname and port in your deployment. For example: `http://dx-iq-integrator:3000`.

For more information on container-based deployments, refer to [Deploying using Helm](../../../deployment/install/container/helm_deployment/overview.md) and [Running DX Core configuration tasks](../../../deployment/manage/container_configuration/run_core_config_engine.md).

### Enable using Helm

IQ is deployed using a dedicated Helm chart (`hcl-dx-iq`), separate from the main DX Helm chart (`hcl-dx-deployment`). The IQ backend services run independently as Kubernetes microservices and integrate with DX through service networking and HAProxy routing.

1. Determine the Kubernetes service name for your IQ integrator deployment. The name typically follows the `{{ .Release.Name }}-integrator` format. For example, if the release name is `dx-iq`, the service name is `dx-iq-integrator`.

2. Add or modify the `networking.dxIqService` parameter in your custom `values.yaml`:

    ```yaml
    networking:
      # Set the IQ integrator service name to enable IQ
      dxIqService: "dx-iq-integrator"
    ```

3. Apply the Helm chart update by running a [Helm upgrade](../../../deployment/install/container/helm_deployment/overview.md):

    ```bash
    helm upgrade <release-name> <chart-name> -f values.yaml
    ```

After the update is applied, HAProxy automatically routes the `/dx/api/iq/v1/` and `/dx/ui/iq/` endpoints to the IQ service, and the assistant interface elements become available on the DX toolbar.

!!! important
    - Use only the service name, not a full URL (for example, `dx-iq-integrator`, not `http://dx-iq-integrator:3000`).
    - Use the fully qualified service name if the service resides in a different Kubernetes namespace than the DX deployment (for example, `dx-iq-integrator.namespace.svc.cluster.local`).

## Disabling IQ

Disable the IQ assistant using either ConfigEngine tasks or Helm configuration, depending on your DX deployment type.

### Disable using ConfigEngine

To disable IQ manually, run the `disable-iq` configuration task.

**AIX and Linux:**

```bash
./ConfigEngine.sh disable-iq -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>
```

**Windows:**

```bash
ConfigEngine.bat disable-iq -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>
```

After the task completes, the IQ interface elements are removed from the toolbar. To re-enable the assistant, run the [`enable-iq` configuration task](#enable-using-configengine) again.

### Disable using Helm

Disable IQ integration in Helm-based deployments by removing the IQ service reference from the DX Helm chart configuration. This stops HAProxy from routing traffic to the IQ backend services while leaving the underlying `hcl-dx-iq` chart deployment intact.

1. Set the `networking.dxIqService` parameter to an empty string in your custom `values.yaml` file:

    ```yaml
    networking:
      # Set to empty string to disable IQ
      dxIqService: ""
    ```

2. Deploy the updated configuration by running a [Helm upgrade](../../../deployment/install/container/helm_deployment/overview.md):

    ```bash
    helm upgrade <release-name> <chart-name> -f values.yaml
    ```

After the update is applied, HAProxy stops routing the `/dx/api/iq/v1/` and `/dx/ui/iq/` endpoints to the IQ service, and the interface elements are removed from the DX toolbar.

!!! important
    Disabling IQ in the DX Helm chart (`hcl-dx-deployment`) only removes the integration between DX and IQ. It does not uninstall or stop the IQ backend services deployed with the `hcl-dx-iq` Helm chart. To completely remove IQ from your cluster, separately uninstall the `hcl-dx-iq` Helm chart release using the `helm uninstall <iq-release-name>` command.
