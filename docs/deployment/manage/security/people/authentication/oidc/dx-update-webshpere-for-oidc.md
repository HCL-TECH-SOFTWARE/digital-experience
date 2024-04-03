# Updating WebSphere to support OIDC Authentication for DX

This document provides instructions on how to configure a WebSphere Application Server to act as an OpenID Connect Relying Party. For more information, see [Configuring an OpenID Connect Relying Party](https://www.ibm.com/docs/en/was/8.5.5?topic=users-configuring-openid-connect-relying-party).

Follow the tasks to execute this configuration:

1. [Install the OIDC RP TAI for WebSphere](#installing-the-oidc-rp-tai)
2. [Configure the TAI against Keycloak OIDC](#configuring-the-oidc-rp-tai-against-your-idp)
3. [Updating WAS security properties to match the new TAI requirements](#updating-was-security-properties)
4. [Adding the server certificate to the WAS trust store to allow internal HTTPS communication](#adding-the-hostname-or-server-certificate-to-the-was-trust-store)
5. [Adding the trusted authentication realm](#adding-the-trusted-authentication-realm)
6. [Security role to user or group mapping](#security-role-to-user-or-group-mapping)
7. [Updating the DX Logout flow for OIDC](#updating-the-dx-logout-flow-for-oidc)
8. [Configuring DX VMM to match OIDC identities](#configuring-dx-vmm-to-match-oidc-identities)

## Installing the OpenID Connect application

1. Make sure that your OIDC runtime is up to date.
   
   If an interim fix is available for your fix pack, install the OIDC interim fix for the latest OIDC runtime. See [Obtaining WebSphere OpenID Connect (OIDC) latest version](https://www.ibm.com/support/pages/node/290565).

2. Install the OpenID Connect application by using the python script.
   
   1. Navigate to the `app_server_root/bin` directory.
   2. Run the script `installOIDCRP.py` for each profile on which the OpenID Connect RP is to be installed.

    ```sh
    kubectl exec -it dx-deployment-core-0 bash -n dxns

    cd /opt/HCL/AppServer/bin
    ./wsadmin.sh -f installOIDCRP.py install NodeName ServerName
    ```

    For example:
    ```sh
    ./wsadmin.sh -f installOIDCRP.py install dockerNode WebSphere_Portal

    ...
    ADMA5013I: Application WebSphereOIDCRP installed successfully.
    ```
    
    For more information, see [Configuring an OpenID Connect Relying Party](https://www.ibm.com/docs/en/was-nd/9.0.5?topic=users-configuring-openid-connect-relying-party).

2. Open the ISC and go to **Applications > Application types > Enterprise Applications > WebsphereOIDCRP >  Manage modules**.

3. Select the available module and click “Apply” then “OK”.

    ![OIDCRP WAS Server Mapping](../../../../../../images/OIDCRP_WAS_SERVER_MAPPING.png)

### Restarting the server / DX core to apply all changes

Restart the server (that is, the DX core JVM) do load the newly installed OIDC RP TAI. This is required for the next configuration steps. Restarting the server can be done in various ways, for example, through the ConfigEngine:

```sh
kubectl exec -it dx-deployment-core-0 bash -n dxns
/opt/HCL/wp_profile/ConfigEngine/./ConfigEngine.sh stop-portal-server
```

## Configuring the OIDC RP TAI against your IdP

The following configuration allows the OIDC TAI to contextualize which requests should be intercepted and how to treat them. In particular, this configuration is tightly connected to the IdP realm and client configuration.

The interceptor is configured in the ISC under **Security > Global Security > Web and SIP security > Trust association > Interceptors**:

1. Click on the **New** button to create a new interceptor with the **Interceptor class name** `com.ibm.ws.security.oidc.client.RelyingParty`.

    !!!note
        If the interceptor already exists, click on it to access the configuration properties instead of creating it again.

1. Add the following custom properties:

    | Name | Value |
    | --- | --- |
    | provider_1.identifier |keycloak|
    | provider_1.clientId | hcl-dx-oidc-client |
    | provider_1.clientSecret | &lt;CLIENT_SECRET&gt; |
    | provider_1.discoveryEndpointUrl | https://&lt;IDP_HOSTNAME&gt;/auth/realms/hcl/.well-known/openid-configuration |
    | provider_1.interceptedPathFilter | /wps/myportal |
    | provider_1.issuerIdentifier | https://&lt;IDP_HOSTNAME&gt;/auth/realms/hcl |
    | provider_1.userIdentifier | username (**Note**: Could also use `email` here as well.) |
    | provider_1.scope | openid |
    | provider_1.signVerifyAlias | hcl-dx-oidc-cert |
    | provider_1.useJwtFromRequest | ifPresent |
    | provider_1.createSession | true |
    | provider_1.verifyIssuerInIat | true |
    | provider_1.audiences | ALL_AUDIENCES |
    | provider_1.setLtpaCookie | true |
    | provider_1.useRealm | WAS_DEFAULT |
    | provider_1.mapIdentityToRegistryUser | true |

    !!!note
        - Make sure to replace the `<IDP_HOSTNAME>` and `<CLIENT_SECRET>` placeholders with your respective details. The client secret is available through your IdP client configuration. Also ensure other properties match your environment configuration, for example, the path filter matches your DX context, the OIDC URLs match your IdP endpoint structure, and the right client id is used.
        - Set the `interceptedPathFilter` property to `/wps/myportal`, so that TAI protects any request to this resource. The value is subject to change and is completely dependent on how you have configured the context root while setting up DX. This property allows you to specify a comma-separated list of regular expression URI patterns. To protect any additional requests to the resources can be specified using this property.

1. Click **Apply** and **OK**.  Click **Save** to save the changes directly to the master configuration in the alert message.

## Updating WAS security properties

To update the custom properties to match the OIDC TAI config and its expected behaviour, go to **Security >  Global security > Custom properties**:

1. Delete the property `com.ibm.websphere.security.DeferTAItoSSO` if it exists.

1. Add or update the following properties:

    | Name                                                    | Value            |
    | ------------------------------------------------------- | ---------------- |
    | com.ibm.websphere.security.customSSOCookieName          | LtpaToken2       |
    | com.ibm.websphere.security.disableGetTokenFromMBean     | false            |

1. Click **Save**, to save the changes.

## Adding the hostname or server certificate to the WAS trust store

To allow internal HTTPS communication with your IdP, add the hostname (FQDN) to the WebSphere trust store.

In the ISC, navigate to **Security > SSL certificate and key management > Key stores and certificates > NodeDefaultTrustStore > Signer Certificates > Retrieve from port**:

1. Set the following properties:

    | Name | Value |
    | --- | --- |
    | Host | &lt;IDP_HOSTNAME&gt; |
    | Port | 443 |
    | Alias | hcl-dx-oidc-cert (**Note**: This is the same value that is provided in the interceptor property `signVerifyAlias`) |

1. Click **Retrieve signer information**, to load the certificate details.

1. Click **OK** and **Save** to save the master configuration.

## Updating the DX Logout flow for OIDC

1. In the IBM WebSphere Application Server Integrated Solutions Console, navigate to **Resources > Resource Environment > Resource Environment Providers > WP ConfigService > Custom properties**:

1. Add or update the following properties:

    | Name | Value |
    |---|---|
    |redirect.logout | true |
    |redirect.logout.ssl | true |
    |redirect.logout.url | https://&lt;IDP_HOSTNAME&gt;/auth/realms/hcl/protocol/openid-connect/logout?post_logout_redirect_uri=https://&lt;DX_HOSTNAME&gt;/wps/portal&client_id=hcl-dx-oidc-client |

## Configuring DX VMM to match OIDC identities

### Setting the login property to mail

Follow the steps, to set the log in property to `mail` to match the identity attribute coming in from your IdP:

1. Go to the IBM WebSphere Application Server Integrated Solutions Console.

1. Navigate to **Security > Global security > User account repository > Configure > <LDAP_ID>**

1. Set the field for **Federated repository properties for login** to `mail`.

1. Click **OK** and **Save** to save the master configuration.

### Updating IBM WebSphere Application Server sub-component Virtual Member Manager (VMM) to map user attributes

1. After setting the login property to `mail`, this change is worked into the WAS wimconfig.xml .

    !!! note
        This requires a manual update of the file, make sure to back the file up as this will corrupt your instance.

    ```sh
    kubectl exec -it dx-deployment-core-0 bash -n dxns

    cd /opt/HCL/wp_profile/config/cells/dockerCell/wim/config/
    # Create a backup
    cp wimconfig.xml wimconfig.xml.backup

    # Start editing the wimconfig.xml
    vi wimconfig.xml

    ```

1. Find the `userSecurityNameMapping` config attribute in the realmConfiguration and change the value of the property `propertyForOutput` to `uniqueName`:

    ```xml
    # before
    <config:userSecurityNameMapping propertyForInput="principalName" propertyForOutput="principalName"/>

    # after
    <config:userSecurityNameMapping propertyForInput="principalName" propertyForOutput="uniqueName"/>
    ```

1. Make sure to save the changes.

### Restarting the server / DX core to apply all changes

Restart the DX environment (specifically, the DX core JVM) for the changes to take effect. Restarting the server can be done in various ways, for example, through the ConfigEngine:

```sh
kubectl exec -it dx-deployment-core-0 bash -n dxns
cd /opt/HCL/AppServer/bin 
./stopServer.sh WebSphere_Portal
./startServer.sh WebSphere_Portal
```

The restart takes a few minutes to complete.

## What's next

!!!note
    In case you desire to fully detach your WebSphere environment from the user federation, this is considered a "transient user" setup. This requires additional steps to be performed and are outlined in [Updating WebSphere to support OIDC Authentication for DX with Transient Users](transient-users/dx-update-webshpere-for-oidc-transient-users.md).

Once you have updated WebSphere to support OIDC authentication for DX,  look at the steps outlined in [Adjusting the DX Login flow for OIDC](./dx-integration.md).
