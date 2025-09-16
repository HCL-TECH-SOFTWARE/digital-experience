# How to integrate transient users with OpenID Connect

## Applies to

> HCL Digital Experience v8.5 and higher

## Introduction

Security Assertion Markup Language (SAML) is an OASIS standard for representing and exchanging user identity, authentication, and attribute information. SAML is widely used to enable cross-vendor single sign-on (SSO). HCL Portal Server often runs in environments that include multiple integrated components. In these cases, SAML SSO is a common choice to provide a seamless user experience. Because HCL Portal Server is based on WebSphere Application Server (WAS) middleware technology and uses the WAS security layer, SAML SSO is available in HCL Portal Server through WAS.

This article describes the SAML 2.0 standard, the SAML SSO features available in WAS, and the steps to implement SAML SSO for HCL Portal Server with a generic identity provider (IdP).

---

### SAML 2.0 standard

SAML 2.0 defines a Web Browser SSO profile involving three actors:

- **Identity provider (IdP)**
- **Service provider (SP)**
- **Principal (user) with an HTTP user agent**

The SP supports four possible bindings, and the IdP supports three. This combination results in 12 possible deployment scenarios, grouped into two types:

- **IdP-initiated SSO**
- **SP-initiated SSO**

---

### IdP-initiated SSO

To access a protected resource on the SP, the user must first authenticate with the IdP. The IdP then redirects the user to the SP, including a `SAMLResponse` that contains the user’s authentication information.

Because the SP trusts the IdP, it can validate the `SAMLResponse` and create an authenticated session without requiring additional credentials.

The IdP can also send the user directly to the SP without requiring user selection in these cases:

- The IdP manages only one SP, so the redirect target is clear.
- The authentication request to the IdP includes a query string that specifies the SP. The IdP uses this parameter to define the redirect target.

---

### SP-initiated SSO

In this scenario, the SP is the first component contacted by the user.

If the user is not authenticated, the SP redirects the user to the IdP. The redirect includes a `SAMLRequest` that provides the IdP with the information needed to manage authentication and redirect the user back to the SP.

The key difference between IdP-initiated and SP-initiated SSO is the presence of the `SAMLRequest` when the IdP is contacted. The second part of the flow—from IdP to SP—is the same in both scenarios.

## Instructions

### WebSphere Application Server limitation

In the current version of WebSphere Application Server (WAS) 8.5.5, WAS supports only IdP-initiated SAML SSO.  
It cannot generate the `SAMLRequest` required for SP-initiated SSO as defined in the SAML standard.  

To avoid requiring users to manually select the correct redirect link, follow this process:  

1. The user requests a WAS-secured resource.  
2. A SAML Trust Association Interceptor (TAI) checks the request. If the user is not authenticated, the TAI redirects the request to the IdP URL. The URL includes a keyword parameter that the IdP uses after login.  
3. WAS creates a cookie named `WasSamlSpReqURL` in the browser to store the originally requested resource.  
4. The IdP authenticates the user and sends the request back to WAS. The redirect goes to the Assertion Consumer Service (ACS) application deployed on WAS and includes the keyword parameter.  
5. ACS verifies the `SAMLResponse` from the IdP. It creates an authenticated WAS session and an LTPA cookie for the user.  
6. If the `WasSamlSpReqURL` cookie is present, WAS redirects the user to the originally requested resource. If not, WAS redirects to the default URL configured in the TAI.  
