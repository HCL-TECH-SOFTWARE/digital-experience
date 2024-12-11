# Logging sidecar container

HCL People Service provides a logging sidecar container that can be used to collect purpose-specific logs. The sidecar container runs a simple script that collects logs from People Service and exposes them to the Kubernetes logging system. Currently, a logging sidecar container can be enabled for the following components:

- Sync log: Collects logs from the synchronization process.
- Audit log: Logs all user events based on the requested API calls.

## Enable logging sidecar container

The logging sidecar container is disabled by default. To enable it, set the `enabled` flag to `true` for the desired components. For example, to enable the sync log, set the following values in the Helm chart:

```yaml
logging:
  sidecar:
    sync:
      enabled: true
```

By default, the logs are mounted to the `/data/people/logs` directory in the `hcl-people-service-data` persistent volume claim, where the People Service container is writing to.

## Access logs

To access the logs, you can use the `kubectl logs` command with the `-c` flag to specify the container. For example, to access the sync logs, run:

```sh
kubectl logs -n <NAMESPACE> <PEOPLE_SERVICE_POD_NAME> -c <SYNC_LOG_CONTAINER_NAME>
```

Refer to the [Configuration - logging](../../deployment/configuration/index.md#logging-configuration) for more information on the available configuration options for the logging sidecar container.
