# Managing JCR databases

This section explains how to manage Java Content Repository (JCR) databases, including backup, restore, and migration tasks.
## Sample scenario: Copying a JCR database

This section describes how to copy a Java Content Repository (JCR) database from a source environment to a target environment, using IBM DB2 as an example.

This sample scenario demonstrates how an administrator can copy a Java Content Repository (JCR) database from a source environment to a target environment using IBM DB2 on Linux.  

!!! note
    This is a sample scenario. The steps illustrate a typical database backup and restore process. They are not specific to HCL Digital Experience. If you use a different database vendor or operating system, follow the equivalent procedures provided by your database vendor. The time required depends on the amount of content in your environment.

In this example, the administrator uses **IBM DB2® command-line tools** to back up and restore the JCR database. Copying the database can take several minutes depending on the content volume.

### Step 1: Preparing the source environment

1. Log in to the Red Hat Linux server that hosts the source JCR database.

2. Open a terminal: Right-click the desktop and select **Open Terminal**.

3. Increase the file descriptor limit:
   ```
   ulimit -n 24000
    ```
4. Switch to the DB2 instance user:
    ```
    su - db2inst1
    ```
5. List the existing databases to verify the JCR database:
    ```
    db2 list database directory
    ```
6.	Start IBM DB2:
    ```
    db2start
    ```
    Sample output:
    ```
    `-bash-4.1$ db2start 
    10/08/2015 22:23:17 0 0 SQL 1063N DB2START processing was successful.
    SQL1063N DB2START processing was successful.
    -bash-4.1$`
    ```
---
### Step 2: Backing up the JCR database
1.  Create a directory to store the backup:

   ```bash
   mkdir -p /home/db2inst1/backup
   ```
2.  Back up the WPJCR database:
    ```
    db2 backup database WPJCR to /home/db2inst1/backup
    ```
3. I f the target portal server uses a different database server, copy the backup file to the target server. Before copying, repeat steps 1–2 on the target server to prepare the environment.
    ```
    scp WPJCR.0.db2inst1.DBPART000.20151008222851.001 root@<target-server>:/home/db2inst1/backup/
    ```
---
### Step 3: Restoring the JCR database on the target server
1. Restore the WPJCR database on the target DB2 server with a new name such as WPJCRT with the command: 
```
db2 restore database WPJCR from /home/db2inst1/backup/into WPJCRT`
```
2. Verify that the restored database exists:
``` 
db2 list database directory
``` 
The new database (WPJCRT) should appear in the list.





