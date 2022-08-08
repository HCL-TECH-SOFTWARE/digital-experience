# Guidelines for setting up a cluster

When you set up a HCL Portal cluster, you must consider any planning that is required for the WebSphere Application Server nodes.

## Prerequisites

In WebSphere® Application Server, a cluster is composed of multiple identical copies of an application server. A cluster member is a single application server in the cluster. HCL Digital Experience is installed as an enterprise application server within the WebSphere Application Server infrastructure. All of the clustering features available within the WebSphere Application Server infrastructure are also available and apply to HCL Portal. Thus, an HCL Portal cluster is a collection of multiple HCL Portal servers that are identically configured.

For more information, select the appropriate IBM® WebSphere Application Server Network Deployment version by logging into [https://www.hcltechsw.com/wps/portal/about/welcome](https://www.hcltechsw.com/wps/portal/about/welcome).

## Guidelines for implementing cluster environments

Implement cluster environments according to the following guidelines:

-   The HCL Portal databases must be transferred to a supported external database, for example: DB2®, Oracle, or SQL Server.
-   You can use several approaches to configure an external web server in a clustered environment. The instructions for installing HCL Digital Experience follow WebSphere Application Server, which involves the plug-ins installation wizard to install the binary plug-in module after the cell is set up. For a complete description of the procedure for configuring an external web server in a clustered environment, refer to the following information:
    -   AIX® Linux™ Windows™: [Selecting a Web server topology diagram and road map](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.doc/ae/tins_road_plugins.html)
    -   IBM i: [Selecting a Web server topology diagram and road map](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.iseries.doc/ae/tins_road_plugins.html?lang=en)
    -   z/OS®: [Implementing a web server plug-in](http://www-01.ibm.com/support/knowledgecenter/SS7K4U_8.5.5/com.ibm.websphere.zseries.doc/ae/twsv_plugin.html)
-   The deployment manager node must be installed separately before the cells and clusters can be configured.
-   WebSphere Application Server provides database session persistence and memory-to-memory replication as techniques for HTTP session failover in a clustered environment. Review the following information to determine whether you want to use one of these techniques in your cluster:

    **Warning:** The memory-to-memory session application can lead to low memory conditions if failures cause replication to fail. This condition can occur because the local and backup sessions are stored in the JVM memory. Therefore, failures with replicating the session data can prevent freeing the memory that is allocated for the backup session.

    -   AIX Linux Solaris Windows: [Task overview: Managing HTTP sessions](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.doc/ae/tprs_sep1.html)
    -   IBM i: [Task overview: Managing HTTP sessions](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.iseries.doc/ae/tprs_sep1.html)
    -   z/OS: [Task overview: Managing HTTP sessions](http://www-01.ibm.com/support/knowledgecenter/SS7K4U_8.5.5/com.ibm.websphere.nd.multiplatform.doc/ae/tprs_sep1.html?cp=SS7K4U_8.5.5)
-   You can create a dynamic cluster to run HCL Portal.
-   The WasRemoteHostName and WasSoapPort properties, which are in the wkplc.properties file, must always be accurate because many ConfigEngine scripts depend on them. If you are in a stand-alone environment, these parameters point to the host name and soap port for the HCL Digital Experience application server. If you are in a clustered environment, these parameters point to the Deployment manager host name and soap port. Modify these properties when instructed to during the installation instructions.
-   If you add a node to a cell or change a node's configuration after it is federated to the deployment manager, synchronize the node's configuration.
-   If you are planning to configure an external security manager for authentication or authorization, install and configure the HCL Portal cluster first. Verify that the cluster is working properly before you configure the external security manager.

**Parent topic:**[Cluster considerations](../plan/plan_clus_ovr.md)

