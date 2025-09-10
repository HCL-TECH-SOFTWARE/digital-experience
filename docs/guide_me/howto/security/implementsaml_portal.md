# How to implement SAML for Portal

## Applies to
> HCL Portal Server 8.5

## Introduction

Security Assertion Markup Language (SAML) is an OASIS standard for representing and exchanging user identity, authentication, and attribute information. SAML is widely used to enable cross-vendor single sign-on (SSO).

HCL Portal Server often runs in environments that include multiple integrated components. In these cases, SAML SSO is a common choice to provide a seamless user experience.

Because HCL Portal Server is based on WebSphere Application Server (WAS) middleware technology and uses the WAS security layer, SAML SSO is available in HCL Portal Server through WAS.

This article describes the SAML 2.0 standard, the SAML SSO capabilities available in WAS, and the steps to implement it for HCL Portal Server with a generic identity provider (IdP).

---

### SAML 2.0 standard

SAML 2.0 specifies a Web Browser SSO profile involving three actors:

- **Identity provider (IdP)**
- **Service provider (SP)**
- **Principal (user) with an HTTP user agent**

The SP supports four bindings, and the IdP supports three. This results in 12 possible deployment scenarios, which fall into two categories:

- **IdP-initiated SSO**
- **SP-initiated SSO**

---

### IdP-initiated SSO

To access a protected resource on the SP, the user must first authenticate with the IdP. The IdP then redirects the user to the SP, including a `SAMLResponse` with the user’s authentication information.

Because the SP trusts the IdP, it can validate the `SAMLResponse` and create an authenticated session without requiring additional credentials.

The IdP can also send the user directly to the SP without requiring a manual choice in these cases:

- The IdP manages a single SP, so the redirect target is clear.  
- The authentication request to the IdP includes a query string that specifies the SP. The IdP uses this parameter to define the redirect target.  

---

### SP-initiated SSO

In this scenario, the SP is the first component contacted by the user.

If the user is not authenticated, the SP redirects the user to the IdP. The redirect includes a `SAMLRequest` that provides the IdP with the information required to authenticate the user and redirect them back to the SP.

The key difference between IdP-initiated and SP-initiated SSO is the presence of the `SAMLRequest` when the IdP is contacted. The second part of the flow—from IdP to SP—is the same in both scenarios.

---
## Instructions

### Implementation details

#### WebSphere Application Server limitation

With the current version of WebSphere Application Server (8.5.5), WAS only supports IdP-initiated SSO. It cannot generate the required `SAMLRequest` defined by the SAML standard for SP-initiated SSO.

To avoid requiring users to select the correct link for redirection to WAS, use this approach:

1. The user requests a WAS-secured resource.  
2. A SAML TAI is in place. If the user is not already authenticated, it redirects the user to the IdP URL. This URL should include a keyword as a URL parameter that the IdP can use after login.  
3. The browser generates an additional cookie, `WasSamlSpReqURL`, which identifies the originally requested resource.  
4. The IdP authenticates the user and sends them back to WAS. The redirect goes to a SAML application deployed on WAS called the Assertion Consumer Service (ACS).  
5. The ACS validates and processes the `SAMLResponse` from the IdP. It creates the authenticated session on WAS and issues the LTPA cookie for the user.  
6. If the `WasSamlSpReqURL` cookie is available, the user is redirected to the originally requested resource as an authenticated user. Otherwise, the user is redirected to the URL configured in the TAI.

![WAS IdP authentication flow diagram](files/appnserverlimit.jpg)

### IdP-initiated configuration for Portal

!!! note
    Most of the steps described in this document are included in WAS 8.5 Infocenter, but here they are collected together in a single document, specific to HCL Portal.

The sample configuration provided is from a real-world experience with an F5 as IdP and a single-server installation of HCL Portal Server.

### Install the SAML ACS application

A new enterprise application must be installed. In the WAS Admin Console, follow these steps:

1. Open **Applications > New Application > New Enterprise Application**.
   ![New enterprise application](files/saml_acs_appn.jpg)
2. Select **Remote file system** and choose the EAR file.
   ![Choose EAR](files/saml_acs_ear.jpg)
3. Click **Next** three times.  
4. Click **Finish**.  
5. Save the configuration.

### Configure SAML TAI

Log on to the WebSphere Application Server administrative console.

1. Click **Security > Global security > Web and SIP security > Trust association**.  
2. Under the **General Properties** heading, make sure the **Enable trust association** check box is not selected.  
3. Click **Interceptors**.  
![Enable trust association](files/saml_tai.jpg)
4. Click **New** and enter `com.ibm.ws.security.web.saml.ACSTrustAssociationInterceptor` in the *Interceptor class name* field.  
![Interceptor Name](files/config_saml_tai2.jpg)

### Configure Custom Properties

Under **Custom properties**, fill in the following information:

```
sso_1.sp.acsUrl = https://<hostname>:<sslport>/samlsps/wps/
sso_1.sp.filter = request-url%=/wps/myportal
sso_1.sp.idMap = localRealm
```
5. Click **OK**.

6. Go back to **Security > Global security** and click **Custom properties**. 

7. Look for `com.ibm.websphere.security.DeferTAItoSSO` and replace the existing value with `com.ibm.ws.security.web.saml.ACSTrustAssociationInterceptor`.

!!! note
    The property `com.ibm.websphere.security.DeferTAItoSSO` was previously used in the default configuration of all installed servers.  
    Now it is only used as part of the SAML configuration.

8. Click **OK**.

9. Restart the WebSphere Application Server.


### Add IdP

To use the WebSphere Application Server SAML service provider for single sign-on with an identity provider, you need to add the identity provider as a partner. From the IdP, export the metadata in XML format, then follow this procedure:

1. Start the WebSphere Application Server.
2. Start the **wsadmin** command-line utility from the `<AppServer_root>/bin` directory by entering:
   ```bash
   /opt/IBM/WebSphere/AppServer/bin/wsadmin.sh -lang jython
   ```
3.	At the wsadmin prompt, enter:
    ```
    AdminTask.importSAMLIdpMetadata('-idpMetadataFileName <IdPMetaDataFile> -idpId 1 -ssoId 1 -signingCertAlias <idpAlias>')
    ```
    - <IdPMetaDataFile> is the full path name of the IdP metadata file.
	-<idpAlias> is any alias name you specify for the imported certificate.
4.	Save the configuration:
    ```
    AdminConfig.save()
    ```
5.	Exit the wsadmin command utility:
```
quit
```
6.	Restart the WebSphere Application Server.