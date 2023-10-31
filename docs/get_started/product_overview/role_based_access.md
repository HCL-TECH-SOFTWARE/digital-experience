---
tags:
    - Security
    - Authentication
    - Authorization
hide: tags
---

# Role based access control

HCL DX has rich features for controlling what users can see and do in the experiences you create with the product. This control ranges from simple access control for websites to granular control on content items.

## Access control

HCL DX provides a framework for managing authorizations to resources hosted in and served by the platform. This framework includes granular control over who can access what and a rich set of possible extensions to integrate with your security environment.

Access can be controlled to pages, individual applications, content libraries, content items, asset collections and many other artifacts on the platform. Access is, by default, hierarchical, meaning that access granted to a parent resource also applies to its child resources.

HCL DX provides a framework called "step up authentication," the platform uses to manage multiple levels of authentication. For example, most of a site might be secured by using simple user-name and password authentication but sensitive areas might require additional credentials.

## User directory integration

HCL DX enables a range of user authentication mechanisms, from simple LDAP integration to integration with enterprise security providers through SAML or Open ID Connect.

APIs are provided to extend authentication, with which HCL DX can integrate with custom security setups of most kinds.