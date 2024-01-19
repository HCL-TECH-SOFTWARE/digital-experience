# Cluster maintenance

Maintaining HCL Portal in a cluster typically means applying fix packs and interim fixes or updating the software release level on each node in the cluster.

Fixes are considered "minor" if they don’t update the underlying HCL Portal databases or require version upgrades to supporting software such as databases servers or IBM® WebSphere® Application Server.

Most HCL Digital Experience service packs are not considered minor and might require the use of a separate installation procedure to ensure 24x7 availability.

Instructions for applying maintenance service to an HCL Portal cluster are provided with the service package. Before you apply maintenance, analyze user impact. Ensure that you can provide uninterrupted service \(also referred to as 24x7 availability\), even during the maintenance phase.

!!! note
    If you do not use horizontal scaling in your environment, any fix that requires restarting equipment results in a temporary outage for your users. Existing 24x7 installation procedures do not apply to these environments.

!!! important
    You do not have to remove the node from the cluster when you apply fixes. If you do remove a node, you might be unable to add the node back to the cluster.

## Minor fixes

Apply all minor fixes on each cluster node. Use the installation instructions that come with the fix. When you apply minor fixes that might update previously deployed enterprise applications<!-- How would users determine that a fix might update in this manner? -->, first turn off the auto-synchronization feature of the deployment manager. After you deploy the fix on all cluster nodes, you can force a manual synchronization with the deployment manager to ensure that all updates are synchronized on the nodes. Then, you can enable the auto-synchronization feature again.

If the documentation associated with the minor fix requires that you restart HCL Portal or WebSphere Application Server, apply the minor fix one node at a time. This process enables other nodes to continue to provide service to users. However, if the fix requires an update to the HCL Portal databases, you might be required to stop the cluster before you apply the fix. If so, use a procedure that ensures 24x7 availability.

## Fixes and service packs

You can approach installing service packs into an HCL Portal clustered environment several ways. Installing a service pack involves modifying the IP sprayer to remove a cluster from receiving user requests. By using this process, you offer the system time to finish handling existing user sessions and to upgrade that cluster on all nodes. After verification testing assures that the upgraded cluster is operates, it can start receiving production traffic while the next cluster is taken offline and goes through the upgrade process. This approach preserves complete 24x7 availability during the upgrade process.

A separate document is available that describes the process of installing HCL Digital Experience service packs \(fix packs\) into an existing cluster while you maintain 24x7 availability. To briefly summarize this procedure, you remove a node or set of nodes from the flow of user traffic by configuring the IP sprayer and web server. Then, you upgrade the node with the service packs. After the upgrade is complete, return the node or set of nodes to the flow of user traffic. Repeat the procedure with the next node or set of nodes. Repeat this process until all nodes in the cluster are upgraded.

!!! important
    During the upgrade process, some portlets might become temporarily unavailable because of updates to the shared database, which are incompatible with the previous version of the portlet. This process can introduce functional limitations to 24x7 availability.


