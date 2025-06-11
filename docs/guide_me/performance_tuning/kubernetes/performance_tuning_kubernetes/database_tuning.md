#  Database Tuning


HCL Portal and Web Content Manager 9.5 use **multiple database domains** to store and manage various types of data. The primary databases and their usage are:


1. **Release** (release domain):  
   The main database domain used by the base Portal scenario.


2. **Customization** (customization domain):  
   Receives light traffic in typical scenarios.


3. **Community** (community domain):  
   Also receives light traffic in our benchmark scenarios.


4. **JCR** (JCR domain):  
   Heavily used in Web Content Management (WCM) scenarios.  
   Receives light traffic in other measured benchmark scenarios.


5. **Likeminds** database:  
   Used for Likeminds-enabled systems. Not utilized in the performance benchmark scenarios.


6. **Feedback** database:  
   Used by the feedback subsystem. Also not used in the benchmarked scenarios.


---


##  Learn More


- [Database Management Systems](../../../../deployment/manage/db_mgmt_sys/index.md) — Creating and configuring databases  
- [Supported Databases](../../../../get_started/system_requirements/kubernetes/databases.md)  
- [Shared Database Domains](../../../../get_started/plan_deployment/traditional_deployment/database_consideration/db_domains_shared.md)


---


For the **base Portal configuration**, the **Release domain** is the primary database in use.





## DB2 Tuning

HCL Portal relies on database servers to support its core functionality. In our test environment, a DB2 database server was used for the Portal application. The LDAP server—IBM Security Verify Directory (`ISVD`)—also utilized a DB2 database as its repository; however, this database is configured indirectly through the LDAP administration tools.

We recommend using a remote database server for high throughput workloads. For our measurements we used IBM DB2 Enterprise Edition 11.5 as our database server.

We built six separate databases within one database server to house the tables and data needed to support each domain. All databases were placed in a single server instance.

## Linux, Unix & Windows (LUW)

Two of the database attributes, which DB2 relies upon to perform optimally, are the database catalog statistics and the physical organization of the data in the tables. Catalog statistics should be recomputed periodically during the life of the database, particularly after periods of heavy data modifications (inserts, updates, and deletes) such as a population phase. Due to the heavy contention of computing these statistics, we recommend performing this maintenance during off hours, periods of low demand, or when the Portal is offline. The DB2 `RUNSTATS` command is used to count and record the statistical details about tables, indexes and columns. We have used two techniques in our environment to recompute these statistics.

**Running DB2 `RUNSTATS` Command**

```
db2 runstats on table tableschema.tablename on all columns with distribution on all columns and sampled detailed indexes all allow write access
```

These options allow the optimizer to determine optimal access plans for complex SQL. A simpler, more convenient technique for recomputing catalog statistics is: 

```
db2 reorgchk update statistics on table allƒ√
```

This command not only counts and records catalog statistics but also generates a report that can help identify table organization issues. However, in our experience, it sometimes provides insufficient information for the optimizer to choose an efficient access plan for complex SQL queries—especially those involving the JCR database.



We have determined a technique that has the same convenience of the `reorgchk` command and provides the detailed statistics preferred by the optimizer.

**Generating and Running `RUNSTATS` Commands in DB2**

1. Generate the `runstats.db2` file with the following command:

```
    db2 -x -r "runstats.db2" "select rtrim(concat('runstats on table',concat(rtrim(tabSchema),concat('.',concat(rtrim(tabname),' on all columns with distribution on all columns and sampled detailed indexes all allow write access'))))) from syscat.tables where type='T'"
```

2. Execute the `runstats.db2` file:
```
    db2 -v -f "runstats.db2"
```    

The first command generates a file named `runstats.db2` that contains `RUNSTATS` commands for all relevant tables. The second command executes these statements using the DB2 command processor. It is recommended to run these commands on each Portal database—particularly the JCR and Release databases—after significant content population or structural changes.
To determine which tables might benefit from reorganization, we use the command:
```
db2 reorgchk current statistics on table all > "reorgchk.txt"
```

For those tables which require reorganization, we use the following command to reorganize the table based upon its primary key:
```
db2 reorg table tableschema.tablename
```

You should also ensure that your database servers have adequate numbers of hard disks. Multiple disks allow for better throughput by the database engine. Throughput may also be improved by separating the database logs onto separate physical devices from the database.

You should ensure that the database parameter `MaxAppls` is greater than the total number of connections for both the data sources and the session manager for all WebSphere Portal application server instances. If `MaxAppls` is not large enough, you will see error messages in the Portal logs. Remember that there are multiple data sources for Portal, so this setting needs to be large enough to accommodate the maximum JDBC pools size for all data sources on all cluster nodes.

You should use System Managed Storage (SMS) for temporary tablespaces to benefit complex SQL which require temporary tables to compute their result sets. This saves time in buffer writes and improves disk utilization.

The maintenance tasks and practices outlined here were essential to achieving optimal performance and reliable operation of HCL DX Portal and WCM in our lab environment. However, additional database maintenance and tuning may be required to meet the specific demands of your production environment.

## Oracle Tuning

WebSphere Portal uses database servers for core functionality. In this measurement environment, we used Oracle database server for the Portal application. The LDAP server, IBM Security Verify Directory (ISVD) included a DB2 database as a repository.

### Planning for Oracle Enterprise Edition

On Oracle, we built a single database and created Oracle users to own the tables and data needed to support each domain.

We recommend that you refer to the Oracle Administrator’s Guide to help you make informed database design decisions. Here are the key settings in our Oracle database.

- For better management and performance of database storage, Oracle-Managed Files are used for database, redo logs, and control files.
- **Database block size:** `8k`
- The following tablespace sizing was required to support a Portal with 100,000 authenticated users, approximately 1,000 pages and 50,000 WCM content items with a load generally consisting of database read operations.

# Tablespace Sizes


| Tablespace     | Size          |
| :------------- | ------------: |
| **SYSAUX**     | 1908 MB       |
| **SYSTEM**     | 805 MB        |
| **TEMP**       | 1 MB          |
| **UNDOTBS**    | 10 MB         |
| **USERS**      | 561 MB        |
| **ICMLFQ32**   | 4711 MB       |
| **ICMLNF32**   | 1 MB          |
| **ICMSFQ04**   | 230 MB        |
| **ICMVFQ04**   | 1 MB          |
| **Redo Logs**  | 500 MB each   |




### Tuning Oracle Enterprise Edition Parameter

Database performance is very important for obtaining good overall performance from WebSphere Portal.

The following table shows a list of tuning applied on our Oracle database server with the alter system command. Additional database tuning might be needed in your production environments. For further information on Oracle database tuning, refer to [Oracle Performance Tuning Guide](https://docs.oracle.com/en/database/oracle/oracle-database/23/tdppt/index.html){target="_blank"}.

**Command used:** `ALTER SYSTEM SET <parameter> SCOPE=SPFILE;`

---

## Oracle Database Tuning

The following configuration parameters were used for tuning the Oracle database:


| Parameter              | Value  |
| :--------------------- | :----- |
| **Sessions** | 1148   |
| **`sga_target`** | 4800M  |
| **`pga_aggregate_target`** | 1595M  |
| **Processes** | 750    |
| **`open_cursors`** | 1500   |
| **`db_files`** | 1024   |




### Oracle Database Maintenance

Optimizer statistics are a collection of data about the database and the objects in the database. These statistics are used by the query optimizer to choose the best execution plan for each SQL statement. Because the objects in a database can be constantly changing, statistics must be regularly updated so that they accurately describe these database objects, particularly after periods of heavy data modifications (inserts, updates, and deletes) such as a population phase. We have used the following commands in our environment to recompute these statistics:

```sql
EXECUTE dbms_stats.gather_database_stats(
    dbms_stats.auto_sample_size,
    method_opt => 'FOR ALL INDEXED COLUMNS SIZE AUTO',
    cascade => TRUE
);

EXECUTE dbms_stats.gather_schema_stats(
    ownname => '<JCRUSR>',
    cascade => TRUE
);
```
## SQL Tuning

### SQL Server Database Maintenance

Update the SQL Server statistics for Portal and JCR databases by opening **SQL Server Management Studio**, selecting **New Query**, and running the following query:

```
USE <db_name>
EXEC sp_updatestats @resample = 'resample';
```
