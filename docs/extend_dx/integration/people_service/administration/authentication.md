# Authentication

## Authentication strategies

HCL People Service supports following authentication strategies:

- HCL Digital Experience (DX) Authentication
- OpenId Connect (OIDC)

### DX authentication

Whenever an user logs in to DX, the authentication process creates Lightweight Third-Party Authentication (LTPA) cookies. People Service consumes these cookies to validate the user's identity and session using the Ring API, eliminating the need for the user to re-authenticate when accessing their own or another user's profile page. To achieve this both DX and People Service should be configured against the same user registry.

For more information on DX authentication refer to [Authentication](../../../../deployment/manage/security/people/authentication/index.md) section.

### OIDC

People Service supports OpenId Connect (OIDC). OpenID Connect is an identity layer built on top of the OAuth 2.0 protocol. It allows clients to verify the identity of the end-user based on the authentication performed by an authorization server, as well as to obtain basic profile information about the end-user in an interoperable and REST-like manner.

In the context of integrating the people service with other products or services, OIDC provides a standardized way to authenticate users and obtain user information. This allows for seamless user experiences across different applications and services, as well as secure and reliable authentication mechanisms.

To set up People Service with OIDC for authentication, see [Configuration parameters](../deployment/configuration_parameters.md). Additionally, ensure that DX is configured with the same OIDC provider by referring to [Configuring OIDC for HCL Digital Experience](../../../../deployment/manage/security/people/authentication/oidc/index.md).

## Authorization

Authorization will be relayed to and consumed through DX. People Service uses Ring API to retrieve user's roles and permissions. These roles will then be mapped againts People Service's own authorization model to determine what actions user can perform.

People Service differentiates between anonymous users, authenticated users, and administrators. While authenticated, users are able to view and interact with user profiles, and managing their own profile. Administrators have additional permissions to manage all user profiles and system settings, as well as to configure the service.
