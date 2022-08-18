# Security scenarios

Setting up a clustered environment requires that you consider the following two security scenarios.

## Out-of-box security

The first scenario is when the default Virtual Member Manager \(VMM\) file-based repository security is used on both the HCL Portal nodes and the deployment manager. When the HCL Portal node is federated into the deployment manager cell, the node's security settings are replaced with the deployment manager security settings. Before you federate the first node into the cell, the required administrative group and administrative user \(wpsadmins and wpsadmin\) must be defined in the deployment manager's security repository. Otherwise, the HCL Digital Experience administrators group and administrative user are lost when you federate the node into the deployment manager.

After you set up the cluster, you can modify the security settings of the cell. You can use WebSphere® Integrated Solutions Console to modify security in the cell. However, use the HCL Portal security tasks to change cell security to ensure that the security configuration settings for WebSphere Application Server and HCL Portal are identical.

**Note:** Using the WebSphere Integrated Solutions Console to configure or update the out-of-box security is NOT supported in a stand-alone environment. This option is only supported in a clustered environment that uses the Deployment Manager WebSphere Integrated Solutions Console.

## Modified security with Virtual Member Manager \(VMM\) federated

The second scenario is when the existing deployment manager default security was modified before the first HCL Portal node joined the cell. HCL Portal supports the capability of using two different sets of administrative user ID and password credentials when you federate a HCL Portal node into a cell. One set is for the HCL Portal node authentication and one set is for deployment manager authentication. It is not necessary to define a common administrative user ID before HCL Portal joins the cell. If the deployment manager cell is using federated VMM with extra repositories, the security settings on the portal node are replaced with the modified deployment manager VMM federated security settings. The original stand-alone environment security settings are preserved and revert to the original settings if you remove the node from the cluster.

**Parent topic:**[Cluster considerations](../plan/plan_clus_ovr.md)

