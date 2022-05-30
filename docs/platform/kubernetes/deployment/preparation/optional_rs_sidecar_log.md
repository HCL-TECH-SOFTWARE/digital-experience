# Configure Remote Search sidecar logging

Beginning with HCL Digital Experience 9.5 CF199, Kubernetes deployment using Helm allows you to expose logs that are written to files on its PersistentVolumes \(PVs\) by the DX Remote Search application. The deployment uses sidecar containers, which access the PersistentVolume as the Remote Search container, read the log files, and expose them as their standard output. You can access logs with commands like `kubectl logs -n <namespace> <pod-name> <sidecar-container-name>`, for example, `kubectl logs -n dxns dx-deployment-remote-search-0 system-err-log`.

See the [official Kubernetes documentation](https://kubernetes.io/docs/concepts/cluster-administration/logging/#streaming-sidecar-container) for more information.

**Shared volume**

The DX Remote Search container and sidecar containers in the same pod share the same volume. This allows DX Remote Search to write its logs, and have the sidecar containers read those logs. The profile volume containing the logs is mounted at /opt/HCL/AppServer/profiles/prs\_profile/ in the DX Remote Search container, and at /var/profile/ in the sidecar containers. The different directory paths emphasize that sidecar containers can only read files written by Remote Search under its profile directory. Files in other directories are not available to the sidecars.

**Default configuration**

Two sidecar containers are launched with Remote Search:

-   `system-out-log` - exposes the log file at /var/profile/logs/server1/SystemOut.log.
-   `system-err-log` - exposes the log file at /var/profile/logs/server1/SystemErr.log.

## Configure custom sidecar containers
The custom sidecar container will use the image named `logging-sidecar` to generate the container. This custom sidecar container has the ability to expose the logs from the rotating logs and filename pattern match functionality. The default logs (`system-out-log` & `system-err-log`) will also use the new image to generate the container so that logs also have the ability to find updated log files from rotating logs.

This custom sidecar container has an additional feature for rotating logs. The custom sidecar container has a script that is capable to find the recently updated log file and stat fetching logs from that file. The additional advantage is that the script is also able to find a file from a pattern matching file name.

If there is a case where multiple files were getting generated in rotating logs, in that case, all the log file has their unique name (i.e. trace.20220521.001.123.log, trace.20220521.002.123.log, trace.20220521.001.345.log).

So in that case, the file pattern matching argument can be passed to identify the file from that pattern matching. And for the rotating logs the file picking mechanism (recently added/updated file will be picked) working as it is among those files.

!!!example "Example:"
    The following example starts a new sidecar container, and exposes the logs with file pattern matching ability.

    ```
        logging:
          core:
            customLogSidecarContainers:
              - containerName: "trace"
                 logFilePath: "/var/profile/logs/server1/trace.*.log"
    ```

    ```
        logging:
          core:
            customLogSidecarContainers:
              - containerName: "trace"
                 logFilePath: "/var/profile/logs/*/trace.log"
    ```