# Configuring OIDC for HCL Digital Experience

## What is this about?

An increasing number of enterprises are leveraging IdPs to manage the identities, access rights, and authentication flows of their customers, employees, and partners towards their applications and IT landscape. Common IdP solutions and services include Microsoft Azure Active Directory, Okta, Auth0, or Keycloak. Each of the available solutions has unique takes and capabilities that may make them a good choice or fit over another, but all of them focus on common and standardized authentication strategies - most notably OIDC.

OIDC serves as a modern authentication and authorization protocol designed to enhance digital security and user experience, particularly in the realm of identity and access management (IAM). Operating as an extension of the OAuth 2.0 framework, OIDC merges the strengths of OAuth's access delegation capabilities with identity verification, resulting in a comprehensive solution.

At its core, OIDC streamlines the process of confirming user identities and authorizing their access to digital resources. It achieves this through the establishment of a trust relationship between the Identity Provider and the relying party (a web application or service, such as HCL Digital Experience). Users initiate the process by presenting their credentials to the IdP, which validates their identity. Subsequently, the IdP issues tokens, including the ID token which acts as proof of authentication, and the access token which grants access to protected resources. This allows supporting capabilities like Single Sign-On (SSO) across multiple applications, prolonged and uninterrupted user sessions, and enabling seamless collaboration across organizations while maintaining a secure identity exchange with granular control over data sharing. The protocol's flexibility accommodates diverse use cases, from mobile applications to single-page web apps.

HCL DX and HCL Digital Solutions (DS) products as a whole recognize the benefits of and requirements to OIDC and thus support it. The following document provides an initial set of instructions to get started and enable HCL DX for it.

HCL DX in particular has a vast set of capabilities relating to authentication, such as [custom authentication filters](https://opensource.hcltechsw.com/digital-experience/latest/deployment/manage/config_portal_behavior/auth_filters/), [transient users](https://opensource.hcltechsw.com/digital-experience/latest/deployment/manage/security/people/authentication/integrate_oid/), [step-up authentication](https://opensource.hcltechsw.com/digital-experience/latest/deployment/manage/security/people/authentication/stepup_auth/enabling_stepup_auth/stepup_auth_prop/), a customizable login UI through portlets and more. Some of those capabilities require additional steps or are by design incompatible with standard OIDC-based authentication and access flows and may not work out of the box. This documentation will be updated and extended with additional configuration steps and strategies to get them working or clearly outline their limitations.

## What implications does this have?

Please be aware that configuring OIDC as the authentication protocol has certain implications to how features behave and have to be used or configured. Some of those implications are:

- Only users in the repository of the IdP can authenticate via OIDC. Users in other repositories, such as administrative users in the file registry, must bypass OIDC to authenticate.

- This procedure requires that the IdP and HCL DX leverage the same user repository. Alternatively, there is an option for [Integrating with Transient Users with OpenID Connect](https://opensource.hcltechsw.com/digital-experience/latest/deployment/manage/security/people/authentication/integrate_oid/index.html).

- Creating users or allowing them to sign up through DX might be blocked due to the user management being relocated to the IdP as the primary orchestrator.

- IdP's can enfore certain limitations when it comes to customizing the look and feel of the pages that are redenred during the user login journey. Please refer to [Implications for customizing IdP's user login flow](./dx-oidc-customization-considerations.md) for more details.

## Additional information

Use this procedure as a general reference and make adjustments to accommodate the environment and application requirements. In some cases, there are additional configuration options that alter the values to input or require steps to be conducted slightly differently. The following assumptions have been made:

- There is only one hostname in use (this might differ in some cases, for example, if you are using Virtual Portals).

- The default context root `/wps/portal` (and `/wps/myportal`) are used, with `myportal` being the secured URL.

- The login property to identify users is the `mail` attribute.

- The cloud native distribution of DX is used.

- An IdP is set up and configured. Required details like the client id or secrets are available to configure during the tasks in this document. For further information on how an IdP can be configured, you can refer to [Configure Keycloak as an OIDC IdP for HCL Digital Experience](https://git.cwp.pnp-hcl.com/hclds/hclds-keycloak/blob/develop/docs/integration/ds-integration/dx/dx-keycloak-configuration.md).

- [Keycloak](https://www.keycloak.org/) is used as the IdP. The OIDC layer looks mostly the same with any other IdP but this is not guaranteed due to the extensive landscape of providers.

## Setting up OIDC for DX

Setting up OIDC for DX consists of two sides, first being [Updating WebSphere to support OIDC Authentication for DX](dx-update-webshpere-for-oidc.md) for configuring WebSphere Application Server to act as an OpenID Connect Relying Party. This can be further extended for Transient Users, refer to [Additional configuration options](#additional-configuration-options) section for more information.

However you need to configure DX for [Adjusting the DX Login flow for OIDC](./dx-integration.md) to redirect the user to an IdP's login page for authentication.

## Additional configuration options

- [Updating WebSphere to support OIDC Authentication for DX with Transient Users](./transient-users/dx-update-webshpere-for-oidc-transient-users.md)

    This provides information on how you can configure OIDC Authentication for DX using Transient Users, who are trusted and verified from an IdP. These trusted and verified users do not require a local, registered Portal user account.

## Advanced examples

- [Setting up OIDC for DX with VMM and Virtual Portals](./dx-keycloak-vmm-vp.md)

    This provides instruction on how to configure DX with Keycloak and use Virtual Portals including user-scopes for individual portals through VMM and multi-realms.

## References

For more information about OIDC and Keycloak in HCL DX and HCL DS in general, refer to the open source repository [hclds-keycloak](https://github.com/HCL-TECH-SOFTWARE/hclds-keycloak). This repository contains Keycloak as a reference implementation of an Identity Provider (IdP) to serve as an internal validation tool for HCL Digital Solutions products. The goal of this repository is to provide a hands-on experience with common strategies, configurations, and solutions related to integrating IdPs using the OIDC authentication protocol.
