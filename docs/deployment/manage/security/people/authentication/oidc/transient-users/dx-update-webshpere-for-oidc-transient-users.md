# Updating WebSphere to support OIDC Authentication for DX with Transient Users

In addition to the basic OIDC Authentication for HCL Digital Experience (DX), you can give users(transient users) who are trusted and verified by an identity provider to access DX. These trusted and verified users do not require a local and registered Portal user account. For more information, see [Configuring transient users | HCL Digital Experience](https://help.hcltechsw.com/digital-experience/9.5/security/openid_trans_users.html).

The Java Authentication and Authorization Service (JAAS) login module uses transient user attribute values based on the username supplied by the TAI. Also, it skips group membership process, since DX treats transient users as members of a `All Authenticated Portal Users` group. For more information on the JAAS module, see [Developing custom login modules for a system login configuration for JAAS](https://www.ibm.com/docs/en/was-nd/9.0.5?topic=ujaaspmwa-developing-custom-login-modules-system-login-configuration-jaas).

This functionality allows you to write minimal custom code that can bridge components and provide DX-based applications to integrate with an OIDC OpenID Provider (OP). This configuration is for the basic login module that enables Transient Users with any inconsistent Trust Association Interceptor (TAI).

Before you begin, please ensure you have carried out the steps outlined in [Updating WebSphere to support OIDC Authentication for DX](../dx-update-webshpere-for-oidc.md).

## Configuring the transient users

1. Enable transient users:

    ```sh
    cd /opt/HCL/wp_profile/ConfigEngine
    ./ConfigEngine.sh enable-transient-user -DWasUserId=wpsadmin -DWasPassword=wpsadmin
    ```

    !!! note
        After you run the `enable-transient-user` task, all identified users are identified with the authenticated group and do not have explicit groups.

1. Restart the server:

    ```sh
    kubectl exec -it dx-deployment-core-0 bash -n dxns
    cd /opt/HCL/AppServer/bin 
    ./stopServer.sh WebSphere_Portal
    ./startServer.sh WebSphere_Portal
    ```

1. **(Optional):** Complete the following steps to create group objects for external providers to assign different access rights:

    1. In the ISC, go to **Security > Global Security**.

    1. Go to **User account repository > Available realm definitions** and select **Federatedrepositories** in the dropdown,  click **Configure**.

    1. Under **Related Items** click **Manage Repositories > transientidp** in the **Repository Identifier** column. Click **New** and set the following properties:

        | Name                                  | Value            |
        | ------------------------------------- | ---------------- |
        | buildgroupsfor                        | &lt;IDP_NAME&gt; |

        !!!note
            &lt;IDP_NAME&gt; can be replaced with the list of supported Identity Providers that you want to build groups for; for example: `testgroup`, `Group1`, `Keycloak`. The items in the list must be separated by a space. The Identity Providers are case-sensitive and must match what you entered for the `idp.providerlist` and `openid.servicenames` parameters.

    1. Click **OK** and  **Save** to save the changes in the master configuration.

1. In the ISC navigate, go to **Resources > Resource Environment > Resource Environment Providers**. Search for **WP PumaStoreService** and then click **Custom properties**:

    1. Set the following properties:

        | Name | Value |
        | ---- | ---- |
        | parentDN.externalUsers | o=transparent |
        | store.puma_default.filter.TransparentUserFilter.classname | com.ibm.wps.um.TransparentUserFilter |
        | store.puma_default.filter.TransparentUserFilter.position | -10 |

    1. **(Optional):** To customize the task for your business requirements add the following parameters : 
    - **-Dtransparent.suffix** Set this value to a `dn` suffix that is used for transient users. The suffix must NOT match your current suffixes for fully registered users. The default value is `o=transparent`. 
    - **-Dtransparent.prefix** Set this value to a prefix that is used for transient users. For example, if you want to set the RDN attribute, set this value to `cn`.

    1. Click **OK** and **Save** to save the changes to the master configuration.

    1. Restart the server.

1. After completing the steps to enable transient users, follow the procedure to add the JAAS login module for bridging the WAS OIDC Relying Party to HCL DX Transient Users.

    1. The required jar for the JAAS login modules is deployed to the default path **/opt/HCL/PortalServer/base/wp.auth.jaas/profile/classes/wp.auth.jaas.jar**.

    1. Copy the **wp.auth.jaas.jar** into the class path (for example **opt/HCL/lib/ext/** for traditional environments or **/opt/HCL/wp_profile/classes** for containerized environments).
        - Navigate to **/opt/HCL/PortalServer/base/wp.auth.jaas/profile/classes/**
        - `cp wp.auth.jaas.jar /opt/HCL/wp_profile/classes`

    1. In the ISC, go to **Global security > Java Authentication and Authorization Service > System logins > WEB_INBOUND**, and add the following module `com.hcl.dx.auth.jaas.impl.TransientUsersLoginModule` with Authentication strategy `REQUIRED`.

    1. Set the module order for **WEB_INBOUND** as follows:

        | Module Class Name | Module Order |
        | --- | --- |
        | com.hcl.dx.auth.jaas.impl.TransientUsersLoginModule | 1 |
        | com.ibm.ws.security.server.lm.ltpaLoginModule | 2 |
        | com.ibm.ws.security.server.lm.wsMapDefaultInboundLoginModule | 3 |

    1. Click **OK** and **Save**  to save the changes to the master configuration.

    1. Restart the server.

## Testing the OIDC login flow

1. Log out or open a private browser and navigate to `https://<DX_HOSTNAME>/wps/portal`.
1. Click **Log in**.
    - This directs you to the IdP instance log in view.
1. Log in with an existing IdP user and their password.
    - You are directed to DX and logged in as the correct user.

This completes your transient user OIDC setup.

## What's next

Once you have updated WebSphere to support OIDC authentication for DX, you should look at the steps outlined in [Adjusting the DX Login flow for OIDC](../dx-integration.md).

## Additional topics around JAAS Login Module

- [Building Custom JAAS Login Module for your Identity Provider (IdP)](./transient-users-building-jaas-modules): This document outlines how to build a custom JAAS Login Module, enabling you to make additional authentication decisions or add information to the subject to make fine-grained authorization decisions inside your application.

- [Configuring Rule-based user groups adapter for Transient Users](./transient-users-softgroups-configuration.md): This is an optional configuration, to strengthen your transient user integration with additional features such as user role/group mapping from an IdP to DX.
