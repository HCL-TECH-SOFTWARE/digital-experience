# Updating user ID and passwords

HCL Digital Experience and IBM® WebSphere® Application Server use some accounts from the registry \(for example, the LDAP server\) including administrative and bind IDs for authenticated access to databases and LDAP severs respectively, as well as the HCL Portal and WebSphere Application Server administrative IDs. Often this means that the account passwords are stored in the HCL Portal and WebSphere Application Server bootstraps configuration files, which allows the authentication process to work.

**Note:** Before updating any user ID or password, review "User IDs and passwords" located under Planning for HCL Portal.

If the password for any ID is changed \(either through HCL Portal or through any other means, including directly through the LDAP administration interfaces\), then the password value stored in the appropriate configuration file must be changed at the same time. The following instructions describe how to make the appropriate changes based on which account passwords might have changed.

**Remember:** If you reuse the same account ID/password for multiple purposes, such as using wpsbind as the administrative ID and the LDAP access ID, then you might have to do more than one of the following steps to accommodate the password change. Some changes, particularly changes made through the WebSphere Integrated Solutions Console, require that the WebSphere Integrated Solutions Console is open and the current ID/password logged in before actually making the password change in the registry. Carefully plan which steps are required and in what order to avoid not being able to bring up server processes or log in.

Use the following topics to change passwords to better secure your environment.

-   **[Changing the HCL Digital Experience administrator password](../security/wpsadmin.md)**  
HCL Digital Experience treats wpsadmin \(the administrator\) as any other user, just with more permissions granted. With a normal configuration, it is possible to change the wpsadmin or equivalent password through the user interface, just like any other user can manage their own password through the user interface. However, if the wpsadmin account is also used for more than just the administrator, then additional changes, outlined in other steps in this section, must be made to accommodate the change.
-   **[Changing the WebSphere Application Server administrator password in the file registry](../security/was_filereg.md)**  
If you are using the file registry in the federation repository to store passwords, you need to change the passwords in the file registry.
-   **[Changing the WebSphere Application Server administrator password in the LDAP server using the LDAP administration interface](../security/wpsbindldap.md)**  
If you are using the IBM Directory Server or IBM SecureWay Security Server for z/OS and OS/390 LDAP server, you can change the IBM WebSphere Application Server administrator password in the LDAP server using the LDAP administration interface. If you are using any other LDAP server, refer to the product documentation for information about changing passwords.
-   **[Replacing the WebSphere Application Server administrator user ID](../security/rep_was_id.md)**  
If you change your security configuration, you might need to replace your old IBM WebSphere Application Server administrator user ID with a new WebSphere Application Server administrator user ID.
-   **[Replacing the HCL Digital Experience administrator user ID](../security/portalid.md)**  
If you change your security configuration, you might need to replace your old HCL Digital Experience administrator user ID with a new HCL Digital Experience administrator user ID.
-   **[Changing the LDAP bind password](../security/bind.md)**  
If you use an LDAP user registry, you must adapt the LDAP bind user ID.
-   **[Changing database passwords that are used by HCL Portal](../config/db_passwords.md)**  
If database passwords are modified or expired, you must specify the new passwords on the IBM WebSphere Application Server and on the IBM DB2 Universal Database Enterprise Server Edition server so that HCL Portal can access them.


