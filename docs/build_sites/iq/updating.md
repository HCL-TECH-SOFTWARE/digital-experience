# Updating IQ

This section explains how to update IQ and its integration with an HCL Digital Experience (DX) container deployment using Helm.

!!! important
    IQ is deployed with the separate `hcl-dx-iq` Helm chart. The DX integration is configured with the `hcl-dx-deployment` Helm chart. Update the IQ chart and the DX chart independently.

!!! note
    IQ and DX do not have to be the same version. The supported version difference is limited to two releases in either direction: IQ can be up to two releases higher than DX, or DX can be up to two releases higher than IQ. A difference greater than two releases is not supported.

## Before you begin

- Obtain the `hcl-dx-iq` Helm chart for the IQ version you want to install. The chart supplies the corresponding IQ images.
- Obtain the DX deployment chart version for the DX version you want to install.
- Confirm the IQ and DX Helm release names and namespaces.
- Confirm that the IQ and DX versions are no more than two releases apart.
- Back up IQ data and the database associated with the Core deployment before applying an update. For more information, see [Backing up and restoring data](installation/backup-restore.md).

!!! note
    Keep all existing deployment settings in your custom values file. An upgrade applies the values supplied with the command and can overwrite settings that are omitted or changed.

## Get the Helm charts

The DX deployment chart is available from the [HCL Harbor container repository](../../get_started/download/harbor_container_registry.md). The Harbor version table also identifies the IQ version associated with each CF release. The IQ chart and its images are obtained from the repository provided with the IQ release.

1. Identify the target DX CF, DX deployment chart version, and IQ version in [Helm chart and CF versions](../../get_started/download/harbor_container_registry.md#helm-chart-and-cf-versions).
2. Log in to the DX Helm registry:

    ```bash
    helm registry login -u <YOUR_HARBOR_USERNAME> -p <YOUR_HARBOR_CLI_SECRET> hclcr.io
    ```

3. Pull the DX deployment chart:

    ```bash
    helm pull oci://hclcr.io/dx/hcl-dx-deployment --version <DX_HELM_CHART_VERSION>
    ```

4. Obtain the `hcl-dx-iq` chart from the IQ release repository. Use the repository path and chart version provided for your IQ release, for example:

    ```bash
    helm pull <IQ_CHART_LOCATION> --version <IQ_HELM_CHART_VERSION>
    ```

    The selected chart supplies the compatible `dx-iq-integrator` and `dx-mcp-server` images. Do not select or override IQ image tags separately.

!!! note
    The DX chart version and IQ chart version are independent. The versions may differ by up to two releases in either direction, but a difference greater than two releases is not supported. Do not use the DX chart version as the IQ chart version unless the IQ release documentation explicitly defines them as the same.

## Find the IQ release name and namespace

The `IQ_RELEASE_NAME` is the Helm release name used when the `hcl-dx-iq` chart was installed. The `IQ_NAMESPACE` is the Kubernetes namespace containing that release.

To list Helm releases in all namespaces, run:

```bash
helm list --all-namespaces
```

Find the IQ release in the output. The values in the `NAME` and `NAMESPACE` columns are the values to use for `IQ_RELEASE_NAME` and `IQ_NAMESPACE`. For example, if the output shows `dx-iq` in namespace `dxns`, use:

```text
IQ_RELEASE_NAME=dx-iq
IQ_NAMESPACE=dxns
```

You can also list releases in a known namespace:

```bash
helm list --namespace <NAMESPACE>
```

The IQ release usually contains `iq` in its name, but use the actual `NAME` shown by Helm. Do not assume that the release name is always `dx-iq`.

## Recover missing values files

If the original values files were not received or are no longer available, retrieve the values stored in each Helm release before upgrading:

```bash
helm get values <DX_RELEASE_NAME> --namespace <DX_NAMESPACE> --all > current-dx-values.yaml
helm get values <IQ_RELEASE_NAME> --namespace <IQ_NAMESPACE> --all > current-iq-values.yaml
```

Review and update these files rather than starting with empty values files. Preserve environment-specific settings, credentials references, networking, database, image, and storage values. Redact secrets before sharing the files.

## Update the IQ chart

1. Update `custom-iq-values.yaml` with the supported IQ chart configuration. Do not change IQ image tags; the selected chart supplies the compatible images.
2. Upgrade the separate IQ release:

    ```bash
    helm upgrade <IQ_RELEASE_NAME> \
      <IQ_CHART_LOCATION> \
      --namespace <IQ_NAMESPACE> \
      --reuse-values \
      --values custom-iq-values.yaml
    ```

    Use `--reuse-values` only when the command also includes the complete set of intended changes. If `custom-iq-values.yaml` was recreated from `helm get values --all`, it can be used as the complete values file without `--reuse-values`.

3. Verify both IQ services:

    ```bash
    helm status <IQ_RELEASE_NAME> --namespace <IQ_NAMESPACE>
    kubectl rollout status deployment/<IQ_RELEASE_NAME>-integrator --namespace <IQ_NAMESPACE>
    kubectl rollout status deployment/<IQ_RELEASE_NAME>-mcp-server --namespace <IQ_NAMESPACE>
    ```

## Update the DX integration

1. Set the IQ service reference in the DX values file. Use the service name created by the IQ release, typically `<IQ_RELEASE_NAME>-integrator`:

    ```yaml
    networking:
      dxIqService: "<IQ_RELEASE_NAME>-integrator"
    ```

2. Upgrade the DX release with the target DX chart:

    ```bash
    helm upgrade <DX_RELEASE_NAME> \
      oci://hclcr.io/dx/hcl-dx-deployment \
      --version <DX_HELM_CHART_VERSION> \
      --namespace <DX_NAMESPACE> \
      --values custom-dx-values.yaml
    ```

3. Verify the DX release and test IQ from a DX page:

    ```bash
    helm status <DX_RELEASE_NAME> --namespace <DX_NAMESPACE>
    kubectl get pods --namespace <DX_NAMESPACE>
    ```

    Confirm that IQ opens, connects to the backend, and returns a response.

## Rollback

If an upgrade fails, review the relevant Helm and pod logs. Roll back the affected release independently:

```bash
helm rollback <IQ_RELEASE_NAME> <IQ_REVISION> --namespace <IQ_NAMESPACE>
helm rollback <DX_RELEASE_NAME> <DX_REVISION> --namespace <DX_NAMESPACE>
```

Use the previous known-good revision for the release being rolled back. After the rollback, verify pod readiness and test IQ again. For additional troubleshooting guidance, see [Troubleshooting IQ](./troubleshooting.md).

## Related information

- [Installing IQ](installation/index.md)
- [Enabling IQ](enable.md)
- [Upgrading Helm Deployment](../../deployment/install/container/helm_deployment/update_helm_deployment.md)
- [Core container version-to-version upgrade](../../deployment/manage/container_configuration/core_interactions_kubernetes.md)
