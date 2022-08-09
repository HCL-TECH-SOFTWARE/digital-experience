# Limitations for setting up a cluster

Certain limitations apply when you set up a HCL Portal cluster.

-   You must install HCL Portal as a stand-alone node before you create a cluster. You cannot install HCL Portal into a managed node.
-   AIX® Linux™ Windows™: Except for the initial setup of the cluster, HCL Portal is not supported on a managed node that is not part of a cluster.

    **Note:** A cluster can be created which contains only one HCL Portal server, enabling a single HCL Portal server to be operational in a managed cell.

-   You cannot use the Derby database. The HCL Portal databases must be transferred to a supported external database, for example: DB2®, Oracle, or SQL Server.
-   In a clustered environment, it is not possible to change settings through the Global Settings portlet or the XML configuration interface. These changes must be made by modifying the respective properties in the WebSphere® Integrated Solutions Console.
-   To support search, you must install and configure a remote search service on an application server node that is not part of the cluster.
-   Administrative actions for HCL Digital Experience are immediately visible for the user who completes them. However, another user can be assured of seeing the changes only if the user logs out of HCL Digital Experience and then logs back in. This limitation applies to both cluster and non-cluster environments.
-   When you create a cluster or a cluster member, do not use spaces in the cluster name or the cluster member name.
-   For the deployment manager and each HCL Portal node to be in the cluster, verify that each system clock is set to within 5 minutes of the others or the addNode command fails.

**Restriction:** The serverName is hardcoded to HCL Portal. The serverName cannot be changed in a stand-alone environment. If you do change it, the ConfigEngine scripts do not work. For a clustered environment, see [Virtual Member Manager integration](plan_vmm_int.md) for options on replacing the HCL Portal JVM.

**Parent topic:**[Cluster considerations](../plan/plan_clus_ovr.md)

