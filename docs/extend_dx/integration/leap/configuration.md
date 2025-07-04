# Configuring HCL Leap to integrate with HCL Digital Experience

This page provides information on how to configure the integration of HCL Leap with the existing Digital Experience (DX) environment.

## Configuring Ingress for HCL DX and HCL Leap

You can use an [optional Ingress](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress.md) with HCL DX. While an Ingress is not required to run HCL DX, it can be configured to be reused by HCL Leap to handle the routing for both products and make them available on the same host name and certificate.

1. Set up the Ingress for HCL DX. For more information, refer to the [optional Ingress documentation](../../../deployment/install/container/helm_deployment/preparation/optional_tasks/optional-configure-ingress.md).

2. Add a second Ingress resource for Leap or extend the existing DX Ingress. Ensure you point the Ingress resource to the path where Leap is configured. This path depends on the context route of the Leap deployment. For example:

    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
    name: custom-routes
    spec:
        ingressClassName: nginx
        tls:
        - secretName: dx-tls-cert
        hosts:
            - your-kube-deployment.com
        rules:
        - host: your-kube-deployment.com
        http:
            paths:
            - path: /apps
            pathType: Prefix
            backend:
                service:
                name: leap-deployment-leap
                port:
                    number: 9080
    ```

    After applying the configuration, you will be able to access DX and Leap  using the provided hostname.

## Enabling LTPA SSO between HCL Leap and HCL DX in Kubernetes

Refer to the following steps to enable Lightweight Third-Party Authentication (LTPA) Single Sign-On (SSO) between Leap and DX in Kubernetes. These steps are based on [a community post](https://support.hcltechsw.com/community?id=community_blog&sys_id=ba541e4b1b820614f37655352a4bcbc4){target="_blank"} in HCLSoftware Community.

1. Ensure both DX and Leap use an identical user registry configuration.

2. Ensure both DX and Leap use the same realm name.
  
    To set the realm name for DX:

    1. Log in to the WebSphere Integrated Solutions Console (`your-domain.com/ibm/console`) as an administrator.
    2. Click **Security > Global Security > User Account Repository > Realm Name**.
    3. Under **User account repository**, set the **Realm name** (for example, `defaultWIMFileBasedRealm`).

        ![](../../../assets/dx-leap-integration-realm.png)

    4. Click **Apply**.
    5. Click **Save** at the top of the console messages.

    To set the realm name for Leap:

    1. Edit the `configOverrideFiles` section in your Helm chart's `values.yaml` file. In the following example, the realm name for Leap is set to `defaultWIMFileBasedRealm`, similar to the realm name set in DX.

        ```yaml
        configuration:
        leap:  
            configOverrideFiles:
            mycustomoverride: |
                <server description="leapServer">
                <federatedRepository id="leapRepo">
                    <primaryRealm name="defaultWIMFileBasedRealm" allowOpIfRepoDown="true">
                    <participatingBaseEntry name="o=defaultWIMFileBasedRealm" />
                    </primaryRealm>
                </federatedRepository>
                <basicRegistry id="leapRegistry" realm="defaultWIMFileBasedRealm" ignoreCaseForAuthentication="true">
                    <user id="<my-user-id>" name="uid=<my-uid>,o=defaultWIMFileBasedRealm" password="<my-password>" />
                </basicRegistry>
                </server>
        ```

    2. Perform a Helm upgrade to apply your changes.

    !!!note
        For more information regarding Leap's `configOverrideFiles` parameter, refer to [Open Liberty server customizations](https://opensource.hcltechsw.com/leap-doc/latest/helm_open_liberty_custom.html?h=configoverridefile).

3. Ensure both DX and Leap use the same DNS domain (for example, `xyz.com`).

4. Ensure LTPA cookies flow only over HTTPS.

    To limit the flow of LTPA cookies to SSL only on the traditional WebSphere Application Server (WAS):

    1. Log in to the WebSphere Integrated Solutions Console (`your-domain.com/ibm/console`) as an administrator.
    2. Click **Security > Global security > Web and SIP security > Single sign-on (SSO)**.
    3. Select the **Requires SSL** checkbox.
    4. Click **Apply**.
    5. Click **Save** at the top of the console messages.

    To limit the flow of LTPA cookies to SSL only on Liberty:

    1. Add the following parameter to the `configOverrideFiles` section of your `values.yaml` file

        ```
        <webAppSecurity ssoRequiresSSL="true"/>
        ```

    2. Perform a Helm upgrade to apply your changes.

5. Ensure both DX and Leap use the same LTPA keys.

    1. Export the LTPA keys from WAS:
        1. Log in to the WebSphere Integrated Solutions Console (`your-domain.com/ibm/console`) as an administrator.
        2. Click **Security > Global security > LTPA**.
        3. In the Cross-cell single sign-on section, enter values for the following fields:
            1. Under **Password**, enter and confirm a secure password. You will require this password later.
            2. Under **Fully qualified key file name**, specify a name for the file that holds the exported keys (for example, `ltpa.keys`).
        4. Click **Export keys**.
    2. Copy the content of the exported LTPA key file into a local file named `ltpa.keys` in your current folder. This file will be used to create the Kubernetes secret.
    3. Run the following command in your local machine's terminal to create the Kubernetes secret:

        ```
        kubectl create secret generic my-custom-ltpa-key --from-file=./ltpa.keys --namespace=<namespace>
        ```

    4. Update `ltpa-key` in the Leap custom Helm `values.yaml` file:

        ```yaml
        configuration: 
        leap: 
            customSecrets: 
            ltpa-key: my-custom-ltpa-key
        ```

    5. Update the LTPA `keysFileName` and `keysPassword` parameters by adding this line to the `configOverrideFiles` section of your `values.yaml` file: 

        ```
        <ltpa keysFileName="/path/to/ltpa.keys" keysPassword="<myLtpaKeyPassword>" />
        ```

    6. Perform a Helm upgrade to apply your changes.

    !!! note
        For more details on using custom secrets as key file, refer to [Using custom secrets as key file](https://opensource.hcltechsw.com/leap-doc/latest/helm_admin_customsecret.html?h=ltpa#using-custom-secrets-as-key-file){target="_blank"}.

    See the resulting `values.yaml` file after adding the `<webAppSecurity ssoRequiresSSL="true"/>` and `<ltpa keysFileName="/path/to/ltpa.keys" keysPassword="<myLtpaKeyPassword>" />` lines to the `configOverrideFiles` section:

    ```yaml
    ### Leap custom values file
    configuration:
    leap:  
        configOverrideFiles:
        mycustomoverride: |
            <server description="leapServer">
            <webAppSecurity ssoRequiresSSL="true"/>
            <ltpa keysFileName="/path/to/ltpa.keys" keysPassword="<myLtpaKeyPassword>" />
            <federatedRepository id="leapRepo">
                <primaryRealm name="defaultWIMFileBasedRealm" allowOpIfRepoDown="true">
                <participatingBaseEntry name="o=defaultWIMFileBasedRealm" />
                </primaryRealm>
            </federatedRepository>
            <basicRegistry id="leapRegistry" realm="defaultWIMFileBasedRealm" ignoreCaseForAuthentication="true">
                <user id="<my-user-id>" name="uid=<my-uid>,o=defaultWIMFileBasedRealm" password="<my-password>" />
            </basicRegistry>
            </server>
    ```

6. Restart HCL Leap and HCL DX. You should now be able to log in to DX and open Leap without having to log in again.
