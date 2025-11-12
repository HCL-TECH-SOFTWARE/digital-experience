# Probes configuration in values.yaml file

You can modify `liveness` and `readiness` probes such as the status thresholds and time values. However, you cannot configure the probe target values because they are specific to the application and the values must not be changed.

```yaml
# Liveness probe using the applications HTTP probe endpoint 
    livenessProbe:
      failureThreshold: 4
      initialDelaySeconds: 30
      periodSeconds: 30
      successThreshold: 1
      timeoutSeconds: 30
# Readiness probe using the applications HTTP probe endpoint
    readinessProbe:
      failureThreshold: 2
      initialDelaySeconds: 30
      periodSeconds: 30
      successThreshold: 1
      timeoutSeconds: 30
```

# Core probes configuration

Core offers additional flexibility for the probe configuration. In addition to the options listed above, Core provides a `customProbeURL` value as well as a configuration section for the `startup` probe.

If you want to configure probe target values, Core provides a `customProbeURL` value. This is a relative URL that you can use to overwrite the default probe target values.

```yaml
probes:
 core:
    # Liveness probe using the application shell based probe
    livenessProbe:
      failureThreshold: 6
      initialDelaySeconds: 0
      periodSeconds: 30
      successThreshold: 1
      timeoutSeconds: 10
      # You may add a custom URL, e.g., "/sample/url". The leading slash is required. The URL defaults to "/ibm/console" when this is empty. 
      customProbeURL: ""
    # Readiness probe using the application shell based probe
    readinessProbe:
      failureThreshold: 1
      initialDelaySeconds: 0
      periodSeconds: 30
      successThreshold: 1
      timeoutSeconds: 10
      # You may add a custom URL, e.g., "/sample/url". The leading slash is required. The URL defaults to the DX home page when this is empty.
      customProbeURL: ""
    # Startup probe using the application shell based probe
    startupProbe:
      failureThreshold: 4320
      initialDelaySeconds: 0
      periodSeconds: 10
      successThreshold: 1
      timeoutSeconds: 10
      # You may add a custom URL, e.g., "/sample/url". The leading slash is required. The URL defaults to the DX home page when this is empty.
      customProbeURL: ""
```

When the `customProbeURL` is empty, the default targets are used:

| Probe Type   | Default Target Value        |
|--------------|-----------------------------|
| Liveness     | `/ibm/console`              |
| Readiness    | Path created from `networking.core.contextRoot` and `.networking.core.home` (i.e., `/wps/portal`)    |
| Startup      | Path created from `networking.core.contextRoot` and `.networking.core.home` (i.e., `/wps/portal`)    |


!!!important
    - Carefully pick the values for `customProbeURL`, `timeoutSeconds`, and `initialDelaySeconds`. If the page referenced by the `customProbeURL` takes significant time to load while the DX server is initializing, the probe could fail repeatedly, leading to a restart loop. Refer to the [Kubernetes documentation](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes) for more details on what to consider when defining a probe.