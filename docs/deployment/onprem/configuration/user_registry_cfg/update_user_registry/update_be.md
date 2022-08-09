# Updating the base entry

After you create your base entries, you can update the distinguished name \(DN\) in the repository that uniquely identifies the base entry name. This task applies only to federated repository configurations. This task does not update the base DN entry if you use a stand-alone repository.

In a stand-alone server environment, you can complete the following task when the servers are either stopped or started. In a clustered environment, start the deployment manager and node agent. Then, verify that they are able to synchronize.

1.  Go to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties directory.

2.  Open the wkplc.properties file with a text editor.

3.  Enter a value for the following parameters under the VMM repository base entry configuration heading:

    **Note:** Go to the properties file for specific information about the parameters.

    -   id
    -   baseDN
    -   nameInRepository
4.  Save your changes to the wkplc.properties file.

5.  Open a command prompt.

6.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

7.  Run the following task to delete the old entity types before you add the RDN attribute as the only entry in the RDN list:

    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh wp-update-base-entry -DWasPassword=password
    -   IBM® i: ConfigEngine.sh wp-update-base-entry -DWasPassword=password
    -   Windows™: ConfigEngine.bat wp-update-base-entry -DWasPassword=password
    -   z/OS®: ./ConfigEngine.sh wp-update-base-entry -DWasPassword=password
8.  Stop and restart the appropriate servers to propagate the changes. For instructions, go to [Starting and stopping servers, deployment managers, and node agents](../admin-system/stopstart.md).


**Parent topic:**[Updating your user registry](../security/update_ureg.md)

