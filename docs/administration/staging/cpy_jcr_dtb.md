# Copying the JCR database

Copy the JCR database that is used on the source environment with the following steps.

Use the IBM DB2® command line tools to back up and restore the database.

Copying the JCR database can take several minutes, depending on the amount of content that is used in the configuration.

1.  Log in to the RH Linux Server, where the source JCR database exists.

2.  Open the **RH Command line Terminal**. Right-click the desktop and select **Open Terminal**.

3.  Enter the following command: ulimit -n 24000.

4.  Switch to the DB2 user, with the following command: su - db2inst1.

5.  List the existing databases with the following command: db2 list database directory. All portal databases are visible.

6.  Start IBM DB2 with the command db2start.

    The following output is shown:

    ```
    `-bash-4.1$ db2start 
    10/08/2015 22:23:17 0 0 SQL 1063N DB2START processing was successful.
    SQL1063N DB2START processing was successful.
    -bash-4.1$`
    ```

7.  Create a directory to back up the existing JCR database: mkdir /home/db2inst1/backup.

8.  Back up the WPJCR database with the following command: db2 backup database WPJCR to /home/db2inst1/backup.

9.  If you are using a different database server for target portal server, copy the backup to the server now. Before you copy the database, repeat steps 1-8 on the target. `scp WPJCR.0.db2inst1.DBPART000.20151008222851.001 root@cntserv_exmp.com:/home/db2inst1/backup/`

10. Restore the WPJCR database on the target DB2 server with a new name such as WPJCRT with the command: `db2 restore database WPJCR from /home/db2inst1/backup/into WPJCRT`.

11. List the databases with the following DB2 command: `db2 list database directory`. The new database is shown.


**Parent topic:**[Manual staging to production process](../deploy/mans2p_intro.md)

