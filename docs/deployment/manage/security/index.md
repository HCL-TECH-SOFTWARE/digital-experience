# Securing

Security tasks include setting up property extension databases and custom user repositories, configuring and activating SSL, and configuring authentication. In addition, tasks such as activating Federal Information Processing Standards \(FIPS\) and NIST SP800-131a security modules and configuring external security managers such as Security Access Manager might be required to secure your portal environment.

If you have not configured your user registry yet, go to the Installing section, select the appropriate operating system, and then choose the appropriate deployment scenario. Then, select the Configuring portal to use a user registry topic.

-   **[Security and authentication considerations](../plan/plan_secauth.md)**  
Security and authentication are key elements of a production environment. Learn about single sign-on, credential vaults and external security managers.
-   **[Controlling access](../admin-system/control_access.md)**  
After creating users and groups, you can assign them different levels of access to specific resources, roles, and policies. This access controls what actions they can perform on various pages, portlets, and applications.
-   **[Enabling Attribute Based Security](../security/enable_abs.md)**  
Attribute based security for HCL Web Content Manager content is an access filter in the product filter chain. You can extend the access control permission checks for HCL Web Content Manager content beyond the user or group-based decisions. You can define your own criteria. The criteria might involve categories, keywords, textComponents, htmlComponents, or shortTextComponents for an item.
-   **[Java 2 security](../plan/sec_java2.md)**  
Java 2 \(J2SE\) security provides a policy-based, fine-grain access control mechanism that increases overall system integrity by checking for permissions before allowing access to certain protected system resources. J2SE security allows you to set up individual policy files that control the privileges assigned to individual code sources. If the code does not have the required permissions and still tries to execute a protected operation, the Java™ Access Controller will throw a corresponding security exception.
-   **[Integrating with OpenID authentication](../security/use_openid.md)**  
Web applications provide information and services to public users and personalized information and services to authenticated users. Users often work with multiple web applications, which require multiple IDs and passwords. This requirement can be difficult to maintain. Integrating identity providers \(Google, Yahoo, or Facebook\) into your site can simplify logging in for your users.
-   **[Integrating with IBM WAS TAI authentication](../wcm/wcm_secure_int_tai_auth.md)**  
This roadmap outlines integration with IBM WebSphere Application Server Trust Association Interceptors \(TAI\) authentication for your environment.
-   **[Enabling step-up authentication and/or the Remember me cookie](../security/cfg_sec_intro.md)**  
Using step-up authentication and/or the Remember me cookie lets you fine-tune user authentication to pages and portlets.
-   **[Securing LTPA keys on a production environment](../security/ltpa.md)**  
The Lightweight Third Party Authentication \(LTPA\) key holds cryptographic keys that secure the user authentication session and cookies. To secure the production server environment, regenerate the LTPA key using the WebSphere Integrated Solutions Console. If you plan to enable single sign-on at a later time, you must first disable the automatic key generation.
-   **[Configuring SSL](../security/ssl_intro.md)**  
Secure socket layers \(SSL\) encrypt traffic between the client browser and the server to secure information exchanged over the network between the browser and HCL Digital Experience. You will need to configure your environment for SSL to activate this additional security feature.
-   **[Enabling FIPS and \(NIST\) SP800-131a](../config/cfg_fips.md)**  
HCL Digital Experience tolerates IBM WebSphere Application Server support of Federal Information Processing Standards \(FIPS\) and National Institute of Standards and Technology \(NIST\) SP800-131a. You can configure WebSphere Application Server to activate FIPS 140-2 compliant security modules. When you enable FIPS, you can use only FIPS to securely encrypt data. For this reason, you must also configure FIPS for systems that require secure transactions, which can include HTTP servers and LDAP servers.
-   **[Configuring Session Security Integration](../security/ssi_cons.md)**  
IBM WebSphere Application Server protects your session from access by other users.
-   **[Enabling HTTP Basic Authentication for simple clients](../security/tait_nbl_hba4sc.md)**  
HCL Portal provides an HTTP Basic Authentication Trust Association Interceptor that can be enabled to allow specific clients to log into the portal by using HTTP Basic Authentication instead of HTTP Form Based Authentication.
-   **[Setting up custom user repositories](../security/setup_cur.md)**  
A custom user repository is any repository that HCL Portal does not support out-of-box. However, you can configure HCL Portal to support any type of repository in a federated or stand-alone user registry, whether an LDAP directory, database, file system, and so on. Setting up custom user repositories involves tasks such as defining additional repositories to the default federated user registry, creating a custom stand-alone user repository, and updating your user repository to reflect changes in your environment. Learn what steps are required to create and update custom user repositories and what specific interfaces you must implement to enable communication between HCL Portal and a repository.
-   **[External security managers](../security/sec_ext_man.md)**  
Use external security managers such as IBM Security Access Manager to perform authentication and authorization for HCL Digital Experience. You can use an external security manager for authentication only or for both authentication and authorization. Using an external security manager to perform only authorization is not supported at this time.
-   **[Deleting passwords from properties files](../security/sec_del_pswds.md)**  
The configuration tasks might require you to write security-sensitive information, such as passwords, into multiple properties files. When you no longer need this security-sensitive information for your configuration, you should remove them and move the files to a safe place or set the file permissions so that only authorized users can read them.
-   **[Updating user ID and passwords](../security/sec_pswds.md)**  
HCL Digital Experience and IBM® WebSphere® Application Server use some accounts from the registry \(for example, the LDAP server\) including administrative and bind IDs for authenticated access to databases and LDAP severs respectively, as well as the HCL Portal and WebSphere® Application Server administrative IDs. Often this means that the account passwords are stored in the HCL Portal and WebSphere® Application Server bootstraps configuration files, which allows the authentication process to work.
-   **[Content Security Policy](../security/content_security_policy.md)**  
The Content-Security-Policy header is used by modern browsers to enhance security of HCL Digital Experience site documents or webpages by allowing HCL Digital Experience administrators or developers declare which dynamic resources are allowed to load.
-   **[Users and groups](../security/adusrgrp.md)**  
HCL Digital Experience offers you centralized administration of users and user groups, allowing you to better define users and manage user access rights. Users can register and manage their own account information, or an administrator can provision and manage users. Group memberships can be used to give the required permissions to access an object or perform a request.
-   **[Access](../security/access)**  
Control who has access to the site.
-   **[User registry](../security/user_registry)**  
User information is stored in your user registry. You can enable LDAP referrals, configure HCL Digital Experience to use dynamic groups, update your user registry, or delete your user registry configurations.


**Related information**  


[WebSphere Application Server V7.0 Security Guide](http://www.redbooks.ibm.com/abstracts/sg247660.html?Open)

[Security Hardening Guide for HCL Digital Experience](https://support.hcltechsw.com/csm?id=kb_article&sys_id=9d66bc2bdbf2a890a45ad9fcd3961983&spa=1)

[HCL Digital Experience: Integrating Transient Users with OpenID Connect](https://support.hcltechsw.com/csm?id=kb_article&sys_id=5f2f004a1bf068d0534c4159cc4bcbc8&spa=1)

[Portal administration tools](../admin-system/admtools.md)

[Managing the user population for virtual portals](../admin-system/advppln_mgupop.md)

