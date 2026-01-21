# Enable new DB Management

Starting with CF231, a new database management mechanism is available for the persistence layer. When the flag `newDbManagement` is set to `true`, all persistence node and pool pods are managed by the Runtime Controller (RTC) instead of being self-managed.

This document explains how RTC-based database management works and how to enable it for both fresh and existing deployments.

## How it works

The Runtime Controller continuously observes the lifecycle of the persistence layer pods. It is responsible for:

- Starting and stopping persistence pods
- Applying configuration and credential changes
- Coordinating failover of the primary node
- Keeping the desired scale in sync with the actual pods

The current state of the persistence layer is stored in a dedicated ConfigMap with the name:

`<RELEASE_NAME>-persistence-state`

This ConfigMap stores:

- Database lifecycle status
- Scaling information
- Credential hashes (to detect changes)
- Information about the current primary node and failures

The leading Runtime Controller pod reads and updates this ConfigMap to orchestrate the database.

### Inspecting the persistence state

You can observe the state of the database and the actions of the RTC using:

```sh
kubectl get cm -n <NAMESPACE> -o yaml <RELEASE_NAME>-persistence-state
```

A typical example for a healthy, running database looks like this:

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

Key fields:

- `status`: overall lifecycle status.
- `target_primary_pod`: pod currently considered primary by the RTC.
- `previousPgNodeCount` / `previousPgPoolCount`: last known replica counts for nodes and pools.
- `dx-deployment-persistence-*-user`: hashes of the database credentials used to detect changes.
- `failed_primary` and `primary_failure_count`: information used for primary failover handling.

## Prerequisites

Before enabling `newDbManagement`, ensure that:

- You are running CF231 or later.
- You have `kubectl` and `helm` access to the target cluster and namespace.
- You have a current backup of the database.
- You can afford a short maintenance downtime of your application, as the pods will restart and cause temporary unavailability.

## Enabling RTC management for the persistence layer

### Fresh deployment

For a new deployment, you can enable RTC-based database management by setting the following flag in your `custom-values.yaml`:

```yaml
configuration:
  digitalAssetManagement:
    newDbManagement: true
```

Make sure that you also enable the Runtime Controller as part of your deployment:

```yaml
applications:
  runtimeController: true
```

Then:

1. Deploy your environment using `helm install` with your `custom-values.yaml`.
2. Wait until all pods are running and ready (`kubectl get pods -n <NAMESPACE>`).
3. Verify that the persistence pods are managed by the RTC:
   - Check pods: `kubectl get pods -n <NAMESPACE>`
   - Inspect the ConfigMap: `kubectl get cm -n <NAMESPACE> -o yaml <RELEASE_NAME>-persistence-state`

### Existing deployment

For an existing deployment, you must carefully transition from self-managed to RTC-managed persistence. This involves three steps.

#### 1. Scale down the existing persistence layer

First, scale down the persistence nodes to a single pod. The RTC must have a single, unambiguous primary node when it takes over management.

Update the replica count in `custom-values.yaml`:

```yaml
scaling:
  replicas:
    persistenceNode: 1
```

Apply these changes using `helm upgrade` for your deployment.

Wait for the change to apply and verify that:

- Exactly one persistence node pod remains.
- The persistence layer and all dependent applications are healthy.

You can use the following to verify the state of your deployment:

```sh
kubectl get pods -n <NAMESPACE>
```

#### 2. Enable RTC management

You can now enable the RTC-managed persistence layer by adjusting `custom-values.yaml` with the following configuration:

```yaml
configuration:
  digitalAssetManagement:
    newDbManagement: true
```

Ensure that the Runtime Controller is enabled as well:

```yaml
applications:
  runtimeController: true
```

Apply these changes using `helm upgrade` for your deployment.

After the upgrade:

- Monitor pod status: `kubectl get pods -n <NAMESPACE>`
- Inspect the persistence state ConfigMap:

  ```sh
  kubectl get cm -n <NAMESPACE> -o yaml <RELEASE_NAME>-persistence-state
  ```

- If pods do not become healthy, check the Runtime Controller logs in the corresponding pod.

#### 3. Re-scale the persistence layer to the desired values

Finally, scale the persistence nodes up again to the desired replica count in `custom-values.yaml`:

```yaml
scaling:
  replicas:
    persistenceNode: 3
```

Apply these changes using `helm upgrade` for your deployment.

Wait for the change to apply and verify that:

- The persistence layer is healthy.
- All dependent applications are healthy.

You can use:

```sh
kubectl get pods -n <NAMESPACE>
kubectl get cm -n <NAMESPACE> -o yaml <RELEASE_NAME>-persistence-state
```

to confirm the final state.