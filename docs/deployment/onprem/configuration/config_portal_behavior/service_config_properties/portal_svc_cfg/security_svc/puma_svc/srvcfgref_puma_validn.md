# Puma Validation Service

The portal PUMA Validation Service contains the configuration properties for the validation component of PUMA.

In the WebSphere® Integrated Solutions Console, the portal Puma Validation Service is listed as **WP ValidationService**.

## Properties for user validation

-   **user.YOURATTRIBUTE.min = \(1\)**

    Defines the minimum number of characters that is allowed for the defined `*YOURATTRIBUTE*`. The default is `1`.

-   **user.YOURATTRIBUTE.max = \(60\)**

    Defines the maximum number of characters that is allowed for the defined `*YOURATTRIBUTE*`. The default is `60`.

-   **user.YOURATTRIBUTE.charset = \(ascii\)**

    Defines the character set against which characters are validated. Supported values are `ascii` and `unicode`. The default is `ascii`.

-   **user.YOURATTRIBUTE.extra\_chars = \( -.\_ \)**

    Defines extra special characters that are not in the supported character set, but should be treated as valid. By default, the dash, period, and underscore are valid: `- . _`


**Note:** The `YOURATTRIBUTE` portion of the property needs to be spelled in uppercase.

**Note:** Some attributes need to be named as listed here: `GIVEN_NAME`, `SN`, `MAIL`.

The following sections show example sets of properties with attributes. They follow the same pattern as the set described in here. The example properties are set to the default values.

## Settings for the attribute `user.fbadefault.filter` defined in the Puma Store Service

The following example set of properties shows the settings for the attribute `user.fbadefault.filter` defined in the Puma Store Service:

-   **user.UNIQUEID =**

    For this property, specify the value of the `user.fbadefault.filter` attribute that is defined in the Puma Store Service.

-   **user.UNIQUEID.min = 1**



-   **user.UNIQUEID.max = 60**



-   **user.UNIQUEID.charset = ascii**



-   **user.UNIQUEID.extra\_chars = -.\_**




## Properties for group validation

The following example set shows the settings for the attribute `group.fbadefault.filter` defined in the Puma Store Service:

-   **group.RDN=**

    For this property, specify the value of the `group.fbadefault.filter` attribute that is defined in the portal Puma Store Service. For more information, go to the topic about the portal Puma Store Service.

-   **group.RDN.min = 1**



-   **group.RDN.max = 200**



-   **group.RDN.extra\_chars = -,\_**




## Properties for password validation

Unlike the properties that are listed earlier, the properties for password validation do not require any uppercase spelling.

-   **password.min\_characters = 5**



-   **password.max\_characters = 60**



-   **password.charset = ascii**



-   **password.extra\_chars = -.\_**




**Parent topic:**[Puma Store and Validation Services](../admin-system/srvcfgref_puma.md)

