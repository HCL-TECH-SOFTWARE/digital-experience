---
tags: [dx, digital-experience, integration, automation, enable, disable]
---

# Automating OIDC configuration for HCL Digital Experience

## Configuring OIDC Authentication

Configure your HCL Digital Experience (DX) installation to leverage OpenID Connect (OIDC) based authentication with an OIDC compatible Identity Provider (IdP), such as Keycloak. This means that DX is turned into a relying party (RP) towards your IdP and the IdP is trusted for authentication assertions.

The scope of this document is limited to automating DX LDAP and transient user's authentication with OIDC considering Keycloak as our OpenID Provider (OP).

This document provides guidance on using automated configuration tasks via the HCL DX ConfigEngine to ease OIDC deployments. Specifically, it provides an alternative to exhaustive manual configuration actions in IBM WebSphere and HCL DX. For context, the manual steps are [Updating WebSphere to support OIDC Authentication for DX](../dx-update-webshpere-for-oidc.md)

This document also provides guidance on using automated configuration tasks on how you can configure OIDC Authentication for DX using Transient Users with softgroups using DB2 and derby database. For context, the manual steps are [Updating WebSphere to support OIDC Authentication for DX with Transient Users](../transient-users/dx-update-webshpere-for-oidc-transient-users.md) and [Configuring Rule-based user groups adapter for Transient Users](../transient-users/transient-users-softgroups-configuration.md)

Currently, the scope of this work is kube based DX deployment and it will not be supported or suggested to be used for other deployment types.

### Additional information

Use this procedure as a general reference and make adjustments to accommodate the environment and application requirements. In some cases, there are additional configuration options that alter the values to input or require steps to be conducted slightly differently. The following assumptions have been made:

- The cloud native distribution of DX is used.
- In case of LDAP user authentications, running DX instance with Open ldap configured.
- We have tested this config tasks for transient users with softgroups and database like derby abd Db2. 
- An IdP is set up and configured. Required details like the client id or secrets are available to configure during the tasks. For more information on how an IdP is configured, see [Configure Keycloak as an OIDC IdP for HCL Digital Experience](https://github.com/HCL-TECH-SOFTWARE/hclds-keycloak/blob/main/docs/integration/ds-integration/dx/dx-keycloak-configuration.md).

### Creating config properties file

You will have to create a file named `oidc-config.properties` file under `/opt/HCL/wp_profile/ConfigEngine/properties/` in the `dx-core` pod. This file can be create anywhere, but you will have to ensure that you specify this path while running config engine task. The properties file is used for both the enable and disable oidc configuration tasks.

Execute following commands for creating a file as below:

```sh
kubectl exec -it dx-deployment-core-0 bash -n dxns
vi /opt/HCL/wp_profile/ConfigEngine/properties/oidc-config.properties
```

Copy below content and ensure you provide values for the placeholders before you save it.

```properties
oidc.clientId=<YOUR_CLIENT_ID>
oidc.clientSecret=<YOUR_CLIENT_SECRET>
# For example: https://<YOUR_IDP_HOST>/realms/<<REALM_NAME>>/.well-known/openid-configuration

oidc.discoveryEndpointUrl=<YOUR_IDP_DISCOVERY_ENDPOINT_URL>
oidc.scope=openid
oidc.signVerifyAlias=hcl_cert

oidc.realmName=<<REALM_NAME>>
# For example: keycloak , Azure, Okta etc

oidc.idpName=<YOUR_IDP_NAME>
oidc.idpHost=<YOUR_IDP_HOST>
# For example: https://<YOUR_DX_HOST>/wps/myportal

oidc.redirectUrl=<YOUR_DX_IDP_REDIRECT_URL>
# For example: https://<<YOUR_IDP_HOST>>/realms/<<REALM_NAME>>/protocol/openid-connect/logout?post_logout_redirect_uri=https://<<YOUR_NATIVE_HOST>>/wps/portal&client_id=<<CLIENT_ID>>

oidc.logoutUrl=<YOUR_IDP_LOGOUT_URL>

# Defaults to NodeDefaultTrustStore if not specified
oidc.wasKeyStore=<YOUR_WAS_NODE_DEFAULT_TRUST_STORE>

# Set it to true for transient user configuration ,if set to false it will skip the transient user configuration.
oidc.enableTransientUser=false

# Following properties are needed only when you set enable_transient_user to true
# For example: /opt/HCL/wp_profile/classes
oidc.jaasClassPath= <<JAAS_CLASSPATH>>
oidc.jaasModuleClass=com.hcl.dx.auth.jaas.impl.TransientUsersLoginModule

# Set it to true for softgroups war deployment and configuration ,if set to false it will skip the softgroups  configuration.
oidc.enableSoftgroups=false

#Add new custom property for the custom Softgroups role/group key. For example: "groups", "roles", etc.
oidc.softgroupKey=groups

# Add admin creds if not provided in wkplc.properties
WasPassword=Your WAS Admin Password
PortalAdminPwd=Your Portal Admin Password

# Following Database properties required when oidc.enableSoftgroups set to true.

# For DB2:
oidc.dbType=db2
oidc.DbName=<<DATABASE_NAME>>
oidc.dsName=<<DATASOURCE_NAME>>
oidc.dbSchema=<<DATABASE_SCHEMA>>
oidc.jdbcProvider=<<JDBC_PROVIDER>>
oidc.driverType=<<DRIVER_TYPE>>
oidc.authAlias=<<SECURITY_ALIAS>>
oidc.DbServerName=<<SERVER_NAME>>
oidc.DbPort=<<PORT_NUMBER>>

#For Derby
oidc.dbType=derby
oidc.DbName=<<DATABASE_NAME>>
oidc.dsName=<<DATASOURCE_NAME>>
oidc.dbSchema=<<DATABASE_SCHEMA>>
oidc.jdbcProvider=<<JDBC_PROVIDER>>
```

### Enabling/Installing the OIDC configuration through a config engine task

Now you need to run config engine tasks to start the OIDC configuration for DX. To do that run below command:

```sh
/opt/HCL/wp_profile/ConfigEngine/./ConfigEngine.sh -DSaveParentProperties=true -DparentProperties="/opt/HCL/wp_profile/ConfigEngine/properties/oidc-config.properties" enable-oidc-configuration
```

### Softgroups with DB2

If you want to enable softgroups with DB2 database, please create softgroup database using following sql commands first.

```sh

CREATE DATABASE sgdb

CONNECT TO sgdb USER db2inst1 USING <YOUR_DB_PASSWORD>

CREATE SCHEMA softgrouptest AUTHORIZATION db2inst1;

CREATE TABLE softgrouptest.SOFTGROUPS (ID INT NOT NULL GENERATED ALWAYS AS IDENTITY, GROUPNAME VARCHAR(128) NOT NULL, RULE VARCHAR(300) NOT NULL, DESCRIPTION VARCHAR(512), LASTMODIFIED TIMESTAMP, PRIMARY KEY (ID), UNIQUE (GROUPNAME));

CREATE INDEX softgrouptest.SOFTGROUPSIX1 ON softgrouptest.SOFTGROUPS (LASTMODIFIED DESC);

COMMIT;
```

Then, run config engine tasks to start the OIDC configuration for DX. To do that run below command:

```sh
/opt/HCL/wp_profile/ConfigEngine/./ConfigEngine.sh -DSaveParentProperties=true -DparentProperties="/opt/HCL/wp_profile/ConfigEngine/properties/oidc-config.properties" enable-oidc-configuration
```

!!! note
        This documents outlines the steps with DB2 and derby, for other databases it may vary and may not be supported through config tasks.

### Additional configuration required for softgroups

Softgroups requires additional manual steps for creating and managing groups and mapping users to roles/groups.

- [Define Rule-Based User Groups](../transient-users/transient-users-softgroups-configuration#define-rule-based-user-groups)
- [Assigning users to groups in your IdP](../transient-users/transient-users-softgroups-configuration#assigning-users-to-groups-in-your-idp)
- [Creating a test portal page](../transient-users/transient-users-softgroups-configuration#creating-a-test-portal-page)
- [Managing permissions for test portal page](../transient-users/transient-users-softgroups-configuration#managing-permissions-for-test-portal-page)


### Testing the OIDC login flow

1. Open a browser and navigate to `https://<HOSTNAME>/wps/portal`
1. Click **Log in**, this will re-direct you to the IdPs login screen
1. Log in with user creadentials, you will be re-directed to DX home page
1. Navigate to `https://<HOSTNAME>/wps/myportal/Practitioner/Home` and verify that you are logged in with correct user
1. Once logged in, also verify you can successfully log out of DX


### Disabling/Uninstalling the OIDC configuration through a config engine task

If you are having issue with the automation enable/install script or are encountering issues with the manual configuration, you can run the disable-oidc-configuration config engine task disable the OIDC configuration and revert to the original state. To do that run below command:

```sh
/opt/HCL/wp_profile/ConfigEngine/./ConfigEngine.sh -DSaveParentProperties=true -DparentProperties="/opt/HCL/wp_profile/ConfigEngine/properties/oidc-config.properties" disable-oidc-configuration
```

Additonally if any configuration step in the enable-oidc-configuration fails, the uninstall script will automatically revert newly added config changes.

### Troubleshoot

You can refer to `ConfigTrace.log` resource for determining the state of server is in, it should contain the history. The file should be located at `/opt/HCL/wp_profile/ConfigEngine/log/ConfigTrace.log`. In addition you can also refer for verifying your configuration against manual steps mentioned in [Configuring OIDC for HCL Digital Experience](../index.md).
