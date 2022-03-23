# Changing the realm name 

When you configure HCL Connections portlets to use single sign-on, you might need to change the Portal realm name to match the one used in HCL Connections.

1.  In the WebSphere® Application Server Integrated Solutions Console, change the realm name.

    For example, from defaultWIMFileBasedRealm to AD.cn.ibm.com:389.

2.  Configure Portal to use the new realm name as the default realm:

    1.  Use a text editor to open the wkplc.properties file, which is in the wp\_profile\_root/ConfigEngine/properties directory.

    2.  For defaultRealmName, type the realmName property value you want to use as the default realm.

    3.  Save your changes to the wkplc.properties file.

    4.  Run the following task from the wp\_profile\_root/ConfigEngine directory to set this realm as the default realm:

        ```
        ./ConfigEngine.sh wp-default-realm -DWasPassword=password
        ```

    5.  Stop and restart all necessary servers to propagate your changes.

3.  The default Portal administrator user ID is a file-based user ID, which is unlikely to exist in your HCL Connections realm. Follow these steps to change the WAS and Portal administrator user ID to an available user ID in the HCL Connections realm.

    1.  Run the following command from the wp\_profile\_root/ConfigEngine directory to replace the existing WebSphere Application Server administrative user ID and group ID with the new user and group.

        ```
        ./ConfigEngine.sh wp-change-was-admin-user -DWasPassword=password -DnewAdminId=newadminid -DnewAdminPw=newpassword -DnewAdminGroupId=newadmingroupid
        ```

        **Important:** You must provide the full distinguished name \(DN\) for the newAdminId and newAdminGroupId parameters.

        **Note:** The task is intended to run against a running server. If the server is stopped, add the-Dskip.ldap.validation=true parameter to the task to skip the validation.

    2.  Verify that the task completed successfully. In a clustered environment, restart the deployment manager, the node agents, and HCL Portal servers. In a stand-alone environment, restart the server and HCL Portal servers.

    3.  Run this task to replace the old HCL Portal administrative user ID and group ID with the new user and group:

        ```
        ./ConfigEngine.sh wp-change-portal-admin-user -DWasPassword=password -DnewAdminId=newadminid -DnewAdminPw=newpassword -DnewAdminGroupId=newadmingroupid
        ```

        **Important:** You must provide the full distinguished name \(DN\) for the newAdminId and newAdminGroupId parameters.

        **Note:** The task is intended to run against a running server. If the server is stopped, add the-Dskip.ldap.validation=true parameter to the task to skip the validation.


**Parent topic:**[Configuring authentication ](../connect/c_connections_portlets_SSO_config.md)

