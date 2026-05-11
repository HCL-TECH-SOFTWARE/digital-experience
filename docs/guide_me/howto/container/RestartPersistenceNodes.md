# How to safely restart the persistence nodes

## Applies to

> HCL Digital Experience v9.5 and Higher

## Introduction

This document provides step-by-step instructions on how to safely restart the persistence node(s) in order to avoid data loss in the PostGres database.

## Instructions

!!!note
    Optional but Recommended Step: Use a grace period when draining the node, as that gives you the ability to take the node down much more gently and reliably instead of utilizing a sigkill to immediately terminate.

To perform the procedure no matter which way you go with the grace period, do the following:

1. First and foremost, make sure that you have full backups of everything as per the following product documentation:
[Back up and restore DAM](../../../manage_content/digital_assets/dam_backup_restore_image.md){target="_blank"}

2. Identify a node that will not be undergoing emergency maintenance and issue the command:

    On Kubernetes:  

    ```cmd
    kubectl -n dxns describe node xyz
    ```

    On OpenShift:  

    ```cmd
    oc describe node xyz
    ```

    From that output, get the unique hostname of the node.

3. Scale down to 1 pod for persistenceNode, digitalAssetManagement and persistenceConnectionPool by editing the helm chart as follows:

    ```yaml
    scaling:
     # The default amount of replicas per application
     replicas:
       digitalAssetManagement: 1
       persistenceConnectionPool: 1
       # You should not increase the number of persistence node to more than 5
       persistenceNode: 1
    ```

4. Run the [**helm upgrade**](..//../../deployment/install/container/helm_deployment/update_helm_deployment.md){target="_blank"} command to apply the changes to the chart.

5. Edit the custom-values.yaml that contains your customizations for the DX deployment and add the following using the hostname from step 2:

    ```yaml
    # Application specific node selector
    # nodeSelector uses following notation: <NODE_LABEL_KEY>: <NODE_LABEL_VALUE>
    # e.g. nodeSelector
    # nodeSelector:
    # contentComposer:
    # diskType: ssd
    nodeSelector:
      digitalAssetManagement:
        kubernetes.io/hostname:xyzhostname
      persistenceConnectionPool:
        kubernetes.io/hostname:xyzhostname
      persistenceNode:
       kubernetes.io/hostname:xyzhostname
    ```

6. Run the [**helm upgrade**](..//../../deployment/install/container/helm_deployment/update_helm_deployment.md){target="_blank"} command to apply the changes to the chart.

7. Scale back up to your normal number of pods using the helm chart.

8. Apply Maintenance.

9. Once everything is stable again, remove the nodeSelector customizations from your helm chart and run the [**helm upgrade**](..//../../deployment/install/container/helm_deployment/update_helm_deployment.md){target="_blank"} command to once again distribute the workload across nodes.
