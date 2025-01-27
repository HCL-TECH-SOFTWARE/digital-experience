# Probes Configuration in values.yaml file

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

If you want to configure probe target values, Core provides a `customProbeURL` value.  This is a relative URL that you can use to overwrite the default `liveness` probe target value.

```yaml
# The liveness probe for Core provides a customProbeURL value. 
# You may add a custom relative URL, e.g., "/sample/url". 
  core:  
    livenessProbe:
      failureThreshold: 4
      initialDelaySeconds: 30
      periodSeconds: 30
      successThreshold: 1
      timeoutSeconds: 30
      customProbeURL: "/sample/url"
```

When the `customProbeURL` is empty, the `liveness` probe target value for Core is `"/ibm/console"` by default.

```yaml
# The liveness probe target value for Core in this case is "/ibm/console"
      customProbeURL: ""
```

!!!warning
    Setting the probe URL to a path that is slow or not reliable can cause the pod to restart. Change the path only if it's necessary for your specific use case. 

!!!note
    Carefully pick the customProbeURL, timeoutSeconds and initialDelaySeconds. If the page referenced by the probeURL takes significant time to load while the DX server is initializing, the probe could fail repeatedly, leading to a restart loop.
    
    Please check the [Kubernetes documentation](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes) for further details on what to consider when defining a liveness probe.

You can find information about the configuration options in the [Kubernetes documentation](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes){target="_blank"}.