# Configure Core sidecar logging

Beginning with HCL Digital Experience 9.5 [CF199](../../docker.md), Kubernetes deployment using Helm allows you to expose logs that are written to files by the [DX Core application](../../architecture/application_architecture.md). The deployment uses sidecar containers, which access the same logs volume as the Core, read the log files, and expose them as their standard output. You can access logs with commands like `kubectl logs -n <namespace> <pod-name> <sidecar-container-name>`, for example, `kubectl logs -n dxns dx-deployment-core-0 system-err-log`.

See the [official Kubernetes documentation](https://kubernetes.io/docs/concepts/cluster-administration/logging/#streaming-sidecar-container) for more information.

**Shared volume**

The DX Core container and sidecar containers share the same volume. This allows DX Core to write its logs, and have the sidecar containers read those logs. The logs are mounted at /opt/HCL/logs \(and symbolically linked from /opt/HCL/wp\_profile/logs\) in the DX Core container, and at /var/logs/ in the sidecar containers. The different directory paths emphasize that sidecar containers can only read files written by Core under its logs directory. Files in other directories \(such as the profile\) are not available to the sidecars.

**Default configuration**

Two sidecar containers are launched with Core:

-   `system-out-log` - exposes the log file at /var/logs/WebSphere\_Portal/SystemOut.log.
-   `system-err-log` - exposes the log file at /var/logs/WebSphere\_Portal/SystemErr.log.

## Configure custom sidecar containers

Use the following syntax to configure more sidecar containers for additional log files in the custom-values.yaml file.

!!!important
    You can only expose log files inside of the /var/logs/ directory.

    ```
    logging:
        # Core specific logging configuration
        core:
            # List of sidecar containers mapping a container name to a file path for a log file to be exposed
            # Each element must consist of a `containerName` and a `logFilePath`
            # Example:
            # customLogSidecarContainers:
            #   - containerName: "trace"
            #     logFilePath: "/var/logs/WebSphere_Portal/trace.log"
            customLogSidecarContainers: []
    ```

!!!example "Example:"
    The following example starts a new sidecar container, and exposes the logs in /var/logs/WebSphere\_Portal/trace.log.

    ```
        logging:
          core:
            customLogSidecarContainers:
              - containerName: "trace"
                 logFilePath: "/var/logs/WebSphere_Portal/trace.log"
    ```
