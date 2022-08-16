# Enabling site analysis logging

Site analysis logging is not enabled by default. To enable site analysis logging, specify the names and locations of the log files as values for the following parameters in the WP SiteAnalyzerLogService.

For details, see *Setting service configuration properties*.

1.  Specify the names for the log files and backup log files.

    -   **SiteAnalyzerFileHandler.fileName**

        Specify the location and file name of the log file. The default value is logs/$APPSERVER\_NAME/sa.log.

    -   **SiteAnalyzerFileHandler.backupFileName**

        Specify the location and file name of the backup file for the log file. The default value is logs/$APPSERVER\_NAME/sa\_$CREATE\_TIME.log. When the log file is backed up, the current data is stored in the backup file, sa\_$CREATE\_TIME.log, and a new log file, sa.log, is created.

    You can specify the following tokens as part of the directory location or file name:

    -   **$APPSERVER\_NAME**

        Name of the application server. Use this token for vertical clusters to enforce that the different application servers write into different files if they share file system.

    -   **$CREATE\_TIME**

        Date and time the file is created. Specify the format of this token in this parameter: SiteAnalyzerFileHandler.dateFormat.

    -   **$CLOSE\_TIME**

        Date and time the file is closed. Specify the format of this token in this parameter: SiteAnalyzerFileHandler.dateFormat.

    For example, you can specify log file locations and names as follows: log/backup/$APPSERVER\_NAME/sa\_$CREATE\_TIME\_$CLOSE\_TIME.log.

    **Note:** If HCL Digital Experience is writing to a file, the values for $CLOSE\_TIME and $CREATE\_TIME are the same.

2.  Specify the date format for tokens in the log file names.

    -   **SiteAnalyzerFileHandler.dateFormat**

        Specify a value to format the date and time for the $CLOSE\_TIME and $CREATE\_TIME tokens. For example, SiteAnalyzerFileHandler.dateFormat=yyyy.MM.dd-HH.mm.ss.

3.  Specify the interval to back up log files.

    -   **SiteAnalyzerFileHandler.minutesPerLogFile**

        Sets the backup interval in minutes. Specify a value between 1 and 60.

    -   **SiteAnalyzerFileHandler.hoursPerLogFile**

        Sets the backup interval in hours. Specify a value between 1 and 24.

    -   **SiteAnalyzerFileHandler.daysPerLogFile**

        Sets the backup interval in days. Specify any value that indicates the number of days between backups.

    **Notes:**

    -   If you enable more than one date format interval, the smallest interval is used.
    -   If you specify 60 minutes, the file is backed up after 60 minutes. If you specify 1 hour, the file is backed up on the next full hour; for example, 01:00, 02:00 and so on. If you specify an interval of days, the file is backed up at 24:00 \(midnight\). For more information about the date format, see the Javadoc documentation for java.text.SimpleDateFormat.
4.  Activate loggers as appropriate: To activate a logger, select the logger that you plan to activate and set the value to true.

    For example, SiteAnalyzerSessionLogger.isLogging=true.

    For a list of available loggers, refer to *Analysis loggers reference*.

    **Tip:** Site analysis logging can affect performance. For this reason, you might choose to disable loggers when necessary. To disable loggers, set the value to false.

5.  Restart HCL Digital Experience.


**Parent topic:**[Logging and analyzing server side site data](../admin-system/adsaconf.md)

**Related information**  


[Setting service configuration properties](../admin-system/adsetcfg.md)

