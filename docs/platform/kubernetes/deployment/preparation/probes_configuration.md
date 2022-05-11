# Probes configuration in values.yaml file

The liveness and readiness probes can be configured, i.e the threshold, timing values etc can be modified. The probe targets were removed from the configuration as they are application specific and should not be changed and is not configurable anymore.

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
