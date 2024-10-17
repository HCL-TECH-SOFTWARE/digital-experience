# Setting the `hostAliases` for DX Pods

This topic documents the configuration of `hostAliases` for DX Pods. With the `hostAliases` field, you can add entries to the `/etc/hosts` file in the Pods. This is useful for setting up domain name system (DNS) names for other services in the cluster or for mapping hostnames to IP addresses.
For more information, refer to the Kubernetes documentation [Adding entries to Pod /etc/hosts with HostAliases](https://kubernetes.io/docs/tasks/network/customize-hosts-file-for-pods/){:target="_blank"}.

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

See the following sample configuration:

```yaml
hostAliases:
  core:
    - ip: "127.0.0.1"
    hostnames:
      - "localhost"
      - "myhost"
```
