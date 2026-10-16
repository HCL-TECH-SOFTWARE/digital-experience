# How to hide the impersonation button for non-administrator users

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

HCL Digital Experience (DX) allows administrators to manage access control and page permissions across portal environments. Restricting access to sensitive controls ensures that feature privileges remain limited to authorized roles. This article explains how to hide the impersonation button for non-administrator users.

## Instructions

To hide the impersonation button for non-administrator users, perform the following steps:

1. Log in to HCL DX as an administrator.
2. Navigate to **Open applications menu > Administration > Site Management > Content Root > Hidden Pages**.
3. In the **Impersonation** row, select the **Edit Page Permissions** key icon.
4. Select the **Edit role** pencil icon for the role whose permission you want to revoke (for example, **User**).
5. Select the **Delete Member from Role** trash icon for **All Authenticated Portal Users**.
6. Select **OK** to confirm.
7. Restart the HCL DX server and verify the changes.
