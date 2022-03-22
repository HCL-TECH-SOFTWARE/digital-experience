# Configure and access logs in Helm

This topic shows you how to configure logging in Helm, as well as how to access Kubernetes container logs.

HCL Digital Experience logs are important for maintaining and troubleshooting both environments and custom applications. These logs frequently form part of the essential information requested by HCL Support to diagnose issues. In a Helm-based deployment of DX, logs are exposed as Kubernetes container logs which give a consistent mechanism for retrieving the logs of different components, as well as making them consumable by cluster-level logging solutions in Kubernetes.

## Configure logging

In CF200, a new mechanism is introduced for configuring log settings at runtime \(without pod restarts\) in Helm-based DX deployments. Log levels and trace strings are set in your custom-values.yaml file and applied using a `helm upgrade`command. Under the covers, this sets values in a new `<release-name>-global`config map which are monitored by the various running DX containers. When the containers detect a change to the values pertinent to themselves, they update their log configurations accordingly \(without restarting\). At that point, the new log behavior is immediately reflected in their Kubernetes logs.

**Note:** OpenLDAP, Ambassador, and Redis are not yet configurable using this feature.

## Setting the log configuration for a DX application

You can set a desired log configuration for a DX application by specifying an appropriate log string in your Helm custom-values.yaml file. Place the log string in the `level` property for the specified application. These properties are found in the `logging` subsection of the `incubator` section. For example, to set the configuration for Content Composer, use the following property:

```
incubator:
  logging:
    # Content Composer specific logging configuration
    contentComposer:
      level: "api:server-v1:*=info"
```

You can see the string format in the following section. Once the property is set, run the `helm upgrade` command.

## Log configuration string format

Log configuration strings \(the values set in the `level` properties of the custom-values.yaml\) use the following common format, where multiple trace settings for the same application are separated by commas:

```
<component>:<pattern>=<log-level>,<component>:<pattern>=<log-level>
```

-   `component` - represents a subsystem of the application and must be from a limited list per application \(see the following examples\).
-   `pattern` - describes the specific component area to log \(for example, a Java package\).
-   `log-level` - defines the granularity at which logging is enabled \(see later for permitted levels\).

The exact format of `pattern` depends on the configured application. The appropriate values are provided by HCL Support, if you are asked to enable tracing as part of a case. Some examples of log configuration strings for different DX applications are given as follows:

**DX Core example**:

```
wp_profile:com.hcl.App=info,wp_profile:com.hcl.util.Data=finest
```

**Digital Asset Management example**:

```
api:server-v1:dist=info,worker:server-v1:dist=info,api:server-v1:dist:server=debug
```

## Supported application and component names

Following are the supported application and component names, where the application names are the subsections under `logging` in the custom-values.yaml:

|Application|Component names|
|-----------|---------------|
|`core`|`wp_profile`, `cw_profile`|
|`contentComposer`|`api`|
|`designStudio`|`api`|
|`digitalAssetManagement`|`api`, `worker`|
|`imageProcessor`|`api`|
|`persistenceConnectionPool`|`pgpool`|
|`persistenceNode`|`psql`, `repmgr`|
|`remoteSearch`|`prs_profile`|
|`ringApi`|`api`|
|`runtimeController`|`controller`|

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

**Note:** The additional logging enabled for Core goes to trace.log. To configure trace.log for sidecar logging, see [Configure Core sidecar logging](helm_additional_tasks.md#configure_core_sidecar_logging).

By default, two sidecar containers are launched with Core:

-   `system-out-log` - Exposes the `WebSphere_Portal/SystemOut.log` file.
-   `system-err-log` - Exposes the `WebSphere_Portal/SystemErr.log` file.

For information on configuring additional Core sidecar log containers, please see [Configure Core sidecar logging](helm_additional_tasks.md#configure_core_sidecar_logging).

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

**Note:** The additional logging enabled for Remote Search goes to trace.log. To configure trace.log for sidecar logging, see [Configure Remote Search sidecar logging](helm_additional_tasks.md#configure_rs_sidecar_logging).

By default, two sidecar containers are launched with Remote Search:

-   `system-out-log` - Exposes the `WebSphere_Portal/SystemOut.log` file.
-   `system-err-log` - Exposes the `WebSphere_Portal/SystemErr.log` file.

For information on configuring additional Remote Search sidecar log containers, please see [Configure Remote Search sidecar logging](helm_additional_tasks.md#configure_rs_sidecar_logging).

## Accessing logs for other applications

Applications other than Core and Remote Search do not have logging sidecar containers and only provide a single log per pod, which can typically be obtained using the command: `kubectl logs -n <namespace> <pod-name>` \(omitting a container name\), for example:

```
kubectl logs -n dxns
      dx-deployment-digital-asset-management-0
```

This is not the case for Persistence Node pods, which have non-logging sidecar containers \(for metrics gathering\). For these pods, you must append the main container name \(`persistence-node`\) when accessing the log, for example:

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
|Design Studio|api:server-v1:\*=info|
|Digital Asset Management|api:server-v1:\*=info,worker:server-v1:\*=info|
|Image Processor|api:server-v1:\*=info|
|Persistence Connection Pool|pgpool:=info|
|Persistence Node|psql:=info,repmgr:=info|
|Remote Search|\*=info|
|Ring API|api:server-v1:\*=info|
|Runtime Controller|controller:.\*=INFO,controller:com.hcl.dx.\*=INFO|

All applications send their log output directly to `stdout` and `stderr` of the corresponding container that they are running in. Besides that, the following applications also write their log output into a file that is available in the file system of the containers:

|Application name|Log location|
|----------------|------------|
|Core|/opt/HCL/wp\_profile/logs/WebSphere\_Portal and /opt/HCL/AppServer/profiles/cw\_profile/logs/server1|
|Remote Search|/opt/HCL/AppServer/profiles/prs\_profile/logs/server1|
|Persistence Node|/var/lib/pgsql/11/data/log and /var/lib/pgsql/11/data/dx/repmgr/log|

**Note:** The Core and Remote Search have the following default settings for their log output files and that needs to be considered when sizing their persistent volumes:

|Output file|Size per file|Files kept|
|-----------|-------------|----------|
|SystemOut.log|5MB|3|
|SystemErr.log|5MB|3|
|trace.log|20MB|3|

The amount of logs that are stored per container in running the Pods depends on the configuration of your Kubernetes Cluster. Refer to the documentation of your cloud provider for further information.

Note that for all applications that do not write their logs separately to a file, the only source of historical log data is the Kubernetes logging.

We encourage the customers to process the logging of their Kubernetes Cluster in a separate logging solution of their choice.

**Parent topic:**[Troubleshooting your Helm deployment](../containerization/helm_troubleshooting.md)

