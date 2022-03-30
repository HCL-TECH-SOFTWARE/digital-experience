# Deleting the LDAP entity type 

If you changed your LDAP user registry and no longer require an entity type, you can delete it.

In a stand-alone server environment, you can complete the following task when the servers are either stopped or started. In a clustered environment, start the deployment manager and node agent. Then, verify that they are able to synchronize.

1.  Go to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties directory.

2.  Open the wkplc.properties file with a text editor.

3.  Enter the following parameters under the VMM LDAP entity type configuration heading:

    **Note:** Go to the properties file for specific information about the parameters.

    -   et.ldap.id
    -   et.entityTypeName
    -   et.objectClass
    -   et.searchFilter
    -   et.objectClassesForCreate
    -   et.searchBases
4.  Save your changes to the wkplc.properties file.

5.  Open a command prompt.

6.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

7.  Run the following task to delete an LDAP entity type:

    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh wp-delete-ldap-entitytype -DWasPassword=password
    -   IBM® i: ConfigEngine.sh wp-delete-ldap-entitytype -DWasPassword=password
    -   Windows™: ConfigEngine.bat wp-delete-ldap-entitytype -DWasPassword=password
    -   z/OS®: ./ConfigEngine.sh wp-delete-ldap-entitytype -DWasPassword=password
8.  Stop and restart the appropriate servers to propagate the changes. For instructions, go to [Starting and stopping servers, deployment managers, and node agents](../admin-system/stopstart.md).


**Parent topic:**[Deleting your user registry configurations ](../security/delete_ureg.md)

