# Updating IQ

This section explains how to update IQ and its integration with an HCL Digital Experience (DX) container deployment using Helm.

!!! important
    - IQ is deployed with the separate `hcl-dx-iq` Helm chart. The DX integration is configured with the `hcl-dx-deployment` Helm chart. Update the IQ chart and the DX chart independently.
    - IQ and DX do not need to be on the same version. The supported version difference is up to two releases in either direction, and versions more than two releases apart are not supported.

## Prerequisites

- Obtain the `hcl-dx-iq` Helm chart for the IQ version you want to upgrade to. The chart provides the corresponding IQ images. For more information on the Helm chart and IQ version, refer to [Installing IQ](installation/index.md) and [Downloading and deploying HCL products from a Harbor Repository](../../get_started/download/harbor_container_registry.md){target="_blank"}.
- Confirm that the IQ and DX versions are no more than two releases apart:

    1. List the Helm releases in the namespace:

        ```bash
        helm list --namespace <YOUR_NAMESPACE>
        ```

        `<YOUR_NAMESPACE>`: The Kubernetes namespace.

    2. Use the [Helm chart and CF versions](../../get_started/download/harbor_container_registry.md#helm-chart-and-cf-versions) table to identify the CF version associated with each chart version.

    3. Confirm that the target IQ chart is available in your repository. For instructions, refer to [Deploying the IQ backend components](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional_deploy_iq_services.md#locating-the-latest-helm-chart-and-images).

- Back up IQ data and the database associated with the Core deployment before applying an update. For more information, refer to [Backing up and restoring data](installation/backup-restore.md).

!!! note
    Keep all existing deployment settings in your `custom-iq-values.yaml` file. An upgrade applies the values supplied with the command and can overwrite settings that are omitted or changed.

## Recovering missing values files

If the original values files were not received or are no longer available, retrieve the current values stored in the IQ Helm release before upgrading:

```bash
helm get values dx-iq --namespace <YOUR_NAMESPACE> --all > current-iq-values.yaml
```

`<YOUR_NAMESPACE>`: The Kubernetes namespace.

- Review and update this file rather than starting with an empty values file.
- Preserve environment-specific settings, credentials references, networking, database, image, and storage values.
- Redact secrets before sharing the file.

## Updating the IQ chart

1. Update your `custom-iq-values.yaml` file with the supported IQ chart configuration.

    !!!note
        Do not change IQ image tags. The selected chart supplies the compatible images.

2. Upgrade the separate IQ release:

    ```bash
    helm upgrade dx-iq \
      <IQ_CHART_URL_OR_PATH> \
      --namespace <YOUR_NAMESPACE> \
      --reuse-values \
      --values custom-iq-values.yaml
    ```

    - `<YOUR_NAMESPACE>`: The Kubernetes namespace.
    - `<IQ_CHART_URL_OR_PATH>`: The location of the IQ Helm chart package.

    !!!note
        Use `--reuse-values` only when the command also includes the complete set of intended changes. If `custom-iq-values.yaml` is recreated from `helm get values --all`, you can use it as the complete values file without `--reuse-values`.

3. Verify both IQ services:

    ```bash
    helm status dx-iq --namespace <YOUR_NAMESPACE>
    kubectl rollout status deployment/dx-iq-integrator --namespace <YOUR_NAMESPACE>
    kubectl rollout status deployment/dx-mcp-server --namespace <YOUR_NAMESPACE>
    ```

## Verifying the IQ deployment

1. After the upgrade, confirm that the IQ services are healthy and responding:

    ```bash
    helm status dx-iq --namespace <YOUR_NAMESPACE>
    kubectl rollout status deployment/dx-iq-integrator --namespace <YOUR_NAMESPACE>
    kubectl rollout status deployment/dx-mcp-server --namespace <YOUR_NAMESPACE>
    ```

    `<YOUR_NAMESPACE>`: The Kubernetes namespace.

2. Confirm that IQ opens, connects to the backend, and returns a response.

???+ info "Related information"
    - [Installing IQ](installation/index.md)
    - [Enabling IQ](enable.md)
    - [Upgrading Helm Deployment](../../deployment/install/container/helm_deployment/update_helm_deployment.md)
    - [Core container version-to-version upgrade](../../deployment/manage/container_configuration/core_interactions_kubernetes.md)
    - [Troubleshooting IQ](./troubleshooting.md)
