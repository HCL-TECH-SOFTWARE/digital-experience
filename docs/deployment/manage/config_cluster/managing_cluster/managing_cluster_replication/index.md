# Managing replication in your cluster

IBM WebSphere Application Server provides a replication service. This service transfers data, objects, or events among application servers. Data replication can be used to make data for session manager, dynamic cache, and stateful session beans available across many application servers in a cluster.

Review the following information to manage replication:

!!!note
    By default, the cluster scripts enable dynamic caching for each cluster member. The replication type is set to NOT SHARED.

-   **Dynamic caching**

    Data replication service (DRS) is the internal WebSphere® Application Server component that replicates data among application servers. There are several types of data replication, and HCL Portal can use data replication for dynamic caching and for memory-to-memory replication of session data. Enabling data replication for dynamic caching in a cluster environment is necessary to maintain data integrity between multiple HCL Portal nodes in the cluster. Replication also helps improve performance by generating data once and then replicating it to other servers in the cluster.

    -   AIX® HP-UX Linux™ Solaris Windows™: [Dynamic cache service settings](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.doc/ae/udyn_rcachesettings.html)

        **DB2 for z/OS tip:** If you use the IBM® DB2 Universal Database™ for z/OS® JDBC type 2 driver, you must set the JDBC driver custom property fullyMaterializeLobData to false. See [Data sources](http://www-01.ibm.com/support/knowledgecenter/SS7K4U_8.5.5/com.ibm.websphere.zseries.doc/ae/cdat_datasor.html) for information.

    -   IBM® i: [Dynamic cache service settings](http://www-01.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.iseries.doc/ae/udyn_rcachesettings.html)

        **DB2 for z/OS tip:** If you use the IBM® DB2 Universal Database™ for z/OS® JDBC type 2 driver, you must set the JDBC driver custom property fullyMaterializeLobData to false. See [Data sources](http://www-01.ibm.com/support/knowledgecenter/SS7K4U_8.5.5/com.ibm.websphere.zseries.doc/ae/cdat_datasor.html) for information.

    -   z/OS®: [Dynamic cache service settings](http://www-01.ibm.com/support/knowledgecenter/SS7K4U_8.5.5/com.ibm.websphere.zseries.doc/ae/udyn_rcachesettings.html)

        **DB2 for z/OS tip:** If you use the IBM® DB2 Universal Database™ for z/OS® JDBC type 2 driver, you must set the JDBC driver custom property fullyMaterializeLobData to false. See [Data sources](http://www-01.ibm.com/support/knowledgecenter/SS7K4U_8.5.5/com.ibm.websphere.zseries.doc/ae/cdat_datasor.html) for information.

-   **Distributed sessions**

    HCL Portal can use the WebSphere® Application Server capabilities to support HTTP session failover, which enables one node in a cluster to access information from the existing HTTP session in a failure in the cluster node originally handling that session. This capability is referred to as distributed sessions. WebSphere® Application Server provides two techniques that can be used for distributed sessions, either of which can be used in a HCL Portal cluster. Distributed session support is not enabled by default, so you must determine whether to provide this capability in your cluster. And, if so, which of the two techniques you use: memory-to-memory session replication and database session persistence.

    **Warning:** The memory-to-memory session application can lead to low memory conditions if failures cause replication to fail. This condition can occur because the local and backup sessions are stored in the JVM memory. Therefore, failures with replicating the session data can prevent freeing the memory that is allocated for the backup session.

    -   AIX® HP-UX Linux™ Solaris Windows™:
        -   For general information, read [Session management support](http://pic.dhe.ibm.com/infocenter/wasinfo/v8r5/topic/com.ibm.websphere.nd.doc/ae/cprs_sesm.html).
        -   For memory-to-memory information, read [Memory-to-memory replication](http://pic.dhe.ibm.com/infocenter/wasinfo/v8r5/topic/com.ibm.websphere.nd.doc/ae/cprs_memory2memory.html).
        -   For database session information, read [Configuring for database session persistence](http://pic.dhe.ibm.com/infocenter/wasinfo/v8r5/topic/com.ibm.websphere.nd.doc/ae/tprs_cnfp.html).
    -   IBM® i:
        -   For general information, read [Session management support](http://pic.dhe.ibm.com/infocenter/wasinfo/v8r5/topic/com.ibm.websphere.nd.doc/ae/cprs_sesm.html).
        -   For memory-to-memory information, read [Memory-to-memory replication](http://pic.dhe.ibm.com/infocenter/wasinfo/v8r5/topic/com.ibm.websphere.nd.doc/ae/cprs_memory2memory.html).
        -   For database session information, read [Configuring for database session persistence](http://pic.dhe.ibm.com/infocenter/wasinfo/v8r5/topic/com.ibm.websphere.nd.doc/ae/tprs_cnfp.html).
    -   z/OS®:
        -   For general information, read [Session management support](http://pic.dhe.ibm.com/infocenter/wasinfo/v8r5/topic/com.ibm.websphere.nd.doc/ae/cprs_sesm.html).
        -   For memory-to-memory information, read [Memory-to-memory replication](http://pic.dhe.ibm.com/infocenter/wasinfo/v8r5/topic/com.ibm.websphere.nd.doc/ae/cprs_memory2memory.html).
        -   For database session information, read [Configuring for database session persistence](http://pic.dhe.ibm.com/infocenter/wasinfo/v8r5/topic/com.ibm.websphere.nd.doc/ae/tprs_cnfp.html).

-   **[Managing Personalization cache replication in your cluster](../../../config_cluster/managing_cluster/managing_cluster_replication/man_pzn_cache.md)**  
Enable the Personalization cache replication if you want to propagate invalidation in the Personalization caches to the other nodes in the cluster.


