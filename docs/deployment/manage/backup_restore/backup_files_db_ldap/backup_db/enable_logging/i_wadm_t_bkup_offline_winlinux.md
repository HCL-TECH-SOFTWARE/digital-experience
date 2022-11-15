# Enabling Circular Logging for Offline Backup

Enable circular logging if you are performing offline backup of the database. Use the Configure Database Logging Wizard to specify the parameters that control circular logging.

!!!note
    This procedure refers to the WPSDB database, the default database name for the Release database domain.

To enable circular logging for an offline DB2® database backup, follow these steps:

1.  Open the DB2 Control Center: Click **General Administration Tools > Control Center**.

2.  Select the WPSDB database from the navigation tree.

3.  From the menu, choose **Selected > Configure Database Logging**.

4.  In the Configure Database Logging Wizard, select **Circular Logging** for your logging type and click **Next**.

5.  Accept the default values for the number and size of your log files and click **Next**.

6.  Accept the default location for your log files or choose a new location.

    You can mirror your log files to store a copy of your log files in a second location, usually on a different drive. This is important for Idle Standby environments.

7.  Click **Next**.

8.  Select **Run now without saving history** and click **Next**.

9.  Click **Finish** to execute the DB2 commands needed to update the logging configuration.

10. Select the WPSDB database from the navigation tree and, from the Control Center menu, choose **Selected** \> **Configure Parameters**.

11. In the Recovery section, perform these steps:

    1.  Set the value of the TRACKMOD parameter to No.

    2.  Set the LOG_RETAIN parameter to No and click **OK**.

12. Restart DB2 to enable the changes.



