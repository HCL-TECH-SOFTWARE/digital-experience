# How to delete duplicate CONFIG_CHECKSUM environment variables?

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

There can be duplicate entries of "CONFIG_CHECKSUM" in the values.yaml file.
For example:

```log
- name: CONFIG_CHECKSUM
  value: d645deef332e2eba6a8b8afe2aabc1afbe2d795feb2650d088585a18808d8723
- name: CONFIG_CHECKSUM
  value: 1f180e3d5f5308ea9f95ac1647a5b1c7a616e2d2c1e14851783faca5a4271815
- name: CONFIG_CHECKSUM
  value: 1b7af3b626258eceda6977774fee28326c75e6750b97b051b2f7f5d7be2dfcd0
```

Or warnings similar to this when performing helm upgrade:

```log
W0508 15:54:50.436745 2550 warnings.go:70] spec.template.spec.containers[0].env[2].name: duplicate name "CONFIG_CHECKSUM"
```

## Instructions

A way to remove the extra entries is to perform the following command:

```log
kubectl -n dxns delete sts dx-deployment-core --cascade=orphan
```

This command deletes the statefulset but keeps the Pods intact.

After this command perform a [helm upgrade](../../../deployment/install/container/helm_deployment/update_helm_deployment.md){target="_blank"}. The helm upgrade restarts all pods and ends up with just one checksum in each pod as well as in the statefulset.
