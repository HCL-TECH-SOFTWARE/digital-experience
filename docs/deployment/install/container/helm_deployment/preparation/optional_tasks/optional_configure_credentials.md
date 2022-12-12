# Configure Credentials
HCL Digital Experience 9.5 uses several credentials in its deployment to manage access between applications and from outside the container deployment.

## Adjusting default credentials

You can adjust the default credentials that HCL Digital Experience 9.5 is using by adding the following syntax to your custom-values.yaml file and changing the values you need:

```yaml
# Security related configuration, e.g. default credentials
security:
  # Security configuration for Core
  core:
    # Credentials used for IBM WebSphere Application Server administrative access.
    # The credentials defined in these values define the WebSphere Application Server's primary administrative user. The user gets created if necessary and/or the password is set to the current value.
    # - If the WAS admin credentials were changed by any other means than through the helm values, the currently active credentials need to be entered as the values for wasUser and wasPassword.
    # - If a LDAP is used, the WebSphere Application Server admin user has never applied automatically and LDAP has the authority over the credentials. Whenever the credentials are changed in LDAP, the values for wasUser and wasPassword need to be manually updated accordingly.
    wasUser: "wpsadmin"
    wasPassword: "wpsadmin"
    # Credentials used for HCL Digital Experience Core administrative access.
    # The credentials defined in these values define the HCL Digital Experience Core administrative user. The user gets created if necessary and/or the password is set to the current value.
    # - If a LDAP is used, the HCL Digital Experience Core admin user has never applied automatically and LDAP has the authority over the credentials. Whenever the credentials are changed in LDAP, the values for wpsUser and wpsPassword need to be manually updated accordingly.
    wpsUser: "wpsadmin"
    wpsPassword: "wpsadmin"
  # Security configuration for Digital Asset Management
  digitalAssetManagement:
    # Credentials used by Digital Asset Management to access the persistence database.
    dbUser: "REDACTED"
    dbPassword: "REDACTED"
    # Credentials used by the persistence database to perform replication between database nodes.
    replicationUser: "REDACTED"
    replicationPassword: "REDACTED"
  # Security configuration for Open LDAP
  openLdap:
    # Admin user for Open LDAP, can not be adjusted currently.
    ldapUser: "REDACTED"
    # Admin password for Open LDAP
    ldapPassword: "REDACTED"
  # Security configuration for Remote Search
  remoteSearch:
    # Credentials used for IBM WebSphere Application Server administrative access.
    # The credentials defined in these values define the WebSphere Application Server's primary administrative user. The user gets created if necessary and/or the password is set to the current value.
    # - If the WAS admin credentials were changed by any other means than through the helm values, the currently active credentials need to be entered as the values for wasUser and wasPassword.
    # - If a LDAP is used, the WebSphere Application Server admin user has never applied automatically and LDAP has the authority over the credentials. Whenever the credentials are changed in LDAP, the values for wasUser and wasPassword need to be manually updated accordingly.
    wasUser: "wpsadmin"
    wasPassword: "wpsadmin"
```

### Core security credentials

The security credentials defined in the `security` section of the helm values are necessary to pass the user credentials to the IBM Websphere Application Server and HCL Digital Experience Core startup scripts. The behaviour slightly differs depending on the user registry that is configured for HCL Digital Experience.

### Remote Search security credentials

Same as Core, when Remote Search is enabled, WAS admin credentials can be configurable from the helm chart. The properties for credentials are found under the `security` section of the value file. For Remote Search also, the behaviour slightly differs depending on the user registry that is configured for HCL Digital Experience (read further for more details).

#### 1. File-based user registry

If no LDAP is configured in the helm values, HCL Digital Experience is configured with a default file-based user repository. In this case, the security credentials for Core and Remote Search that are specified in the `custom-values.yaml` are applied to the file-based registry. This means that any changes to the values are automatically reflected in the administrator user accounts for Websphere and DX.

| Value | Effect |
| --- | --- |
| `wasUser` | Creates a user with this name if it does not exist already. Then makes that user the Websphere primary admin user. |
| `wasPassword` | Sets the password of the `wasUser` to this value. |
| `wpsUser` | Creates a user with this name if it does not exist already. Then makes that user a HCL Digital Experience administrator. |
| `wpsPassword` | Sets the password of the `wpsUser` to this value. |

!!! important
    If the Websphere primary admin user was at any time changed manually and not through the helm values, the values for `wasUser` and `wasPassword` need to be set to the current credentials once and a `helm upgrade` with those values must be executed. Afterwards, the helm values can be used to change the credentials.


!!! important
    Do not change the admin credentials during the update of the DX deployment to a later version. Always set the current credentials in the `custom-values.yaml` before upgrading.


!!! note
    Currently, the Configuration Wizard and DXConnect always use the `wpsadmin` user. Changes to the `wasUser` do therefore not affect the Configuration Wizard and DXClient (which connects to DXConnect). If the `wasUser` is kept as the default `wpsadmin` but its password is changed, the new password will also apply to the Configuration Wizard and DXConnect.

#### 2. LDAP

If a [LDAP is configured](./optional_configure_apps.md#supported-ldap-configuration) in the helm values under `configuration.core.ldap`, the core security credentials need to be manually set to the credentials of the administrator user(s) from LDAP and kept up to date manually in the helm chart if the users are changed in the LDAP. The credentials are used in several startup and configuration scripts. Changes in the helm values will not cause any changes to the LDAP users.

Please refer to the [Updating user ID and passwords](../../../../../manage/security/updating_userid_pwd/index.md) topic for additional information on how to manually change credentials.
