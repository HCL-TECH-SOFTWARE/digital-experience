# Configuring DAM Indexing

This page contains instructions for configuring the indexing processes available in DAM.

## Prerequisites

- The OpenSearch Middleware must be enabled.

Here's the helm values for configuring Search middleware which is present in `values.yaml`.

```yaml
configuration:
    searchMiddleware:
        # Enable/Disable Search Middleware
        enabled: true
        # Host of Search Middleware
        host: ""
        # Port of Search Middleware
        port:
        # Setting if SSL is enabled for Search Middleware
        ssl: false
        # Username of the push administrator
        pushAdminUser: "pushadmin"
        # Password of the push administrator
        pushAdminPassword: "adminpush"
        # Provide a custom secret that will be used to set credentials for push administration
        # If customPushAdminSecret is provided then pushAdminUser & pushAdminPassword values are ignored
        customPushAdminSecret: ""
        # Content Source ID of DAM
        damContentSourceId: ""
```

The `damContentSourceId` can be created by using the `POST` `/contentsources` endpoint from the Search middleware service.

```json
{
    "type": "dam",
    "name": "dam",
    "aclLookupHost": "http://your-domain.com"
}
```
