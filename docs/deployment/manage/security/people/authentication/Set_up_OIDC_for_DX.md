
# Setting up OIDC for HCL Digital Experience



## Configure OIDC Authentication for DX

The following steps configure your HCL Digital Experience (DX) installation to leverage OpenID Connect (OIDC) based authentication with an OIDC compatible Identity Provider (IdP), such as Keycloak. This means that DX is turned into a relying party (RP) towards your IdP and the IdP is trusted for authentication assertions.


### What is this about?

An increasing number of enterprises are leveraging IdPs to manage the identities, access rights, and authentication flows of their customers, employees, and partners towards their applications and IT landscape. Common IdP solutions and services include Microsoft Azure Active Directory, Okta, Auth0, or Keycloak. Each of the available solutions has unique takes and capabilities that may make them a good choice or fit over another, but all of them focus on common and standardized authentication strategies - most notably OIDC.

OpenID Connect (OIDC) serves as a modern authentication and authorization protocol designed to enhance digital security and user experience, particularly in the realm of identity and access management (IAM). Operating as an extension of the OAuth 2.0 framework, OIDC merges the strengths of OAuth's access delegation capabilities with identity verification, resulting in a comprehensive solution.


At its core, OIDC streamlines the process of confirming user identities and authorizing their access to digital resources. It achieves this through the establishment of a trust relationship between the Identity Provider and the relying party (a web application or service, such as HCL Digital Experience). Users initiate the process by presenting their credentials to the IdP, which validates their identity. Subsequently, the IdP issues tokens, including the ID token which acts as proof of authentication, and the access token which grants access to protected resources. This allows supporting capabilities like Single Sign-On (SSO) across multiple applications, prolonged and uninterrupted user sessions, and enabling seamless collaboration across organizations while maintaining a secure identity exchange with granular control over data sharing. The protocol's flexibility accommodates diverse use cases, from mobile applications to single-page web apps.


HCL DX and HCL Digital Solutions (DS) products as a whole recognize the benefits of and requirements to OIDC and thus support it. The following document provides an initial set of instructions to get started and enable HCL DX for it.

HCL DX in particular has a vast set of capabilities relating to authentication, such as [custom authentication filters](../../../config_portal_behavior/auth_filters/index.md), [transient users](https://pages.git.cwp.pnp-hcl.com/CWPdoc/common-documentation/hcl-authentication-service/integration/ds-integration/(https://opensource.hcltechsw.com/digital-experience/CF213/deployment/manage/security/people/authentication/integrate_oid/), [step-up authentication](../authentication/stepup_auth/enabling_stepup_auth/stepup_auth_prop.md), a customizable login UI through portlets and more. Some of those capabilities require additional steps or are by design incompatible with standard OIDC-based authentication and access flows and may not work out of the box. This documentation will be updated and extended with additional configuration steps and strategies to get them working or clearly outline their limitations.

If you are interested in the transient users functionality as part of OIDC, please refer to the documentation around [Integrating with Transient Users with OpenID Connect](../authentication/integrate_oid/index.md).

### Overview of required configuration tasks


On a high level, the following tasks must be executed to establish this configuration:

- Install the OIDC RP Trust Association Interceptor (TAI) for WebSphere.

- Configure the OIDC RP TAI against your IdP.

- Update WAS security properties to match the new TAI requirements.

- Add the server certificate to the WAS trust store to allow internal HTTPS communication.

- Update the DX logout flow for OIDC.

- Configure DX VMM to match OIDC identities.

- Set up the login link from DX to your IdP.

- Validate everything is working as expected.

### What implications does this have?

Please be aware that configuring OIDC as the authentication protocol has certain implications to how features behave and have to be used or configured. Some of those implications are:


- A WebSphere administrative user / wpsadmin (or similar users) configured within WAS file registry will not be known to OIDC providers and cannot leverage the OIDC flow. Such users have to leverage alternate means of logging in.

- The outlined steps will still require the WebSphere server to have a federation to the same user directory set up in order to resolve users. There is an option for [Integrating with Transient Users with OpenID Connect](../authentication/integrate_oid/index.md). 

<!-----This is subject to be elaborated on as part of this documentation in a later iteration.-->

- Creating users or allowing them to sign-up through DX might be blocked due to the user management being relocated to the IdP as the primary orchestrator.

### Additional information


Although these tasks will generally work, we are using references for how a configuration might look like in various places. In some cases, there are additional configuration options that alter the values to input or require steps to be conducted slightly differently. The following assumptions have been made:

- There is only one hostname in use (this might differ e.g., if you are using Virtual Portals).


- The default context root /wps/portal (and /wps/myportal) are being used, with `myportal` being the secured URL.


- The login property to identify users is the mail attribute.

- The cloud native distribution of DX is being used.

- An IdP is set up and configured. Required details like the client id or secrets are available to configure during the below tasks.


- A Keycloak service (specifically, the HCL DS branded Keycloak version) is being used as the IdP (The OIDC layer will look mostly the same with any other IdP but cannot be guaranteed due to the extensive landscape of providers).

!!! note
    As an additional note to the above point on the used HCL DS branded Keycloak service, there are a couple of steps that have to be conducted to set up the OIDC layer on the IdP side. This includes the setup of a realm, client, user federation, and custom claims. The document [Configure Keycloak for DX](https://pages.git.cwp.pnp-hcl.com/CWPdoc/common-documentation/hcl-authentication-service/integration/ds-integration/dx-keycloak-configuration) provides details steps on setting up all necessary parts. If you are using a different IdP, this might still be relevant to confirm you are setting the OIDC layer up in a way that will work with DX.

## Install the OIDCRP TAI

1. Install the OIDC RP Trust Association Interceptor (TAI). For more details, see here: [Configuring an OpenID Connect Relying Party](https://www.ibm.com/docs/en/was-nd/9.0.5?topic=users-configuring-openid-connect-relying-party).


```
kubectl exec -it dx-deployment-core-0 bash -n dxns

cd /opt/HCL/AppServer/bin
./wsadmin.sh -f installOIDCRP.py install dockerNode WebSphere_Portal
Username: wpsadmin
Password: wpsadmin

...
ADMA5013I: Application WebSphereOIDCRP installed successfully.

```

2. Open websphere console and go to **Applications > Application types > Enterprise Applications > WebsphereOIDCRP > Manage modules**.

3. Select available module and click “Apply” then “OK”. ![](../../../../../images/OIDCRP_WAS_SERVER_MAPPING.png)

### Restart the server / DX core to apply all changes

Restart the server (i.e., the DX core JVM) to load the newly installed OIDC RP TAI. This is required for the next configuration steps. Restarting the server can be done in various ways, e.g. through the ConfigEngine:

```
Restart the server / DX core to apply all changes
Restart the server (i.e., the DX core JVM) do load the newly installed OIDC RP TAI. This is required for the next configuration steps. Restarting the server can be done in various ways, e.g. through the ConfigEngine:
```

## Configure the OIDC RP TAI against your IdP

The following configuration will allow the OIDC TAI to contextualize which requests should be intercepted and how to treat them. In particular, this configuration is thightly connected to the IdP realm and client configuration.

The interceptor can be configured in the WAS console under **Security > Global Security > Web and SIP security > Trust association > Interceptors**.

- Click **New..** button to create a new interceptor with the **Interceptor class name**.

    `com.ibm.ws.security.oidc.client.RelyingParty`.

!!! note
    If the interceptor already exists, just click on it to access the configuration properties instead of creating it again.

- Add the following custom properties:


|Name|Value|
|-----|---|
|provider_1.identifier|	hcl|
|provider_1.clientId	|hcl-dx-oidc-client|
|provider_1.clientSecret|	<CLIENT_SECRET>|
|provider_1.authorizeEndpointUrl	|https://<HOSTNAME>/realms/hcl/protocol/openid-connect/auth|
|provider_1.tokenEndpointUrl	|https://<HOSTNAME>/realms/hcl/protocol/openid-connect/token|
|provider_1.interceptedPathFilter|	/wps/myportal|
|provider_1.excludedPathFilter|	/ibm/console,/ibm/console.*|
|provider_1.issuerIdentifier	|https://<HOSTNAME>/realms/hcl|
|provider_1.signatureAlgorithm	|RS256|
|provider_1.jwkEndpointUrl	|https://<HOSTNAME>/realms/hcl/protocol/openid-connect/certs|
|provider_1.userIdentifier	|email|
|provider_1.userDefaultIdentifierFirst	|false|
|provider_1.scope	|openid|
|provider_1.signVerifyAlias	|hcl-dx-oidc-client|
|provider_1.useJwtFromRequest	|IfPresent|
|provider_1.createSession	|true|
|provider_1.verifyIssuerInIat	|true|
|provider_1.audiences	|ALL_AUDIENCES|
|provider_1.setLtpaCookie	|true|
|provider_1.callbackServletContext	|/oidcclient|
|provider_1.mapIdentityToRegistryUser	|true|

!!! note
    Make sure to replace the <HOSTNAME> and <CLIENT_SECRET> placeholders with your respective details. The client secret is available through your IdP client configuration. Also ensure other properties match your environment configuration, i.e. the path filter matches your DX context, the OIDC URLs match your IdP endpoint structure, the right client id is being used etc.

- Click **Apply** and **OK** button. To continue the changes, click the link **Save** directly to the master configuration in the alert message.

## Update WAS security properties

Some custom properties have to be updated to match the OIDC TAI config and its expected behavior. To do so, go to **Security > Global security > Custom properties**.

- Delete the property `com.ibm.websphere.security.DeferTAItoSSO` if it exists. Afterwards, add or update following properties:


|Name|Value|
|-----|----|
|com.ibm.websphere.security.customLTPACookieName	|LtpaToken|
|com.ibm.websphere.security.customSSOCookieName	|LtpaToken2|
|com.ibm.websphere.security.disableGetTokenFromMBean	|false|

- To continue the changes, click **Save** link.

## Add the hostname/server certificate to the WAS trust store

In order to allow internal HTTPS communication with your IdP, we need to add the hostname (FQDN) to the WebSphere trust store.

In the WAS console, navigate to **Security > SSL certificate and key management > Key stores and certificates > NodeDefaultTrustStore > Signer Certificates > Retrieve from port**.

- Set the following properties:

|Name|	Value|
|-----|------|
|Host	|<HOSTNAME>|
|Port	|443|
|Alias	|hcl-idp (Note: same as provided in above interceptor property)|

- Click **Retrieve signer information**. This will load the certificate details.

- Click **OK**, and **Save** to the master configuration.

## Update the DX Logout flow for OIDC

In the WAS console, navigate to **Resources > Resource Environment > Resource Environment Providers > WP ConfigService > Custom properties**.

- Add or update the following properties:

|Name	|Value|
|------|------|
|redirect.logout	|true|
|redirect.logout.ssl	|true|
|redirect.logout.url	|https://<HOSTNAME>/auth/realms/hcl/protocol/openid-connect/logout?post_logout_redirect_uri=https://<HOSTNAME>/wps/portal&client_id=hcl-dx-oidc-client|

- To continue the changes, click **Save** link.

## Configure DX VMM to match OIDC identities


### Setting the login property to mail

First, set the login property to `mail` to match the identity attribute coming in from your IdP. To do this,

- Go to the WAS console

- Navigate to **Security > Global security > User account repository > Configure... > <LDAP_ID>**

- Set the field for **Federated repository properties for login** to `mail`.

- Then click **OK** and **save** to the master configuration.

### Update WIM config to map user attributes

The above change needs to be worked into the WAS wimconfig.xml as well. 

!!! note 
    This requires a manual update of the file - make sure to back the file up as this might otherwise corrupt your instance.

```
kubectl exec -it dx-deployment-core-0 bash -n dxns

cd /opt/HCL/wp_profile/config/cells/dockerCell/wim/config/
# Create a backup
cp wimconfig.xml wimconfig.xml.backup

# Start editing the wimconfig.xml
vi wimconfig.xml

```

From here, find the `userSecurityNameMapping` config attribute in the realmConfiguration and change the value of property `propertyForOutput` to `uniqueName` as outlined below:

```

# before
<config:userSecurityNameMapping propertyForInput="principalName" propertyForOutput="principalName"/>

# after
<config:userSecurityNameMapping propertyForInput="principalName" propertyForOutput="uniqueName"/>
```

Make sure to save the changes.

### Restart the server / DX core to apply all changes

Finally, restart the DX environment (specifically, the DX core JVM) to make the changes take effect. Restarting the server can be done in various ways, e.g. through the ConfigEngine:

```
kubectl exec -it dx-deployment-core-0 bash -n dxns
/opt/HCL/wp_profile/ConfigEngine/./ConfigEngine.sh stop-portal-server
```

The restart will take some minutes to complete.

## Setup login link from DX to your IdP

To properly invoke the OIDC flow, we need to ensure that the login link pushes us to the `/wps/myportal` URL which we set up to be interceptor in the OIDC configuration above. This involves multiple steps within the DX administration view.

### Detach the existing login option

First, we need to detach the existing login option by changing its unique name:

- Navigate to the portal site `https://<HOSTNAME>/wps/portal` and login as the admin user (wpsadmin:wpsadmin)

- Click **home icon** (Open applications menu) dropdown and click **Administration**.

- On the administration page, expand the menu on the top left and navigate to **Site Management > Pages.**

- On the **Manage Pages** page, search for **login** (Search by: Title starts with; Search: login). This should find the **Login** (wps.Login) page.

- Click **Edit Page Properties** icon (first action in the row). This brings you to the **Edit page: Login** configuration page

- In the **Unique Name** field edit the value and rename `wps.Login` to `wps.Login.default`. Click **OK**.

### Create the new IdP specific login option

Create the new login option that maps to `/wps/myportal`. This action will be set to be accessible by anonymous users:

- In `Manage Pages` page, click `Select Page` link, then click `Content Root` page and finally click on the Home page

- Click on the New URL button.

- Set **Title** to `Login-IdP`.

- Make sure the radio button for **A link to a Web page with the following URL** is selected.

- Set the url to `https://<HOSTNAME>/wps/myportal`.

- Click **OK**.

- On the **Manage Pages** page and select **Home** page, make sure you see the newly added **Login-IdP** URL. In the same row, click the Set Page Permission action

- On the **Resource Permissions** page, find the **User** row and click **Edit Role** action

- Click **+ Add** button, check the box next to **Anonymous Portal User** and click **OK**. The **Anonymous Portal User** role now appears in the **Resource Permissions** panel

### Map the new IdP specific login to use it

Update the unique name of the new IdP specific login page so that pages referring to the login option leverage it:

- On the left side nav click on **Settings > Custom Unique Names** and select **Pages** resource type

- Search for the **Login-IdP** page and click the Edit unique name for Page button in the respective row

- In the **Unique name** field, set the value to `wps.Login` and then click **OK**.

## Test the OIDC login flow


1. Log out or open a private browser and navigate to `https://<HOSTNAME>/wps/portal`.

2. Click **Log in**.
   This directs you to the IdP instance login view.

3. Log in with user `jjones1:password`.

4. You are directed to DX and logged in as user `jjones1`.

5. Navigate to `https://<HOSTNAME>/wps/myportal/Practitioner/Home` and confirm the displayed user is `jjones1`.
