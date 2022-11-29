# Creating the entity type

If an entity type exists within HCL Digital Experience but not within your LDAP user registry, create the entity type within your LDAP user registry. Then, add the relative distinguished name \(RDN\) to the entity type to map it between HCL Portal and your LDAP user registry.

In a stand-alone server environment, you can complete the following task when the servers are either stopped or started. In a clustered environment, start the deployment manager and node agent. Then, verify that they are able to synchronize.

1.  Open a UNIX System Services \(z/OS UNIX System Services\) command prompt.

    **Note:** If you are instructed to open a properties file, they are ASCII files. Open them with the appropriate tool.

2.  Open a command prompt.

3.  Change to the [wp\_profile\_root](/digital-experience/deployment/manage/wpsdirstr#wp_profile_root)/ConfigEngine directory.

4.  Run the following task to list the names and types of configured repositories:

    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh wp-query-repository -DWasPassword=password
    -   IBM® i: ConfigEngine.sh wp-query-repository -DWasPassword=password
    -   Windows™: ConfigEngine.bat wp-query-repository -DWasPassword=password
    -   z/OS®: ./ConfigEngine.sh wp-query-repository -DWasPassword=password
5.  Go to the [wp\_profile\_root](/digital-experience/deployment/manage/wpsdirstr#wp_profile_root)/ConfigEngine/properties directory.

6.  Open the wkplc.properties file with a text editor.

7.  Enter the following parameters under the VMM LDAP entity type configuration heading:

    **Note:** Go to the properties file for specific information about the parameters.

    -   et.ldap.id
    -   et.entityTypeName
    -   et.objectClass
    -   et.searchFilter
    -   et.objectClassesForCreate
    -   et.searchBases
8.  Save your changes to the wkplc.properties file.

9.  Run the following task to update a realm configuration:

    -   AIX HP-UX Linux Solaris: ./ConfigEngine.sh wp-update-realm -DWasPassword=password
    -   IBM i: ConfigEngine.sh wp-update-realm -DWasPassword=password
    -   Windows: ConfigEngine.bat wp-update-realm -DWasPassword=password
    -   z/OS: ./ConfigEngine.sh wp-update-realm -DWasPassword=password
10. Stop and restart the appropriate servers to propagate the changes. For instructions, go to [Starting and stopping servers, deployment managers, and node agents](/digital-experience/deployment/manage/stopstart.md).

11. Open the wkplc.properties file.

12. Enter a value for the following parameters under the VMM LDAP entity type configuration heading:

    -   et.ldap.id
    -   et.entityTypeName
    -   et.objectClass
    -   et.searchFilter
    -   et.objectClassesForCreate
    -   et.searchBases
    -   et.rdnName
13. Save your changes to the wkplc.properties file.

14. Run the following task to add an LDAP entity type with a relative distinguished name \(DN\):

    -   AIX HP-UX Linux Solaris: ./ConfigEngine.sh wp-add-ldap-entitytype-rdn -DWasPassword=password
    -   IBM i: ConfigEngine.sh wp-add-ldap-entitytype-rdn -DWasPassword=password
    -   Windows: ConfigEngine.bat wp-add-ldap-entitytype-rdn -DWasPassword=password
    -   z/OS: ./ConfigEngine.sh wp-add-ldap-entitytype-rdn -DWasPassword=password
15. Stop and restart the appropriate servers to propagate the changes.



