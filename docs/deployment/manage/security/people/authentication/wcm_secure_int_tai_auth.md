# Integrating with IBM WAS TAI authentication

This roadmap outlines integration with IBM WebSphere Application Server Trust Association Interceptors (TAI) authentication for your environment.

WebSphere® Application Server provides Trust Association Interceptors (TAI) plug-ins to generate an authenticated session and security context for applications that are running on the tWas infrastructure and the HCL Portal server. The login process is coded to recognize an established WebSphere Application Server authentication and use the implicit login path for such cases.

## Combining the WebSphere Application Server authentication to the portal session by reusing the WebSphere Application Server Subject group information for access control.

Portal does not reuse group information by default. You must configure portal to reuse group information from the WebSphere Application Server security context.

## Configuring WAS TAI to allow users that are available in the connected repositories to log in.

The SAML TAI and OpenID Connect TAI configuration accepts users of the configured Identity Provider (IdP) to log in to the configured Application Server. An asserted user fits the portal concept of transient users. Transient user IDs are not stored locally, but are trusted and verified after configuration.

For more information, refer to the following:

-   [Enabling your system to use the SAML web single sign-on (SSO) feature](https://www.ibm.com/docs/en/was-nd/9.0.5?topic=swss-enabling-your-system-use-saml-web-single-sign-sso-feature)
-   [Configuring an OpenID Connect Relying Party](https://www.ibm.com/docs/en/was/9.0.5?topic=users-configuring-openid-connect-relying-party)

## Placing a login module in the WebSphere Application Server WEB\_INBOUND login flow before you create the LTPA token, then updating the distinguished name created by the TAI so it is recognized as a portal transient user.

Users do not have to be known in the connected repositories, as long their distinguished name structure fits the portal pattern.


For more information, refer to the following:

-   [HCL Digital Experience: Integrating Transient Users with OpenID Connect](https://support.hcltechsw.com/csm?id=kb_article&sysparm_article=KB0084411)
-   [Enable Appserver RelyingParty TAI for Google authentication with Portal](https://support.hcltechsw.com/csm)



