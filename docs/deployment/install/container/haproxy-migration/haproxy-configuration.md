# HAProxy configuration

!!!note
    When migrating from Ambassador, the default configuration of HAProxy matches the default configuration of Ambassador as close as possible.

    Any changes made to `scaling`, `resources`, `horizontalPodAutoScaler`, `annotations` or `labels` must be transferred to the appropriate configurations for HAProxy manually. 

## Scaling

Three replicas of the HAProxy Pod are created by default, and this value can be adjusted in the `custom-values.yaml` file for the Helm deployment.

```yaml
scaling:
  # The default number of replicas per application
  replicas:
    haproxy: 3 # Change this value as per the number of replicas required for HAProxy.
```

## Resources

HAProxy is set to use the following resource allocation values by default. The values can be adjusted as required in the `custom-values.yaml` file for the Helm deployment.

```yaml
resources:
  # HAProxy resource allocation
  haproxy:
    requests:
      cpu: "1000m"
      memory: "1G"
    limits:
      cpu: "2000m"
      memory: "4G"
```
