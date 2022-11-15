# Deleting the LDAP group member

If you changed your LDAP user registry and no longer require the group member, you can delete it from the LDAP user registry.

In a stand-alone server environment, you can complete the following task when the servers are either stopped or started. In a clustered environment, start the deployment manager and node agent. Then, verify that they are able to synchronize.

1.  Go to the wp_profile_root/ConfigEngine/properties directory.

2.  Open the wkplc.properties file with a text editor.

3.  Enter a value for the following parameters under the VMM LDAP group member attribute configuration heading:

    !!!note
        Go to the properties file for specific information about the parameters.

    -   gm.ldap.id
    -   gm.groupMemberName

4.  Save your changes to the wkplc.properties file.

5.  Open a command prompt.

6.  Change to the wp_profile_root/ConfigEngine directory.

7.  Run the following task to delete the group member information for your LDAP user registry:

    -   AIX® and Linux™: `./ConfigEngine.sh wp-delete-ldap-groupmember -DWasPassword=password`
    -   Windows™: `ConfigEngine.bat wp-delete-ldap-groupmember -DWasPassword=password`

8.  Stop and restart the appropriate servers to propagate the changes. For instructions, go to [Starting and stopping servers, deployment managers, and node agents](../../../../manage/stopstart.md).



