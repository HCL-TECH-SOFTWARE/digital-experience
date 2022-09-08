# Using the DB2 Restore wizard

Use the Restore wizard of IBM DB2 Universal Database Enterprise Server Edition as an alternative to the DB2 RESTORE DATABASE command to restore the databases that you backed up.

To replace an existing WPSDB database with the backup copy using the DB2® Restore wizard, follow these steps:

1.  Stop all application servers connected to the WPSDB database.

2.  Stop and start DB2 to make sure that there are no connections to the database.

3.  In the DB2 Control Center, select **Tools > Wizards > Restore Wizard** from the list of available wizards to define and schedule the restoration of the database.

4.  Select the database instance DB2 and the database WPSDB to restore.

    If the WPSDB database does not display in the Database field, type WPSDB and click **OK**.

    A series of screens prompt you to specify information that controls how the database restoration is performed.

5.  Choose one of the following options:

    -   Select **Restore to an existing database** if you have an existing WPSDB database, but it is corrupted or does not contain recent data.

        For example, consider the case where both HCL Digital Experience and DB2 are installed on the same machine, and that machine suffered a disk failure. To get back to full functionality, you must reinstall DB2, reinstall HCL, redeploy the server, and run the LDAP and DB2 transfer wizards. This operation would cause a new WPSDB database to be created in DB2. However, that database would not contain any data.

    -   Select **Restore to a new database** if you no longer have an existing WPSDB database in DB2.

        For example, if you had two machines, one contained HCL Digital Experience, and the second machine contained DB2 and the DB2 data. If the second machine failed, then you would need to reinstall DB2. You could then use the Restore Wizard to re-create the WPSDB database from a backed up WPSDB database.

6.  Click **Next**.

7.  If you selected to restore to a new database, type WPSDB as the name of the new database, and type the location of the database after the restore. Also, specify the location of the log files for the database after the restore.

8.  Click **Next.**

9.  Specify a backup image using one of the following options:

    -   If you selected to **Restore to an existing database**, select the most recent backup file to use for the restore operation.
    -   If you selected to **Restore to a new database**, type the media type, path, and date and time of the most recent backup.
10. Click **Next.**

11. On the Set your containers for a redirected restore screen, do not make any changes. Click **Next**.

12. On the Choose your restore options screen, do not enable **Datalink columns**. Click **Next**.

13. On the Select performance options for the restore screen, do not make any changes. Click **Next**.

14. On the Enabling the DB2 scheduling function screen, select one of these options:

    -   Select **Run now without saving task history** to perform the restore immediately.
    -   Select **Enable scheduler** to schedule the restore operation for a later time.
15. Click **Next.**

16. On the final screen that shows summary information, click the **Show Command** to view the DB2 commands that the Restore wizard will run. You can copy these commands to use in the DB2 Task Center as an alternative to using the Restore Wizard.

17. Click **Finish** to begin the restore process.

18. Stop and restart all DB2 services.

19. Restart all servers.



