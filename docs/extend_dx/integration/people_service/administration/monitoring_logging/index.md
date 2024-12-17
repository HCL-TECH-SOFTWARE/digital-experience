# Monitoring and logging

People Service provides monitoring and logging capabilities to help you observe and troubleshoot your deployment. This section provides an overview of the monitoring and logging features available in People Service.

Kubernetes logging capabilities are used to collect and store logs from People Service. Customers can configure the logging level and leverage the logging sidecar containers to collect purpose-specific logs. Optionally, the monitoring capabilities can be extended with additional tools such as Logstash to provide more advanced log processing and analysis.

## Checking the logs

To check People Service logs, use the `kubectl logs` command. For example:

```sh
kubectl logs -n <NAMESPACE> <PEOPLE_SERVICE_POD_NAME>
```

## Changing the log level

People Service allows users to change the log level of the service. It leverages the [debug](https://www.npmjs.com/package/debug) package to log messages.
You can set the log level using the `logging.level` configuration parameter in the Helm chart. For example, to set the log level to `INFO`, set the following values in the Helm chart:

```yaml
logging:
  level: "INFO:people-service:*"
```

The debug module allows you to set the log level for specific modules. You can identify the module name from log messages. The log level is defined as a string that consists of the log level, the module name, and an optional namespace. You can set the log level value to  `ERROR`, `WARN`, `INFO`, or `DEBUG`.

## Purpose-specific logs

People Service provides a logging sidecar container that can be used to collect purpose-specific logs. Refer to [Using the logging sidecar container](./logging_sidecar_container.md) for more information on how to enable and access the logs.
