# Databases

This article lists the database versions and platforms that are tested and supported for HCL Digital Experience (DX) 9.5 Kubernetes deployments.

#### Prerequisites

All supported database platforms must meet the following requirements:

- Extended Architecture (XA) transactions are enabled with a two-phase commit (2PC) protocol. 
- The Distributed Transaction Coordinator (DTC) is enabled.

|Supported software|Supported software minimum|Product minimum|
|-----------|------------------|-----|
|Apache Derby|10.11*<br/>|9.5|
|DB2 on Amazon Relational Database Service|11.5** and later maintenance releases|9.5|
|DB2 Published Cumulative Special Build (CSB)|12.1.0 and later maintenance releases|9.5|
|DB2 Standard Edition|12.1.0|9.5|
|DB2 Standard and Advanced Edition|11.5** and later maintenance releases|9.5|
|Microsoft SQL Server Enterprise and Standard Edition|2017, 2019, 2022, and later maintenance releases|9.5|
|Oracle Database 19c|19c and later maintenance releases|9.5|
|Oracle Database 21c|21c and later maintenance releases|9.5|
|Oracle on Amazon Relational Database Service|12.2.0.1.0 and later maintenance releases|9.5|
|Oracle on Amazon Relational Database Service|21c and later maintenance releases|9.5|
|SQL Server on Amazon Relational Database Service|2022 and later maintenance releases|9.5|

!!! note "Important"
    - Apache Derby is not supported in production environments.
    - DB2 supports the DB2 pureScale component.
