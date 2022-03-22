# Changing from a stand-alone repository to a federated repository

If you originally configured a stand-alone LDAP user registry but require a robust security configuration, you can change to the federated user repository.

In a stand-alone server environment, you can complete the following task when the servers are either stopped or started. In a clustered environment, start the deployment manager and node agent. Then, verify that they are able to synchronize.

**Remember:** Starting with HCL Portal Version 8.5, the stand-alone LDAP repository is deprecated. Change to the federated LDAP user repository.

Use the wp\_security\_federated.properties helper file that is in the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/config/helpers directory. It ensures that the correct properties are entered. In the following instructions, where the step refers to the wkplc.properties file, use your wp\_security\_federated.properties helper file.

1.  Go to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties directory.

2.  Open the wkplc.properties file with a text editor.

3.  Update the following parameters in the wkplc.properties file under the VMM Federated repository properties heading:

    **Note:** Go to the properties file for specific information about the parameters.

    -   federated.primaryAdminId
    -   federated.realm
    -   federated.serverId
    -   federated.serverPassword
4.  Open a command prompt.

5.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

6.  Run the following task to change the configuration to use a federated repository:

    -   AIX® HP-UX Linux™ Solaris z/OS®: ./ConfigEngine.sh wp-modify-federated-security -DWasPassword=password -Dskip.ldap.validation=true
    -   IBM® i: ConfigEngine.sh wp-modify-federated-security -DWasPassword=password -Dskip.ldap.validation=true
    -   Windows™: ConfigEngine.bat wp-modify-federated-security -DWasPassword=password -Dskip.ldap.validation=true
7.  Stop and restart the appropriate servers to propagate the changes. For instructions, go to [Starting and stopping servers, deployment managers, and node agents](../admin-system/stopstart.md).

8.  Log in to HCL Portal as an administrator.

    1.  Click **Administration**. Then, click **Virtual Portals** \> **Manage Virtual Portals**.

    2.  Edit each Virtual Portal using the pencil icon.

    3.  Set **User realm** as blank.

    4.  Click **OK**.

    5.  Edit each Virtual Portal using the pencil icon.

    6.  Set **User realm** to match the realm ID that you set for federated.realm.

    7.  Click **OK**.


