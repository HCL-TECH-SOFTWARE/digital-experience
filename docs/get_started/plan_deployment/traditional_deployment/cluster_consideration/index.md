# Cluster considerations

Multiple portal servers can be clustered with IBM WebSphere Application Server Network Deployment.

HCL Digital Experience comes standard with WebSphere® Application Server Network Deployment. The Server Network Deployment element is a distribution of IBM® WebSphere Application Server that provides a Deployment Manager server type for centrally managing and clustering a series of servers. A clustered series of portal servers means that all portal instances share configuration, including database, applications, portlets, and site design. The cluster provides a domain against which most administrative actions are completed once and synchronized with each server in the cluster. This action both simplifies administration and ensures that all cluster members are configured and behave identically.

A server cluster also provides a shared domain in which session and cache data can be replicated and kept consistent on all members of the cluster. The cluster also provides an application synchronization mechanism that ensures consistent application management (start, stop, updates, and so on) in the cluster.

WebSphere Application Server provides an HTTP Server plug-in that can balance user traffic across all members of the cluster. And a feature called "session affinity" ensures that a user remains bound to a specific cluster instance during their session to improve efficiency and performance. Additionally, in the event a cluster member is down the workload management features of the plug-in recognizes that the instance is no longer available and routes traffic around it.

There are two types of clusters: vertical and horizontal clusters. Most large-scale deployments are mixtures of both cluster types.

It is also possible to deploy multiple portal clusters to improve availability, failover, and disaster recovery.

For best results, review the cluster guidelines and limitations topics for more information about what is involved in setting up a cluster.

!!!restriction
    The `serverName` parameter is hardcoded to HCL Portal. The `serverName` parameter cannot be changed in a stand-alone environment. If you do change it, the `ConfigEngine` scripts do not work. For a clustered environment, see [Virtual Member Manager integration](../user_registry_consideration/plan_vmm_int.md) for options on replacing the HCL Portal JVM.

-   **[Guidelines for setting up a cluster](cluster_guidelines.md)**  
When you set up an HCL Portal cluster, you must consider all planning that is required for the WebSphere Application Server nodes.
-   **[Limitations for setting up a cluster](cluster_limitations.md)**  
Certain limitations apply when you set up an HCL Portal cluster.
-   **[HTTP session failover](clus_plan_http_failover.md)**  
View the global settings portlet to verify which server is handling user requests for a session.
-   **[Security options](plan_clussec.md)**  
Security is enabled by default for the WebSphere Application Server deployment manager.
-   **[Security scenarios](securityscenarios.md)**  
Setting up a clustered environment requires that you consider the following two security scenarios.
-  **[Using external security managers in a cluster](clus_plan_esm.md)** Complete the configuration for an external security manager after you have completed all other setup tasks.
-   **[Planning for multiple clusters](../cluster_consideration/multiple_cluster/index.md)**  
Multiple clusters are sets of servers that are managed together in a single administrative domain \(or cell\) and participate in workload management.
-   **[Dynamic clusters](plan_xdclus.md)**  
You can create a dynamic cluster to run HCL Portal.
-   **[Cluster maintenance](clus_maint.md)**  
Maintaining an HCL Portal in a cluster typically means applying corrective services (fix packs and interim fixes) or updating the software release level on each node in the cluster.

## HCLSoftware U learning materials

For an introduction and a demo on DX deployment, go to [Deployment for Beginners](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D1479){target="_blank"}. Several deployment options are provided in the course. 

To learn how to do a traditional installation, go to 
In [Deployment for Intermediate Users](https://hclsoftwareu.hcltechsw.com/component/axs/?view=sso_config&id=3&forward=https%3A%2F%2Fhclsoftwareu.hcltechsw.com%2Fcourses%2Flesson%2F%3Fid%3D3086){target="_blank"} In this course, you will learn more about additional installation tasks that applies to both container-based and traditional deployments using the Configuration Wizard, DXClient, ConfigEngine, and more. You can also try it out using the [HDX-ADM-200 Deployment Lab](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Deployment_Lab.pdf){target="_blank"} and corresponding [HDX-ADM-200 Deployment Lab Resources](https://hclsoftwareu.hcltechsw.com/images/Lc4sMQCcN5uxXmL13gSlsxClNTU3Mjc3NTc4MTc2/DS_Academy/DX/Administrator/HDX-ADM-200_Deployment_Lab_Resources.zip){target="_blank"}
