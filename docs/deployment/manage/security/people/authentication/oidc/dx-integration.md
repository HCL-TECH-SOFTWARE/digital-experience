# Adjusting the DX Login flow for OIDC

Once you have configured WebSphere Application Server to act as an OpenID Connect Relying Party, this would allow HCL Digital Experience (DX) to trust authentication assertions towards your Identity Provider (IdP). Detailed steps are outlined in [Updating WebSphere to support OIDC Authentication for DX](./dx-update-webshpere-for-oidc.md).

This document provides instructions to adjust the user log in flow within DX. Whenever a user tries to access a protected resource, they will be redirected to IdPs log in page for authentication and asked to enter their credentials. After the user is authenticated successfully they are redirected back to DX.

## Overview of configuration tasks

Follow the tasks to establish the configuration:

1. [Detaching the existing login option](#detaching-the-existing-login-option)
1. [Creating the new IdP specific login option](#creating-the-new-idp-specific-login-option)
1. [Validate everything is working as expected](#testing-the-oidc-login-flow)

## Detaching the existing login option

First, detach the existing login option by changing its unique name:

1. Navigate to the portal site `https://<DX_HOSTNAME>/wps/portal` and login as the admin user (wpsadmin:wpsadmin).
1. Click the **home icon** dropdown to open the applications menu and click **Administration**.
1. On the **Administration** page, expand the menu on the top left and navigate to **Site Management > Pages**.
1. On the **Manage Pages** page, search for **login** (Search by: Title starts with; Search: login) to find the **Login** (`wps.Login`) page.
1. Click the **Edit Page Properties** icon (first action in the row) to view the **Edit page: Login** configuration page.
1. In the **Unique Name** field, edit the value and rename `wps.Login` to `wps.Login.default`.
1. Click **OK**.

## Creating the new Admin(file system) specific login option

Create a new login option that maps to `/admin/login` for the default Admin(file system) login:

1. On the **Manage Pages** page, click the **Select Page > Content Root > Hidden Pages** (with Unique name/identifier `ibm.portal.HiddenPages`), and click the **Edit Page Properties** icon (first action in the row).
1. Set the **Friendly URL name** field to `admin` or `hidden` and click **OK**.

## Creating the new IdP specific login option

Create the new login option to map `/wps/myportal` for the users to access:

1. On the **Manage Pages** page, click **Select Page**.
1. Click the **Content Root** page > Home** page.
1. Click **New URL**. On the next page, add the following values:
    1. Set **Title** to `Login-IdP`.
    1. Select the **A link to a Web page with the following URL** radio button.
    1. Set the URL to `https://<DX_HOSTNAME>/wps/myportal`.
    1. Click **OK**.
1. On the **Manage Pages** page, select the **Home** page. Make sure you see the newly added **Login-IdP** URL. In the same row, click the **Set Page Permission** action.
1. On the **Resource Permissions** page, find the **User** row and click the **Edit Role** action.
1. Click **Add**.
1. Check the **Anonymous Portal User** box and click **OK**. The **Anonymous Portal User** role now appears in the **Resource Permissions** panel.

## Mapping the new IdP specific login

Follow the steps to update the unique name of the new IdP specific login page:

1. On the left side navigation, go to **Settings > Custom Unique Names** and select the **Pages** resource type.
1. Search for the **Login-IdP** page and click **Edit unique name for Page** in the respective row.
1. In the **Unique name** field, set the value to `wps.Login` and click **OK**.

## Testing the OIDC login flow

Follow the steps to test the OIDC login flow:

1. Navigate to `https://<DX_HOSTNAME>/wps/portal`.
1. Click **Log in**.
    - This redirects you to the IdP instance log in view
1. Log in with an existing user and password.
    - You are redirected back to DX and logged in as the correct user.
