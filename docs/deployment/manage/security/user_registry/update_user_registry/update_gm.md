# Updating a group member

After you create your LDAP user registry, you might find that your group member is not correct. You can update the group member in your LDAP user registry configuration.

In a stand-alone server environment, you can complete the following task when the servers are either stopped or started. In a clustered environment, start the deployment manager and node agent. Then, verify that they are able to synchronize.

1.  Open a command prompt.

2.  Change to the wp_profile_root/ConfigEngine directory.

3.  Run the following task to list the names and types of configured repositories:

    -   AIX® and Linux™: `./ConfigEngine.sh wp-query-repository -DWasPassword=password`
    -   Windows™: `ConfigEngine.bat wp-query-repository -DWasPassword=password`

4.  Go to the wp_profile_root/ConfigEngine/properties directory.

5.  Open the wkplc.properties file with a text editor.

6.  Enter a value for the following parameters under the VMM LDAP group member attribute configuration heading:

    !!!note
        Go to the properties file for specific information about the parameters.

    -   gm.ldap.id
    -   gm.groupMemberName
    -   gm.objectClass
    -   gm.scope
    -   gm.dummyMember

7.  Save your changes to the wkplc.properties file.

8.  Run the following task to update the group member information for your LDAP user registry or to create the group member if it does not exist:

    -   AIX and Linux: `./ConfigEngine.sh wp-update-ldap-groupmember -DWasPassword=password`
    -   Windows: `ConfigEngine.bat wp-update-ldap-groupmember -DWasPassword=password`

9.  Stop and restart the appropriate servers to propagate the changes. For instructions, go to [Starting and stopping servers, deployment managers, and node agents](../../../../manage/stopstart.md).



