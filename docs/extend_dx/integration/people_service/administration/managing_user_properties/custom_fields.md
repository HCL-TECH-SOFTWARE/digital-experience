# Custom fields

Custom fields are added to improve user profiles using additional information not covered by the default properties. You can use them to allow additional user data mapping from external sources or allow users to enrich their profiles with more information. Custom fields are string-type data that can be marked as required or optional and read-only or hidden. This steers the behavior of the UI and API when interacting with the custom fields.

## Adding custom fields

Custom fields can be added through the Helm configuration or the People Service API/UI:

- Helm configuration: If you have custom fields you want to add during the initial setup of People Service, you can add them statically to the Helm configuration. Use this method if your custom fields are not expected to change frequently, such as values provisioned from an external system.
- People Service API/UI: If you have custom fields you want to add after the initial setup, you can add them dynamically during runtime. Use this method if your custom fields are expected to change and should remain flexible. With this method, you can add and validate custom fields quickly without needing to redeploy People Service.

### Configuring custom fields through the Helm configuration

For more information on how to configure custom fields through the properties in the Helm configuration, refer to [Configuration - user attribute settings](../../deployment/configuration/index.md).

For example, to add a custom field `customField1` to the user profile, set the following environment variable as follows:

```yaml
extraEnvVars:
  - name: CUSTOM_FIELDS
    value: "customField1"
```

Custom fields configured through the properties in the Helm configuration are only defined by their key and are initialized during the initial connection to the People Service persistence. In this stage, the custom fields are synced (either added or removed) according to the configuration and the state of the persistence. The fields are initialized with default values if provided. Once they are added in the configuration, they are exposed to the API and UI and can be additionally configured to steer their behavior. You cannot delete the fields without removing them from the Helm configuration and redeploying People Service.
