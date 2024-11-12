# Probes Configuration in values.yaml file

The `liveness` and `readiness` probes such as the status thresholds and time values can be modified. The probe target values are not configurable anymore because they are application specific and the values must not be changed. 

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

There is one exception to probe target values being unconfigurable: CORE provides a customProbeURL value which allows its liveness probe target value to be configured.
```yaml
# The liveness probe for CORE provides a customProbeURL value. 
# You may add a custom URL, e.g., "/sample/url". The leading slash is required. 
  core:  
    livenessProbe:
      failureThreshold: 4
      initialDelaySeconds: 30
      periodSeconds: 30
      successThreshold: 1
      timeoutSeconds: 30
      customProbeURL: "/sample/url"
```

When customProbeURL is empty, the liveness probe target value for CORE defaults to "/ibm/console".
```yaml
# The liveness probe target value for Core in this case is "/ibm/console"
      customProbeURL: ""
```

Information about the configuration options can be found in the [Kubernetes documentation](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#configure-probes).