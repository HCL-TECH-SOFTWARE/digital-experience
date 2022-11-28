# Updating the group membership configuration

The initial federated repositories setup might not include the advanced set up for the group membership attribute. You can configure the group membership attribute after the initial setup. Specify the properties in the wkplc.properties file and then run the wp-create-ldap-groupconfig task manually.

In a stand-alone server environment, you can complete the following task when the servers are either stopped or started. In a clustered environment, start the deployment manager and node agent. Then, verify that they are able to synchronize.

1.  Go to the [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties directory.

2.  Open the wkplc.properties file with a text editor.

3.  Update the following parameters in the wkplc.properties file under the VMM LDAP group member config heading:

    !!!note
        Go to the properties file for specific information about the parameters.

    -   gc.ldap.id
    -   gc.name
    -   gc.updateGroupMembership
    -   gc.scope
    
4.  Open a command prompt.

5.  Change to the [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

6.  Run the following task to update the group membership for the LDAP user registry:

    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh wp-create-ldap-groupconfig -DWasPassword=password
    -   IBM® i: ConfigEngine.sh wp-create-ldap-groupconfig -DWasPassword=password
    -   Windows™: ConfigEngine.bat wp-create-ldap-groupconfig -DWasPassword=password
    -   z/OS®: ./ConfigEngine.sh wp-create-ldap-groupconfig -DWasPassword=password

7.  Stop and restart the appropriate servers to propagate the changes. For instructions, go to [Starting and stopping servers, deployment managers, and node agents](../../../../../stopstart.md).



