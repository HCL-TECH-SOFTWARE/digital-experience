# DB2 database migration considerations

Database migration is one of the most time consuming portions of the migration process. If you are migrating from DB2®, review the following topics to improve the speed of the database migration process.

-   **[Update database statistics](mig_runstats.md)**  
Statistics are information that is collected about the contents of the database tables and indexes. They are used by the cost-based optimizer in the database to influence the approach (query plan) that is used to run SQL queries. By collecting updated or new statistics, you provide the database optimizer the most up-to-date information about the tables and indexes. Therefore, the query execution plans are generated as efficiently as possible.
-   **[Preparing DB2 for large data sets migration](mig_t_db2_largedata.md)**  
If you use DB2 and have a large amount of content in the JCR repository (for example, Web Content Manager data), prepare the DB2 for migration. You must update several settings that are related to performance.


