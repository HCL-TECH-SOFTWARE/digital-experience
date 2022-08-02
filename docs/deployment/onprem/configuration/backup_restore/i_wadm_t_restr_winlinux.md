# Restoring files, databases, and the LDAP server\(s\)

When necessary, restore the HCL Digital Experience file system, databases, and LDAP server or servers that you backed up.

Before you restore HCL Portal databases, remember to adhere to the following principles:

-   Whenever you restore HCL Portal databases, you must restore the databases for all of the nonshared database domains to ensure consistency: Release, LikeMinds, Java™ Content Repository \(JCR\), and Feedback are the nonshared database domains.
-   Restoring the databases of the shareable database domains is optional and might not be required when you do not want to lose recent user and community information: Customization and Community are the shareable database domains.
-   Whenever you restore the HCL Portal databases, you must also restore the configuration and data files that were archived when the backup image was taken.
-   Be sure that your database restoration rolls forward to the point when you performed the file system backup for the HCL Portal deployment. If you fail to do this step, the configuration and data files might not be synchronized with the information in the databases.
-   The file system backup for HCL Portal includes directories that contain the configuration files.
-   Consider whether you implemented separate databases for each database domain or multiple database domains by using the same database. For example, if all database domains were implemented by using a single HCL Portal database, then restoring this database restores the contents of all domains.
-   If you are using IBM® DB2 Universal Database™ Enterprise Server Edition, you should understand the basics of DB2® data backup.
-   If you are using a different database management system \(DBMS\), refer to the DBMS documentation for backup instructions.

1.  Stop all servers.

    1.  If applicable, stop all external HTTP servers.

    2.  Stop all of the HCL Portal servers.

2.  Move the backed up files to their original location.

    Refer to the documentation of the backup utility that you used for instructions on restoring files.

    **WARNING:** Do not overwrite the existing AppServer, PortalServer, or wp\_profile root directories with the backed up files because you risk corrupting the HCL Portal file system. First, remove these old directories and then extract the backed up version in its place.

3.  Restore the HCL Portal databases:

    -   For IBM DB2 Universal Database Enterprise Server Edition, refer to the DB2 documentation.
    -   For other database servers, refer to that database server documentation for instructions.
4.  If necessary, restore your LDAP server.

    -   For IBM Directory Server, refer to IBM Directory Server documentation.
    -   For IBM Domino®, refer to the Directory Services topics in the Domino Administrator Help.
    -   For other LDAP servers, refer to the product documentation for instructions.

-   **[Using the DB2 RESTORE DATABASE command](../admin-system/i_wadm_t_restr_db2_cmnd.md)**  
Use the RESTORE DATABASE command of IBM DB2 Universal Database Enterprise Server Edition as an alternative to the DB2 Restore wizard to restore the databases that you backed up.
-   **[Using the DB2 Restore wizard](../admin-system/i_wadm_t_restr_db2_wiz.md)**  
Use the Restore wizard of IBM DB2 Universal Database Enterprise Server Edition as an alternative to the DB2 RESTORE DATABASE command to restore the databases that you backed up.

**Parent topic:**[Backup and restore](../admin-system/i_wadm_c_bkup_restr_winlinux.md)

**Related information**  


[Backup and recovery](../plan/mig_plan_backup_and_recovery.md)

