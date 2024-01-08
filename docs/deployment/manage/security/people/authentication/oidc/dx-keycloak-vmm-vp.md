---
id: common-services-keycloak-helm-dx-native-kube
title: Setting up OIDC for DX with VMM and Virtual Portals
tags: [keycloak, oidc, openldap]
---

## Version

|||
| --- | --- |
| AUTHOR(S) | Stefan Hessler, Jonathan Marks |
| DATE | 08-25-2023 |
| REVISION  0.5 |
| STATUS | Ready, ongoing |

# Setting up OIDC for DX with VMM and Virtual Portals

This document provides instruction on how to configure HCL DX with Keycloak and use Virtual Portals including user-scopes for individual portals through VMM and multi-realms.

## Overview of tasks and intent

The intent of the outlined steps is to set up an HCL DX environment with multiple Virtual Portals that all leverage Keycloak as an IdP. Additionally, Keycloak will be set up with different realms and clients to seperate different groups of users (here, differentiated into **users**, **customers** and **guests**). For this, an OpenLDAP instance will be prepared to contain the users in a structure that allows seperating them into different scopes. Afterwards, both Keycloak and DX will be configured against an OpenLDAP instance for user federation. DX will then be configured against Keycloak through OIDC and lastly, Virtual Portals and VMM config will be laid out to set up the different spaces within DX.

Before you begin, please ensure you have carried out steps outlined in [Updating WebSphere to support OIDC Authentication for DX](./dx-update-webshpere-for-oidc.md).

On a high level, the following tasks will be executed to establish this configuration:

1. [Add OpenLDAP for user federation](#add-openldap-as-user-federation)
2. [Configure Keycloak OIDC auth for DX](#configure-keycloak-oidc-auth-for-dx)
3. [Set up Virtual Portals and realms](#set-up-virtual-portals-and-realms)

## Add OpenLDAP as user federation

First, you need to add OpenLDAP to your native kube environment. For this, make sure to uncheck the `DISABLE_OPENLDAP` option in the [Reserve a native-kube EC2 instance](../../../deployment/examples/keycloak-dx-native-kube.md#reserve-a-native-kube-ec2-instance) step.

On a high level, the following tasks will be executed to establish and use the OpenLDAP setup:

- Populate the LDAP with test users
- Run DX Config Engine to prepare the Virtual Member Manager for the new users and LDAP
- Validate users are recognized in WebSphere
- Configure Keycloak user federation with OpenLDAP

### Add test users to OpenLDAP container

From here, jump onto your machine and prepare a test_users.ldif file. The file should contain your desired test users. We recommend using the contents listed in the provided [sample OpenLDAP LDIF](./openldap-test-users-ldif.md).
After creating the file, copy it into the open ldap pod:

```sh
kubectl cp test_users.ldif dx-deployment-open-ldap-0:/home/dx_user/ -n dxns
```

Now, jump into the OpenLDAP pod and import them to its database:

```sh
kubectl exec -it dx-deployment-open-ldap-0 -n dxns -- sh

/var/dx-openldap/bin/./ldapadd -h $HOSTNAME -p 1389 -f /home/dx_user/test_users.ldif -x -D cn=dx_user,dc=dx,dc=com -w p0rtal4u -v
```

This will set up users in three organizational units:

- `jjones1` to `jjones5` (password `password`) in ou `users`
- `ccustomer1` to `ccustomer5` (password `password`) in ou `customers`
- `gguest1` to `gguest5` (password `password`) in ou `guests`

### Copy properties to DX Core container

Prepare the file [wkplc.properties](../resources/wkplc.properties) on your machine. Copy the file into the dx core pod:

```sh
kubectl cp wkplc.properties dx-deployment-core-0:/opt/HCL/wp_profile/ConfigEngine/properties/ -n dxns
```

### Run ConfigEngine tasks to configure OpenLDAP to DX

Jump into the core pod to execute the Config Engine and validate and update the user federation. This will set user federation for the OpenLDAP on WAS and allows DX to recognize the users.

```sh
kubectl exec -it dx-deployment-core-0 bash -n dxns

/opt/HCL/wp_profile/ConfigEngine/./ConfigEngine.sh validate-federated-ldap
/opt/HCL/wp_profile/ConfigEngine/./ConfigEngine.sh wp-create-ldap
/opt/HCL/wp_profile/ConfigEngine/./ConfigEngine.sh reregister-scheduler-tasks
/opt/HCL/wp_profile/ConfigEngine/./ConfigEngine.sh wp-set-entitytypes
/opt/HCL/wp_profile/ConfigEngine/./ConfigEngine.sh wp-update-federated-ldap-attribute-config
/opt/HCL/wp_profile/ConfigEngine/./ConfigEngine.sh stop-portal-server
```

### Ensure that test users show in the WAS Admin console

- Log into the WAS Administration console at `https://<HOSTNAME>/ibm/console`
- Expand 'Users and Groups' in the left hand navigation tree
- Click on the 'Manage Users' link

## Configure Keycloak OIDC auth for DX

The following steps will set up a Keycloak client for DX and will configure the DX installation on the server to leverage OpenID Connect (OIDC) based authentication with Keycloak. This means that DX will be turned into a Relying Party (RP) to Keycloak serving as its identity provider (IDP).

!!!note
    The steps are also outlined in a bit more detail in [Configuring OIDC for HCL Digital Experience](./index.md). This document focuses specifically on set ups with native kube and with all above tasks and configuration in place as prerequisites.

### Configure Keycloak client for DX

The full configuration here entails setup of a realm, user federation, client, custom claims for client scopes and respective mappers to wire of those claims, and is explained in detail in the document linked above.

- First, log in to Keycloak at `https://<HOSTNAME>/auth/admin` with user `admin` and password `admin`. Then, select the realm `hcl` in the top left dropdown.

- To simplify the steps for our purposes, we will use initial realm import feature Keycloak provides to leverage a predefined set of configurations.

- **(Optional)**: Keycloak provides a **Partial import** feature to leverage additional predefined configurations:

    1. Navigate to **Realm setting**, click the **Action** dropdown and select **Partial import**. Download the provided file [native-kube-hcl-realm-client-config.json](../resources/native-kube-dx-users-realm-client-config.json) and upload it in the dialog.

    2. This should properly recognize the file and list various resources to import (users, clients, realm and client roles). Select all of them and select **Overwrite** in the if-exists dropdown.

    3. Click **Import** to apply the configuration and add respective resources. This should lead to a summary view indicating that many resources have been added and some have been overwritten. Review the changes to ensure there are no obvious errors and click **Close**.

- Next click on the Clients tab and select the link for our client, for our example we will be using the `hcl-dx-oidc-client` Client ID.

- Under the **Valid redirect URIs** and **Web Origins** fields, replace `localhost` with the `HOSTNAME` for you environment, for example `https://localhost/wps/myportal` -> `https://native-kube-transient.team-q-dev.com/wps/myportal` and `https://localhost:443/oidcclient/hcl` -> `https://native-kube-ki.team-q-dev.com:443/oidcclient/hcl`.

!!!note
    The context path for the `https://native-kube-ki.team-q-dev.com:443/oidcclient/hcl` redirect URI is dynamically constructed by WAS with a combination of the following TAI custom properties referenced further below `provider_1.identifier = hcl` and `provider_1.callbackServletContext = /oidcclient`. **Make sure to include the port `443` in the url with `/oidcclient/hcl` as that's how WAS constructs it!**

#### Sync users from LDAP

The import will create the `DX OpenLDAP` in the user federation. As a final step, we need to sync the users to make them available in Keycloak. To do this, navigate to **User Federation** -> **DX OpenLDAP**.

Click the **Action** dropdown in the top right corner of the provider and select the “Sync all users” option.
This should show new users being added to your Keycloak instance.

![Keycloak_HTTPS_SSL_12](../../../../../../images/Keycloak_HTTPS_SSL_12.png)

## Set up Virtual Portals and realms

This section will set up DX Virtual Portals to provide multiple groups of pages/sites under different contexts. In addition, multiple realms will be configured to scope the Virtual Portals to different user groups. Lastly, the Keycloak authentication service will be leveraged to differentiate between different realms/Virtual Portals and show login UIs catered to the different user groups.

To establish this set up, the following high level tasks have to be conducted:

- [Prepare the WebSphere federated user registry to understand different user scopes](#prepare-the-websphere-federated-user-registry-to-understand-different-user-scopes)
- [Prepare and create multiple realms within the Virtual Member Manager](#prepare-and-create-multiple-realms-within-the-virtual-member-manager)
- [Create Virtual Portals with respective user realms in DX](#create-virtual-portals-with-respective-user-realms-in-dx)
- [Create a new realm, identity provider and clients mapping to Virtual Portals in Keycloak](#create-new-realms-and-clients-mapping-to-virtual-portals-in-keycloak)
- [Configure different OIDC providers for the Virtual Portals](#configure-different-oidc-providers-for-the-virtual-portals)
- [Validate your changes and setup](#validate-your-changes-and-setup)

### Prepare the WebSphere federated user registry to understand different user scopes

!!!warning
    This is not working yet.

In order to split the user federation into multiple parts, we need to adjust the unique distinguished name of the base entry from `dc=dx,dc=com` to `ou=users,dc=dx,dc=com`. To do so,

- go to the WAS Administration console
- navigate to Security -> Global Security
- in the **User account repository** section, click on **Configure...**
- in the **Repositories in the realm:** table, click on the link **dc=dx,dc=com**
- change the unique distinguished name to `ou=users,dc=dx,dc=com` and click **OK**

In addition we will add two more base entries to scope our customer and guest users. To do this, in the same **Federated repositories** overview,

- click **Add repositories (LDAP, custom, etc)...**
- make sure the **dx_ldap** is selected as **Repository**
- set the unique distinguished name to `ou=guests,dc=dx,dc=com` and click **OK**
- repeat the same step and set the unique distinguished name to `ou=customers,dc=dx,dc=com` this time

![WAS Federated Repositories configuration](../../../../../../images/was-federated-repositories.png)

### Prepare and create multiple realms within the Virtual Member Manager

The overall task is based on the following DX docs and capabilities - [Adding realm support](https://opensource.hcltechsw.com/digital-experience/CF212/deployment/manage/security/people/authentication/user_registry/cfg_realm/).
This task is streamlined for the native-kube environment and will provide the updates to the underlying configuration layer - the `wimconfig.xml`.

- To get started identify the `wimconfig.xml`, create a backup and open it in edit mode:

    ```sh
    kubectl exec -it dx-deployment-core-0 bash -n dxns
    cd /opt/HCL/wp_profile/config/cells/dockerCell/wim/config/
    cp wimconfig.xml wimconfig.xml.backup
    vi wimconfig.xml
    ```

- Identify the existing `PersonAccount` section established during the [initial OpenLDAP configuration](#run-configengine-tasks-to-configure-openldap-to-dx):

    ```xml
    <config:supportedEntityTypes defaultParent="ou=users,dc=dx,dc=com" name="PersonAccount">
      <config:rdnProperties>uid</config:rdnProperties>
    </config:supportedEntityTypes>
    ```

    ...  and add the following additional `PersonAccount` elements:

    ```xml
    <config:supportedEntityTypes defaultParent="ou=customers,dc=dx,dc=com" name="PersonAccount">
    <config:rdnProperties>uid</config:rdnProperties>
    </config:supportedEntityTypes>
    <config:supportedEntityTypes defaultParent="ou=guests,dc=dx,dc=com" name="PersonAccount">
    <config:rdnProperties>uid</config:rdnProperties>
    </config:supportedEntityTypes>
    ```

- Next, identify the existing default `realm`:

    ```xml
    <config:realmConfiguration defaultRealm="defaultWIMFileBasedRealm">
      <config:realms delimiter="/" name="defaultWIMFileBasedRealm" securityUse="active">
      ...
      </config:realms>
    </config:realmConfiguration>
    ```

- Within the `realmConfiguration`, create the following peer `realms`:

    ```xml
    <config:realms delimiter="/" name="userRealm" securityUse="active" allowOperationIfReposDown="false">
    <config:participatingBaseEntries name="o=defaultWIMFileBasedRealm"/>
    <config:participatingBaseEntries name="ou=users,dc=dx,dc=com"/>
    <config:uniqueUserIdMapping propertyForInput="uniqueName" propertyForOutput="uniqueName"/>
    <config:userSecurityNameMapping propertyForInput="principalName" propertyForOutput="externalName"/>
    <config:userDisplayNameMapping propertyForInput="principalName" propertyForOutput="principalName"/>
    <config:uniqueGroupIdMapping propertyForInput="uniqueName" propertyForOutput="uniqueName"/>
    <config:groupSecurityNameMapping propertyForInput="cn" propertyForOutput="externalName"/>
    <config:groupDisplayNameMapping propertyForInput="cn" propertyForOutput="cn"/>
    </config:realms>
    <config:realms delimiter="/" name="customerRealm" securityUse="active" allowOperationIfReposDown="false">
    <config:participatingBaseEntries name="o=defaultWIMFileBasedRealm"/>
    <config:participatingBaseEntries name="ou=customers,dc=dx,dc=com"/>
    <config:participatingBaseEntries name="ou=guests,dc=dx,dc=com"/>
    <config:uniqueUserIdMapping propertyForInput="uniqueName" propertyForOutput="uniqueName"/>
    <config:userSecurityNameMapping propertyForInput="principalName" propertyForOutput="externalName"/>
    <config:userDisplayNameMapping propertyForInput="principalName" propertyForOutput="principalName"/>
    <config:uniqueGroupIdMapping propertyForInput="uniqueName" propertyForOutput="uniqueName"/>
    <config:groupSecurityNameMapping propertyForInput="cn" propertyForOutput="externalName"/>
    <config:groupDisplayNameMapping propertyForInput="cn" propertyForOutput="cn"/>
    </config:realms>
    <config:realms delimiter="/" name="guestRealm" securityUse="active" allowOperationIfReposDown="false">
    <config:participatingBaseEntries name="o=defaultWIMFileBasedRealm"/>
    <config:participatingBaseEntries name="ou=guests,dc=dx,dc=com"/>
    <config:participatingBaseEntries name="ou=customers,dc=dx,dc=com"/>
    <config:uniqueUserIdMapping propertyForInput="uniqueName" propertyForOutput="uniqueName"/>
    <config:userSecurityNameMapping propertyForInput="principalName" propertyForOutput="externalName"/>
    <config:userDisplayNameMapping propertyForInput="principalName" propertyForOutput="principalName"/>
    <config:uniqueGroupIdMapping propertyForInput="uniqueName" propertyForOutput="uniqueName"/>
    <config:groupSecurityNameMapping propertyForInput="cn" propertyForOutput="externalName"/>
    <config:groupDisplayNameMapping propertyForInput="cn" propertyForOutput="cn"/>
    </config:realms>
    ```

- Make sure to save the changes.

#### Restart the server / DX core to apply all changes

Finally, restart the DX environment via the following commands:

```sh
kubectl exec -it dx-deployment-core-0 bash -n dxns
/opt/HCL/wp_profile/ConfigEngine/./ConfigEngine.sh stop-portal-server
```

The restart will take some minutes to complete.

### Create Virtual Portals with respective user realms in DX

To create a Virtual Portal, login as the DX admin user `wpsadmin:wpsadmin` via the WAS console at https://&lt;HOSTNAME&gt;/ibm/console/login.do.

!!!note
    There is an open issue where the admin can't log in anymore in the DX login since it doesn't exist in the OpenLDAP and Keycloak doesn't know about it, hence logging in via WAS console.

From here,

- Navigate to the DX landing page at https://&lt;HOSTNAME&gt;/wps/portal
- Click on the **home icon** (Open applications menu) dropdown and click on **Administration**
- On the Administration page, expand the menu on the top left and navigate to **Site Management** -> **Virtual Portal**
- On the Virtual Portal Manager page, click on **New Virtual Portal**
- Fill in the **Create New Virtual Portal** form with the below details:

    | Name | Value |
    | --- | --- |
    | Virtual portal title | woodburnstudio-vp-users |
    | URL Context: /wps/portal/ | woodburnstudio-vp-users |
    | User realm | userRealm |
    | Initial admin user group: (a valid user realm must be specified first) | useradmingroup |
    | Default theme | Portal 8.5 |

- Click on **OK** to initiate the creation process.
  !!!note
      You might encounter a **504 Gateway Time-out** error message. In this case, just navigate back to https://&lt;HOSTNAME&gt;/wps/portal/Practitioner to continue the process. This is an expected behavior in environments that are not leveraging a DB2 instance behind the scenes (e.g., simple native-kube environments).

- Navigate back to the **Virtual Portal Manager** page to confirm the virtual portal was created successfully.

Follow the same steps two more times for the guest and customer users. For this, use the following virtual portal title/url context and user realm:

- `woodburnstudio-vp-guests` and realm `guestRealm`
- `woodburnstudio-vp-customers` and realm `customerRealm`

### Create new realms and clients mapping to Virtual Portals in Keycloak

We will set up two realms for employees (mapping to users) as well as for customers and guests. The customers and guests share the same realm but will leverage individual clients.

We will use the same **Partial import** feature that was already leveraged in the step [Configure Keycloak client for DX](#configure-keycloak-client-for-dx).

#### Creating the realms

- First, log in to Keycloak at `https://<HOSTNAME>/auth/admin` with user `admin` and password `admin`. Then, open the realm dropdown on the top left and click on **Create Realm**.

- Set the realm name to `dx-users` and import the provided file [native-kube-dx-users-realm-client-config.json].(./resources/native-kube-dx-users-realm-client-config.json). Click on **Create** to create the realm. This will set up the realm with all configuration. 

- Next, create the second realm with the name `dx-customers-guests` and the provided file [native-kube-dx-customers-guests-realm-client-config.json](../resources/native-kube-dx-customers-guests-realm-client-config.json).

- **Note** After setting up both realms and user federation, make sure to [Sync users from LDAP](#sync-users-from-ldap) as before, so that the LDAP recognizes all users in the LDAP scope.

### Configure different OIDC providers for the Virtual Portals

Lastly, we need to configure the new realms and clients as additional providers into the OIDC TAI the same way as in [Configure the OIDC TAI](#configure-the-oidc-tai).

- Log in to the WAS console and navigate to **Security** -> **Global Security** -> **Web and SIP security** -> **Trust association** -> **Interceptors** -> **com.ibm.ws.security.oidc.client.RelyingParty**.

- Add the following custom properties:

    | Name | Value |
    | --- | --- |
    | provider_2.identifier | dx-users-realm |
    | provider_2.clientId | dx-users-oidc-client |
    | provider_2.clientSecret | DDkql5HAZYvIFyv2zG0qm4PJrSKt44ts |
    | provider_2.authorizeEndpointUrl | https://&lt;HOSTNAME&gt;/auth/realms/dx-users/protocol/openid-connect/auth |
    | provider_2.tokenEndpointUrl | https://&lt;HOSTNAME&gt;/auth/realms/dx-users/protocol/openid-connect/token |
    | provider_2.interceptedPathFilter | /wps/portal/woodburnstudio-vp-users |
    | provider_2.excludedPathFilter | /ibm/console,/ibm/console.* |
    | provider_2.issuerIdentifier | https://&lt;HOSTNAME&gt;/auth/realms/dx-users |
    | provider_2.signatureAlgorithm | RS256 |
    | provider_2.jwkEndpointUrl | https://&lt;HOSTNAME&gt;/auth/realms/dx-users/protocol/openid-connect/certs |
    | provider_2.userIdentifier | email |
    | provider_2.useDefaultIdentifierFirst | false |
    | provider_2.scope | openid |
    | provider_2.signVerifyAlias | dx-users-oidc-client |
    | provider_2.useJwtFromRequest | IfPresent |
    | provider_2.createSession | true |
    | provider_2.verifyIssuerInIat | true |
    | provider_2.audiences | ALL_AUDIENCES |
    | provider_2.setLtpaCookie | true |
    | provider_2.callbackServletContext | /oidcclient |
    | provider_2.mapIdentityToRegistryUser | true |
    | provider_3.identifier | dx-customers-guests-realm-customers |
    | provider_3.clientId | dx-customers-oidc-client |
    | provider_3.clientSecret | mUAgyTfvvzkUmLXSivEEVvPJtjmGq3Sw |
    | provider_3.authorizeEndpointUrl | https://&lt;HOSTNAME&gt;/auth/realms/dx-customers-guests/protocol/openid-connect/auth |
    | provider_3.tokenEndpointUrl | https://&lt;HOSTNAME&gt;/auth/realms/dx-customers-guests/protocol/openid-connect/token |
    | provider_3.interceptedPathFilter | /wps/portal/woodburnstudio-vp-customers |
    | provider_3.excludedPathFilter | /ibm/console,/ibm/console.* |
    | provider_3.issuerIdentifier | https://&lt;HOSTNAME&gt;/auth/realms/dx-customers-guests |
    | provider_3.signatureAlgorithm | RS256 |
    | provider_3.jwkEndpointUrl | https://&lt;HOSTNAME&gt;/auth/realms/dx-customers-guests/protocol/openid-connect/certs |
    | provider_3.userIdentifier | email |
    | provider_3.useDefaultIdentifierFirst | false |
    | provider_3.scope | openid |
    | provider_3.signVerifyAlias | dx-customers-oidc-client |
    | provider_3.useJwtFromRequest | IfPresent |
    | provider_3.createSession | true |
    | provider_3.verifyIssuerInIat | true |
    | provider_3.audiences | ALL_AUDIENCES |
    | provider_3.setLtpaCookie | true |
    | provider_3.callbackServletContext | /oidcclient |
    | provider_3.mapIdentityToRegistryUser | true |
    | provider_4.identifier | dx-customers-guests-realm-guests |
    | provider_4.clientId | dx-guests-oidc-client |
    | provider_4.clientSecret | BZ8iNMR8IztWQDbMNe54FPj2i2tx0sYN |
    | provider_4.authorizeEndpointUrl | https://&lt;HOSTNAME&gt;/auth/realms/dx-customers-guests/protocol/openid-connect/auth |
    | provider_4.tokenEndpointUrl | https://&lt;HOSTNAME&gt;/auth/realms/dx-customers-guests/protocol/openid-connect/token |
    | provider_4.interceptedPathFilter | /wps/portal/woodburnstudio-vp-guests |
    | provider_4.excludedPathFilter | /ibm/console,/ibm/console.* |
    | provider_4.issuerIdentifier | https://&lt;HOSTNAME&gt;/auth/realms/dx-customers-guests |
    | provider_4.signatureAlgorithm | RS256 |
    | provider_4.jwkEndpointUrl | https://&lt;HOSTNAME&gt;/auth/realms/dx-customers-guests/protocol/openid-connect/certs |
    | provider_4.userIdentifier | email |
    | provider_4.useDefaultIdentifierFirst | false |
    | provider_4.scope | openid |
    | provider_4.signVerifyAlias | dx-guests-oidc-client |
    | provider_4.useJwtFromRequest | IfPresent |
    | provider_4.createSession | true |
    | provider_4.verifyIssuerInIat | true |
    | provider_4.audiences | ALL_AUDIENCES |
    | provider_4.setLtpaCookie | true |
    | provider_4.callbackServletContext | /oidcclient |
    | provider_4.mapIdentityToRegistryUser | true |

- Afterwards, hit **Apply** and **OK**. To persist the changes, click the link **Save** directly to the master configuration in the alert message.

#### Restart the server / DX core to apply all changes

Finally, restart the DX environment via the following commands:

```sh
kubectl exec -it dx-deployment-core-0 bash -n dxns
/opt/HCL/wp_profile/ConfigEngine/./ConfigEngine.sh stop-portal-server
```

### Validate your changes and setup

That's it! From here, verify that everything is working as intended. With this setup you have established four different login scenarios that fan out into respective URLs:

1. **https://&lt;HOSTNAME&gt;/wps/portal**

    This page is your general landing page and allows anonymous access. By clicking login, you will be forwarded to https://<HOSTNAME>/wps/myportal, which is the configured OIDC login interceptor for your first configuration.This relates to the `hcl` realm and the `dx-oidc-client` client. It allows the entire user base of the ldap as users to authenticate against.

1. **https://&lt;HOSTNAME&gt;/wps/portal/woodburnstudio-vp-users**

    This is your first virtual portal. It relates to your user base under `ou=users`, the realm `dx-users` and the client `dx-users-oidc-client`. This virtual portal is fully protected and enforces a users from this group to be authenticated.

1. **https://&lt;HOSTNAME&gt;/wps/portal/woodburnstudio-vp-customers**

    This is your second virtual portal. It relates to your user base under `ou=customers` as well as `ou=guests`, the realm `dx-customers-guests` and the client `dx-customers-oidc-client`. This virtual portal is fully protected and enforces a users from this group to be authenticated.

1. **https://&lt;HOSTNAME&gt;/wps/portal/woodburnstudio-vp-guests**

    This is your third virtual portal. It relates to your user base under `ou=customers` as well as `ou=guests`, the same realm `dx-customers-guests` and the client `dx-guests-oidc-client`. This virtual portal is fully protected and enforces a users from this group to be authenticated. Users logged in to either client `dx-customers-oidc-client` and `dx-guests-oidc-client` should be able to access the other respective virtual portal without an additional login, but rather only require a redirect through the Keycloak UI (immediately continuing with a valid session).

### Additional and optional steps

There are more things that you can consider here, e.g. setting up proper login URLs, adding links to the virtual portals within your pages to jump around nicely etc.

The virtual portal instructions end here, but feel free to play around further and (potentially) break things!
