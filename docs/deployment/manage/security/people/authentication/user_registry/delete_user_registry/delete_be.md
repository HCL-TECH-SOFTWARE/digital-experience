# Deleting the base entry

If you changed your LDAP user registry and no longer require a base entry, you can delete it.

In a stand-alone server environment, you can complete the following task when the servers are either stopped or started. In a clustered environment, start the deployment manager and node agent. Then, verify that they are able to synchronize.

**Important:** If you delete a base entry from the default realm, then users who belong to that base entry can no longer log in to HCL Digital Experience. Therefore, the default realm must contain all the base entries for all active realms.

1.  Open a command prompt.

2.  Change to the [wp\_profile\_root](/digital-experience/deployment/manage/wpsdirstr#wp_profile_root)/ConfigEngine directory.

3.  Run the following task to list the base entries for a specific realm:

    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh wp-query-realm-baseentry -DrealmName=name\_of\_realm -DWasPassword=password
    -   IBM® i: ConfigEngine.sh wp-query-realm-baseentry -DrealmName=name\_of\_realm -DWasPassword=password
    -   Windows™: ConfigEngine.bat wp-query-realm-baseentry -DrealmName=name\_of\_realm -DWasPassword=password
    -   z/OS®: ./ConfigEngine.sh wp-query-realm-baseentry -DrealmName=name\_of\_realm -DWasPassword=password
4.  Go to the [wp\_profile\_root](/digital-experience/deployment/manage/wpsdirstr#wp_profile_root)/ConfigEngine/properties directory.

5.  Open the wkplc.properties file with a text editor.

6.  Enter a value for the following parameters under the VMM realm configuration heading:

    **Note:** Go to the properties file for specific information about the parameters.

    -   realmName
    -   addBaseEntry
7.  Save your changes to the wkplc.properties file.

8.  Run the following task to delete a base entry from a realm configuration:

    -   AIX HP-UX Linux Solaris: ./ConfigEngine.sh wp-delete-realm-baseentry -DWasPassword=password
    -   IBM i: ConfigEngine.sh wp-delete-realm-baseentry -DWasPassword=password
    -   Windows: ConfigEngine.bat wp-delete-realm-baseentry -DWasPassword=password
    -   z/OS: ./ConfigEngine.sh wp-delete-realm-baseentry -DWasPassword=password
9.  Stop and restart the appropriate servers to propagate the changes. For instructions, go to [Starting and stopping servers, deployment managers, and node agents](/digital-experience/deployment/manage/stopstart.md).

10. Open the wkplc.properties file.

11. Enter a value for the following parameters under the VMM repository base entry configuration heading:

    -   id
    -   baseDN
    -   nameInRepository
12. Save your changes.

13. Run the following task to delete a base entry from a repository:

    -   AIX HP-UX Linux Solaris: ./ConfigEngine.sh wp-delete-base-entry -DWasPassword=password
    -   IBM i: ConfigEngine.sh wp-delete-base-entry -DWasPassword=password
    -   Windows: ConfigEngine.bat wp-delete-base-entry -DWasPassword=password
    -   z/OS: ./ConfigEngine.sh wp-delete-base-entry -DWasPassword=password
14. Stop and restart the appropriate servers to propagate the changes.



