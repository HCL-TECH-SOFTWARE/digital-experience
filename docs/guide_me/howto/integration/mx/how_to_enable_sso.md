# How to Enable SSO Between HCL DX and Volt MX Foundry

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

This guide walks you through enabling **Single Sign-On (SSO)** between **HCL Digital Experience** and **HCL Volt MX Foundry**, where DX acts as the OAuth 2.0 service provider.

## Prerequisites

To enable SSO, ensure you have:

* **HCL DX and Volt MX** deployed and accessible.
* Access to the **WebSphere Application Server**.
* **Kubernetes CLI access**.
* **TLS certificates**.
* **Admin credentials** for both DX and Volt MX.

## Instructions

### Step 1: Create the OAuth Service Provider in HCL DX

1.  **Access the DX Core Pod**

    ```bash
    kubectl exec -it hcl-dx-dev1-core-0 core -n hcl-dx-dev1 -- sh
    ```

2.  **Run the wsadmin utility to create the OAuth provider**

    ```bash
    cd /opt/HCL/AppServer/bin
    ./wsadmin.sh -lang jython -username <username> -password <password>

    AdminTask.createOAuthProvider('[-providerName OAuthConfig -fileName /opt/HCL/AppServer/properties/DXProvider.xml]')
    AdminConfig.save()
    quit
    ```

    Where:
    
    - `<OAuthProviderName>` is the OAuth provider name (typically OAuthConfig).
    - `<ProviderConfigFile>` is the full path to the OAuth provider configuration file. Download and use the [DXProvider.xml](./DXProvider.xml) configuration file which includes Auto Authorize setup for the VoltMX client.

3.  **Verify the configuration file**

    ```bash
    # Ensure it exists at:
    /opt/HCL/wp_profile/config/cells/dockerCell/oauth20/OAuthConfig.xml
    ```

4.  **Restart WebSphere Portal**

    ```bash
    ./stopServer.sh WebSphere_Portal -profileName wp_profile -username <username> -password <password>
    ./startServer.sh WebSphere_Portal -profileName wp_profile
    ```

### Step 2: Configure Trust Association Interceptors (TAI)

1.  **Open the WebSphere Admin Console.**

2.  **Navigate to: `Security > Global security > Trust association > Interceptors`**

    ![alt text](./assets/image.png)

    ![alt text](./assets/image-1.png)

3.  **Ensure `com.ibm.ws.security.oauth20.tai.OAuthTAI` exists.**

    ![alt text](./assets/image-2.png)

4.  **If not, click New and add the class:**

    * Class name: `com.ibm.ws.security.oauth20.tai.OAuthTAI`
    * Custom Properties:

        ```bash
        provider_1.name=OAuthConfig
        provider_1.filter=Authorization%=Bearer
        ```

    ![alt text](./assets/image-3.png)

### Step 3: Register the OAuth Client

1.  **Copy default client definitions:**

    ```bash
    cp /opt/HCL/AppServer/properties/base.clients.xml /opt/HCL/wp_profile/config/cells/dockerCell/oauth20/
    ```

2.  **Edit the XML to add Volt MX:**

    ```sh
    vi /opt/HCL/wp_profile/config/cells/dockerCell/oauth20/base.clients.xml
    ```

    ```
    <client id="voltmx" component="<OAUTH_PROVIDER_NAME>" secret="<OAUTH_SECRET>" displayname="Volt MX" redirect="https://<VOLT_MX_HOST>/auth/dx/<BASE_64_ENCODED_DX_HOSTNAME>/callback" enabled="true">
    </client>
    ```

    Where:

      - `<OAUTH_PROVIDER_NAME>` is the name of the specified provider (for example, OAuthConfig).

      - `<OAUTH_SECRET>` is a complex, random secret (for example, a UUID). This secret will be required later.
      
      - `<VOLT_MX_HOST>` is the URL of the Volt MX deployment. [Redirect URL](#adding-a-new-application-in-volt-mx-foundry) should be available in Volt MX Foundry (for example, voltmx-env.com).

      - `<BASE_64_ENCODED_DX_HOSTNAME>` is a base64 (dx-hostname) encoded string.

    For example:

    ```
    <client id="voltmx" component="OAuthConfig" secret="a2e3d8c3-7875-4512-a0da-8b5fd61f2245" displayname="Volt MX" redirect="https://<voltmx-env.com>/authService/100000002/oauth2/callback" enabled="true">
    </client>
    ```

### Step 4: Install the OAuth Application

1.  **Install OAuth 2.0 provider app**

    ```bash
    ./wsadmin.sh -f ./installOAuth2Service.py install dockerNode WebSphere_Portal -profileName wp_profile -username <username> -password <password>
    ```

2.  **Enable OAuth TAI**

    ```bash
    ./wsadmin.sh -lang jython -username <username> -password <password>
    AdminTask.enableOAuthTAI()
    AdminConfig.save()
    quit
    ```

3.  **Restart the portal again**

### Step 5: Configure Identity Services in Volt MX

1.  **Create an Application in Volt MX Foundry.**

2.  **Configure Identity Service**

    * Type: OAuth
    * Authorize Endpoint:

        ```bash
        https://<dx-host>/oauth2/endpoint/OAuthConfig/authorize
        ```

    * Token Endpoint:

        ```bash
        https://<dx-host>/oauth2/endpoint/OAuthConfig/token
        ```

    * Client ID / Secret: Use values from the OAuth client registration.

    ![alt text](./assets/image-4.png)

3.  **Click "Test login" and confirm the OAuth login screen appears.**

    !!! note
        If SSL errors occur, import the DX SSL certificate into WebSphere using: `Security > SSL certificate and key management > Retrieve from port`.

4.  **Enable SSO in Volt MX**

    * Go to Identity Service > More Actions > Enable SSO

    ![alt text](./assets/image-5.png)

### Step 6: Enable SSO in Iris App

1.  **Create login form in Iris, add the following code to form init:**

    ```javascript
    if (!VMXFoundry) return;
    var voltmxIdent = VMXFoundry.getIdentityService("DXAuth");
    var options = {};
    options.loginOptions = { isSSOEnabled: true };

    voltmxIdent.login(options,
      function(res) {
        alert("SSO success: " + JSON.stringify(res));
        var nav = new voltmx.mvc.Navigation("frmHome");
        nav.navigate();
      },
      function(err) {
        alert("SSO failed: " + JSON.stringify(err));
      }
    );
    ```

2.  **Deploy Iris app to DX**

    * Deploy the Iris application to HCL DX. For more information, see [How to Deploy Volt MX portlet into HCL DX](./how_to_integrate_mx_portlet_to_dx.md).
    * After deploying the application, when the user goes to a web page, a window appears asking for permission to allow the client Volt MX to access the data. Click **Yes** to allow the portlet to login for single sign-on.

    ![alt text](./assets/image-6.png)

## Result

You have now successfully enabled SSO integration between HCL DX and Volt MX Foundry.