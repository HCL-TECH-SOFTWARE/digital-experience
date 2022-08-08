# Maintaining multiple profiles

If you created additional HCL Digital Experience profiles with HCL Portal, the profiles now share the product installed files \(binary files\). Therefore, any updates must be coordinated with the users of the various profiles because these updates can affect the runtime behavior of each profile. You must stop all servers across all profiles that share the set of binary files while the updates are occurring. Similarly, if the product binary files are shared across several systems that support their own portal profiles, all HCL Digital Experience instances across these servers must be stopped during the update process. It is also probable that update to each profile is needed, especially in the case of product maintenance application. Updates to the profiles might require that application server instance is restarted in those profiles. In this case, user traffic can be prevented to these instances during the maintenance window by temporarily removing the target servers from any web servers or load balancer.

AIX®, Linux™, Solaris, Windows™:- When additional HCL Portal profiles are based on shared product binary files across multiple servers, it is required that the shared file system that contains the product binary files are shared at the same location on each server. The location must reflect the original installation location so that the installation location is consistent across each profile configuration.

For example,

-   In AIX, Linux, Solaris if HCL Portal is installed under the /opt/IBM/WebSphere directory, then that directory must be shared with other systems as /opt/IBM/WebSphere.
-   In Windows if HCL Portal is installed under the E:\\IBM\\WebSphere directory, then that directory must be shared as the E: drive on remote servers as well.

Complete the following steps to maintain additional HCL Portal profiles.

1.  Modify the web servers or load balancer that routes requests to the application servers in these profiles to temporarily quiesce traffic to these servers, if applicable.

2.  Run the following tasks to stop all application server instances of each profile:

    -   AIX, Linux, Solaris:- `./stopServer.sh HCL Portal and HCL Web Content Manager -username admin\_userid -password admin\_password` from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/bin directory.
    -   IBM® i:- `stopServer HCL Portal and HCL Web Content Manager -usernameadmin\_userid -password admin\_password` from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/bin directory.
    -   Windows:- `stopServer.bat HCL Portal and HCL Web Content Manager -username admin\_userid -password admin\_password` from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\bin directory.
3.  If the profiles are federated to a cell, run the following task:

    -   AIX, Linux, Solaris:- `./stopNode.sh -username admin\_userid -password admin\_password` from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/bin directory of each node agent.
    -   IBM i:- `stopNode -username admin\_userid -password admin\_password` from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/bin directory of each node agent.
    -   Windows:- `stopNode.bat -username admin\_userid -password admin\_password` from the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)\\bin directory.
4.  Apply the changes to the product binary files, such as product maintenance for WebSphere® Application Server or HCL Portal.

    Applying HCL Portal maintenance automatically updates the initial profile created by product installation \(wp\_profile\). When product binary files are shared across multiple machines, it is assumed that the default installed profile, wp\_profile, is present on the source server from which these product binary files are shared. This sharing allows wp\_profile to be updated when the product binary files are updated. Follow the instructions included with the product maintenance and the product update installer for updating the product binary files and the default wp\_profile profile. Customer supplied binary files, such as custom JAR files, properties files, or other file system updates, must be added to the binary files now as well.

5.  Apply changes to each profile.

    Depending on the change that is needed, you might have to start the application server instances. If HCL Portal maintenance is applied to the profile, instructions are provided with the fix on how to update just a profile without reapplying the updates to the product binary files. Customer supplied updates to enterprise applications, portlets, and other J2EE resource configurations must be applied now as well.

6.  After you update each profile, verify the change. Then start any stopped servers and, if applicable, the node agent, and then return user traffic to the application server instances.


**Parent topic:**[Supporting multiple profiles](../install/sup_mult_prof.md)

