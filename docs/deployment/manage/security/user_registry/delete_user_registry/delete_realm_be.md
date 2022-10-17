# Deleting the realm base entry

If you changed your realm and no longer require the base entry for that realm, you can delete it.

In a stand-alone server environment, you can complete the following task when the servers are either stopped or started. In a clustered environment, start the deployment manager and node agent. Then, verify that they are able to synchronize.

!!!important
    If you delete a base entry from the default realm, then users who belong to that base entry can no longer log in to HCL Digital Experience. Therefore, the default realm must contain all the base entries for all active realms.

1.  Open a command prompt.

2.  Change to the wp_profile_root/ConfigEngine directory.

3.  Run the following task to list the base entries for a specific realm:

    -   AIX® and Linux™: `./ConfigEngine.sh wp-query-realm-baseentry -DrealmName=name_of_realm -DWasPassword=password`
    -   Windows™: `ConfigEngine.bat wp-query-realm-baseentry -DrealmName=name_of_realm -DWasPassword=password`

4.  Go to the wp_profile_root/ConfigEngine/properties directory.

5.  Open the wkplc.properties file with a text editor.

6.  Enter a value for the following parameters under the VMM realm configuration heading:

    !!!note
        Go to the properties file for specific information about the parameters.

    -   realmName
    -   deleteBaseEntry
7.  Save your changes to the wkplc.properties file.

8.  Run the following task to delete a base entry from a realm configuration:

    -   AIX and Linux: `./ConfigEngine.sh wp-delete-realm-baseentry -DWasPassword=password`
    -   Windows: `ConfigEngine.bat wp-delete-realm-baseentry -DWasPassword=password`

9.  Stop and restart the appropriate servers to propagate the changes. For instructions, go to [Starting and stopping servers, deployment managers, and node agents](../../../../manage/stopstart.md).



