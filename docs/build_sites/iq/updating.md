# Updating IQ

This section explains how to update IQ and its integration with an HCL Digital Experience (DX) container deployment using Helm.

!!! important
    IQ is deployed with the separate `hcl-dx-iq` Helm chart. The DX integration is configured with the `hcl-dx-deployment` Helm chart. Update the IQ chart and the DX chart independently.

!!! note
    IQ and DX do not need to be on the same version. The supported version difference is up to two releases in either direction, and versions more than two releases apart are not supported.

## Before you begin

- Obtain the `hcl-dx-iq` Helm chart for the IQ version you want to upgrade to. The chart provides the corresponding IQ images.
- Confirm that the IQ and DX versions are no more than two releases apart.
- Back up IQ data and the database associated with the Core deployment before applying an update. For more information, see [Backing up and restoring data](installation/backup-restore.md).

!!! note
    Keep all existing deployment settings in your custom values file. An upgrade applies the values supplied with the command and can overwrite settings that are omitted or changed.

## Get the Helm chart

For the official source and version information for the IQ Helm chart, see [Installing IQ](installation/index.md) and [Downloading and deploying HCL products from a Harbor Repository](../../get_started/download/harbor_container_registry.md).

## Recover missing values files

If the original values files were not received or are no longer available, retrieve the current values stored in the IQ Helm release before upgrading:

```bash
helm get values dx-iq --namespace <YOUR_NAMESPACE> --all > current-iq-values.yaml
```

Review and update this file rather than starting with an empty values file. Preserve environment-specific settings, credentials references, networking, database, image, and storage values. Redact secrets before sharing the file.

## Update the IQ chart

1. Update `custom-iq-values.yaml` with the supported IQ chart configuration. Do not change IQ image tags; the selected chart supplies the compatible images.
2. Upgrade the separate IQ release:

    ```bash
    helm upgrade dx-iq \
      <IQ_CHART_URL_OR_PATH> \
      --namespace <YOUR_NAMESPACE> \
      --reuse-values \
      --values custom-iq-values.yaml
    ```

    In this command:

    - `<IQ_CHART_URL_OR_PATH>` is the location of the IQ Helm chart package.

    Use `--reuse-values` only when the command also includes the complete set of intended changes. If `custom-iq-values.yaml` was recreated from `helm get values --all`, it can be used as the complete values file without `--reuse-values`.

3. Verify both IQ services:

    ```bash
    helm status dx-iq --namespace <YOUR_NAMESPACE>
    kubectl rollout status deployment/dx-iq-integrator --namespace <YOUR_NAMESPACE>
    kubectl rollout status deployment/dx-mcp-server --namespace <YOUR_NAMESPACE>
    ```

## Verify the IQ deployment

After the upgrade, confirm that the IQ services are healthy and responding:

```bash
helm status dx-iq --namespace <YOUR_NAMESPACE>
kubectl rollout status deployment/dx-iq-integrator --namespace <YOUR_NAMESPACE>
kubectl rollout status deployment/dx-mcp-server --namespace <YOUR_NAMESPACE>
```

Confirm that IQ opens, connects to the backend, and returns a response.

## Related information

- [Installing IQ](installation/index.md)
- [Enabling IQ](enable.md)
- [Upgrading Helm Deployment](../../deployment/install/container/helm_deployment/update_helm_deployment.md)
- [Core container version-to-version upgrade](../../deployment/manage/container_configuration/core_interactions_kubernetes.md)
- [Troubleshooting IQ](./troubleshooting.md)
