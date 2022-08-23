# Setting up and maintaining a portal farm

The term "farm" refers to a series of identically configured, stand-alone server instances. The stand-alone servers allow the farm to be increased or decreased without having to worry about complex cluster configurations or inter-server awareness. Server farms offer a simple way to build and maintain a highly scalable, highly available server environment. Creating the farm requires an established content subscriber, two or more installed instances of HCL Digital Experience, and a configured web server for load balancing. The farm documentation covers only the HTTP server plug-in. However, you can use any supported web server.

**Restriction:** There is a known limitation when you use managed pages in a farm environment. If you plan to use managed pages, create a clustered environment.

**Troubleshooting restriction:** If you create a farm client with a read-only file system, you must manually gather logs from the temp directories on the farm members. For a list of extra files that you might want to gather, refer to [Collecting Data: Read First for HCL Portal 8.5 and 9.0](https://support.hcltechsw.com/csm?id=kb_article&sys_id=8223c6a31b881494c48197d58d4bcb59).

-   **[Choosing the type of portal farm to create](../install/choose_portal_farm.md)**  
There are two supported portal farm configurations that you can choose when setting up your portal farm. You can set up a unique installation where each farm has a unique installation or you can set up one instance that is shared between multiple farm instances.
-   **[Setting up the HTTP server plug-in on a portal farm](../install/set_http_farm.md)**  
You can use a Web server to handle load balancing across your portal farm. This documentation is specific to the HTTP server but you can use any supported Web server.
-   **[Administering a portal farm](../install/admin_farm.md)**  
Because a farm is a series of independent server instances and not a cluster, specific procedures need to be followed to deploy updates to the farm that are different than when administering a cluster. Updates include any changes to the system, such as, but not limited to, using or deploying portlets, adding or changing portal pages, changing file system resources, and changing IBM WebSphere Application Server configurations. The procedures differ depending on the type of farm: unique installations or shared installations.
-   **[Maintaining a portal farm](../install/maintain_portal_farm.md)**  
Maintenance can be considered any change to the system, such as the deployment of application updates, platform configuration changes, or the application of corrective service. The mechanism used to apply maintenance to a farm depends on the type of farm deployed: unique installations or shared configuration.


