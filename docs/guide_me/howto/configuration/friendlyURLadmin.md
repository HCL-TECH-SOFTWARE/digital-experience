# How to configure friendly URLs for Hidden Pages

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

This document describes how to configure a friendly URL on Administration or Hidden Pages and their respective child pages (such as the Login page).

## Instructions

1. **Configure the Hidden Pages parent context**
    Since the *Hidden Pages* is the parent context of the *Login* page, you must first set the Friendly URL on it.

    1. Log in as an administrator in the Portal and navigate to **Administration > Site Management > Pages (Manage Pages)**.
    2. Go to the **Edit Page Properties** of the **Hidden Pages**.
    3. Set the Friendly URL name as desired (e.g., `test`).

2. **Configure the Login child page**
    Now that your Hidden Pages are configured, apply the same steps to the Login page to complete the path.

    1. Navigate to **Administration > Site Management > Pages (Manage Pages)**.
    2. Find the **Login page** in your site structure and click to the **Edit Page Properties** icon of the **Login** page.
    3. Set the Friendly URL name as desired (e.g., `PortalLogin`).

!!! note
     You do not have to restart the server; these changes will be applied immediately.