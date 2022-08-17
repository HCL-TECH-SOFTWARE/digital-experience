# Determining application sharing between clusters

If applications are shared between clusters, there are maintenance implications. An application definition is cell-scoped, meaning that a single application can be used by any server running on any node within the cell. The relationship between an enterprise application and the server where it runs is called a mapping. For a cluster to run an instance of an application, the application must be mapped to that cluster. An application that is shared between multiple clusters has multiple mappings.

Only one instance of the application can exist in the cell. Therefore, there can be only one application root defined for that application across multiple clusters. If the /wps/portal URI is used to access HCL Digital Experience, /wps is the application root for the entire cell.

Complete the following steps to determine what mappings exist for a particular application:

1.  Open the Deployment Manager WebSphere® Integrated Solutions Console.

2.  Click **Applications** \> **Application Types** \> **WebSphere enterprise applications** in the navigation pane.

3.  Find and click the required application.

4.  Click **Target specific application status** from the options under that application.

    The resulting table shows all servers and clusters to which the application web modules are mapped.


**Parent topic:**[Managing your cluster](../admin-system/manage_clus.md)

