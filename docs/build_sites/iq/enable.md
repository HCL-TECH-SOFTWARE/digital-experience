# Enabling IQ

This section provides instructions for enabling and configuring the IQ assistant integration within your HCL DX environment.

## Overview

IQ is an AI-powered assistant integrated into DX. It is delivered as a containerized microservice (`dx-iq-integrator`) that serves both the backend API and the UI assets. The IQ deployment also includes the DX Model Context Protocol (MCP) Server (`dx-mcp-server`), which provides the MCP bridge used by IQ to communicate with supported DX services, such as DAM and WCM.

Depending on your environment, enable or disable IQ using one of the following methods:

- **ConfigEngine tasks:** For traditional deployments and container-based Core deployments.
- **Helm configuration:** For Kubernetes and Helm-based deployments.

## Prerequisites

Before installing IQ, verify that your environment meets the following requirements:

**For all deployments**

1. Deploy the IQ backend service (`dx-iq-integrator`) and ensure it is accessible in your environment. For more information, refer to [Installing IQ](./installation/index.md)
2. Enable Practitioner Studio. For more information, refer to [Enabling Practitioner Studio](../practitioner_studio/working_with_ps/enable_prac_studio.md).

**For Kubernetes and Helm-based deployments**

1. Deploy the `hcl-dx-iq` Helm chart in your Kubernetes cluster. This separate Helm chart and deploys both the IQ Integrator service (`dx-iq-integrator`) and the MCP Server (`dx-mcp-server`) to handle communication with the AI or LLM provider. For more information, refer to [Installing IQ backend services](./installation/index.md).
2. Ensure you have access to modify your DX Helm chart `values.yaml` file.

## Enabling IQ

Enable the IQ assistant using either ConfigEngine tasks or Helm configuration, depending on your DX deployment type.

=== "Using ConfigEngine"

    To enable IQ manually, run the `enable-iq` configuration task. 

    1. Run the following command for your operating system:

        - **AIX and Linux:**

        ```bash
        ./ConfigEngine.sh enable-iq -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password> -Diq=true -Diq.uri=http://{iq.backend.url}/dx/ui/iq
        ```

        - **Windows:**

        ```bash
        ConfigEngine.bat enable-iq -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password> -Diq=true -Diq.uri=http://{iq.backend.url}/dx/ui/iq
        ```

        Replace `{iq.backend.url}` with the exact IQ backend service hostname and port in your deployment. For example: `http://dx-iq-integrator:3000`.

    2. If IQ does not appear in the portal toolbar, restart the DX portal server.

        - **AIX and Linux:**

        ```bash
        ./ConfigEngine.sh stop-portal-server -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>
        ```

        - **Windows:**

        ```bash
        ConfigEngine.bat start-portal-server -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>
        ```


    For more information on container-based deployments, refer to [Deploying using Helm](../../deployment/install/container/helm_deployment/overview.md) and [Running DX Core configuration tasks](../../deployment/manage/container_configuration/run_core_config_engine.md).

=== "Using Helm"

    To deploy IQ using Helm, deployed using a dedicated Helm chart (`hcl-dx-iq`), separate from the main DX Helm chart (`hcl-dx-deployment`). The IQ backend services run independently as Kubernetes microservices and integrate with DX through service networking and HAProxy routing.

    1. Determine the Kubernetes service name for your IQ integrator deployment. The name typically follows the `{{ .Release.Name }}-integrator` format. For example, if the release name is `dx-iq`, the service name is `dx-iq-integrator`.

    2. Add or modify the `networking.dxIqService` parameter in your custom `values.yaml`:

        ```yaml
        networking:
        # Set the IQ integrator service name to enable IQ
        dxIqService: "dx-iq-integrator"
        ```

    3. Apply the Helm chart update by running a [Helm upgrade](../../deployment/install/container/helm_deployment/overview.md):

        ```bash
        helm upgrade <release-name> <chart-name> -f values.yaml
        ```

    After the update is applied, HAProxy automatically routes the `/dx/api/iq/v1/` and `/dx/ui/iq/` endpoints to the IQ service, and the assistant interface elements become available on the DX toolbar. The MCP Server remains part of the IQ deployment and continues to provide the protocol layer used by the assistant. For endpoint-level MCP details regarding internal cluster routing paths, versioned entry points, and operational probes, refer to [Managing endpoints and security](installation/configuring-mcp.md#managing-endpoints-and-security).

    !!! important
        - Use only the service name, not a full URL (for example, `dx-iq-integrator`, not `http://dx-iq-integrator:3000`).
        - Use the fully qualified service name if the service resides in a different Kubernetes namespace than the DX deployment (for example, `dx-iq-integrator.namespace.svc.cluster.local`).

## Disabling IQ

Disable the IQ assistant using either ConfigEngine tasks or Helm configuration, depending on your DX deployment type.

=== "Using ConfigEngine"
    To disable IQ manually, run the `disable-iq` configuration task.

    1. Run the following command for your operating system:

        - **AIX and Linux:**

            ```bash
            ./ConfigEngine.sh disable-iq -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>
            ```

        - **Windows:**

            ```bash
            ConfigEngine.bat disable-iq -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>
            ```

    2. If IQ still appears in the portal toolbar, restart the DX portal server.

        - **AIX and Linux:**

        ```bash
        ./ConfigEngine.sh stop-portal-server -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>
        ```

        - **Windows:**

        ```bash
        ConfigEngine.bat start-portal-server -DWasPassword=<WAS admin password> -DPortalAdminPwd=<Portal admin password>
        ```

    After the task completes, the IQ interface elements are removed from the toolbar.

=== "Using Helm"
    To disable IQ integration in Helm-based deployments, remove the IQ service reference from the DX Helm chart configuration. This stops HAProxy from routing traffic to the IQ backend services while leaving the underlying `hcl-dx-iq` chart deployment intact.

    1. Set the `networking.dxIqService` parameter to an empty string in your custom `values.yaml` file:

        ```yaml
        networking:
        # Set to empty string to disable IQ
        dxIqService: ""
        ```

    2. Apply the updated configuration by running a [Helm upgrade](../../deployment/install/container/helm_deployment/overview.md):

        ```bash
        helm upgrade <release-name> <chart-name> -f values.yaml
        ```

    After the update is applied, HAProxy stops routing the `/dx/api/iq/v1/` and `/dx/ui/iq/` endpoints to the IQ service, and the interface elements are removed from the DX toolbar.

    !!! important
        Disabling IQ in the DX Helm chart (`hcl-dx-deployment`) only removes the integration between DX and IQ. It does not uninstall or stop the IQ backend services deployed with the `hcl-dx-iq` Helm chart. To completely remove IQ from your cluster, separately uninstall the `hcl-dx-iq` Helm chart release using the `helm uninstall <iq-release-name>` command.

???+ info "Related information"
    [Troubleshooting - User interface](troubleshooting.md#user-interface)
