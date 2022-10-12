# Backing up the IBM Installation Manager

IBM Installation Manager must also be included in backup and recovery planning. If you back up the HCL Portal file structure and then install a fix pack, the HCL Portal and IBM Installation Manager become out of sync after you restore the HCL Portal file system. This condition is not recoverable.

Prerequisites: [Completing prerequisites for backup](i_wadm_t_bkup_prereq_winlinux.md)

HCL Digital Experience is now installed and maintained through IBM® Installation Manager, which saves information on installed products in the agent data store and shared files. The damage or loss of shared files or IBM Installation Manager agent data can prevent the Installation Manager from working within your environment.

Without agent data files, you cannot change installed products or manage products and their components that you installed with the Installation Manager. For example, you cannot modify, update or install the products. Therefore, as part of your Disaster Recovery Plan, you need to have regular backups for the IBM Installation Manager agent and shared files.

!!!important
    Create the backups of the directories at the same time to keep the directories synchronized for the restore process.

To back up your Installation Manager, create a copy of these directories:

-   Agent data directory.
-   Shared resources directory.
-   Installation Manager installation directory.

The default locations of these directories are:

-   Windows: C:\\ProgramData\IBM\InstallationManager
-   Linux/UNIX root users: /var/ibm/InstallationManager
-   Linux/UNIX non-root users: /home/(user id)/var/ibm/InstallationManager

For more information about the default locations of these directories and to determine the directories, see the following documentation resources:

-   Documentation resource: [Backing up and restoring Installation Manager](https://www.ibm.com/docs/en/installation-manager/1.8.5?topic=manager-backing-up-restoring-installation)
-   Documentation resource: [Backing up IBM Installation Manager agent data and shared files for recovery with IBM Business Process Manager (BPM)](http://www-01.ibm.com/support/docview.wss?uid=swg21665878)

## Backing up the Installation Manager data

Backup the contents of the IBM Installation Manager data directory on the server you are upgrading in the event you lose connection during the upgrade, as this could corrupt the data directory.

The default locations of these directories are:

-   Windows: C:\\ProgramData\IBM\InstallationManager
-   Linux/UNIX root users: /var/ibm/InstallationManager
-   Linux/UNIX non-root users: /home/(user id)/var/ibm/InstallationManager

???+ info "Related information"  
    - [Backing up and restoring Installation Manager](https://www.ibm.com/docs/en/installation-manager/1.8.5?topic=manager-backing-up-restoring-installation)
    - [Backing up IBM Installation Manager agent data and shared files for recovery with IBM Business Process Manager (BPM)](https://www.ibm.com/support/pages/node/727017)

