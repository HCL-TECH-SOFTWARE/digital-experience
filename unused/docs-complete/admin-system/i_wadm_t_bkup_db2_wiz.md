# Using the DB2 Backup wizard 

Use the Backup wizard of IBM DB2 Universal Database Enterprise Server Edition to create online or offline backups. This sample scenario describes how to create a full offline backup of an HCL Portal database.

Before you perform an offline backup, stop all services that access the DB2® database: WPSDB, which is the default database for the Release database domain.

To perform a full offline backup of the WPSDB database, follow these steps:

1.  Stop the servers.

2.  Open the DB2 Control Center: Click **General Administration Tools** \> **Control Center**.

3.  To open the Backup wizard, expand the object tree until you find the WPSDB database, display its menu, and select **Backup**.

4.  After confirming that the details of your database are correct, click **Next**.

5.  Select a storage location for the backup and click **Next**.

6.  Select the backup type **Full backup** and an availability of **Offline**.

7.  Unless you have configured a separate task to quiesce the database, select **Quiesce** to ensure that all users are disconnected from the database before the backup task begins.

8.  Click **Next**.

9.  If you are experiencing performance problems during backups, skip the next step and go to Step 11.

10. At Specify performance options for the backup, click **Next** to choose one of the following options:

    -   To specify a schedule for the backup task, click **Change** and click **Next**.

        **Important:** Select a time when no users are working with the database or with applications that might be running on the server.

    -   To perform a backup without setting a schedule, click **Run now without saving task history** and click **Next**.
11. Click **Show Command** to view the DB2 commands that the Backup wizard runs.

    **Tip:** You can copy these commands to use in the Task Center as an alternative to using the Backup wizard the next time you want to back up the database.

    **Note:** The following example includes line breaks for readability. In actual practice, you need to type all commands, including the semicolons, on one line.

    ```
    
    CONNECT TO WPSDB;QUIESCE DATABASE IMMEDIATE FORCE CONNECTIONS;CONNECT RESET;
    BACKUP DATABASE WPSDB TO "D:\BackupFiles\DB2backup\" WITH 2 BUFFERS 
    BUFFER 1024 PARALLELISM 1 WITHOUT PROMPTING;CONNECT TO WPSDB;
    UNQUIESCE DATABASE;CONNECT RESET;
    
    ```

12. When you are satisfied with your settings for the database backup, click **Finish** to start the backup task.


DB2 displays a message confirming that the backup task has completed successfully or that the task encountered and logged problems that need to be fixed.

**Parent topic:**[Backing up the database ](../admin-system/i_wadm_t_bkup_db2_winlinux.md)

