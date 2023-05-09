# Tuning Persistence – Database

To enable Session Persistence to Database, a data source with non-XA JDBC driver must be created. We
also configured the DB2 Session Database with 32K page size to optimize performance for writing large
amounts of data to the database. For details on configuring tablespaces and page sizes for the session
database, see the WebSphere Application Server Info Center.

## Tuning via the Integrated Solutions Console

### Session Configuration

#### Session Storage
The default of sessions kept in memory is 1,000. For loaded systems, this number should be large enough to cover the expected working set of active sessions. Use PMI to monitor your session count and adjust accordingly.

**How to Set** 

In the WebSphere Integrated Solutions Console
Servers -> Server Types -> WebSphere application servers -> WebSphere_Portal -> Container Settings -> Session management

Set `Maximum in-memory session count` to the desired value. For performance benchmarks, `40000` sessions were kept in memory.

#### Write Frequency

The frequency at which sessions are replicated to other cluster nodes can be customized. For performance benchmarks, `Very high` was used.

**How to Set** 
In the WebSphere Integrated Solutions Console
Servers -> Server Types -> WebSphere application servers -> WebSphere_Portal -> Container Settings:
Session Management -> Distributed environment settings -> Tuning parameters

Change the Write frequency to the desired value.

#### Session Database

**How to Set** 
In the WebSphere Integrated Solutions Console
Servers -> Server Types -> WebSphere application servers -> WebSphere_Portal -> Container Settings:
Session Management -> Distributed environment settings -> Database settings

- Set the Datasource JNDI name to the correct name for the session datasource (ex jdbc/sessions).
- Set the User ID and Password to the correct values for the session database.
- Set the DB2 row size to ROW_SIZE_32KB and ensure the Table space name is set to the correct
value. The DB2 tablespace should be configured to support the row size specified.
- Uncheck (disable) Use multi row schema.

#### Data Source Configuration
Ensure that the data source configured for the session database has a large enough maximum pool size to support the required load. For performance benchmarks a maximum size of `35` was used.

Also ensure that the prepared statement cache size is configured for the data source. For performance benchmarks a size of `15` was used.

See the **Data Source Tuning section for information on how to set these values**.

## Operating System Tuning

### AIX Kernel
In addition to the tuning documented for the base Portal AIX kernel, we set the following AIX parameter to increase max number of processes allowed per user to handle 10 cluster nodes’ database connections to the session database server. The default of 128 is too low.
`chdev -l sys0 -a maxuproc=’1024’`

To display the current setting:
`lsattr -El sys0 | grep max`

### AIX Enable MTU_Bypass
In addition to the tuning documented for the base Portal AIX kernel, we set the following AIX parameter to enable the Jumbo frames feature (mtu_bypass).

To change the value:
`chdev -l en1 -a mtu_bypass=on`

### Database Concurrent IO
Our session database is created on a JFS2 file system, to improve throughput, we mount the
database using concurrent I/O option.
mount -c cio /sessiondb

### Session Database Tuning
We use IBM DB2 database server for persisting the sessions. We applied the following tunings to our dedicated session database server,

db2set DB2_USE_ALTERNATE_PAGE_CLEANING=ON
db2set DB2_RR_TO_RS=YES
db2set DB2_PARALLEL_IO=*

db2 “update db cfg for <sess80> using locklist 5120”
db2 “update db cfg for <sess80> using maxlocks 80”
db2 “update db cfg for <sess80> using dbheap 4800”
db2 “update db cfg for <sess80> using num_iocleaners 8”
db2 “update db cfg for <sess80> using num_ioservers 8”
db2 “update db cfg for <sess80> using logbufsz 256”
db2 “update db cfg for <sess80> using logfilsiz 12288”
db2 “update db cfg for <sess80> using logprimary 40”
db2 “update db cfg for <sess80> using logsecond 30”
db2 “update db cfg for <sess80> using avg_appls 5”
db2 “update db cfg for <sess80> using applheapsz 4096”
db2 “update db cfg for <sess80> using app_ctl_heap_sz 1024”
db2 “update db cfg for <sess80> using stmtheap 32768”