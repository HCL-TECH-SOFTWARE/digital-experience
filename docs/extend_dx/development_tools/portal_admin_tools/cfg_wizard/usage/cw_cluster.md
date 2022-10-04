---
id: cw_cluster
title: Set up a cluster
---

# Configuration Wizard: Set up a cluster


You created a stand-alone, demonstration environment with IBM® Installation Manager. Now you are ready to set up a production-ready, clustered environment. To begin, you can use the Database Transfer option to transfer your database from the default database, Apache Derby, to a more robust database. Then, you can create your deployment manager profile, create a static or dynamic cluster, change from the built-in file-based repository to a federated repository, modify your site URLs for search engine optimization benefits,and add more nodes as needed.

## Cluster Topology

Clusters enable you to scale your HCL Portal configuration. Clusters also enable enterprise applications to be highly available because requests are automatically routed to the running servers in the event of a failure. There are numerous cluster configuration, such as horizontal, vertical, multiple, and dynamic.

Using a horizontal cluster is beneficial for many reasons:

-   Workload management. A cluster distributes traffic across multiple servers. If one server goes down, traffic is routed to another node in the cluster. A node typically represents a single physical server in a managed cell.
-   Improved security. You can place the web server outside the firewall to direct traffic to the cluster.
-   Balanced traffic. The web server plug-in balances user traffic across all members of the cluster.
-   Identical behavior. Configuration is shared across the portal instances, including database, applications, portlets, and site design.
-   Simplified administration. Changes are synchronized across the cluster, such as updates, stopping and starting the servers, session data, cache data, and more.

A cluster topology is useful for the following type of user:

A company or organization that requires failover, centrally managed servers, and workload management.

!!!note
    You can create other types of clusters. For example, to create vertical or multiple clusters, use the roadmaps in the product documentation for instructions on the cluster that you want to create.


???+ info "Related information" 
    -   [Configuration Wizard](../../../portal_admin_tools/cfg_wizard/configuration/index.md)

