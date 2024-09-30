# Set the `hostAliases` for DX Pods

This topic documents the configuration of `hostAliases` for DX Pods. The `hostAliases` field allows you to add entries to the `/etc/hosts` file in the Pods. This is useful for setting up DNS names for other services in the cluster or for mapping hostnames to IP addresses.
For more information refer to the [Kubernetes documentation](https://kubernetes.io/docs/tasks/network/customize-hosts-file-for-pods/.

```yaml
hostAliases:
  contentComposer: []
  core: []
  damPluginGoogleVision: []
  digitalAssetManagement: []
  imageProcessor: []
  openLdap: []
  persistenceNode: []
  persistenceConnectionPool: []
  remoteSearch: []
  ringApi: []
  runtimeController: []
  haproxy: []
  licenseManager: []
  damPluginKaltura: []
```

Example:

```yaml
hostAliases:
  core:
    - ip: "127.0.0.1"
    hostnames:
      - "localhost"
      - "myhost"
```
