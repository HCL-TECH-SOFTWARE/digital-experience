# How to Configure Friendly URLs for Hidden Pages

## Applies to

> **HCL Digital Experience v9.5 and later**

## Introduction

This article discusses how to configure a friendly URL on **Hidden Pages** and their respective child pages (such as the Login page).

## Instructions

1. **Configure the Hidden Pages parent context**
    Since the *Hidden Pages* is the parent context of the *Login* page, you must first set the Friendly URL on it.
    
    1. Log in as an Administrator in the Portal and navigate to **Administration Pages** > **Managed Pages**.
    2. Go to the **Edit Page Properties** of the *Hidden Pages*.
    3. Set the Friendly URL name as desired (e.g., `test`).

2. **Configure the Login child page**
    Now that your Hidden Pages are configured, apply the same steps to the Login Page to complete the path.
    
    1. Navigate to **Administration Pages** > **Managed Pages**.
    2. Go to the **Edit Page Properties** of the *Login* page.
    3. Set the Friendly URL name as desired (e.g., `PortalLogin`).

!!! note "No Restart Required"
    You do not have to restart the server; these changes will be applied immediately.