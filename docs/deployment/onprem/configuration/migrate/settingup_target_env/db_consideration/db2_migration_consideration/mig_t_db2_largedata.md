# Preparing DB2 for large data sets migration

If you use DB2® and have a large amount of content in the JCR repository \(for example, Web Content Manager data\), prepare the DB2 for migration. You must update several settings that are related to performance.

These values are suggested starting points and were used successfully in HCL testing. Exact values can vary, depending on the size of the data set. Consult your database administrator as needed.

**Important:** The settings described here are optimized for migration rather than day-to-day operation. After migration completes successfully, you can revert any changes back to the values in use before migration.

1.  Update the lock list size for the database. A value of at least 10000 is recommended.

2.  Disable all automatic maintenance on the database, including health monitoring.

3.  Increase the package cache size. A value of at least 24000 is recommended.

4.  Increase the statistics heap size. A value of at least 16384 is recommended.

5.  Perform a complete reorganization of the tables and indexes on the database that is used for migration.

6.  Collect detailed statistics with distribution for all tables and indexes.

    **Note:** While the migration is in progress, it might be necessary to collect detailed statistics to continue to allow the database optimizer to select efficient access plans.



