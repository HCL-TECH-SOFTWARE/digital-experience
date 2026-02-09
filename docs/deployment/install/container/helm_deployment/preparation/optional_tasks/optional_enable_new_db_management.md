# Enabling `newDbManagement`

Starting with CF231, a new database management mechanism is available for the persistence layer. When the flag `newDbManagement` is set to `true`, all persistence node and pool pods are managed by the Runtime Controller (RTC) instead of being self-managed.

The RTC continuously observes the lifecycle of the persistence layer pods. It is responsible for starting and stopping persistence pods, applying configuration and credential changes, coordinating failover of the primary node, and maintaining the desired scale in sync with the actual pods.

The current state of the persistence layer is stored in a dedicated ConfigMap named:

```
<RELEASE_NAME>-persistence-state
```

The leading RTC pod reads and updates this ConfigMap to orchestrate the database. This ConfigMap stores the following data:

- Database lifecycle status
- Scaling information
- Credential hashes (to detect changes)
- Information about the current primary node and failures

## Inspecting the persistence state

You can observe the database state and RTC actions by running the following command:

```sh
kubectl get cm -n <NAMESPACE> -o yaml <RELEASE_NAME>-persistence-state
```

The following example shows a healthy, running database:

```yaml
data:
  dx-deployment-persistence-dam-user: 20e38220bfdbe40e719d85fb38f9c48de692d0be47cc5101b1727ec428e60205
  dx-deployment-persistence-user: 89ecb055a5b7648338b52622ab9c5ebe85d29e659e18b11ac74204d46b0eee9e
  failed_primary: ""
  postgresql_version: "16"
  previousPgNodeCount: "3"
  previousPgPoolCount: "3"
  primary_failure_count: "0"
  status: running
  target_primary_pod: dx-deployment-persistence-node-0
```

- `status`: Overall lifecycle status
- `target_primary_pod`: Pod currently considered the primary node by the RTC
- `previousPgNodeCount` and `previousPgPoolCount`: Last known replica counts for nodes and pools
- `dx-deployment-persistence-*-user`: Hashes of the database credentials used to detect changes
- `failed_primary` and `primary_failure_count`: Information used for primary failover handling

## Prerequisites

Before enabling `newDbManagement`, ensure that:

- You are running CF231 or later.
- You have `kubectl` and `helm` access to the target cluster and namespace.
- You have a current backup of the database.
- You can afford a short maintenance downtime of your application, as the pods will restart and cause temporary unavailability.

## Enabling RTC-based management

Use the following steps to enable the RTC for new or existing persistence layers.

### New deployments

To enable RTC-based database management for new deployments:

1. Set the following flag in your `custom-values.yaml` file:

    ```yaml
    configuration:
      digitalAssetManagement:
        newDbManagement: true
    ```

2. Enable the RTC in the same `custom-values.yaml` file:

    ```yaml
    applications:
      runtimeController: true
    ```

3. Install the Helm chart by running the following command with your `custom-values.yaml` file:

    ```bash
        # Helm install command
        helm install -n my-namespace -f path/to/your/custom-values.yaml your-release-name path/to/hcl-dx-deployment-vX.X.X_XXXXXXXX-XXXX.tar.gz
    ```

4. Monitor the deployment until all pods reach a `Running` and `Ready` state by running the following command:

    ```bash
    kubectl get pods -n <NAMESPACE>
    ```

5. Verify that the persistence pods are managed by the RTC:

   1. Check the pods by running the following command:

        ```bash
        kubectl get pods -n <NAMESPACE>
        ```

   2. Inspect the ConfigMap by running the following command:

        ```bash
        kubectl get cm -n <NAMESPACE> -o yaml <RELEASE_NAME>-persistence-state
        ```

### Existing deployments

To enable RTC-based database management for existing deployments, you must transition from self-managed to RTC-managed persistence:

1. Scale down the existing persistence node to a single pod. The RTC must have a single, unambiguous primary node when it takes over management.

    1. Update the replica count in the `custom-values.yaml` file:

        ```yaml
        scaling:
          replicas:
            persistenceNode: 1
        ```

    2. Apply these changes using `helm upgrade` for your deployment:

        ```bash
        helm upgrade -n your-namespace -f path/to/your/custom-values.yaml your-release-name path/to/hcl-dx-deployment-vX.X.X_XXXXXXXX-XXXX.tar.gz
        ```

    3. Wait for the change to apply then run the following command to verify the state of your deployment:

        ```sh
        kubectl get pods -n <NAMESPACE>
        ```

        Verify that exactly one persistence node pod remains and the persistence layer and all dependent applications are healthy.

2. Enable the RTC-managed persistence layer.

    1. Adjust the `custom-values.yaml` file with the following configuration:

        ```yaml
        configuration:
          digitalAssetManagement:
            newDbManagement: true
        ```

    2. Enable the RTC in the same `custom-values.yaml` file:

        ```yaml
        applications:
          runtimeController: true
        ```

    3. Apply these changes using `helm upgrade` for your deployment:

        ```bash
        helm upgrade -n your-namespace -f path/to/your/custom-values.yaml your-release-name path/to/hcl-dx-deployment-vX.X.X_XXXXXXXX-XXXX.tar.gz
        ```

    4. Monitor the deployment until all pods reach a `Running` and `Ready` state by running the following command:

        ```bash
        kubectl get pods -n <NAMESPACE>
        ```

    5. Verify that the persistence pods are managed by the RTC:
        1. Check the pods by running the following command:

            ```bash
            kubectl get pods -n <NAMESPACE>
            ```

        2. Inspect the ConfigMap by running the following command:

            ```bash
            kubectl get cm -n <NAMESPACE> -o yaml <RELEASE_NAME>-persistence-state
            ```

        !!!note
            If pods do not become healthy, check the RTC logs in the corresponding pod.

3. Re-scale the persistence layer to the desired values.

    1. Scale the persistence nodes up again to the desired replica count by adjusting the `custom-values.yaml` file with the following configuration:

        ```yaml
        scaling:
          replicas:
            persistenceNode: 3
        ```

    2. Apply these changes using `helm upgrade` for your deployment.

        ```bash
        helm upgrade -n your-namespace -f path/to/your/custom-values.yaml your-release-name path/to/hcl-dx-deployment-vX.X.X_XXXXXXXX-XXXX.tar.gz
        ```

    3. Verify the final state and health of the persistence layer by running the following commands:

        ```bash
        kubectl get pods -n <NAMESPACE>
        ```

        ```bash
        kubectl get cm -n <NAMESPACE> -o yaml <RELEASE_NAME>-persistence-state
        ```

        Ensure that the persistence layer is healthy and all dependent applications are healthy.
