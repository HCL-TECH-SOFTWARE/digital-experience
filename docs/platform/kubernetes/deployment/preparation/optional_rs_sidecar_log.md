# Configure Remote Search sidecar logging

Beginning with HCL Digital Experience 9.5 CF199, Kubernetes deployment using Helm allows you to expose logs that are written to files on its PersistentVolumes \(PVs\) by the DX Remote Search application. The deployment uses sidecar containers, which access the PersistentVolume as the Remote Search container, read the log files, and expose them as their standard output. You can access logs with commands like `kubectl logs -n <namespace> <pod-name> <sidecar-container-name>`, for example, `kubectl logs -n dxns dx-deployment-remote-search-0 system-err-log`.

See the [official Kubernetes documentation](https://kubernetes.io/docs/concepts/cluster-administration/logging/#streaming-sidecar-container) for more information.

**Shared volume**

The DX Remote Search container and sidecar containers in the same pod share the same volume. This allows DX Remote Search to write its logs, and have the sidecar containers read those logs. The profile volume containing the logs is mounted at /opt/HCL/AppServer/profiles/prs\_profile/ in the DX Remote Search container, and at /var/profile/ in the sidecar containers. The different directory paths emphasize that sidecar containers can only read files written by Remote Search under its profile directory. Files in other directories are not available to the sidecars.

**Default configuration**

Two sidecar containers are launched with Remote Search:

-   `system-out-log` - exposes the log file at /var/profile/logs/server1/SystemOut.log.
-   `system-err-log` - exposes the log file at /var/profile/logs/server1/SystemErr.log.

**Configure custom sidecar containers**

Use the following syntax to configure more sidecar containers for additional log files in the custom-values.yaml file.

!!!important
    You can only expose log files inside of the /var/profile/ directory.

```
logging:
  remoteSearch:
    # List of sidecar containers mapping a container name to a file path for a log file to be exposed
    # Each element must consist of a `containerName` and a `logFilePath`, the latter must be located in /var/profile
    # Example:
    # customLogSidecarContainers:
    #   - containerName: "trace"
    #     logFilePath: "/var/profile/logs/server1/trace.log"
    customLogSidecarContainers: []
```

!!!example "Example:"

The following example starts a new sidecar container, and exposes the logs in /var/profile/logs/server1/trace.log.

    ```
    logging:
      remoteSearch:
        customLogSidecarContainers:
          - containerName: "trace"
            logFilePath: "/var/profile/logs/server1/trace.log"
    ```

