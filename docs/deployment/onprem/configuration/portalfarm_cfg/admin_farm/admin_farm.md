# Administering a portal farm

Because a farm is a series of independent server instances and not a cluster, specific procedures need to be followed to deploy updates to the farm that are different than when administering a cluster. Updates include any changes to the system, such as, but not limited to, using or deploying portlets, adding or changing portal pages, changing file system resources, and changing IBM WebSphere Application Server configurations. The procedures differ depending on the type of farm: unique installations or shared installations.

Choose the following task depending on the type of portal farm you created:

-   **[Administering unique portal farm installations](../install/admin_farm_unique.md)**  
In a farm of uniquely installed HCL Digital Experience instances, each instance has its own release database while every other database domain is shared, including the JCR. Each unique installation also has its own unique IBM WebSphere Application Server configuration profile and its own WebSphere Integrated Solutions Console. Therefore, application, server configuration, and service updates must be made on each server. It is highly recommended that such updates be automated through configuration scripts that call the appropriate command-line tools for making changes \(for example XMLAccess, wsadmin\). This automation enables the repetition of the exact same change on each server without the possibility of injecting human error.
-   **[Administering shared configuration farm installations](../install/admin_farm_shared.md)**  
In a shared configuration farm installation, there is one HCL Digital Experience installation whose file system serves as the configuration for the entire farm. This farm is referred to here as the Farm Master. This shared configuration means that every farm instance shares the exact same databases and IBM WebSphere Application Server configuration profile. If you are using a shared file system, this installation should have write access to the file system, while all other farm instances that share this file system should have read-only access. All administrative actions can only be performed against the Farm Master.


