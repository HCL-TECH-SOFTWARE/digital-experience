# Authentication

Authentication is a basic security concept that ensures users can prove their identity.

-   **[User registry](../authentication/user_registry)**  
User information is stored in your user registry. You can enable LDAP referrals, configure HCL Digital Experience to use dynamic groups, update your user registry, or delete your user registry configurations.
-   **[Setting up custom user repositories](../authentication/customer_user_repo)**  
A custom user repository is any repository that HCL Portal does not support out-of-box. However, you can configure HCL Portal to support any type of repository in a federated or stand-alone user registry, whether an LDAP directory, database, file system, and so on.
-   **[External security managers](../authentication/external_sec_mgmt)**  
Use external security managers such as IBM Security Access Manager to perform authentication and authorization for HCL Digital Experience. You can use an external security manager for authentication only or for both authentication and authorization. Using an external security manager to perform only authorization is not supported at this time.
-   **[Security authentication considerations](../authentication/sec_auth_consideration)**  
Security and authentication are key elements of a production environment. Learn about single sign-on, credential vaults and external security managers.
-   **[Integrating with IBM WAS TAI authentication](../authentication/wcm_secure_int_tai_auth.md)**  
This roadmap outlines integration with IBM WebSphere Application Server Trust Association Interceptors (TAI) authentication for your environment.  
-   **[Enabling step-up authentication and/or the Remember me cookie](../authentication/stepup_auth)**  
Using step-up authentication and/or the Remember me cookie lets you fine-tune user authentication to pages and portlets.
-   **[Enabling HTTP Basic Authentication for simple clients](../authentication/basic_auth)**  
HCL Portal provides an HTTP Basic Authentication Trust Association Interceptor that can be enabled to allow specific clients to log into the portal by using HTTP Basic Authentication instead of HTTP Form Based Authentication.
-   **[Updating user ID and passwords](../authentication/updating_userid_pwd)**  
HCL Digital Experience and IBM® WebSphere® Application Server use some accounts from the registry (for example, the LDAP server) including administrative and bind IDs for authenticated access to databases and LDAP severs respectively, as well as the HCL Portal and WebSphere Application Server administrative IDs. 
-   **[Integrating with Transient Users with OpenID Connect](../authentication/integrate_oid)**  
This page explores integrating HCL Digital Experience™ (DX) with two OIDC services, [Auth0](https://auth0.com/docs/authenticate/protocols/openid-connect-protocol) and [Google](https://developers.google.com/identity/protocols/oauth2/openid-connect).
- **[Setting up OIDC for HCL Digital Experience](../authentication/Set_up_OIDC_for_DX.md)**
This page helps you to configure your HCL Digital Experience (DX) installation to leverage OpenID Connect (OIDC) based authentication with an OIDC compatible Identity Provider (IdP), such as Keycloak. This means that DX is turned into a relying party (RP) towards your IdP and the IdP is trusted for authentication assertions.