# Updating the context pool configuration

After you configure your LDAP user registry, you can adjust the number of context instances that the context pool concurrently maintains to improve performance.

In a stand-alone server environment, you can complete the following task when the servers are either stopped or started. In a clustered environment, start the deployment manager and node agent. Then, verify that they are able to synchronize.

1.  Go to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine/properties directory.

2.  Open the wkplc.properties file with a text editor.

3.  Update the following parameters under the VMM LDAP context pool heading:

    **Note:** Go to the properties file for specific information about the parameters.

    -   cp.ldap.id
    -   cp.maxPoolSize
    -   cp.initPoolSize
    -   cp.prefPoolSize
    -   cp.poolTimeout
    -   cp.poolWaitTime
4.  Save your changes to the wkplc.properties file.

5.  Open a command prompt.

6.  Change to the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/ConfigEngine directory.

7.  Run the following task to update the context pool configuration for the LDAP user registry:

    -   AIX® HP-UX Linux™ Solaris z/OS®: ./ConfigEngine.sh wp-update-ldap-contextpool -DWasPassword=password
    -   IBM® i: ConfigEngine.sh wp-update-ldap-contextpool -DWasPassword=password
    -   Windows™: ConfigEngine.bat wp-update-ldap-contextpool -DWasPassword=password
8.  Stop and restart the appropriate servers to propagate the changes. For instructions, go to [Starting and stopping servers, deployment managers, and node agents](../admin-system/stopstart.md).



