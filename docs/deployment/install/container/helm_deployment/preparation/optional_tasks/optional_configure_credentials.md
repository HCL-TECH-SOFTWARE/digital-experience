# Configure Credentials
HCL Digital Experience 9.5 uses several credentials in its deployment to manage access between applications and from outside the container deployment.

## Adjusting default credentials

You can adjust the default credentials that HCL Digital Experience 9.5 is using by adding the following syntax to your custom-values.yaml file and changing the values you need:

```yaml
# Security related configuration, e.g. default credentials
security:
  # Security configuration for Core
  core:
    # Credentials used for IBM WebSphere Application Server administrative access, needs to be adjusted if different credentials are already in place
    # This setting does currently NOT adjust the existing user credentials.
    wasUser: "REDACTED"
    wasPassword: "REDACTED"
    # Credentials used for HCL Digital Experience Core administrative access, needs to be adjusted if different credentials are already in place
    # This setting does currently NOT adjust the existing user credentials
    wpsUser: "REDACTED"
    wpsPassword: "REDACTED"
  # Security configuration for Digital Asset Management
  digitalAssetManagement:
    # Credentials used by the Digital Asset Management to access the persistence database.
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

```
