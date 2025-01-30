# Recommended Runstats and Reorg commands from Portal Tuning Guide

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

The DB2 RUNSTATS command updates statistics in the DB2 system catalog about the characteristics of a table, associated indexes, or statistical views.
The REORG TABLE command reorganizes a table by reconstructing the rows to eliminate fragmented data, and by compacting information.  
Both commands can be used to optimize the DB2 performance. This document provides information that can be used to optimize the db2 database that might be used in an HCL Digital Experience environment.

## Instructions

Runstats on wide table only:  

db2 RUNSTATS ON TABLE JCR.ICMUTSWIDE0 for indexes all  

db2 RUNSTATS ON TABLE JCR.ICMUTSWIDE0 for index indexname.  

If it fails we need to drop and recreate the index.  

Portal development recommends the following Runstats command for all tables in the JCR schema:  

RUNSTATS ON TABLE JCR. ON ALL COLUMNS WITH DISTRIBUTION ON ALL COLUMNS EXCLUDING XML COLUMNS AND SAMPLED DETAILED INDEXES ALL ALLOW WRITE ACCESS ;  

From the tuning guide:  

db2 -x -r "runstats.db2" "select rtrim(concat('runstats on table',concat(rtrim(tabSchema),concat('.',concat(rtrim(tabname),' on all columns with distribution on all columns and sampled detailed indexes all allow write access'))))) from syscat.tables where type='T'"  

db2 -v -f "runstats.db2"  

We have determined a technique that has the same convenience of the reorgchk command and provides the detailed statistics preferred by the optimizer.  

db2 -x -r "runstats.db2" "select rtrim(concat('runstats on table',concat(rtrim(tabSchema),concat('.',concat(rtrim(tabname),' on all columns with distribution on all columns and sampled detailed indexes all allow write access'))))) from syscat.tables where type='T'"  

db2 -v -f "runstats.db2"  

The first command is used to create a file, runstats.db2, which contains all of the runstats commands for all of the tables. The second command uses the db2 command processor to run these commands. These commands can be run on each Portal database and is recommended to run on the JCR and
release database data population after significant content population or changes.  

To determine which tables might benefit from reorganization, we use the command:  

db2 reorgchk current statistics on table all > "reorgchk.txt"  

For those tables which require reorganization, we use the following command to reorganize the table based upon its primary key:  

db2 reorg table tableschema.tablename  
