# Digital Asset Management persistence

This topic describes the components of the Digital Asset Management persistence. The updated DAM persistence feature is available from HCL Digital Experience 9.5 Container Update CF198 and later.

![Digital Asset Management persistence component architecture](../../../images/dam_persistence_components.png "DAM persistence components")

![Digital Asset Management persistence cluster architecture](../../../images/dam_persistence_cluster_architecture.png "DAM persistence cluster architecture")

## `persistence-node`

`persistence-node` provides the database functionality for HCL Digital Asset Management [HCL Digital Asset Management](../../../manage_content/digital_assets/index.md). The `persistence-node` is a DX [Red Hat Universal Base Image \(UBI\)](https://www.redhat.com/en/blog/introducing-red-hat-universal-base-image) container image installed with PostgreSQL and the Replication Manager Service. [`repmgr`](https://repmgr.org/) is an open-source tool suite for managing replication and failover in a cluster of PostgreSQL servers. `repmgr` enhances the built-in hot-standby capabilities of PostgreSQL with tools to set up standby servers, monitor replication, and perform administrative tasks, such as failover or manual switchover operations.

In case of PostgreSQL master server failure, the `repmgr` service switches the server role from master to standby.

The `persistence-node` configurations are available in the Helm Chart [values.yaml](../../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/prepare_configuration.md) file as `persistenceNode`.

The administrator can configure number of `persistence-node` under `scaling` configuration.

```yaml
# Scaling settings for deployed applications
scaling:
  # The default amount of replicas per application
  replicas:
    persistenceConnectionPool: 1
    persistenceNode: 3
```

!!! note

    Scaling affects only the read requests and ensures fail-over capabilities. Write requests are always directed only to the primary pod.

The `persistence-node` is a stateful application and it requires a volume. The configuration must have a dynamic volume class to start the container. The `storageClassName` and `storage` must be updated according to the cloud service provider and project requirement.

```yaml
volumes:
  # Persistent Volumes for Persistence Node
  persistenceNode:
    # Database PVC, one per Persistence Node
    database:
      storageClassName: "manual"
      requests:
        storage: "2Gi"
      # Optional volume name to specifically map to.
      volumeName:
```
## `persistence-connection-pool`

The `persistence-connection-pool` container runs the [Pg-pool](https://www.pgpool.net/mediawiki/index.php/Main_Page) service. Pg-pool is a middleware that works between `persistence-node` and HCL Digital Asset Management [HCL Digital Asset Management](../../../manage_content/digital_assets/index.md).

The service provides:

-   Connection pooling
-   Load balancing

For better performance, administrator can scale the `persistence-connection-pool` to more than one pod. The `persistence-connection-pool` configurations are available in Helm Chart [values.yaml](../../../deployment/install/container/helm_deployment/preparation/mandatory_tasks/probes_configuration.md) file as `persistenceConnectionPool`.

```yaml
# Scaling settings for deployed applications
scaling:
  # The default amount of replicas per application
  replicas:
    persistenceConnectionPool: 1
    persistenceNode: 3
```

The following is an example of a persistence cluster in a successful deployment.

![](../../../images/cluster_status_example.png "Persistence cluster in a successful deployment")

???+ info "Related information"
    - [HCL Digital Asset Management](../../../manage_content/digital_assets/index.md)