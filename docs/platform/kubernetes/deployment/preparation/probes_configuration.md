# Probes configuration in values.yaml file

The liveness and readiness probes can be coonfigured by the customers, i.e the threshold, timing values etc can be modified. The httpGet parameters, such as path, port and scheme which was previously present in values.yaml has been removed and is not configurable anymore.


```
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
