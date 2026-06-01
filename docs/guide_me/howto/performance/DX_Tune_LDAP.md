# How to tune the LDAP configuration in HCL DX

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

Many login performance issues stem from delays when resolving group memberships, which HCL Digital Experience (DX) evaluates during every authentication request. Optimizing this process minimizes the transactional load on the directory server and improves authentication response times. This article describes how to tune your LDAP configuration to optimize group membership resolution.

## Instructions

1. **Implement a membership attribute:** If supported by your LDAP server, implement a direct membership attribute (such as `ibm-allGroups` or `memberOf`) and configure its scope as broadly as possible. This attribute should return all of a user's direct, nested, and dynamic group memberships in a single query.

    !!!note
        Ensure that any groups returned by the membership attribute can be resolved within the realm defined in Virtual Member Manager (VMM). Lookups will fail if the attribute returns a group Distinguished Name (DN) that VMM cannot locate.

2. **Limit the use of dynamic groups:** Avoid using dynamic groups unless your business logic explicitly requires them, as calculating their membership dynamically incurs a high processing cost. If dynamic grouping is necessary, consider using local [rule-based user groups](../../../deployment/manage/security/people/authorization/users_and_groups/rule_based_user_groups/index.md){target="_blank"} within HCL DX instead.

3. **Disable nested group evaluation:** If your LDAP membership attribute already resolves nested groups natively, change your settings to [disable nested groups](../../../deployment/manage/security/people/authorization/users_and_groups/adusrgrp_nested.md){target="_blank"} within the portal configuration to avoid redundant processing.

4. **Reuse WebSphere Application Server (WAS) group information:** Configure a federated repository to ensure the VMM resolves group memberships during the initial WAS login process. You can then configure HCL DX to reuse this cached WAS group information for user management to maximize authentication speed.

    !!!note
        Reusing WAS group information can also be applied to standalone LDAP configurations to leverage VMM group resolution behavior.

While further optimizations can be achieved by adjusting Portal Access Control (PAC) caches, VMM caches, and context pooling, implementing these four strategies will resolve most performance delays associated with group resolution during login.
