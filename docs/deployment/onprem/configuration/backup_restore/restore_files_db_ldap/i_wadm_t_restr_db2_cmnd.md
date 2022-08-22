# Using the DB2 RESTORE DATABASE command

Use the RESTORE DATABASE command of IBM DB2 Universal Database Enterprise Server Edition as an alternative to the DB2 Restore wizard to restore the databases that you backed up.

To replace an existing WPSDB database with the backup copy using the RESTORE DATABASE command, follow these steps:

1.  Stop all application servers connected to the WPSDB database.

2.  Determine which backup copy to use for the restoration by looking at the timestamp of the available backup files.

3.  Run the RESTORE DATABASE command:

    This example refers to the WPSDB database, the default name for the Release database domain. RESTORE DATABASE WPSDB FROMbackup\_directory\_path TAKEN AT timestamp REPLACE EXISTING

4.  Roll the restored database forward by choosing the same point in time for the database.

    Consider these factors:

    -   The time needs to be expressed as an ISO timestamp string in this format YYYY-MM-DD-HH.MI.SS.NNNNNN.
    -   The time should be shortly after the completion of the backup.
    -   The best way to determine this time is to use **Show History** in the Task Center to review the output saved for the backup commands.
    -   Alternately, you can use the modification time of the saved backup file to determine when the backup task completed.
    For example, use the following roll-forward command when the last backup completed at 1:23 AM:ROLLFORWARD DATABASE WPSDB TO 2007-06-25-01.23.00.000000 USING LOCAL TIME AND COMPLETE



