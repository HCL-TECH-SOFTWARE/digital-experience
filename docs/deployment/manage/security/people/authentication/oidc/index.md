# Configuring OIDC for HCL Digital Experience

## What is this about?

An increasing number of enterprises are leveraging IdPs to manage the identities, access rights, and authentication flows of their customers, employees, and partners towards their applications and IT landscape. Common IdP solutions and services include Microsoft Azure Active Directory, Okta, Auth0, or Keycloak. Each of the available solutions has unique takes and capabilities that make them a good choice or fit over another, but all of them focus on common and standardized authentication strategies - most notably OIDC.

OIDC serves as a modern authentication and authorization protocol designed to enhance digital security and user experience, particularly in the realm of Identity and Access Management (IAM). Operating as an extension of the OAuth 2.0 framework, OIDC merges the strengths of OAuth's access delegation capabilities with identity verification, resulting in a comprehensive solution.

At its core, OIDC streamlines the process of confirming user identities and authorizing their access to digital resources. It achieves this through the establishment of a trust relationship between the Identity Provider and the relying party (a web application or service, such as HCL Digital Experience).

Users initiate the process by presenting their credentials to the IdP, which validates their identity. Subsequently, the IdP issues tokens, including the ID token which acts as proof of authentication, and the access token which grants access to protected resources. This allows supporting capabilities like Single Sign-On (SSO) across multiple applications, prolonged and uninterrupted user sessions, and enabling seamless collaboration across organizations while maintaining a secure identity exchange with granular control over data sharing. The protocol's flexibility accommodates diverse use cases, from mobile applications to single-page web apps.

HCL Digital Experience (DX) and HCL Digital Solutions (DS) products as a whole recognize the benefits and requirements of OIDC and thus support it. The following document provides an initial set of instructions to get started and enable HCL DX.

HCL DX has a vast set of capabilities relating to authentication, such as [custom authentication filters](https://opensource.hcltechsw.com/digital-experience/latest/deployment/manage/config_portal_behavior/auth_filters/), [transient users](https://opensource.hcltechsw.com/digital-experience/latest/deployment/manage/security/people/authentication/integrate_oid/), [step-up authentication](https://opensource.hcltechsw.com/digital-experience/latest/deployment/manage/security/people/authentication/stepup_auth/enabling_stepup_auth/stepup_auth_prop/), a customizable login UI through portlets and more. Some of the capabilities require additional steps or are by design incompatible with standard OIDC-based authentication and access flows and may not work out of the box. This documentation will be updated and extended with additional configuration steps and strategies to get them working or outline their limitations.

## What implications does this have?

Please be aware that configuring OIDC as the authentication protocol has certain implications for how features behave and have to be used or configured. Some of those implications are:

- Only repository users of the IdP can authenticate through OIDC. Users in other repositories, such as administrative users in the file registry, must bypass OIDC to authenticate.

- This procedure requires that the IdP and HCL DX leverage the same user repository for authentication. Alternatively, you can use Transient Users setup to authenticate, for more details please refer to [Integrating with Transient Users with OpenID Connect](https://opensource.hcltechsw.com/digital-experience/latest/deployment/manage/security/people/authentication/integrate_oid/index.html).

- Creating users or allowing them to sign up through DX is blocked due to the user management being relocated to the IdP as the primary orchestrator.

- IdPs have certain limitations when it comes to customizing the look and feel of the pages that are rendered during the user login journey. For more information, see [Implications for customizing IdP's user login flow](./dx-oidc-customization-considerations.md).

## Additional information

Use this procedure as a general reference and make adjustments to accommodate the environment and application requirements. In some cases, there are additional configuration options that alter the values to input or require steps to be conducted slightly differently. The following assumptions have been made:

- There is only one hostname in use (this might differ in some cases, for example, if you are using Virtual Portals).

- The default context root `/wps/portal` (and `/wps/myportal`) are used, with `myportal` being the secured URL.

- The login property to identify users is the `mail` attribute.

- The cloud native distribution of DX is used.

- An IdP is set up and configured. Required details like the client id or secrets are available to configure during the tasks. For more information on how an IdP is configured, see [Configure Keycloak as an OIDC IdP for HCL Digital Experience](https://git.cwp.pnp-hcl.com/hclds/hclds-keycloak/blob/develop/docs/integration/ds-integration/dx/dx-keycloak-configuration.md).

- Use [Keycloak](https://www.keycloak.org/) as the IdP. The OIDC layer looks the same as any other IdP but this is not guaranteed due to the extensive landscape of providers.

## Setting up OIDC for DX

Setting up OIDC for DX consists of two sides, the first is [Updating WebSphere to support OIDC Authentication for DX](dx-update-webshpere-for-oidc.md) for configuring WebSphere Application Server to act as an OpenID Connect Relying Party. And second being [Adjusting the DX Login flow for OIDC](./dx-integration.md) to redirect the user to an IdP login page for authentication.

Additionally you can further extend this for Transient Users, refer to [Additional configuration options](#additional-configuration-options) section for more information.

## Additional configuration options

- [Updating WebSphere to support OIDC Authentication for DX with Transient Users](./transient-users/dx-update-webshpere-for-oidc-transient-users.md)

    This provides information on how you can configure OIDC Authentication for DX using Transient Users, who are trusted and verified by an IdP. These trusted and verified users do not require a local, registered Portal user account.

## Advanced examples

- [Setting up OIDC for DX with VMM and Virtual Portals](./dx-keycloak-vmm-vp.md)

    This section provides instructions on how to configure DX with Keycloak and use Virtual Portals including user-scopes for individual portals through VMM and multi-realms.

## References

For more information about OIDC and Keycloak in HCL DX and HCL DS in general, refer to the open source repository [hclds-keycloak](https://github.com/HCL-TECH-SOFTWARE/hclds-keycloak). This repository contains Keycloak as a reference implementation of an Identity Provider (IdP) to serve as an internal validation tool for HCL Digital Solutions products. The goal of this repository is to provide a hands-on experience with common strategies, configurations, and solutions related to integrating IdPs using the OIDC authentication protocol.
