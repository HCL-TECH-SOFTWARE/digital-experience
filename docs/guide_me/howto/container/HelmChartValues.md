# How to get Helm chart values

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

If the original custom values file is lost or deleted, exporting the active settings ensures you can audit your current cluster configuration or reuse parameters for future deployment upgrades. This article describes how to retrieve Helm chart values from a running environment.

## Instructions

Run the following Helm command to retrieve the configuration values applied to your deployment:

```bash
helm get values -n NAMESPACE RELEASE_NAME
```

For example, to extract the values from a release named `dx-deployment` in the `dxns` namespace and save them directly to a new `values.yaml` file, run:

```bash
helm get values -n dxns dx-deployment > values.yaml
```

For more information, review the [official helm get values documentation](https://helm.sh/docs/helm/helm_get_values/){target="_blank"}.  
