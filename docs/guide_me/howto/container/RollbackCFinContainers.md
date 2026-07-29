# How to roll back to a previous CF version in Kubernetes or OpenShift

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

If the upgrade of the DX core pod fails and enters a crash loop, you can revert to the previous cumulative fix (CF) version. This article describes how to roll back to a previous CF version.

## Instructions

To roll back to a previous CF version when a previous version profile is present in the Persistent Volume (PV), perform the following steps:

### Verifying the profile directory

1. Access the core PV.

2. Check if the `prof_95/<oldCF>` directory exists.

If the directory exists, proceed to the deployment rollback steps.

!!!note
    If the previous version profile does not exist, open a case with [HCL Support](https://support.hcl-software.com/csm){target="_blank"} to investigate the issue.

### Rolling back the deployment

1. Set the replicas of the `dx-core` pod to `0`, and then perform a [Helm upgrade](https://help.hcl-software.com/digital-experience/9.5/latest/deployment/install/container/helm_deployment/update_helm_deployment/){target="_blank"}.

2. Delete the new CF directory from the PV.

3. Set the images and tags to the old CF version, and then perform a [Helm upgrade](https://help.hcl-software.com/digital-experience/9.5/latest/deployment/install/container/helm_deployment/update_helm_deployment/){target="_blank"}.

4. Set the replicas of the `dx-core` pod to `1`, and then perform a [Helm upgrade](https://help.hcl-software.com/digital-experience/9.5/latest/deployment/install/container/helm_deployment/update_helm_deployment/){target="_blank"}.
