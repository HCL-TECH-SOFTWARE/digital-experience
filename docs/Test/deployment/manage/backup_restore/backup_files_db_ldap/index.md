# Backing up Files, Databases, and the LDAP Servers

Periodically run an automated backup procedure for the HCL Portal file system, databases, and LDAP server(s) using a backup and recovery utility of your choice. Remember to run the backup procedure before performing critical system-wide changes, such as upgrading to a new version of HCL Digital Experience or installing interim fixes and fix packs.

Perform the following tasks to back up the HCL Digital Experience file system, databases, and LDAP server(s):

1.  [Completing prerequisites for backup](i_wadm_t_bkup_prereq_winlinux.md)  
Before you back up the HCL Digital Experience installation, decide which utility to use and whether to perform online backup or offline backup.
2.  [Backing up the HCL Portal file system](i_wadm_t_bkup_files_winlinux.md)  
Periodically run an automated backup procedure for the HCL Portal file system.
3.  [Backing up the LDAP server(s)](i_wadm_t_bkup_ldap_winlinux.md)  
If you have made system-wide changes and are using an LDAP user registry, back up your LDAP server.
4.  [Backing up the database](../backup_files_db_ldap/backup_db/index.md)  
Periodically run an automated backup procedure for the HCL Portal databases.
5.  [Backing up the IBM Installation Manager](bck_up_iim.md)  
IBM Installation Manager must also be included in backup and recovery planning. If you back up the HCL Portal file structure and then install a fix pack, the HCL Portal and IBM Installation Manager become out of sync after you restore the HCL Portal file system. This condition is not recoverable.

???+ info "Related information"
    - [Backup and recovery](../../migrate/planning_migration/migration_consideration/mig_plan_backup_and_recovery.md)

