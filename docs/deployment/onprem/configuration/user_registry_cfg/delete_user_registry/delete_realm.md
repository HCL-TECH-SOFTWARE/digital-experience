# Deleting the realm

If you changed your HCL Digital Experience and no longer require a realm, you can delete it from your user registry.

In a stand-alone server environment, you can complete the following task when the servers are either stopped or started. In a clustered environment, start the deployment manager and node agent. Then, verify that they are able to synchronize.

1.  Open a command prompt.

2.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

3.  Run the following task to list the names and types of configured repositories:

    -   AIX® HP-UX Linux™ Solaris: ./ConfigEngine.sh wp-delete-realm -DdeleteRealmName=name\_of\_realm -DWasPassword=password
    -   IBM® i: ConfigEngine.sh wp-delete-realm -DdeleteRealmName=name\_of\_realm -DWasPassword=password
    -   Windows™: ConfigEngine.bat wp-delete-realm -DdeleteRealmName=name\_of\_realm -DWasPassword=password
    -   z/OS®: ./ConfigEngine.sh wp-delete-realm -DdeleteRealmName=name\_of\_realm -DWasPassword=password
4.  Stop and restart the appropriate servers to propagate the changes. For instructions, go to [Starting and stopping servers, deployment managers, and node agents](../admin-system/stopstart.md).


**Parent topic:**[Deleting your user registry configurations](../security/delete_ureg.md)

