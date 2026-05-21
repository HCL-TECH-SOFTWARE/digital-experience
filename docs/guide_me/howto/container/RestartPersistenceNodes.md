# How to safely restart persistence nodes

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

When performing infrastructure maintenance on containerized environments, improperly terminating nodes can cause data corruption or unexpected connection drops within the PostgreSQL database layer. Relocating active persistence workloads to a stable worker node ensures continuous data integrity during cluster maintenance. This article describes how to safely isolate, migrate, and restart persistence nodes.

!!!note
    Using a defined grace period when draining a node is highly recommended. This allows active database transactions to complete cleanly rather than being forced to terminate abruptly with a termination signal (`SIGKILL`).

## Instructions

Perform the following steps to migrate workloads and safely restart your target infrastructure nodes:

1. Before making any infrastructure or scaling modifications, ensure you have a verified, complete backup of your data assets. For detailed instructions, refer to [Back up and restore DAM](../../../manage_content/digital_assets/dam_backup_restore_image.md).

2. Locate a worker node that will not undergo maintenance during this window. Retrieve its unique hostname by executing the appropriate command for your platform:

    - **Kubernetes:**  

        ```bash
        kubectl -n dxns describe node xyz
        ```

    - **OpenShift:**

        ```bash
        oc describe node xyz
        ```

    Locate and record the exact `kubernetes.io/hostname` value from the output.

3. Modify your custom Helm values file to reduce the replica count for the `digitalAssetManagement`, `persistenceConnectionPool`, and `persistenceNode` parameters to `1`. This prevents coordination issues during the migration:

    ```yaml
    scaling:
      # The default amount of replicas per application
      replicas:
        digitalAssetManagement: 1
        persistenceConnectionPool: 1
        # You should not increase the number of persistence node to more than 5
        persistenceNode: 1
    ```

4. Run a [**Helm upgrade**](..//../../deployment/install/container/helm_deployment/update_helm_deployment.md) to apply the updated replica counts to your deployment.

5. Edit your custom values file again to append a `nodeSelector` configuration. Use the unique hostname retrieved in Step 2 to force the pods to schedule onto the stable node:

    ```yaml
    # Application specific node selector
    # nodeSelector uses following notation: <NODE_LABEL_KEY>: <NODE_LABEL_VALUE>
    # Example:
    # nodeSelector:
    #   contentComposer:
    #     diskType: ssd
    nodeSelector:
      digitalAssetManagement:
        kubernetes.io/hostname:xyzhostname
      persistenceConnectionPool:
        kubernetes.io/hostname:xyzhostname
      persistenceNode:
        kubernetes.io/hostname:xyzhostname
    ```

6. Run a `helm upgrade` to migrate the pods to the designated safe node.

7. Update your custom Helm values file to restore the original replica counts for your applications while keeping the `nodeSelector` properties in place. Run the `helm upgrade` command once more to deploy the full replica count safely on the designated node.

8. Execute your planned maintenance, updates, or restarts on the now-vacated cluster nodes.

9. Once the maintained nodes are fully online and healthy, remove the temporary `nodeSelector` blocks from your custom values file. Run the `helm upgrade` command a final time to allow the cluster to distribute the persistence workloads evenly across all available nodes.
