# Applying updates to custom applications

For customer-written portlet applications that are predeployed as standard EARs and then configured within each cluster using XMLAccess, use the same update procedure as used for portlet applications provided with HCL Digital Experience.

Perform the following steps to apply updates to custom applications:

1.  Use manual synchronization to control how the updates flow to each node in each cluster.

2.  If configuration updates are necessary, use `XMLAccess` to make the updates immediately after the application update has been synchronized down to the node, but before the updated portlet is tested.

3.  Test the updated portlet application against one cluster member, if possible, or against the entire cluster, once fully updated.

4.  Repeat this procedure for other clusters sharing this application.


**Parent topic:**[Managing portlets in your cluster](../admin-system/manage_portlets.md)

