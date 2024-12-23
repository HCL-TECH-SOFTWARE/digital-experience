# Configure and Access Logs

This topic shows you how to configure logging in Helm, as well as how to access Kubernetes container logs.

HCL Digital Experience logs are important for maintaining and troubleshooting both environments and custom applications. These logs frequently form part of the essential information requested by HCL Support to diagnose issues. In a Helm-based deployment of DX, logs are exposed as Kubernetes container logs which give a consistent mechanism for retrieving the logs of different components, as well as making them consumable by cluster-level logging solutions in Kubernetes.

## Configure logging

In CF200, a new mechanism is introduced for configuring log settings at runtime \(without pod restarts\) in Helm-based DX deployments. Log levels and trace strings are set in your custom-values.yaml file and applied using a `helm upgrade`command. Under the covers, this sets values in a new `<release-name>-global`config map which are monitored by the various running DX containers. When the containers detect a change to the values pertinent to themselves, they update their log configurations accordingly \(without restarting\). At that point, the new log behavior is immediately reflected in their Kubernetes logs.

!!!note
     OpenLDAP and Redis are not yet configurable using this feature.

## Setting the log configuration for a DX application

You can set a desired log configuration for a DX application by specifying an appropriate log string in your Helm custom-values.yaml file. Place the log string in the `level` property for the specified application. These properties are found in the `logging` section. 

You can see the string format in the following list. Once the property is set, run the `helm upgrade` command to apply the new logging level.

```yaml
# Logging configuration
logging:
  # Content Composer specific logging configuration
  contentComposer:
    level: 
      - "api:server-v1:*=info"
  # DAM Plugin Google Vision specific logging configuration
  damPluginGoogleVision:
    level: 
      - "api:server-v0:*=info"
  # Digital Asset Management specific logging configuration
  digitalAssetManagement:
    level: 
      - "api:server-v1:*=info"
      - "worker:server-v1:*=info"
  # Image Processor specific logging configuration
  imageProcessor:
    level: 
      - "api:server-v1:*=info"
  # Persistence Pool specific logging configuration
  persistenceConnectionPool:
    level: 
      - "pgpool:=info"
  # Persistence Node specific logging configuration
  persistenceNode:
    level: 
      - "psql:=info,repmgr:=info"
  # Remote Search specific logging configuration
  remoteSearch:
    level: []
  # Ring API specific logging configuration
  ringApi:
    level: 
      - "api:server-v1:*=info"
  # Runtime Controller specific logging configuration
  runtimeController:
    level: 
     - "controller:.*=INFO"
     -  "controller:com.hcl.dx.*=INFO"
  # License Manager specific logging configuration
  licenseManager:
    level: 
      - "license-check:.*=INFO"
      - "license-check:com.hcl.dx.*=INFO"
  # DAM Kaltura Plugin specific logging configuration
  damPluginKaltura:
    level: 
      - "api:server-v0:*=info"
  # HAProxy specific logging configuration
  haproxy:
    level:  
      - "haproxy:=info"
```

## Log configuration string format

Log configuration strings (the values set in the `level` properties of the custom-values.yaml) use the following common format, where multiple trace settings for the same application are in the form of a list:

```
- "<component>:<pattern>=<log-level>"
- "<component>:<pattern>=<log-level>"
```

-   `component` - represents a subsystem of the application and must be from a limited list per application (see the following examples).
-   `pattern` - describes the specific component area to log (for example, a Java package).
-   `log-level` - defines the granularity at which logging is enabled (see later for permitted levels).

The exact format of `pattern` depends on the configured application. The appropriate values are provided by HCL Support, if you are asked to enable tracing as part of a case. You can use wildcards for the `pattern` section of the log string. Some examples of log configuration strings for different DX applications are given as follows:

**DX Core example**:

```
- "wp_profile:com.hcl.App=info"
- "wp_profile:com.hcl.util.Data=finest"
```

**Digital Asset Management example**:

```
- "api:server-v1:dist=info"
- "worker:server-v1:dist=info"
- "api:server-v1:dist:server=debug"
```

## Supported application and component names

Following are the supported application and component names, where the application names are the subsections under `logging` in the custom-values.yaml:

|Application|Component names|
|-----------|---------------|
|`core`|`wp_profile`, `cw_profile`|
|`contentComposer`|`api`|
|`digitalAssetManagement`|`api`, `worker`|
|`imageProcessor`|`api`|
|`persistenceConnectionPool`|`pgpool`|
|`persistenceNode`|`psql`, `repmgr`|
|`remoteSearch`|`prs_profile`|
|`ringApi`|`api`|
|`runtimeController`|`controller`|
|`licenseManager`|`license-check`|
|`damPluginKaltura`|`api`|
|`haproxy`|`haproxy`|

## Supported log levels

For most applications, three log levels are supported: `debug`, `info`, and `error`. Core and Remote Search, where all existing WebSphere Application Server trace levels are supported, such as `all` or `finest`.

## Accessing Kubernetes container logs

Container logs for DX applications can be accessed individually or collectively, as described in the following subsections. Logs for DX Core and Remote Search are accessed differently from other applications, as those pods have multiple containers to provide access to additional logs.

## Accessing DX Core logs

To access a Core application log, use the command:

```
kubectl logs -n <namespace>
        <core-pod-name> <sidecar-container-name>
```

For example:

```
kubectl logs -n dxns
        dx-deployment-core-0 system-err-log
```

This retrieves the log for a single sidecar container, which corresponds to a single Core log file.

!!!note
    The additional logging enabled for Core goes to trace.log. To configure trace.log for sidecar logging, see [Configure Core sidecar logging](../../../install/container/helm_deployment/preparation/optional_tasks/optional_core_sidecar_log.md).
    Setting the trace strings when logged into the PortalServer or in the WAS console is supported. For more information, see [System event logging](../../../manage/troubleshooting/logging_and_tracing/adsyslog.md).

By default, two sidecar containers are launched with Core:

-   `system-out-log` - Exposes the `WebSphere_Portal/SystemOut.log` file.
-   `system-err-log` - Exposes the `WebSphere_Portal/SystemErr.log` file.

For information on configuring additional Core sidecar log containers, please see [Configure Core sidecar logging](../../../install/container/helm_deployment/preparation/optional_tasks/optional_core_sidecar_log.md).

## Accessing Remote Search logs

To access a Remote Search application log, use the command:

```
kubectl logs -n <namespace>
      <remote-search-pod-name> <sidecar-container-name>
```

For example:

```
kubectl logs -n dxns
      dx-deployment-remote-search-0 system-err-log
```

This retrieves the log for a single sidecar container, which corresponds to a single Remote Search log file.

!!!note
    The additional logging enabled for Remote Search goes to trace.log. To configure trace.log for sidecar logging, see [Configure Remote Search sidecar logging](../../../install/container/helm_deployment/preparation/optional_tasks/optional_core_sidecar_log.md).

By default, two sidecar containers are launched with Remote Search:

-   `system-out-log` - Exposes the `WebSphere_Portal/SystemOut.log` file.
-   `system-err-log` - Exposes the `WebSphere_Portal/SystemErr.log` file.

For information on configuring additional Remote Search sidecar log containers, please see [Configure Remote Search sidecar logging](../../../install/container/helm_deployment/preparation/optional_tasks/optional_core_sidecar_log.md).

## Accessing Persistence Node logs

To access a Persistence Node application log, use the command:

```
kubectl logs -n <namespace>
    -f <persistence-node-pod-name> <sidecar-container-name>
```

For example:

```
kubectl logs -n dxns 
    -f pod/dx-deployment-persistence-node-0 persistence-repmgr-log
```

This retrieves the log for a single sidecar container, which corresponds to a single Persistence Node log file.

By default, one sidecar container is launched with Persistence Node:

-   `persistence-repmgr-log` - Exposes the `repmgr.log` file.

## Accessing logs for other applications

Other applications where only one container is deployed in the Pod, only provide a single log, which can typically be obtained using the command: `kubectl logs -n <namespace> <pod-name>` (omitting a container name), for example:

!!! warning 
    If the main pod name is only used and there are multiple containers an error prompt is returned.

    ```
    kubectl logs -n dxns dx-deployment-persistence-node-0
    ```

    > error: a container name must be specified for pod dx-deployment-persistence-node-0, choose one of: [persistence-node persistence-metrics-exporter persistence-repmgr-log prereqs-checker]

    The logs can then be requested from the desired container:

    ```
    kubectl logs -n dxns dx-deployment-persistence-node-0
        persistence-node
    ```


## Accessing all application logs simultaneously

All application logs from DX pods in a deployment can be combined into a single output using the command:

```
kubectl logs -n <namespace> -l release=<release-name> --tail=-1 --all-containers
```

where:

-   `namespace` - is the namespace in which your HCL Digital Experience deployment is installed.
-   `release-name` - is the Helm release name you used when installing. On UNIX-based operating systems, the output can be directed to a file for convenience by appending `> some-file-name` to the command.

## Default log output

The log output for a DX deployment is set to a non-verbose configuration by default.

|Application name|Default log settings|
|----------------|--------------------|
|Core|\*=info|
|Content Composer|api:server-v1:\*=info|
|Digital Asset Management|api:server-v1:\*=info,worker:server-v1:\*=info|
|Image Processor|api:server-v1:\*=info|
|Persistence Connection Pool|pgpool:=info|
|Persistence Node|psql:=info,repmgr:=info|
|Remote Search|\*=info|
|Ring API|api:server-v1:\*=info|
|Runtime Controller|controller:.\*=INFO,controller:com.hcl.dx.\*=INFO|
|HAProxy|haproxy:=info|

All applications send their log output directly to `stdout` and `stderr` of the corresponding container that they are running in. Besides that, the following applications also write their log output into a file that is available in the file system of the containers:

|Application name|Log location|
|----------------|------------|
|Core|/opt/HCL/wp\_profile/logs/WebSphere\_Portal and /opt/HCL/AppServer/profiles/cw\_profile/logs/server1|
|Remote Search|/opt/HCL/AppServer/profiles/prs\_profile/logs/server1|
|Persistence Node|/var/lib/pgsql/11/data/log and /var/lib/pgsql/11/data/dx/repmgr/log|

!!! note
    The Core and Remote Search have the following default settings for their log output files and that needs to be considered when sizing their persistent volumes:

|Output file|Size per file|Files kept|
|-----------|-------------|----------|
|SystemOut.log|5MB|3|
|SystemErr.log|5MB|3|
|trace.log|20MB|3|

The amount of logs that are stored per container in running the Pods depends on the configuration of your Kubernetes Cluster. Refer to the documentation of your cloud provider for further information.

Note that for all applications that do not write their logs separately to a file, the only source of historical log data is the Kubernetes logging.

We encourage the customers to process the logging of their Kubernetes Cluster in a separate logging solution of their choice.

## HCLSoftware U learning materials

To learn how to monitor, troubleshoot, and contact Support about issues you encounter with DX, go to [Monitoring and Troubleshooting](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3436){target="_blank”}. You can try it out using the [Monitoring and Troubleshooting Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Monitoring_and_Troubleshooting_Lab.pdf){target="_blank”} and corresponding [Monitoring and Troubleshooting Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Monitoring_and_Troubleshooting_Lab_Resources.zip){target="_blank”}.
