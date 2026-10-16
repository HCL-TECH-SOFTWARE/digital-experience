# How to configure friendly URLs for hidden pages

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

In HCL Digital Experience (DX), friendly URLs are constructed hierarchically based on the portal page tree structure. Each page node defines its own segment in the final URL path, where parent page friendly URLs establish the base path and child page friendly URLs establish the subpath. The Hidden Pages node allow administrators to manage site navigation paths for specific pages without displaying them in standard navigation menus. This article describes how to configure friendly URLs for Hidden Pages and its child pages (such as the Login page) in HCL DX.

## Instructions

To configure friendly URLs for Hidden Pages and child pages, perform the following steps.

1. Log in to HCL DX as an administrator.
2. Navigate to **Open applications menu > Administration > Site Management > Pages > Content Root**.
3. In the **Hidden Pages** row, select **Edit Page Properties**.
4. In the **Friendly URL name** box, enter your desired URL name (for example, `test`).
5. Select **Hidden Pages** to view its child pages.
6. Locate the target child page (for example, **Login**) in the site structure.
7. In the child page row, select **Edit Page Properties**.
8. In the **Friendly URL name** box, enter your desired URL name (for example, `login`).

    The child page is now accessible using the combined friendly URL path (for example, `/test/login`).

!!! note
    These changes do not require a server restart.
