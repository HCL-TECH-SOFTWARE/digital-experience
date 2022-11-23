# Integrating with Transient Users with OpenID Connect

[OpenID Connect](https://openid.net/connect/) (OIDC) specifies how applications can rely on external identity providers to authenticate and identify users.  OIDC literature refers to applications as relying parties (RP) and identity providers as OIDC providers (OP).  With OIDC, a user submits credentials to the OP only.  The OP verifies these credentials to authenticate the user.  The OP then identifies the user to the RP via secure channels.  The following lab explores integrating HCL Digital Experience™ (DX) with two OIDC services, [Auth0](https://auth0.com/docs/authenticate/protocols/openid-connect-protocol) and [Google](https://developers.google.com/identity/protocols/oauth2/openid-connect).

Architects may find OIDC services attractive options for meeting certain security requirements, like:
   * [Multi-factor authentication](https://owasp.org/www-project-top-ten/2017/A2_2017-Broken_Authentication) (MFA)
   * [Password policy enforcement](https://owasp.org/www-project-top-ten/2017/A2_2017-Broken_Authentication)
   * [Limiting failed login attempts](https://owasp.org/www-project-top-ten/2017/A2_2017-Broken_Authentication)
   * [Eliminating attack vectors against user credentials](https://openid.net/connect/faq/)
   * [SSO integration](https://auth0.com/docs/customize/integrations/sso-integrations)

Relying on OIDC services for secure and well-tested implementations saves time and limits risk for DX developers, versus writing custom code.

HCL DX [deprecated its legacy OpenID Authentication](/digital-experience/whatsnew/deprecated_features) implementation in 8.5, due to changes in the interfaces of popular identity providers that rendered the DX trust association interceptor (TAI), [com.ibm.portal.auth.OpenIDTAI](https://help.hcltechsw.com/digital-experience/8.5/security/use_social.html), obsolete.  HCL recommends that DX-based applications use a TAI from IBM WebSphere Application Server (WAS) instead. 

To support OpenID Connect, [WAS provides a TAI that acts as a Relying Party](https://www.ibm.com/docs/en/was/8.5.5?topic=users-openid-connect-overview).  To support environments where access to the actual or any mirrored user repository  of the OP is restricted, [DX provides transient users](https://help.hcltechsw.com/digital-experience/8.5/security/openid_trans_users.html) functionality that treats OIDC-authenticated users as members of [All Authenticated Portal Users](../../authorization/users_and_groups/adusrgrp_user.md) for access control purposes.  Minimal custom code can bridge these components and provide DX-based applications a simple way to integrate with an OIDC OP. 

Such simple login modules can be improved to read user attributes and group membership from the OP for use in DX.  This enables greater integration for the purposes of access controls, personalization, and PUMA (read).

!!! note 
    OIDC authentication can be configured **without transient users** and corresponding custom JAAS login module, if Digital Experience has access to an actual or mirrored user repository of the OIDC Provider, e.g. LDAP.  These labs **do not apply exactly** to such environments but may be a helpful reference for only specific parts of the configuration.

Refer to **HCL DX Transient Users and OIDC Guide.pdf** in the attached [HCL DX Transient Users and OpenID Connect.zip](/digital-experience/assets/HCL_DX_Transient_Users_and_OpenID_Connect.zip) for instructions on basic DX/OIDC integration. **HCLDummyJAASLoginModule.jar** includes the sample code referenced in the PDF.

Refer to **HCL DX OpenID Connect Improvements.pdf** in the attached [HCL DX OpenID Connect Improvements.zip](/digital-experience/assets/HCL_DX_OpenID_Connect_Improvements.zip) for a lab which explores tighter integration of attributes, group membership, and access control.  **HCLDummyJAASLoginModuleImproved.jar** includes sample code for this lab and additional sample code for multiple OP integration.

Refer to **HCL DX with Auth0 Social Connections.pdf** in the attached HCL [DX with Auth0 Social Connections.zip](/digital-experience/assets/HCL_DX_with_Auth0_Social_Connections.zip) for a lab which explores logging in to Digital Experience with Facebook via a Social Connection from Auth0.  **HCLDummyJAASAuth0GoogleFacebook.jar** includes sample code for this lab which also incorporates previous labs.