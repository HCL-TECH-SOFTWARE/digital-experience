# Managing your cluster

After installing and configuring your clustered environment, you will need to manage the different parts of your cluster to ensure a highly available production environment.

Perform the following tasks to manage your cluster:

**Tip:** After creating your cluster, scheduled tasks that no longer have the default setting need to be reset. See the **task** section under **Types of portal resources** in the *XML configuration reference* topic. See the *XML configuration references* link at the end of the page.

-   **[Determining application sharing between clusters](../admin-system/clusm_app_share.md)**  
If applications are shared between clusters, there are maintenance implications. An application definition is cell-scoped, meaning that a single application can be used by any server running on any node within the cell. The relationship between an enterprise application and the server where it runs is called a mapping. For a cluster to run an instance of an application, the application must be mapped to that cluster. An application that is shared between multiple clusters has multiple mappings.
-   **[Managing portlets in your cluster](../admin-system/manage_portlets.md)**  
Because all HCL Portal servers in the cluster share database, any node can be used to manage portlets. Cluster nodes can run when you are managing portlets. When you deploy a portlet, HCL Portal stores the portlet configuration data in the HCL Portal database. Then, HCL Portal forwards the portlet application's web module and associated configuration to the deployment manager. The deployment manager is responsible for pushing the web module to each node in the cluster.
-   **[Managing replication in your cluster](../admin-system/manage_replication.md)**  
IBM WebSphere Application Server provides a replication service. This service transfers data, objects, or events among application servers. Data replication can be used to make data for session manager, dynamic cache, and stateful session beans available across many application servers in a cluster.
-   **[Managing Portal Scripting Interface in your cluster](../admin-system/manage_script.md)**  
The Portal Scripting Interface enables the creation of administrative tasks that administrators can run from a command line. You must prepare your cluster to manage Portal Scripting Interface.
-   **[Managing Single sign-on settings in your cluster](../admin-system/manage_sso.md)**  
If you configured the nodes in your cluster to use single sign-on \(SSO\), you can change the SSO settings for the cluster.
-   **[Updating Personalization properties in a cluster](../admin-system/clus_pznprop.md)**  
HCL Digital Experience provides two property files that you can modify to customize the Portal Personalization feature. These files are not managed by the deployment manager, so if you make any changes to these files on a node in the cluster, those changes are not transferred to other nodes when you perform a synchronization of the cluster members.


**Related information**  


[XML configuration reference](../admin-system/adxmlref.md)

