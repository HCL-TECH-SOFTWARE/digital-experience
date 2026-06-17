# HAProxy Logging Configuration

This document outlines the HAProxy logging configuration for DX deployments. The Helm chart utilizes an **Additive Logging Approach**. This architecture maintains guaranteed baseline log data while providing the flexibility to append custom HAProxy variables.


## Additive Logging Approach

Instead of replacing the entire log format string, the deployment uses standard baseline strings for predefined log levels (INFO, WARN, DEBUG). To capture specific metrics—such as custom HTTP headers, SSL cipher suites, or client IPs—administrators can append custom variables to the end of the standard log line without modifying the base formatting.


## Configuration Guide

These settings are configured in the `values.yaml` file under the `logging.haproxy.level` array using a `key:=value` syntax.

### Supported Parameters

| Parameter Key | Description | Valid Input Example |
| :--- | :--- | :--- |
| **`haproxy:=`** | Sets the base verbosity level for the logs. | `haproxy:=debug` |
| **`appendHttp:=`** | Appends custom variables to Layer 7 (HTTP) traffic logs. | `appendHttp:=%{+Q}[ssl_c_s_dn]` |
| **`appendTcp:=`** | Appends custom variables to Layer 4 (TCP) traffic logs. | `appendTcp:=%ci:%cp` |

> **Note:** HTTP and TCP variables are decoupled to protect the HAProxy configuration. Ensure HTTP variables are applied only to `appendHttp` and TCP variables only to `appendTcp`.

### `values.yaml` Example

```yaml
logging:
  haproxy:
    level:
      - "haproxy:=info"                  # Sets base verbosity
      - "appendHttp:=%{+Q}[ssl_c_s_dn]"  # Appends to HTTP traffic
      - "appendTcp:=%ci:%cp"             # Appends to TCP traffic
```


## Log Output Examples

The following examples demonstrate the expected log output based on the configured baseline levels and appended data.

* **INFO (Default Baseline - Standard routing data):**
    `[09/Jun/2026:09:50:03.135] dx core-dx-home/core-dx-home1 0/0/3/84/87 302 586 - - --IR 2/1/0/0/0 0/0 "GET /wps/myportal HTTP/1.1"`
* **WARN (Reduced Noise):**
    `[09/Jun/2026:09:53:25.771] dx 302 364 --VN "GET /wps/portal HTTP/1.1"`
* **DEBUG (High Verbosity - Exposes Client IP & Port):**
    `192.168.47.152:59894 [09/Jun/2026:09:51:35.969] dx core-dx-home/core-dx-home1 0/0/1/37/38 302 364 - - --VN 1/1/0/0/0 0/0 "GET /wps/portal HTTP/1.1"`
* **Additive Output (INFO Base + `appendHttp` SSL String):**
    `[09/Jun/2026:09:50:03.135] dx core-dx-home/core-dx-home1 0/0/3/84/87 302 586 - - --IR 2/1/0/0/0 0/0 "GET /wps/myportal HTTP/1.1" "CN=my-custom-cert,O=HCL"`


## Crash Protection and Validation

Raw HAProxy configuration strings require precise syntax. To ensure system stability, a validation fallback is integrated into the live-reload architecture. When `values.yaml` is updated, the system tests the custom append strings prior to application. 
If an invalid HAProxy variable is detected, the system rejects the change, logs a critical alert, and reverts to the baseline defaults. This prevents pod crashes resulting from configuration errors.