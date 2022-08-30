# Database considerations for backup and restore

Before you back up HCL Portal databases, determine whether you need to perform offline or online backup, what your requirements are for storage capacity and backup frequency, and your preferred utility.

The backup method that you use depends on the type of deployment and the level of service that is being offered. Consider the following factors to determine whether to perform offline or online backup:

-   Small or pilot deployments, including deployments with intermittent use, are best served by performing offline backups.

    Offline backups require that you stop all active applications that are connected to the database. When you perform an offline backup, the backup file that is created is a complete copy of all data stored in the database. Therefore, each offline backup requires the same amount of storage space as the entire database.

    With small deployments, creating multiple full backups is more manageable than backing up larger systems with large amounts of data. Schedule regular downtime for backups during the organization's off-hours.

-   Large deployments, including deployments that require continuous availability, are best served by performing online backups.

    Online backups can be performed while the database remains in service running applications; therefore, online backups require planning.

    As part of its normal operation, databases create logs that record changes to the database. Databases created with default parameters create circular logs, in which data is eventually overwritten. Setting up online backups requires that you store the logs on disk as archive logs. An online backup uses checkpoints in the log to back up incremental data or data changes rather than making a complete copy of the data as the offline backup process does. Because the logs grow in number and size over time as the database is used, you must ensure that the required storage is available. You will also need to back up the archived logs periodically because they are used during the data recovery and restoration process.

    For online backups, decide when to use incremental backups or delta backups. Both types of online backup are more space-efficient than full backups.

    -   An incremental backup is a backup image that contains only portal pages that have been updated since the last full backup.
    -   A delta backup is a copy of all database data that has changed since the last successful backup.
    A typical scheme is to schedule a full online backup on the first day of the week, followed by delta backups on the next two days, an incremental backup on the following day, delta backups on the next two days, and concluding with an incremental backup on the last day of the week.


Next, consider the data storage requirements and the resources and utilities that are available to you:

-   Identify the resources needed for storing the backed-up database files.
-   Determine a strategy for archiving the backed-up database files. For example, you may want to save a weekly full backup to tape and store the tape offsite.
-   Decide which backup utilities to use.

    You can use IBM® Tivoli® Storage Manager to automate database backups and to organize and maintain the database backup files.

    You can also use tools and commands provided by your database to manage the backup procedures.

    **Note if using DB2:** For scheduling backup scripts, you can use either the DB2® Backup Wizard or the DB2 Task Center.

    -   The Backup Wizard provides a simple, step-by-step user interface for configuring backup options, selecting a storage location for backup data files, and scheduling the backup.
    -   The Task Center is an administrative component that allows you to create and schedule scripted functions.


