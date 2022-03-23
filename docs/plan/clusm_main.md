# Planning for multiple clusters 

Multiple clusters are sets of servers that are managed together within a single administrative domain \(or cell\), and participate in workload management.

IBM® WebSphere® Application Server Network Deployment can manage many application servers and application server clusters within a single administrative domain, or cell. The single cell has the following advantages:

-   A single administration user interface \(WebSphere Integrated Solutions Console\)
-   A single administrative scripting client \(wsadmin\)
-   Shared resources at the cell, node, or server scope
-   Replication domains for sharing application data, state information, and caches
-   Workload management at the web server level provides a single-server identity for all applications hosted across the cell. It enables ease of collaboration between applications while it builds a rich user application experience

An administrator's goal is to manage as many HCL Portal and portal-based products within the same managed cell as possible. It takes advantage of the administrative and runtime features.

HCL Portal can federate multiple, independently configured portals into the same cell. While there are limitations to this support, it allows multiple clusters to be managed together. One portal might be providing different applications or services than another portal. With a common server identity, these services and applications can integrate seamlessly at the browser through the latest in web 2.0 technology. For example, it uses Ajax and REST services.

## How multiple clusters work in a single cell

It is important to understand that a cell's configuration has the notion of scope. The scope controls the visibility of that resource to other resources and application server instances. An example of a resource might be a data source definition, or a WebSphere variable definition. Scopes are typically defined as being one of the following options:

-   **Cell**

    All resources that are defined in this scope are visible to all other resources defined in the cell. Therefore, they are configured as globally available.

-   **Node**

    A cell has one or more nodes, and each node is named and matches with some WebSphere® Application Server profile on some physical server. All resources that are defined at this scope are visible only to other resources defined in this same node, including any server definitions.

-   **Server**

    A node has one or more server definitions. All resources that are defined at this scope are visible only to that server. No other server or node can use these resources.

-   **Cluster**

    A resource that is defined at a cluster scope is visible to all cluster members, or server instances, in this cluster. However, it is not visible to any other servers in the same nodes.


![The diagram depicts the concept of scope. ](../images/clusm_singlecell.jpg)

**Note:** Resources that are defined within a circle, can be seen by all other resources and scopes that are defined within that circle.

Within this concept of scope, an important point is that all enterprise applications are cell-scoped. In other words, there can be only one enterprise application with a given name in the cell. If multiple servers and clusters, or multiple clusters require the use of that enterprise application, they must share it.

Typically, when you install an enterprise application that is shared across multiple clusters, the administrator installs the enterprise application archive into the cell's Deployment Manager. Then, it maps the application to the target clusters where it runs. HCL Portal installs several enterprise applications as part of its basic configuration and before any cluster is defined. Special steps must be followed to ensure that these infrastructure applications are appropriately shared when multiple clusters are defined within the same cell. And by extension, since they are infrastructure applications, all HCL Portal clusters must be at the same version.

Since portlets are enterprise applications of a special type, it is possible, but not always appropriate, to share portlets across multiple clusters. Many portlets \(for example HCL Portal administration\) are considered part of the infrastructure, and as a result can be shared across multiple clusters. Most user application portlets are specific to certain clusters and are installed as such.

Also, the Java Platform, Enterprise Edition security configuration for the cell is shared by all servers and clusters that are managed in the cell. Therefore, each server and cluster must share an underlying user repository.

To summarize at a high level, supporting multiple clusters in the same cell involves:

-   A common security model, including user repositories, for every cluster
-   Some number of common enterprise applications and portlets that must be made common as part of the federation and clustering process
-   Installing portlets into certain clusters, or across clusters, as appropriate
-   Understanding how to tell if enterprise applications are shared between clusters
-   Defining other resources at the appropriate scope, depending on the usage goals

## Limitations

-   **All portal clusters must be at the same maintenance levels**

    HCL Portal is made up of several enterprise applications. These applications are tightly coupled to the underlying services and infrastructure. All portal-based clusters in the same cell must be at the same service level.

-   **IBM® Process Server considerations**

    When multiple clusters need access to a common Process Server, centralize the server within its own cluster. Use HCL Portal with the client installation of the Process Server to allow remote access to the central process server cluster.


-   **[Database sharing between multiple clusters ](../plan/clusm_dbshare.md)**  
You might want to support multiple identically configured HCL Portal installations in the same cell for ease of maintenance or failover.

**Parent topic:**[Cluster considerations ](../plan/plan_clus_ovr.md)

