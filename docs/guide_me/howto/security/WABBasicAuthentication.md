# How to configure a Web Application Bridge for basic authentication

## Applies to

> HCL Digital Experience v9.5 and higher

## Introduction

Some back-end applications require basic authentication to establish a secure connection. You can configure a Web Application Bridge (WAB) in HCL Digital Experience (DX) to authenticate against these back-end applications using credentials stored in the Credential Vault. This article describes how to configure a WAB for basic authentication.

## Instructions

### Creating a credential vault slot

1. Log in to HCL DX as an administrator.  
2. Navigate to **Open applications menu > Administration > Security > Credential Vault**.  
3. Select **Add a vault slot**.
4. In the **Name** box, enter `BasicAuthVaultSlot`
5. Under **Vault resource associated with vault slot:**, select **New** and enter `BasicAuthResource` in the **Name** box.
6. Select **Vault slot is shared** and enter the authentication details:
    1. **Shared userid**
    2. **Shared password**
    3. **Confirm password**
7. Select **OK**.

### Creating a content provider profile

1. Navigate to **Production > Virtual Application Manager**.
2. Select **Create Content Provider Profile**.
3. In the **Unique profile title** box, enter `basicAuthProfile`.
4. In the **Host name or IP address** box, specify the location of the application requiring basic authentication using the `http://server:port` format.
5. Select **Save**.

### Configuring single sign-on

1. In **Content Provider Profiles**, select the **default** tab next to **basicAuthProfile**.
2. Select **Edit**.
3. Select the **Single Sign-On** tab
4. Under **Authentication Mechanism**, select **HTTP Basic authentication**.
5. From the **Credential slot** drop-down list, select **BasicAuthVaultSlot**.
6. Select **Save**.

### Creating a Web Dock application

1. In **Virtual Web Application Manager**, select **Web Dock Applications**.
2. Select **Create Web Dock Application**.
3. In the **Unique web dock application title** box, enter `basicAuthDock`.
4. From the **Content provider profile** drop-down list, select **basicAuthProfile**.
5. In the **Resource path** box, enter the resource path for the back-end application (for example, `/basicAuth/basicAuthClass`).
6. Select **Save**.

### Deploying a Web Dock application

1. Navigate to a non-administration site page and turn on **Edit Mode** on the top toolbar.
2. In the **Site Manager** side panel, select the menu icon (**≡**) next to a site node, and then select **Create Child Page...**
3. Enter a **Page title**, and then select **Create Page...**.
4. On the left-side panel, select **Add page components and applications**.
5. In the **Applications** tab, search for the **basicAuthDock** application and drag it onto the page layout.
6. Verify that the authenticated data from the back-end application appears on the page.
