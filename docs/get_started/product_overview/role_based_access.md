---
tags:
    - Security
    - Authentication
    - Authorization
hide: tags
---

# Role Based Access Control

HCL DX has rich features for controlling what users can see and do in the experiences created with the product. This ranges from simple access control for websites to granular control on content items.

## Access Control

HCL DX provides a rich framework for managing authorizations to resources hosted in and served by the platform. This includes granular control over who can access what, and a rich set of possible extensions to integrate to your security environment.

Access can be controlled to pages, individual applications, content libraries, content items, asset collections and a host of other artifacts across the platform. Access is, by default, hierarchical meaning that access granted to a parent resource also applies to its children.

HCL DX provides a framework called "step up authentication" which allows the platform to manage multiple levels of authentication. For example, most of a site could be secured using simple user name and password authentication, but sensitive areas could require additional credentials.

## User Directory Integration

HCL DX enables a wide range of user authentication mechanisms, from simple LDAP integration to integration with enterprise security providers via SAML or Open ID Connect.

APIs are provided to extend authentication, which allows HCL DX to be integrated with custom security set-ups of most kinds.