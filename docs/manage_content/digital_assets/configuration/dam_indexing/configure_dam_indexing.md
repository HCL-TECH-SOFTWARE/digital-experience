# Configuring DAM Indexing

This page contains instructions on how to add configurations of the OpenSearch middleware and enable DAM indexing.

## Prerequisite

OpenSearch must be enabled.

## Adding OpenSearch Middleware Configurations to Enable DAM Indexing

Go to the `values.yaml` file and refer to the following Helm values to add configurations of OpenSearch middleware:

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

## Enabling DAM indexing

After configuring the OpenSearch middleware, run the following `helm upgrade` command to enable indexing in DAM:

```
helm -n dxns upgrade -f ./install-deploy-values.yaml dx-deployment ./install-hcl-dx-deployment
```
