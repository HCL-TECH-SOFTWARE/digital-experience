# Monitoring and logging

HCL People Service provides monitoring and logging capabilities to help you observe and troubleshoot your deployment. This section provides an overview of the monitoring and logging features available in the People Service.

In general, kubernetes logging capabilities are used to collect and store logs from the People Service. Customers are able to configure the logging level and leverage the logging sidecar containers to collect purpose-specific logs. The monitoring capabilities can optionally be extended with additional tools (e.g., Logstash) to provide more advanced log processing and analysis.

## Checking the logs

To check the logs of the People Service, you can use the `kubectl logs` command. For example, to access the logs of the People Service, run:

```sh
kubectl logs -n <NAMESPACE> <PEOPLE_SERVICE_POD_NAME>
```

## Changing the log level

The People Service provides the ability to change the log level of the service. Internally, the People Services leverages the [debug](https://www.npmjs.com/package/debug) package to log messages.
The log level can be set by using the `logging.level` configuration parameter in the Helm chart. For example, to set the log level to `INFO`, set the following values in the Helm chart:

```yaml
logging:
  level: "INFO:people-service:*"
```

The debug module allows to set the log level for specific modules. The log level is defined as a string that consists of the log level, the module name, and an optional namespace. The log level can be set to one of the following values `ERROR`, `WARN`, `INFO`, or `DEBUG`. The module name can be identified from the log messages.

## Purpose-specific logs

People Service provides a logging sidecar container that can be used to collect purpose-specific logs. Refer to the [Logging sidecar container](./logging_sidecar_container.md) section for more information on how to enable and access the logs.
