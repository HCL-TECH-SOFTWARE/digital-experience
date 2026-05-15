# How to tune the LDAP configuration in HCL DX

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

Many login performance issues turn out to be delays in resolving group membership. HCL DX attempts to resolve group membership at each login. There are a few things a DX administrator can do to make the process of resolving group membership as efficient as possible.  Reducing the load on the LDAP is a bonus. This article provides some suggestions.

## Instructions

1. If your LDAP supports it, implement a membership attribute. Set the scope as broadly as your LDAP supports.  Hopefully, the LDAP's membership attribute lists all of a user's group memberships (direct, nested, and dynamic).

    !!!note
        Be sure that any groups returned by the membership attribute can be resolved within the realm defined in VMM.  Failures will occur if the membership attribute returns a group DN that VMM cannot look up.

2. Unless your application requires them, avoid using dynamic groups since resolving their membership exacts a high cost. If you need dynamic groups in your application, consider keeping them locally with [this alternative](https://help.hcl-software.com/digital-experience/9.5/sc-ls-test/deployment/manage/security/people/authorization/users_and_groups/rule_based_user_groups/){target="_blank"}.  

3. If the membership attribute resolves nested groups, [disable nested groups in Portal](https://help.hcl-software.com/digital-experience/9.5/sc-ls-test/deployment/manage/security/people/authorization/users_and_groups/adusrgrp_nested/){target="_blank"}.  

4. Configure a federated repository so that VMM resolves group membership during the WAS login process. Then configure DX to reuse WAS group information (user management only, to maximize performance).

    !!!note
        You can reuse WAS group information even in a standalone LDAP configuration - I just like the VMM functionality for resolving group membership better.

There are some additional tweaks you can make with PAC caches, VMM caches, and context pooling, but these four items should help a great deal in resolving any performance delays in resolving group membership during Portal login.
