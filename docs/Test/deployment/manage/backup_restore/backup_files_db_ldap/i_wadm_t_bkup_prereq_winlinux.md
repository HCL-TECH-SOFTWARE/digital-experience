# Completing Prerequisites for Backup

Before you back up the HCL Digital Experience installation, decide which utility to use and whether to perform online backup or offline backup.

-   Determine whether you want to use IBM® Tivoli® Storage Manager or another backup and recovery utility. Refer to the Tivoli Storage Manager documentation or the documentation for the utility that you choose to use.
-   Determine whether you want to perform an online backup or an offline backup.

    -   An online backup occurs while the portal servers are operational when you run the backup procedure.
    -   An offline backup occurs when the portal servers are stopped prior to running the backup procedure.
    
If you choose to use an online backup, make sure that the techniques and tools used for file system and database backup support the capturing of online backups where open files and database changes can be encountered during the backup procedure.

???+ info "Related information"
    - [Backing up the LDAP server(s)](i_wadm_t_bkup_ldap_winlinux.md)

