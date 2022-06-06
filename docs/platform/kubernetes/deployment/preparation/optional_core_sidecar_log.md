# Configure Core sidecar logging

Beginning with HCL Digital Experience 9.5 CF199, Kubernetes deployment using Helm allows you to expose logs that are written to files by the DX Core application. The deployment uses sidecar containers, which access the same logs volume as the Core, read the log files, and expose them as their standard output. You can access logs with commands like `kubectl logs -n <namespace> <pod-name> <sidecar-container-name>`, for example, `kubectl logs -n dxns dx-deployment-core-0 system-err-log`.

See the [official Kubernetes documentation](https://kubernetes.io/docs/concepts/cluster-administration/logging/#streaming-sidecar-container) for more information.

**Shared volume**

The DX Core container and sidecar containers share the same volume. This allows DX Core to write its logs, and have the sidecar containers read those logs. The logs are mounted at /opt/HCL/logs \(and symbolically linked from /opt/HCL/wp\_profile/logs\) in the DX Core container, and at /var/logs/ in the sidecar containers. The different directory paths emphasize that sidecar containers can only read files written by Core under its logs directory. Files in other directories \(such as the profile\) are not available to the sidecars.

**Default configuration**

Two sidecar containers are launched with Core:

-   `system-out-log` - exposes the log file at /var/logs/WebSphere\_Portal/SystemOut.log.
-   `system-err-log` - exposes the log file at /var/logs/WebSphere\_Portal/SystemErr.log.

## Configure custom sidecar containers
The custom sidecar container will use the image named `logging-sidecar` to generate the container. This custom sidecar container has the ability to expose the logs from the rotating logs and filename pattern match functionality. The default logs (`system-out-log` and `system-err-log`) also use this image to generate the container.

As an additional feature for the rotating logs,  the custom sidecar container has a script that is capable of finding the recently updated log file and fetching the logs from that file. The script can also find a file from a pattern matching file name.

So, the file pattern matching argument can be passed to identify the file that matches the pattern. For the rotating logs, the file picking mechanism (recently added/updated file will be picked) works as it is among those files.

!!!example "Example:"
    The following example starts a new sidecar container, and exposes the logs with the file pattern matching ability.

    ```
        logging:
          core:
            customLogSidecarContainers:
              - containerName: "trace"
                 logFilePath: "/var/logs/WebSphere_Portal/verbosegc.*.log"
    ```

    ```
        logging:
          core:
            customLogSidecarContainers:
              - containerName: "trace"
                 logFilePath: "/var/logs/WebSphere_Portal/*/verbosegc.fix.log"
    ```

The custom sidecar container works with a single log file as well. You need to specify the absolute file path in `logFilePath` for the script to expose the logs from that file.

!!!example "Example:"
    The following example starts a new sidecar container and exposes the logs from a single file (mentioned with the absolute file path in the argument).

    ```
        logging:
          core:
            customLogSidecarContainers:
              - containerName: "trace"
                 logFilePath: "/var/logs/WebSphere_Portal/verbosegc.log"
    ```