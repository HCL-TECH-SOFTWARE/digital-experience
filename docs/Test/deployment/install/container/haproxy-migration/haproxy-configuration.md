# HAProxy Configuration

!!!note
    When migrating from Ambassador, the default configuration of HAProxy matches the default configuration of Ambassador as close as possible.

    Any changes made to `scaling`, `resources`, `horizontalPodAutoScaler`, `annotations` or `labels` must be transferred to the appropriate configurations for HAProxy manually. 

HAProxy configurations for pod scaling and resource allocations can be adjusted as required in the `custom-values.yaml` file for the Helm deployment.
