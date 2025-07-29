# How to Determine portal database size when using DB2


## Applies to


> HCL Digital Experience 8.5 and later


## Introduction


This article describes how to determine the size of your portal databases when using DB2.


## Overview


A typical installation creates the following portal databases:


- Release database (`WPREL`)
- JCR database (`WPJCR`)

The steps below show how to check the size of these databases on a Windows server.


## Steps


1. Open a DB2 command window.


2. Connect to the Release database (`WPREL`):


    ```cmd
    db2 connect to WPREL user <yourUserid> using <yourPassword>
    ```

3. Run the following command to retrieve the database size:


    ```cmd
    db2 "CALL GET_DBSIZE_INFO(?, ?, ?, -1)"
    ```

4. Review the output:


    ```text
    Parameter Name  : SNAPSHOTTIMESTAMP
    Parameter Value : 2016-09-07-12.12.14.623000


    Parameter Name  : DATABASESIZE
    Parameter Value : 346398720


    Parameter Name  : DATABASECAPACITY
    Parameter Value : 118578155520


    Return Status = 0
    ```

5. Disconnect from the Release database:


    ```cmd
    db2 disconnect WPREL
    ```

6. Connect to the JCR database (`WPJCR`):


    ```cmd
    db2 connect to WPJCR user <yourUserid> using <yourPassword>
    ```

7. Run the same command:


    ```cmd
    db2 "CALL GET_DBSIZE_INFO(?, ?, ?, -1)"
    ```

8. Review the output:


    ```text
    Parameter Name  : SNAPSHOTTIMESTAMP
    Parameter Value : 2016-09-07-12.07.43.052000


    Parameter Name  : DATABASESIZE
    Parameter Value : 3045539840


    Parameter Name  : DATABASECAPACITY
    Parameter Value : 121392439296


    Return Status = 0
    ```

9. Disconnect from the JCR database:


    ```cmd
    db2 disconnect WPJCR
    ```

!!! note
    - The `DATABASESIZE` value is reported in bytes.
    - In this example:
      - The Release database size is approximately **346 MB**.
      - The JCR database size is approximately **3 GB**.
    - These values are from a test server with limited content. Production environments typically have much larger databases.
