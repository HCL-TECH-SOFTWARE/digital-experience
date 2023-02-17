# Configure Core Sidecar Logging

Beginning with HCL Digital Experience 9.5 [CF199](../../../../../../whatsnew/cf19/newcf199.md), Kubernetes deployment using Helm allows you to expose logs that are written to files by the [DX Core application](../../../../../../get_started/plan_deployment/container_deployment/application_architecture.md). The deployment uses sidecar containers, which access the same logs volume as the Core, read the log files, and expose them as their standard output. You can access logs with commands like `kubectl logs -n <namespace> <pod-name> <sidecar-container-name>`, for example, `kubectl logs -n dxns dx-deployment-core-0 system-err-log`.

See the [official Kubernetes documentation](https://kubernetes.io/docs/concepts/cluster-administration/logging/#streaming-sidecar-container) for more information.

**Shared volume**

The DX Core container and sidecar containers share the same volume for the logs as well as the [custom PVCs defined in the values](../mandatory_tasks/prepare_persistent_volume_claims.md#configuring-additional-core-persistent-volumes). This allows DX Core to write its logs, and have the sidecar containers read those logs. The logs are mounted at /opt/HCL/logs (and symbolically linked from /opt/HCL/wp_profile/logs) in the DX Core container. The sidecar containers can only read files written by Core under its logs directory and in the `mountPath` specified in the custom PVCs (`volumes.core.customPVCs`). Files in other directories (such as the profile) are not available to the sidecars.

**Default configuration**

Two sidecar containers are launched with Core:

-   `system-out-log` - exposes the log file at /var/logs/WebSphere_Portal/SystemOut.log.
-   `system-err-log` - exposes the log file at /var/logs/WebSphere_Portal/SystemErr.log.

## Configure custom sidecar containers

Use the following syntax to configure more sidecar containers for additional log files in the custom-values.yaml file.

!!!important
    You can only expose log files inside of the /opt/HCL/logs directory and the `mountPath` specified for each entry in `volumes.core.customPVCs`.

```yaml
logging:
  # Core specific logging configuration
  core:
    level: ""
    # List of sidecar containers mapping a container name to a file path for a log file to be exposed
    # Each element must consist of a `containerName` and a `logFilePath`, the latter must be located in one of the mounted volumes.
    # The mounted volumes include the path `/opt/HCL/logs` and any custom PVC mountPaths specified in `volumes.core.customPVCs`
    # `logFilePath` can be a file name pattern, use `*` in file path to make generic value. For example `/opt/HCL/logs/*/test.log` or `/opt/HCL/logs/verbosegc.*`
    # Example:
    # customLogSidecarContainers:
    #   - containerName: "trace"
    #     logFilePath: "/opt/HCL/logs/WebSphere_Portal/trace.log"
    customLogSidecarContainers: []
```

!!!example "Example:"
    The following example starts a new sidecar container, and exposes the logs in /opt/HCL/logs/WebSphere\_Portal/trace.log.

    ```yaml
    logging:
      core:
        customLogSidecarContainers:
          - containerName: "trace"
            logFilePath: "/opt/HCL/logs/WebSphere_Portal/trace.log"
    ```

## Config Wizard logs

We can use the combination of [custom PVCs defined in the values](../mandatory_tasks/prepare_persistent_volume_claims.md#configuring-additional-core-persistent-volumes) and `customLogSidecarContainers` to access the logs of the Config Wizard and make them available to Kubernetes.


!!!example "Example:"
    The following example creates a custom PVC for the Config Wizard logs and starts a new sidecar container that tails the `SystemOut.log` of it.

    ```yaml
    volumes:
      core:
        customPVCs:
          - name: "cw-log-pvc"
            accessModes:
              - "ReadWriteOnce"
            mountPath: "opt/HCL/AppServer/profiles/cw_profile/logs/server1/"
            storageClassName: "mystorageclass"
            requests:
              storage: "10Gi"
    logging:
      core:
        customLogSidecarContainers:
          - containerName: "cw-system-out-log"
            logFilePath: "/opt/HCL/AppServer/profiles/cw_profile/logs/server1/SystemOut.log"
    ```

    The logs can then be accessed using `kubectl logs -n <namespace> <release-name>-core-0 cw-system-out-log`.