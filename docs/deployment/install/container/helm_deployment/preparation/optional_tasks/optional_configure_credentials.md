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

Please refer to the [Updating user ID and passwords](../../../../../manage/security/people/authentication/updating_userid_pwd/index.md) topic for additional information on how to manually change credentials.

## Configuring Credentials from Secrets

You can also configure the credentials that HCL Digital Experience 9.5 is using by creating a secret that contains the credentials and referencing them by adding the secret name to your `custom-values.yaml` file and doing a `helm upgrade` to apply it in the deployments:

```yaml
# Referencing the secret to configure credential, e.g. core credentials
security:
  # Security configuration for Core using secrets
  core:
    # Credentials used for IBM WebSphere Application Server administrative access.
    # The credentials defined in these values define the WebSphere Application Server primary administrative user. The user gets created if necessary and/or the password is set to the current value.
    # - If the WAS admin credentials were changed by any other means than through the helm values, the currently active credentials need to be entered as the values for wasUser and wasPassword.
    # - If a LDAP is used, the the WebSphere Application Server admin user is never applied automatically and LDAP has the authority over the credentials. Whenever the credentials are changed in LDAP, the values for wasUser and wasPassword need to be manually updated accordingly.

    # - If you are using a seret to configure credentials, you must leave the default credentials string empty 
    # - If both default credential and secret name are filled it will block the chart from being deployed.
    wasUser: ""
    wasPassword: ""
    # Provide a secret name that will be used to set credentials for WAS
    # Required attributes:
    #   - username
    #   - password
    # Secret name is being referenced to configure credentials, this secret conatians the key-value pair for "username" and "password"
    customWasSecret: "my-was-credential-secret"
```

!!! important
    Only one method of configuring credentials can be applied at once. Either configure it by using secrets or using the credentials in the helm `custom-values.yaml`, unused credential values should be explicitly set to **empty/null**.

!!! important
    A Helm upgrade is required in order for the new credentials values to reflect inside the containers.

### Guidlines for Configuring Credentials from Secrets

#### 1. Create a Custom Secret
Create a secret that will be used to reference credentials, this secret should contain all the required attributes (e.g. "username", "password") needed by the credentials.

There are two ways to create and deploy custom secrets:

**By Kubectl Command**\
This is the preferred way of creating secret inside a cluster, Kubernetes will handle the encoding of the key-value pairs in a base64-encoding format. 

```console
$ kubectl create secret generic <secret-name> --from-literal=username=<your-username> --from-literal=password=<your-password> --namespace=<namespace>
```

For details please refer to the official Kubernetes documentation about [Managing Secrets using kubectl](https://kubernetes.io/docs/tasks/configmap-secret/managing-secret-using-kubectl/).

**By YAML files**\
Secrets can also be created using secret yamml manifest. 

!!! note
    The string values assigned in the data fields of the secret should be base64-encoded. The containers expects a base64-encoded string to be pased from the secrets key-value pairs. The credentials wont work if the values passed are plain strings.

```yaml
# Example manifest for creating secret by using a yaml file
apiVersion: "v1"
kind: "Secret"
data:
  # The value of the key-value pair should be strictly base64-encoded
  username: <username>
  # The value of the key-value pair should be strictly base64-encoded
  password: <password>
metadata:
  labels:
  name: <secret-name>
  namespace: <namespace>
type: "Opaque"
```

#### 2. Reference the Secret
Once the secret is created inside the cluster, you can now reference them in their respective custom secret fields inside the `custom-values.yaml` under `security` section. See this [example](./optional_configure_credentials.md#configuring-credentials-from-secrets) for reference

!!! note
    For Core LTPA AND LDAP you can reference your secrets under `configuration.core` section of the helm values.

#### 3. Check the Required Attributes in Secrets
There are multiple credentials being used in HCL Digital Experience 9.5. Each application have different required attributes for their credential. If you intend to use a secret to configure credentials for a specific application, always check the data attributes of the secret that you will be using in order for the helm chart to map those values and be passed/cascaded accordingly to each applications.

!!! note
    Helm validates the inputs and the deployment will not be applied if required attributes are not set properly in the custom secrets.

Here's a list of the required credential attributes for each application:

| Secrets | Helm Reference | Required Attributes | Application |
|-----------------------------------------------|--------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|-------------------|
| Core WAS Credential secret | `security.core.customWasSecret` | `username` <br> `password` | Core |
| Core WPS Credential secret | `security.core.customWpsSecret` | `username`  <br> `password` | Core |
| Core LDAP Credential secret | `configuration.core.ldap.customLdapSecret` | `bindUser` <br> `bindPassword` | Core |
| Core LTPA Credential secret | `configuration.core.ltpa.customLtpaSecret` | `ltpa.version` <br> `ltpa.realm` <br> `ltpa.desKey` <br> `ltpa.privateKey` <br> `ltpa.publicKey` <br> `ltpa.password` | Core |
| DAM Plugin Google Vision Credential secret | `security.damPluginGoogleVision.customDamGoogleVisionSecret` | `authenticationKey` <br> `apiKey` | DAM Google Vision |
| DAM Plugin Kaltura Credential secret | `security.damPluginKaltura.customDamKalturaSecret` | `authenticationKey` <br> `secretKey` | DAM Kaltura |
| Persistence Connection Pool Credential secret | `security.persistence.customConnectionPoolSecret` | `username` <br> `password` | Persistence |
| Persistence DAM User Credential secret | `security.digitalAssetManagement.customDamSecret` | `username`  <br> `password` | Digital Asset Management |
| Persistence Replication Credential secret | `security.digitalAssetManagement.customReplicationSecret` | `username`  <br> `password` | Digital Asset Management |
| Persistence User Credential secret | `security.digitalAssetManagement.customDBSecret` | `username`  <br> `password` | Digital Asset Management |
| Image Processor Credential secret | `security.imageProcessor.customImageProcessorSecret` | `authenticationKey` | Image Processor |
| License Manager Credential secret | `security.licenseManager.customLicenseManagerSecret` | `username`  <br> `password` | License Manager |
| Open LDAP Credential secret | `security.openLdap.customLdapSecret` | `username`  <br> `password` | Open LDAP         |
| Remote Search WAS Credential secret | `security.remoteSearch.customWasSecret` | `username` <br> `password` | Remote Search |

**Core WAS Credential secret**
```yaml
apiVersion: "v1"
kind: "Secret"
data:
  # Required attribute
  username: <username>
  # Required attribute
  password: <password>
metadata:
  labels:
  name: sample-was-secret
  namespace: <namespace>
type: "Opaque"
```

**Core WPS Credential secret**
```yaml
apiVersion: "v1"
kind: "Secret"
data:
  # Required attribute
  username: <username>
  # Required attribute
  password: <password>
metadata:
  labels:
  name: sample-wps-secret
  namespace: <namespace>
type: "Opaque"
```

**Core LDAP Credential secret**
```yaml
apiVersion: "v1"
kind: "Secret"
data:
  # Required attribute
  bindUser: <bindUser>
  # Required attribute
  bindPassword: <bindPassword>
metadata:
  labels:
  name: sample-core-ldap-secret
  namespace: <namespace>
type: "Opaque"
```

**Core LTPA Credential secret**
```yaml
apiVersion: "v1"
kind: "Secret"
data:
  # Required attribute
  "ltpa.version": <version>
  # Required attribute
  "ltpa.realm": <realm>
  # Required attribute
  "ltpa.desKey": <desKey>
  # Required attribute
  "ltpa.privateKey": <privateKey>
  # Required attribute
  "ltpa.publicKey": <publicKey>
  # Required attribute
  "ltpa.password": <password>
metadata:
  labels:
  name: sample-core-ltpa-secret
  namespace: <namespace>
type: "Opaque"
```

**DAM Plugin Google Vision Credential secret**
```yaml
apiVersion: "v1"
kind: "Secret"
data:
  # Required attribute
  authenticationKey: <authenticationKey>
  # Required attribute
  apiKey: <apiKey>
metadata:
  labels:
  name: sample-google-vision-secret
  namespace: <namespace>
type: "Opaque"
```

**DAM Plugin Kaltura Credential secret**
```yaml
apiVersion: "v1"
kind: "Secret"
data:
  # Required attribute
  authenticationKey: <authenticationKey>
  # Required attribute
  secretKey: <secretKey>
metadata:
  labels:
  name: sample-kaltura-secret
  namespace: <namespace>
type: "Opaque"
```

**Persistence Connection Pool Credential secret**
```yaml
apiVersion: "v1"
kind: "Secret"
data:
  # Required attribute
  username: <username>
  # Required attribute
  password: <password>
metadata:
  labels:
  name: sample-connection-pool-secret
  namespace: <namespace>
type: "Opaque"
```

**Persistence DAM User Credential secret**
```yaml
apiVersion: "v1"
kind: "Secret"
data:
  # Required attribute
  username: <username>
  # Required attribute
  password: <password>
metadata:
  labels:
  name: sample-dam-user-secret
  namespace: <namespace>
type: "Opaque"
```

**Persistence Replication Credential secret**
```yaml
apiVersion: "v1"
kind: "Secret"
data:
  # Required attribute
  username: <username>
  # Required attribute
  password: <password>
metadata:
  labels:
  name: sample-replication-secret
  namespace: <namespace>
type: "Opaque"
```

**Persistence User Credential secret**
```yaml
apiVersion: "v1"
kind: "Secret"
data:
  # Required attribute
  username: <username>
  # Required attribute
  password: <password>
metadata:
  labels:
  name: sample-replication-secret
  namespace: <namespace>
type: "Opaque"
```

**Image Processor Credential secret**
```yaml
apiVersion: "v1"
kind: "Secret"
data:
  # Required attribute
  authenticationKey: <authenticationKey>
metadata:
  labels:
  name: sample-kaltura-secret
  namespace: <namespace>
type: "Opaque"
```

**License Manager Credential secret**
```yaml
apiVersion: "v1"
kind: "Secret"
data:
  # Required attribute
  username: <username>
  # Required attribute
  password: <password>
metadata:
  labels:
  name: sample-license-manager-secret
  namespace: <namespace>
type: "Opaque"
```

**Open LDAP Credential secret**
```yaml
apiVersion: "v1"
kind: "Secret"
data:
  # Required attribute
  username: <username>
  # Required attribute
  password: <password>
metadata:
  labels:
  name: sample-open-ldap-secret
  namespace: <namespace>
type: "Opaque"
```

**Remote Search WAS Credential secret**
```yaml
apiVersion: "v1"
kind: "Secret"
data:
  # Required attribute
  username: <username>
  # Required attribute
  password: <password>
metadata:
  labels:
  name: sample-remote-search-was-secret
  namespace: <namespace>
type: "Opaque"
```