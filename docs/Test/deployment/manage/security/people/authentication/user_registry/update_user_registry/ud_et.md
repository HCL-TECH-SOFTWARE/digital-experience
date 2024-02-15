# Updating an entity type

After you add your user registry, you can update a single entity type with the value of the default parent. For example, if you delete a repository, you must update the entity type if it points to the deleted repository.

In a stand-alone server environment, you can complete the following task when the servers are either stopped or started. In a clustered environment, start the deployment manager and node agent. Then, verify that they are able to synchronize.

1.  Open a UNIX System Services (z/OS UNIX System Services) command prompt.

    !!!note
        If you are instructed to open a properties file, they are ASCII files. Open them with the appropriate tool.

2.  Go to the [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties directory.

3.  Open the wkplc.properties file with a text editor.

4.  Enter a value for the following parameters under the VMM supported entity types configuration heading:

    !!!note
        Go to the properties file for specific information about the parameters.

    -   entityTypeName
    -   defaultParent
    -   rdnProperties

5.  Save your changes to the wkplc.properties file.

6.  Open a command prompt.

7.  Change to the [wp\_profile\_root](../../../../../../../guide_me/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

8.  Run the following task to delete the old entity types before you add the RDN attribute as the only entry in the RDN list:

    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh wp-set-entitytype -DWasPassword=password
    -   IBM® i: ConfigEngine.sh wp-set-entitytype -DWasPassword=password
    -   Windows™: ConfigEngine.bat wp-set-entitytype -DWasPassword=password
    -   z/OS®: ./ConfigEngine.sh wp-set-entitytype -DWasPassword=password

9.  Run the following task to add an entity type to the existing list:

    -   AIX HP-UX Linux Solaris: ./ConfigEngine.sh wp-update-entitytype -DWasPassword=password
    -   IBM i: ConfigEngine.sh wp-update-entitytype -DWasPassword=password
    -   Windows: ConfigEngine.bat wp-update-entitytype -DWasPassword=password
    -   z/OS: ./ConfigEngine.sh wp-update-entitytype -DWasPassword=password

10. Stop and restart the appropriate servers to propagate the changes. For instructions, go to [Starting and stopping servers, deployment managers, and node agents](../../../../../stopstart.md).



