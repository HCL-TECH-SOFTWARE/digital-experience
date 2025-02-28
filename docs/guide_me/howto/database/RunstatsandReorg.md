# Recommended DB2 RUNSTATS and REORG commands from DX Tuning Guide

## Applies to

> HCL Digital Experience 8.5 and higher

## Introduction

The [DB2 RUNSTATS](https://www.ibm.com/docs/en/db2/11.5?topic=commands-runstats){target="_blank"} command updates statistics in the DB2 system catalog about the characteristics of a table, associated indexes, or statistical views.
The [REORG TABLE](https://www.ibm.com/docs/en/db2/11.5?topic=commands-reorg-table){target="_blank"} command reorganizes a table by reconstructing the rows to eliminate fragmented data, and by compacting information.  
You can use both commands to optimize the DB2 performance. This document provides information that you can use to optimize the DB2 database that might be used in an HCL Digital Experience environment.

## Instructions

### DB2 RUNSTATS on wide table only

```text
DB2 RUNSTATS ON TABLE JCR.ICMUTSWIDE0 FOR INDEXES ALL
```

```text
DB2 RUNSTATS ON TABLE JCR.ICMUTSWIDE0 FOR INDEXES <indexname>  
```

Where `<indexname>` need to be replaced by the real index name.  

If the command fails, you must drop and recreate the index.  

### DB2 RUNSTATS command for all tables in the JCR schema

```text
 DB2 RUNSTATS ON TABLE JCR. ON ALL COLUMNS WITH DISTRIBUTION ON ALL COLUMNS EXCLUDING XML COLUMNS AND SAMPLED DETAILED INDEXES ALL ALLOW WRITE ACCESS ;
```

### DB2 RUNSTATS commands from the tuning guide  

```text
 db2 -x -r "runstats.db2" "select rtrim(concat('runstats on table',concat(rtrim(tabSchema),concat('.',concat(rtrim(tabname),' on all columns with distribution on all columns and sampled detailed indexes all allow write access'))))) from syscat.tables where type='T'"  
```

```text
 db2 -v -f "runstats.db2"`  
```

The first command is used to create the runstats.db2 file which contains all DB2 RUNSTATS commands for all tables.  
The second command uses the DB2 command processor to run these commands. You can run these commands on each DX database.  
It is recommended to run these commands on the JCR and release database data population after significant content population or changes.  

### DB2 REORGCHK command from the tuning guide

We have determined a technique that has the same convenience of the [REORGCHK](https://www.ibm.com/docs/en/db2/11.5?topic=commands-reorgchk){target="_blank"} command and provides the detailed statistics preferred by the optimizer.

- To determine which tables may benefit from reorganization, run the command:  

    ```text
     DB2 REORGCHK CURRENT STATISTICS ON TABLE ALL > "reorgchk.txt"  
    ```

- For tables that require reorganization, use the following command to reorganize the table based upon its primary key

    ```text
     DB2 REORG TABLE tableschema.tablename`  
    ```
