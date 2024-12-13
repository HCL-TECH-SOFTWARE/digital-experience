# LDAP attribute mapping

Attribute mapping defines how corresponding data points between different sources and People Service are identified and translated. This ensures user information like names, emails, or IDs are accurately transferred while adhering to People Service's data structure.

## Configuring Attributes

The attribute mapping settings are defined in the [Configuration - LDAP configuration](../../deployment/configuration/index.md#ldap-configuration) page. Key configurations include:

- **ldap.attributeMapping**: Maps LDAP attributes to People Service user properties.
- **CUSTOM_FIELDS_BASE**: Base custom fields for the user profile. This is a comma-separated list of custom fields that are added to the user profile.
- **ldap.searchAttributes**: Specifies attributes fetched during sync.

Predefined static attributes and custom attributes are also available for configuration.

- **Static Attributes**: Predefined fields like `uid`, `email`, `firstName`, and `lastName` are mapped based on `ldap.attributeMapping` settings.
- **Custom Attributes**: Define additional attributes in **CUSTOM_FIELDS_BASE** for unique organizational needs, allowing flexibility in user provisioning.