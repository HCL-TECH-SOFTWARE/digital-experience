# Backup and recovery 

Backup and recovery of data files and databases is an essential operation for any business system, particularly for data and applications that run in production environments. Create and follow a plan for backing up and recovering data on all tiers of your HCL Digital Experience deployment. IBM® Installation Manager must also be included in backup and recovery planning. If you back up the HCL Portal file structure and then install a fix pack, the HCL Digital Experience and IBM Installation Manager become out of sync after you restore the HCL Portal file system. This condition is not recoverable.

Backup and recovery include the HCL Portal file system and databases. Your backup and recovery plan needs to address each deployment tier: Complete system backup for catastrophic failures, back up of middleware such as HCL Digital Experience and IBM WebSphere® Application Server, and backup of individual applications that run on the middleware. Backup and recovery can be done on any or all of these tiers, depending on the needs of your portal deployment.

When you create a backup and recovery plan, consider these general questions:

-   What procedure will you use to back up data?
-   How often will you back up data?
-   What are the trade-offs between online and offline backups?
-   How does the scope of your portal deployment affect the backup and recovery strategy? For example, the number of users and the volume and importance of the data that is stored and used in applications affect your decisions about backup and recovery practices.
-   Will you use IBM Tivoli® Storage Manager or other utility to back up the file system?

**Attention:** Backing up and recovering an HCL Digital Experience installation includes the WebSphere Application Server runtime environment and all applications that are deployed on HCL Portal. However, if applications use remote information sources outside of the HCL Portal databases and the LDAP directory, you need to consider these remote sources. Develop backup and recovery procedures for these remote sources as part of your comprehensive strategy.

**Parent topic:**[Migration considerations ](../plan/mig_plan_high_availability.md)

**Related information**  


[Guidelines for Idle Standby clustered deployments ](../admin-system/i_wadm_t_bkup_hi_avail.md)

[Backing up files, databases, and the LDAP server\(s\) ](../admin-system/i_wadm_t_bkup_winlinux.md)

[Restoring files, databases, and the LDAP server\(s\) ](../admin-system/i_wadm_t_restr_winlinux.md)

