# Security options 

Security is enabled by default for the WebSphere Application Server deployment manager.

The security model in IBM® WebSphere® Application Server and HCL Portal affects the planning and implementation of security in a cluster. Therefore, HCL Portal does not attempt to change the security settings in the deployment manager cell whenever a node is federated. Any existing security configuration of a stand-alone HCL Portal is replaced with the security settings of the deployment manager cell when it joins that cell. If you remove the node from the deployment manager cell, the original security settings are reinstated.

## Default security settings

The default security that is enabled on the deployment manager profiles and HCL Portal profiles installation is the Virtual Member Manager \(VMM\) federated security with a single file-based repository configured. If you plan to add the stand-alone node into a deployment manager cell, there is no need to modify this default security setting on a HCL Portal node. During federation, the stand-alone environment security settings are replaced with the deployment manager security settings. The original stand-alone environment security settings are preserved and revert to the original settings if you remove the node from the cluster.

**Note:** If administrative security is disabled on the deployment manager, it must be enabled before you run the security configuration tasks on the HCL Portal cluster members.

HCL Portal also supports the option of installing into a managed profile of an existing cell. In this case, HCL Portal inherits the security settings of the existing cell. Certain security options collect information during the installation to allow HCL Portal to adapt to the existing security settings.

## Security options for a cluster

All of the VMM federated security options, including multiple LDAP repositories, database repositories, and the default file-based repository can be used.

HCL Portal provides a number of security tasks, which can be used to modify the WebSphere Application Server security settings and make the required updates to the HCL Portal configuration in a single step. As soon as a HCL Portal node is federated into a deployment manager cell, all run HCL Portal security tasks update the security configuration on the deployment manager cell. Run security tasks after you federate the HCL Portal node because the Deployment Manager cell does not contain the configuration resources that are required to run the security tasks.

**Note:** Do not use the file-based repository as your only repository in a production environment. The reason is that updates are only possible through the WebSphere Integrated Solutions Console, not through portal user management. These updates are sent to each node in the cell with deployment manager file synchronization. This process can be time-consuming for large volumes of users and groups. Also, synchronization does not occur at the same time for all nodes in a cell, so there are times when the nodes in the cell have differing security definitions. Also, the **Users and Groups** portlet is not available with the file-based repository. You must replace the file-based repository with a federated LDAP user registry to have access to the **Users and Groups** portlet. More topic information about Configuring your file-based repository can also be found in our product base documentation [here](../welcome/wp_welcome.html).

**Parent topic:**[Cluster considerations ](../plan/plan_clus_ovr.md)

