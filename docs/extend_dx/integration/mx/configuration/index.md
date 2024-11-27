# Configuring HCL Volt MX Foundry for integration with HCL Digital Experience

## Configuring Ingress for HCL Digital Experience and HCL Volt MX Foundry

You can use an [optional Ingress](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress.md) with HCL Digital Experience. While an Ingress is not required to run HCL Digital Experience, it can be configured to be reused by HCL Volt MX Foundry to handle the routing for both products and make them available on the same host.

1. Set up the Ingress for HCL Digital Experience. For more information, refer to the [optional Ingress documentation](../../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress.md).
2. Configure HCL Volt MX Foundry to use the existing Ingress controller. The following sample values for HCL Volt MX Foundry configure the Ingress to use an SSL connection using the provided custom certificates. 
     - The certificate in `customCert` must match the certificate used for the Ingress configuration of HCL Digital Experience. The `cer` and `key` file must be located in the `apps/certs` directory of the MX Helm chart.
     - The `class` in this configuration refers to the class name of the deployed Ingress controller.
     - The `serverDomainName` must match the hostname that the Ingress is available at:
    
         ```yaml
         ingress:
           enabled: true
           protocol: "https"
           port: "443"
           class: "nginx"
           tls:
             enabled: true
             customCert:
               cert: "certs/your-ssl-cert.cer"
               key: "certs/your-ssl-cert.key"
         serverDomainName: "your-mx-and-dx-host.com"
         ```
         
     Refer to the [HCL Volt MX Foundry Configuration documentation](https://opensource.hcltechsw.com/volt-mx-docs/95/docs/documentation/Foundry/voltmxfoundry_containers_helm/Content/Installing_Containers_With_Helm.html#configuration) for more details on the used values.
     
After applying the configuration, both HCL Digital Experience and HCL Volt MX Foundry can be accessed using the provided hostname.

## Enable SSO for DX and MX

OAuth must be configured in Websphere to authenticate with HCL DX

Connect to the core server, e.g on Kubernetes:

```
  kubectl exec -it hcl-dx-dev1-core-0 core -n hcl-dx-dev1 -- sh
```

### Create service provider

1. Create the OAuth provider by using the wsadmin utility

```
cd /opt/HCL/AppServer/bin
./wsadmin.sh -lang jython -username <username> -password <password>

AdminTask.createOAuthProvider('[-providerName <OAuthProviderName> -fileName <ProviderConfigFile>]')
```

Where:

`<OAuthProviderName>` is the OAuth provider name (typically OAuthConfig)
`<ProviderConfigFile>` is the full path to the OAuth provider configuration file. Please download and use this [DXProvider.xml](../configuration/DXProvider.xml) configuration file which includes Auto Authorize setup for the VoltMX client.

Example:

```
AdminTask.createOAuthProvider('[-providerName OAuthConfig -fileName /opt/HCL/AppServer/properties/DXProvider.xml]')
AdminConfig.save()
quit
```

This should copy the configuration file to `<was_profile_root>/config/cells/<cell_name>/oauth20`

Please confirm this file exists, e.g. `/opt/HCL/wp_profile/config/cells/dockerCell/oauth20/OAuthConfig.xml`

2. Restart the WebSphere Application Server

```
cd /opt/HCL/AppServer/bin
./stopServer.sh WebSphere_Portal -profileName wp_profile -username <username> -password <password>
./startServer.sh WebSphere_Portal -profileName wp_profile
```

### Configure TAI properties

1. Open IBM Websephere console
Click `Global security`, expand `Web and SIP security`, click `Trust association`

![alt text](image.png)

2. Click Interceptors

![alt text](image-1.png)

3. Ensure that `com.ibm.ws.security.oauth20.tai.OAuthTAI` exists

![alt text](image-2.png)

If not, click `New` enter the Interceptor class name `com.ibm.ws.security.oauth20.tai.OAuthTAI`, and click `OK`

4. Update the custom properties to match
```
provider_1.name=OAuthConfig
provider_1.filter=Authorization%=Bearer
```

example:
![alt text](image-3.png)

### Register OAuth Client

1. Copy default client definitions

```
cp <app_server_root>/properties/base.clients.xml <was_profile_root>/config/cells/<cell_name>/oauth20oauth20/
```

For example:
```
cp /opt/HCL/AppServer/properties/base.clients.xml /opt/HCL/wp_profile/config/cells/dockerCell/oauth20/
```

2. Edit file to include Volt MX client

```
vi /opt/HCL/wp_profile/config/cells/dockerCell/oauth20/base.clients.xml
```
```
<client id="voltmx" component="<OAUTH_PROVIDER_NAME>" secret="<OAUTH_SECRET>" displayname="Volt MX" redirect="https://<VOLT_MX_HOST>/auth/dx/<BASE_64_ENCODED_DX_HOSTNAME>/callback" enabled="true">
</client>
```
Where:

  `<OAUTH_PROVIDER_NAME>` is the name of the Provider specified above, typically OAuthConfig

  `<OAUTH_SECRET>` is a complex, random secret, e.g. a UUID. This will be required later.
  
  `<VOLT_MX_HOST>` is the URL of the VoltMX deployment. [Redirect URL](#add-a-new-app-in-foundry) should be available in the Foundry, e.g. voltmx-env.com

  `<BASE_64_ENCODED_DX_HOSTNAME>` is a base64(dx-hostname) encoded string

For example:

```
<client id="voltmx" component="OAuthConfig" secret="a2e3d8c3-7875-4512-a0da-8b5fd61f2245" displayname="Volt MX" redirect="https://voltmx-env.com/authService/100000002/oauth2/callback" enabled="true">
</client>
```

### Install OAuth Application

1. Install the OAuth 2.0 service provider application

```
cd /opt/HCL/AppServer/bin
./wsadmin.sh -f ./installOAuth2Service.py install dockerNode WebSphere_Portal -profileName wp_profile -username <username> -password <password>
```

2. Enable OAuth 2.0 TAI

```
cd /opt/HCL/AppServer/bin
./wsadmin.sh -lang jython -username <username> -password <password>
AdminTask.enableOAuthTAI()
AdminConfig.save()
quit
```

3. Restart the WebSphere Application Server

```
cd /opt/HCL/AppServer/bin
./stopServer.sh WebSphere_Portal -profileName wp_profile -username <username> -password <password>
./startServer.sh WebSphere_Portal -profileName wp_profile
```

### Add a new App in Foundry

1) Create a new App and configure the identity services as type OAuth.

![alt text](image-4.png)

Authorize endpoint URL from DX -  https://dx-host/oauth2/endpoint/OAuthConfig/authorize

Token endpoint URL from DX -  https://dx-host/oauth2/endpoint/OAuthConfig/token

Client Id and Secret will be the same which was provided during [Register OAuth Client](#register-oauth-client) in `base.clients.xml`

2) Click on Test login should show the OAuth Authorization form as below. Clicking on Yes should give success response. Click on Save

![alt text](image-6.png)

3) Enable SSO for the identity services

![alt text](image-5.png)


### Add SSO in Volt Iris

1) Create a login page in VoltMX Iris and add the below code in form init. Ensure the Iris is connected to the Foundry app which contains the above SSO configurations. 

```
    if(!VMXFoundry) return;
	var voltmxIdent = VMXFoundry.getIdentityService("DXAuth");
    var options = {};
	var loginOptions = {};
   	loginOptions.isSSOEnabled = true;
	options.loginOptions = loginOptions;
    voltmxIdent.login(options, function(res) {
            alert("SSO userstore success" + JSON.stringify(res));
      var ntf = new voltmx.mvc.Navigation("frmHome");
    ntf.navigate();
        },
        function(res) {
            alert("SSO userstore failed" + JSON.stringify(res));
        });
```
