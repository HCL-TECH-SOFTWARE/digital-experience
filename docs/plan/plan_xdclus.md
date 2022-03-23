# Dynamic clusters 

You can create a dynamic cluster to run HCL Portal.

Install HCL Digital Experience. Then, start the Configuration Wizard. Select **Set Up a Cluster**. Then, run the tasks associated with that option. Choose **dynamic** as the type of cluster to create.

The OnDemand Router \(ODR\) component provides capabilities such as workload balancing, prioritization, health monitoring, and dynamic operations for dynamic clusters. An ODR can be configured to provide multi-cluster routing, including dynamic clusters that are in remote cells, and routing to other servers. The ODR can serve as a replacement for the HTTP server plug-in, but in many configurations both components are used. The HTTP server might be in the DMZ to serve static content and to provide an entry point to the private network where the ODR is.

Review the following considerations before you configure the OnDemand Router \(ODR\) to route traffic to HCL Portal clusters:

-   Internal users can send requests directly to the ODR instead of through a front-end web server. When you send direct requests, you must configure the ODR to append a **via** header to the HTTP requests. Set the value of the ODR custom property http.compliance.via to true; see the "On-demand router settings" link in the Related section for information.

    **Note:** This step is not required when you send user traffic through the web server to the ODR. The web server appends the **via** header to the HTTP request.

-   The ODR can selectively route traffic to clusters based on the incoming URL. You can configure IP alias values for the ODR. Then, define routing rules to associate user traffic for each IP alias to the appropriate HCL Portal cluster.
-   You can use the ODR to load balance traffic among identical portal clusters. You can configure a Multi-cluster Routing Policy \(MCRP\) for the ODR to identify the destination clusters and the type of load balancing. Read the "Configuring the on-demand router for multi-cluster failover and load balancing routing" link in the Related section.

    **Note:** If you route traffic to remote static clusters with Generic Server Cluster definitions, the cell\_name value must be the local cell name where the ODR is.

-   You can also use the ODR to route traffic to remote clusters, both static and dynamic. Define a generic server cluster for each target portal cluster. Read the "Defining generic server clusters for remote ODR cells" link in the Related section.

    **Note:** If you are routing to remote static clusters that use vertical cluster members, you must complete the optional step at the end. This step defines a server custom property for each port in the generic server cluster.


**Important:** When you apply maintenance, it is important that the deployment manager is inactive until both upgrades are complete. If the deployment manager is active before both upgrades are complete, it might detect an incompatible version and remove some required resources from the dynamic cluster.

**Parent topic:**[Cluster considerations ](../plan/plan_clus_ovr.md)

