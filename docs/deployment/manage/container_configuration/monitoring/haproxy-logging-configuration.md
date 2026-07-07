# HAProxy logging configuration

This topic outlines the HAProxy logging configuration you can use for your HCL Digital Experience (DX) deployments. The Helm chart uses an additive logging approach that maintains baseline log data while also allowing you to append custom HAProxy variables.

## Additive logging approach

The deployment uses standard baseline strings for predefined log levels, such as `INFO`, `WARN`, and `DEBUG`. To capture specific metrics such as custom HTTP headers, SSL cipher suites, or client IPs, you can can append custom variables to the end of the standard log line without modifying the base formatting.

## Configuring HAProxy logging

Configure these settings in the `values.yaml` file under the `logging.haproxy.level` array using a `key:=value` syntax.

Custom variables appended using `appendHttp:=` and `appendTcp:=` must strictly follow the native HAProxy custom log format. For a comprehensive list of supported format variables, fetchers, and log tags, refer to [HAProxy Configuration Manual - Custom Log Format](https://docs.haproxy.org/2.8/configuration.html#8.2.4){target="_blank"}.

The configuration supports the following parameters:

| Parameter key | Description | Example |
| :------------ | :---------- | :------ |
| `haproxy:=` | Sets the base verbosity level for the logs. | `haproxy:=debug` |
| `appendHttp:=` | Appends custom HAProxy format variables to Layer 7 (HTTP) traffic logs. | `appendHttp:=%{+Q}[ssl_c_s_dn]` |
| `appendTcp:=`| Appends custom HAProxy format variables to Layer 4 (TCP) traffic logs. | `appendTcp:=%ci:%cp` |

!!! note
    HTTP and TCP variables are decoupled to protect the HAProxy configuration. Ensure HTTP variables are applied only to `appendHttp` and TCP variables only to `appendTcp`.

Sample `values.yaml` configuration:

```yaml
logging:
  haproxy:
    level:
      - "haproxy:=info"                  # Sets base verbosity
      - "appendHttp:=%{+Q}[ssl_c_s_dn]"  # Appends to HTTP traffic
      - "appendTcp:=%ci:%cp"             # Appends to TCP traffic
```

The following examples demonstrate the expected log output based on the configured baseline levels and appended data.

- The `INFO` log level output shows the standard baseline HTTP log format, which includes backend routing, processing timers, status codes, and connection metrics:

    ```text
    [09/Jun/2026:09:50:03.135] dx core-dx-home/core-dx-home1 0/0/3/84/87 302 586 - - --IR 2/1/0/0/0 0/0 "GET /wps/myportal HTTP/1.1"
    ```

- The `WARN` log level output shows a condensed format that omits backend routing and timer details:

    ```text
    [09/Jun/2026:09:53:25.771] dx 302 364 --VN "GET /wps/portal HTTP/1.1"
    ```

- The DEBUG log level output uses the standard baseline format but adds the client IP address and source port to the beginning of the log line:

    ```text
    192.168.47.152:59894 [09/Jun/2026:09:51:35.969] dx core-dx-home/core-dx-home1 0/0/1/37/38 302 364 - - --VN 1/1/0/0/0 0/0 "GET /wps/portal HTTP/1.1"
    ```

- The additive output configuration shows the standard `INFO` baseline format with the custom `appendHttp` SSL string appended to the end of the line:

    ```text
    [09/Jun/2026:09:50:03.135] dx core-dx-home/core-dx-home1 0/0/3/84/87 302 586 - - --IR 2/1/0/0/0 0/0 "GET /wps/myportal HTTP/1.1" "CN=my-custom-cert,O=HCL"
    ```

## Crash protection and validation

Raw HAProxy configuration strings require precise syntax. To ensure system stability, a validation fallback is integrated into the live-reload architecture. When you update the `values.yaml` file, the system tests the custom append strings before applying them. If the system detects an invalid HAProxy variable, the system rejects the change, logs a critical alert, and reverts to the baseline defaults. This validation prevents pod crashes resulting from configuration errors.
