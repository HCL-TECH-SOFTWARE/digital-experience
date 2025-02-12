# How to improve HCL DX database performance on a IBM DB2 database?

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

If the portal database on HCL Digital Experience becomes huge it might be possible that some sql-queries taking more time to complete, which then ends up in hanging threads like:

```log
[Timestamp] 0000005c TimeoutManage I CWWTR0124I: When the timeout occurred the thread with which the transaction is, or was most recently, associated was Thread[WebContainer : 23,5,main]. The stack trace of this thread when the timeout occurred was:
java.net.SocketInputStream.socketRead0(Native Method)
java.net.SocketInputStream.socketRead(SocketInputStream.java:127)
java.net.SocketInputStream.read(SocketInputStream.java:182)
java.net.SocketInputStream.read(SocketInputStream.java:152)
com.ibm.db2.jcc.t4.y.b(y.java:230)
com.ibm.db2.jcc.t4.y.c(y.java:342)
com.ibm.db2.jcc.t4.y.c(y.java:455)
com.ibm.db2.jcc.t4.y.v(y.java:1230)
com.ibm.db2.jcc.t4.ab.d(ab.java:108)
com.ibm.db2.jcc.t4.p.c(p.java:44)
com.ibm.db2.jcc.t4.av.j(av.java:162)
com.ibm.db2.jcc.am.lc.an(lc.java:2300)
com.ibm.db2.jcc.am.ld.a(ld.java:4822)
com.ibm.db2.jcc.am.ld.b(ld.java:4338)
com.ibm.db2.jcc.am.ld.bd(ld.java:787)
com.ibm.db2.jcc.am.ld.executeQuery(ld.java:752)
com.ibm.ws.rsadapter.jdbc.WSJdbcPreparedStatement.pmiExecuteQuery(WSJdbcPreparedStatement.java:1229)
com.ibm.ws.rsadapter.jdbc.WSJdbcPreparedStatement.executeQuery(WSJdbcPreparedStatement.java:747)
```

## Instructions

Before tuning any settings HCL highly recommends to further debug the performance problem. That can be done by executing the following db2 commands:

```log
db2 "call monreport.dbsummary(300)"
db2 "call monreport.pkgcache(30)"
db2evmon -path /tmp > sqltrace.txt
db2 get db cfg
db2support . -d <dbname> -c -g -s -o db2support_primary.zip
```

Furthermore HCL suggests to enable the following trace-string on HCL Digital Experience server side:

`*=info:WAS.j2c=all:RRA=all:Transaction=all`

Please trace with 10 historical trace-files and a trace-file size of 100 MB.

With the detailed traces it is possible to determine the exact sql-queries that are causing the problem. A common problem of such hanging threads is that the database is not optimized right now.

There is a way to make the database "reopt all queries" without adding them individually to a configuration file. This is achieved by using the DB2Binder utility for the connection. Example of the command for further reference (performed on the db2 server):

`/home/db2inst1/sqllib/java/jdk64/jre/bin/java -cp ~/sqllib/java/db2jcc4.jar com.ibm.db2.jcc.DB2Binder -url jdbc:db2://localhost:50000/WPSDB -user db2inst1 -password XXXXX -collection NULLID -action replace -reopt ALWAYS -blocking ALL`

Executing the command on db2 server side can help to get out a much better performance.
