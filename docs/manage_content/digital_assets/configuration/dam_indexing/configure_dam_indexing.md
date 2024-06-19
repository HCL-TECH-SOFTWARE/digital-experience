# Configuring DAM Indexing

This page contains instructions for configuring the indexing processes available in DAM.

The OpenSearch middleware must be enabled. Go to the `values.yaml` file and refer to the following Helm values to configure OpenSearch middleware:

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
        # This is needed for indexing to work in DAM
        damContentSourceId: ""
```

You can create the `damContentSourceId` by using the `POST` `/contentsources` endpoint from the OpenSearch middleware service:

```json
{
    "type": "dam",
    "name": "dam",
    "aclLookupHost": "http://your-domain.com"
}
```

Once the configuration is updated, run the `helm upgrade` command and it will enable indexing in DAM.
```
helm -n dxns upgrade -f ./install-deploy-values.yaml dx-deployment ./install-hcl-dx-deployment
```
