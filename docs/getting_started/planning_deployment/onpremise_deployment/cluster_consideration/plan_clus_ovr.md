# Cluster considerations

Multiple portal servers can be clustered with IBM WebSphere Application Server Network Deployment.

HCL Digital Experience comes standard with WebSphere® Application Server Network Deployment, a distribution of IBM® WebSphere Application Server that provides a Deployment Manager server type for centrally managing and clustering a series of servers. To cluster a series of portal servers means that all portal instances share configuration, including database, applications, and portlets, and site design. The cluster provides a domain against which most administrative actions are done once and synchronized with each server in the cluster. This action both simplify administration and ensure that all cluster members are configured and behave identically.

A server cluster also provides a shared domain in which session and cache data can be replicated and kept consistent across all members of the cluster. The cluster also provides an application synchronization mechanism that ensures consistent application management \(start, stop, updates, and so on\) across the cluster.

WebSphere Application Server provides an HTTP Server plug-in that can balance user traffic across all members of the cluster. And through a feature called "session affinity", ensure that a user remains bound to a specific cluster instance during their session to improve efficiency and performance. Additionally, in the event a cluster member is down the workload management features of the plug-in recognizes that the instance is no longer available and route traffic around it.

There are two types of clusters: vertical and horizontal clusters. Most large-scale deployments are mixtures of both cluster types.

It is also possible to deploy multiple portal clusters to improve availability, failover, and disaster recovery.

It is recommended that you review the cluster guidelines and limitations topics for more information about what is involved in setting up a cluster.

**Restriction:** The serverName is hardcoded to HCL Portal. The serverName cannot be changed in a stand-alone environment. If you do change it, the ConfigEngine scripts do not work. For a clustered environment, see [Virtual Member Manager integration](plan_vmm_int.html) for options on replacing the HCL Portal JVM.

-   **[Guidelines for setting up a cluster](../plan/cluster_guidelines.md)**  
When you set up a HCL Portal cluster, you must consider any planning that is required for the WebSphere Application Server nodes.
-   **[Limitations for setting up a cluster](../plan/cluster_limitations.md)**  
Certain limitations apply when you set up a HCL Portal cluster.
-   **[HTTP session failover](../plan/clus_plan_http_failover.md)**  
View the global settings portlet to verify which server is handling user requests for a session.
-   **[Setting up an IBM i database in a cluster](../plan/clus_plan_iseries_db.md)**  
To communicate with a database, servers that run IBM i can use either of two JDBC drivers: the IBM Toolbox for Java JDBC driver or the IBM Developer Kit for Java JDBC driver \(also referred to as the native JDBC driver\). Which JDBC driver you must use depends on how you are setting up your clustered environment.
-   **[Security options](../plan/plan_clussec.md)**  
Security is enabled by default for the WebSphere Application Server deployment manager.
-   **[Security scenarios](../plan/securityscenarios.md)**  
Setting up a clustered environment requires that you consider the following two security scenarios.
-   **[Using external security managers in a cluster](../plan/clus_plan_esm.md)**  
Complete any configuration for an external security manager after you have completed all other setup.
-   **[Planning for multiple clusters](../plan/clusm_main.md)**  
Multiple clusters are sets of servers that are managed together within a single administrative domain \(or cell\), and participate in workload management.
-   **[Dynamic clusters](../plan/plan_xdclus.md)**  
You can create a dynamic cluster to run HCL Portal.
-   **[Cluster maintenance](../plan/clus_maint.md)**  
Maintaining HCL Portal in a cluster typically means applying corrective services \(fix packs and interim fixes\) or updating the software release level on each node in the cluster.

**Parent topic:**[Planning to install HCL Digital Experience](../plan/plan_installation.md)

