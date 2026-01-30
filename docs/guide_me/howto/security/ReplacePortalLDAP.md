# How to Replace an LDAP in HCL DX

## Applies to

> HCL Digital Experience 9.5 and higher

## Introduction

This article provides a step-by-step approach to replacing an LDAP server configuration in HCL DX.

## Steps

1. Generate a complete XML export of the system with the current LDAP.  
2. List all your virtual portals.  
3. Add the `InternalFileRepository` user repository.  
4. Temporarily change your admin user and group to your FileRegistry repository.  
5. Remove the old LDAP.  
6. Add the new LDAP.  
7. Run `CleanupUsers` to clear old LDAP entries.  
8. Re-import the full XML export.  
9. Run `MemberFixer` with `treatAllUsersAsMissing`.

## Instructions

[Step-by-Step Guide: How to Replace Your HCL Portal's LDAP](./files/ReplacePortalLDAP/How_To_Change_Portal_LDAP_v1.pdf){target="_blank"}