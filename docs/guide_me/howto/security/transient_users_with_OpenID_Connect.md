# How to integrate transient users with OpenID Connect

## Applies to

> HCL Digital Experience v8.5 and higher

## Introduction

[OpenID Connect (OIDC)](https://openid.net/connect/){target="_blank"} specifies how applications can rely on external identity providers to authenticate and identify users. OIDC literature refers to applications as relying parties (RP) and identity providers as OIDC providers (OP). With OIDC, a user submits credentials to the OP only. The OP verifies these credentials to authenticate the user.  Then, the OP identifies the user to the RP through secure channels.  

In this article, you will learn how to integrate [HCL Digital Experience (DX)](https://www.hcl-software.com/products/dx) with two OIDC services: [Auth0](https://auth0.com/docs/protocols/openid-connect-protocol){target="_blank"} and [Google](https://developers.google.com/identity/protocols/oauth2/openid-connect){target="_blank"}. 

OIDC provides different options for meeting certain security requirements such as:  
  
- [Multi-factor authentication (MFA)](https://owasp.org/www-project-top-ten/2017/A2_2017-Broken_Authentication){target="_blank"}
- [Password policy enforcement](https://owasp.org/www-project-web-security-testing-guide/v41/4-Web_Application_Security_Testing/04-Authentication_Testing/07-Testing_for_Weak_Password_Policy){target="_blank"}
- [Limiting failed login attempts](https://owasp.org/www-community/controls/Blocking_Brute_Force_Attacks){target="_blank"}  
- [Eliminating attack vectors against user credentials](https://openid.net/connect/faq/){target="_blank"}
- [Single Sign-On (SSO) integration](https://auth0.com/docs/integrations/sso/){target="_blank"}

Relying on OIDC services for secure and well-tested implementations saves time and limits risk for DX developers compared to writing custom code.

HCL DX [deprecated its legacy OpenID Authentication](https://help.hcl-software.com/digital-experience/8.5/security/use_openid.html){target="_blank"} implementation in 8.5, due to changes in the interfaces of popular identity providers that rendered the DX trust association interceptor (TAI), [com.ibm.portal.auth.OpenIDTAI](https://help.hcl-software.com/digital-experience/8.5/security/use_social.html){target="_blank"}, obsolete.  It is recommended that DX-based applications use a TAI from IBM WebSphere Application Server (WAS) instead.  

To support OpenID Connect, [WAS provides a TAI that acts as a Relying Party](https://www.ibm.com/support/knowledgecenter/SSEQTP_8.5.5/com.ibm.websphere.base.doc/ae/csec_oiddesc2.html){target="_blank"}. To support environments where access to the actual or any mirrored user repository  of the OP is restricted, [DX provides the transient users](../../../deployment/manage/security/people/authentication/openid_trans_users.md) functionality that treats OIDC-authenticated users as members of All Authenticated Portal Users for access control purposes. Minimal custom code can bridge these components and provide DX-based applications a simple way to integrate with an OIDC OP.  

These simple login modules can be improved to read user attributes and group membership from the OP for use in DX.  This enables greater integration for the purposes of access controls, personalization, and Portal User Management Architecture (PUMA) read operations.  

!!!note
    OIDC authentication can be configured without transient users and its corresponding custom Java Authentication and Authorization Service (JAAS) login modules if DX has access to an actual or mirrored user repository of the OIDC Provider (for example, LDAP). The examples provided in this article do not apply exactly to such environments, but they can be used as a helpful reference for specific parts of the configuration.

## Instructions

1. Refer to [HCL DX Transient Users and OIDC Guide](./files/HCL%20DX%20Transient%20Users%20and%20OpenID%20Connect.zip) for instructions on basic DX - OIDC integration. `HCLDummyJAASLoginModule.jar` includes the sample code referenced in the PDF.

2. Refer to [HCL DX OpenID Connect Improvements](./files/HCL%20DX%20OpenID%20Connect%20Improvements.zip) for a lab which explores tighter integration of attributes, group membership, and access control. `HCLDummyJAASLoginModuleImproved.jar` includes sample code for this lab and additional sample code for multiple OP integration.

3. Refer to [HCL DX with Auth0 Social Connections](./files/HCL%20DX%20with%20Auth0%20Social%20Connections.zip) for a lab that explores logging in to DX with Facebook using a Social Connection from Auth0. `HCLDummyJAASAuth0GoogleFacebook.jar` includes sample code for this lab, which also incorporates previous labs.
