# Administering shared configuration farm installations 

In a shared configuration farm installation, there is one HCL Digital Experience installation whose file system serves as the configuration for the entire farm. This farm is referred to here as the Farm Master. This shared configuration means that every farm instance shares the exact same databases and IBM WebSphere Application Server configuration profile. If you are using a shared file system, this installation should have write access to the file system, while all other farm instances that share this file system should have read-only access. All administrative actions can only be performed against the Farm Master.

It is recommended that the master instance either not be a part of regular production traffic, or if it is, it be temporarily removed from production traffic when the update is made, so that the update can be tested before the other servers are affected. After a change is made to the master, depending on the nature of the change, it may take effect immediately across the entire farm or require that the farm instances be restarted.

Changes made to HCL Portal's release configuration, such as new pages, page layout changes, access control changes, or other updates made using the XMLAccess tool that do not involve updates to portlet applications will take effect immediately since all farm instances share the same release database.

Changes made to the WebSphere® Application Server configuration profile include JVM tuning changes and JDBC datasource changes. The changes also include updates to Java resources, which include updated JAR files in the file system. These changes do not take effect until the file system changes are replicated to each server in the farm. After the replication, restart the servers. If you are using a cloned file system, your automation replicates the changes to the other servers. If you are using a shared file system, file system changes are available to servers immediately after a restart.

Likewise, updates to enterprise application or portlet EAR and WAR files will not take effect until the file system changes are replicated and one of the following occurs:

-   The application is restarted on each server
-   Each server in the farm is restarted

To restart an application, you can either access the WebSphere Integrated Solutions Console on each server and restart the application, or you can use the wsadmin scripting command to restart the application. To restart the server, use the stop\_HCL Portal and HCL Web Content Manager and start\_HCL Portal and HCL Web Content Manager scripts profiled in the [wp\_profile\_root](../reference/wpsdirstr.md#wp_profile_root)/PortalServer/bin directory.

If the administrative action is extensive, updating several WebSphere Application Server and HCL Portal assets at once, you may want to follow the instructions under the Maintaining a portal farm section, which walks through an update procedure involving a second filesystem and database, ensuring that the updates are isolated from the original configuration and each server can be switched to the updated configuration, tested, and returned to production traffic without affecting other farm instances in any way. This option has the added benefit of providing a fallback configuration if the changes do not work as expected.

**Parent topic:**[Administering a portal farm ](../install/admin_farm.md)

