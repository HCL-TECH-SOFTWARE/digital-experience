# Update database statistics 

Statistics are information that is collected about the contents of the database tables and indexes. They are used by the cost-based optimizer in the database to influence the approach \(query plan\) that is used to run SQL queries. By collecting updated or new statistics, you provide the database optimizer the most up-to-date information about the tables and indexes. Therefore, the query execution plans are generated as efficiently as possible.

This information is important during migration because there are several tables and indexes that are created and populated during this process. The default statistical information can lead query plans that show degrading performance as the migration progresses and can carry into the runtime performance.

## JCR domain

Gather current statistics on all tables that are found in the JCR domain. If you are using DB2®, you must run reorgchk and runstats.

Run the statistics on all the columns in all tables and indexes. Gather at least a minimum level of sampling and distribution. Refer to your database documentation for details on updating statistics.

**Parent topic:**[DB2 database migration considerations ](../migrate/mig_pre_db2.md)

