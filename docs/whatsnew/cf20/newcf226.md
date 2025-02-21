# What's new in CF226

The following features and updates are available to customers installing HCL Digital Experience (DX) Container Update CF226 on supported platforms:

**All Digital Experience Versions (8.5, 9.0, 9.5)**

**Digital Experience 8.5 and 9.0 Versions**

- Extended Support option now available for DX versions 8.5 and 9.0
- Automatically apply 9.5 from a later CF installation

**Digital Experience 9.5 Container Version**

- Notice of deprecation of non-OCI-based registry for Harbor Helm chart repository
- Removal of automated Pod restart on ConfigMap updates
- RingAPI - Extending the trust store

## Digital Experience 9.5 Container Version

### RingAPI - Extending the trust store

=== "Containers"
    DX 9.5 Container Update CF226 adds capability to add additional certificate authorities to the trust store. This enables support for self-signed certificates in hybrid deployments. For more information, see [Adding additional CA to the trust store of DAM or RingAPI](../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-additonal-ca.md).