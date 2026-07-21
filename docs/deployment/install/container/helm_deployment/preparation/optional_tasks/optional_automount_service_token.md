# Automount Service Account Token

By default, the DX deployment does not require API access to Kubernetes, with the exception of `runtimeController`. To support cluster security policies that restrict or require explicit service account token configuration, two Helm parameters are available.

## Parameters

### `automountServiceAccountToken`

Controls whether each pod's service account token is automatically mounted. This parameter is configured per component.

| Value | Behavior |
|---|---|
| *(empty / null)* | Field is omitted from the pod spec; Kubernetes default applies (token is mounted). |
| `true` | Field is explicitly set to `true` in the pod spec. Use this to satisfy policies that require an explicit declaration. |
| `false` | Field is explicitly set to `false`; the token is not mounted into the pod. |

### `configuration.runtimeController.projectedServiceAccountToken`

Provides a manual projected token volume for `runtime-controller` when auto-mount is disabled. This ensures `runtime-controller` retains access to the Kubernetes API even when `automountServiceAccountToken` is set to `false`.

| Parameter | Type | Default | Description |
|---|---|---|---|
| `enabled` | boolean | `false` | Adds the projected volume and mount to the `runtime-controller` pod. |
| `expirationSeconds` | integer | `3600` | Token lifetime in seconds. The kubelet rotates the token automatically before expiry. |
| `audience` | string | `""` | OIDC audience the token is issued for. Must match the value expected by your cloud provider. |

## Scenarios

### Scenario A — Policy requires an explicit `true` or `false` (most common)

If your cluster policy rejects pods where the `automountServiceAccountToken` field is absent but still permits `true`, set the field explicitly for each component:

```yaml
automountServiceAccountToken:
  <componentName>: true
```

No further changes are needed. `runtime-controller` continues to use its auto-mounted token normally.

### Scenario B — Strict policy where `true` is also disallowed

Some environments disallow `automountServiceAccountToken: true` entirely. In this case, you must set the field to `false` for all components, including `runtimeController`. However, `runtime-controller` still requires a token to communicate with the Kubernetes API. The chart handles this by mounting a projected service account token volume, so the application behavior is unaffected.

**Step 1** — Disable auto-mount for all pods, including `runtimeController`:

```yaml
automountServiceAccountToken:
  runtimeController: false
  # set false for all other components as required
```

**Step 2** — Enable the projected token volume for `runtime-controller`:

```yaml
configuration:
  runtimeController:
    projectedServiceAccountToken:
      enabled: true
      expirationSeconds: 3600
      audience: "<your-cloud-provider-audience>"
```

!!! warning
    Set `projectedServiceAccountToken.enabled: true` only when `automountServiceAccountToken.runtimeController` is explicitly `false`. Enabling it while auto-mount is active is redundant and results in two token volumes competing for the same mount path.

