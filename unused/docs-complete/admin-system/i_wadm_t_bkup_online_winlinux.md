# Enabling archive logging for online backup 

Enable archive logging if you are performing online backup of the database. Use the Configure Database Logging Wizard to specify the parameters that control archive logging.

**Note:** This procedure refers to the WPSDB database, the default database name for the Release database domain.

To enable archive logging for an online DB2® database backup, follow these steps:

1.  Open the DB2 Control Center: Click **General Administration Tools** \> **Control Center**.

2.  Select the WPSDB database from the navigation tree.

3.  From the menu, choose **Selected** \> **Configure Database Logging**.

4.  In the Configure Database Logging Wizard, select **Archive Logging** for your logging type and click **Next**.

5.  Select **Use DB2 to automatically archive the log files** for the method of handling archived logs. Type a directory path for the **Primary archive log location** and **Failure archive log location** and click **Next**.

6.  Accept the default values for the number and size of your log files and click **Next**.

7.  Accept the default location for your log files or choose a new location.

    You can mirror your log files to store a copy of your log files in a second location, usually on a different drive. This is important for Idle Standby environments. If you do not mirror the log files, then you must back up the log files in addition to backing up the WPSDB database.

8.  Click **Next**.

9.  Type a directory path to store the initial backup.

    Because you are changing the logging method, this wizard automatically performs an initial backup.

10. Click **Next**.

11. Specify any options for the backup. Click **Next**.

12. Schedule the backup task for a later time or select the option **Run now without saving task history**. Click **Next**.

13. On the Summary screen, review the selections that you made with the wizard and click **Finish** to accept the changes and create the initial backup.

14. Select the WPSDB database from the navigation tree and, from the Control Center menu, choose **Selected** \> **Configure Parameters**.

15. In the Recovery section, specify the following parameters:

    1.  Set the value of the TRACKMOD parameter to Yes.

    2.  Set the LOG\_RETAIN parameter to Recovery.

    3.  Click **OK** to save these settings.

16. To enable the changes, restart the DB2 instance for the HCL Portal server that you are backing up.


**Parent topic:**[Enabling logging ](../admin-system/i_wadm_t_bkup_log_winlinux.md)

