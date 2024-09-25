# Custom fields

Custom fields are a way to extend the user profile with additional information that is not covered by the default properties. They can be added to allow the mapping of additional user data from external sources or to allow users to enrich their profiles with more information. Custom fields are typically of type string. They can be marked as required or optional, as read-only and/or as hidden. This steers the behavior of the UI and the API when interacting with the custom fields.

## Adding custom fields

Custom fields can be added in two different ways, which also relates to the intended use case for the custom field:

- As properties in the helm config: In case the custom fields are known during the initial setup of the People Service, they can be statically added to the helm config. This is the preferred way for custom fields that are known upfront and are not expected to change frequently. A common example would be values that are provisioned from an external system and are not expected to change.
- Dynamically through the People Service API or UI: In case the custom fields are not known upfront or should remain flexible to change, they can be added dynamically during run-time. This can be used to validate custom fields quickly or add new fields ad-hoc without the need to redeploy the People Service.

### Custom fields via properties

For more information on how to configure custom fields via properties in the helm config, see the [Configuration - user attribute settings](../deployment/configuration_parameters.md#user-attribute-settings) section.

For example, to add a custom field `customField1` to the user profile, the following environment variable can be set:

```yaml
extraEnvVars:
  - name: CUSTOM_FIELDS
    value: "customField1"
```

Custom fields via properties are only defined by their key and are initialized during the initial connection to the People Service persistence. In this stage, the custom fields are synced - i.e. either added or removed according to the configuration and the state of the persistence. The fields are initialized with default values if provided. Once they are added via configuration, they are exposed via the API and the UI and can be additionally configured to steer their behavior. Importantly, they can't be deleted (other then by removing them from the helm config and redeploying the People Service).
