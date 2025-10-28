# A Step-by-Step Guide - How to replace your HCL Portal's LDAP

## Applies to

> HCL Digital Experience 9.5 and higher

## Introduction

This guide provides a comprehensive step-by-step approach to replace Portal's LDAP

1. Generating a complete XML export of system with the current LDAP
2. Listing all your Virtual Portals
3. Adding the "InternalFileRepository" user repository
4. Temporarily changing your admin user and group to your FileRegistry repository
5. Removing the OLD LDAP
6. Adding the new LDAP
7. Running CleanupUsers to clear up the old LDAP entries
8. Re-importing the Full XML Export
9. Running MemberFixer with treatallUsersAsMissing

## Instructions

[A Step-by-Step Guide - How to replace your HCL Portal´s LDAP](./download/How_To_Change_Portal_LDAP_v1.pdf){target="_blank"}