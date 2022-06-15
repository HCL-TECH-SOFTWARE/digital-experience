# Configure applications

## Core

### Supported LDAP configuration

You can specify a LDAP configuration that can be used by HCL Digital Experience 9.5.

The Helm chart provides a `ldap` section under the `configuration` and `core` section. This section can be used to configure a `none`, `dx` or `other` LDAP. This defaults to none, so there is no LDAP configured.

If you adjust this to `other`, you can configure an external LDAP that you want to connect to. Core is then configured to use this LDAP.

Currently, the configuration capability is quite limited. For more complex configurations, use the ConfigWizard instead.

**Example Configuration**

You can use the following syntax in your custom-values.yaml file to adjust LDAP settings:

```
# Application configuration
configuration:
  # Application specific configuration for Core
  core:
    # Settings for LDAP configuration
    ldap:
      # Determines which type of LDAP to use
      # Accepts: "none", "dx" or "other"
      # "none" - no LDAP configuration
      # "dx" - use DX openLDAP and configure it
      # "other" - use provided configuration for other LDAP
      type: "none"
      # User used to connect to LDAP, only used if ldap type is "other"
      bindUser: ""
      # Password used to connect to LDAP, only used if ldap type is "other"
      bindPassword: ""
      # Suffix in LDAP, only used if ldap type is "other"
      suffix: ""
      # Host of LDAP, only used if ldap type is "other"
      host: ""
      # Port of LDAP, only used if ldap type is "other"
      port: ""
      # Supported LDAP Server types - CUSTOM
      serverType: "CUSTOM"
      # LDAP configuration id
      id: "dx_ldap"
      # Mapping attributes between LDAP and DX, LDAP attribute names (comma-separated list)
      attributeMappingLdap: "mail,title,userPassword"
      # Mapping attributes between LDAP and DX, DX attribute names (comma-separated list)
      attributeMappingPortal: "ibm-primaryEmail,ibm-jobTitle,password"
      # Non-supported LDAP attributes (comma-separated list)
      attributeNonSupported: "certificate,members"
```

Refer to the following Help Center documentation for more information about LDAP and Configuration Wizard configuration:

-   [Configuration Wizard](https://help.hcltechsw.com/digital-experience/9.5/config/cw_overview.html)<!--  (../config/cw_overview.md) -->
-   [Enable federated security](https://help.hcltechsw.com/digital-experience/9.5/config/cw_ldap.html)<!-- (../config/cw_ldap.md) -->
-   [Troubleshooting: Enable federated security option](https://help.hcltechsw.com/digital-experience/9.5/trouble/cw_ldap.html)<!-- (../trouble/cw_ldap.md) -->


### Authoring/Rendering configuration

You can choose if the environment you deploy is configured as a WCM authoring or rendering type. This has implications on things like caching of Core.

As default, this defaults to true. The deployment is configured as an authoring environment.

If you want to adjust this to deploy a rendering environment, you can use the following syntax in your custom-values.yaml file:

```
# Application configuration
configuration:
  # Application specific configuration for Core
  core:
    # Settings for tuning
    tuning:
      # Configures if the environment should be configured for authoring or not
      authoring: true
```

### Expose IBM WebSphere Application Server Solution Console 
Refer to the following code sample to configure the server and expose the port `10203`, which will be placed under `configuration.core.exposeConfigurationConsole`:

```yaml
# Application configuration
configuration:
  # Application specific configuration for Core
  core:
    # Defines if the configuration console for the IBM WebSphere Application Server of Core is exposed to the network
    exposeConfigurationConsole: true
```

When `Admin Console` is enabled by setting its property to `true`, the IBM WebSphere Application Server Solution Console becomes available on port `10203`, as shown in the following example:

```
https://yourhost:10203/ibm/console/
```

Admin Console can be disabled by setting the property to `false`.
### Configuration Wizard configuration

Although the Config Wizard is started together with the Core application by default, you can set the value to 'false' to change the default behavior
If `configWizard` is set to `true`, then the Configuration Wizard, IBM WebSphere Application Server Solution Console, and DXConnect are also accessible on port `10203`.

If you want to adjust this setting, you can use the following syntax in your file:

```
# Application configuration
configuration:
  # Application specific configuration for Core
  core:
    # Settings for tuning
    tuning:
        # Configures if the server for configWizard and dxconnect is started.
      # If this is set to true, the WAS console for configWizard and dxconnect is also exposed on port 10203 at the path /ibm/console
      configWizard: true
```

## OpenLDAP configuration

If you choose to deploy the OpenLDAP container in your deployment, you can change country, organization and suffix, that may be configured in OpenLDAP for use.

Use the following syntax in your custom-values.yaml file to adjust the configuration:

```
# Application configuration
configuration:
  # Application specific configuration for Open LDAP
  openLdap:
    # Country configuration for Open LDAP
    country: "US"
    # Org configuration for Open LDAP
    org: "DX"
    # Suffix configuration for Open LDAP
    suffix: "dc=dx,dc=com"
```

## Remote Search configuration

You can configure whether the Remote Search configuration through the IBM WebSphere Application Server Solution Console is exposed as an additional port on HAProxy or not. This defaults to true.

If set to true, you can access the Solution Console using:

```
https://yourhost:9043/ibm/console
```

Use the following syntax in your custom-values.yaml file:

```
# Application configuration
configuration:
  # Application specific configuration for Remote Search
  remoteSearch:
    # Should the configuration interface be exposed
    exposeConfigurationConsole: true

```
