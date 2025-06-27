# Databases

This topic details the database versions and platforms tested and supported by specific HCL Digital Experience (DX) 9.5 Kubernetes deployments.

!!!note
    All databases require Extended Architecture (XA) transactions using a two-phase commit protocol (2PC) and Distributed Transaction Coordinator (DTC) to be enabled.

|Supported software|Supported software minimum|Product minimum|
|-----------|------------------|-----|
|Apache Derby|10.11*<br/>|9.5|
|DB2 on Amazon Relational Database Service|11.5** and later maintenance releases|9.5|
|DB2 Published Cumulative Special Build (CSB)|12.1.0 and later maintenance releases|9.5|
|DB2 Standard and Advanced Edition|11.5** and later maintenance releases|9.5|
|Microsoft SQL Server Enterprise and Standard Edition|2017, 2019, 2022, and later maintenance releases|9.5|
|Oracle Database 19c|19c and later maintenance releases|9.5|
|Oracle on Amazon Relational Database Service|12.2.0.1.0 and later maintenance releases|9.5|
|Oracle on Amazon Relational Database Service|21c and later maintenance releases|9.5|

**Notes:**

\* Apache Derby is not supported in a product environment.

\*\* DB2 includes support for the DB2 pureScale component.
