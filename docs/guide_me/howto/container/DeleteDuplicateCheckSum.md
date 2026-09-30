# How to delete duplicate `CONFIG_CHECKSUM` environment variables

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

Duplicate entries of `CONFIG_CHECKSUM` can sometimes accumulate within the live Kubernetes resource specifications or rendered deployment manifests.

For example:

```log
- name: CONFIG_CHECKSUM
  value: d645deef332e2eba6a8b8afe2aabc1afbe2d795feb2650d088585a18808d8723
- name: CONFIG_CHECKSUM
  value: 1f180e3d5f5308ea9f95ac1647a5b1c7a616e2d2c1e14851783faca5a4271815
- name: CONFIG_CHECKSUM
  value: 1b7af3b626258eceda6977774fee28326c75e6750b97b051b2f7f5d7be2dfcd0
```

Or warnings similar to this when performing a Helm upgrade:

```log
W0508 15:54:50.436745 2550 warnings.go:70] spec.template.spec.containers[0].env[2].name: duplicate name "CONFIG_CHECKSUM"
```

This article describes how to remove those extra entries from the live cluster configuration.

## Instructions

Refer to the following steps to remove the extra `CONFIG_CHECKSUM` entries:

1. Run the following command:

    ```bash
    kubectl -n dxns delete sts dx-deployment-core --cascade=orphan
    ```

    This command deletes the live `statefulset` resource tracking object but keeps the actual running pods intact.

2. Perform a [Helm upgrade](../../../deployment/install/container/helm_deployment/update_helm_deployment.md). The Helm upgrade rebuilds the `statefulset` cleanly, restarts the pods, and leaves just one valid checksum in each pod specification.
