# Cluster setup limitations

Some limitations apply when you set up an HCL Portal cluster.

-   You must install HCL Portal as a stand-alone node before you create a cluster. You cannot install HCL Portal into a managed node.
-   AIX® Linux™ Windows: Except for the initial setup of the cluster, HCL Portal is not supported on a managed node that is not part of a cluster.

    !!! Note
        A cluster can be created that contains only one HCL Portal server, enabling a single HCL Portal server to operate in a managed cell.

-   You cannot use the Derby database. The HCL Portal databases must be transferred to a supported external database, for example, DB2®, Oracle, or SQL Server.
-   In a clustered environment, you cannot change settings through the Global Settings portlet or the XML configuration interface. You must change the configuration by modifying the respective properties in the WebSphere® Integrated Solutions Console.
-   To support search, you must install and configure a remote search service on an application server node that is not part of the cluster.
-   Administrative actions for HCL Digital Experience are immediately visible to the user who completes them. However, another user can see the changes only after the user logs out of HCL Digital Experience and then logs back in. This limitation applies to both cluster and non-cluster environments.
-   When you create a cluster or a cluster member, do not use spaces in the cluster name or the cluster member name.
-   For the deployment manager and each HCL Portal node to be in the cluster, verify that each system clock is set to within 5 minutes of the others or the addNode command fails.

**Restriction:** The `serverName` value is hardcoded in HCL Portal. You cannot change the `serverName` value in a stand-alone environment. If you do change it, the `ConfigEngine` scripts do not work. For a clustered environment, see [Virtual Member Manager integration](../user_registry_consideration/plan_vmm_int.md) for options on replacing the HCL Portal JVM.


