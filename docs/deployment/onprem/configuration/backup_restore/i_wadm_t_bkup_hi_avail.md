# Guidelines for Idle Standby clustered deployments

If HCL Digital Experience is deployed in an Idle Standby topology, both a primary node and a secondary node are running in a cluster. The primary node is the active node, and the secondary node is the backup node. If HCL Digital Experience is deployed in a clustered topology, both a primary node and additional nodes are running in a cluster. In this topology, there is no difference in database backup and restore because all cluster members use the same HCL Portal databases. However, you need to consider some additional factors when you back up and recover the file system in an Idle Standby clustered deployment.

In an Idle Standbya clustered deployment, adhere to these guidelines:

1.  Follow the file system backup and recovery procedures on both the primary and additional nodes.

2.  Back up the file system of the Deployment Manager configuration, the master configuration repository for the cell, by using one of the following methods:

    -   Use the simple commands that are provided by IBM® WebSphere® Application Server: [backupConfig](http://pic.dhe.ibm.com/infocenter/wasinfo/v8r5/index.jsp?topic=%2Fcom.ibm.websphere.nd.multiplatform.doc%2Fae%2Frxml_backupconfig.html) and [restoreConfig](http://pic.dhe.ibm.com/infocenter/wasinfo/v8r5/index.jsp?topic=%2Fcom.ibm.websphere.nd.multiplatform.doc%2Fae%2Frxml_restoreconfig.html).
    -   Use IBM Tivoli® Storage Manager or other utility to back up the Deployment Manager profile directory, where this configuration information resides.
3.  When you restore HCL Portal databases and file systems, make sure to restore the Deployment Manager configuration at the same time that the primary node and secondary node file systems are restored. Then, complete a node synchronization of both nodes by using the Deployment Manager WebSphere Integrated Solutions Console. This step ensures that the configuration is identical on both nodes and is consistent with the restored databases.


**Parent topic:**[Backup and restore](../admin-system/i_wadm_c_bkup_restr_winlinux.md)

**Related information**  


[Backup and recovery](../plan/mig_plan_backup_and_recovery.md)

