# How to determine Portal database size when using DB2

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

This article provides instructions for determining the size of the portal databases.

## Instructions

The most common/default installation options taken are to create two Portal Databases: Release and JCR

Typically these databases have the schema names: WPREL and WPJCR

To determine the size of these databases on a Windows server, open a DB2 command window, then enter:

C:\Program Files\IBM\SQLLIB\BIN>db2 connect to WPREL user yourUserid using yourPassword
C:\Program Files\IBM\SQLLIB\BIN>db2 "CALL GET_DBSIZE_INFO(?, ?, ?, -1)"

**Value of output parameters for WPREL**
--------------------------

```text
Parameter Name : SNAPSHOTTIMESTAMP
Parameter Value : 2016-09-07-12.12.14.623000

Parameter Name : DATABASESIZE
Parameter Value : 346398720

Parameter Name : DATABASECAPACITY
Parameter Value : 118578155520

Return Status = 0
```

C:\Program Files\IBM\SQLLIB\BIN>db2 disconnect wprel
DB20000I The SQL DISCONNECT command completed successfully.

C:\Program Files\IBM\SQLLIB\BIN>db2 connect to WPJCR user yourUserid using yourPassword
C:\Program Files\IBM\SQLLIB\BIN>db2 "CALL GET_DBSIZE_INFO(?, ?, ?, -1)"

**Value of output parameters for WPJCR**
--------------------------

```text
Parameter Name : SNAPSHOTTIMESTAMP
Parameter Value : 2016-09-07-12.07.43.052000

Parameter Name : DATABASESIZE
Parameter Value : 3045539840

Parameter Name : DATABASECAPACITY
Parameter Value : 121392439296

Return Status = 0
```

In the results above we see the size of the Release Database is 346398720 (346 Meg) and the size of the JCR Database is 3045539840 (3 Gig). Note this is for a Portal test server with limited content i.e. no web content libraries with a significant number of items.
