# External security managers

Use external security managers such as IBM Security Access Manager to perform authentication and authorization for HCL Digital Experience. You can use an external security manager for authentication only or for both authentication and authorization. Using an external security manager to perform only authorization is not supported at this time.

Perform the following tasks to configure external security managers.

-   **[Planning for external security managers](../plan/plan_extsecman.md)**  
By default, IBM WebSphere Application Server controls authentication to HCL Digital Experience and HCL Digital Experience controls authorization \(access control\) to resources.
-   **[Enabling and configuring single sign-on for HTTP requests using SPNEGO](../config/cfg_spntaiweb.md)**  
You can create single sign-on requests for your HTTP server using the Simple and Protected GSS-API Negotiation Mechanism \(SPNEGO\) available in IBM WebSphere Application Server. Creating single sign-on requests using SPNEGO allows HTTP users to log in and authenticate only once and receive automatic authentication from WebSphere Application Server.
-   **[Security Access Manager](../security/conf_tam.md)**  
HCL Digital Experience supports the use of IBM Security Access Manager. Existing Security Access Manager users can use the Security Access Manager services to assist them in their deployment.
-   **[Configuring eTrust SiteMinder](../security/cfg_siteminder.md)**  
HCL Digital Experience supports the use of Computer Associates eTrust SiteMinder for authentication and authorization.
-   **[Verifying Trust Association Interceptors for authentication](../security/verify_tai.md)**  
After configuring HCL Digital Experience to use an external security manager for authentication, you should verify that the Trust Association Interceptors \(TAI\) are working properly before continuing with any additional configuration tasks.
-   **[Changing the login and logout pages](../security/sec_chg_login.md)**  
By default, when unauthenticated users attempt to access the `myportal` page, they get redirected to the login page to provide a user name and password. When using a WebSEALor Computer Associates eTrust SiteMinder TAI for authentication, you no longer need to use the HCL Digital Experience login page. Instead, the login icon should point to the protected portal page.
-   **[Managing access control with external security managers](../security/man_acc_ext.md)**  
HCL Digital Experience externalizes roles and uses access control to control role membership. From the perspective of the external security manager, these externalized roles contain only one permission: membership in the role. HCL Portal always determines the permissions associated with each role.


