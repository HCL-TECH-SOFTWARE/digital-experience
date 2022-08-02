# Backup and restore

Backup and recovery of data files and databases is an essential operation for any business system, particularly for data and applications that run in production environments. Create and follow a plan for backing up and recovering data on all tiers of your HCL Digital Experience deployment. IBM Installation Manager must also be included in backup and recovery planning. If you back up the HCL Portal file structure and then install a fix pack, your HCL Digital Experience and IBM Installation Manager become out of sync after you restore the HCL Portal file system. This condition is not recoverable.

Backup and recovery include the HCL Portal file system and databases. Your backup and recovery plan needs to address each deployment tier: Complete system backup for catastrophic failures, back up of middleware such as HCL Portal and IBM® WebSphere® Application Server, and backup of individual applications that run on the middleware. Backup and recovery can be done on any or all of these tiers, depending on the needs of your portal deployment.

When you create a backup and recovery plan, consider these general questions:

-   What procedure will you use to back up data?
-   How often will you back up data?
-   What are the trade-offs between online and offline backups?
-   How does the scope of your portal deployment affect the backup and recovery strategy? For example, the number of users and the volume and importance of the data that is stored and used in applications affect your decisions about backup and recovery practices.
-   Will you use IBM Tivoli® Storage Manager or other utility to back up the file system?

**Attention:** Backing up and recovering a HCL Digital Experience installation includes the WebSphere Application Server runtime environment and all applications that are deployed on HCL Portal. However, if applications use remote information sources outside of the HCL Portal databases and the LDAP directory, you need to consider these remote sources. Develop backup and recovery procedures for these remote sources as part of your comprehensive strategy.

**Video**: [HCL Digital Experience - How to backup HCL Portal](https://www.youtube.com/watch?v=3cjA9IUMJow)

-   **[Guidelines for Idle Standby clustered deployments](../admin-system/i_wadm_t_bkup_hi_avail.md)**  
If HCL Digital Experience is deployed in an Idle Standby topology, both a primary node and a secondary node are running in a cluster. The primary node is the active node, and the secondary node is the backup node. If HCL Digital Experience is deployed in a clustered topology, both a primary node and additional nodes are running in a cluster. In this topology, there is no difference in database backup and restore because all cluster members use the same HCL Portal databases. However, you need to consider some additional factors when you back up and recover the file system in an Idle Standby clustered deployment.
-   **[Database considerations for backup and restore](../admin-system/i_wadm_c_bkup_db2_basics.md)**  
Before you back up HCL Portal databases, determine whether you need to perform offline or online backup, what your requirements are for storage capacity and backup frequency, and your preferred utility.
-   **[Backing up files, databases, and the LDAP server\(s\)](../admin-system/i_wadm_t_bkup_winlinux.md)**  
Periodically run an automated backup procedure for the HCL Portal file system, databases, and LDAP server\(s\) using a backup and recovery utility of your choice. Remember to run the backup procedure before performing critical system-wide changes, such as upgrading to a new version of HCL Digital Experience or installing interim fixes and fix packs.
-   **[Restoring files, databases, and the LDAP server\(s\)](../admin-system/i_wadm_t_restr_winlinux.md)**  
When necessary, restore the HCL Digital Experience file system, databases, and LDAP server or servers that you backed up.

**Parent topic:**[Digital Experience on non-containerized platforms](../containerization/dx_non_container.md)

**Related information**  


[Managing your HCL Portal environment](../install/iim_manage_wp.md)

[Backing up the system](../migrate/back_up_the_system.md)

