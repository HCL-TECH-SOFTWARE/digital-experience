# Managing service account token automounting

By default, most HCL DX components operate without direct access to the Kubernetes API. The `runtimeController` component is an exception as it requires API access to monitor pod statuses, apply dynamic runtime updates, and manage license validation across the cluster.

To enforce the principle of least privilege, cluster security policies frequently restrict automatic service account token mounting. These policies mitigate privilege escalation risks by requiring explicit boolean declarations (`true` or `false`) or by prohibiting automatic token mounting entirely across all workloads. Two Helm parameters are available to support these security policies.

## Parameters

- `automountServiceAccountToken` controls whether each pod's service account token is automatically mounted into its container. This parameter is configured per component.

    | Value | Behavior |
    |-------|----------|
    | Empty or null | Mounts the token by default. |
    | `true` | Enables token mounting in the pod specification to satisfy policies requiring boolean declarations. |
    | `false` | Disables token mounting in the pod specification. |

- `configuration.runtimeController.projectedServiceAccountToken` provides a projected token volume for the `runtime-controller` pod when `automountServiceAccountToken` is set to `false`, ensuring the pod retains Kubernetes API access.

    | Parameter | Type | Default | Description |
    |-----------|------|---------|-------------|
    | `enabled` | boolean | `false` | Adds the projected volume and mount to the `runtime-controller` pod. |
    | `expirationSeconds` | integer | `3600` | Token lifetime in seconds. The kubelet rotates the token automatically before expiry. |
    | `audience` | string | `""` | OpenID Connect (OIDC) audience for the issued token. Must match the audience expected by the cloud provider. |

## Configuring token settings for cluster security policies

Select the configuration approach that aligns with your cluster security requirements.

### Setting explicit boolean token values

If your cluster policy rejects pods where the `automountServiceAccountToken` field is absent but still permits `true`, set the field explicitly for each component to ensure `runtime-controller` continues to use its automounted token normally.

```yaml
automountServiceAccountToken:
  <componentName>: true
```

### Disabling token automounting with projected tokens

If your environment prohibits setting `automountServiceAccountToken` to `true`, set the field to `false` for all components, including `runtimeController`. The chart mounts a projected service account token volume to maintain Kubernetes API access.

1. Disable automount for all pods, including `runtimeController`:

    ```yaml
    automountServiceAccountToken:
      runtimeController: false
      # set false for all other components as required
    ```

2. Enable the projected token volume for `runtime-controller`:

    ```yaml
    configuration:
      runtimeController:
        projectedServiceAccountToken:
          enabled: true
          expirationSeconds: 3600
          audience: "<your-cloud-provider-audience>"
    ```

!!! warning
    Set `projectedServiceAccountToken.enabled` to `true` only when `automountServiceAccountToken.runtimeController` is set to `false`. Enabling it while automount is active is redundant and results in two token volumes competing for the same mount path.
