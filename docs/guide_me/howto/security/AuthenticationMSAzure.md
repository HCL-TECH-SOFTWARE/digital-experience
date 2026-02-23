# How to integrate HCL Portal user authentication using Microsoft Azure AD

## Applies to

> HCL Digital Experience v9.5 and Higher

## Introduction

You would like to move your users from IBM Directory Server (corporate LDAP) into Azure (cloud service). You have several options, depending on your application design. Your application architect should be involved in this decision. Normally, Azure supports both OIDC and SAML.  You can confirm with Microsoft support. IBM WebSphere Application Server ships TAIs for both. We recommend OIDC as the more modern technology in order to have more flexibility in the future. However, HCL DX customers have had success with both. Any of the options below should work with either OIDC or SAML.  This document will focus on the OIDC perspective.  

## Instructions

The key thing to understand about HCL DX (including both Portal and WCM) is that DX must be able to locate the user in the federated repository. DX can do this with actual user records in an LDAP, DB, etc. Or with an in-memory repository, called transient users, which requires some custom code to function properly.

### Option 1: OpenID Connect (OIDC) authentication

HCL DX locates users in a local repository. This would generally be an LDAP hosted in your intranet, which would be kept in synch with Azure. With this option, a custom JAAS login module is NOT required. For details, please check [Configuring OIDC for HCL Digital Experience](../../../deployment/manage/security/people/authentication/oidc/index.md){target="_blank"}.

### Option 2: OIDC authentication and transient users

This would require a custom JAAS login module. HCL provides sample code for such an implementation and an accompanying white paper. For details, please review:

[Integrating Transient Users with OpenID Connect](../../../deployment/manage/security/people/authentication/integrate_oid/index.md?h=integrating+transient+users+openid+connect+with){target="_blank"}

Understand that all transient users would be considered only "All Authenticated Portal Users", from an access control perspective. That is to say, any role assignments made to user groups would not be honored for transient users.  

### Option 3: OIDC authentication, transient users, with mirror groups

Details to configure OIDC authentication with transient users and mirror groups can be found at [Integrating Transient Users with OpenID Connect](../../../deployment/manage/security/people/authentication/integrate_oid/index.md?h=integrating+transient+users+openid+connect+with){target="_blank"}  

There would be some overhead in maintaining the local groups and keeping them synchronized with any user groups held in Azure.  

### Option 4: Using Keycloak

If you have or are interested in running a containerized environment, you may want to use Keycloak as an interface to Azure. HCL offers a reference, here:
[hclds-keycloak Documentation](https://github.com/HCL-TECH-SOFTWARE/hclds-keycloak/tree/main/docs){target="_blank"}

See especially:
[hclds-keycloak Integrating with IdP](https://github.com/HCL-TECH-SOFTWARE/hclds-keycloak/tree/main/docs/integration/idp-integration){target="_blank"}

### Additional information

After implementing any of these options, you would very likely need to follow the **CleanupUsers/XMLAccess** and **MemberFixer** procedures to clean up references to old users from the DX database.

[Understanding the CleanupUsers Process](https://support.hcl-software.com/csm?id=kb_article&sysparm_article=KB0079138){target="_blank"}

[How to use the member fixer task](../../../manage_content/wcm_configuration/wcm_adm_tools/wcm_member_fixer/wcm_admin_member-fixer.md){target="_blank"}
