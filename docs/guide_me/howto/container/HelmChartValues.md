# How to get helm chart values

## Applies to

> HCL Digital Experience v9.5 and Higher

## Introduction

This document describes how to retrieve the Helm chart values from the running environment if the custom-values.yaml file were deleted.

## Instructions

It's possible to get the helm chart's values by running the following helm command:

```text
helm get values -n NAMESPACE RELEASE_NAME
```

Example:

```text
helm get values -n dxns dx-deployment > values.yaml
```

For more information review [helm get values](https://helm.sh/docs/helm/helm_get_values/){target="_blank"}.
