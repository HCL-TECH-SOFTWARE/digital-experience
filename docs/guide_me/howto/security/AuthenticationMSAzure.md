# How to integrate HCL DX user authentication using Microsoft Azure AD

## Applies to

> HCL Digital Experience v9.5 and Higher

## Introduction

To integrate HCL DX user authentication using Microsoft Azure AD when migrating users from an IBM Directory Server (corporate LDAP) to the cloud, several options are available depending on your application design. Consult your application architect to determine the best approach for your environment.

Azure supports both OpenID Connect (OIDC) and Security Assertion Markup Language (SAML) authentication protocols, and IBM WebSphere Application Server includes Trust Association Interceptors (TAIs) for both. While HCL DX customers successfully deploy both protocols, OIDC is recommended as a modern standard that provides greater long-term flexibility. This article describes how to migrate user authentication from an IBM Directory Server to Microsoft Azure AD using OIDC.

## Instructions

HCL DX (including both Portal and WCM) must be able to locate users within its federated repository. The system accomplishes this using either persistent user records stored in a physical repository, such as an LDAP directory or a database, or an in-memory repository for transient users. Implementing transient users requires custom code.

To integrate your architecture with Azure, choose from the following deployment options.

!!!note
    While the following options focus on OIDC, the deployment principles also apply to SAML.

### OIDC authentication with a local repository

HCL DX locates users in a local repository. This would generally be an LDAP hosted in your intranet, which would be kept in synch with Azure. With this option, a custom JAAS login module is NOT required. For more information, refer to [Configuring OIDC for HCL Digital Experience](../../../deployment/manage/security/people/authentication/oidc/index.md).

### OIDC authentication with transient users

This approach uses an in-memory repository and requires a custom JAAS login module. HCL provides sample code and a white paper for this implementation. For more information, refer to [Integrating Transient Users with OpenID Connect](../../../deployment/manage/security/people/authentication/integrate_oid/index.md?h=integrating+transient+users+openid+connect+with).

!!! important
    From an access control perspective, transient users are assigned only the "All Authenticated Portal Users" role. The system will not honor any role assignments made to specific user groups for these users.

### OIDC authentication with transient users and mirror groups

This approach expands on using transient users by adding mirror groups to handle role assignments. However, it introduces administrative overhead, as you must maintain local groups and keep them synchronized with the user groups held in Azure. For more information, refer to [Integrating Transient Users with OpenID Connect](../../../deployment/manage/security/people/authentication/integrate_oid/index.md?h=integrating+transient+users+openid+connect+with).

### Keycloak integration (containerized environments)

If you run a containerized environment, you can use Keycloak as an interface to Azure. For more information, refer to the following:

- [hclds-keycloak Documentation](https://github.com/HCL-TECH-SOFTWARE/hclds-keycloak/tree/main/docs){target="_blank"}
- [hclds-keycloak Integrating with IdP](https://github.com/HCL-TECH-SOFTWARE/hclds-keycloak/tree/main/docs/integration/idp-integration){target="_blank"}

### Post-migration cleanup

After implementing any of the approaches above, you must clean up references to the old users in the DX database. Refer to the following procedures to resolve the old references:

- [Understanding the CleanupUsers Process](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0079138){target="_blank"}
- [How to use the member fixer task](../../../manage_content/wcm_configuration/wcm_adm_tools/wcm_member_fixer/wcm_admin_member-fixer.md)
