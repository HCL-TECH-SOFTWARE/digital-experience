# How to enable the validation of friendly URLs for web content

Learn about the properties and values that are required in WP Configuration Service Resource Environment Provider to validate friendly URLs for web content.

Before you enable the validation of friendly URLs, verify that your portal server supports friendly URLs that contain path information to a content item as part of the URI. Verify the following properties and values in the WP Configuration Service:

-   friendly.enabled is set to `true`.
-   friendly.pathinfo.enabled is set to `true`.
-   friendly.pathinfo.invalid is set to `false`.

If the previous properties are not set to the specified values, your portal server does not use friendly URLs for web content and validation of friendly URLs is not possible.

To enable the validation of friendly URLs for web content, set the friendly.pathinfo.validation.enabled property to `true` in the WP Configuration Service Resource Environment Provider. For more information about the friendly.pathinfo.validation.enabled property and the properties that are required to support friendly URLs, see [How to validate friendly URLs for web content](../validate_friendlyurl/index.md) and [Configuration Service](../../../../../../deployment/manage/config_portal_behavior/service_config_properties/portal_svc_cfg/) for more information.

