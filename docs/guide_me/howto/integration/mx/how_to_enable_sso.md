# How to Enable SSO Between HCL DX and Volt MX Foundry

This guide walks you through enabling **Single Sign-On (SSO)** between **HCL Digital Experience** and **HCL Volt MX Foundry**, where DX acts as the OAuth 2.0 service provider.

## Prerequisites

- HCL DX and Volt MX are deployed and accessible
- Access to the WebSphere Application Server
- Kubernetes CLI access
- TLS certificates
- Admin credentials for both DX and Volt MX

## Step 1: Create the OAuth Service Provider in HCL DX

### 1. Access the DX Core Pod

```bash
kubectl exec -it hcl-dx-dev1-core-0 core -n hcl-dx-dev1 -- sh
```

### 2. Run the wsadmin utility to create the OAuth provider

```bash
cd /opt/HCL/AppServer/bin
./wsadmin.sh -lang jython -username <username> -password <password>

AdminTask.createOAuthProvider('[-providerName OAuthConfig -fileName /opt/HCL/AppServer/properties/DXProvider.xml]')
AdminConfig.save()
quit
```

### 3. Verify the configuration file

```bash
# Ensure it exists at:
/opt/HCL/wp_profile/config/cells/dockerCell/oauth20/OAuthConfig.xml
```

### 4. Restart WebSphere Portal

```bash
./stopServer.sh WebSphere_Portal -profileName wp_profile -username <username> -password <password>
./startServer.sh WebSphere_Portal -profileName wp_profile
```

## Step 2: Configure Trust Association Interceptors (TAI)

### 1. Open the WebSphere Admin Console.

### 2. Navigate to: **Security > Global security > Trust association > Interceptors**

![alt text](./assets/image.png)

![alt text](./assets/image-1.png)

### 3. Ensure **com.ibm.ws.security.oauth20.tai.OAuthTAI** exists.

![alt text](./assets/image-2.png)

### 4. If not, click New and add the class:

- Class name: `com.ibm.ws.security.oauth20.tai.OAuthTAI`
- Custom Properties:

```bash
provider_1.name=OAuthConfig
provider_1.filter=Authorization%=Bearer
```

![alt text](./assets/image-3.png)

## Step 3: Register the OAuth Client

### 1. Copy default client definitions:

```bash
cp /opt/HCL/AppServer/properties/base.clients.xml /opt/HCL/wp_profile/config/cells/dockerCell/oauth20/
```

### 2. Edit the XML to add Volt MX:

```bash
<client id="voltmx" component="OAuthConfig" secret="a2e3d8c3-uuid-value" displayname="Volt MX" redirect="https://<VOLT_MX_HOST>/auth/dx/<BASE64_DX_HOST>/callback" enabled="true"/>
```

## Step 4: Install the OAuth Application

### 1. Install OAuth 2.0 provider app

``` bash
./wsadmin.sh -f ./installOAuth2Service.py install dockerNode WebSphere_Portal -profileName wp_profile -username <username> -password <password>
```

### 2. Enable OAuth TAI

```bash
./wsadmin.sh -lang jython -username <username> -password <password>
AdminTask.enableOAuthTAI()
AdminConfig.save()
quit
```

### 3. Restart the portal again

## Step 5: Configure Identity Services in Volt MX

### 1. Create an Application in Volt MX Foundry.

### 2. Configure Identity Service

- Type: OAuth

- Authorize Endpoint:

```bash
https://<dx-host>/oauth2/endpoint/OAuthConfig/authorize
```

- Token Endpoint:

```bash
https://<dx-host>/oauth2/endpoint/OAuthConfig/token
```

- Client ID / Secret: Use values from the OAuth client registration.

![alt text](./assets/image-4.png)

### 3. Click "Test login" and confirm the OAuth login screen appears.

!!! note
    If SSL errors occur, import the DX SSL certificate into WebSphere using: `Security > SSL certificate and key management > Retrieve from port`.

### 4. Enable SSO in Volt MX

- Go to Identity Service > More Actions > Enable SSO

![alt text](./assets/image-5.png)

## Step 6: Enable SSO in Iris App

### 1. Create login form in Iris, add the following code to form init:

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

### 2. Deploy Iris app to DX

- Deploy the Iris application to HCL DX. For more information, see [How to Deploy Volt MX portlet into HCL DX](./how_to_integrate_mx_portlet_to_dx.md). 
- After deploying the application, when the user goes to a web page, a window appears asking for permission to allow the client Volt MX to access the data. Click **Yes** to allow the portlet to login for single sign-on.

![alt text](./assets/image-6.png)

**You have now successfully enabled SSO integration between HCL DX and Volt MX Foundry.**