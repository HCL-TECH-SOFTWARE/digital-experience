# Updating the federated LDAP user registry

After you create and use the LDAP user registry in the default federated repository, you might find that your LDAP user registry is not working correctly. You can update the LDAP user registry and make the necessary changes. For example, you can change your LDAP Bind password.

In a stand-alone server environment, you can complete the following task when the servers are either stopped or started. In a clustered environment, start the deployment manager and node agent. Then, verify that they are able to synchronize.

**Note:** The update federated LDAP user registry task does not modify the following attributes:

-   Administrative users
-   Entity types
-   LDAP entity types
-   LDAP group membership attributes
-   LDAP group configuration
-   LDAP context pool

There are separate tasks to update these attributes.

1.  Go to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties directory.

2.  Open the wkplc.properties file with a text editor.

3.  Enter the following parameters in the wkplc.properties file under Federated LDAP repository heading:

    **Note:** Go to the properties file for specific information about the parameters.

    -   federated.ldap.id
    -   federated.ldap.host
    -   federated.ldap.baseDN
    -   federated.ldap.ldapServerType
    -   federated.ldap.port
    -   federated.ldap.bindDN
    -   federated.ldap.bindPassword
4.  Save your changes to the wkplc.properties file.

5.  Open a command prompt.

6.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

7.  Run the following task to validate your LDAP server settings:

    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh validate-federated-ldap -DWasPassword=password
    -   IBM® i: ConfigEngine.sh validate-federated-ldap -DWasPassword=password
    -   Windows™: ConfigEngine.bat validate-federated-ldap -DWasPassword=password
    -   z/OS®: ./ConfigEngine.sh validate-federated-ldap -DWasPassword=password
    **Note:** In an environment that is configured with an LDAP with SSL, you are prompted to add a signer to the truststore. The prompt is Add signer to the truststore now?. If you do, press **y** and then **Enter**.

8.  Run the following task to update the LDAP user registry in the default federated repository:

    -   AIX HP-UX Linux Solaris: ./ConfigEngine.sh wp-update-federated-ldap -DWasPassword=password
    -   IBM i: ConfigEngine.sh wp-update-federated-ldap -DWasPassword=password
    -   Windows: ConfigEngine.bat wp-update-federated-ldap -DWasPassword=password
    -   z/OS: ./ConfigEngine.sh wp-update-federated-ldap -DWasPassword=password
    **Note:** You cannot change the host name of an existing LDAP repository definition when you run this task. If you want to change the host name for an existing LDAP repository, you must delete the existing repository and run the wp-create-ldap task to create a new repository.

9.  Stop and restart the appropriate servers to propagate the changes. For instructions, go to [Starting and stopping servers, deployment managers, and node agents](../admin-system/stopstart.md).



