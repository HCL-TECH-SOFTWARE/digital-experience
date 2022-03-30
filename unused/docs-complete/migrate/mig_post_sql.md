# Updating the isolation level for SQL server databases 

If you are using an SQL Server, you must update the isolation level of your release, community, customization, and JCR databases to improve concurrency and efficiency of the databases.

Ensure that the database is not in use.

1.  Run the command: ALTER DATABASE database\_name SET READ\_COMMITTED\_SNAPSHOT ON;.


**Parent topic:**[Database tasks ](../migrate/mig_post_dbtasks.md)

