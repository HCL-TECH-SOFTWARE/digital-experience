# Deleting the repository

If you no longer require the use of a repository within your federated repository, you can delete it from your configuration.

In a stand-alone server environment, you can complete the following task when the servers are either stopped or started. In a clustered environment, start the deployment manager and node agent. Then, verify that they are able to synchronize.

1.  Open a command prompt.

2.  Change to the [wp\_profile\_root](../../../../../../../guide_me//wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

3.  Run the following task to list the names and types of configured repositories:

    -   AIX® HP-UX Linux™ Solaris z/OS®: ./ConfigEngine.sh wp-query-repository -DWasPassword=password
    -   IBM® i: ConfigEngine.sh wp-query-repository -DWasPassword=password
    -   Windows™: ConfigEngine.bat wp-query-repository -DWasPassword=password

4.  Go to the [wp\_profile\_root](../../../../../../../guide_me//wpsdirstr.md#wp_profile_root)/ConfigEngine/properties directory.

5.  Open the wkplc.properties file with a text editor.

6.  Enter the following parameters in the wkplc.properties file under VMM Delete federated repository heading:

    !!!note
        Go to the properties file for specific information about the parameters.

    -   federated.delete.baseentry
    -   federated.delete.id

7.  Save your changes to the wkplc.properties file.

8.  Run the following task to delete the required repository:

    -   AIX HP-UX Linux Solaris z/OS: ./ConfigEngine.sh wp-delete-repository -DWasPassword=password
    -   IBM i: ConfigEngine.sh wp-delete-repository -DWasPassword=password
    -   Windows: ConfigEngine.bat wp-delete-repository -DWasPassword=password

9.  Stop and restart the appropriate servers to propagate the changes. For instructions, go to [Starting and stopping servers, deployment managers, and node agents](../../../../../stopstart.md).

10. If the deleted repository contains the base entry where new users and groups are stored, run the update entity types task. Use this task to select a new base entry to store the new users and groups.

