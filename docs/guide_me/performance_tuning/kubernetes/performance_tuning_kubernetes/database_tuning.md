# Database Tuning

Multiple database domains are used to hold information in HCL Portal and Web Content Manager 9.5. The databases and related domains supported by Portal are:

1. Release (release domain). This is the primary database domain used by the base Portal scenario.
2. Customization (customization domain). This database receives some light traffic in our scenarios.
3. Community (community domain). This database receives some light traffic in our scenarios.
4. JCR (JCR domain). JCR database is used heavily in WCM (Web Content Management) Scenario. This database receives light traffic in all other scenarios measured in our Benchmark report.
5. Likeminds database, used for Likeminds enabled systems. This database is not used in the scenarios measured for the performance benchmarks.
6. Feedback database, used by the feedback subsystem. This database is not used in the scenarios measured for the performance benchmarks.

For more information on creating databases, see [Database Management Systems](../../../../deployment/manage/db_mgmt_sys/index.md).

For more information on supported databases, see [Databases](../../../../get_started/system_requirements/kubernetes/databases.md).

For more information on database domains, see [Shared database domains](../../../../get_started/plan_deployment/traditional_deployment/database_consideration/db_domains_shared.md).

For base Portal the Release domain is the primary database being exercised.

## DB2 Tuning

HCL Portal uses database servers for core functionality. In our measurement environment, we used a DB2 database server for the Portal application. The LDAP server, IBM Security Verify Directory (ISVD) also included a DB2 database as a repository, but that database is configured only indirectly through the LDAP administration utilities.

We recommend using a remote database server for high throughput workloads. For our measurements we used IBM DB2 Enterprise Edition 11.5 as our database server.

We built six separate databases within one database server to house the tables and data needed to support each domain. All databases were placed in a single server instance.

## Linux, Unix & Windows (LUW)

Two of the database attributes, which DB2 relies upon to perform optimally, are the database catalog statistics and the physical organization of the data in the tables. Catalog statistics should be recomputed periodically during the life of the database, particularly after periods of heavy data modifications (inserts, updates, and deletes) such as a population phase. Due to the heavy contention of computing these statistics, we recommend performing this maintenance during off hours, periods of low demand, or when the Portal is offline. The DB2 runstats command is used to count and record the statistical details about tables, indexes and columns. We have used two techniques in our environment to recompute these statistics.

**Running DB2 `RUNSTATS` Command**

```sql
db2 runstats on table tableschema.tablename on all columns with distribution on all columns and sampled detailed indexes all allow write access
```

These options allow the optimizer to determine optimal access plans for complex SQL. A simpler, more convenient technique for recomputing catalog statistics is: 

```sql
db2 reorgchk update statistics on table all
```

Not only does this command count and record some of the same catalog statistics, it also produces a report that can be reviewed to identify table organization issues. However, we have found instances where this produces insufficient information for the optimizer to select an efficient access plan for complex SQL, particularly for queries of the JCR database.

We have determined a technique that has the same convenience of the reorgchk command and provides the detailed statistics preferred by the optimizer.

**Generating and Running `RUNSTATS` Commands in DB2**

1. Generate the `runstats.db2` file with the following command:

    db2 -x -r "runstats.db2" "select rtrim(concat('runstats on table',concat(rtrim(tabSchema),concat('.',concat(rtrim(tabname),' on all columns with distribution on all columns and sampled detailed indexes all allow write access'))))) from syscat.tables where type='T'"

2. Execute the `runstats.db2` file:

    db2 -v -f "runstats.db2"
    

The first command is used to create a file, runstats.db2, which contains all of the runstats commands for all of the tables. The second command uses the DB2 command processor to run these commands. These commands can be run on each Portal database and are recommended to run on the JCR and release database data population after significant content population or changes.

To determine which tables might benefit from reorganization, we use the command:

db2 reorgchk current statistics on table all > "reorgchk.txt"

For those tables which require reorganization, we use the following command to reorganize the table based upon its primary key:

db2 reorg table tableschema.tablename

You should also ensure that your database servers have adequate numbers of hard disks. Multiple disks allow for better throughput by the database engine. Throughput may also be improved by separating the database logs onto separate physical devices from the database.

You should ensure that the database parameter MaxAppls is greater than the total number of connections for both the data sources and the session manager for all WebSphere Portal application server instances. If MaxAppls is not large enough, you will see error messages in the Portal logs. Remember that there are multiple data sources for Portal, so this setting needs to be large enough to accommodate the maximum JDBC pools size for all data sources on all cluster nodes.

You should use System Managed Storage (SMS) for temporary tablespaces to benefit complex SQL which require temporary tables to compute their result sets. This saves time in buffer writes and improves disk utilization.

The maintenance tasks and practices mentioned here were found to be critical to the performance and correct operation of HCL DX Portal and Web Content Manager in our lab environment. Additional database maintenance and tuning may be needed in your production environments.

## Oracle Tuning

WebSphere Portal uses database servers for core functionality. In this measurement environment, we used Oracle database server for the Portal application. The LDAP server, IBM Security Verify Directory (ISVD) included a DB2 database as a repository.

### Planning for Oracle Enterprise Edition

On Oracle, we built a single database and created Oracle users to own the tables and data needed to support each domain.

We recommend that you refer to the Oracle Administrator’s Guide to help you make informed database design decisions. Here are the key settings in our Oracle database.

- For better management and performance of database storage, Oracle-Managed Files are used for database, redo logs, and control files.
- Database block size: 8k
- The following tablespace sizing was required to support a Portal with 100,000 authenticated users, approximately 1,000 pages and 50,000 WCM content items with a load generally consisting of database read operations.

- **SYSAUX:** 1908MB
- **SYSTEM:** 805MB
- **TEMP:** 1MB
- **UNDOTBS:** 10MB
- **USERS:** 561MB
- **ICMLFQ32:** 4711MB
- **ICMLNF32:** 1MB
- **ICMSFQ04:** 230MB
- **ICMVFQ04:** 1MB
- **Redo log groups:** 500MB each

### Oracle Enterprise Edition Parameter Tuning

Database performance is very important for obtaining good overall performance from WebSphere Portal.

The following table shows a list of tuning applied on our Oracle database server with the alter system command. Additional database tuning might be needed in your production environments. For further information on Oracle database tuning, refer to [Oracle Performance Tuning Guide](https://docs.oracle.com/en/database/oracle/oracle-database/23/tdppt/index.html){target="_blank"}.

**Command used:** alter system set &lt;parameter&gt; scope=spfile;

Oracle Database Tuning

| Parameter | Value |
| --- | --- |
| Sessions | 1148 |
| sga_target | 4800M |
| pga_aggregate_target | 1595M |
| Processes | 750 |
| open_cursors | 1500 |
| db_files | 1024 |

### Oracle Database Maintenance

Optimizer statistics are a collection of data about the database and the objects in the database. These statistics are used by the query optimizer to choose the best execution plan for each SQL statement. Because the objects in a database can be constantly changing, statistics must be regularly updated so that they accurately describe these database objects, particularly after periods of heavy data modifications (inserts, updates, and deletes) such as a population phase. We have used the following commands in our environment to recompute these statistics:

execute dbms_stats.gather_database_stats(dbms_stats.auto_sample_size, method_opt=>'FOR ALL INDEXED COLUMNS SIZE AUTO',cascade=>TRUE);

execute dbms_stats.gather_schema_stats(ownname=> '&lt;JCRUSR&gt;', cascade=> TRUE); 

where &lt;JCRUSR&gt; is the schema owner of the JCR database objects.

## SQL Tuning

### SQL Server Database Maintenance

Update the SQL Server statistics for Portal, and JCR databases by opening SQL Server Management Studio, selecting New Query, and running the following query:

use &lt;db_name&gt; exec sp_updatestats @resample='resample';